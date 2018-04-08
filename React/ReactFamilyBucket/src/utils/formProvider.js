import React from 'react';

/*
*   formProvider接收一个fields参数，并返回一个函数，这个函数接收一个组件作为参数并返回一个组件，所以它的用法是这样的：
    UserAdd = formProvider(fields)(UserAdd);
    经过formProvider处理后的UserAdd组件会得到额外的props:
        form
        formValid
        onFormChange
* */

function formProvider(fields) {
    return function (Comp) {

        const initialFormState = {};
        for (const key in fields) {
            initialFormState[key] = {
                value: fields[key].defaultValue,
                error: ''
            };
        }

        class FormCompontent extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    form: initialFormState,
                    formValid: false
                };

                this.handleValueChange = this.handleValueChange.bind(this);

                this.setFormValues = this.setFormValues.bind(this);
            }

            setFormValues(values) {
                if (!values) {
                    return;
                }

                const {form} = this.state;
                let newForm = {...form};
                for (const field in form) {
                    if (form.hasOwnProperty(field)) {
                        if (typeof values[field] !== 'undefined') {
                            newForm[field] = {...newForm[field], value: values[field]};
                        }
                        // 正常情况下主动设置的每个字段一定是有效的
                        newForm[field].valid = true;
                    }
                }

                this.setState({form: newForm});
            }

            handleValueChange(fieldName, value) {
                const {form} = this.state;
                const newFieldState = {value, valid: true, error: ''};
                const fieldRules = fields[fieldName].rules;

                for (let i = 0; i < fieldRules.length; i++) {
                    const {pattern, error} = fieldRules[i];
                    let valid = false;
                    if (typeof pattern == 'function') {
                        valid = pattern(value);
                    } else {
                        valid = pattern.test(value);
                    }

                    if (!valid) {
                        newFieldState.valid = false;
                        newFieldState.error = error;
                        break;
                    }
                }
                // reset参数式的写法比原来的写法更加便捷易懂
                const newForm = {...form, [fieldName]: newFieldState};
                const formValid = Object.values(newForm).every(f => f.valid);

                this.setState({
                    form: newForm,
                    formValid
                });

            }

            render() {
                const {form, formValid} = this.state;
                return (
                    <Comp {...this.props} form={form} formValid={formValid} onFormChange={this.handleValueChange}
                          setFormValues={this.setFormValues}/>
                );
            }
        }

        return FormCompontent;
    }
}

export default formProvider;