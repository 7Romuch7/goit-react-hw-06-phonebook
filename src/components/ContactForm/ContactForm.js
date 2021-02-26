import { Component } from 'react';
import { connect } from "react-redux";
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import shortid from 'shortid';
import styles from './ContactForm.module.css';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    error: false
  };
    
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
    
  handleChange = ({currentTarget}) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };
    
  handleSubmit = event => {
      event.preventDefault();

      const double = this.props.contacts.items.filter(
        contact => contact.name === event.target.elements[0].value,
    );

    if (double.length) {
      this.setState({ error: !this.state.error });
      return setTimeout(() => {
        this.setState({
          error: false,
        });
      }, 2500);
    }
      this.clear();
    this.props.onSubmit(this.state.name, this.state.number);
  }
  
    
  clear = () => {
    this.setState({name: '', number: ''})
  }
    
  render() {
    const { name, error } = this.state;
    return (
      <div className={styles.containerForm}>
        <CSSTransition
          in={error && Boolean(name)}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <Notification name={name} />
        </CSSTransition>
          <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.labelForm} htmlFor={this.nameInputId}>
                    Name
                    <input className={styles.inputForm}
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder=""
                        id={this.nameInputId}
                        onChange={this.handleChange}
                    />
                </label>
                <label className={styles.labelForm} htmlFor={this.numberInputId}>
                    Number
                    <input className={styles.inputForm}
                        type="number"
                        name="number"
                        value={this.state.number}
                        placeholder=""
                        id={this.numberInputId}
                        onChange={this.handleChange}
                    />
                </label>

            <button className={styles.btnForm} type="submit">Add contact</button>
          </form>
      </div>
    )}
}

const mapStateToProps = state => ({ contacts: state.contacts});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => { dispatch(phonebookActions.addContact(name, number)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);