import SinglePost from "./SinglePost";
import { useState } from "react";

import UserInput from "./UserInput";

export default function SixApp() {
    const [post, setPost] = useState({});

    function handlePost(newPost) {
        setPost(...post, newPost);
    }

    
    function handleChange(identifier, newValue) {
        setPost(prevUserInput => {
            return{
                ...prevUserInput,
                [identifier] : newValue

            }
        })
    }


    return(
        <div>
            <UserInput handleChange={handleChange} handlePost={handlePost}/>
            <ul>
                {post.map((p) => (
                    <SinglePost writer={p.writer} title={p.title} content={p.content}/>
                ))}
            </ul>

        </div>
    );
}