import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
    
    const handleToUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleToLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const deleteText = () => {
        let newText = "";
        setText(newText);
    }
    
    const [text, setText] = useState("");
    
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea value={text} onChange={handleChange} className="form-control" id="myText" rows="8"></textarea>
                </div>
                <button onClick={handleToUpCase} className="btn btn-primary mx-2">Convert to UpperCase</button>
                <button onClick={handleToLoCase} className="btn btn-primary mx-2">Convert to LowerCase</button>
                <button onClick={deleteText} className="btn btn-primary mx-2">Clear Text</button>
                
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>You can read the text in {0.008 * text.split(" ").length} minutes.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
