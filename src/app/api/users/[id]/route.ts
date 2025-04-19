import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: Promise<Record<string, string>> }) {
    const { id } = await params

    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
    });

    if (!user) {
        return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<Record<string, string>> }) {
    const { id } = await params
    const body = await req.json();

    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: {
            name: body.name,
            email: body.email,
        },
    });

    return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<Record<string, string>> }) {
    const { id } = await params

    await prisma.user.delete({
        where: { id: Number(id) },
    });

    return NextResponse.json({ mesaj: 'Kullanıcı silindi' });
}
