// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxpEAZdS4HaKuT9TDm2f0_1wUJJAGiIMc",
  authDomain: "formulario-de-registros--react.firebaseapp.com",
  projectId: "formulario-de-registros--react",
  storageBucket: "formulario-de-registros--react.appspot.com",
  messagingSenderId: "423154914911",
  appId: "1:423154914911:web:4fdab040e4823e2f542dea",
  measurementId: "G-EL0M3M4BRS",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export default db;
