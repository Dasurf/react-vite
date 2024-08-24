import React from "react"
import react_logo from "./assets/react.svg"

export default function Header(props) {
    return (
        <header
            className={props.darkMode ? "dark" : ""}
        >
            <div className="logo">
                <img src={react_logo} className="header-logo" alt="react logo" />
                <h3>ReactFacts</h3>
            </div>

            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </header>
    )
}