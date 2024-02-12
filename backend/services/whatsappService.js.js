const https = require('follow-redirects').https;

exports.sendMessage =  ({message}) =>{
  
  return  fetch('https://messages-sandbox.nexmo.com/v1/messages', 
   {
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
          text: `${message}`,
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
}