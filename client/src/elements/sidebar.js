import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="wrapper">
                <ul className="sidebar navbar-nav">
                    <li className="nav-item">
                        <Link to={'/index'} className="nav-link"><i className="fas fa-fw fa-chart-area"></i>
                            <span>&nbsp;CRUD App</span></Link>
                    </li>
                </ul>
            </div>
        );
    }
}
