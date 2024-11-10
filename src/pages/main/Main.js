import TableMain from "./components/TableMain";
import { useEffect, useState } from 'react';
import { Outlet, useParams } from "react-router-dom"
import LoaderAllItems from "../../services/LoaderAllItems";
import Lista from "../../components/Lista";
import Info from "../../components/Info";
import Sonido from "../../components/Sonido";
import { Link } from "react-router-dom";
import './Main.css';

const Main = () => {

    const url = `https://randomuser.me/api/`;
    const [cleanDataDetail, setcleanDataDetail] = useState([]);

    useEffect(() => {
        LoaderAllItems(setcleanDataDetail, url)
    }, [setcleanDataDetail]);

    const [text, setText] = useState ("Interfaz número dos")

    useEffect (() => {
        setText ("Artistas Colombianos más escuchados") 
    }
    )

    return (
        <div>
            <h1 className="titulo-artistas">{text} </h1>
            <br />
            <Lista />
            <Info /> 
            <Sonido /> 
            <Link to={"/colab"}> Ir hacia colab </Link>
            <Outlet /> 
        </div>
    );
}

export default Main;