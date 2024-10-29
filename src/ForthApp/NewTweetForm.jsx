import { useState } from "react";

export default function NewTweetForm() {
    const [newTweetContent, setNewTweetContent] = useState();


    function onTextChange(event) {
        setNewTweetContent(event.target.value);
    }

    function handleButtonClick() {
        let newTweet = {
            uuid: Math.floor(Math.random() * 10000),
            writer: currentUser
        }
    }

    return(
        <div>
            <textarea onChange={onTextChange}></textarea>
            <button onClick={handleButtonClick}>새 글 쓰기</button>
        </div>
    );
}