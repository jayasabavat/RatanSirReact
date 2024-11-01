import { useState } from "react";

function Example5()
{
    const originalPrice = 10000;
    const [discount,setDiscount]=useState(0)
    const [price,setPrice]=useState(0);

   

    const applyDiscount = (discountPercentage) => {
        let discountAmount = 0;

        if (discountPercentage === 10) {
            discountAmount = (originalPrice * 10) / 100;
        } else if (discountPercentage === 20) {
            discountAmount = (originalPrice * 20) / 100;
        } else if (discountPercentage === 30) {
            discountAmount = (originalPrice * 30) / 100;
        } else {
            discountAmount = 0; // no discount or invalid percentage
        }

        setDiscount(discountAmount);
        setPrice(originalPrice - discountAmount);
    };
    const resetDiscount = () => {
        setDiscount(0); 
        setPrice(0); 
    }

    return(
        <>
        <h1>Original Price : {originalPrice}</h1>
        <h1>Discount Price : {discount}</h1>
        <h2>Click a  to apply a discount </h2>
        <button style={{color:"blue"}} onClick={()=>applyDiscount(10)}>Apply 10%</button>
        <button style={{color:"red"}} onClick={()=>applyDiscount(20)}>Apply 20%</button>
        <button style={{color:"black"}} onClick={()=>applyDiscount(30)}>Apply 30%</button>
         <button style={{color:"green"}} onClick={resetDiscount}>Reset</button>
        </>
    )
}
export default Example5;