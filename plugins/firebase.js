import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAxRcSImSuuVv1RGhGZF1hwkMEAlvRpHyk',
  authDomain: 'forum-sample-e9d7b.firebaseapp.com',
  databaseURL: 'https://forum-sample-e9d7b.firebaseio.com',
  projectId: 'forum-sample-e9d7b',
  storageBucket: 'forum-sample-e9d7b.appspot.com',
  messagingSenderId: '557842773662',
  appId: '1:557842773662:web:64005294e88cecd8992d8f',
  measurementId: 'G-G2ZRE2Z7TX',
}
firebase.initializeApp(firebaseConfig)

export default firebase
