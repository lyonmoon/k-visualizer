//v0.1

//이거하면 우클릭
// callback function
// function onItemClick(info, tab){
// 	// Inject the content script into the current page
// 	chrome.tabs.executeScript(null, { file: 'content.js' });
// }
// function onItemClick2(info, tab){
// 	// Inject the content script into the current page
// 	chrome.tabs.executeScript(null, { file: 'content2.js' });
// }

// var context = "selection";
// var title = "Term Frequency";
// var id = chrome.contextMenus.create({"title": title, "contexts": [context], "onclick": onItemClick});





//in the popup page, onclick
// var alg1Btn = document.getElementById('alg1_btn');
// alg1Btn.addEventListener('click', function(){
//     // alert('Hello world');
// 	// Inject the content script into the current page
// 	chrome.tabs.executeScript(null, { file: 'content.js' });
// })




var newsBtn = document.getElementById('news_btn');
newsBtn.addEventListener('click', function(){

	chrome.tabs.executeScript(null, { file: 'news.js' });

})


var tagBtn = document.getElementById('tag_btn');
tagBtn.addEventListener('click', function(){

	// chrome.tabs.executeScript(null, { file: 'content_tag3.js' });

	// chrome.tabs.executeScript(null, { file: 'content_tf.js' });

	// chrome.tabs.executeScript(null, { file: 'content_distance2.js' });
	
	chrome.tabs.executeScript(null, { file: 'content_tag_distance.js' });
})




// Perform the callback when a message is received from the content script
chrome.runtime.onMessage.addListener(function(message){
	if (message.action == 'submit the form'){
		//message should contain the selected text and url - ensure that this is the correct message
		
		document.getElementById('textarea1').innerText=message.selectedText;

		// var url = "data:text/html;charset=utf8,";
		
		// function append(key, value){
		// 	var input = document.createElement('textarea');
		// 	input.setAttribute('name', key);
		// 	input.textContent = value;
		// 	form.appendChild(input);
		// }
		
		// var form = document.createElement('form');
		// form.method = 'POST';

		// form.action = 'http://www.cliptext.co/clipr.php';

		// // form.action = 'http://localhost:8080/clipr.php';

		// // form.action = 'http://www.cliptext.co/clipr.php';
		// // form.action = 'http://localhost:80/clipr.php';
		// // form.action = 'http://localhost:80/visualizer.php';

		// // form.action = 'http://localhost/cliptext/clipr.php';


		// form.style.visibility = "hidden";
		// append('url', message.url);
		// append('text', message.selectedText);
		
		// //append new info in message
		// // append('radioBox',str );

		// url = url + encodeURIComponent(form.outerHTML);
		// url = url + encodeURIComponent('<script>document.forms[0].submit();</script>');
		// chrome.tabs.create({url: url, active: true});
		// chrome.tabs.create({url: "http://google.com/", active: true});
	}else if(message.action == 'top 3 query'){
		str="https://www.google.co.kr/webhp?hl=ko#newwindow=1&hl=ko&tbm=nws&q=";


		str += message.selectedText;
		chrome.tabs.create({url: str, active: true});
	}
});




