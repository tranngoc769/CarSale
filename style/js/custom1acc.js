// (function($) {
//     var recaptcha1;
//     var recaptcha2;
//     var recaptcha3;
//     var recaptcha4;
//     var recaptcha5;
//     var recaptcha6;
//     jQuery(window).load(function() {
//         if (typeof goole_captcha_api_obj !== "undefined") {
//             if (document.getElementById("recaptcha1")) { recaptcha1 = grecaptcha.render('recaptcha1', { 'sitekey': goole_captcha_api_obj.google_captcha_site_key, 'theme': 'light' }) }
//             if (document.getElementById("recaptcha2")) { recaptcha2 = grecaptcha.render('recaptcha2', { 'sitekey': goole_captcha_api_obj.google_captcha_site_key, 'theme': 'light' }) }
//             if (document.getElementById("recaptcha3")) { recaptcha3 = grecaptcha.render('recaptcha3', { 'sitekey': goole_captcha_api_obj.google_captcha_site_key, 'theme': 'light' }) }
//             if (document.getElementById("recaptcha4")) { recaptcha4 = grecaptcha.render('recaptcha4', { 'sitekey': goole_captcha_api_obj.google_captcha_site_key, 'theme': 'light' }) }
//             if (document.getElementById("recaptcha5")) { recaptcha5 = grecaptcha.render('recaptcha5', { 'sitekey': goole_captcha_api_obj.google_captcha_site_key, 'theme': 'light' }) }
//             if (document.getElementById("recaptcha6")) { recaptcha6 = grecaptcha.render('recaptcha6', { 'sitekey': goole_captcha_api_obj.google_captcha_site_key, 'theme': 'light' }) }
//         }
//         cardealer_lazyload();
//         if (typeof cardealer_options_js == 'undefined') {
//             jQuery("#load").fadeOut();
//             jQuery('#loading').delay(0).fadeOut('slow')
//         }
//         owl = jQuery(".owl-carousel-6");
//         owl.each(function() {
//             var $this = jQuery(this),
//                 $lazyload = ($this.attr('data-lazyload')) ? $this.data('lazyload') : !1;
//             jQuery(this).owlCarousel({ items: 1, rtl: (jQuery("body").hasClass("rtl")) ? !0 : !1, loop: !0, autoplay: !0, autoplayTimeout: 2000, smartSpeed: 1000, autoplayHoverPause: !0, dots: !1, nav: !0, lazyLoad: $lazyload, navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"] })
//         });
//         jQuery('.owl-carousel-7').owlCarousel({ rtl: (jQuery("body").hasClass("rtl")) ? !0 : !1, items: 3, margin: 5, responsive: { 0: { items: 1 }, 600: { items: 2 }, 768: { items: 3 }, 1300: { items: 3 } }, autoplay: !0, autoplayTimeout: 2000, autoplayHoverPause: !0, dots: !1, autoHeight: !1, nav: !0, navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"] });
//         jQuery('.cd-featured-carousel').owlCarousel({ rtl: (jQuery("body").hasClass("rtl")) ? !0 : !1, items: 3, margin: 5, responsive: { 0: { items: 1 }, 600: { items: 2 }, 992: { items: 2 }, 993: { items: 3 } }, autoplay: !0, autoplayTimeout: 2000, autoplayHoverPause: !0, dots: !0, autoHeight: !1, nav: !1, });
//         owl = jQuery(".owl-carousel");
//         owl.each(function() {
//             var $this = jQuery(this),
//                 $items = ($this.data('items')) ? $this.data('items') : 1,
//                 $loop = ($this.data('loop')) ? $this.data('loop') : !1,
//                 $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : !1,
//                 $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : !1,
//                 $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : !0,
//                 $space = ($this.attr('data-space')) ? $this.data('space') : 30,
//                 $lazyload = ($this.attr('data-lazyload')) ? $this.data('lazyload') : !1;
//             jQuery(this).owlCarousel({ rtl: (jQuery("body").hasClass("rtl")) ? !0 : !1, loop: $loop, items: $items, responsive: { 0: { items: $this.data('xx-items') ? $this.data('xx-items') : 1 }, 480: { items: $this.data('xs-items') ? $this.data('xs-items') : 1 }, 768: { items: $this.data('sm-items') ? $this.data('sm-items') : 2 }, 980: { items: $this.data('md-items') ? $this.data('md-items') : 3 }, 1200: { items: $items } }, dots: $navdots, margin: $space, nav: $navarrow, navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"], autoplay: $autoplay, autoplayHoverPause: !0, lazyLoad: $lazyload, })
//         });
//         var setMinHeight = function(minheight) {
//             jQuery('.owl-carousel').each(function(i, e) {
//                 if (!jQuery(this).hasClass("related-vehicle")) {
//                     var oldminheight = minheight;
//                     jQuery(e).find('.item').each(function(i, e) { minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight });
//                     jQuery(e).find('.car-item').css("min-height", minheight + "px");
//                     minheight = oldminheight
//                 }
//             });
//             jQuery('.pgs_cars_carousel-items').each(function(i, e) {
//                 if (!jQuery(this).hasClass("related-vehicle")) {
//                     var oldminheight = minheight;
//                     jQuery(e).find('.item').each(function(i, e) { minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight });
//                     jQuery(e).find('.car-item').css("min-height", minheight + "px");
//                     minheight = oldminheight
//                 }
//             })
//         };
//         setMinHeight(0);
//         var setRelatedVehicleMinHeight = function(minheight) {
//             jQuery('.owl-carousel.related-vehicle').each(function(i, e) {
//                 var oldminheight = minheight;
//                 jQuery(e).find('.car-content').each(function(i, e) { minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight });
//                 jQuery(e).find('.car-content').css("min-height", minheight + "px");
//                 minheight = oldminheight
//             })
//         };
//         setRelatedVehicleMinHeight(0);
//         var $isotope_wrapper = jQuery('.isotope-wrapper');
//         if ($isotope_wrapper.length > 0) {
//             $isotope_wrapper.each(function() {
//                 var cptshuffle;
//                 var $unique_class = jQuery(this).attr('data-unique_class');
//                 var $isotope_container = jQuery('.' + $unique_class + ' .filter-container');
//                 var $filters_container = jQuery('[data-unique_class="' + $unique_class + '"]').find('.isotope-filters');
//                 var $layout = jQuery('[data-unique_class="' + $unique_class + '"]').attr('data-layout');
//                 cptshuffle = new Shuffle($isotope_container, { itemSelector: '.' + $layout + '-item', easing: 'ease-out', });
//                 $filters_container.on('click', 'button', function() {
//                     var filterValue = parseInt(jQuery(this).attr('data-filter'));
//                     cptshuffle.filter(filterValue)
//                 });
//                 $filters_container.each(function(i, buttonGroup) {
//                     var $filters_buttongroup = jQuery(buttonGroup);
//                     $filters_buttongroup.on('click', 'button', function() {
//                         $filters_buttongroup.find('.active').removeClass('active');
//                         jQuery(this).addClass('active')
//                     })
//                 })
//             });
//             jQuery('.isotope-filters button.active').trigger('click')
//         }
//     });
//     var oldheight = jQuery('.menu-inner').outerHeight();
//     jQuery(window).bind('load resize', function(e) {
//         if (!jQuery('#header').hasClass('logo-center')) {
//             var logoHeight = jQuery('.menu-logo').outerHeight();
//             jQuery('.mega-menu .menu-inner').css({ 'height': logoHeight })
//         }
//     });
//     jQuery(document).ready(function() {
//         var logoHeight = jQuery('.mega-menu .menu-logo .site-logo').height() + 66;
//         jQuery(document).on('scroll', function() {
//             if (jQuery('.mega-menu').hasClass('desktopTopFixed')) {
//                 var logoHeight = jQuery('.mega-menu.desktopTopFixed .menu-logo .sticky-logo').height() + 40;
//                 jQuery('.mega-menu .menu-inner').css({ 'height': logoHeight })
//             } else { jQuery('.mega-menu .menu-inner').css({ 'height': oldheight }) }
//             clearTimeout($.data(this, 'scrollTimer'));
//             $.data(this, 'scrollTimer', setTimeout(function() { if (!jQuery('.mega-menu').hasClass('desktopTopFixed')) { jQuery('.mega-menu .menu-inner').css({ 'height': oldheight }) } }, 400))
//         });
//         if (jQuery("#cardealer-print-btn").length > 0) { jQuery("#cardealer-print-btn").click(function() { window.print() }) }
//     });
//     jQuery(document).ready(function($) {
//         if (jQuery('.search').size() > 0) {
//             jQuery('.search-btn').on("click", function() {
//                 jQuery('.search').toggleClass("search-open");
//                 jQuery('.cardealer-auto-compalte ul').empty();
//                 jQuery('#menu-s').val('');
//                 return !1
//             });
//             $('.search-box .fa-search').on('click', function() { $('.searchform').submit() })
//         }
//         if (document.getElementById('menu-s') || document.getElementById('mobile-menu-s')) {
//             jQuery('#menu-s,#mobile-menu-s').autocomplete({
//                 search: function(event, ui) { jQuery('.cardealer-auto-compalte ul').empty() },
//                 source: function(request, response) {
//                     jQuery.ajax({
//                         url: cardealer_js.ajaxurl,
//                         type: 'POST',
//                         dataType: "json",
//                         data: { 'action': 'pgs_auto_complate_search', 'ajax_nonce': cardealer_js.pgs_auto_complate_search_nonce, 'search': request.term },
//                         beforeSend: function() {
//                             jQuery('#menu-searchform').find('i.fa-search').after('<span class="cd-loader"></span>');
//                             jQuery('#menu-searchform').find('i.fa-search').hide()
//                         },
//                         success: function(resp) { response(jQuery.map(resp, function(result) { var return_data = { status: result.status, image: result.image, title: result.title, link_url: result.link_url, msg: result.msg }; return return_data })) }
//                     }).done(function() {
//                         jQuery('#menu-searchform').find('i.fa-search').show();
//                         jQuery('#menu-searchform').find('span.cd-loader').remove()
//                     })
//                 },
//                 minLength: 2,
//             }).data("ui-autocomplete")._renderItem = function(ul, item) {
//                 var html = '';
//                 if (item.status) {
//                     html += '<a href="' + item.link_url + '">';
//                     html += '<div class="search-item-container">';
//                     if (item.image) { html += item.image }
//                     html += item.title;
//                     html += '</div>';
//                     html += '</a>'
//                 } else { html += item.msg }
//                 return jQuery("<li></li>").data("ui-autocomplete-item", item).append(html).appendTo(jQuery('.cardealer-auto-compalte ul'))
//             }
//         }
//         if (document.getElementById('s')) {
//             jQuery('#s').autocomplete({ search: function(event, ui) { jQuery('.cardealer-auto-compalte-default ul').empty() }, source: function(request, response) { jQuery.ajax({ url: cardealer_js.ajaxurl, type: 'POST', dataType: "json", data: { 'action': 'pgs_auto_complate_search', 'ajax_nonce': cardealer_js.pgs_auto_complate_search_nonce, 'search': request.term }, beforeSend: function() { jQuery('#s').after('<span class="cd-loader"></span>') }, success: function(resp) { response(jQuery.map(resp, function(result) { var return_data = { status: result.status, image: result.image, title: result.title, link_url: result.link_url, msg: result.msg }; return return_data })) } }).done(function() { jQuery('#s').parent().find('span.cd-loader').remove() }) }, minLength: 2, }).data("ui-autocomplete")._renderItem = function(ul, item) {
//                 var html = '';
//                 if (item.status) {
//                     html += '<a href="' + item.link_url + '">';
//                     html += '<div class="search-item-container">';
//                     if (item.image) { html += item.image }
//                     html += item.title;
//                     html += '</div>';
//                     html += '</a>'
//                 } else { html += item.msg }
//                 return jQuery("<li></li>").data("ui-autocomplete-item", item).append(html).appendTo(jQuery('.cardealer-auto-compalte-default ul'))
//             }
//         }
//         var all_expander = jQuery('.topbar-widget-expander');
//         all_expander.hide();
//         jQuery('.topbar-widget-link').each(function(i, ele) {
//             var widget_wrapper = jQuery(this).closest('.topbar-widget-wrapper');
//             var current_expander = jQuery(widget_wrapper).find('.topbar-widget-expander');
//             jQuery(this).click(function(e) {
//                 e.preventDefault();
//                 if (jQuery(current_expander).is(':hidden')) {
//                     all_expander.hide();
//                     current_expander.show()
//                 } else { current_expander.hide() }
//             })
//         });
//         jQuery(document).click(function(e) { if (!jQuery(e.target).is('.topbar-widget-link, .topbar-widget-expander, .topbar-widget-expander *')) { all_expander.hide() } });
//         jQuery('[data-toggle="tooltip"]').tooltip();
//         jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({ disableOn: 300, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: !1, fixedContentPos: !1 });
//         jQuery.extend(!0, jQuery.magnificPopup.defaults, {
//             iframe: {
//                 patterns: {
//                     youtube: {
//                         index: 'youtu',
//                         id: function(url) {
//                             var m = url.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/),
//                                 $start = 0;
//                             if (!m || !m[1]) return null;
//                             if (url.indexOf('t=') != -1) { var $split = url.split('t='); var hms = $split[1].replace('h', ':').replace('m', ':').replace('s', ''); var a = hms.split(':'); if (a.length == 1) { $start = a[0] } else if (a.length == 2) { $start = (+a[0]) * 60 + (+a[1]) } else if (a.length == 3) { $start = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]) } }
//                             var suffix = '?autoplay=1';
//                             if ($start > 0) { suffix = '?start=' + $start + '&autoplay=1' }
//                             return m[1] + suffix
//                         },
//                         src: 'https://www.youtube.com/embed/%id%'
//                     }
//                 }
//             }
//         });
//         jQuery.extend(!0, jQuery.magnificPopup.defaults, { iframe: { patterns: { vimeo: { index: 'vimeo.com/', id: '/', src: 'https://player.vimeo.com/video/%id%?autoplay=1' }, } } });
//         jQuery(document).on("click", ".psimages", function() {
//             var pswpElement = document.querySelectorAll('.pswp')[0];
//             var items = [];
//             var imgsrc;
//             var imgdata;
//             var imgurl;
//             imgsrc = jQuery(this).closest('.pssrcset').find('.psimages').data('image');
//             imgurl = imgsrc.split(',');
//             for (var i = 0; i < imgurl.length; i++) {
//                 var item = { src: imgurl[i], w: 1024, h: 683 };
//                 items.push(item)
//             }
//             var options = { history: !1, focus: !1, showAnimationDuration: 0, hideAnimationDuration: 0 };
//             var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//             gallery.init()
//         });
//         jQuery(document).on("click", ".ps-car-listing", function() {
//             var pswpElement = document.querySelectorAll('.pswp')[0];
//             var items = [];
//             var newitems = [];
//             var psitems = [];
//             var curid = this.id;
//             jQuery("figure").each(function() {
//                 if (!jQuery(this).closest('.slick-cloned').length) {
//                     url = jQuery(this).find('.ps-car-listing').attr('src');
//                     img_src = jQuery(this).find('.ps-car-listing').attr('data-src');
//                     img_width = jQuery(this).find('.ps-car-listing').attr('data-width');
//                     img_height = jQuery(this).find('.ps-car-listing').attr('data-height');
//                     id = jQuery(this).find('.ps-car-listing').attr('id');
//                     var item = { src: (typeof img_src !== 'undefined' && img_src != "") ? img_src : url, id: id, w: (typeof img_width !== 'undefined' && img_width != '') ? img_width : 1051, h: (typeof img_height !== 'undefined' && img_height != '') ? img_height : 662 };
//                     items.push(item)
//                 }
//             });
//             items.forEach(function(element, i) { if (curid == element.id) { newitems = items.concat(items.splice(0, i)) } });
//             items.forEach(function(i) { if (newitems.indexOf(i) < 0) { newitems.push(i) } });
//             var options = { history: !1, focus: !1, showAnimationDuration: 0, hideAnimationDuration: 0 };
//             var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, newitems, options);
//             gallery.init()
//         });
//         var allPanels = jQuery(".accordion > .accordion-content").hide();
//         allPanels.first().slideDown("easeOutExpo");
//         jQuery(".accordion > .accordion-title > a").first().addClass("active");
//         jQuery(".accordion > .accordion-title > a").click(function() {
//             var current = jQuery(this).parent().next(".accordion-content");
//             jQuery(".accordion > .accordion-title > a").removeClass("active");
//             jQuery(this).addClass("active");
//             allPanels.not(current).slideUp("easeInExpo");
//             jQuery(this).parent().next().slideDown("easeOutExpo");
//             return !1
//         });
//         $('.cat-menu .sub-menu').hide();
//         $(".cat-menu .category-open-close-icon").click(function(e) {
//             e.preventDefault();
//             $(this).closest('li').children("ul.cat-sub-menu").toggle('slow')
//         });
//         if (jQuery(".audio-video").length != 0) { jQuery('audio,video').mediaelementplayer() }
//         jQuery('.newsletter-mailchimp').click(function() {
//             var form_id = jQuery(this).attr('data-form-id');
//             var mailchimp_nonce = jQuery('form#' + form_id + ' .news-nonce').val();
//             var news_letter_email = jQuery('form#' + form_id + ' .newsletter-email').val();
//             jQuery.ajax({
//                 url: cardealer_js.ajaxurl,
//                 data: 'action=mailchimp_singup&mailchimp_nonce=' + mailchimp_nonce + '&news_letter_email=' + news_letter_email,
//                 beforeSend: function() { jQuery('.spinimg-' + form_id).html('<span class="cd-loader"></span>') },
//                 success: function(msg) {
//                     jQuery('form#' + form_id + ' .newsletter-msg').show();
//                     jQuery('form#' + form_id + ' .newsletter-msg').removeClass('error_msg');
//                     jQuery('form#' + form_id + ' .newsletter-msg').html(msg);
//                     jQuery('#process').css('display', 'none');
//                     jQuery('form#' + form_id + ' .news_letter_name').val('');
//                     jQuery('form#' + form_id + ' .newsletter-email').val('');
//                     jQuery('.spinimg-' + form_id).html('')
//                 },
//                 error: function(msg) {
//                     jQuery('form#' + form_id + ' .newsletter-msg').addClass('error_msg');
//                     jQuery('form#' + form_id + ' .newsletter-msg').html(msg);
//                     jQuery('form#' + form_id + ' .newsletter-msg').show();
//                     jQuery('#process').css('display', 'none')
//                 }
//             });
//             return !1
//         });
//         $(".dealer-form-btn").on('click', function() {
//             $(".reset_css input").css({ "border": "none" });
//             $(".reset_css textarea").css({ "border": "none" })
//         });
//         jQuery(document).on('click', '#submit_request, #submit-inquiry', function(e) {
//             e.preventDefault();
//             var formId = jQuery(this).parents("form").attr('id');
//             jQuery('form#' + formId).find('input').css({ "border": "none" });
//             var textArray = [];
//             jQuery('form#' + formId).find('input.cdhl_validate').each(function(i) { textArray[i] = jQuery(this).attr('name') });
//             var sts = do_validate_field(textArray, formId);
//             if (!sts) {
//                 var submit_btn_ID = jQuery(this).attr('id');
//                 jQuery.ajax({
//                     url: cardealer_js.ajaxurl,
//                     method: "POST",
//                     dataType: 'json',
//                     data: jQuery('form#' + formId).serialize(),
//                     beforeSend: function() {
//                         jQuery('.spinimg').html('<span class="cd-loader"></span>');
//                         jQuery('#' + submit_btn_ID).prop("disabled", "disabled")
//                     },
//                     success: function(responseObj) {
//                         jQuery('form#' + formId + ' .inquiry-msg').show();
//                         jQuery('#' + submit_btn_ID).removeAttr("disabled");
//                         jQuery('.spinimg').html('');
//                         jQuery('form#' + formId + ' .inquiry-msg').html(responseObj.msg).delay(5000).fadeOut('slow');
//                         if (responseObj.status == 1)
//                             jQuery('form#' + formId).find("input[type=text], input[type=number], textarea, radio").val("");
//                         jQuery('.check').attr('checked', !0);
//                         if (typeof grecaptcha !== "undefined") {
//                             grecaptcha.reset(recaptcha1);
//                             grecaptcha.reset(recaptcha6)
//                         }
//                     }
//                 })
//             }
//         });
//         jQuery('#make_an_offer_test_request').click(function(e) {
//             e.preventDefault();
//             var formId = jQuery(this).parents('form').attr('id');
//             var textArray = [];
//             jQuery('form#' + formId).find('input.cdhl_validate').each(function(i) { textArray[i] = jQuery(this).attr('name') });
//             var sts = do_validate_field(textArray, formId);
//             if (!sts) {
//                 var submit_btn_ID = jQuery(this).attr('id');
//                 jQuery.ajax({
//                     url: cardealer_js.ajaxurl,
//                     method: "POST",
//                     data: jQuery('form#make_an_offer_test_form').serialize(),
//                     dataType: 'json',
//                     beforeSend: function() {
//                         jQuery('.make_an_offer_test_spinimg').html('<span class="cd-loader"></span>');
//                         jQuery('#' + submit_btn_ID).prop("disabled", "disabled")
//                     },
//                     success: function(responseObj) {
//                         jQuery('form#make_an_offer_test_form .make_an_offer_test_msg').show();
//                         jQuery('form#make_an_offer_test_form .make_an_offer_test_msg').html(responseObj.msg).delay(5000).fadeOut('slow');
//                         if (responseObj.status == 1)
//                             jQuery('form#make_an_offer_test_form').find("input[type=text], textarea, radio").val("");
//                         jQuery('.check').attr('checked', !0);
//                         if (typeof grecaptcha !== "undefined") { grecaptcha.reset(recaptcha2) }
//                         jQuery('#' + submit_btn_ID).removeAttr("disabled");
//                         jQuery('.make_an_offer_test_spinimg').html('')
//                     }
//                 })
//             }
//         });
//         if ($(".date").length != 0) { jQuery('.date').datepicker({ dateFormat: 'mm-dd-yy' }) }
//         $(".date-time").keydown(function(event) { event.preventDefault() });
//         jQuery('#schedule_test_form input[name=test_drive]').click(function() {
//             if (jQuery(this).val() == 'no')
//                 jQuery('.show_test_drive').css('display', 'none');
//             else jQuery('.show_test_drive').css('display', 'block')
//         });
//         jQuery('.time').timepicker({ 'timeFormat': 'H:i:s' });
//         jQuery('#schedule_test_request').click(function(e) {
//             e.preventDefault();
//             var formId = jQuery(this).parents('form').attr('id');
//             jQuery('form#' + formId).find('input').css({ "border": "none" });
//             var textArray = [];
//             jQuery('form#' + formId).find('input.cdhl_validate').each(function(i) { textArray[i] = jQuery(this).attr('name') });
//             if (jQuery('input[name=test_drive]:checked').val() == "no") {
//                 textArray.splice(jQuery.inArray("date", textArray), 1);
//                 textArray.splice(jQuery.inArray("time", textArray), 1)
//             }
//             var sts = do_validate_field(textArray, formId);
//             if (!sts) {
//                 var submit_btn_ID = jQuery(this).attr('id');
//                 jQuery.ajax({
//                     url: cardealer_js.ajaxurl,
//                     method: "POST",
//                     data: jQuery('form#schedule_test_form').serialize(),
//                     dataType: 'json',
//                     beforeSend: function() {
//                         jQuery('.schedule_test_spinimg').html('<span class="cd-loader"></span>');
//                         jQuery('#' + submit_btn_ID).prop("disabled", "disabled")
//                     },
//                     success: function(responseObj) {
//                         jQuery('form#schedule_test_form .schedule_test_msg').show();
//                         jQuery('form#schedule_test_form .schedule_test_msg').html(responseObj.msg).delay(5000).fadeOut('slow');
//                         if (responseObj.status == 1) {
//                             jQuery('form#schedule_test_form').find("input[type=text], input[type=number], textarea, radio").val("");
//                             jQuery('.check').attr('checked', !0)
//                         }
//                         if (typeof grecaptcha !== "undefined") { grecaptcha.reset(recaptcha3) }
//                         jQuery('#' + submit_btn_ID).removeAttr("disabled");
//                         jQuery('.schedule_test_spinimg').html('')
//                     }
//                 })
//             }
//         });
//         jQuery(document).on('click', '#submit_friend_frm', function(e) {
//             e.preventDefault();
//             var formId = jQuery(this).parents("form").attr('id');
//             var textArray = [];
//             jQuery('form#' + formId).find('input.cdhl_validate').each(function(i) { textArray[i] = jQuery(this).attr('name') });
//             var sts = do_validate_field(textArray, formId);
//             if (!sts) {
//                 var submit_btn_ID = jQuery(this).attr('id');
//                 jQuery.ajax({
//                     url: cardealer_js.ajaxurl,
//                     method: "POST",
//                     data: jQuery('form#' + formId).serialize(),
//                     dataType: 'json',
//                     beforeSend: function() {
//                         jQuery('.spinimg').html('<span class="cd-loader"></span>');
//                         jQuery('#' + submit_btn_ID).prop("disabled", "disabled")
//                     },
//                     success: function(responseObj) {
//                         jQuery('.spinimg').html('');
//                         jQuery('#' + submit_btn_ID).removeAttr("disabled");
//                         jQuery('form#' + formId + ' .friend-frm-msg').show();
//                         jQuery('form#' + formId + ' .friend-frm-msg').html(responseObj.msg).delay(5000).fadeOut('slow');
//                         if (responseObj.status == 1)
//                             jQuery('form#' + formId).find("input[type=text], textarea, radio").val("");
//                         jQuery('.check').attr('checked', !0);
//                         if (typeof grecaptcha !== "undefined") { grecaptcha.reset(recaptcha4) }
//                     }
//                 })
//             }
//         });
//         jQuery("#personal_application").css("display", "none");
//         if ($('#joint_application').is(':checked')) { $('#personal_application').show() }
//         jQuery('#joint_application').change(function() { if (jQuery(this).is(':checked')) { jQuery("#personal_application").show() } else { jQuery("#personal_application").hide() } });
//         jQuery('#financial_form_request').click(function(e) {
//             e.preventDefault();
//             var formId = jQuery(this).parents('form').attr('id');
//             var financial = [];
//             jQuery('form#' + formId).find('input.cdhl_validate').each(function(i) { financial[i] = jQuery(this).attr('name') });
//             var Selectfinancial = [];
//             jQuery('form#' + formId).find('select.cdhl_sel_validate').each(function(i) { Selectfinancial[i] = jQuery(this).attr('name') });
//             var joint = [];
//             jQuery('form#' + formId).find('input.cdhl_validate_joint').each(function(i) { joint[i] = jQuery(this).attr('name') });
//             var joint;
//             jQuery('form#' + formId).find('input.cdhl_validate_joint').each(function(i) { joint[i] = jQuery(this).attr('name') });
//             var selectjoint = [];
//             jQuery('form#' + formId).find('select.cdhl_sel_validate_joint').each(function(i) { selectjoint[i] = jQuery(this).attr('name') });
//             var SelectArray = [];
//             var textArray = [];
//             if (jQuery("#joint_application").is(':checked'))
//                 textArray = financial.concat(joint);
//             else textArray = financial;
//             if (jQuery("#joint_application").is(':checked'))
//                 SelectArray = Selectfinancial.concat(selectjoint);
//             else SelectArray = Selectfinancial;
//             var sts = do_validate_field(textArray, formId, SelectArray);
//             if (!sts) {
//                 var submit_btn_ID = jQuery(this).attr('id');
//                 jQuery.ajax({
//                     url: cardealer_js.ajaxurl,
//                     method: "POST",
//                     dataType: 'json',
//                     data: jQuery('form#financial_form').serialize(),
//                     beforeSend: function() {
//                         jQuery('.financial_form_spining').html('<span class="cd-loader"></span>');
//                         jQuery('#' + submit_btn_ID).prop("disabled", "disabled")
//                     },
//                     success: function(responseObj) {
//                         jQuery('.financial_form_spining').html('');
//                         jQuery('#' + submit_btn_ID).removeAttr("disabled");
//                         jQuery('form#financial_form .financial_form_msg').show();
//                         jQuery('form#financial_form .financial_form_msg').html(responseObj.msg).delay(5000).fadeOut('slow');
//                         if (responseObj.status == 1) {
//                             jQuery('form#financial_form').find("input[type=text], input[type=number], textarea, radio").val("");
//                             jQuery('.check').attr('checked', !0);
//                             jQuery('select').prop('selectedIndex', 0);
//                             jQuery('select').niceSelect('update')
//                         }
//                         if (typeof grecaptcha !== "undefined") { grecaptcha.reset(recaptcha5) }
//                     }
//                 })
//             }
//         });
//         jQuery('.twitter-share').on('click', function() {
//             var $this = jQuery(this),
//                 $url = $this.attr('data-url'),
//                 $title = $this.attr('data-title');
//             window.open('http://twitter.com/intent/tweet?text=' + $title + ' ' + $url, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
//             return !1
//         });
//         jQuery('.pinterest-share').on('click', function() {
//             var $this = jQuery(this),
//                 $url = $this.attr('data-url'),
//                 $title = $this.attr('data-title'),
//                 $image = $this.attr('data-image');
//             window.open('http://pinterest.com/pin/create/button/?url=' + $url + '&media=' + $image + '&description=' + $title, "twitterWindow", "height=320,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
//             return !1
//         });
//         jQuery('.facebook-share').on('click', function() {
//             var $url = jQuery(this).attr('data-url');
//             window.open('https://www.facebook.com/sharer/sharer.php?u=' + $url, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
//             return !1
//         });
//         jQuery('.googleplus-share').on('click', function() {
//             var $url = jQuery(this).attr('data-url');
//             window.open('https://plus.google.com/share?url=' + $url, "googlePlusWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
//             return !1
//         });
//         jQuery('.linkedin-share').on('click', function() {
//             var $this = jQuery(this),
//                 $url = $this.attr('data-url'),
//                 $title = $this.attr('data-title'),
//                 $desc = $this.attr('data-desc');
//             window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + $url + '&title=' + $title + '&summary=' + $desc, "linkedInWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
//             return !1
//         });
//         jQuery('.whatsapp-share').on('click', function() {
//             var $this = jQuery(this),
//                 $url = $this.attr('data-url');
//             window.open('https://web.whatsapp.com/send?text=' + $url, "", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
//             return !1
//         });
//         if ($(".countdown").length != 0) {
//             var $countdown_date = $('.countdown').data('countdown-date');
//             $('.countdown').downCount({ date: $countdown_date, }, function() {})
//         }
//         if (document.getElementById('cars-image-gallery')) {
//             $('.slider-for').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !0, adaptiveHeight: !0, asNavFor: '.slider-nav' });
//             $('.slider-nav').slick({ slidesToShow: 5, slidesToScroll: 1, asNavFor: '.slider-for', dots: !1, focusOnSelect: !0 });
//             $('.slider-for-full').slick({ slidesToShow: 3, slidesToScroll: 1, arrows: !0, adaptiveHeight: !0, })
//         }
//         var $tabsdata = $("#tabs li[data-tabs]"),
//             $tabscontent = $(".tabcontent"),
//             $tabsnav = $(".tabs li");
//         $tabsdata.on('click', function() {
//             $tabsdata.removeClass('active');
//             $tabscontent.hide();
//             var tab = $(this).data('tabs');
//             $(this).addClass('active');
//             $('#' + tab).fadeIn().show()
//         });
//         $tabsnav.on('click', function() {
//             var cur = $tabsnav.index(this);
//             var elm = $('.tabcontent:eq(' + cur + ')');
//             elm.addClass("pulse");
//             setTimeout(function() { elm.removeClass("pulse") }, 220)
//         });
//         $tabscontent.hide().filter(':first').show();
//         jQuery(".tabs_wrapper").each(function(index) { jQuery(this).find('.tabcontent').hide().filter(':first').show() });
//         jQuery('.tabs_wrapper li[data-tabs]').on('click', function() {
//             var tabs_parent = jQuery(this).closest('.tabs_wrapper');
//             jQuery(tabs_parent).find('li[data-tabs]').removeClass('active');
//             jQuery(tabs_parent).find('.tabcontent').hide();
//             var tab = jQuery(this).data('tabs');
//             jQuery(this).addClass('active');
//             jQuery('#' + tab).fadeIn().show()
//         });
//         jQuery(".tabs li").click(function() {
//             var cur = jQuery(".tabs li").index(this);
//             var elm = jQuery('.tabcontent:eq(' + cur + ')');
//             elm.addClass("pulse");
//             setTimeout(function() { elm.removeClass("pulse") }, 220)
//         });
//         var stylesheet = '';
//         jQuery(".cd-space").each(function() {
//             var $this = jQuery(this);
//             var desktoppad = $this.attr("data-desktop");
//             var tablatepad = $this.attr("data-tablet");
//             var portraitpad = $this.attr("data-tablet-portrait");
//             var mobilepad = $this.attr("data-mobile");
//             var mobileporpad = $this.attr("data-mobile-portrait");
//             var cls = $this.attr('class').split(' ');
//             var clsname = cls[cls.length - 1];
//             stylesheet += "." + clsname + "{ height:" + desktoppad + "px} @media only screen and (max-width: 1200px) {." + clsname + "{ height:" + tablatepad + "px}}@media only screen and (max-width: 992px) {." + clsname + "{ height:" + portraitpad + "px}}@media only screen and (max-width: 767px) {." + clsname + "{ height:" + mobilepad + "px}}@media only screen and (max-width: 479px) {." + clsname + "{ height:" + mobileporpad + "px}}"
//         });
//         jQuery("<style type='text/css'>" + stylesheet + "</style>").appendTo("head");
//         if (jQuery('select.cd-select-box').length) { jQuery('select.cd-select-box').niceSelect() }
//         if (jQuery('.woocommerce-ordering select.orderby').length) { jQuery('.woocommerce-ordering select.orderby').niceSelect() }
//         if (jQuery('.sidebar-widget').length && jQuery('select').length) { jQuery('.sidebar-widget select:not(.cd-select-box)').niceSelect() }
//         if (jQuery('.single-product.woocommerce .variations select').length) { jQuery('.single-product.woocommerce .variations select').select2() }
//         jQuery(document).on('submit', 'form.news-letter-form, form.news-letter', function(event) {
//             event.preventDefault();
//             jQuery('.newsletter-mailchimp').trigger('click')
//         });
//         cardealer_load_masonry();
//         jQuery(document).on('click', '.cart-mobile-content', function(event) {
//             event.preventDefault();
//             jQuery('.widget_shopping_cart_content').toggle()
//         });
//         if (jQuery(".counter").length != 0) { jQuery('.counter').appear(function() { jQuery('.timer').each(count) }, { offset: 500 }) }
//         var carsIdList = JSON.stringify(cookies.get('cars'));
//         if (cookies.get('cars') != null && cookies.get('cars') != '') {
//             jQuery('.menu-item .menu-item-compare').show();
//             var carIdArray = $.parseJSON(carsIdList);
//             jQuery('.menu-item .compare-details.count').html(carIdArray.length)
//         }
//         $(document).on("click", ".compare_pgs, .menu-item-compare", function() {
//             var carListClick = 0;
//             if ($(this).hasClass('compare_pgs')) {
//                 var car_id = jQuery(this).data('id');
//                 var carIds = JSON.stringify([car_id]);
//                 carListClick = 1;
//                 $(this).find('i').removeClass('fa-exchange-alt');
//                 $(this).find('i').addClass('fa-check');
//                 if (cookies.get('cars')) {
//                     carIds = cookies.get('cars');
//                     if (jQuery.inArray(car_id, carIds) == -1)
//                         carIds[carIds.length] = car_id;
//                     carIds = JSON.stringify(carIds)
//                 }
//                 destroyCookie('cars');
//                 cookies.set('cars', carIds)
//             }
//             var carsIdList = JSON.stringify(cookies.get('cars'));
//             jQuery.ajax({
//                 url: cardealer_js.ajaxurl,
//                 type: 'post',
//                 data: 'action=car_compare_action&car_ids=' + carsIdList,
//                 beforeSend: function() { jQuery('body').append('<div id="comparelist" class="modal" tabindex="-1" role="dialog" aria-hidden="true"></div>') },
//                 success: function(carData) {
//                     var carIdArray = $.parseJSON(carsIdList);
//                     jQuery('.menu-item .compare-details.count').html(carIdArray.length);
//                     if (jQuery('.menu-item-compare').is(':hidden') && carIdArray.length > 0) jQuery('.menu-item-compare').show();
//                     if (carIdArray.length < 2 && carListClick == 1) return;
//                     jQuery("#comparelist").html(carData);
//                     $('div#sortable').css('width', ($('#sortable .compare-list').length * $('.compare-list').width()) + ' !important');
//                     jQuery('#comparelist').modal('show');
//                     if (jQuery(window).width() > 480) {
//                         jQuery("#sortable, #sortable2").sortable();
//                         jQuery("#sortable, #sortable2").disableSelection()
//                     }
//                 },
//                 error: function(carData) { alert('not added..') },
//             })
//         });
//         jQuery(document).on('shown.bs.modal', '#comparelist', function(e) {
//             var tdMaxHeight = -1;
//             var node;
//             jQuery(".table-scroll .compare-list tr.interior_color td").each(function(index) {
//                 if (jQuery(this).outerHeight() > tdMaxHeight) {
//                     tdMaxHeight = jQuery(this).outerHeight();
//                     node = index
//                 }
//                 jQuery('.table-scroll .compare-list tr.interior_color td, .heading-Wrapper tr td.interior_color').css({ 'height': tdMaxHeight })
//             })
//         });
//         jQuery(document).on('hidden.bs.modal', '#comparelist', function(e) { $('.compare_pgs i.fa-spinner').parent().addClass('compared_pgs') });
//         $(document).on('click', '.drop_item', function() {
//             var carID = $(this).data('car_id');
//             var cookieArray = cookies.get('cars');
//             cookieArray.splice($.inArray(carID, cookieArray), 1);
//             cookies.set('cars', JSON.stringify(cookieArray));
//             $('.table-scroll').find(".compare-list[data-id='" + carID + "']").remove();
//             $('li').find("a[data-id='" + carID + "']").addClass('compare_pgs');
//             $('li').find("a[data-id='" + carID + "']").removeClass('compared_pgs');
//             $('li').find("a[data-id='" + carID + "']").find('i').addClass('fa-exchange-alt');
//             $('li').find("a[data-id='" + carID + "']").find('i').removeClass('fa-check');
//             cookieArray = cookies.get('cars');
//             jQuery('.menu-item .compare-details.count').html(cookieArray.length);
//             if (cookieArray.length < 1) {
//                 $('#comparelist').modal('hide');
//                 jQuery('.menu-item-compare').hide()
//             } else $('#sortable').css('width', (cookieArray.length * $('.compare-list').width()))
//         });
//         cardealer_initVideoBackgrounds();
//         cardealer_initVimeoVideoBackgrounds();
//         var screen_width = screen.width;
//         jQuery(document).scroll(function() {
//             if (cardealer_js.sticky_topbar == !0) {
//                 var sticky = jQuery('.topbar'),
//                     scroll = jQuery(window).scrollTop();
//                 if (scroll >= 250 && screen_width > 992) { sticky.addClass('topbar_fixed') } else { sticky.removeClass('topbar_fixed') }
//             }
//         });
//         var $mobile_sticky_status = (cardealer_js.sticky_header_mobile == !0) ? true : !1;
//         var $desktop_sticky_status = (cardealer_js.sticky_header_desktop == !0) ? true : !1;
//         jQuery('#menu-1').megaMenu({ logo_align: 'left', links_align: 'left', socialBar_align: 'left', searchBar_align: 'right', trigger: 'hover', effect: 'fade', effect_speed: 400, sibling: !0, outside_click_close: !0, top_fixed: !1, sticky_header: $desktop_sticky_status, sticky_header_height: 250, menu_position: 'horizontal', full_width: !1, mobile_settings: { collapse: !0, sibling: !0, scrollBar: !0, scrollBar_height: 400, top_fixed: !1, sticky_header: $mobile_sticky_status, sticky_header_height: 200 } });
//         jQuery('#menu-2').megaMenu({ sticky_header_height: 1000, mobile_settings: { collapse: !0 } });
//         jQuery('#menu-3').megaMenu({ menu_position: 'vertical-left', effect: 'expand-left' });
//         if (document.getElementById('mega-menu-wrap-primary-menu')) { jQuery('.menu-mobile-collapse-trigger').hide() }
//         var $scrolltop = jQuery('.car-top');
//         jQuery(window).scroll(function() {
//             if (jQuery(window).scrollTop() >= 200) {
//                 $scrolltop.addClass("show");
//                 $scrolltop.addClass("car-down")
//             } else {
//                 $scrolltop.removeClass("show");
//                 setTimeout(function() { $scrolltop.removeClass('car-down') }, 300)
//             }
//         });
//         $scrolltop.on('click', function() {
//             jQuery('html,body').animate({ scrollTop: 0 }, 800);
//             jQuery(this).addClass("car-run");
//             setTimeout(function() { $scrolltop.removeClass('car-run') }, 1000);
//             return !1
//         })
//     });

