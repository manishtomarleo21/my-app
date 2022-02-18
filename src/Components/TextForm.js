import React, {useState} from 'react'
//the way of using hooks in react 
//basically to get state of component which means that if i write a text in textarea liek amnish or some line
//that line is state of the component which is totally differ than props as we set in and pass to render
//so to import hooks we use {useState }see above
// the default syntax is 
// const [count, setCount] = useState(0) //alwasy get used insidfe the function


export default function TextForm(props) {
    const [text, setText] = useState("Enter the Text")
    //text is the current value which is used in value in textarea as{text}
    // text = "this is wrong way to update text" //Wrong way to udapte
    // setText("New Text") //correct way to update the text

    const handleUpClick = ()=>{
        console.log('Upper case clicked')
        // setText("You handled tge upclick")
        //as you can see new value has been saved to text
        // so upper case
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success", "The text has been converted to upper case.")
    }
    const handleLowClick = ()=>{
        console.log('Lower case clicked')
        // setText("You handled tge upclick")
        //as you can see new value has been saved to text
        // so upper case
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("success", "The text has been converteed to lower case.")
    }
    const handleOnChange = (event)=>{
        console.log('On change mathod')
        //as per this i wont be able to type in input or text area to overcome that we parse e or event in function
        //coz value is text in the area and only can update by set text so we target valuse and pass it to setText
        setText(event.target.value);
    }

    const copyToClipboard = ()=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("success", "Text has been copied to clipboard.")

    }

    const darkTheme = ()=>{
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white'
    }
    const lightTheme = ()=>{
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black'
    }

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Type Below for effects:</label>
                <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'?'#04192c':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button  disabled={text.length===0?true:false} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Submit for UpperCase</button>
            <button  disabled={text.length===0?true:false} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Submit for LowerCase</button>
            <button  disabled={text.length===0?true:false} className="btn btn-primary mx-2 my-1" onClick={darkTheme}>Dark Theme</button>
            <button  disabled={text.length===0?true:false} className="btn btn-primary mx-2 my-1" onClick={lightTheme}>Light Theme</button>
            <button  disabled={text.length===0?true:false} className="btn btn-primary mx-2 my-1" onClick={copyToClipboard}>Clipboard Copy</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            {/* <p> {text.split(' ').length} words and {text.length} charcters</p> */}
            <p> {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} charcters</p>
            {/* <p> {text === ''?text.split(' ').length = 0:text.split(' ').length} words and {text.length} charcters</p> */}
            <p> {0.008*text.split(' ').filter((element)=>{return element.length !==0}).length } Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview.'}</p>
        </div>
        </>
    )
}
