import React, { Component } from 'react'
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            burgerOpened: false
        }
    }
    handleToggle = () => {
        this.setState({
            burgerOpened: !this.state.burgerOpened
        })
    }

    render() {
        let burgerOpened = this.state.burgerOpened;
        return (
            <nav className="navbar">
                    <div className="logoAndBurger">
                        <li>
                            <Link className="logo-name" to="/">Loes</Link>
                        </li>
                        <button type="button" className="burger" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={burgerOpened ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <a className={window.screen.width > 768 ? "nav-link btnContact" : "nav-link"} href="mailto:lauraochoae7@gmail.com">Contact</a>
                        </li>
                    </ul>

            </nav>
        )
    }
}
