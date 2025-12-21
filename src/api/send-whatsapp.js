export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, company, phone, email, place, state } = req.body;
    
    // Format message
    const message = `🚀 New Lead Received!\n\n👤 Name: ${name}\n🏢 Company: ${company}\n📱 Phone: ${phone}\n📧 Email: ${email}\n📍 Place: ${place}\n🗺️ State: ${state}\n\n⏰ ${new Date().toLocaleString('en-IN')}`;
    
    // Replace with YOUR WhatsApp Business API endpoint
    const whatsappResponse = await fetch('https://your-whatsapp-api.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_TOKEN'
      },
      body: JSON.stringify({
        to: '919876543210',  // Your WhatsApp number
        message: message
      })
    });

    if (!whatsappResponse.ok) {
      throw new Error('WhatsApp API failed');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Details sent successfully!' 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message' 
    });
  }
}
