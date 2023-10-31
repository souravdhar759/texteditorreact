import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
const handleupclick = ()=>{
    
    let newtext= text.toUpperCase();
    setText(newtext)
    props.showalert("Converted To Uppercase", "success");
}
const handlelwclick = ()=>{
    
    let newtext= text.toLowerCase();
    setText(newtext)
    props.showalert("Converted To Lowercase", "success");
}
const handleExtraSpaces= ()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))

  props.showalert("Converted To remove", "success");

}


    const handleonchange = (event)=>{
        console.log('onchange');
        setText(event.target.value)
}


 
  return (
    <>

    <div className="container " >
  <h1>{props.heading} </h1>
<div className="mb-3">
 
  <textarea className="form-control" id="mybox" rows="5" onChange={handleonchange} value={text} ></textarea>
  <button className="btn btn-primary my-3"  onClick={handleupclick} >Convert to UPERCASE </button>
  <button className="btn btn-primary mx-2"  onClick={handlelwclick} >Convert to lowercase </button>
  <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces} >Remove Extra Spaces </button> 
  
</div >
<h1 >Your Text Summary</h1>
<p >{text.split("").length} words and {text.length} Charecters</p>
<p>{0.008*text.split("").length} minutes read</p>
    </div>
    <h2 >Preview</h2>
    <p >{text}</p>
    </>
  )
}
