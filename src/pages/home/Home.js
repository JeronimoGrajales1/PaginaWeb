import React from "react";
import Title from "../../components/Title";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    
    return (
        <div className>
               <div >
    
                <Title className="title" />
            
                        <Logo className="logo-image" />
                    </div>
                    <Link to={"/main"}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/20/20815.png" alt="Imagen.flecha" className="flecha" 
                /> 
            </Link>
                     <div class="linea"></div> 
                        <div class="movable-card">
                            <h3>Inicio</h3>
                                <p>En esta aplicación se verán los artistas colombianos en el top cuatro
                                de la plataforma Spotify, más escuchados a nivel global.</p>
                             </div>

                                <div class="image-card">
                                    <img src="https://i.blogs.es/0c0bed/david-pupaza-xp4nc72yvwq-unsplash/1366_2000.jpeg" alt="" class="card-image" />
                                </div>

              
        </div>
    )
}

export default Home; 