//     function chklog(message) {
//         $("<div>").text(message).prependTo("#log");
//         $("#log").scrollTop(0)
//     }

//     function count(options) {
//         var jQuerythis = jQuery(this);
//         options = jQuery.extend({}, options || {}, jQuerythis.data('countToOptions') || {});
//         jQuerythis.countTo(options)
//     }
//     jQuery('[placeholder]').focus(function() {
//         var input = jQuery(this);
//         if (input.val() == input.attr('placeholder')) {
//             input.val('');
//             input.removeClass('placeholder')
//         }
//     }).blur().parents('form').submit(function() { jQuery(this).find('[placeholder]').each(function() { var input = jQuery(this); if (input.val() == input.attr('placeholder')) { input.val('') } }) });

//     function destroyCookie(cname) {
//         var date = new Date();
//         var expires = "; expires=" + date.toGMTString();
//         date.setTime(date.getTime() - (1 * 24 * 60 * 60 * 1000));
//         document.cookie = cname + "=1" + expires
//     }

//     function IsValidJSON(test) {
//         try { var obj = JSON.parse(test); if (obj && typeof obj === "object" && obj !== null) { return !0 } } catch (e) {}
//         return !1
//     }

//     function cardealer_initVimeoVideoBackgrounds() {
//         jQuery(".vimeo_video_bg iframe").each(function() {
//             var iframe_src = jQuery(this).attr('src');
//             var $element = jQuery('.vimeo_video_bg').parent();
//             jQuery(this).attr('src', iframe_src + "?background=1&autoplay=1&muted=1");
//             ResizeVideoBackground($element);
//             jQuery(window).bind("resize", function() { ResizeVideoBackground($element) })
//         })
//     }

