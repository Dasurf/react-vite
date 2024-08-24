import React, {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

function App() {
    const [darkMode, setDarkMode] = useState(true);

    function toggleBg() {
        setDarkMode(prevBg => !prevBg);
    }

    return (
        <div className="app-container">
            <Header darkMode={darkMode} toggleDarkMode={toggleBg}/>
            <Main darkMode={darkMode}/>
            <Footer />
        </div>
    )
}


export default App;
