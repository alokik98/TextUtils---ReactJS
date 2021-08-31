import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
    
    const handleToUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    
    const handleToLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    
    const deleteText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    
    const handleCopy = () => {
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    
    const [text, setText] = useState("");
    
    return (
        <>
            <div className="container" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea value={text} onChange={handleChange} className="form-control" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} id="myText" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} onClick={handleToUpCase} className="btn btn-primary mx-2 my-2">Convert to UpperCase</button>
                <button disabled={text.length===0} onClick={handleToLoCase} className="btn btn-primary mx-2 my-2">Convert to LowerCase</button>
                <button disabled={text.length===0} onClick={deleteText} className="btn btn-primary mx-2 my-2">Clear Text</button>
                <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
                <button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Text</button>
                
            </div>
            <div className="container mt-3" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>You can read the text in {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes.</p>
                <h2>Preview</h2>
                <p>{text.length===0?'Nothing to preview':text}</p>
            </div>
        </>
    )
}
