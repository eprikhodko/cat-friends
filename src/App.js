
import './App.css';
import Header from "./Header"
import contactsData from "./contactsData"
import ContactCard from "./ContactCard"
import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state={
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500);
  }

  render() {
    const contactComponents = contactsData.map(contact => <ContactCard key={contact.id} contactInfo={contact}/>)

    return (
    <div className="App">
      <Header />

      {this.state.isLoading ? 
      <h2 style={{textAlign: "center", fontSize: "2em"}}>Loading...</h2> : 
      <div className="contact-components">
       {contactComponents}
      </div>
      }

    </div>
  );
  }
}

export default App;
