import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Header(props) {
    const styleObj = {
        fontFamily: "Permanent Marker",
    };

    return (
        <nav
            className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode}`}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={styleObj}>
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler boxShadow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link home"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link about" to="/About">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Features
                            </Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch mx-3 my-2">
                        <input
                            className={`form-check-input btn boxShadow btn-${
                                props.mode === "light" ? "danger" : "primary"
                            }`}
                            type="checkbox"
                            role="switch"
                            id="togglemode"
                            onClick={props.togglemode}
                        />
                        <label
                            className={`form-check-label text-${
                                props.mode === "light" ? "dark" : "light"
                            }`}
                            htmlFor="togglemode"
                        >
                            {props.mode === "light" ? "Dark" : "Light"} Mode
                        </label>
                    </div>
                    {props.search ? (
                        <form className="d-flex" role="search">
                            <input
                                className={`form-control bg-${
                                    props.mode === "dark" ? "dark" : "light"
                                } me-2 boxShadow `}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className={`btn btn-${
                                    props.mode === "light"
                                        ? "danger"
                                        : "primary"
                                }`}
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    ) : null}
                </div>
            </div>
        </nav>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    search: PropTypes.bool,
};

Header.defaultProps = {
    title: "Title",
};
