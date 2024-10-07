"use client"
import Form from '@/components/Form/Form'
import './signUp.css'
import Main from "@/components/Main/Main"
import Input from '@/components/UI/Input/Input'
import Button from '@/components/UI/Button/Button'
import { signUp } from '@/services/auth'
import { useRouter } from 'next/navigation'


const Signup = ()=>{
    const router = useRouter();
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if(password === confirmPassword){
            const newUser = {
                email: email as string,
                name: name as string,
                password: password as string
            };

            console.log(newUser);
            
            if(newUser){}
            try{
                await signUp(newUser);
                event.currentTarget.reset();
                router.push("/login")
            } catch(e){
                console.log(e);
            }

        }else{
            alert("Las contraseñas no son iguales");
        }
        
    }
    return(
        <>
            <Main>
                <h1 className="sign-up_h1">Crear una cuenta</h1>
                <section className='form_section'>
                    <Form onSubmit={handleSubmit}>
                        <Input placeholder='Nombre' type='text' name='name'/>
                        <Input placeholder='Correo electronico' type='email' name='email'/>
                        <Input placeholder='Contraseña' type='password' name='password'/>
                        <Input placeholder='Confirmar contraseña' type='password' name='confirmPassword'/>
                        <Button>Crear cuenta</Button>
                    </Form>
                </section>
                
            </Main>
        </>
    )
}

export default Signup