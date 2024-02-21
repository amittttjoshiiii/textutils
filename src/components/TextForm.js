import React, { useState } from 'react';

export default function TextForm(props) {
 const handleUpperClick = () => {
  let newtext = text.toUpperCase();
  setText(newtext)
  props.showalrt("Changed to uppercase","success")
 }
 const handleOnChange = (event) => {
  setText(event.target.value)
 }
 const [text, setText] = useState('enter text here');

 return (
  <>
  <div className="container ">
  <div>
   <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.text}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
   </div>
   <button className="btn btn-primary" onClick={handleUpperClick}>convert to uppercase</button>
  </div>
  <div className="scotainer" style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>your Text Summary</h1>
   <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
  </div>
  </div>
  </>
 );
}
