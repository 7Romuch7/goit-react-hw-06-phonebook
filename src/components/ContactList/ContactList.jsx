import { connect } from "react-redux";
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={styles.listContacts}>
    {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
          <ContactListItem
            id={id}  
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
            />
        </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func,
};

const filteredName = ( contacts, filter ) => {

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

const mapStateToProps = state => {
  return {
    contacts: filteredName(state.contacts.items, state.contacts.filter)
  }
}

const mapDispatchToProps = dispatch => ({
  onRemoveContact: (id) => dispatch(phonebookActions.removeContact(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);