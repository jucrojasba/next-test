import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const user = await request.json();

    // Actualizamos el endpoint para el registro
    const response = await fetch("http://192.168.88.39:7000/auth/signup", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user) // Enviamos el objeto user
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}
