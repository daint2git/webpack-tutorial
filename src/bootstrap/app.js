import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <a className="navbar-brand">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;