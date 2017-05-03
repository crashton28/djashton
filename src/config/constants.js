import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCjbtBjjJPmXOqe5FrQNsyRasSnFFEUyRw",
    authDomain: "ashton-portfolio.firebaseapp.com",
    databaseURL: "https://ashton-portfolio.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth