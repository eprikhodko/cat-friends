
import './App.css';
import Header from "./Header"
import contactsData from "./contactsData"
import ContactCard from "./ContactCard"
import React, {useState} from 'react'


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
    const [ isLoading ] = useState(false)
  
    const contactComponents = contactsData.map(contact => <ContactCard key={contact.id} contactInfo={contact}/>)

    return (
    <div className="App">

      <Header />

      {isLoading ? 
      <h2 style={{textAlign: "center", fontSize: "2em"}}>Loading...</h2> : 
      <div className="contact-components">
       {contactComponents}
      </div>
      }

    </div>
  );
  
}

export default App;
