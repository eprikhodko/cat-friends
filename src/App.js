
// import './App.css';
import ContactCard from "./ContactCard"
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Header />

      <ContactCard 
        name="Mr. Whiskerson" 
        imgUrl="http://placekitten.com/300/200" 
        phone="(212) 555-1234" 
        email="mr.whiskaz@catnap.meow"
      />

      <ContactCard />
    </div>
  );
}

export default App;
