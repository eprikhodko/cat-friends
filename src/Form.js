import React, {useState} from "react"
import ContactCard from "./ContactCard"

function Form() {
    
    const [inputData, setInputData] = useState({
        name: "",
        imgUrl: "http://placekitten.com/350/352",
        phone: "",
        email: ""
    })

    const [contactsData, setContactsData] = useState([])

    function handleChange(event) {
        //object destructuring 
        const {name, value} = event.target
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContacts => [...prevContacts, inputData])
    }


    // here we're rendering new ContactCard components using contactsData array, which consists of objects that we're creating through form. We're passing {contact} object as props to ContactCard component.
    const contactComponents = contactsData.map(contact => <ContactCard key={contact.name + contact.email} contactInfo={contact}/>)
    // this is a contacts array using for showing form data inside of h2 elements. For debugging purposes only.
    // const contacts = contactsData.map(contact => <h2 key={contact.name + contact.email}> {contact.name} {contact.imgUrl} </h2>)

        return (
            <div className="container-form">
                <form onSubmit={handleSubmit} className="form">
                    <input 
                        type="text" 
                        value={inputData.name}
                        name="name" 
                        placeholder="Name" 
                        onChange={handleChange} 
                    />

                    <input 
                        type="text"
                        value={inputData.imgUrl} 
                        name="imgUrl" 
                        placeholder="photo url" 
                        onChange={handleChange} 
                    />

                    <input 
                        type="tel"
                        value={inputData.phone} 
                        name="phone" 
                        placeholder="phone" 
                        onChange={handleChange} 
                    />

                    <input 
                        type="email"
                        value={inputData.email} 
                        name="email" 
                        placeholder="email" 
                        onChange={handleChange} 
                    />

                    <input 
                        type="text"
                        value={inputData.test} 
                        name="test" 
                        placeholder="test field for form" 
                        onChange={handleChange} 
                    />

                     
                    <button>Add cat</button>
                </form>


                <div className="contact-components">
                    {contactComponents}
                </div>

                {/* {contacts} */}
            </div>
        )
    }

export default Form