import { useState } from "react";
import styles from "./Home.module.scss";
import FriendPreview from "../../components/FriendPreview";
import MessagePreview from "../../components/MessagePreview";
import Post from "../../components/Post";

const friends = [
    { name: "Chandler", photo: "https://randomuser.me/api/portraits/lego/5.jpg"},
    { name: "Pippo", photo: "https://randomuser.me/api/portraits/lego/7.jpg"},
    { name: "Geralt", photo: "https://randomuser.me/api/portraits/lego/8.jpg"},
];

const messages = [
    { text: "lorem ipsum", date: new Date(), sender: "Pippo"},
    { text: "bau bau", date: new Date(), sender: "Pluto"},
    { text: "yoooo", date: new Date(), sender: "V"},
    { text: "finish the fight", date: new Date(), sender: "Master Chief"},
    { text: "this cave is not a natural formation", date: new Date(), sender: "Cortana"},
];

const posts = [
    { author: "User", text: "Oggi ho mangiato roba buona", date: new Date(), photo: "https://images.unsplash.com/photo-1620481679288-0c3894901bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" },
    { author: "User", text: "Sto imparando React", date: new Date(), photo: "" }
];

const Home = () => {

    const [friendsPreview, setFriendsPreview] = useState(friends);
    //è come scrivere const friendPreview = [];
    //ma più efficiente. Sarà una funzione monitorata
    //da react, di cui friendPreview è il getter (da
    //dove vengono presi i dati da passare). Come buona 
    //abitudine se ho chiamato il getter friendsPreview 
    //chiamerò il setter setFriendsPreview.
    //Il setter cambia il valore dei dati del getter.
    const [allPosts, setAllPosts] = useState(posts);
    const [messagePreview, setMessagePreview] = useState(messages);


    return (
        <section className={styles.home}>
            <h3>Benvenuto utente</h3>
            <div className={styles.grid}>
                <aside>
                    {friendsPreview.map((friend, index) => (
                        <FriendPreview key={index} data={friend} className={styles.friend}/>
                    ))}                    
                </aside>
                <main>
                    {allPosts.map((post, index) => (
                        <Post key={index} data={post} />
                    ))}
                </main>
                <aside>
                    {messagePreview.map((message, index) => (
                        <MessagePreview key={index} data={message} />
                    ))}
                </aside>
            </div>
        </section>
    );
};

export default Home;