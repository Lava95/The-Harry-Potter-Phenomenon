type = ['','info','success','warning','danger'];
var reload = false;
console.log("r1");
console.log(reload);
demo = {
    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');  
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },
    
    initChartist: function(init_val){    
        //location.reload();
		label1 = []
		var cleaned = [];

		var editorExtensionId = "inbokaabkeemnjfgolbfjhkcmcalnbcm";
		var port = chrome.runtime.connect(editorExtensionId);
		port.postMessage({joke: "Knock knock"});
		// Make a simple request:
		urls = [];
		times = [];
		chrome.runtime.sendMessage("inbokaabkeemnjfgolbfjhkcmcalnbcm",{openUrlInEditor: "google.com"},
		function(response) {
			
		});

		//location.reload();
		console.log("here1");
		demo.initChartist1(init_val);
		//location.reload();


       
    },
    initChartist1: function(init_val){    
        //location.reload();
		label1 = []
		var cleaned = [];

		var editorExtensionId = "inbokaabkeemnjfgolbfjhkcmcalnbcm";
		var port = chrome.runtime.connect(editorExtensionId);
		port.postMessage({joke: "Knock knock"});
		// Make a simple request:
		urls = [];
		times = [];
		chrome.runtime.sendMessage("inbokaabkeemnjfgolbfjhkcmcalnbcm",{openUrlInEditor: "google.com"},
		function(response) {
			
		});

		//location.reload();
		console.log("here1");
		demo.initChartist2(init_val);
		//location.reload();


       
    },
     initChartist2: function(init_val){    
        //location.reload();
		console.log("here2");

		label1 = []
		var cleaned = [];

		var editorExtensionId = "inbokaabkeemnjfgolbfjhkcmcalnbcm";
		var port = chrome.runtime.connect(editorExtensionId);
		port.postMessage({joke: "Knock knock"});
		// Make a simple request:
		urls = [];
		times = [];
		chrome.runtime.sendMessage("inbokaabkeemnjfgolbfjhkcmcalnbcm",{openUrlInEditor: "google.com"},
		function(response) {
				//console.log(JSON.parse(response).length);
				//res.innerHTML = response;
				console.log("here3");

				ob  =JSON.parse(response);
				console.log(JSON.stringify(ob));
				// ob.sort(function(a, b) {
					// return parseFloat(a.time) - parseFloat(b.time);
				// });
				function SortByID(x,y) {
					  return y.value - x.value; 
					}
				ob.sort(SortByID);
				t = 0;
				function arrUnique(arr) {
					arr.forEach(function(itm) {
						var unique = true;
						cleaned.forEach(function(itm2) {
							if (itm.title ==itm2.title) 
							{
								//console.log(itm2);
								if(!parseInt(itm2.visit_count)) itm2.visit_count = 1;
								itm2.visit_count = parseInt(itm2.visit_count) + parseInt(1); 								
								//itm2.time = itm2.time + itm.time ; 
								//console.log(itm2);

								unique = false;
						
						
						}
						});
						if (unique){ itm.visit_count = parseInt(1); cleaned.push(itm);}
						//console.log(JSON.stringify(cleaned));
						//console.log("\n");

					});
					//console.log(JSON.stringify(cleaned));
					return cleaned;
				}
				//ob = arrUnique(ob);
				ob = arrUnique(ob);
				//console.log(JSON.stringify(ob));
				for(i=0;i<ob.length;i++)
				{
					domain = ob[i].title.split(".");
					if(domain.length > 2)
					{
						if(domain[0] == "www")
							urls.push(domain[1]);
						else
							urls.push(domain[0]);
					}
					else if(domain.length == 2) urls.push(domain[0]);
					times.push(ob[i].value);

				}
			
			function getStatus(u,tim)
			{
				Education = ["scn","io","net","com","getbootstrap","c","java","python","nic","cbse","icse","puc","jsfiddle","ncert","school","edu","vtu","ampercent","stackoverflow","demos","github","w3","creative-tim","guidingtech","javascript-coder","w3schools","googleusercontent","chrome","office","groovypost","v4-alpha","googlesource","codeproject","markb","gionkunz","translate","morrisjs","color-hex","toolbarbrowser","jqwidgets","demos","williammalone","developer","devcurry","jsbin","tutorialrepublic","wiki","herokuapp","wordaz","chartjs","mdbootstrap","localhost","lexilogos","codepen","json-xls","tutorialspoint","javatpoint","khanacademy","coursera","codeschool","codeacademy","hackerrank","hackerearth"];
				Entertainment = ["youtube","netflix","hotstar","megashare","torrentz2","ganeshaspeaks","tarot","shivkumar"];
				Social = ["facebook","fb","twitter","tumblr","instagram","hangouts","bootsnipp","filecluster","wordpress","colourlovers","miniclip"];
				personal = ["yahoo","Whatsaap","mail","drive","google","chrome-signin","co","mozilla","kirupa","airtel"];
				Shopping = ["amway","shoppersstop"];
				news = ["bbc","ndtv","tv9","espn"]
				Business = ["linkedin","business"];
				
				domain = u.split(".");
				if(domain.length<2){ domain = domain[0].toLowerCase();}
				else domain = domain[1].toLowerCase();
				
				//console.log(domain);
				if(Education.indexOf(domain)>-1) return "Education:green";
				else if (Entertainment.indexOf(domain)>-1) return "Entertainment:yellow";
				else if (Social.indexOf(domain)>-1) return "Social:red";
				else if (Shopping.indexOf(domain)>-1) return "Shopping:pink";
				else if (news.indexOf(domain)>-1) return "news:blue";
				else if (Business.indexOf(domain)>-1) return "Business:purple";
				else if (personal.indexOf(domain)>-1) return "personal:orange";
				return "Unknown:grey";
				//div.style.backgroundColor = "red";
				
				
			}

			full_tabel = document.getElementById("visit_table");
			for(i=0;i<ob.length;i++)
			{
				row = full_tabel.insertRow(i+1);
				site =row.insertCell(0);
				site.innerHTML = ob[i].title;
				//visit =row.insertCell(1);
				//visit.innerHTML = ob[i].visit_count;
				time =row.insertCell(1);
				//Status =row.insertCell(3);
				
				/*	
				div = document.createElement("div");
				x = getStatus(ob[i].title,ob[i].value);
				//console.log(JSON.stringify(x));
				x = x.split(":");
				div.style.backgroundColor = x[1];

				div.height = "50%";
				//getStatus(ob[i].title,ob[i].time,div);
				div.width="100%";
				div.style.border="2px solid black";
				div.innerHTML = x[0];
				Status.appendChild(div);
				*/
			
				time.innerHTML = ob[i].value+" min" ;


		
			}

				

		});
		console.log("here4");
		//reload = true;




       
    }
   
    
}

