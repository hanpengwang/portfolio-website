import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <header id="header">
                {/* NAV MENU */}
                <nav>
                    <ul>
                        <li>
                            <a href="#/home" />
                        </li>
                        <li>
                            <a href="#/resume" />
                        </li>
                        <li>
                            <a href="#/portfolio" />
                        </li>
                        <li>
                            <a href="#/contact" />
                        </li>
                    </ul>
                </nav>
                {/* NAV MENU */}
            </header>
        );
    }
}



export default Nav;
