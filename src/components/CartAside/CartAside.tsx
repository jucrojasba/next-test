import { IoCloseSharp } from "react-icons/io5"
import CardCart from "../CardCart/CardCart"
import { AsideCart, AsideCartH1, AsideCartSection, CloseButton, DivBackground } from "./CartAside-style"
import { useAppDispatch } from "@/redux/hooks";
import { closeAside } from "@/redux/features/cartAsideSlice";

const CartAside = ()=>{
    const dispatch = useAppDispatch();
    return(
        <>
            <DivBackground/>
            <AsideCart>
                <AsideCartH1>Tu carrito</AsideCartH1>
                <AsideCartSection>
                    <CardCart/>
                </AsideCartSection> 
                <CloseButton onClick={()=>dispatch(closeAside())}>
                    <IoCloseSharp/>
                </CloseButton>               
            </AsideCart>
        </>
    )
}

export default CartAside