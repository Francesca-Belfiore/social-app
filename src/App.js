import './App.css';
import Header from './components/Header/index.jsx';
import CreatePost from './components/CreatePost';
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

import Home from "./pages/Home/index.jsx";
import { useReducer } from 'react';


const INIT_STATE = {
  name: "Feisbrut",
  nav: [
    { link: "/new-post", label: "Create new post"},
    { link: "/social-app", label: "Home"},
    { link: "/friends", label: "Friends"},
    { link: "/messages", label: "Messages"},
  ], friendsPreview: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return { ...state, name: "Feisbell" }; 
      //creo un nuovo state col nome cambiato
    default:
      return state;
      //ritorno lo stato per com'era
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //useReducer è come useState ma esplicito
  //il dispatch fa partire l'evento
  //il reducer è come se fosse un event listener
  //e contiene la logica per cambiare lo stato
  //lo stato contiene i dati da visualizzare

  //l'event listener su react non funziona perché non c'è il DOM
  //c'è un hook di react chiamato useRef che permette di lavorare
  //con un riferimento dentro al DOM per poterlo manipolare.

  return (
    <div>
      <Header name={state.name} links={state.nav}/>

      <button onClick={() => dispatch({type:"change-name"})}>Cambia nome</button>
      {/* esempio bottone che cambia titolo alla pagina con useReducer */}
      
      <Routes>
        <Route path="/new-post" element={ <CreatePost/> }/>
        <Route path="/social-app" element={ <Home/> }/>
        <Route path="/messages" element={ <h3>Messages</h3> }/>
        <Route path="/friends" element={ <h3>Friends</h3> }/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
