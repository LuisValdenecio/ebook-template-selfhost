
import { Resend } from 'resend';
import NotionMagicLinkEmail from '@/app/emails/welcome';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        await resend.emails.send({
            from: 'ebookselfhostbundle@luistch.com',
            to: 'viterbiai@gmail.com',
            subject: 'Your Last purchase',
            react: NotionMagicLinkEmail({ loginCode : '123456' }),
        });

        return NextResponse.json({ data: 'success' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error}, { status: 500 });
    }
}
