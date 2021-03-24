import React from "react"

function ContactCard(props) {
    console.log(props.contact)
    return(
        <div className="contact-card">
            <img src={props.imgUrl} alt="kitten"/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard