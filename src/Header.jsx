import React from "react"
import react_logo from "./assets/react.svg"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={react_logo} className="header-logo" alt="react logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4 className="react--logo_text">React Course - Project 1</h4>
        </header>
    )
}