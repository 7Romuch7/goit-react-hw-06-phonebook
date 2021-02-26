import { Component } from 'react';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';


class App extends Component {

  render() {
    return (
      <div className="container" >
        <Title title='Phonebook'/>
        <ContactForm />
        <Filter />
        <ContactList />
     </div>
    )
  }
}

export default App;
