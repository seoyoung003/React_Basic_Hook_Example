import { useState } from "react";

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        writer:null,
        title:null,
        content:null
    });

    function handleChange(identifier, newValue) {
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [identifier] : newValue

            }
        })
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
            <button onClick={handleSave}>저장하기</button>
            
        </section>
    );
}