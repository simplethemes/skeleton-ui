function positionFooter(){var e=$("#footer");$(document.body).height()+e.outerHeight()<$(window).height()&&e.css("position")==="fixed"||$(document.body).height()<$(window).height()&&e.css("position")!=="fixed"?e.css({position:"fixed",bottom:"0px"}):e.css({position:"static"})}jQuery(document).ready(function(e){e("#nav-wrap").prepend('<a href="#" id="shownav">Menu</a>');e("#shownav").on("click",function(t){e("#nav").slideToggle("fast",function(){});t.preventDefault()});positionFooter();e(window).scroll(positionFooter);e(window).resize(positionFooter);e(window).load(positionFooter);e('a[rel="external"]').click(function(){window.open(e(this).attr("href"));return!1})});