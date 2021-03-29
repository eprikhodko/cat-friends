import React, {useState} from "react"

function Form() {
    
    const [inputData, setInputData] = useState({
        name: "",
        email: ""
    })

    const [contactsData, setContactsData] = useState([])

    function handleChange(event) {
        
    }

    function handleSubmit(event) {

    }

        return (
            <div className="container-form">
                <form className="form">
                    <input 
                        type="text" 
                        value={inputData.name}
                        name="name" 
                        placeholder="Name" 
                        onChange={handleChange} 
                    />

                    <input 
                        type="email"
                        value={inputData.email} 
                        name="email" 
                        placeholder="email" 
                        onChange={handleChange} 
                    />
                    <button>Add cat</button>
                </form>
            </div>
        )
    }

export default Form