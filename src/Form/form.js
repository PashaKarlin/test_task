import React from 'react'
import './form.css'

let Form = () => {
    return(
        <div className ='div_form'>
            <form className = 'form'>
                <p>First Name</p><input/>
                <p>Last Name</p><input/>
                <p>Age</p><input/>
                <p>Phone</p><input/>
            </form>
        </div>
    )
}

export default Form;