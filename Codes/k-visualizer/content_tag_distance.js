
/**
 * ReplaceAll by Fagner Brack (MIT Licensed)
 * Replaces all occurrences of a substring in a string
 */

String.prototype.replaceAll = function( token, newToken, ignoreCase ) {
    var _token;
    var str = this + "";
    var i = -1;

    if ( typeof token === "string" ) {

        if ( ignoreCase ) {

            _token = token.toLowerCase();

            while( (
                i = str.toLowerCase().indexOf(
                    token, i >= 0 ? i + newToken.length : 0
                ) ) !== -1
            ) {
                str = str.substring( 0, i ) +
                    newToken +
                    str.substring( i + token.length );
            }

        } else {
            return this.split( token ).join( newToken );
        }

    }
return str;
};

// alert('okay.this.is.a.string'.replaceAll('.', ' '));


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


// str="hi";


// alert(window.location.href);

// var siteType = 0;

siteType = '';



// // alert( window.location.href );
if( window.location.href.includes("wikipedia.org")  ){
	// alert( "wikipedia" );
	// var sityType = 1 ;		//wikpedia
	// alert(siteType);
	siteType="wikipedia";


	wordsTitle = document.getElementById('firstHeading').innerText.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	// wordsTitle = document.getElementById('firstHeading');
	// wordsTitle = wordsTitle.removeStopWords();
	// wordsTitle = wordsTitle.textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');


	wordSortTable = {};
	for(i = 0; i < wordsTitle.length; i++){
	    var current = wordsTitle[i].toLowerCase();
	    wordSortTable[current] = wordSortTable[current] == undefined ? 30 : wordSortTable[current]+30;
	}




	//SubTitle + 30
	// wordsSubTitle = document.getElementsByClassName('mw-headline');
	// for(i = 0; i < wordsSubTitle.length; i++){
	//     var current = wordsSubTitle[i].innerText.toLowerCase();
	//     wordSortTable[current] = wordSortTable[current] == undefined ? 30 : wordSortTable[current]+30;
	// }

	//SubTitle + 30 -> amendment -> news -> body
	// wordSortTable = {};
	wordsSubTitle = document.getElementsByClassName('mw-headline');		//'story-body-text story-content');


	for(i = 0; i < wordsSubTitle.length; i++){
	    var current = wordsSubTitle[i].textContent.toLowerCase().split(' ');
	    for (var j =  0; j < current.length; j++) {
	       var current2 = current[j];
	       wordSortTable[current2] = wordSortTable[current2] == undefined ? 12 : wordSortTable[current2]+12;
	    }   
	}

	// //Bold + 20
	// wordsBold = document.getElementsByTagName('b')[0].innerText.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	// for(i = 0; i < wordsSubTitle.length; i++){
	//     // var current = wordsBold[i].toLowerCase();
	// 	var current = wordsBold[i].innerText.toLowerCase();
	//     wordSortTable[current] = wordSortTable[current] == undefined ? 20 : wordSortTable[current]+20;
	// }

	//Bold + 20
	wordsBold = document.getElementsByTagName('b')[0].innerText.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	for(i = 0; i < wordsBold.length; i++){
	    var current = wordsBold[i].toLowerCase();
	    wordSortTable[current] = wordSortTable[current] == undefined ? 10 : wordSortTable[current]+10;
	}




	// wordsChunk = document.getElementsByTagName('body')[0].innerText;
	wordsChunk = document.getElementsByTagName('body')[0].textContent;
	wordsChunk = wordsChunk.removeStopWords();


	// wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace(/\n/g, ' ').replace(/[0-9]/g, '').split(' ');
	wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace('.', ' ').replace(/\n/g, ' ').split(' ');


	// wordSortTable = {};


	//near the head title + 5
	for(i = 0; i < 15; i++){
	    var current = wordsChunk[i].toLowerCase();
	    wordSortTable[current] = wordSortTable[current] == undefined ? 5 : wordSortTable[current]+5;
	}
	for(i = 15; i < 30; i++){
	    var current = wordsChunk[i].toLowerCase();
	    wordSortTable[current] = wordSortTable[current] == undefined ? 3 : wordSortTable[current]+3;
	}

	for(i = 30; i < wordsChunk.length; i++){
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
	str = '';
	for(var i = 0; i < wordSort.length; i++){
	    str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";	//0 is word, 1 is figure
	}

	// document.getElementById('mw-content-text').innerText=str;




	//visualizer from here
	var colortext = '';

	wordsChunk = document.getElementsByTagName('body')[0].innerText;
	// wordsChunk = wordsChunk.replaceAll('.', ' \n ').replaceAll(',', ' ').replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	wordsChunk = wordsChunk.replaceAll('.', ' . ').replaceAll(',', ' ').split(' ');

	// // wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace('.', ' ').split(' ');

	// wordsChunk = document.getElementsByTagName('body')[0].innerHTML;
	// wordsChunk = wordsChunk.replaceAll('.', ' \n ').replaceAll(',', ' ').replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	// wordsChunk = wordsChunk.replaceAll('.', ' . ').replaceAll(',', ' ').split(' ');



	indicator=0;
	for(var i=0; i<wordsChunk.length;i++){
		indicator=0;
		for(var j = 0; j < wordSort.length; j++){
			
			if(wordsChunk[i].toLowerCase() == '.'){
				colortext += '. <br> '
				indicator =1;
				break;
			}


			if(wordsChunk[i].toLowerCase() == wordSort[j][0].toLowerCase() ){
				if( stopWords.includes(wordsChunk[i].toLowerCase()) ){
					colortext += "<FONT size='2.9' color='Green' >" + wordsChunk[i] + "</FONT> " //wordsChunk[i] +' ';
					indicator =1;		
				}else if(j<=1){
					colortext +=  "<FONT size='7' color='FireBrick' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>1 && j<=3 ){
					colortext +=  "<FONT size='6.8' color='Magenta' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>3 && j<=5 ){
					colortext +=  "<FONT size='6.6' color='Tomato' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>5 && j<=7 ){
					colortext +=  "<FONT size='6.4' color='Orange' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>7 && j<=9 ){
					colortext +=  "<FONT size='6.2' color='Coral' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>9 && j<=11 ){
					colortext +=  "<FONT size='6' color='Purple' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>11 && j<=13 ){
					colortext +=  "<FONT size='5.8' color='CornflowerBlue' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>13 && j<=15 ){
					colortext +=  "<FONT size='5.6' color='LightSeaGreen' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>15 && j<=17 ){
					colortext +=  "<FONT size='5.4' color='Aqua' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>17 && j<=19 ){
					colortext +=  "<FONT size='5.1' color='HotPink' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>19 && j<=22 ){
					colortext +=  "<FONT size='4.8' color='Indigo' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>22 && j<=25 ){
					colortext +=  "<FONT size='4.5' color='Lime' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>25 && j<=28 ){
					colortext +=  "<FONT size='4.2' color='MediumSeaGreen' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>28 && j<=31 ){
					colortext +=  "<FONT size='3.9' color='Olive' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>31 && j<=35 ){
					colortext +=  "<FONT size='3.6' color='Navy' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>35 && j<=40 ){
					colortext +=  "<FONT size='3.3' color='Orchid' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else{
					colortext +=   "<FONT size='3' color='Gold' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}
			}

		    // str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
		}
		if(indicator==0){
			colortext += "<FONT size='2.7' color='ForestGreen' >" + wordsChunk[i] + "</FONT> " //wordsChunk[i] +' ';		
		}

	}






	
	document.getElementById('bodyContent').innerHTML = colortext;
























}else if( window.location.href.includes("nytimes.com") ){
	// alert("newyorktimes");
	// var siteType = 2 ;		//newyork times
	siteType="nytimes";





	// wordsChunk = document.getElementsByTagName('body')[0].textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	// wordSortTable = {};
	// for(i = 0; i < wordsChunk.length; i++){
	//     var current = wordsChunk[i].toLowerCase();
	//     wordSortTable[current] = wordSortTable[current] == undefined ? 1 : wordSortTable[current]+1;
	// }
	// wordSort = [];
	// for(var name in wordSortTable){
	//    if(name.length == 1 && name.match(/\W/g))
	//     continue;
	//    wordSort.push([name, wordSortTable[name]]);
	// }
	// wordSort.sort(function(a, b) {return b[1] - a[1]});
	// wordSort = wordSort.slice(0, 40);
	// str = '';
	// for(var i = 0; i < wordSort.length; i++){
	//     str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
	// }
	// alert(str);

















// 	alert(siteType);

	
// 	//Title + 50
	// wordsTitle = document.getElementById('story-heading');
	// wordsTitle = wordsTitle.removeStopWords();
	// wordsTitle = wordsTitle.textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');

	wordsTitle = document.getElementById('story-heading').innerText.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	


	wordSortTable = {};
	for(i = 0; i < wordsTitle.length; i++){
	    var current = wordsTitle[i].toLowerCase();
	    wordSortTable[current] = wordSortTable[current] == undefined ? 50 : wordSortTable[current]+50;
	}

// 	alert(wordSortTable[0]);

// // .replace(/\s{2,}/g, '').replace(/\n/g, ' ')

// // wordsSubTitle -> relatedWords
// 	relatedWords = document.getElementsByClassName('story theme-summary');
// 	for(i = 0; i < wordsSubTitle.length; i++){
// 	    var current = relatedWords[i].textContent.toLowerCase().split(' ');
// 	    for (var j =  0; j < current.length; j++) {
// 	       var current2 = current[j];
// 	       wordSortTable[current2] = wordSortTable[current2] == undefined ? 30 : wordSortTable[current2]+30;
// 	    }   
// 	}


// 	alert(wordSortTable);

	//SubTitle + 30 -> amendment -> news -> body
	// wordSortTable = {};
	// wordsSubTitle = document.getElementsByClassName('mw-headline');		//'story-body-text story-content');
	// for(i = 0; i < wordsSubTitle.length; i++){
	//     var current = wordsSubTitle[i].textContent.toLowerCase().split(' ');
	//     for (var j =  0; j < current.length; j++) {
	//        var current2 = current[j];
	//        wordSortTable[current2] = wordSortTable[current2] == undefined ? 30 : wordSortTable[current2]+30;
	//     }   
	// }


	//Bold + 20
	// wordsBold = document.getElementsByTagName('b')[0].innerText.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	// for(i = 0; i < wordsBold.length; i++){
	//     var current = wordsBold[i].toLowerCase();
	//     wordSortTable[current] = wordSortTable[current] == undefined ? 20 : wordSortTable[current]+20;
	// }








	// wordsChunk = document.getElementsByTagName('body')[0].textContent;
	wordsChunk = document.getElementsByTagName('body')[0].innerText;

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
	str = '';
	for(var i = 0; i < wordSort.length; i++){
	    str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";	//0 is word, 1 is figure
	}

	// document.getElementById('mw-content-text').innerText=str;




	//visualizer from here
	var colortext = '';

	wordsChunk = document.getElementsByTagName('body')[0].innerText;
	// wordsChunk = wordsChunk.replaceAll('.', ' \n ').replaceAll(',', ' ').replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	wordsChunk = wordsChunk.replaceAll('.', ' . ').replaceAll(',', ' ').split(' ');

	// wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace('.', ' ').split(' ');


	indicator=0;
	for(var i=0; i<wordsChunk.length;i++){
		indicator=0;
		for(var j = 0; j < wordSort.length; j++){
			
			if(wordsChunk[i].toLowerCase() == '.'){
				colortext += '. <br> '
				indicator =1;
				break;
			}

			if(wordsChunk[i].toLowerCase() == wordSort[j][0].toLowerCase() ){
				if( stopWords.includes(wordsChunk[i].toLowerCase()) ){
					colortext += "<FONT size='2.9' color='Green' >" + wordsChunk[i] + "</FONT> " //wordsChunk[i] +' ';
					indicator =1;		
				}else if(j<=1){
					colortext +=  "<FONT size='7' color='FireBrick' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>1 && j<=3 ){
					colortext +=  "<FONT size='6.8' color='Magenta' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>3 && j<=5 ){
					colortext +=  "<FONT size='6.6' color='Tomato' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>5 && j<=7 ){
					colortext +=  "<FONT size='6.4' color='Orange' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>7 && j<=9 ){
					colortext +=  "<FONT size='6.2' color='Coral' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>9 && j<=11 ){
					colortext +=  "<FONT size='6' color='Purple' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>11 && j<=13 ){
					colortext +=  "<FONT size='5.8' color='CornflowerBlue' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>13 && j<=15 ){
					colortext +=  "<FONT size='5.6' color='LightSeaGreen' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>15 && j<=17 ){
					colortext +=  "<FONT size='5.4' color='Aqua' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>17 && j<=19 ){
					colortext +=  "<FONT size='5.1' color='HotPink' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>19 && j<=22 ){
					colortext +=  "<FONT size='4.8' color='Indigo' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>22 && j<=25 ){
					colortext +=  "<FONT size='4.5' color='Lime' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>25 && j<=28 ){
					colortext +=  "<FONT size='4.2' color='MediumSeaGreen' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>28 && j<=31 ){
					colortext +=  "<FONT size='3.9' color='Olive' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>31 && j<=35 ){
					colortext +=  "<FONT size='3.6' color='Navy' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>35 && j<=40 ){
					colortext +=  "<FONT size='3.3' color='Orchid' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else{
					colortext +=   "<FONT size='3' color='Gold' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}
			}

		    // str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
		}
		if(indicator==0){
			colortext += "<FONT size='2.7' color='ForestGreen' >" + wordsChunk[i] + "</FONT> " //wordsChunk[i] +' ';		
		}

	}




		
	document.getElementById('story-body').innerHTML = colortext;













}else{		//일반 싸이트
	// var siteType =0;
	siteType = '' ;


	// wordsChunk = document.getElementsByTagName('body')[0].textContent;
	wordsChunk = document.getElementsByTagName('body')[0].innerText;
	wordsChunk = wordsChunk.removeStopWords();
	wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace('.', ' ').replace(/\n/g, ' ').split(' ');
	

	wordSortTable = {};
	for(i = 0; i < wordsChunk.length; i++){
	    var current = wordsChunk[i].toLowerCase();
	    wordSortTable[current] = wordSortTable[current] == undefined ? 1 : wordSortTable[current]+1;
	}
	wordSort = [];
	for(var name in wordSortTable){
	   if(name.length == 1 && name.match(/\W/g))
	    continue;
	   wordSort.push([name, wordSortTable[name]]);
	}
	wordSort.sort(function(a, b) {return b[1] - a[1]});
	wordSort = wordSort.slice(0, 40);
	str = '';
	for(var i = 0; i < wordSort.length; i++){
	    str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
	}
	// // alert(str);		






	//visualizer from here
	var colortext = '';

	wordsChunk = document.getElementsByTagName('body')[0].innerText;
	// wordsChunk = wordsChunk.replaceAll('.', ' \n ').replaceAll(',', ' ').replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
	wordsChunk = wordsChunk.replaceAll('.', ' . ').replaceAll(',', ' ').split(' ');

	// wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace('.', ' ').split(' ');

	indicator=0;
	for(var i=0; i<wordsChunk.length;i++){
		indicator=0;
		for(var j = 0; j < wordSort.length; j++){
			
			if(wordsChunk[i].toLowerCase() == '.'){
				colortext += '. <br> '
				indicator =1;
				break;
			}

			if(wordsChunk[i].toLowerCase() == wordSort[j][0].toLowerCase() ){
				if( stopWords.includes(wordsChunk[i].toLowerCase()) ){
					colortext += "<FONT size='2.9' color='Green' >" + wordsChunk[i] + "</FONT> " //wordsChunk[i] +' ';
					indicator =1;		
				}else if(j<=1){
					colortext +=  "<FONT size='7' color='FireBrick' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>1 && j<=3 ){
					colortext +=  "<FONT size='6.8' color='Magenta' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>3 && j<=5 ){
					colortext +=  "<FONT size='6.6' color='Tomato' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>5 && j<=7 ){
					colortext +=  "<FONT size='6.4' color='Orange' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>7 && j<=9 ){
					colortext +=  "<FONT size='6.2' color='Coral' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>9 && j<=11 ){
					colortext +=  "<FONT size='6' color='Purple' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>11 && j<=13 ){
					colortext +=  "<FONT size='5.8' color='CornflowerBlue' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>13 && j<=15 ){
					colortext +=  "<FONT size='5.6' color='LightSeaGreen' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>15 && j<=17 ){
					colortext +=  "<FONT size='5.4' color='Aqua' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>17 && j<=19 ){
					colortext +=  "<FONT size='5.1' color='HotPink' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>19 && j<=22 ){
					colortext +=  "<FONT size='4.8' color='Indigo' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>22 && j<=25 ){
					colortext +=  "<FONT size='4.5' color='Lime' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>25 && j<=28 ){
					colortext +=  "<FONT size='4.2' color='MediumSeaGreen' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>28 && j<=31 ){
					colortext +=  "<FONT size='3.9' color='Olive' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>31 && j<=35 ){
					colortext +=  "<FONT size='3.6' color='Navy' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else if( j>35 && j<=40 ){
					colortext +=  "<FONT size='3.3' color='Orchid' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}else{
					colortext +=   "<FONT size='3' color='Gold' >" + wordsChunk[i] + "</FONT> ";
					indicator=1;
				}
			}

		    // str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
		}
		if(indicator==0){
			colortext += "<FONT size='2.7' color='ForestGreen' >" + wordsChunk[i] + "</FONT> " //wordsChunk[i] +' ';		
		}

	}




		
	document.getElementsByTagName('body')[0].innerHTML = colortext;







}












// Send a message containing the selected text and page url back to the event (background) page
chrome.runtime.sendMessage({
	'action': 'submit the form',
	'url': window.location.href ,
	'selectedText' : str


});



