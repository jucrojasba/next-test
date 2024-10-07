import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';


export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    let language = cookies().get("language")?.value;
    if (!language) {
        language = "es"
    }
    const locale = language

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});