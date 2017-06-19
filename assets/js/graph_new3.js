type = ['','info','success','warning','danger'];
    	

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
				ob  =JSON.parse(response);
				console.log(response);
				
				ob.sort(function(a, b) {
					return  parseFloat(b.value)-parseFloat(a.value) ;
				});
				//ob.sort(SortByID);
				//ob.sort(SortByID);
				t = 0;
			
				//console.log(ob.length);
				//ob = arrUnique(ob);
				//ob = arrUnique(ob);
				//console.log(ob);
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
				//console.log(urls);
				//console.log(times);
				//console.log(init_val);
				//console.log(urls.length);
				fin_val = parseInt(init_val) + 10;
				if(init_val >= urls.length){
					init_val=parseInt(urls.length) - 11;
				fin_val = parseInt(urls.length)-1;}
				//console.log(fin_val);
				label1= urls.slice(init_val,fin_val);
				series1= times.slice(init_val,fin_val);
				//console.log(label1.length);
				//console.log(series1.length);
				/**var data = {
				  labels: urls.slice(0,10),
				  series: [times.slice(0,10)]
				  
				};**/
				var data = {
				  labels: label1,
				  series: [series1]
				  
				};
				label1=[];
				series1=[];
				var options = {
					seriesBarDistance: 10,
					axisX: {
						showGrid: false
					},
					height: "245px"
				};
				
				var responsiveOptions = [
				  ['screen and (max-width: 640px)', {
					seriesBarDistance: 5,
					axisX: {
					  labelInterpolationFnc: function (value) {
						return value[0];
					  }
					}
				  }]
				];
				
				Chartist.Bar('#chartActivity', data, options, responsiveOptions);

		});
		
    
       
    },
	initChartist1: function(){    
        

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
				//console.log((response));
				//res.innerHTML = response;
				ob =JSON.parse(response);
				ob.sort(function(a, b) {
					return  parseFloat(b.value)-parseFloat(a.value) ;
				});
						t = 0;
				function arrUnique(arr) {
					arr.forEach(function(itm) {
						var unique = true;
						cleaned.forEach(function(itm2) {
							if (itm.title ==itm2.title) {itm2.time = itm2.time + itm.time ; unique = false;}
						});
						if (unique)  cleaned.push(itm);
						 
					});
					return cleaned;
				}
				//console.log(ob.length);
				//ob = arrUnique(ob);
				//ob = arrUnique(ob);
				//console.log(ob);
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
		
				var data = {
				  labels: urls,
				  series: [times]
				  
				};
			
				var options = {
					seriesBarDistance: 0,
					axisX: {
						showGrid: false
					},
					height: "245px"
				};
				
				var responsiveOptions = [
				  ['screen and (max-width: 640px)', {
					seriesBarDistance: 0,
				
				  }]
				];
				
				Chartist.Bar('#chartActivity', data, options, responsiveOptions);

		});
		
    
       
    }
    
   

    
}

