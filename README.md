# Contact List:

## Requirements:

Build four components:

1. A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
1. A Contact component that displays a person's name, phone number, and address.
1. A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
1. A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
1. In main.js, import the ContactList component and the ContactForm component.
  * The user should see the contact form at the top of the view, and the list of contacts underneath it.

## Currently Working On:

  * Saves new contacts

## Remaining Features:

* Contact form
  * when submitted, adds a new contact to storage
    * should import the ContactCollection component
* Import ContactList and ContactForm into main.js (browserify)

## Stretch Goals:

1. Bonus: Are there any other modules that could be made? Do any modules have more than one possible responsibility? Perhaps something that is a general utility function.


## Completed Features:

* Contact list
  * displays all contacts by importing the collection of contact components
* ContactCollection (database)
  * Loads existing contacts from storage
* Web app should show contact form at the top of the page and display the list of contacts underneath the form
* Contact (entity, see data structure)


## Data Structure:

* Contact
  * auto-generated identifier
  * name
  * phone number
  * address
