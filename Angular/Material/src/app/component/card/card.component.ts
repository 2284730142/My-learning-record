import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {

  posts$ = [
    {
      userId: '001',
      title: 's2dfas4df45sad1f45sd1f',
      body: 'a56s1f65a4s1f56as1df54as1df541as54f1ads451f54asd1f45s1df54s1d5f41as54f1s54d1f45asa6g5rta65h165h'
    },
    {
      userId: '002',
      title: 's2dfas4df45sad1f45sd1fasd2as2das',
      body: 'a56s1f65a4s1f56as1df54as1df541as54f1ads451f54asd1f45s1df54s1d5f41as54f1s54d1f45ass56v1er61g5e1h54eh'
    },
    {
      userId: '003',
      title: 's2dfas4df45sad1f45sd1fs6d51f6a5s1df56sad',
      body: 'a56s1f65a4s1f56as1df54as1df541as54f1ads451f54asd1f45s1df54s1d5f41as54f1s54d1f45aasd52f65a1sdf561sa65f165asdfs'
    },
    {
      userId: '004',
      title: 's2dfas4df45sad1f45sd1fsd23f0a6sdf06sdfasd32fa6s5df6sda',
      body: 'a56s1f65a4s1f56as1df54as1df541as54f1ads451f54asd1f45s1d'
    },
    {
      userId: '005',
      title: 's2dfas4df45s',
      body: 'a56s1f65a4s1f56as1df54as1df541as54f1ads451f54asd1f45s1df54s1d5f41as54f1s54d1f45asasd2f5as2f652as06d5f6sa5df65s1daf56sda'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
