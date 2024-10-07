"use client"
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { BurgerButton, CloseHeaderButton, HeaderAside, HeaderAsideContainer, HeaderNav, HeaderSection, HeaderStyle, HeaderUl, HeaderUlAside } from "./Header-style";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Select from "../UI/Select/Select";
import changeLanguage from "@/actions/language";


const Header = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = async(event:React.ChangeEvent<HTMLSelectElement>)=>{
        const language = event.currentTarget.value;   
        await changeLanguage(language);
        sessionStorage.setItem("language",language)
    }
    let lang = sessionStorage.getItem("language");
    if(!lang){
        lang = 'es'
    }
    
    return (
        <HeaderStyle>
            <HeaderSection>
                <Link href="/"><Image src="/img/logo.png" alt="logo-principal" width={70} height={70} /></Link>
            </HeaderSection>
            <HeaderNav>
                <BurgerButton onClick={() => setIsOpen(true)}>
                    <RxHamburgerMenu />
                </BurgerButton>
                <HeaderAsideContainer $isOpen={isOpen}>
                    <HeaderAside>
                        <CloseHeaderButton onClick={() => setIsOpen(false)}>
                            <IoClose />
                        </CloseHeaderButton>
                        <HeaderUlAside>
                            <li>
                                <Select onChange={handleChange} value={lang}>
                                    <option value="es">Español</option>
                                    <option value="en">English</option>
                                </Select>
                            </li>
                            {children}
                        </HeaderUlAside>
                    </HeaderAside>
                </HeaderAsideContainer>
                <HeaderUl>
                    <li>
                        <Select onChange={handleChange} value={lang}> 
                            <option value="es">Español</option>
                            <option value="en">English</option>
                        </Select>
                    </li>
                    {children}
                </HeaderUl>
            </HeaderNav>
        </HeaderStyle>
    )
}
export default Header;