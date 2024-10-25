import { useState } from "react";

export default function ParentComponent() {
    const [value, setValue] = useState();
    
    function changeValue() {
        setValue("사과");
    }
    
    return(
        <div>
            <div>값은 {value} 입니다</div>
            <ChildComponent handleButton={changeValue}/>
        </div>
    );
}

function ChildComponent({handleButton}) {


    return(
        <button onClick={handleButton}>값 변경</button>
    );
}