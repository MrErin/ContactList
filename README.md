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

* Styles

## Remaining Features:

## Stretch Goals:

## Completed Features:

* Contact form
  * Clear entry form on submit
  * when submitted, adds a new contact to storage
    * should import the ContactCollection component
* Import ContactList and ContactForm into main.js (browserify)
* Contact list
  * displays all contacts by importing the collection of contact components
* ContactCollection (database)
  * Loads existing contacts from storage
  * Saves new contacts
* Web app should show contact form at the top of the page and display the list of contacts underneath the form
* Contact (entity, see data structure)

## Data Structure:

* Contact
  * auto-generated identifier
  * name
  * phone number
  * address

## To run

1. Clone the repo.
2. From the command line, cd into the /src directory.
3. Type ```grunt``` into the command line.
4. Open a second terminal and cd into the /src directory.
5. Type ```hs -o``` into the command line.