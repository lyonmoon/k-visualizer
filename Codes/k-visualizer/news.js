String.isStopWord = function(word)
{
	var regex = new RegExp("\\b"+word+"\\b","i");
	if(stopWords.search(regex) < 0)
	{
		return false;
	}else
	{
		return true;	
	}
}

String.prototype.removeStopWords = function()
{
	words = new Array();
	
	this.replace(/\b[\w]+\b/g,
			function($0)
			{
				if(!String.isStopWord($0))
				{
					words[words.length] = $0.trim();
				}
			}
		); 
	return words.join(" ");
}

var stopWords = "a,able,about,above,abst,accordance,according,accordingly,across,act,actually,added,adj,\
affected,affecting,affects,after,afterwards,again,against,ah,all,almost,alone,along,already,also,although,\
always,am,among,amongst,an,and,announce,another,any,anybody,anyhow,anymore,anyone,anything,anyway,anyways,\
anywhere,apparently,approximately,are,aren,arent,arise,around,as,aside,ask,asking,at,auth,available,away,awfully,\
b,back,be,became,because,become,becomes,becoming,been,before,beforehand,begin,beginning,beginnings,begins,behind,\
being,believe,below,beside,besides,between,beyond,biol,both,brief,briefly,but,by,c,ca,came,can,cannot,can't,cause,causes,\
certain,certainly,co,com,come,comes,contain,containing,contains,could,couldnt,d,date,did,didn't,different,do,does,doesn't,\
doing,done,don't,down,downwards,due,during,e,each,ed,edu,effect,eg,eight,eighty,either,else,elsewhere,end,ending,enough,\
especially,et,et-al,etc,even,ever,every,everybody,everyone,everything,everywhere,ex,except,f,far,few,ff,fifth,first,five,fix,\
followed,following,follows,for,former,formerly,forth,found,four,from,further,furthermore,g,gave,get,gets,getting,give,given,gives,\
giving,go,goes,gone,got,gotten,h,had,happens,hardly,has,hasn't,have,haven't,having,he,hed,hence,her,here,hereafter,hereby,herein,\
heres,hereupon,hers,herself,hes,hi,hid,him,himself,his,hither,home,how,howbeit,however,hundred,i,id,ie,if,i'll,im,immediate,\
immediately,importance,important,in,inc,indeed,index,instead,into,invention,inward,is,isn't,it,itd,it'll,its,itself,\
i've,j,just,k,keep,keeps,kept,kg,km,know,known,knows,l,largely,last,lately,later,latter,latterly,least,less,lest,let,lets,like,\
liked,likely,line,little,'ll,look,looking,looks,ltd,m,made,mainly,make,makes,many,may,maybe,me,mean,means,meantime,meanwhile,\
merely,mg,might,million,miss,ml,more,moreover,most,mostly,mr,mrs,much,mug,must,my,myself,n,na,name,namely,nay,nd,near,nearly,\
necessarily,necessary,need,needs,neither,never,nevertheless,new,next,nine,ninety,no,nobody,non,none,nonetheless,noone,nor,\
normally,nos,not,noted,nothing,now,nowhere,o,obtain,obtained,obviously,of,off,often,oh,ok,okay,old,omitted,on,once,one,ones,\
only,onto,or,ord,other,others,otherwise,ought,our,ours,ourselves,out,outside,over,overall,owing,own,p,page,pages,part,\
particular,particularly,past,per,perhaps,placed,please,plus,poorly,possible,possibly,potentially,pp,predominantly,present,\
previously,primarily,probably,promptly,proud,provides,put,q,que,quickly,quite,qv,r,ran,rather,rd,re,readily,really,recent,\
recently,ref,refs,regarding,regardless,regards,related,relatively,research,respectively,resulted,resulting,results,right,run,s,\
said,same,saw,say,saying,says,sec,section,see,seeing,seem,seemed,seeming,seems,seen,self,selves,sent,seven,several,shall,she,shed,\
she'll,shes,should,shouldn't,show,showed,shown,showns,shows,significant,significantly,similar,similarly,since,six,slightly,so,\
some,somebody,somehow,someone,somethan,something,sometime,sometimes,somewhat,somewhere,soon,sorry,specifically,specified,specify,\
specifying,still,stop,strongly,sub,substantially,successfully,such,sufficiently,suggest,sup,sure,t,take,taken,taking,tell,tends,\
th,than,thank,thanks,thanx,that,that'll,thats,that've,the,their,theirs,them,themselves,then,thence,there,thereafter,thereby,\
thered,therefore,therein,there'll,thereof,therere,theres,thereto,thereupon,there've,these,they,theyd,they'll,theyre,they've,\
think,this,those,thou,though,thoughh,thousand,throug,through,throughout,thru,thus,til,tip,to,together,too,took,toward,towards,\
tried,tries,truly,try,trying,ts,twice,two,u,un,under,unfortunately,unless,unlike,unlikely,until,unto,up,upon,ups,us,use,used,\
useful,usefully,usefulness,uses,using,usually,v,value,various,'ve,very,via,viz,vol,vols,vs,w,want,wants,was,wasn't,way,we,wed,\
welcome,we'll,went,were,weren't,we've,what,whatever,what'll,whats,when,whence,whenever,where,whereafter,whereas,whereby,wherein,\
wheres,whereupon,wherever,whether,which,while,whim,whither,who,whod,whoever,whole,who'll,whom,whomever,whos,whose,why,widely,\
willing,wish,with,within,without,won't,words,world,would,wouldn't,www,x,y,yes,yet,you,youd,you'll,your,youre,yours,yourself,\
yourselves,you've,z,zero";





