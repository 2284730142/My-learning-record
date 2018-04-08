import React from 'react';
import PropTypes from 'prop-types';
import FormItem from '../components/FormItem';
import formProvider from '../utils/formProvider';

class BookEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    componentWillMount() {
        const {editTarget, setFormValues} = this.props;
        if (editTarget) {
            setFormValues(editTarget);
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const {form: {name, price, owner_id}, formValid, editTarget} = this.props;

        if (!formValid) {
            alert('请填写正确的信息后重试');
            return;
        }

        let editType = '添加';
        let apiUrl = 'http://localhost:3000/book';
        let method = 'post';
        if (editTarget) {
            editType = '编辑';
            apiUrl += '/' + editTarget.id;
            method = 'put';
        }

        fetch(apiUrl, {
            method,
            body: JSON.stringify({
                name: name.value,
                price: price.value,
                owner_id: parseInt(owner_id.value)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.id) {
                    alert(editType + '图书成功');
                    this.context.router.history.push('/book/list');
                    return;
                } else {
                    alert(editType + '失败');
                }
            })
            .catch((err) => console.error(err));
    }

    render() {
        const {form: {name, price, owner_id}, onFormChange} = this.props;
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <FormItem label="图书名字：" valid={name.valid} error={name.error}>
                    <input
                        type="text"
                        value={name.value}
                        onChange={(e) => onFormChange('name', e.target.value)}
                    />
                </FormItem>
                <FormItem label="图书价格：" valid={price.valid} error={price.error}>
                    <input
                        type="number"
                        value={price.value || ''}
                        onChange={(e) => onFormChange('price', +e.target.value)}
                    />
                </FormItem>
                <FormItem label="所属人员id：" valid={owner_id.valid} error={owner_id.error}>
                    <input
                        value={owner_id.value}
                        onChange={(e) => onFormChange('owner_id', e.target.value)}
                    />
                </FormItem>
                <br/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

BookEditor = formProvider({
    name: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return value.length > 0;
                },
                error: '请输入图书名字'
            }
        ]
    },
    price: {
        defaultValue: 0,
        rules: [
            {
                pattern: function (value) {
                    return value > 0;
                },
                error: '请输入大于0的价格'
            }
        ]
    },
    owner_id: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return value.length > 0;
                },
                error: '请输入拥有者id'
            }
        ]
    }
})(BookEditor);


export default BookEditor;