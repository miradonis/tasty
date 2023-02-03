import { useEffect, useState } from "react"
import Navigation from "../../components/navigation/Navigation"
import "./Home.css"

export const Home = () => {
    const [randomMeal, setRandomMeal] = useState([])

    useEffect(() => {
        const datenholer = async () => {
            const data = await fetch("https://themealdb.com/api/json/v1/1/random.php")
            const mealData = await data.json()
            setRandomMeal(mealData)
        }
        datenholer()
        console.log(randomMeal)
    }, [])


    return (
        <div>
            <div className="mealContainer">
                <p className="mealP">{randomMeal?.meals[0]?.strMeal}</p>
                <p className="mealP">{randomMeal?.meals[0]?.strCategory}</p>
                <p className="mealP">{randomMeal?.meals[0]?.strArea}</p>
            </div>
            <Navigation />
        </div>
    )
}