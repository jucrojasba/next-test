"use server";

import { cookies } from "next/headers";

export default async function changeLanguage(language: string) {
    cookies().set('language', language)
}