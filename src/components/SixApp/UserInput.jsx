import { useState } from "react";

export default function UserInput({handlePost}) {
    const [userInput, setUserInput] = useState({
        writer: "",
        title: "",
        content: "",
    });

    function handleChange(identifier, newValue) {
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [identifier] : newValue

            }
        })
    }

    function handleSubmit() {
            let newPost = {
                writer: userInput.writer,
                title: userInput.title,
                content: userInput.content
            }
            handlePost(newPost);
            setUserInput({
                writer: "",
                title: "",
                content: ""
            });
    }
    return(
        <section>
            <div>
                <label>작성자 이름</label>
                <input type="text" required value={userInput.writer} onChange={(event) => handleChange("writer", event.target.value)}/>
            </div>
            <div>
                <label>제목</label>
                <input type="text" required value={userInput.title} onChange={(event) => handleChange("title", event.target.value)}/>
            </div>
            <div>
                <label>내용</label>
                <div>
                    <textarea value={userInput.content} style={{width:"300px", height:"300px"}}
                    onChange={(event) => handleChange("content", event.target.value)}
                    >

                    </textarea>
                </div>
            </div>
            <button onClick={handleSubmit}>게시글 올리기</button>
            
        </section>
    );
}