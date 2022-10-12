import React from "react";
import "./TextForm.css";

export default function TextForm(props) {
    // const [Text, setText] = useState("");

    const handlerUpClick = () => {
        let newText = props.Text.toUpperCase();
        props.setText(newText);
        props.alertHandler("Converted to Upper Case", "success");
    };
    const handlerLoClick = () => {
        let newText = props.Text.toLowerCase();
        props.setText(newText);
        props.alertHandler("Converted to Lower Case", "success");
    };
    const handlerClearClick = () => {
        let newText = "";
        props.setText(newText);
        props.alertHandler("Text has been cleared", "success");
    };
    const handlerCopyClick = () => {
        navigator.clipboard.writeText(props.Text);
        props.alertHandler("Text has been Copied", "success");
    };

    const handlerRemoveExtraClick = () => {
        let newText = props.Text.split(/[ ] +/);
        props.setText(newText.join(" "));
        props.alertHandler("Extra Spaces has been Removed", "success");
    };

    const speak = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = props.Text;
        window.speechSynthesis.speak(speech);
    };
    const pause = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = props.Text;
        window.speechSynthesis.pause(msg);
    };
    const resume = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = props.Text;
        window.speechSynthesis.resume();
    };
    const count = () => {
        if (props.Text.length > 0) {
            return props.Text.split(/\s+/).filter((T) => T.length !== 0).length;
            // return props.Text.split(" ").filter((T) => T.length !== 0).length;
            // return props.Text.trim().split(/[ ]+/).length;
            // return Text.trim().split(" ").length; both of them worked
        } else {
            return 0;
        }
    };
    const handlerOnChange = (event) => {
        props.setText(event.target.value);
    };

    return (
        <>
            <div
                className="container my-3"
                style={{
                    color: props.mode === "light" ? "black" : "white",
                }}
            >
                <div className="mb-3">
                    <h2>
                        <label htmlFor="inputBox" className="form-label">
                            {props.label}
                        </label>
                    </h2>
                    <textarea
                        className="form-control boxShadow  "
                        id="inputBox"
                        rows="8"
                        value={props.Text}
                        onChange={handlerOnChange}
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "#fff" : "#212529",
                            color: props.mode === "light" ? "black" : "white",
                        }}
                    ></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex">
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={handlerRemoveExtraClick}
                    >
                        Remove Extra Space
                    </button>
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={handlerUpClick}
                    >
                        Upper Case
                    </button>
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={handlerLoClick}
                    >
                        Lower Case
                    </button>
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={speak}
                    >
                        Speak
                    </button>
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={pause}
                    >
                        Pause
                    </button>
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={resume}
                    >
                        Resume
                    </button>
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={handlerClearClick}
                    >
                        Clear Text
                    </button>
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "danger" : "primary"
                        } mx-1`}
                        onClick={handlerCopyClick}
                    >
                        Copy Text
                    </button>
                </div>
            </div>
            <div
                className="container my-3 "
                style={{
                    color: props.mode === "light" ? "black" : "white",
                }}
            >
                <h2>Text Summary</h2>
                <div
                    className="py-3 px-3 border rounded  "
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "#fff" : "#212529",
                    }}
                >
                    <p>
                        <strong>{count()}</strong> words and{" "}
                        <strong>{props.Text.length}</strong> charecters
                    </p>
                    <p>
                        <strong>
                            {0.008 *
                                props.Text.split(" ").filter(
                                    (T) => T.length !== 0
                                ).length}
                        </strong>{" "}
                        Minutes to Read
                    </p>
                </div>
                <div className="my-3">
                    <h2>Preview</h2>
                    <textarea
                        className="form-control boxShadow  "
                        id="inputBox"
                        rows="8"
                        value={props.Text}
                        onChange={handlerOnChange}
                        readOnly
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "#fff" : "#212529",
                            color: props.mode === "light" ? "black" : "white",
                        }}
                    ></textarea>
                </div>
            </div>
        </>
    );
}
