import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const muebles = [
    {id: 1, image:"https://http2.mlstatic.com/D_NQ_NP_2X_646525-MLA28685232152_112018-F.webp", category:"deinterior", title: "Mesa Ratona", text:"Mesa de luz Nordica Moderna con un cubo para tu habitación, puedes pintarla del color que desees para que combine con los colores de tus paredes o de tus muebles. También puede elegir entre los colores que tenemos disponible"},
    {id: 2, image:"https://http2.mlstatic.com/D_NQ_NP_2X_944117-MLA48966215161_012022-F.webp", category:"deinterior",title: "Ropero", text:"Ropero estilo nórdico ideal para cuartos individuales de tonos claros"},
    {id: 3, image:"https://http2.mlstatic.com/D_NQ_NP_2X_955096-MLA48143171603_112021-F.webp", category:"deinterior", title: "Mesa Comedor" , text:"Mesa comedor de estilo nórdico para 6 personas, amplia muy cómoda para la familia tipo"},
    {id: 4, image:"https://http2.mlstatic.com/D_NQ_NP_2X_973561-MLA51862000600_102022-F.webp", category:"deexterior", title: "Desayunador" , text:"Desayunador de estilo industrial ideal para balcones"},
    {id: 5, image:"https://http2.mlstatic.com/D_NQ_NP_2X_795703-MLA54120463043_032023-F.webp", category:"deinterior", title: "Mesa de luz" , text:"Mesa de luz minimalista, de excelentes medidas para apoyar tu celular o guardar controles, libros, etc"},
    {id: 6, image:"https://http2.mlstatic.com/D_NQ_NP_2X_805879-MLA54366636477_032023-F.webp", category:"deexterior", title: "Juego Jesuita" , text:"Formidable juego de mesa y sillas para exteriores, la comodidad de tomar un mate en tus espacios verdes"},
];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(muebles)
            }, 1000);
        });
        getData.then(res => setData(res.find(mueble => mueble.id === parseInt(detalleId))));
    },[])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;