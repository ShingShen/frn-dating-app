## Create Project
npx create-react-app project-name

## Start Project on server
npm start

## Install Material-UI
npm install  @material-ui/core

## Install Material Icons
npm install @material-ui/icons

## Install React Router
npm install react-router-dom

## Install React Tinder Card
npm i react-tinder-card

## src/firebase.js
```
import firebase from "firebase";

const firebaseConfig = {
copy the Config from the project in Firebase
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
```
## Install Firebase
npm i firebase 

## Deploy to Firebase

```
firebase login
```
Allow Firebase to collect CLI usage and error reporting information? Yes
```
firebase init
```
Are you ready to proceed? Y
 Hosting: Configure and deploy Firebase Hosting sites
 Use an existing project
 Select a default Firebase project for this directory: 
What do you want to use as your public directory? build
Configure as a single-page app (rewrite all urls to /index.html)? Y
Set up automatic builds and deploys with GitHub? N
```
npm run build
```
```
firebase deploy
```
Hosting URL: https://tinder-clone-8bfa2.web.app