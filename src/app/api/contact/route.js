import { render } from '@react-email/render';
import { resendEmail, sendEmail } from '@/config/nodemailer';
import WelcomeEmail from '@/emails/EmailTemplate';
import WelcomeResendEmail from '@/emails/ResendEmailTemplate';

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();
    const emailHtml = render(<WelcomeEmail userFirstname={firstName} />);
    const resendEmailHtml = render(
      <WelcomeResendEmail
        userFirstname={firstName}
        userLastname={lastName}
        userEmail={email}
        userPhone={phone}
        userMessage={message}
      />
    );

    await sendEmail(email, emailHtml);
    await resendEmail(firstName, resendEmailHtml);
    return new Response('OK');
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
