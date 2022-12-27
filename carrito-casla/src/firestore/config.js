import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHkpxq-395vf2Wv8rTjhcpkl74xuuA8Zk",
  authDomain: "carrito-casla.firebaseapp.com",
  projectId: "carrito-casla",
  storageBucket: "carrito-casla.appspot.com",
  messagingSenderId: "557548188283",
  appId: "1:557548188283:web:e2dbfe630bfeccab3ce8de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}
