import styles from "./Footer.module.scss";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}> 
        {/*assegno una class con un bind per
         importare il modulo css.
         Scrivendo in questo modo anziché solo
         className="footer", webpack genera un
         hash unico nel nome della classe in 
         quella sezione della pagina. Le classi
         così create sono univoche e ciò evita
         errori o conflitti nel caso di nomi di
         classi ripetuti. Un po' come gli id*/}
            <hr />
            <p>Copyright FB {year}</p>
        </footer>
    );
};

export default Footer;