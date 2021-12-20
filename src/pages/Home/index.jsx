import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import FriendPreview from "../../components/FriendPreview";
import MessagePreview from "../../components/MessagePreview";
import Post from "../../components/Post";
import CreatePost from "../../components/CreatePost";
import { http } from "./../../libs/http.js";

const friends = [];

const messages = [];

const posts = [];

const Home = () => {

    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);
    const [friendsPreview, setFriendsPreview] = useState(friends);
    //è come scrivere const friendPreview = [];
    //ma più efficiente. Sarà una funzione monitorata
    //da react, di cui friendPreview è il getter.

    //Come buona abitudine se ho chiamato il getter 
    //friendsPreview chiamerò il setter setFriendsPreview.

    //GETTER -> const friendPreview = []
    //il getter costituisce il valore iniziale
    //SETTER -> firenPreview = [...]
    //Il setter cambia il valore dei dati del getter.

    // fetch("https://edgemony-backend.herokuapp.com/friends?_limit=4")
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //così però la fetch viene eseguita due volte: dobbiamo 
    //importare l'hook useEffect per lavorare sugli "eventi" 
    //dell'evento (creazione, aggiornamento, fine evento...)

    //Esegue il condice quando il componente è inizializzato
    //E'equivalante a DOMContentLoaded ma per il componente.
    //componentDidMount() era il vecchio nome della funzione
    
    //così aggiorniamo solo un elemento della pagina ma per
    //farlo "automaticamnte" abbiamo dovuto crearci uno stato
    //interno e settarlo con useEffect.
    useEffect(() => {
        http("/friends?_limit=4").then((data) => setFriendsPreview(data));

        http("/messages?_limit=4").then((data) => setMessagesPreview(data));

        http("/posts").then((data) => setAllPosts(data));
    }, []);

    //così gli elementi vengono caricati man mano che le chiamate rispondono
    //(hanno tempi diversi). Nel caso serva caricare tutto assieme e solo
    //dopo renderizzare gli elementi si poteva usare:
    //Promise.all([
    //     http("/friends?_limit=4"),
    //     http("/messages?_limit=4"),
    //     http("/posts")
    // ]).then((data) => console.log(data[0]))
    //Promise.all è un array di promises e restituisce data non singolarmente
    //ma in un array indicizzato nell'ordine in cui sono state fatte le fetch

    return (
        <section className={styles.home}>
            <h3>Benvenuto utente</h3>
            <div className={styles.grid}>
                <aside>
                    {friendsPreview.map((friend, index) => (
                        <FriendPreview key={index} data={friend}/>
                    ))}                    
                </aside>
                <main>
                    <CreatePost />
                    {allPosts.map((post, index) => (
                        <Post key={index} data={post} />
                    ))}
                </main>
                <aside>
                    {messagesPreview.map((message, index) => (
                        <MessagePreview key={index} data={message} />
                    ))}
                </aside>
            </div>
        </section>
    );
};

export default Home;