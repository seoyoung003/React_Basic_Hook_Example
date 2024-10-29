import { useState } from "react";
import "./css/NewTweetForm.css"

export default function NewTweetForm({onButtonClick}) {
    const [newTweetContent, setNewTweetContent] = useState();


    function onTextChange(event) {
        setNewTweetContent(event.target.value);
    }

    function handleButtonClick() {
        let newTweet = {
            uuid: Math.floor(Math.random() * 10000),
            writer: "김코딩",
            date: new Date().toISOString().substring(0, 10),
            content: newTweetContent
        };
        onButtonClick(newTweet);
        setNewTweetContent("");
    }

    return(
        <div id="writingArea">
            <textarea value={newTweetContent} onChange={onTextChange}></textarea>
            <button id="submit" onClick={handleButtonClick}>새 글 쓰기</button>
        </div>
    );
}