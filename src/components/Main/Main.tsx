import { PropsWithChildren } from "react";
import { MainStyle } from "./Main-style";

const Main = ({ children }: PropsWithChildren)=>{
    return(
        <MainStyle>
            {children}
        </MainStyle>
    )
    
}

export default Main