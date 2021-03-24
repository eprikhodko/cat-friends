
// import './App.css';
import Header from "./Header"
import contactsData from "./contactsData"
import ContactCard from "./ContactCard"


function App() {

  const contactComponents = contactsData.map(contact => <ContactCard key={contact.id} name={contact.name} imgUrl={contact.imgUrl} phone={contact.phone} email={contact.email}/>)

  return (
    <div className="App">

      <Header />
      {contactComponents}

    </div>
  );
}

export default App;
