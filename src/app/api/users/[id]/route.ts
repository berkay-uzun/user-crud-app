import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, context: { params: Record<string, string> }) {
    const userId = Number(context.params.id);

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PUT(req: NextRequest, context: { params: Record<string, string> }) {
    const userId = Number(context.params.id);
    const body = await req.json();

    const user = await prisma.user.update({
        where: { id: userId },
        data: {
            name: body.name,
            email: body.email,
        },
    });

    return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, context: { params: Record<string, string> }) {
    const userId = Number(context.params.id);

    await prisma.user.delete({
        where: { id: userId },
    });

    return NextResponse.json({ mesaj: 'Kullanıcı silindi' });
}
