//ESERCIZIO: BASE
//modale che si scatena ogni volta che un messaggio viene creato/eliminato, con
//due prop che passano il messaggio e il colore della modale es. azzurro, rosso.
//opzionale: fare pure l'animazione.

import styles from "./Modal.module.scss";

const Modal = (props) => (
    <p className={styles.Modal} style={{ backgroundColor: props.color, top: props.top }}>{props.message}</p>
)

export default Modal;