//Title + 50
wordsTitle = document.getElementById('firstHeading').textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
wordSortTable = {};
for(i = 0; i < wordsTitle.length; i++){
    var current = wordsTitle[i].toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 50 : wordSortTable[current]+50;
}




//SubTitle + 30
wordsSubTitle = document.getElementsByClassName('mw-headline');
for(i = 0; i < wordsSubTitle.length; i++){
    var current = wordsSubTitle[i].textContent.toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 30 : wordSortTable[current]+30;
}


// //Bold + 20
// wordsBold = document.getElementsByTagName('b')[0].textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
// for(i = 0; i < wordsSubTitle.length; i++){
//     // var current = wordsBold[i].toLowerCase();
// 	var current = wordsBold[i].textContent.toLowerCase();
//     wordSortTable[current] = wordSortTable[current] == undefined ? 20 : wordSortTable[current]+20;
// }

//Bold + 20
wordsBold = document.getElementsByTagName('b')[0].textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
for(i = 0; i < wordsBold.length; i++){
    var current = wordsBold[i].toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 20 : wordSortTable[current]+20;
}




wordsChunk = document.getElementsByTagName('body')[0].textContent;
wordsChunk = wordsChunk.removeStopWords();


// wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace(/\n/g, ' ').replace(/[0-9]/g, '').split(' ');
wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace('.', ' ').replace(/\n/g, ' ').split(' ');


// wordSortTable = {};


//near the head title + 5
for(i = 0; i < 30; i++){
    var current = wordsChunk[i].toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 5 : wordSortTable[current]+5;
}

for(i = 31; i < wordsChunk.length; i++){
    var current = wordsChunk[i].toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 1 : wordSortTable[current]+1;
}
wordSort = [];


// for(var name in wordSortTable){
//    if(name.length == 1 && name.match(/\W/g))
//     continue;
//    wordSort.push([name, wordSortTable[name]]);
// }
for(var name in wordSortTable){
   if(name.length <= 2 || name.match(/\W/g) || name.match("jump") || name.match("retrieved"))	//wikipedia: jump is hidden, retrieved is in reference
    continue;
   wordSort.push([name, wordSortTable[name]]);
}


wordSort.sort(function(a, b) {return b[1] - a[1]});
wordSort = wordSort.slice(0, 40);
// str = 'WordCounter.js  \n';
// for(var i = 0; i < wordSort.length; i++){
//     str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
// }
str = '';
for(var i = 0; i < 4; i++){
    str += wordSort[i][0]+' ';
}




// Send a message containing the selected text and page url back to the event (background) page
chrome.runtime.sendMessage({
	'action': 'top 3 query',
	'url': window.location.href ,
	'selectedText' : str
	// 'selectedText' : window.document.getElementsByTagName('html')[0].innerText
	// 'selectedText' : window.document.childNodes[1].innerText

	// 'selectedText' : window.document.childNodes[1].innerHTML


});