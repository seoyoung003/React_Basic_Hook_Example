export default function UserInput({userInput, handleChange}){
    
    return(
        <section>
            <div>
                <label>가지고있는 돈</label>
                <input type="text" required value={userInput.money} onChange={(event) => handleChange("money", event.target.value)}/>
            </div>
            <div>
                <label>음식 가격</label>
                <input type="text" required value={userInput.foodPrice} onChange={(event) => handleChange("foodPrice", event.target.value)}/>
            </div>
            <div>
                <label>남은 돈</label>
                <input type="text" required value={userInput.money - userInput.foodPrice} onChange={(event) => handleChange("savedMoney", event.target.value)}/>
            </div>
        </section>
    );
}