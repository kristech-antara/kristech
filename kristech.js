function regxify(e){return String(e.match(/[^{\}]+(?=})/g)).trim()}function msgError(){return'<span class="no-posts"><b>Error:</b> No Results Found</span>'}function msgServerError(){return'<div class="no-posts error-503"><b>Error loading feeds!</b> Maybe because the connection failed or the blogger server did not respond to the request.</div>'}function beforeLoader(){return'<div class="loader"/>'}function getFeedUrl(e,t,a){var r="";switch(a){case"recent":r="/feeds/posts/summary?alt=json&max-results="+t;break;case"comments":r="list"==e?"/feeds/comments/summary?alt=json&max-results="+t:"/feeds/posts/summary/-/"+a+"?alt=json&max-results="+t;break;default:r="/feeds/posts/summary/-/"+a+"?alt=json&max-results="+t}return r}function getPostLink(e,t){for(var a=0;a<e[t].link.length;a++)if("alternate"==e[t].link[a].rel){var r=e[t].link[a].href;break}return r}function getPostTitle(e,t){return e[t].title.$t}function getPostImage(e,t){if("media$thumbnail"in e[t]){var a=e[t].media$thumbnail.url;a.match("img.youtube.com")&&(a=a.replace("/default.","/0."));var r=a}else r="https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png";return r}function getPostAuthor(e,t){var a=e[t].author[0].name.$t;if("true"==messages.postAuthor)var r='<span class="entry-author">'+a+"</span>";else r="";return r}function getPostDate(e,t){var a=e[t].published.$t,r=a.substring(0,4),s=a.substring(5,7),o=a.substring(8,10),n=monthFormat[parseInt(s,10)-1]+" "+o+", "+r;if("true"==messages.postDate)var i='<span class="entry-time"><time class="published" datetime="'+a+'">'+n+"</time></span>";else i="";return i}function getPostMeta(e,t){if("true"==messages.postAuthor||"true"==messages.postDate)var a='<div class="entry-meta">'+e+t+"</div>";else a="";if("true"==messages.postDate)var r='<div class="entry-meta">'+t+"</div>";else r="";return[a,r]}function getPostLabel(e,t){if(null!=e[t].category)var a='<span class="entry-category">'+e[t].category[0].term+"</span>";else a="";return a}function getCustomStyle(e,t,a){if(""!=a){if("featured"==e)var r=".id-"+e+"-"+t+" .entry-category{background-color:"+a+";color:#fff}.id-"+e+"-"+t+" .loader:after{border-color:"+a+";border-right-color:rgba(155,155,155,0.2)}"}else r="";return r}function getAjax(h,f,e,a,r){switch(f){case"featured":case"related":null==a&&(a="geterror404");var t=getFeedUrl(f,e,a);$.ajax({url:t,type:"GET",dataType:"json",cache:!0,beforeSend:function(e){var t=getCustomStyle(f,a,r);switch(f){case"featured":$("#page-skin-2").prepend(t),h.html(beforeLoader()).parent().addClass("id-"+f+"-"+a+" show-ify");break;case"related":h.html(beforeLoader()).parent().addClass("show-ify")}},success:function(e){var t="";switch(f){case"featured":t='<div class="featured-posts">';break;case"related":t='<div class="related-posts">'}var a=e.feed.entry;if(null!=a)for(var r=0,s=a;r<s.length;r++){var o=getPostLink(s,r),n=getPostTitle(s,r,o),i=getPostImage(s,r,o),l=getPostMeta(getPostAuthor(s,r),getPostDate(s,r)),c=getPostLabel(s,r),d="";switch(f){case"featured":switch(r){case 0:d+='<article class="featured-item post item-'+r+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+o+'"><span class="entry-thumb" data-image="'+i+'"/></a>'+c+'<div class="entry-header entry-info"><h2 class="entry-title"><a href="'+o+'">'+n+"</a></h2>"+l[0]+'</div></div></article><div class="featured-scroll">';break;default:d+='<article class="featured-item post item-'+r+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+o+'"><span class="entry-thumb" data-image="'+i+'"/></a>'+c+'<div class="entry-header entry-info"><h2 class="entry-title"><a href="'+o+'">'+n+"</a></h2>"+l[1]+"</div></div></article>"}break;case"related":d+='<article class="related-item post item-'+r+'"><div class="entry-image"><a class="entry-image-link" href="'+o+'"><span class="entry-thumb" data-image="'+i+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+o+'">'+n+"</a></h2>"+l[1]+"</div></article>"}t+=d}else t=msgError();switch(f){case"featured":t+="</div></div>",h.html(t);break;default:t+="</div>",h.html(t)}h.find("span.entry-thumb").lazyify()},error:function(){h.html(msgServerError())}})}}function ajaxFeatured(e,t,a,r,s,o){if(s.match("getfeatured")){if("featured"==t)return getAjax(e,t,a,r,o);e.html(beforeLoader()).parent().addClass("show-ify"),setTimeout(function(){e.html(msgError())},500)}}function ajaxRelated(e,t,a,r,s){if(s.match("getrelated"))return getAjax(e,t,a,r)}!function(o){o.fn.lazyify=function(){return this.each(function(){var r=o(this),e=r.attr("data-image"),t="/w"+Math.round(r.width())+"-h"+Math.round(r.height())+"-p-k-no-nu",s="";function a(){var e=o(window).height(),t=o(window).scrollTop();if(r.offset().top<t+e){var a=new Image;a.onload=function(){r.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},a.src=s}}s=e.match("s72-c")?e.replace("/s72-c",t):e.match("w72-h")?e.replace("/w72-h72-p-k-no-nu",t):e,o(window).on("load resize scroll",a),a()})}}(jQuery),$("#onepress-free-main-menu").menuify(),$("#onepress-free-main-menu .widget").addClass("show-menu"),$(".search-toggle").on("click",function(){$("body").toggleClass("search-active")}),$(".blog-posts-title a.more,.related-title a.more").each(function(){var e=$(this),t=viewAllText;""!=t&&e.text(t)}),$(".follow-by-email-text").each(function(){var e=$(this),t=followByEmailText;""!=t&&e.text(t)}),$("#onepress-free-social-counter ul.social-icons li a").each(function(){var e=$(this),t=e.find(".count"),a=e.data("content").trim().split("$"),r=a[0],s=a[1];e.attr("href",r),t.text(s)}),$(".avatar-image-container img").attr("src",function(e,t){return t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")}),$(".post-body a").each(function(){var e=$(this),t=e.text().trim(),a=t.split("/"),r=a[0],s=a[1],o=a.pop();t.match("button")&&(e.addClass("button").text(r),"button"!=s&&e.addClass(s),"button"!=o&&e.addClass("colored-button").css({"background-color":o}))}),$(".post-body strike").each(function(){var e=$(this),t=e.text().trim(),a=e.html();t.match("contact-form")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),t.match("alert-success")&&e.replaceWith('<div class="alert-message alert-success short-b">'+a+"</div>"),t.match("alert-info")&&e.replaceWith('<div class="alert-message alert-info short-b">'+a+"</div>"),t.match("alert-warning")&&e.replaceWith('<div class="alert-message alert-warning short-b">'+a+"</div>"),t.match("alert-error")&&e.replaceWith('<div class="alert-message alert-error short-b">'+a+"</div>"),t.match("left-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>"),t.match("right-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>"),t.match("full-width")&&e.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>"),t.match("code-box")&&e.replaceWith('<pre class="code-box short-b">'+a+"</pre>"),$(".post-body .short-b").find("b").each(function(){var e=$(this),t=e.text().trim();(t.match("alert-success")||t.match("alert-info")||t.match("alert-warning")||t.match("alert-error")||t.match("code-box"))&&e.replaceWith("")})}),$(".onepress-free-share-links .window-ify,.entry-share .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),r=e.data("height"),s=window.screen.width,o=window.screen.height,n=Math.round(s/2-a/2),i=Math.round(o/2-r/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+r+",left="+n+",top="+i).focus()}),$(".onepress-free-share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-description span a").each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" target="_blank"/></li>'),$(".author-description").append($(".author-description span li")),$(".author-description").addClass("show-icons")}),$("#featured .HTML .widget-content").each(function(e,t){var a=$(this),r=a.text().trim(),s=r.toLowerCase(),o=r.split("$");ajaxFeatured(a,"featured",3,null!=o[1]?regxify(o[1]):"",s,null!=o[2]?regxify(o[2]):"")}),$(".onepress-free-related-content").each(function(){var e=$(this),t=e.find(".related-tag").attr("data-label");ajaxRelated(e,"related",relatedPostsNum,t,"getrelated")}),$(".onepress-free-blog-post-comments").each(function(){var e=$(this);e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show");var t=e.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),a=e.find(".comments .toplevel-thread > #top-continue");t.on("click",function(){a.show()}),a.on("click",function(){a.hide()})}),$(function(){$(".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazyify(),$(".mobile-logo").each(function(){var e=$(this),t=$("#main-logo .header-widget a").clone();t.find("#h1-tag").remove(),t.appendTo(e)}),$("#onepress-free-mobile-menu").each(function(){var e=$(this),t=$("#onepress-free-main-menu-nav").clone();t.attr("id","main-mobile-nav"),t.appendTo(e),$(".show-onepress-free-mobile-menu, .hide-onepress-free-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".onepress-free-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".onepress-free-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}),$(".social-mobile").each(function(){var e=$(this);$("#navbar-social ul.social").clone().appendTo(e)}),$("#onepress-free-header-wrapper .headerify").each(function(){var t=$(this);if(1==fixedMenu&&0<t.length){var a=$(document).scrollTop(),e=t.offset().top,r=t.height(),s=e+r;$(window).scroll(function(){var e=$(document).scrollTop();e<$("#footer-wrapper").offset().top-r&&(s<e?t.addClass("is-fixed"):e<=0&&t.removeClass("is-fixed"),a<e?t.removeClass("show"):t.addClass("show"),a=$(document).scrollTop())})}}),$("#main-wrapper,#sidebar-wrapper").each(function(){if(1==fixedSidebar){if(1==fixedMenu)var e=90;else e=30;$(this).theiaStickySidebar({additionalMarginTop:e,additionalMarginBottom:30})}}),$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?e.fadeIn(250):e.fadeOut(250),e.offset().top>=$("#footer-wrapper").offset().top-32?e.addClass("on-footer"):e.removeClass("on-footer")}),e.click(function(){$("html, body").animate({scrollTop:0},500)})}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')}),$("#onepress-free-load-more-link").each(function(){var a=$(this).data("load");a&&$("#onepress-free-load-more-link").show(),$("#onepress-free-load-more-link").on("click",function(e){$("#onepress-free-load-more-link").hide(),$.ajax({url:a,success:function(e){var t=$(e).find(".blog-posts");t.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(t.html()),(a=$(e).find("#onepress-free-load-more-link").data("load"))?$("#onepress-free-load-more-link").show():($("#onepress-free-load-more-link").hide(),$("#blog-pager .no-more").addClass("show")),$(".index-post .entry-image-link .entry-thumb").lazyify()},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide()}}),e.preventDefault()})})});