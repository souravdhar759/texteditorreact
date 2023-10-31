import React from 'react'

function Alert(props) {
    // const cap =(word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    
    
<div className={`alert position-absolute alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
  <strong> {props.alert.type}</strong>  {props.alert.message}
  {/* <strong> {cap(props.alert.type)}</strong> : {props.alert.message} */}
 
</div>
    
  )
}

export default Alert