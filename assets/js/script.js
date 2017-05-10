/* global $ */

$(document).ready(function() {
	
	var brand = $('.brand'),
	    burger_icon = $('#nav-icon1');
	    
	/* Burger Menu Icon */ 
  
	burger_icon.click(function(){
		$(this).toggleClass('open');
	    //accordion.toggleClass('accordion-active');
	});
	

	
	$('#fullpage').fullpage({
	    anchors:['page1', 'page2', 'page3', 'page4', 'page5'],
	    sectionsColor: ['#5f5d9f', '#fff', '#fff', '#cbf1f1', '#fff'],
	    fitToSection: false,
	    scrollBar: true,
	    lazyLoading: true,
	    
	    afterRender: function(){
            //brand.addClass('invisible');
		},
		
		afterLoad: function(anchorLink, index){ 
			if(index == 1){
	             brand.addClass('invisible');
	        }
	        
	        else if (index !== 1) {
	            brand.removeClass('invisible');
	        }
		}
	    
	});
	
	var owl = $("#owl-organizers");
	
	owl.owlCarousel({
		items: 4
	});
	
});