import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    try {
        const result = await prisma.subscriber.create({
            data: {
                email: body.email,
            },
        });
        return NextResponse.json({ data: result }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 });
    }
}