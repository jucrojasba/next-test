import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const user = await request.json();

    const response = await fetch("https://simuate-test-backend-1.onrender.com/api/users/", {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(user)
    })

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}