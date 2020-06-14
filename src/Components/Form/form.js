import React from 'react'
import './form.css'
import Button from '../Button/button'
let clickbutton = () => {
    return(
        <div></div>
    )
}


const Form = () => {
    return(
        <div className ='div_form'>
            <div>
                <form className = 'form'>
                    <p>First Name</p><input/>
                    <p>Last Name</p><input/>
                    <p>Age</p><input/>
                    <p>Phone</p><input/>
                    <br/>
                    <Button name ='Add' type = 'button' onClick = {clickbutton} className = 'form_button'/> 
                    <br/>
                    <Button type = 'reset' name ='Reset'/>
                    <Button name = 'Text' />
                </form>
            </div>
        </div>
    )
}

export default Form;