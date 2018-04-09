import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CounterAction from '../actions/CounterAction';
import CounterConponent from '../components/CounterConponent';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {dispatch, num} = this.props;
        return (
            <div>
                <div>
                    <span>
                        {num}
                    </span>
                </div>
                <CounterConponent num={num}
                                  mod={num => dispatch(CounterAction.modification(num))}
                                  add={num => dispatch(CounterAction.increase(num))}
                                  del={num => dispatch(CounterAction.decrease(num))}/>


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        num: state.CounterReducer
    }
}

function mapDispatchToProps(dispatch) {
    console.log(dispatch);
    return {
        // actions: bindActionCreators(CounterAction, dispatch)
    }
}

const Apps = connect(mapStateToProps)(App);
export default Apps;
