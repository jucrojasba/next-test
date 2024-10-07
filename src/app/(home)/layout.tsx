import Header from "@/components/Header/Header"
import { useTranslations } from "next-intl";
import Link from "next/link"

export default function HomeLayout ({children}:{children:React.ReactNode}) {
    const t = useTranslations('Header');
    return(
    <>
        <Header>
            <li><Link href="/">{t("home")}</Link></li>
            <li><Link href="/login">{t("login")}</Link></li>
            <li><Link href="/sign-up">{t("signUp")}</Link></li>
        </Header>
        {children}
    </>
    )
    
}
