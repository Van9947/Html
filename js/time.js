// JavaScript Document
		
			function startTime()   
			{   
				var today=new Date();
				var yyyy = today.getFullYear();  
				var MM = today.getMonth()+1;   
				var dd = today.getDate();   
				var hh=today.getHours();
				var mm=today.getMinutes(); 
				var ss=today.getSeconds();  
				MM=checkTime(MM);
				dd=checkTime(dd);
				mm=checkTime(mm);   
				ss=checkTime(ss);    
				var day; 
				if(today.getDay()==0)   day   =   "������ " 
				if(today.getDay()==1)   day   =   "����һ " 
				if(today.getDay()==2)   day   =   "���ڶ� " 
				if(today.getDay()==3)   day   =   "������ " 
				if(today.getDay()==4)   day   =   "������ " 
				if(today.getDay()==5)   day   =   "������ " 
				if(today.getDay()==6)   day   =   "������ " 
				document.getElementById('nowDateTimeSpan').innerHTML=yyyy+"-"+MM +"-"+ dd +" " + hh+":"+mm+":"+ss+"   " + day;   
				setTimeout('startTime()',1000);
			}   
			
			function checkTime(i)   
			{   
				if (i<10){
					i="0" + i;
				}   
				  return i;
			}  
        var interval;
        var pos = 0;
        window.onload = function() {
            var images = document.getElementsByTagName('img');
            var tab = document.getElementById("tab");
            tab.onmouseover = function() {
                clearInterval(interval);
            }
            tab.onmouseout = function() {
                run(images);
            }
            run(images);
        }
        var run = function(images) {
            interval = setInterval(function() {
                images[pos].style.display = 'none';
                pos = ++pos == images.length ? 0 : pos;
                images[pos].style.display = 'inline';
            }, 1000);
        }