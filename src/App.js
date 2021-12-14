import './App.css';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
//viene risolto in quattro modi:
//- ha trovato ./components/Footer.js
//- ha trovato ./components/Footer.jsx
//- ha trovato ./components/Footer/index.js
//- ha trovato ./components/Footer/index.jsx

//scrivere un componente in js o jsx non cambia nulla
//a livello di funzionalità, ma scrivere jsx lo rende
//riconoscibile e distinguibile dalla logica ad occhio

function App() {
  const name = "Feisbrut";
  const nav = [
    { link: "/home", label: "Home"},
    { link: "/friends", label: "Friends"},
    { link: "/messages", label: "Messages"},
];

  return (
    <div>
      <Header name={name} links={nav}/>
      <p>Lorem ipsum</p>
      <Footer/>
    </div>
  );
}

export default App;
