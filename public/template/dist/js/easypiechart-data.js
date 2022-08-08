/*Easypiechart Init*/

$(document).ready(function() {
	"use strict";
	if( $('#pie_chart_2').length > 0 ){
		$('#pie_chart_2').easyPieChart({
			barColor : 'rgb(238, 145, 0)',
			lineWidth: 15,
			animate: 3000,
			size:	100,
			lineCap: 'square',
			scaleColor: '#f5f5f6',
			trackColor: '#f5f5f6',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
});

$(document).ready(function() {
	"use strict";
	if( $('#pie_chart_3').length > 0 ){
		$('#pie_chart_3').easyPieChart({
			barColor : '#90d7a3',
			lineWidth: 3,
			animate: 3000,
			size:	100,
			lineCap: 'square',
			scaleColor: '#f5f5f6',
			trackColor: '#f5f5f6',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
});
