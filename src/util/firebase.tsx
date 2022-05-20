// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCT0GEw-HY28IOLkg2R7gE4iliS7Mg3Uqc',
  authDomain: 'todolistreact-8f8ba.firebaseapp.com',
  projectId: 'todolistreact-8f8ba',
  storageBucket: 'todolistreact-8f8ba.appspot.com',
  messagingSenderId: '713180199347',
  appId: '1:713180199347:web:e82d593efd52ec6a1f33c6',
  measurementId: 'G-YNPBEX4XYZ',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
