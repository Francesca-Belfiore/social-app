import { useEffect, useState } from "react";
import { http } from "./../../libs/http"; 
import FriendsPreview from "./../../components/FriendPreview"
import styles from "./Friends.module.scss";

const Friends = () => {
    const [ friendList, setFriendList ] = useState([]);

    useEffect(() => {
        http("/friends").then((friendList) => setFriendList(friendList));
    }, []);

    return (
        <div className={styles.Friends}>
            {friendList.map((friend) => (
                <FriendsPreview data={friend} key={friend.id}/>
            ))}
        </div>
    );
};

export default Friends;