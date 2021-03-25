
import './App.css';
import Header from "./Header"
import contactsData from "./contactsData"
import ContactCard from "./ContactCard"


function App() {

  const contactComponents = contactsData.map(contact => <ContactCard key={contact.id} contactInfo={contact}/>)

  return (
    <div className="App">

      <Header />
      <div className="contact-components">
       {contactComponents}
      </div>
      

    </div>
  );
}

export default App;
