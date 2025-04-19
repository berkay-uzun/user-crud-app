import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, context: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: Number(context.params.id) }
    })

    return NextResponse.json(user)
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    const body = await req.json();

    const user = await prisma.user.update({
        where: { id: Number(context.params.id) },
        data: {
            name: body.name,
            email: body.email,
        },
    });

    return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {

    await prisma.user.delete({
        where: { id: Number(context.params.id) },
    });

    return NextResponse.json({ mesaj: 'Kullanıcı silindi' });
}
