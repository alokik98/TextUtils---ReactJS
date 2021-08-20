import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
    
    const handleToUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const [text, setText] = useState("");
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea value={text} onChange={handleChange} className="form-control" id="myText" rows="8"></textarea>
            </div>
            <button onClick={handleToUpCase} className="btn btn-primary">Convert to UpperCase</button>
        </div>
    )
}
