import { useParams } from "react-router-dom";
import getRecipeById from "../data";

const Recipe = () => {
    const {recipeId} = useParams();
    let data = getRecipeById(parseInt(recipeId));
    return(
        <div className="container fluid d-flex flex-column align-items-center">
            <h1 style={{textAlign: "center"}}>{data.title}</h1>
            <p>Ingredients:</p>
            <ul>
                {data.ingredients.map(item=>
                    <li key={item.name}>{item.name} {item.quantity}</li>
                )}
            </ul>
            <p>Instructions:</p>
            <p>{data.instructions}</p>
            <img src={data.image} alt="img" className="img-fluid w-50 p-3"/>
        </div>
    )
}

export default Recipe;