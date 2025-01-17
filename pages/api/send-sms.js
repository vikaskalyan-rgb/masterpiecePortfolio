// pages/api/send-sms.js
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const BUSINESS_PHONE = '+919994445388';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { formData } = req.body;

  try {
    const client = twilio(accountSid, authToken);
    
    // Customize your message template here
    const smsMessage = `
🏠 Masterpiece - New Lead!

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📧 Email: ${formData.email}
💬 Message: ${formData.message}

Received on: ${new Date().toLocaleString()}
    `.trim();

    await client.messages.create({
      body: smsMessage,
      to: BUSINESS_PHONE,
      from: twilioPhone
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('SMS sending failed:', error);
    res.status(500).json({ error: error.message });
  }
}
//email:masterpieceinteriors1204@gmail.com
//pass:Gayathri@1204