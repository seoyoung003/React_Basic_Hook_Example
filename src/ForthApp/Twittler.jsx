import { useState } from "react";

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
    return(
        <div>
            <div>작성자: {currentUser}</div>
            <NewTweetForm/>
            <ul id="tweets">
                <SingleTweet>
                    
                </SingleTweet>

            </ul>

        </div>
        
    );
}