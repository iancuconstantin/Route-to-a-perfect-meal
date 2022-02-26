import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import getRecipeById from "../data";
const Home = () => {
    
    return(
        <div className="container fluid">
            <Carousel className="w-50 mx-auto" autoPlay={true} interval={3000} infiniteLoop={true}>
                <div>
                    <img src={getRecipeById(1).image} alt="img1"/>
                    <p className="legend">Perfection Salad</p>
                </div>
                <div>
                    <img src={getRecipeById(2).image} alt="img2"/>
                    <p className="legend">Hamburger Pie</p>
                </div>
                <div>
                    <img src={getRecipeById(3).image} alt="img3"/>
                    <p className="legend">Cherry Pineapple Bologna</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Home;