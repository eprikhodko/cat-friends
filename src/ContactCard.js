import React from "react"

function ContactCard(props) {
    return(
        <div className="contact-card grow">
            <img className="contact-card-image" src={props.contactInfo.imgUrl} alt="kitten"/>
            <h3>{props.contactInfo.name}</h3>
            <p>Phone: {props.contactInfo.phone}</p>
            <p>Email: {props.contactInfo.email}</p>
        </div>
    )
}

export default ContactCard