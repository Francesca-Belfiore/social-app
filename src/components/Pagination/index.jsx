// import { useState, useEffect } from "react";
// import PaginationItem from "../PaginationItem";
// import { http } from "./../../libs/http";
import styles from "./Pagination.module.scss"

const Pagination = () => {
    // const [friendsList, setFriendsList] = useState([]);
    // useEffect(() => {}, []);

    return (
        <ul className={styles.buttonsList}>
            {/* tot && <PaginationItem pageNumber={1}/> */}
            {/* {[...Array(parseInt(friendsList.length / 10 + 1)).keys()].map(
                (buttonNum) => (
                    <PaginationItem pageNumber={buttonNum}/>
                )
            )} */}
        </ul>
    );
};

export default Pagination;