import './App.css';
import { useState, Suspense, lazy } from 'react';

import Header from './components/Header/index.jsx';
import NewPost from './pages/NewPost';
import Footer from './components/Footer/index.jsx';
//viene risolto in quattro modi:
//- ha trovato ./components/Footer.js
//- ha trovato ./components/Footer.jsx
//- ha trovato ./components/Footer/index.js
//- ha trovato ./components/Footer/index.jsx
//scrivere un componente in js o jsx non cambia nulla
//a livello di funzionalità, ma scrivere jsx lo rende
//riconoscibile e distinguibile dalla logica ad occhio

import { Routes, Route } from "react-router-dom"; 
//libreria per creare route lato client (come avevamo fatto con #)
//il resto si importa sull'index.js principale che racchiude l'app.

//CODE SPLITTING IN CHUNK E (LAZY) LOADING DINAMICO CON SUSPENCE
import Loading from "./components/Loading";
//mentre le pagine caricano viene mostrato il componente Loading.
//il lazy loading permette all'utente di scaricare solo le parti di sito
//che gli servono man mano che gli servono.
//il caricamento dei componenti viene diviso in chunks tramite i metodi
//di react Suspense e lazy che li gestiscono come fossero una promise.
//lazy è un'utility di react che wrappa i componenti, mentre la funzione
//import() è uno standard. (ottimizzazione con split dinamico)
const Home = lazy(() => import("./pages/Home/index.jsx"));
const Messages = lazy(() => import("./pages/Messages"));
const Friends = lazy(() => import("./pages/Friends"));
const Login = lazy(() => import(/* webPackChunkName: "home" */'./pages/Login'));
//per dare un nome ai chunk senza fare eject e modificare direttamente webpack.
//la cartella webpack è nascosta di default in react e per lavorarci bisogna prima
//usare il comando eject che è irreversibile.

//USEREDUCER
// import { useReducer } from 'react';
// const INIT_STATE = {
//   name: "Feisbrut",
//   nav: [
//     // { link: "/new-post", label: "Create new post"},
//     { link: "/social-app", label: "Home"},
//     { link: "/friends", label: "Friends"},
//     { link: "/messages", label: "Messages"},
//   ], 
//   friendsPreview: []
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "change-name":
//       return { ...state, name: "Feisbell" }; 
//       //creo un nuovo state col nome cambiato
//     default:
//       return state;
//       //ritorno lo stato per com'era
//   }
// };

const nav = [
  { link: "/social-app", label: "Home"},
  { link: "/friends", label: "Friends"},
  { link: "/messages", label: "Messages"},
  { link: "/login", label: "Login"}
];

function App() {
  // const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //useReducer è come useState ma esplicito
  //il dispatch fa partire l'evento
  //il reducer è come se fosse un event listener
  //e contiene la logica per cambiare lo stato
  //lo stato contiene i dati da visualizzare

  //l'event listener su react non funziona perché non c'è il DOM
  //c'è un hook di react chiamato useRef che permette di lavorare
  //con un riferimento dentro al DOM per poterlo manipolare.

  // const siteName = "Feisbrut";
  
  const [siteName, setSiteName] = useState("Feisbrut");

  return (
    <div>
      <Header name={siteName} links={nav}/>

      {/* <button onClick={() => dispatch({type:"change-name"})}>Cambia nome</button> */}
      {/* esempio bottone che cambia titolo alla pagina con useReducer */}
      
      <Routes>
        <Route path="/social-app" element={ <Suspense fallback={<Loading/>}><Home/></Suspense> }/>
        <Route path="/new-post" element={ <Suspense fallback={<Loading/>}><NewPost/></Suspense> }/>
        <Route path="/messages" element={ <Suspense fallback={<Loading/>}><Messages/></Suspense> }/>
        <Route path="/friends" element={ <Suspense fallback={<Loading/>}><Friends/></Suspense> }/>
        <Route path="/login" element={ <Suspense fallback={<Loading/>}><Login setSiteName={setSiteName}/></Suspense> }/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
