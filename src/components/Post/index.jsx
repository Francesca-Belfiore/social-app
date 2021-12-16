import styles from "./Post.module.scss";
import RelativeDate from "../date";

const Post = (props) => {
    const data = props.data || {
        author: "User",
        text: "text",
        date: new Date(), 
        photo: 
            "https://images.unsplash.com/photo-1620481679288-0c3894901bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" 
    };

    return (
        <article className={styles.post}>
            <h3>{data.author}</h3>
            <RelativeDate date={data.date}/>
            <p>{data.text}</p>

            {data.photo ? <img src={data.photo} alt={data.author} /> : <></> }
        </article>
    ); //non si può usare l'if in jsx ma si può usare l'operatore ternario
    //per verificare se il post ha un'immagine ed eventualmente rendirizzarla
};//in alternativa per condizioni più complesse si può creare una funzione con
//l'if che ritorna qualcosa da renderizzare o qualcos'altro o niente, con un
//fragment <></> che in react è un elemento "vuoto" solitamente placeholder.
//per esempio:
//const hasImage = (photo) => {
//     if(photo) {
//         return <img src={data.photo} alt={data.author} />
//     } else {
//         return <></>
//     }
// }

export default Post;