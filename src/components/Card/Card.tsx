"use client"
import { IProducts } from "@/types/IProducts"
import { AddButton, CardContainer, ImgCard, ImgCardContainer, InfoCardContainer, TitleCard } from "./Card-style"
import { BsCartPlus } from "react-icons/bs"
import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/features/cartSlice";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface CardProps {
    product: IProducts; 
}

const Card: React.FC<CardProps> = ({product})=>{
    const dispatch = useAppDispatch();
    const [added, setAdded] = useState(false)

    const addProductHandle = (event:React.MouseEvent<HTMLButtonElement>)=>{
        dispatch(addProduct(product));
        setAdded(true);
    }
    return(
        <>
            <CardContainer>
                <ImgCardContainer>
                    <ImgCard src={product.image} alt="producto"/>
                </ImgCardContainer>
                <InfoCardContainer>
                    <TitleCard>{product.title}</TitleCard>
                    <p>$ 800.000</p>
                </InfoCardContainer>

                { !added ? (
                    <AddButton onClick={addProductHandle}><BsCartPlus/></AddButton>
                )  : <AddButton ><FaCheck style={{color:"green"}}/></AddButton>}
            </CardContainer>
        </>
    )
}

export default Card