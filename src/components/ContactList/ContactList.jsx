import { connect } from "react-redux";
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <CSSTransition in={contacts.length > 0} classNames={styles.contactsFilter} timeout={250} unmountOnExit>
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
    </CSSTransition>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func,
};

const getVisibleContacts  = ( allContacts, filter ) => {

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );
  };

const mapStateToProps = ({contacts: {items, filter}}) => {
  return {
    contacts: getVisibleContacts(items, filter)
  }
}

const mapDispatchToProps = dispatch => ({
  onRemoveContact: (id) => dispatch(phonebookActions.removeContact(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);