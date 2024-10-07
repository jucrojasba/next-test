import ProtectedHeader from "@/components/ProtectedHeader/ProtectedHeader";


export default async function Layout ({children}:{children:React.ReactNode}) {
    
    return(
    <>
        <ProtectedHeader/>  
        {children}
    </>
    )
    
}
