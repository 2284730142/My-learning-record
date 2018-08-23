import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent, Sort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent } from 'rxjs/index';
import { debounceTime, distinctUntilChanged } from "rxjs/internal/operators";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: [ './tables.component.css' ]
})
export class TablesComponent implements OnInit {

  emailsDataSource = new MatTableDataSource<any>();

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild('filter') filter: ElementRef;

  currentPage: PageEvent;
  currentSort: Sort;
  currentFilterData: string;

  totalCount = 0;

  constructor( private httpClient: HttpClient ) {
  }

  ngOnInit() {
    // 前端分页
    /*this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1').subscribe(data => {
      this.totalCount = data.items.length;
      this.emailsDataSource.data = data.items;
      this.emailsDataSource.paginator = this.paginator;
      console.log(data);
    }); */

    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    /*// 后端分页
    this.getIssues(0, 10);
    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe(( page: PageEvent ) => {
      this.getIssues(page.pageIndex, page.pageSize);
    });*/

    // 后端排序+分页
    this.getIssuees();

    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe(( page: PageEvent ) => {
      this.currentPage = page;
      this.getIssuees();
    });

    // 前端筛选
    /*Observable.create(fromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.emailsDataSource.filter = (this.filter.nativeElement as HTMLInputElement).value;
    }));

    this.emailsDataSource.filterPredicate = ( data: any, filter: string ): boolean => {
      return data.title.indexOf(filter) !== -1;
    };*/

    // 后端筛选
    Observable.create(fromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((filterData: string) => {
      // 準備要提供給API的filter資料
      this.currentFilterData = filterData;
      this.getIssuees();
      // 後端篩選就不需要指定filter了
      // this.emailsDataSource.filter = (this.filter.nativeElement as HTMLInputElement).value;
    }));
  }

  changeSort( sortInfo: Sort ) {
    // 因為API排序欄位是created，因此在這邊做調整
    if ( sortInfo.active === 'created_at' ) {
      sortInfo.active = 'created';
    }
    this.currentSort = sortInfo;
    this.getIssuees();
  }

  getIssues( pageIndex, pageSize ) {
    this.httpClient
      .get<any>(`https://api.github.com/search/issues?q=repo:angular/material2&page=${pageIndex + 1}&per_page=${pageSize}`)
      .subscribe(data => {
        this.totalCount = data.total_count;
        this.emailsDataSource.data = data.items;
        // 設定使用前端資料排序
        this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }

  getIssuees() {
    const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    if ( this.currentSort.direction ) {
      targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    }
    this.httpClient
      .get<any>(targetUrl)
      .subscribe(data => {
        this.totalCount = data.total_count;
        this.emailsDataSource.data = data.items;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }
}
