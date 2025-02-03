// For Next.js API routes: pages/api/contact.js 
// or for the App Router: app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    console.log("Received data:", { name, email, subject, message });

    // Create a transporter with additional timeout and debug options
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Increase the timeout values to allow the SMTP greeting to be received
      greetingTimeout: 10000, // Wait up to 10 seconds for the greeting
      connectionTimeout: 10000, // Optional: Wait up to 10 seconds for connection
      // Optional TLS configuration - use with caution in production
      tls: {
        // If you're having issues with self-signed certificates, uncomment the line below.
        // rejectUnauthorized: false,
      },
      // Uncomment these options to enable detailed debug output
      logger: true,
      debug: true,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message: ${subject}`,
      html: `<h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
