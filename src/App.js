
import './App.css';
import Header from "./Header"
import contactsData from "./contactsData"
import ContactCard from "./ContactCard"
import React, {useState} from 'react'

import Form from "./Form"


function App() {
  // constructor() {
  //   super()
  //   this.state={
  //     isLoading: true
  //   }
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false
  //     })
  //   }, 1500);
  // }

// here we're set our state with useState Hook.
    const [areCatsVisible, showCats] = useState(false)
    
    const contactComponents = contactsData.map(contact => <ContactCard key={contact.id} contactInfo={contact}/>)

    const handleClick = () => {
      showCats(true)
    }

    return (
    <div className="App">

      <Header />
      <Form />

      {areCatsVisible ? 
      <div className="contact-components">
      {contactComponents}
     </div> :
      // <h2 style={{textAlign: "center", fontSize: "2em"}}>Loading...</h2>
      <button type="button" onClick={handleClick} style={{fontSize: "2em", marginTop: "20em"}}>Show Cats</button>
      
      }

    </div>
  );
  
}

export default App;
