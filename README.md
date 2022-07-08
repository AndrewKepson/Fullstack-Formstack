# Fullstack Formstack

Fullstack Formstack is a project built to demonstrate how to interact with Formstack via its APIs to display, manage, and create Forms & Documents.

## Technologies

1.  React - The front end of the application is built with React using Vite. Styling is done with CSS, including scoped CSS modules at the component level.

2.  Node - The application uses a Node backend to manage some functionality, including authenticating the user and accessing data from the Formstack API. Additionally, some functionalities utilize server side rendering with Node to generate PDF files from Form data.

3.  Formstack API

4.  Formstack Documents (Webmerge) API

## Styling

This application is styled using CSS, including widespread use of block-scoped CSS modules to prevent naming collissions and class clashes. The theme is based on Formstack brand colors and utilizes some existing front end styles from the website, while taking liberties to give it an application UX.

## Running the Application

```
cd server && npm run dev
```

## Environment Variables

This application requires several environmental variables to authenticate and retrieve data from the APIs it uses (Formstack, Weberge/Documents, and eventually EnsureSign/Sign):

1. DOCUMENTS_API_ENDPOINT=https://www.webmerge.me/api/documents
2. DOCUMENTS_API_KEY=
3. DOCUMENTS_API_SECRET=
4. FORMSTACK_API_ENDPOINT=https://www.formstack.com/api/v2
5. FORMSTACK_API_AUTH=/oauth2/authorize?client_id={FORMSTACK_API_CLIENT_ID}&redirect_uri=/forms/authorization&response_type=code
6. FORMSTACK_API_TOKEN=/oauth2/token
7. FORMSTACK_API_CLIENT_ID=
8. FORMSTACK_API_CLIENT_SECRET=

## Authentication

The user logs in using their Formstack account to grant access to their Forms data via the Formstack API. At this stage, credentials for the Documents API are hard-coded as environment variables, though the client side will not allow the user to view the data without being authenticated. Eventually it would be ideal to log users into both APIs. When the user logs in, the client will retrieve the necessary variables from the server and use them to authenticate requests.

### The Sign API

At this point, the Sign API has not yet beein integrated into this application, though routes and pages have been set up to prepare for this addition.
