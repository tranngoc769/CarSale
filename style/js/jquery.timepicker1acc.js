/*!
 * jquery-timepicker v1.11.9 - A jQuery timepicker plugin inspired by Google Calendar. It supports both mouse and keyboard navigation.
 * Copyright (c) 2015 Jon Thornton - http://jonthornton.github.com/jquery-timepicker/
 * License: MIT
 */
!function(e){"object"==typeof exports&&exports&&"object"==typeof module&&module&&module.exports===exports?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function i(e){var i=e[0];return i.offsetWidth>0&&i.offsetHeight>0}function t(i){if(i.minTime&&(i.minTime=T(i.minTime)),i.maxTime&&(i.maxTime=T(i.maxTime)),i.durationTime&&"function"!=typeof i.durationTime&&(i.durationTime=T(i.durationTime)),"now"==i.scrollDefault)i.scrollDefault=function(){return i.roundingFunction(T(new Date),i)};else if(i.scrollDefault&&"function"!=typeof i.scrollDefault){var t=i.scrollDefault;i.scrollDefault=function(){return i.roundingFunction(T(t),i)}}else i.minTime&&(i.scrollDefault=function(){return i.roundingFunction(i.minTime,i)});if("string"===e.type(i.timeFormat)&&i.timeFormat.match(/[gh]/)&&(i._twelveHourTime=!0),i.showOnFocus===!1&&-1!=i.showOn.indexOf("focus")&&i.showOn.splice(i.showOn.indexOf("focus"),1),i.disableTimeRanges.length>0){for(var r in i.disableTimeRanges)i.disableTimeRanges[r]=[T(i.disableTimeRanges[r][0]),T(i.disableTimeRanges[r][1])];i.disableTimeRanges=i.disableTimeRanges.sort(function(e,i){return e[0]-i[0]});for(var r=i.disableTimeRanges.length-1;r>0;r--)i.disableTimeRanges[r][0]<=i.disableTimeRanges[r-1][1]&&(i.disableTimeRanges[r-1]=[Math.min(i.disableTimeRanges[r][0],i.disableTimeRanges[r-1][0]),Math.max(i.disableTimeRanges[r][1],i.disableTimeRanges[r-1][1])],i.disableTimeRanges.splice(r,1))}return i}function r(i){var t=i.data("timepicker-settings"),r=i.data("timepicker-list");if(r&&r.length&&(r.remove(),i.data("timepicker-list",!1)),t.useSelect){r=e("<select />",{"class":"ui-timepicker-select"});var s=r}else{r=e("<ul />",{"class":"ui-timepicker-list"});var s=e("<div />",{"class":"ui-timepicker-wrapper",tabindex:-1});s.css({display:"none",position:"absolute"}).append(r)}if(t.noneOption)if(t.noneOption===!0&&(t.noneOption=t.useSelect?"Time...":"None"),e.isArray(t.noneOption)){for(var c in t.noneOption)if(parseInt(c,10)==c){var u=n(t.noneOption[c],t.useSelect);r.append(u)}}else{var u=n(t.noneOption,t.useSelect);r.append(u)}if(t.className&&s.addClass(t.className),(null!==t.minTime||null!==t.durationTime)&&t.showDuration){"function"==typeof t.step?"function":t.step;s.addClass("ui-timepicker-with-duration"),s.addClass("ui-timepicker-step-"+t.step)}var p=t.minTime;"function"==typeof t.durationTime?p=T(t.durationTime()):null!==t.durationTime&&(p=t.durationTime);var d=null!==t.minTime?t.minTime:0,f=null!==t.maxTime?t.maxTime:d+b-1;d>f&&(f+=b),f===b-1&&"string"===e.type(t.timeFormat)&&t.show2400&&(f=b);var h=t.disableTimeRanges,y=0,H=h.length,C=t.step;"function"!=typeof C&&(C=function(){return t.step});for(var c=d,O=0;f>=c;O++,c+=60*C(O)){var D=c,R=v(D,t);if(t.useSelect){var S=e("<option />",{value:R});S.text(R)}else{var S=e("<li />");S.addClass(b/2>D%b?"ui-timepicker-am":"ui-timepicker-pm"),S.data("time",w(D,t)),S.text(R)}if((null!==t.minTime||null!==t.durationTime)&&t.showDuration){var M=k(c-p,t.step);if(t.useSelect)S.text(S.text()+" ("+M+")");else{var F=e("<span />",{"class":"ui-timepicker-duration"});F.text(" ("+M+")"),S.append(F)}}H>y&&(D>=h[y][1]&&(y+=1),h[y]&&D>=h[y][0]&&D<h[y][1]&&(t.useSelect?S.prop("disabled",!0):S.addClass("ui-timepicker-disabled"))),r.append(S)}if(s.data("timepicker-input",i),i.data("timepicker-list",s),t.useSelect)i.val()&&r.val(a(T(i.val()),t)),r.on("focus",function(){e(this).data("timepicker-input").trigger("showTimepicker")}),r.on("blur",function(){e(this).data("timepicker-input").trigger("hideTimepicker")}),r.on("change",function(){m(i,e(this).val(),"select")}),m(i,r.val(),"initial"),i.hide().after(r);else{var I=t.appendTo;"string"==typeof I?I=e(I):"function"==typeof I&&(I=I(i)),I.append(s),l(i,r),r.on("mousedown click","li",function(t){i.off("focus.timepicker"),i.on("focus.timepicker-ie-hack",function(){i.off("focus.timepicker-ie-hack"),i.on("focus.timepicker",x.show)}),o(i)||i[0].focus(),r.find("li").removeClass("ui-timepicker-selected"),e(this).addClass("ui-timepicker-selected"),g(i)&&(i.trigger("hideTimepicker"),r.on("mouseup.timepicker click.timepicker","li",function(e){r.off("mouseup.timepicker click.timepicker"),s.hide()}))})}}function n(i,t){var r,n,a;return"object"==typeof i?(r=i.label,n=i.className,a=i.value):"string"==typeof i?r=i:e.error("Invalid noneOption value"),t?e("<option />",{value:a,"class":n,text:r}):e("<li />",{"class":n,text:r}).data("time",String(a))}function a(e,i){return e=i.roundingFunction(e,i),null!==e?v(e,i):void 0}function s(i){if(i.target!=window){var t=e(i.target);t.closest(".ui-timepicker-input").length||t.closest(".ui-timepicker-wrapper").length||(x.hide(),e(document).unbind(".ui-timepicker"),e(window).unbind(".ui-timepicker"))}}function o(e){var i=e.data("timepicker-settings");return(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&i.disableTouchKeyboard}function c(i,t,r){if(!r&&0!==r)return!1;var n=i.data("timepicker-settings"),a=!1,r=n.roundingFunction(r,n);return t.find("li").each(function(i,t){var n=e(t);if("number"==typeof n.data("time"))return n.data("time")==r?(a=n,!1):void 0}),a}function l(e,i){i.find("li").removeClass("ui-timepicker-selected");var t=T(p(e),e.data("timepicker-settings"));if(null!==t){var r=c(e,i,t);if(r){var n=r.offset().top-i.offset().top;(n+r.outerHeight()>i.outerHeight()||0>n)&&i.scrollTop(i.scrollTop()+r.position().top-r.outerHeight()),r.addClass("ui-timepicker-selected")}}}function u(i,t){if(""!==this.value&&"timepicker"!=t){var r=e(this);if(!r.is(":focus")||i&&"change"==i.type){var n=r.data("timepicker-settings"),a=T(this.value,n);if(null===a)return void r.trigger("timeFormatError");var s=!1;if(null!==n.minTime&&null!==n.maxTime&&(a<n.minTime||a>n.maxTime)&&(s=!0),e.each(n.disableTimeRanges,function(){return a>=this[0]&&a<this[1]?(s=!0,!1):void 0}),n.forceRoundTime){var o=n.roundingFunction(a,n);o!=a&&(a=o,t=null)}var c=v(a,n);s?(m(r,c,"error")||i&&"change"==i.type)&&r.trigger("timeRangeError"):m(r,c,t)}}}function p(e){return e.is("input")?e.val():e.data("ui-timepicker-value")}function m(e,i,t){if(e.is("input")){e.val(i);var r=e.data("timepicker-settings");r.useSelect&&"select"!=t&&"initial"!=t&&e.data("timepicker-list").val(a(T(i),r))}return e.data("ui-timepicker-value")!=i?(e.data("ui-timepicker-value",i),"select"==t?e.trigger("selectTime").trigger("changeTime").trigger("change","timepicker"):-1==["error","initial"].indexOf(t)&&e.trigger("changeTime"),!0):(e.trigger("selectTime"),!1)}function d(e){switch(e.keyCode){case 13:case 9:return;default:e.preventDefault()}}function f(t){var r=e(this),n=r.data("timepicker-list");if(!n||!i(n)){if(40!=t.keyCode)return!0;x.show.call(r.get(0)),n=r.data("timepicker-list"),o(r)||r.focus()}switch(t.keyCode){case 13:return g(r)&&(u.call(r.get(0),{type:"change"}),x.hide.apply(this)),t.preventDefault(),!1;case 38:var a=n.find(".ui-timepicker-selected");return a.length?a.is(":first-child")||(a.removeClass("ui-timepicker-selected"),a.prev().addClass("ui-timepicker-selected"),a.prev().position().top<a.outerHeight()&&n.scrollTop(n.scrollTop()-a.outerHeight())):(n.find("li").each(function(i,t){return e(t).position().top>0?(a=e(t),!1):void 0}),a.addClass("ui-timepicker-selected")),!1;case 40:return a=n.find(".ui-timepicker-selected"),0===a.length?(n.find("li").each(function(i,t){return e(t).position().top>0?(a=e(t),!1):void 0}),a.addClass("ui-timepicker-selected")):a.is(":last-child")||(a.removeClass("ui-timepicker-selected"),a.next().addClass("ui-timepicker-selected"),a.next().position().top+2*a.outerHeight()>n.outerHeight()&&n.scrollTop(n.scrollTop()+a.outerHeight())),!1;case 27:n.find("li").removeClass("ui-timepicker-selected"),x.hide();break;case 9:x.hide();break;default:return!0}}function h(t){var r=e(this),n=r.data("timepicker-list"),a=r.data("timepicker-settings");if(!n||!i(n)||a.disableTextInput)return!0;switch(t.keyCode){case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 77:case 80:case 186:case 8:case 46:a.typeaheadHighlight?l(r,n):n.hide()}}function g(e){var i=e.data("timepicker-settings"),t=e.data("timepicker-list"),r=null,n=t.find(".ui-timepicker-selected");return n.hasClass("ui-timepicker-disabled")?!1:(n.length&&(r=n.data("time")),null!==r&&("string"!=typeof r&&(r=v(r,i)),m(e,r,"select")),!0)}function k(e,i){e=Math.abs(e);var t,r,n=Math.round(e/60),a=[];return 60>n?a=[n,y.mins]:(t=Math.floor(n/60),r=n%60,30==i&&30==r&&(t+=y.decimal+5),a.push(t),a.push(1==t?y.hr:y.hrs),30!=i&&r&&(a.push(r),a.push(y.mins))),a.join(" ")}function v(i,t){if("number"!=typeof i)return null;var r=parseInt(i%60),n=parseInt(i/60%60),a=parseInt(i/3600%24),s=new Date(1970,0,2,a,n,r,0);if(isNaN(s.getTime()))return null;if("function"===e.type(t.timeFormat))return t.timeFormat(s);for(var o,c,l="",u=0;u<t.timeFormat.length;u++)switch(c=t.timeFormat.charAt(u)){case"a":l+=s.getHours()>11?y.pm:y.am;break;case"A":l+=s.getHours()>11?y.PM:y.AM;break;case"g":o=s.getHours()%12,l+=0===o?"12":o;break;case"G":o=s.getHours(),i===b&&(o=t.show2400?24:0),l+=o;break;case"h":o=s.getHours()%12,0!==o&&10>o&&(o="0"+o),l+=0===o?"12":o;break;case"H":o=s.getHours(),i===b&&(o=t.show2400?24:0),l+=o>9?o:"0"+o;break;case"i":var n=s.getMinutes();l+=n>9?n:"0"+n;break;case"s":r=s.getSeconds(),l+=r>9?r:"0"+r;break;case"\\":u++,l+=t.timeFormat.charAt(u);break;default:l+=c}return l}function T(e,i){if(""===e||null===e)return null;if("object"==typeof e)return 3600*e.getHours()+60*e.getMinutes()+e.getSeconds();if("string"!=typeof e)return e;e=e.toLowerCase().replace(/[\s\.]/g,""),("a"==e.slice(-1)||"p"==e.slice(-1))&&(e+="m");var t="("+y.am.replace(".","")+"|"+y.pm.replace(".","")+"|"+y.AM.replace(".","")+"|"+y.PM.replace(".","")+")?",r=new RegExp("^"+t+"([0-9]?[0-9])\\W?([0-5][0-9])?\\W?([0-5][0-9])?"+t+"$"),n=e.match(r);if(!n)return null;var a=parseInt(1*n[2],10);if(a>24){if(i&&i.wrapHours===!1)return null;a%=24}var s=n[1]||n[5],o=a;if(12>=a&&s){var c=s==y.pm||s==y.PM;o=12==a?c?12:0:a+(c?12:0)}var l=1*n[3]||0,u=1*n[4]||0,p=3600*o+60*l+u;if(12>a&&!s&&i&&i._twelveHourTime&&i.scrollDefault){var m=p-i.scrollDefault();0>m&&m>=b/-2&&(p=(p+b/2)%b)}return p}function w(e,i){return e==b&&i.show2400?e:e%b}var b=86400,y={am:"am",pm:"pm",AM:"AM",PM:"PM",decimal:".",mins:"mins",hr:"hr",hrs:"hrs"},x={init:function(i){return this.each(function(){var n=e(this),a=[];for(var s in e.fn.timepicker.defaults)n.data(s)&&(a[s]=n.data(s));var o=e.extend({},e.fn.timepicker.defaults,i,a);if(o.lang&&(y=e.extend(y,o.lang)),o=t(o),n.data("timepicker-settings",o),n.addClass("ui-timepicker-input"),o.useSelect)r(n);else{if(n.prop("autocomplete","off"),o.showOn)for(var c in o.showOn)n.on(o.showOn[c]+".timepicker",x.show);n.on("change.timepicker",u),n.on("keydown.timepicker",f),n.on("keyup.timepicker",h),o.disableTextInput&&n.on("keydown.timepicker",d),u.call(n.get(0),null,"initial")}})},show:function(t){var n=e(this),a=n.data("timepicker-settings");if(t&&t.preventDefault(),a.useSelect)return void n.data("timepicker-list").focus();o(n)&&n.blur();var u=n.data("timepicker-list");if(!n.prop("readonly")&&(u&&0!==u.length&&"function"!=typeof a.durationTime||(r(n),u=n.data("timepicker-list")),!i(u))){n.data("ui-timepicker-value",n.val()),l(n,u),x.hide(),u.show();var m={};a.orientation.match(/r/)?m.left=n.offset().left+n.outerWidth()-u.outerWidth()+parseInt(u.css("marginLeft").replace("px",""),10):m.left=n.offset().left+parseInt(u.css("marginLeft").replace("px",""),10);var d;d=a.orientation.match(/t/)?"t":a.orientation.match(/b/)?"b":n.offset().top+n.outerHeight(!0)+u.outerHeight()>e(window).height()+e(window).scrollTop()?"t":"b","t"==d?(u.addClass("ui-timepicker-positioned-top"),m.top=n.offset().top-u.outerHeight()+parseInt(u.css("marginTop").replace("px",""),10)):(u.removeClass("ui-timepicker-positioned-top"),m.top=n.offset().top+n.outerHeight()+parseInt(u.css("marginTop").replace("px",""),10)),u.offset(m);var f=u.find(".ui-timepicker-selected");if(!f.length){var h=T(p(n));null!==h?f=c(n,u,h):a.scrollDefault&&(f=c(n,u,a.scrollDefault()))}if(f&&f.length){var g=u.scrollTop()+f.position().top-f.outerHeight();u.scrollTop(g)}else u.scrollTop(0);return a.stopScrollPropagation&&e(document).on("wheel.ui-timepicker",".ui-timepicker-wrapper",function(i){i.preventDefault();var t=e(this).scrollTop();e(this).scrollTop(t+i.originalEvent.deltaY)}),e(document).on("touchstart.ui-timepicker mousedown.ui-timepicker",s),e(window).on("resize.ui-timepicker",s),a.closeOnWindowScroll&&e(document).on("scroll.ui-timepicker",s),n.trigger("showTimepicker"),this}},hide:function(t){var r=e(this),n=r.data("timepicker-settings");return n&&n.useSelect&&r.blur(),e(".ui-timepicker-wrapper").each(function(){var t=e(this);if(i(t)){var r=t.data("timepicker-input"),n=r.data("timepicker-settings");n&&n.selectOnBlur&&g(r),t.hide(),r.trigger("hideTimepicker")}}),this},option:function(i,n){return"string"==typeof i&&"undefined"==typeof n?e(this).data("timepicker-settings")[i]:this.each(function(){var a=e(this),s=a.data("timepicker-settings"),o=a.data("timepicker-list");"object"==typeof i?s=e.extend(s,i):"string"==typeof i&&(s[i]=n),s=t(s),a.data("timepicker-settings",s),u.call(a.get(0),{type:"change"},"initial"),o&&(o.remove(),a.data("timepicker-list",!1)),s.useSelect&&r(a)})},getSecondsFromMidnight:function(){return T(p(this))},getTime:function(e){var i=this,t=p(i);if(!t)return null;var r=T(t);if(null===r)return null;e||(e=new Date);var n=new Date(e);return n.setHours(r/3600),n.setMinutes(r%3600/60),n.setSeconds(r%60),n.setMilliseconds(0),n},isVisible:function(){var e=this,t=e.data("timepicker-list");return!(!t||!i(t))},setTime:function(e){var i=this,t=i.data("timepicker-settings");if(t.forceRoundTime)var r=a(T(e),t);else var r=v(T(e),t);return e&&null===r&&t.noneOption&&(r=e),m(i,r),i.data("timepicker-list")&&l(i,i.data("timepicker-list")),this},remove:function(){var e=this;if(e.hasClass("ui-timepicker-input")){var i=e.data("timepicker-settings");return e.removeAttr("autocomplete","off"),e.removeClass("ui-timepicker-input"),e.removeData("timepicker-settings"),e.off(".timepicker"),e.data("timepicker-list")&&e.data("timepicker-list").remove(),i.useSelect&&e.show(),e.removeData("timepicker-list"),this}}};e.fn.timepicker=function(i){return this.length?x[i]?this.hasClass("ui-timepicker-input")?x[i].apply(this,Array.prototype.slice.call(arguments,1)):this:"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.timepicker"):x.init.apply(this,arguments):this},e.fn.timepicker.defaults={appendTo:"body",className:null,closeOnWindowScroll:!1,disableTextInput:!1,disableTimeRanges:[],disableTouchKeyboard:!1,durationTime:null,forceRoundTime:!1,maxTime:null,minTime:null,noneOption:!1,orientation:"l",roundingFunction:function(e,i){if(null===e)return null;if("number"!=typeof i.step)return e;var t=e%(60*i.step),r=i.minTime||0;return t-=r%(60*i.step),t>=30*i.step?e+=60*i.step-t:e-=t,w(e,i)},scrollDefault:null,selectOnBlur:!1,show2400:!1,showDuration:!1,showOn:["click","focus"],showOnFocus:!0,step:30,stopScrollPropagation:!1,timeFormat:"g:ia",typeaheadHighlight:!0,useSelect:!1,wrapHours:!0}})