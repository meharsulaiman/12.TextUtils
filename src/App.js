import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import TextForm from "./Components/Textform/TextForm";
import "./App.css";

import About from "./Components/About/About";
import Alert from "./Components/Alert/Alert";

function App() {
    let exceptModeAlert = true;
    const meta = {
        title: "TextUtils",
        search: true,
        label: "Enter Your Text",
    };
    // dark light logic
    const [Mode, setMode] = useState("light");

    const toggleModeHandler = () => {
        exceptModeAlert = false;
        if (Mode === "light") {
            setMode("dark");
            document.querySelector("body").style.backgroundColor = "#181818";
            alertHandler("Dark mode has been enabled", "success");
            document.title = "TextUtils - Dark Mode";
        } else {
            setMode("light");
            document.querySelector("body").style.backgroundColor = "#fff";
            alertHandler("Light mode has been enabled", "success");
            document.title = "TextUtils - Light Mode";
        }
    };

    // Text mform state passed as props
    const [Text, setText] = useState("");

    // alert dismis logic
    const [alert, setAlert] = useState(null);

    const alertHandler = (msg, alertType) => {
        if (Text === "" && exceptModeAlert) {
            setAlert({
                message: "Operation Failed, Type Below",
                type: "warning",
            });
        } else {
            setAlert({ message: msg, type: alertType });
        }
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    return (
        <div className="App">
            <Router>
                <Header
                    title={meta.title}
                    search={meta.search}
                    mode={Mode}
                    togglemode={toggleModeHandler}
                />
                <Alert alert={alert} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <TextForm
                                    label={meta.label}
                                    mode={Mode}
                                    alertHandler={alertHandler}
                                    Text={Text}
                                    setText={setText}
                                />
                            </>
                        }
                    ></Route>
                    <Route
                        exact
                        path="/about"
                        element={<About mode={Mode} />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

/*







<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
