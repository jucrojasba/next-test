"use client"
import Form from '@/components/Form/Form'
import './signUp.css'
import Main from '@/components/Main/Main'
import Input from '@/components/UI/Input/Input'
import Button from '@/components/UI/Button/Button'
import { signUp } from '@/services/auth'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

const Signup = ()=>{
    const t = useTranslations('SignUp');
    const router = useRouter();

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const username = formData.get("username");
        const email = formData.get("email");
        const phone = formData.get("phone"); // Agregamos el phone
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if(password === confirmPassword){
            const newUser = {
                email: email as string,
                username: username as string,
                name: name as string,
                phone: phone as string, // Añadimos el phone al objeto
                password: password as string
            };

            console.log(newUser);
            
            try{
                await signUp(newUser);
                alert(t("messageSuccesfully"));
                router.push("/login");
            } catch(e){
                alert("Server error, please try again")
                console.log(e);
            }

        }else{
            alert("Las contraseñas no son iguales");
        }
    }

    return(
        <>
            <Main>
                <h1 className="sign-up_h1">{t("signup")}</h1>
                <section className='form_section'>
                    <Form onSubmit={handleSubmit}>
                        <Input placeholder={t("name")} type='text' name='name'/>
                        <Input placeholder={t("username")} type='text' name='username'/>
                        <Input placeholder={t("email")}type='email' name='email'/>
                        <Input placeholder={t("telephone")} type='number' name='phone'/> 
                        <Input placeholder={t("password")} type='password' name='password'/>
                        <Input placeholder={t("confirm")}type='password' name='confirmPassword'/>
                        <Button>{t("signup")}</Button>
                    </Form>
                </section>
            </Main>
        </>
    )
}

export default Signup;

