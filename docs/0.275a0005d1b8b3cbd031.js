(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"CMg+":function(n,l,t){"use strict";t.d(l,"a",function(){return r});var e=t("mrSG"),o=t("xp1a"),i=t("Jc6D"),r=function(n){function l(l){var t=n.call(this)||this;return t.dialog=l,t.showHelp=!0,t._hasWallpaper=!1,t}return Object(e.c)(l,n),Object.defineProperty(l.prototype,"hasWallpaper",{get:function(){return this._hasWallpaper&&!this.mobile},set:function(n){this._hasWallpaper=n},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"hasBackgroundImage",{get:function(){return Object(o.Y)(this.backgroundImage)&&!this.hasWallpaper},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"images",{get:function(){return[Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3523.jpg",height:2880,width:1920}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3525.jpg",height:1723,width:2584}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3537.jpg",height:2880,width:1920}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3544.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3549.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3577.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3621.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3633.jpg",height:1707,width:2561}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3643.jpg",height:1280,width:1920}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3663.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3686.jpg",height:1793,width:2689}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3712.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3753.jpg",height:1851,width:2776}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3769.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3775.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3780.jpg",height:2557,width:1705}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3790.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3804.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3812.jpg",height:2880,width:1920}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3817.jpg",height:1920,width:2880}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3833.jpg",height:2880,width:1920}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3843.jpg",height:2387,width:1591}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3858.jpg",height:1819,width:2728}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3866.jpg",height:1896,width:2844}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3875.jpg",height:1880,width:2820}),Object(o.X)(o.C,{src:"assets/highlights/GrowandTell-3924.jpg",height:1920,width:2880})]},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"contentWidth",{get:function(){return this.windowWidth-this.offsetLeft},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"mobile",{get:function(){return this.windowWidth<1e3},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"offsetLeft",{get:function(){return this.mobile?0:120},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"offsetTop",{get:function(){return 64},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"sidenavHeight",{get:function(){return this.windowHeight+50+64},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"windowHeight",{get:function(){return parseInt(localStorage.getItem("WINDOW_HEIGHT"),10)-64},set:function(n){localStorage.setItem("WINDOW_HEIGHT",n.toString())},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"windowWidth",{get:function(){return parseInt(localStorage.getItem("WINDOW_WIDTH"),10)},set:function(n){localStorage.setItem("WINDOW_WIDTH",n.toString())},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){this.windowHeight=parseInt(localStorage.getItem("WINDOW_HEIGHT"),10),this.windowWidth=parseInt(localStorage.getItem("WINDOW_WIDTH"),10)},l.prototype.onLoad=function(n){this.windowHeight=n&&n.currentTarget&&n.currentTarget.innerHeight?n.currentTarget.innerHeight:0,this.windowWidth=n&&n.currentTarget&&n.currentTarget.innerWidth?n.currentTarget.innerWidth:0},l.prototype.onResize=function(n){this.windowHeight=n&&n.currentTarget&&n.currentTarget.innerHeight?n.currentTarget.innerHeight:0,this.windowWidth=n&&n.currentTarget&&n.currentTarget.innerWidth?n.currentTarget.innerWidth:0,console.log("\n\nwindow:resize",this.windowWidth,this.windowHeight)},l.prototype.help=function(){this.openDialog(i.a)},l}(o.o)},hrC7:function(n,l,t){"use strict";var e=t("CcnG"),o=t("ZYCi"),i=t("Ip0R"),r=t("Mr+X"),a=t("SMsm"),u=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),c=e.sb({encapsulation:0,styles:[[".social-icons[_ngcontent-%COMP%]{background:#8e8e8e;background:linear-gradient(to right,#8e8e8e 0,silver 44%,#dadada 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8e8e8e', endColorstr='#dadada', GradientType=1);height:64px;overflow:hidden;max-width:160px}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 6px;max-height:90%;width:30%;cursor:pointer;position:relative}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;margin-top:10px}"]],data:{}});function s(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,4,"div",[["class","social-icons"]],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,1,"a",[["href","https://www.facebook.com/grow.and.tellSLP/?pnref=lhc"],["target","_blank"]],null,null,null,null,null)),(n()(),e.ub(2,0,null,null,0,"img",[["src","assets/facebook.png"]],null,null,null,null,null)),(n()(),e.ub(3,0,null,null,1,"a",[["href","https://www.linkedin.com/in/jessica-over-9a697011b?trk=nav_responsive_tab_profile"],["target","_blank"]],null,null,null,null,null)),(n()(),e.ub(4,0,null,null,0,"img",[["src","assets/linkedin.png"]],null,null,null,null,null))],null,null)}var g=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),h=e.sb({encapsulation:0,styles:[[".sidenav[_ngcontent-%COMP%]{background:#7cfc00;background:linear-gradient(to right,#7cfc00 0,#9aff38 35%,#c2ff86 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#7cfc00', endColorstr='#c2ff86', GradientType=1);box-shadow:5px 0 5px -2px #888;-webkit-box-shadow:5px 0 5px -2px #888;flex:0 0 100px;-ms-grid-column:1;-ms-grid-column-span:1;text-align:center;position:relative;z-index:9999;padding:1rem 10px 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;width:100px;height:100%}.sidenav[_ngcontent-%COMP%]   .summer-league-logo[_ngcontent-%COMP%]{position:absolute;width:100%;top:200px;left:0;cursor:pointer}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background:#000;background:linear-gradient(to right,#000 0,#191919 45%,#323232 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#323232', GradientType=1);position:absolute;left:0;text-decoration:none;width:100px;padding:12px 10px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#8e8e8e;font-size:48px;height:48px;width:48px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{clear:both;color:#fff;width:100px;font-size:14px;padding:12px 0;display:block}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:hover{background:#8e8e8e;background:linear-gradient(to right,#8e8e8e 0,silver 44%,#dadada 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8e8e8e', endColorstr='#dadada', GradientType=1)}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#000}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%]{color:#111}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(1):hover{background:#000;background:linear-gradient(to right,#000 0,#191919 45%,#323232 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#323232', GradientType=1)}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(1){background:#8e8e8e;background:linear-gradient(to right,#8e8e8e 0,silver 44%,#dadada 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8e8e8e', endColorstr='#dadada', GradientType=1);top:60px;height:110px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(2){top:220px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(3){top:360px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(4){top:500px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(5){top:640px}.sidenav[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:120px;cursor:pointer}.sidenav[_ngcontent-%COMP%]   gt-social-icons[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%}"]],data:{}});function b(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,33,"nav",[["class","sidenav"]],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,2,"a",[["class","link"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(2,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(3,0,null,null,0,"img",[["class","logo"],["src","assets/logo.png"]],null,null,null,null,null)),(n()(),e.ub(4,0,null,null,6,"a",[["class","link"],["routerLink","/about"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(5,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(6,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(7,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["info"])),(n()(),e.ub(9,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["About Us"])),(n()(),e.ub(11,0,null,null,6,"a",[["class","link"],["routerLink","/services"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(12,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(13,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(14,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["child_caret"])),(n()(),e.ub(16,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Services"])),(n()(),e.ub(18,0,null,null,6,"a",[["class","link"],["routerLink","/contact"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,19).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(19,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(20,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(21,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["contact_support"])),(n()(),e.ub(23,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Contact Us"])),(n()(),e.ub(25,0,null,null,6,"a",[["class","link"],["routerLink","/blog"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,26).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(26,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(27,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(28,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["forum"])),(n()(),e.ub(30,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Blog"])),(n()(),e.ub(32,0,null,null,1,"gt-social-icons",[],null,null,null,s,c)),e.tb(33,114688,null,0,u,[],null,null)],function(n,l){n(l,2,0,"/"),n(l,5,0,"/about"),n(l,7,0),n(l,12,0,"/services"),n(l,14,0),n(l,19,0,"/contact"),n(l,21,0),n(l,26,0,"/blog"),n(l,28,0),n(l,33,0)},function(n,l){n(l,1,0,e.Eb(l,2).target,e.Eb(l,2).href),n(l,4,0,e.Eb(l,5).target,e.Eb(l,5).href),n(l,6,0,e.Eb(l,7).inline),n(l,11,0,e.Eb(l,12).target,e.Eb(l,12).href),n(l,13,0,e.Eb(l,14).inline),n(l,18,0,e.Eb(l,19).target,e.Eb(l,19).href),n(l,20,0,e.Eb(l,21).inline),n(l,25,0,e.Eb(l,26).target,e.Eb(l,26).href),n(l,27,0,e.Eb(l,28).inline)})}var d=t("U2kT"),p=t("xp1a"),f=t("bujt"),m=t("UodH"),C=t("dWZg"),k=t("lLAP"),x=t("wFw1"),O=t("FbN9"),w=t("8mMr"),M=function(){function n(){this.mobile=!1,this.offsetLeft=0,this.windowWidth=0}return n.prototype.ngOnInit=function(){},n}(),_=e.sb({encapsulation:0,styles:[["#header[_ngcontent-%COMP%]{background:#000;background:linear-gradient(to bottom,#000 0,#191919 55%,#323232 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#323232', GradientType=0);min-height:64px;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);top:0;z-index:2;position:absolute;left:120px}#header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#7cfc00;text-decoration:none;font-family:Poiret One,Helvetica Neue,Helvetica,Arial,cursive;float:left;font-size:24px;margin-right:20px}#header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:48px;margin:8px 20px}#header[_ngcontent-%COMP%]   .slp-lbl[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#fff;float:left;font-size:16px;margin:16px 0 20px}#header[_ngcontent-%COMP%]   .intro-lead-in[_ngcontent-%COMP%]{font-family:\"Droid Serif\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:italic;line-height:40px;margin-left:20px;float:right;font-size:15px;color:silver;position:absolute;right:280px}#header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]{height:48px;cursor:pointer}#header[_ngcontent-%COMP%]   #banner[_ngcontent-%COMP%]{padding:0 30px;color:#7cfc00;font-family:\"Poiret One\",\"Helvetica Neue\",Helvetica,Arial,cursive;font-size:22px;text-decoration:none}#header[_ngcontent-%COMP%]   gt-social-icons[_ngcontent-%COMP%]{height:100%;position:absolute;right:10px;cursor:pointer}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background:#000;background:linear-gradient(to right,#000 0,#191919 45%,#323232 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#323232', GradientType=1);position:absolute;top:2px;height:36px;text-decoration:none;width:44px;padding:12px 10px}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);color:#fff;font-size:32px;height:32px;width:32px;position:absolute;top:16px;left:16px}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#7cfc00}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-child(5){right:0}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-child(4){right:64px}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-child(3){right:128px}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-child(2){right:192px}#header[_ngcontent-%COMP%]   #header-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-child(1){right:256px}"]],data:{}});function P(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,2,"a",[["class","navbar-brand page-scroll"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(1,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(2,0,null,null,0,"img",[["class","logo"],["src","assets/logo.png"]],null,null,null,null,null))],function(n,l){n(l,1,0,"/")},function(n,l){n(l,0,0,e.Eb(l,1).target,e.Eb(l,1).href)})}function v(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,2,"a",[["class","navbar-brand page-scroll"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(1,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.Kb(-1,null,["Grow & Tell SLP, LLC"]))],function(n,l){n(l,1,0,"/")},function(n,l){n(l,0,0,e.Eb(l,1).target,e.Eb(l,1).href)})}function y(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,1,"p",[["class","slp-lbl font-effect-emboss"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Speech & Language Pathology"]))],null,null)}function T(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,34,"mat-toolbar",[["class","mat-elevation-z6 mat-toolbar"],["color","primary"],["id","header"]],[[4,"width","px"],[4,"left","px"],[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,O.b,O.a)),e.tb(1,4243456,null,1,w.a,[e.l,C.a,i.c],{color:[0,"color"]},null),e.Ib(603979776,1,{_toolbarRows:1}),(n()(),e.lb(16777216,null,0,1,null,P)),e.tb(4,16384,null,0,i.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.lb(16777216,null,0,1,null,v)),e.tb(6,16384,null,0,i.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.lb(16777216,null,0,1,null,y)),e.tb(8,16384,null,0,i.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.ub(9,0,null,0,25,"div",[["id","header-links"]],null,null,null,null,null)),(n()(),e.ub(10,0,null,null,4,"a",[["class","link"],["routerLink","/home"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,11).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(11,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(12,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(13,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["home"])),(n()(),e.ub(15,0,null,null,4,"a",[["class","link"],["routerLink","/about"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,16).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(16,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(17,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(18,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["info"])),(n()(),e.ub(20,0,null,null,4,"a",[["class","link"],["routerLink","/services"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,21).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(21,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(22,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(23,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["child_caret"])),(n()(),e.ub(25,0,null,null,4,"a",[["class","link"],["routerLink","/contact"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,26).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(26,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(27,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(28,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["contact_support"])),(n()(),e.ub(30,0,null,null,4,"a",[["class","link"],["routerLink","/blog"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,31).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.tb(31,671744,null,0,o.q,[o.o,o.a,i.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ub(32,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(33,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["forum"]))],function(n,l){var t=l.component;n(l,1,0,"primary"),n(l,4,0,t.mobile),n(l,6,0,!t.mobile),n(l,8,0,!t.mobile),n(l,11,0,"/home"),n(l,13,0),n(l,16,0,"/about"),n(l,18,0),n(l,21,0,"/services"),n(l,23,0),n(l,26,0,"/contact"),n(l,28,0),n(l,31,0,"/blog"),n(l,33,0)},function(n,l){var t=l.component;n(l,0,0,t.windowWidth,t.offsetLeft,e.Eb(l,1)._toolbarRows.length>0,0===e.Eb(l,1)._toolbarRows.length),n(l,10,0,e.Eb(l,11).target,e.Eb(l,11).href),n(l,12,0,e.Eb(l,13).inline),n(l,15,0,e.Eb(l,16).target,e.Eb(l,16).href),n(l,17,0,e.Eb(l,18).inline),n(l,20,0,e.Eb(l,21).target,e.Eb(l,21).href),n(l,22,0,e.Eb(l,23).inline),n(l,25,0,e.Eb(l,26).target,e.Eb(l,26).href),n(l,27,0,e.Eb(l,28).inline),n(l,30,0,e.Eb(l,31).target,e.Eb(l,31).href),n(l,32,0,e.Eb(l,33).inline)})}t("CMg+"),t("o3x0"),t.d(l,"a",function(){return j}),t.d(l,"b",function(){return K});var j=e.sb({encapsulation:0,styles:[["[_nghost-%COMP%]{overflow:hidden}#content[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center center;background-size:cover;background-attachment:fixed;position:absolute;top:64px;left:120px;overflow-y:auto;z-index:1}#content[_ngcontent-%COMP%]   #help[_ngcontent-%COMP%]{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);position:fixed;bottom:20px;right:20px;background:#8e8e8e;background:linear-gradient(to right,#8e8e8e 0,silver 44%,#dadada 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8e8e8e', endColorstr='#dadada', GradientType=1);height:64px;width:64px;z-index:5}#content[_ngcontent-%COMP%]   #help[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);color:#fff;font-size:72px;position:absolute;top:0;left:0}#content[_ngcontent-%COMP%]   #help[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover, #content[_ngcontent-%COMP%]   #help[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#7cfc00}#content[_ngcontent-%COMP%]   #help[_ngcontent-%COMP%]:hover{background:#000}gt-sidenav[_ngcontent-%COMP%]{position:fixed;left:0;top:-60px;z-index:2}iu-wallpaper[_ngcontent-%COMP%]{display:block}"]],data:{}});function L(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,1,"gt-sidenav",[],[[4,"height","px"]],null,null,b,h)),e.tb(1,114688,null,0,g,[],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,l.component.sidenavHeight)})}function E(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,1,"iu-wallpaper",[],null,[["window","load"],["window","resize"]],function(n,l,t){var o=!0;return"window:load"===l&&(o=!1!==e.Eb(n,1).onLoad(t)&&o),"window:resize"===l&&(o=!1!==e.Eb(n,1).onResize(t)&&o),o},d.d,d.b)),e.tb(1,114688,null,0,p.V,[e.l],{images:[0,"images"],imageOpacity:[1,"imageOpacity"],offsetTop:[2,"offsetTop"],offsetLeft:[3,"offsetLeft"],shuffle:[4,"shuffle"]},null)],function(n,l){var t=l.component;n(l,1,0,t.images,.6,64,t.offsetLeft,!0)},null)}function I(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,5,"button",[["id","help"],["mat-fab",""],["routerLink","/contact"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Eb(n,1).onClick()&&o),o},f.d,f.b)),e.tb(1,16384,null,0,o.p,[o.o,o.a,[8,null],e.G,e.l],{routerLink:[0,"routerLink"]},null),e.tb(2,180224,null,0,m.b,[e.l,C.a,k.g,[2,x.a]],null,null),(n()(),e.ub(3,0,null,0,2,"mat-icon",[["aria-label","Email Us"],["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,r.b,r.a)),e.tb(4,638976,null,0,a.a,[e.l,a.c,[8,null]],null,null),(n()(),e.Kb(-1,0,["help"]))],function(n,l){n(l,1,0,"/contact"),n(l,4,0)},function(n,l){n(l,0,0,e.Eb(l,2).disabled||null,"NoopAnimations"===e.Eb(l,2)._animationMode),n(l,3,0,e.Eb(l,4).inline)})}function K(n){return e.Mb(0,[(n()(),e.ub(0,0,null,null,1,"gt-header",[],null,null,null,T,_)),e.tb(1,114688,null,0,M,[],{mobile:[0,"mobile"],offsetLeft:[1,"offsetLeft"],windowWidth:[2,"windowWidth"]},null),(n()(),e.lb(16777216,null,null,1,null,L)),e.tb(3,16384,null,0,i.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.ub(4,0,null,null,5,"div",[["class","scrollable"],["id","content"]],[[4,"height","px"],[4,"width","px"],[4,"left","px"],[4,"background-image",null]],null,null,null,null)),e.Db(null,0),(n()(),e.lb(16777216,null,null,1,null,E)),e.tb(7,16384,null,0,i.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.lb(16777216,null,null,1,null,I)),e.tb(9,16384,null,0,i.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,t.mobile,t.offsetLeft,t.contentWidth),n(l,3,0,!t.mobile),n(l,7,0,t.hasWallpaper),n(l,9,0,t.showHelp)},function(n,l){var t=l.component;n(l,4,0,t.windowHeight,t.contentWidth,t.offsetLeft,t.hasBackgroundImage?"url("+t.backgroundImage+")":"none")})}}}]);