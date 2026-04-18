import { redirect } from 'next/navigation';
import nodemailer from 'nodemailer';

export async function sendToGmail(formData: FormData) {
  'use server';

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const transporter = nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER!,
      pass: process.env.GMAIL_APP_PASSWORD!,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER!,
    to: process.env.GMAIL_USER!,
    subject: `New Contact Form: ${name}`,
    text: `From: ${name} (${email})\\nMessage: ${message}`,
  });

  redirect('/contact?success=true');
}

