import React from 'react';
import {Link} from 'react-router-dom';

class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, children} = this.props;
        return (
            <div>
                <header>
                    <h1>{title}</h1>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Link to='/'>主页</Link>
                </footer>
            </div>
        );
    }
}

export default HomeLayout;