//     function cardealer_initVideoBackgrounds() { jQuery("[data-youtube-video-bg]").each(function() { var youtubeUrl, youtubeId, $element = jQuery(this); if ($element.data("youtubeVideoBg")) { youtubeUrl = $element.data("youtubeVideoBg"), youtubeId = ExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".youtube_video-bg").remove(), insertYoutubeVideoAsBackground_($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) { $element.has($grid).length && ResizeVideoBackground($element) }) } else { $element.find(".youtube_video-bg").remove() } }) }

//     function insertYoutubeVideoAsBackground_($element, youtubeId, counter) {
//         if ("undefined" == typeof YT || "undefined" == typeof YT.Player) return counter = "undefined" == typeof counter ? 0 : counter, 100 < counter ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() { insertYoutubeVideoAsBackground_($element, youtubeId, counter++) }, 100);
//         var $container = $element.prepend('<div class="intro_header_video-bg vc_video-bg"><div class="inner"></div></div>').find(".inner");
//         new YT.Player($container[0], { width: "100%", height: "100%", videoId: youtubeId, playerVars: { playlist: youtubeId, iv_load_policy: 3, enablejsapi: 1, disablekb: 1, autoplay: 1, controls: 0, showinfo: 0, rel: 0, loop: 1, wmode: "transparent" }, events: { onReady: function(event) { event.target.mute().setLoop(!0) } } }), ResizeVideoBackground($element), jQuery(window).bind("resize", function() { ResizeVideoBackground($element) })
//     }

