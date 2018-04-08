import React from 'react';
import PropTypes from 'prop-types';
import FormItem from '../components/FormItem';
import formProvider from '../utils/formProvider';

class UserEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    // 重点！用来获取当前路由并跳转的参数，配合prop-types包使用
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    // UserEditor加载的时候检查是否存在props.editTarget，如果存在，使用props.setFormValues方法将editTarget的值设置到表单
    componentWillMount() {
        const {editTarget, setFormValues} = this.props;
        if (editTarget) {
            setFormValues(editTarget);
        }
    }

    handleSubmit(e) {
        // 阻止表单submit事件自动跳转页面的动作
        e.preventDefault();
        /*console.log(JSON.stringify(this.state));*/
        const {form: {name, age, gender}, formValid, editTarget} = this.props;

        // 对每个字段的valid进行检测，如果有一个valid为false则直接return以中断提交操作。
        /*if (!name.valid || !age.valid || !gender.valid) {
            alert('请填写正确的信息后重试');
            return;
        }*/
        if (!formValid) {
            alert('请填写正确的信息后重试');
            return;
        }

        let editType = '添加';
        let apiUrl = 'http://localhost:3000/user';
        let method = 'post';
        if (editTarget) {
            editType = '编辑';
            apiUrl += '/' + editTarget.id;
            method = 'put';
        }

        fetch(apiUrl, {
            method,
            // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
            body: JSON.stringify({
                name: name.value,
                age: age.value,
                gender: gender.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                // 当添加成功时，返回的json对象中应包含一个有效的id字段
                // 所以可以使用res.id来判断添加是否成功
                if (res.id) {
                    alert(editType + '用户成功');
                    // 页面跳转(reactrouter4.0配合prop-types包提供的方法)
                    this.context.router.history.push('/user/list');
                    return;
                } else {
                    alert(editType + '失败');
                }
            })
            .catch((err) => console.error(err));
    }

    render() {
        const {form: {name, age, gender}, onFormChange} = this.props;
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <FormItem label="用户名：" valid={name.valid} error={name.error}>
                    <input
                        type="text"
                        value={name.value}
                        onChange={(e) => onFormChange('name', e.target.value)}
                    />
                </FormItem>
                <FormItem label="年龄：" valid={age.valid} error={age.error}>
                    <input
                        type="number"
                        value={age.value || ''}
                        onChange={(e) => onFormChange('age', +e.target.value)}
                    />
                </FormItem>
                <FormItem label="性别：" valid={gender.valid} error={gender.error}>
                    <select
                        value={gender.value}
                        onChange={(e) => onFormChange('gender', e.target.value)}
                    >
                        <option value="">请选择</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                </FormItem>
                <br/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}


UserEditor = formProvider({
    name: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return value.length > 0;
                },
                error: '请输入用户名'
            },
            {
                pattern: /^.{1,4}$/,
                error: '用户名最多4个字符'
            }
        ]
    },
    age: {
        defaultValue: 0,
        rules: [
            {
                pattern: function (value) {
                    return value >= 1 && value <= 100;
                },
                error: '请输入1~100的年龄'
            }
        ]
    },
    gender: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return !!value;
                },
                error: '请选择性别'
            }
        ]
    }
})(UserEditor);

export default UserEditor;