// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIgqHCJXuDmf1t8LNn6I0D-YdvQSXPl5c',
  authDomain: 'adm-estofaria.firebaseapp.com',
  projectId: 'adm-estofaria',
  storageBucket: 'adm-estofaria.appspot.com',
  messagingSenderId: '634813364678',
  appId: '1:634813364678:web:aee3b7b98392e188429ac7'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// export const handleCreateAccount = (values: ISignInProps) => {
//   createUserWithEmailAndPassword(auth, values.email, values.password)
// }

// export const handleSignIn = (values: ISignInProps) => {
//   signInWithEmailAndPassword(auth, values.email, values.password)
// }

// export const logOut = () => {
//   signOut(auth)
// }