//     function ResizeVideoBackground($element) {
//         var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
//             containerH = $element.innerHeight(),
//             ratio1 = 16,
//             ratio2 = 9;
//         containerW / containerH < ratio1 / ratio2 ? (iframeW = containerH * (ratio1 / ratio2), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (ratio2 / ratio1), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".intro_header_video-bg iframe").css({ maxWidth: "1000%", marginLeft: marginLeft, marginTop: marginTop, width: iframeW, height: iframeH })
//     }

//     function ExtractYoutubeId(url) { if ("undefined" == typeof url) return !1; var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/); return null !== id && id[1] }

//     function do_validate_field(textArray, formId, SelectArray) {
//         validationStr = !1;
//         if (jQuery('.validation_error').length) { jQuery('.validation_error').css("border", "none") }
//         if (jQuery('form#' + formId).find('input:checkbox[name=cdhl_terms_privacy]').length > 0) {
//             var checkbox_field = jQuery('form#' + formId).find('input:checkbox[name=cdhl_terms_privacy]:checked').val();
//             if (checkbox_field == null || checkbox_field == "") {
//                 validationStr = !0;
//                 jQuery('form#' + formId).find('input:checkbox[name=cdhl_terms_privacy]').parent().parent('div').addClass('validation_error').css({ "border-style": "solid", "border-width": "1px 1px 1px 1px", "border-color": "red" })
//             }
//         }
//         for (var n = 0; n < textArray.length; n++) {
//             str = textArray[n];
//             jQuery('form#' + formId).find('input[name=' + str + ']').css({ "border": "none" });
//             var field_val = jQuery('form#' + formId).find('input[name=' + str + ']').val();
//             if (field_val == "") {
//                 validationStr = !0;
//                 jQuery('form#' + formId).find('input[name=' + str + ']').css({ "border-style": "solid", "border-width": "1px 1px 1px 1px", "border-color": "red" })
//             }
//             if (jQuery("input[name=" + str + "]").hasClass('cardealer_mail')) {
//                 var varTestMailExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                 var varEmail = field_val;
//                 if (varEmail && varEmail.search(varTestMailExp) == -1) {
//                     validationStr = !0;
//                     jQuery('form#' + formId).find('input[name=' + str + ']').css({ "border-style": "solid", "border-width": "1px 1px 1px 1px", "border-color": "red" })
//                 }
//             }
//         }
//         if (typeof SelectArray != 'undefined') {
//             if (SelectArray) {
//                 for (var n = 0; n < SelectArray.length; n++) {
//                     str = SelectArray[n];
//                     jQuery('form#' + formId).find('select[name=' + str + ']').next('.nice-select').css({ "border-color": "#e3e3e3" });
//                     var field_val = jQuery('form#' + formId).find('select[name=' + str + ']').val();
//                     if (field_val == "") {
//                         validationStr = !0;
//                         jQuery('form#' + formId).find('select[name=' + str + ']').next('.nice-select').css({ "border-style": "solid", "border-width": "1px 1px 1px 1px", "border-color": "red" })
//                     }
//                 }
//             }
//         }
//         return validationStr
//     }
//     jQuery(document).ready(function($) {
//         var ua = navigator.userAgent,
//             iOS = /iPad|iPhone|iPod/.test(ua),
//             iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3/.test(ua);
//         if (iOS && iOS11) { jQuery("body").addClass("iosmodalFix") }
//         if (jQuery(".social_security_number_mask").length > 0) { jQuery(".social_security_number_mask").inputmask("XXX-XX-XXXX") }
//     });
//     $(document).ready(function() {
//         $('.potenza-custom-menu.horizontal li a').on("click", function(e) {
//             e.preventDefault();
//             var full_url = this.href;
//             var parts = full_url.split("#");
//             var target = parts[1];
//             if (typeof target === 'undefined') { window.location.href = full_url; return }
//             var gap = 75;
//             $('html,body').stop().animate({ scrollTop: $("#" + target).offset().top - gap }, 600);
//             $('.potenza-custom-menu.horizontal li').removeClass("active");
//             $(this).parent().addClass("active");
//             return !1
//         });
//         if ($(".potenza-custom-menu.horizontal")[0]) {
//             var x = $(".potenza-custom-menu.horizontal").offset().top;
//             $(window).scroll(function() {
//                 if (!$('.potenza-custom-menu.horizontal').hasClass('no-sticky')) { if ($(this).scrollTop() > x) { $('.potenza-custom-menu.horizontal').addClass('sticky') } else { $('.potenza-custom-menu.horizontal').removeClass('sticky') } }
//                 var scrollPos = $(document).scrollTop() + 80;
//                 $('.potenza-custom-menu.horizontal li a').each(function() {
//                     var currLink = $(this);
//                     var refElement = $(currLink.attr("href"));
//                     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                         $('.potenza-custom-menu.horizontal li').removeClass("active");
//                         currLink.parent().addClass("active")
//                     } else { currLink.parent().removeClass("active") }
//                 })
//             })
//         }
//         if (jQuery(".cd-vehicle-gurus").length > 0 && (typeof cardealer_carguru != 'undefined')) {
//             var CarGurus = window.CarGurus || {};
//             window.CarGurus = CarGurus;
//             CarGurus.DealRatingBadge = window.CarGurus.DealRatingBadge || {};
//             CarGurus.DealRatingBadge.options = { "style": "STYLE1", "minRating": cardealer_carguru.carguru_rating, "defaultHeight": cardealer_carguru.carguru_height };
//             var script = document.createElement('script');
//             script.src = "https://static.cargurus.com/js/api/en_US/1.0/dealratingbadge.js";
//             script.async = !0;
//             var entry = document.getElementsByTagName('script')[0];
//             entry.parentNode.insertBefore(script, entry)
//         }
//     });
//     if (jQuery(".listing-sidebar-sticky").length > 0) {
//         (function() {
//             var reset_scroll;
//             jQuery(function() { if (window.matchMedia('(min-width: 768px)').matches) { return jQuery("[data-sticky_column]").stick_in_parent({ parent: "[data-sticky_parent]" }) } });
//             reset_scroll = function() {
//                 var scroller;
//                 scroller = jQuery("body,html");
//                 scroller.stop(!0);
//                 if (jQuery(window).scrollTop() !== 0) { scroller.animate({ scrollTop: 0 }, "fast") }
//                 return scroller
//             };
//             window.scroll_it = function() {
//                 var max;
//                 max = jQuery(document).height() - jQuery(window).height();
//                 return reset_scroll().animate({ scrollTop: max }, max * 3).delay(100).animate({ scrollTop: 0 }, max * 3)
//             };
//             window.scroll_it_wobble = function() {
//                 var max, third;
//                 max = jQuery(document).height() - jQuery(window).height();
//                 third = Math.floor(max / 3);
//                 return reset_scroll().animate({ scrollTop: third * 2 }, max * 3).delay(100).animate({ scrollTop: third }, max * 3).delay(100).animate({ scrollTop: max }, max * 3).delay(100).animate({ scrollTop: 0 }, max * 3)
//             };
//             jQuery(window).on("resize", (function(_this) { return function(e) { return jQuery(document.body).trigger("sticky_kit:recalc") } })(this));
//             jQuery(window).on("scroll", (function(_this) { return function(e) { return jQuery(document.body).trigger("sticky_kit:recalc") } })(this))
//         }).call(this);
//         (function() { var sticky; if (window.matchMedia('(min-width: 768px)').matches) { jQuery(".listing-sidebar-sticky").sticky({ topSpacing: 0 }) } })
//     }

