import styles from "./CreatePost.module.scss"
import { httpPOST } from "../../libs/http";
import { useEffect, useState } from "react";
// import { useReducer } from 'react';
import Modal from "../Modal";

// Esercizio: cambio stato del form con useReducer
// const init_state = {};

// const reducer = (inputs, action) => {
//     const inputChange = (e) => state => ({ ...state, [e.target.name]: e.target.value });
    
//     switch (action.type) {
//         case "change-input":
//             return inputChange; 
//         default:
//             return inputs;
//     }
// };

const CreatePost = () => {
    //controlled components with hooks
    //si applica ai form per passare gli input
    
    const [inputs, setInputs] = useState({});
    const inputChange = (e) => setInputs(state => ({ ...state, [e.target.name]: e.target.value }));
    /*  AVANZATO: unifica tutti i cambi di stato degli input del form (con useState)
        const [ authorInput, setAuthorInput ] = useState("");
        const [ imgInput, setImgInput ] = useState("");
        const [ messageInput, setMessageInput ] = useState("");

        const handleImgInput = (event) => setImgInput(event.target.value);
        const handleMessageInput = (event) => setMessageInput(event.target.value);
        const handleAuthorInput = (event) => setAuthorInput(event.target.value);
    */

    // const [inputs, dispatch] = useReducer(reducer, init_state);

    const [formPostObj, setFormPostOnj] = useState({});

    //Esercizio: MODALE
    const [modalIsOpen, setIsOpen] = useState(false);

    function showModal() {
        setIsOpen(true);

        setTimeout(() => {
            setIsOpen(false);
        }, 1500);
    };

    //AL CLICK DEL SEND BUTTON
    const handleSendBtn = (event) => {
        event.preventDefault();
        httpPOST("/posts", formPostObj)
        console.log(formPostObj);
        // alert("post creato!");
        showModal();
    }

    useEffect(() => {
        setFormPostOnj({
            author: inputs.author,
            text: inputs.message,
            date: new Date().toISOString(),
            photo: inputs.image,
        })
    }, [inputs.author, inputs.image, inputs.message])
    //aggiorna lo stato solo quando cambiano le dipendenze tra parentesi quadre

    return (
        <div className={styles.createPost}>
            <form>

                {modalIsOpen ? <Modal color="lightskyblue" message="Post created!" top="0" />
                    : <Modal color="lightskyblue" message="Post created!" top="-100px" />}

                <div className={styles.__author}>
                    <input
                        value={inputs.author || ""}
                        onChange={inputChange}
                        // onChange={dispatch({type:"change-input"})}
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Author"
                        required
                    />
                    <input
                        value={inputs.image || ""}
                        onChange={inputChange}
                        // onChange={dispatch({type:"change-input"})}
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Image URL"
                    />
                    <button
                        type="submit"
                        onClick={handleSendBtn}
                    >SEND
                    </button>
                </div>
                <textarea
                    value={inputs.message || ""}
                    onChange={inputChange}
                    // onChange={dispatch({type:"change-input"})}
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required>
                </textarea>
            </form>
        </div>
    );
};

export default CreatePost;