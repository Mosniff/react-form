# React Form

To run on local machine, clone this repo and run `npm run build`.

Once app is built, run `npm start` and the app should be viewable on [http://localhost:3000](http://localhost:3000).

To run the test suite, run `npm run test`.

## Background

This app was built using [Create React App](https://github.com/facebook/create-react-app). It utilises React with Typescript, and primarily uses Tailwind utility classes for styling.


The "User" page of the form asks a user for `name`, `role`, `email` and `password`. 

Entering text into one of these input fields will display the requirements for that field. These requirements will be hidden when the value of said input passes these validations.

The submit button will progress the user to the next page of the form if all requirements are met for these fields.


The "Privacy" page of the form presents the user with two checkboxes to indicate their marketing communication preferences.

The submit button will progress the user to the final page of the form.


The "Done" page displays a message to the user and console.logs the form data delivered on the "User" page along with the marketing preferences as chosen on the "Privacy" page.


Refreshing the page will send a user back to the start with blank data.
