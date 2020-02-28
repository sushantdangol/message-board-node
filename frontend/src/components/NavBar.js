import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Message Board</a>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Login <span className="sr-only">(current)</span></a>
                        </li>
                        </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;