
/**
@license Sticky-kit v1.1.2 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var $,win;$=this.jQuery||window.jQuery;win=$(window);$.fn.stick_in_parent=function(opts){var doc,elm,enable_bottoming,inner_scrolling,manual_spacer,offset_top,outer_width,parent_selector,recalc_every,sticky_class,_fn,_i,_len;if(opts==null){opts={}}
sticky_class=opts.sticky_class,inner_scrolling=opts.inner_scrolling,recalc_every=opts.recalc_every,parent_selector=opts.parent,offset_top=opts.offset_top,manual_spacer=opts.spacer,enable_bottoming=opts.bottoming;if(offset_top==null){offset_top=0}
if(parent_selector==null){parent_selector=void 0}
if(inner_scrolling==null){inner_scrolling=!0}
if(sticky_class==null){sticky_class="is_stuck"}
doc=$(document);if(enable_bottoming==null){enable_bottoming=!0}
outer_width=function(el){var computed,w,_el;if(window.getComputedStyle){_el=el[0];computed=window.getComputedStyle(el[0]);w=parseFloat(computed.getPropertyValue("width"))+parseFloat(computed.getPropertyValue("margin-left"))+parseFloat(computed.getPropertyValue("margin-right"));if(computed.getPropertyValue("box-sizing")!=="border-box"){w+=parseFloat(computed.getPropertyValue("border-left-width"))+parseFloat(computed.getPropertyValue("border-right-width"))+parseFloat(computed.getPropertyValue("padding-left"))+parseFloat(computed.getPropertyValue("padding-right"))}
return w}else{return el.outerWidth(!0)}};_fn=function(elm,padding_bottom,parent_top,parent_height,top,height,el_float,detached){var bottomed,detach,fixed,last_pos,last_scroll_height,offset,parent,recalc,recalc_and_tick,recalc_counter,spacer,tick;if(elm.data("sticky_kit")){return}
elm.data("sticky_kit",!0);last_scroll_height=doc.height();parent=elm.parent();if(parent_selector!=null){parent=parent.closest(parent_selector)}
if(!parent.length){throw "failed to find stick parent"}
fixed=!1;bottomed=!1;spacer=manual_spacer!=null?manual_spacer&&elm.closest(manual_spacer):$("<div />");if(spacer){spacer.css('position',elm.css('position'))}
recalc=function(){var border_top,padding_top,restore;if(detached){return}
last_scroll_height=doc.height();border_top=parseInt(parent.css("border-top-width"),10);padding_top=parseInt(parent.css("padding-top"),10);padding_bottom=parseInt(parent.css("padding-bottom"),10);parent_top=parent.offset().top+border_top+padding_top;parent_height=parent.height();if(fixed){fixed=!1;bottomed=!1;if(manual_spacer==null){elm.insertAfter(spacer);spacer.detach()}
elm.css({position:"",top:"",width:"",bottom:""}).removeClass(sticky_class);restore=!0}
var margin_top=0;if(jQuery('.mega-menu.desktopTopFixed').length>0){margin_top+=jQuery(".mega-menu.desktopTopFixed").find(".menu-inner").outerHeight()}
if(jQuery('.topbar').length>0&&jQuery('.topbar').hasClass('topbar_fixed')){margin_top+=jQuery('.topbar_fixed').outerHeight()}
if(jQuery('body').hasClass('admin-bar')&&jQuery('#wpadminbar').length>0){margin_top+=jQuery('#wpadminbar').outerHeight()}
var older_offset_top=offset_top;if(margin_top!==0){offset_top=margin_top}else{offset_top=older_offset_top}
top=elm.offset().top-(parseInt(elm.css("margin-top"),10)||0)-offset_top;height=elm.outerHeight(!0);el_float=elm.css("float");if(spacer){spacer.css({width:outer_width(elm),height:height,display:elm.css("display"),"vertical-align":elm.css("vertical-align"),"float":el_float})}
if(restore){return tick()}};recalc();if(height===parent_height){return}
last_pos=void 0;offset=offset_top;recalc_counter=recalc_every;tick=function(){var css,delta,recalced,scroll,will_bottom,win_height;if(detached){return}
recalced=!1;if(recalc_counter!=null){recalc_counter-=1;if(recalc_counter<=0){recalc_counter=recalc_every;recalc();recalced=!0}}
if(!recalced&&doc.height()!==last_scroll_height){recalc();recalced=!0}
scroll=win.scrollTop();if(last_pos!=null){delta=scroll-last_pos}
last_pos=scroll;var margin_top=0;if(jQuery('.mega-menu.desktopTopFixed').length>0){margin_top+=jQuery(".mega-menu.desktopTopFixed").find(".menu-inner").outerHeight()}
if(jQuery('.topbar').length>0&&jQuery('.topbar').hasClass('topbar_fixed')){margin_top+=jQuery('.topbar_fixed').outerHeight()}
if(jQuery('body').hasClass('admin-bar')&&jQuery('#wpadminbar').length>0){margin_top+=jQuery('#wpadminbar').outerHeight()}
if(fixed){if(enable_bottoming){will_bottom=scroll+height+offset>parent_height+parent_top;if(bottomed&&!will_bottom){bottomed=!1;elm.css({position:"fixed",bottom:"",top:offset}).trigger("sticky_kit:unbottom")}}
if(scroll<top){fixed=!1;offset=offset_top;if(manual_spacer==null){if(el_float==="left"||el_float==="right"){elm.insertAfter(spacer)}
spacer.detach()}
css={position:"",width:"",top:""};elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick")}
if(inner_scrolling){win_height=win.height();if(height+offset_top>win_height){if(!bottomed){offset-=delta;offset=Math.max(win_height-height,offset);offset=Math.min(offset_top,offset);if(margin_top!==0){offset=margin_top}else{offset=0}
if(fixed){elm.css({top:offset+"px"})}}}}}else{if(scroll>top){fixed=!0;if(margin_top!==0){offset=margin_top}else{offset=0}
css={position:"fixed",top:offset};css.width=elm.css("box-sizing")==="border-box"?elm.outerWidth()+"px":elm.width()+"px";elm.css(css).addClass(sticky_class);if(manual_spacer==null){elm.after(spacer);if(el_float==="left"||el_float==="right"){spacer.append(elm)}}
elm.trigger("sticky_kit:stick")}}
if(fixed&&enable_bottoming){if(will_bottom==null){will_bottom=scroll+height+offset>parent_height+parent_top}
if(!bottomed&&will_bottom){bottomed=!0;if(parent.css("position")==="static"){parent.css({position:"relative"})}
return elm.css({position:"absolute",bottom:padding_bottom,top:"auto"}).trigger("sticky_kit:bottom")}}};recalc_and_tick=function(){recalc();return tick()};detach=function(){detached=!0;win.off("touchmove",tick);win.off("scroll",tick);win.off("resize",recalc_and_tick);$(document.body).off("sticky_kit:recalc",recalc_and_tick);elm.off("sticky_kit:detach",detach);elm.removeData("sticky_kit");elm.css({position:"",bottom:"",top:"",width:""});parent.position("position","");if(fixed){if(manual_spacer==null){if(el_float==="left"||el_float==="right"){elm.insertAfter(spacer)}
spacer.remove()}
return elm.removeClass(sticky_class)}};win.on("touchmove",tick);win.on("scroll",tick);win.on("resize",recalc_and_tick);$(document.body).on("sticky_kit:recalc",recalc_and_tick);elm.on("sticky_kit:detach",detach);return setTimeout(tick,0)};for(_i=0,_len=this.length;_i<_len;_i++){elm=this[_i];_fn($(elm))}
return this}}).call(this)