jQuery(document).ready(function(){$(".slider").bxSlider();var e=$("#openmenu"),n=$("#closemenu"),t=$("#slde-menu");e.click(function(e){e.preventDefault(),$(this).hide(),n.show(),t.fadeIn()}),n.click(function(n){n.preventDefault(),$(this).hide(),e.show(),t.fadeOut()}),$(window).resize(function(){$(this).width()>=480&&$("#slde-menu").removeAttr("style")})});