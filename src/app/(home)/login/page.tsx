"use client"
import './login.css'
import Form from "@/components/Form/Form"
import Main from "@/components/Main/Main"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const Login = ()=>{
    const t = useTranslations('Login');
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
            console.log(response);
            
        }catch{
            console.log("No se pudo acceder")
        }
    }
    return(
        <>
            <Main>
                <h1 className="login_h1">{t("login")}</h1>
                <section className='form_section'>
                    <Form onSubmit={handleSumbit}>
                        <Input placeholder={t("username")} type='text' name='email'/>
                        <Input placeholder={t("password")} type='password' name='password'/>
                        <Button>{t("login")}</Button>
                    </Form>
                </section>
                
            </Main>
        </>
    )
}

export default Login