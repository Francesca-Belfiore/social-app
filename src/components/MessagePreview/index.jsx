import styles from "./MessagePreview.module.scss";
import RelativeDate from "../date";


const MessagePreview = (props) => {
    const data = props.data || {
        text: "lorem ipsum",
        date: new Date(),
        sender: "User"
    };

    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <RelativeDate date={data.date}/>
            <p>{data.text}</p>
        </div>
    );
};

export default MessagePreview;