import React from "react";
import Item from "./Item";

export const ItemList = ({data = []}) => {
    return (
        data.map(mueble => <Item key={mueble.id} info={mueble} />)
    )
};

export default ItemList;