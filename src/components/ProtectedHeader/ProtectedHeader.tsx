"use client"
import Link from "next/link"
import Header from "../Header/Header"
import { FaCartShopping } from "react-icons/fa6"
import LogoutButton from "../UI/LogoutButton/LogoutButton"
import { useEffect, useState } from "react"
import { getCategories } from "@/services/categories"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import CartAside from "../CartAside/CartAside"
import { openAside } from "@/redux/features/cartAsideSlice"

const ProtectedHeader = () => {
    const cart = useAppSelector(state => state.cartReducer.cart);
    const [categories, setCategories] = useState<string[]>([]);
 
    const cartAsideState = useAppSelector(state => state.cartAsideReducer.isOpen);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        const fechCategories = async()=>{
            try{
                setCategories(await getCategories())
            }catch(e){
                console.log(e)
            }
        }
        fechCategories()
    },[])

    return(
        <>
            <Header>
                <li><Link href="/store">Inicio</Link></li>
                {categories.map((category:string)=>
                    <li key={category}><Link href={`/store/${category}`}>{category} </Link></li>
                )}
                <li onClick={()=> dispatch(openAside())} style={{display:'flex', justifyContent:'center',alignItems: 'center', gap:'5px', cursor:'pointer'}}>{cart.length} <FaCartShopping/></li>
                <li><LogoutButton/></li>
            </Header>
            {cartAsideState ? <CartAside/> : ""}
        </>
    )   
}

export default ProtectedHeader