"use client"

import Main from "@/components/Main/Main"
import {getProductsByCategory } from "@/services/products"
import { IProducts } from "@/types/IProducts"
import { useEffect, useState } from "react"
import '../store.css'
import Card from "@/components/Card/Card"

const Category: React.FC<{ params: { category: string } }> = ({params})=>{
    const [products, setProducts] = useState<IProducts[]>([]);
    const {category} = params;
    console.log(category)

    useEffect(()=>{
        const fetchProduct = async()=>{
            try{
                setProducts(await getProductsByCategory(category))
            }catch(e){
                console.log(e);
                alert("No se pudo acceder a la informacion")
            }
        }
        fetchProduct();
    },[]);

    return(
        <>
            <Main>
                <section className="cards-section">
                    {products.map((product:IProducts)=>(
                        <Card key={product.id} product={product}/>
                    ))}
                </section>
            </Main>  
        </>
    )
}

export default Category