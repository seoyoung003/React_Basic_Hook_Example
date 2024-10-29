import { useState } from "react";
import NewTweetForm from "./NewTweetForm";
import SingleTweet from "./SingleTweet";

const currentUser = "김코딩";

function Twittler() {

    const [tweets, setTweets] = useState([
        {
            uuid:1,
            writer:"김코딩",
            date:"2020-10-10",
            content: "안녕 리액트"
        },
        {
            uuid:2,
            writer:"박해커",
            date:"2020-10-12",
            content: "오늘은 날씨 맑음"
        }
    ]);

    const addNewTweet = (newTweet) => {
        setTweets([...tweets, newTweet]);
    }
    return(
        <div>
            <div>작성자: {currentUser}</div>
            <NewTweetForm onButtonClick={addNewTweet}/>
            <ul id="tweets">
                {tweets.map((t) => (
                    <SingleTweet key={t.uuid} writer={t.writer} date={t.date}>
                        {t.content}
                    </SingleTweet>
                ))}

            </ul>

        </div>
        
    );
}