// Steps to do it
// 1. Open Whatsapp web on your browser Chrome (https://web.whatsapp.com/)
// 2. Scan the QR Code
// 3. Select the person you want to send the text
// 4. press clt + shift + j
// 5. In Console paste the code
// 6. A popup will appear: Enter the Message
// 7. Enter the number of times the loop should run. 
// 8. Send Enter
// Note Make sure your mobile has Internet Connection


var message = prompt("Enter the message");
var endIndex = prompt("Enter the loop end index"); // The loop runs untill this number.
var counter = 0;
for(counter=0; counter<endIndex; counter++)
{
	window.InputEvent = window.Event || window.InputEvent;
	var d = new Date();
	var event = new InputEvent('input', {bubbles: true});
	var textbox= document.querySelector('#main > footer >  div._3pkkz > div._1Plpp > div > div._2S1VP.copyable-text.selectable-text');
	
	textbox.textContent = message;
	textbox.dispatchEvent(event);
	document.querySelector("#main > footer > div._3pkkz > div > button > span").click();
}
