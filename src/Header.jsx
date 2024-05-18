import React from "react"
import react_logo from "./assets/react.svg"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={react_logo} className="nav-logo" alt="react logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}