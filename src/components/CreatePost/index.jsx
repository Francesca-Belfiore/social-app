import styles from "./CreatePost.module.scss"
import { httpPOST } from "../../libs/http";
import { useEffect, useState } from "react";

const CreatePost = () => {
    //controlled components with hooks
    //si applica ai form per passare gli input

    //bisogna usare un usestate per ogni input

    //AVANZATO
    const [ inputs, setInputs] = useState({});
    const inputChange = (e) => setInputs(state => ({...state, [e.target.name]: e.target.value}));

    // const [ authorInput, setAuthorInput ] = useState("");
    // const [ imgInput, setImgInput ] = useState("");
    // const [ messageInput, setMessageInput ] = useState("");

    const [ formPostObj, setFormPostOnj ] = useState({});

    // const handleAuthorInput = (event) => setAuthorInput(event.target.value);
    // const handleImgInput = (event) => setImgInput(event.target.value);
    // const handleMessageInput = (event) => setMessageInput(event.target.value);
    const handleSendBtn = (event) => {
        event.preventDefault();
        httpPOST("/posts", formPostObj)
        console.log(formPostObj);
        alert("post creato!");
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
                <div className={styles.__author}>
                    <input 
                        value={inputs.author || ""}
                        onChange={inputChange} 
                        type="text" 
                        name="author" 
                        id="author" 
                        placeholder="Author" 
                        required
                    />
                    <input
                        value={inputs.image || ""} 
                        onChange={inputChange}
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