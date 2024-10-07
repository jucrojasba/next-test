"use client"
import './login.css'
import Form from "@/components/Form/Form"
import Main from "@/components/Main/Main"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Signup = ()=>{
    const router = useRouter()
    const handleSumbit = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        const user = {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        };

        try{
            const response = await signIn("credentials", user);
            if(response?.ok){
                router.push("/store")
            }else{
                alert("Credenciales invalidas")
                event.currentTarget.reset();
            }
            
        }catch{
            console.log("No se pudo acceder")
            event.currentTarget.reset();
        }
    }
    return(
        <>
            <Main>
                <h1 className="login_h1">Iniciar sesión</h1>
                <section className='form_section'>
                    <Form onSubmit={handleSumbit}>
                        <Input placeholder='Correo electronico' type='email' name='email'/>
                        <Input placeholder='Contraseña' type='password' name='password'/>
                        <Button>Iniciar sesión</Button>
                    </Form>
                </section>
                
            </Main>
        </>
    )
}

export default Signup