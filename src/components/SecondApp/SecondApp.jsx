import './Second.css'
import { useState } from 'react';

export default function SecondApp() {
    const [message, setMessage] = useState();


    const handleEnter = (event) => {
        if(event.key === 'Enter') {
            setMessage("");
            event.target.value='';
        }
    }
    return(
        <div>
            <div>
                {message}
            </div>
            <div>메세지를 입력해주세요</div>

            <div className='blank'>
                <input onChange={(event)=> {
                    setMessage(event.target.value);
                }}
                onKeyUp={handleEnter}
                />
                
            </div>
        </div>
    );
}