//     function cardealer_lazyload() { if (jQuery('.cardealer-lazy-load').length) { jQuery('.cardealer-lazy-load').lazyload() } }
// })(jQuery);

// function cardealer_load_masonry() { setTimeout(function() { if (jQuery('.blog.masonry-main .masonry').length > 0) { jQuery('.masonry-main .masonry').masonry({ itemSelector: '.masonry-item' }) } }, 3000); var container = jQuery('.masonry-main .masonry'); if (container.length > 0 && (jQuery('.isotope-2.masonry').length > 0)) { jQuery(container).each(function(key, value) { var $msnry = jQuery('.isotope-2.masonry'); var msnry = new Shuffle($msnry, { itemSelector: '.masonry-item', }) }) } }
// jQuery(function($) {
//     "use strict";
//     if (jQuery('html').attr('dir') == 'rtl') {
//         jQuery(window).load(function() { cardealer_vc_rtl_fullwidthrow() });
//         $(window).resize(function() { cardealer_vc_rtl_fullwidthrow() })
//     }
//     if (!jQuery('#dealer-slider-year-range').hasClass('dealer-slider-year-range')) { jQuery('#dealer-slider-year-range').addClass('dealer-slider-year-range') }
// });

// function cardealer_vc_rtl_fullwidthrow() {
//     if (jQuery('html').attr('dir') == 'rtl') {
//         var $elements = jQuery('[data-vc-full-width="true"]');
//         jQuery.each($elements, function(key, item) {
//             var $el = jQuery(this);
//             $el.addClass("vc_hidden");
//             var $el_full = $el.next(".vc_row-full-width");
//             if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
//                 var el_margin_left = parseInt($el.css("margin-left"), 10);
//                 var el_margin_right = parseInt($el.css("margin-right"), 10);
//                 var offset = 0 - $el_full.offset().left - el_margin_left;
//                 var width = jQuery(window).width();
//                 $el.css({ left: 'auto', right: offset, width: width, })
//             }
//             $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden")
//         })
//     }
// }