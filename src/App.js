
import './App.css';
import Header from "./Header"
import contactsData from "./contactsData"
import ContactCard from "./ContactCard"
import React, {useState, useEffect} from 'react'

function App() {


// here we're set our state with useState Hook.
    const [areCatsVisible, showCats] = useState(false)
    // show cats after 1500ms
    useEffect(() => {
      setTimeout(() => {
        showCats(true)
      }, 1500)
    }, [])
    
    const contactComponents = contactsData.map(contact => <ContactCard key={contact.id} contactInfo={contact}/>)

    return (
    <div className="App">

      <Header />
    
      {/* Simple conditional rendering. If areCatsVisible state is true, then show cat cards! If not, show 'Loading...' */}
      {areCatsVisible ? 
      <div className="contact-components">
          {contactComponents}
     </div> :
      <h2 style={{textAlign: "center", fontSize: "2em"}}>Loading...</h2>
      }

    </div>
  );
  
}

export default App;
