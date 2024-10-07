import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { category: string } }) {
    const { category } = params

    const response = await fetch(`${process.env.NEXT_PUBLIC_STORE}/products/category/${category}`, {
        method: 'GET',
        headers: {
            'Content-type': 'Application/json'
        }
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}