//Un componente è una funzione che ritorna un template jsx.
//I componenti sono dei tag custom, pertanto html ci dà
//già una linea guida su come costruire un componente.

const Header = (props) => {
//props è un oggetto che contiene tutti gli attributi
//che vengono passati sul tag del componente.

    const name = props.name || "App";
    const links = props.links || [{ link: "", label: "" }];
    //assegnazioni default in caso props non sia inizializzato
    //così non genera contenuto utile ma evita errori e che si
    //rompa l'app. Così si può togliere anche props dal return 
    //sotto nei nomi degli attributi (props.name, props.links).

    return (
        <header>
            <h1>{name}</h1>
            <nav>
                <ul>
                    {links.map((item, index) => (
                        <li key={index}> 
                            {/*a livello di performance react ha
                            bisogno di un id quando si itera una
                            sequenza di elementi per distinguerli 
                            meglio. Visivamente non cambia niente
                            se non far sparire l'errore in console.
                            Ovviamente la key va messa nel tag più
                            alto dell'elemento ripetuto.*/}
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
//l'export default esporta un solo modulo e senza un nome 
//(il modulo esportato può poi essere importato anche con 
//un nome diverso. Es. nomi ripetuti). In questo caso si 
//può usare anche l'export nominale ma il lazy loading
//richiede l'export default.

//Il nome di un modulo esportato col default può essere
//cambiato in ogni momento, mentre il nome di un modulo
//esportato tra parentesi graffe può essere cambiato con
//export modulo "as" nuovonome.