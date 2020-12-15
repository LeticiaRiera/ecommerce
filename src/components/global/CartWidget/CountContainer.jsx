import { useState } from "react";
import CountButton from "./CountButton";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CountContainer(){
    const [count, setCount] = useState(1);
    const qty = 5;

    const increment = () => {
        if (count < qty) {
        setCount (count + 1);
        }
        if (count === qty){
            alert("Seleccionaste el máximo en stock")
        }

    };

    const decrement = () => {
 
        if (count === 1){
            alert("Selecciones al menos un producto");
            return;
        }
        setCount (count -1);


};

    return (
        <>
        <CountButton count = {count} increment={increment} decrement = {decrement} />
       </> 
    )

}