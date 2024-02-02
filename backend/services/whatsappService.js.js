const https = require('follow-redirects').https;

exports.sendMessage = async (req,res) =>{
  
   try{
    await fetch('https://messages-sandbox.nexmo.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Basic ' + btoa('32a1136c:og18HLXoMsQqAsvh')
        },
        body: JSON.stringify({
          from: '14157386102',
          to: '918308195301',
          message_type: 'text',
          text: `Your otp is ${9370},please do not share your otp `,
          channel: 'whatsapp'
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Message sent successfully:', data);
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });

      return res.status(200).json({
        success:true,
        message:"Sms send on your Whatsapp..."
      })
      
   }catch(err){
    return res.status(5000).json({
        success:true,
        error:err.message,
        message:"Internal server error..."
    })
   }
}