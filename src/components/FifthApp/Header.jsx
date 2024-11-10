import food from "./img/food.png"

export default function Header() {
    return(
       <header>
            <img src={food} alt="FoodImage" />
            <h1>지출 내역</h1>
       </header>
    )
}