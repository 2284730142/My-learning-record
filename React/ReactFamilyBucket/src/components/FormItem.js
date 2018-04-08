import React from 'react';

class FormItem extends React.Component {
    render() {
        const {label, children, valid, error} = this.props;
        return (
            <div>
                <label>{label}</label>
                {children}
                <div>{!valid && <span>{error}</span>}</div>
            </div>
        );
    }
}

export default FormItem;