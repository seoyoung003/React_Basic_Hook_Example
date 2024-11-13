import SinglePost from "./SinglePost";
import { useState } from "react";

import UserInput from "./UserInput";

export default function SixApp() {
    const [post, setPost] = useState([]);//객체가 아닌 배열로 초기화하면 값이 없어도 안정적으로 map함수 돌아감

    function handlePost(newPost) {
        setPost((prevPosts) => [...prevPosts, newPost]);
    }


    return(
        <div>
            <UserInput handlePost={handlePost}/>
            <ul>
                {post.map((p, index) => (
                    <SinglePost key={index} writer={p.writer} title={p.title} content={p.content}/>
                ))}
            </ul>

        </div>
    );
}