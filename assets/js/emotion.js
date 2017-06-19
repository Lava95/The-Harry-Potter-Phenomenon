//type = ['info','success','warning','danger','primary'];
//type = ['info','success','success'];


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
    initChartist_emotion: function(){
		//localStorage["emotion"]="[{'happiness':0.1},{'sadness':0.3},{'relief':0.4}]";
		
        var emotion = localStorage.getItem("emotion");

        var emotion_list=new Array();
        var emotion_value= new Array();
        var len = (emotion.match(/:/g) || []).length;
        cat=emotion.split('{')[1];
        cat2=cat.split('}')[0];

		//emotion_list=["love","neutral","hate"];
		//emotion_value=[0.1,0.1,0.1];

        for(i=0;i<len;i++) {
            v = cat2.split(',')[i].split(':');
            emotion_list.push(v[0]+"  "+v[1]*100+"%");

            emotion_value.push(v[1]);
            //.split(":")[0].split("{")[1];
        }  //uncomment this
       var options = {
		   width: 650,
		   height: 400,
  labelInterpolationFnc: function(value) {
    return value[0]
  },
  
}; 
	var responsiveOptions = [
			['screen and (min-width: 640px)', {
			chartPadding: 30,
			labelOffset: 100,
			labelDirection: 'explode',
			labelInterpolationFnc: function(value) {
			return value;
			}
			}],
			['screen and (min-width: 1024px)', {
			labelOffset: 100,
			chartPadding: 40
			}]
		];
        Chartist.Pie('#chartPreferences', {
            labels: emotion_list,
            series: emotion_value
        },options,responsiveOptions);
    },

	showNotification: function(from, align){
    	color = Math.floor((Math.random() * 4) + 1);
    	
    	$.notify({
        	icon: "pe-7s-gift",
        	message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        	
        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
	}

    
}

