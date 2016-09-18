/*!CK:700498713!*//*1434123769,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["p6WBa"]); }

__d("ChatTypeaheadEvent",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={ABANDONED_QUERY:"abandoned_query",NEW_QUERY:"new_query",RESULT_SELECTED:"result_selected"};},null);
__d("ChatQuietLinks",["Event","DOM","UserAgent_DEPRECATED","DataStore","Parent"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={},m={silenceLinks:function(q){n(q,this.removeEmptyHrefs.bind(this));},nukeLinks:function(q){n(q,this.removeAllHrefs.bind(this));},removeEmptyHrefs:function(q){o(q,function(r){return !r||r==='#';});},removeAllHrefs:function(q){o(q);}};function n(q,r){var s=!!i.chrome(),t=!!i.chrome()||i.ie()>=9||i.firefox()>=4;if(l[h.getID(q)])return;l[h.getID(q)]=true;if(!t)return;if(!s){r&&r(q);return;}g.listen(q,'mouseover',function u(v){var w=k.byTag(v.getTarget(),'a');if(w){var x=w.getAttribute('href');if(p(x)){j.set(w,'stashedHref',w.getAttribute('href'));w.removeAttribute('href');}}});g.listen(q,'mouseout',function u(v){var w=k.byTag(v.getTarget(),'a'),x=w&&j.remove(w,'stashedHref');if(p(x))w.setAttribute('href',x);});g.listen(q,'mousedown',function(u){if(!u.isDefaultRequested())return true;var v=k.byTag(u.getTarget(),'a'),w=v&&j.get(v,'stashedHref');if(p(w))v.setAttribute('href',w);});}function o(q,r){var s=h.scry(q,'a');if(r)s=s.filter(function(t){return r(t.getAttribute('href'));});s.forEach(function(t){t.removeAttribute('href');t.setAttribute('tabindex',0);});}function p(q){return q&&q!=='#';}e.exports=m;},null);
__d("ChatTabActions",["ChatDispatcher","keyMirror"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=h({CLOSE_TAB:null,CLOSE_ALL_TABS:null,CLOSE_FRAGILE_TABS:null,LOWER_TAB:null,PERSIST_LOCAL_STATE:null,PROMOTE_TAB:null,RAISE_TAB:null}),j={Types:i,closeTab:function(k,l){g.dispatch({actionType:i.CLOSE_TAB,reason:l,threadID:k});},closeAllTabs:function(){g.dispatch({actionType:i.CLOSE_ALL_TABS});},closeFragileTabs:function(){g.dispatch({actionType:i.CLOSE_FRAGILE_TABS});},lowerTab:function(k){g.dispatch({actionType:i.LOWER_TAB,threadID:k});},persistLocalState:function(){g.dispatch({actionType:i.PERSIST_LOCAL_STATE});},promoteTab:function(k){g.dispatch({actionType:i.PROMOTE_TAB,threadID:k});},raiseTab:function(k,l,m){g.dispatch({actionType:i.RAISE_TAB,signatureID:m,threadID:k,userAction:l});}};e.exports=j;},null);
__d("SplitImage.react",["React","Image.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=g.createClass({displayName:"SplitImage",render:function(){var l=this.props.size;return (g.createElement("div",g.__spread({},this.props,{className:j(this.props.className,"_55lt"),style:Object.assign({},(this.props.style||{}),{width:l,height:l})}),this.renderImages()));},renderImages:function(){if(!this.props.srcs)return null;var l=this.props.srcs,m=Array.isArray(l);if(!m||l.length==1)return this.renderOne(m?l[0]:l);return l.length==2?this.renderTwo(l):this.renderThree(l);},renderOne:function(l){return (g.createElement(h,{src:l,width:this.props.size,height:this.props.size,alt:""}));},renderTwo:function(l){var m=this.props.size,n=Math.floor(m/2),o=-Math.floor(n/2),p=(("_55lu")+(this.props.border?' '+"_57xo":''));return (g.createElement("div",null,g.createElement("div",{className:"_55lu",style:{width:n}},g.createElement(h,{src:l[0],width:m,height:m,style:{marginLeft:o}})),g.createElement("div",{className:p,style:{width:n}},g.createElement(h,{src:l[1],width:m,height:m,style:{marginLeft:o}}))));},renderThree:function(l){var m=this.props.size,n=Math.floor(m/3*2),o=-Math.floor((m-n)/2),p=Math.floor(m/2),q=m-n,r=-Math.floor((p-q)/2),s=(("_55lu")+(this.props.border?' '+"_57pl":'')),t=(("_55lu")+(this.props.border?' '+"_57pm":''));return (g.createElement("div",null,g.createElement("div",{className:s,style:{width:n}},g.createElement(h,{src:l[0],width:m,height:m,style:{marginLeft:o}})),g.createElement("div",{className:t,style:{width:q,height:p}},g.createElement(h,{src:l[1],width:p,height:p,style:{marginLeft:r}})),g.createElement("div",{className:"_55lu",style:{width:q,height:p}},g.createElement(h,{src:l[2],width:p,height:p,style:{marginLeft:r}}))));}});e.exports=k;},null);
__d("WebMessengerEvents",["Arbiter","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=h(new g(),{MASTER_DOM_CHANGED:'master-dom-changed',DETAIL_DOM_CHANGED:'detail-dom-changed',FOCUS_COMPOSER:'focus-composer',FOCUS_SEARCH:'focus-search',FOCUS_AND_SELECT_SEARCH:'focus-and-select-search',STICKER_CLICKED:'sticker-clicked',SUBMIT_REPLY:'submit-reply',UPDATE_SELECTION:'update-selection',masterDOMChanged:function(){this.inform(i.MASTER_DOM_CHANGED);},detailDOMChanged:function(){this.inform(i.DETAIL_DOM_CHANGED);},focusComposer:function(){this.inform(i.FOCUS_COMPOSER);},focusSearch:function(){this.inform(i.FOCUS_SEARCH);},focusAndSelectSearch:function(){this.inform(i.FOCUS_AND_SELECT_SEARCH);},updateSelection:function(j){this.inform(i.UPDATE_SELECTION,j);},stickerClicked:function(j,k){this.inform(i.STICKER_CLICKED,{packID:j,stickerID:k});},submitReply:function(){this.inform(i.SUBMIT_REPLY);}});e.exports=i;},null);
__d("WebMessengerSubscriptionsHandler",["SubscriptionsHandler"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=new g('webmessenger');e.exports=h;},null);
__d("isWebMessengerURI",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){return (/^(\/messages)/).test(h.getPath());}e.exports=g;},null);
__d("WebMessengerWidthControl",["Arbiter","CSS","CSSClassTransition","DOM","DOMDimensions","Event","Style","URI","ViewportBounds","WebMessengerEvents","WebMessengerSubscriptionsHandler","$","cx","csx","isWebMessengerURI","requestAnimationFrame","setTimeoutAcrossTransitions","shield","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z=205,aa=981,ba=257,ca=18,da=848,ea=724,fa=.57,ga=56,ha,ia,ja;function ka(pa,qa,ra){this.masterChanged=pa;this.detailChaned=qa;q.addSubscriptions(l.listen(window,'resize',y(x(la,this,this),100)),g.subscribe(['sidebar/initialized','sidebar/show','sidebar/hide','minisidebar/show'],x(la,this,this),g.SUBSCRIBE_NEW));var sa=oa()?ga:0;if(ra)sa=z;this._width=oa()?0:da;ja=true;la(this,sa);}function la(pa,qa){var ra=o.getRight()+o.getLeft();ra=ra||qa||0;var sa=k.getViewportWithoutScrollbarDimensions().width-ra,ta=Math.round(Math.max(0,sa/2-aa/2));sa=aa+ta-ba;sa-=ca;sa=Math.max(ea,Math.min(da,sa));if(!isNaN(sa)&&pa._width!==sa){pa._width=sa;var ua=Math.round(sa/(1+fa)),va=sa-ua;pa.masterChanged(va);pa.detailChaned(ua);if(oa()){var wa=sa+ba;ma(function(){if(ia){document.body.className=ia;ia='';}na(wa+'px');h.removeClass(document.body,"_5uj5");ja&&p.detailDOMChanged();ja=false;},ia);}}}function ma(pa,qa){qa&&h.addClass(document.documentElement,"_5uj6");v(pa);qa&&w(h.removeClass.bind(null,document.documentElement,"_5uj6"),1000);}function na(pa){m.set(j.find(document,"div._uaw"),'width',pa);m.set(r('globalContainer'),'width',pa);}function oa(){if(!ha)ha=h.hasClass(document.body,"_6nw");return ha;}i.registerHandler(function(pa,qa,ra,sa){function ta(ua){return oa()&&u(new n(ua));}if(ta(sa)){ia=qa;return true;}else if(ta(ra)){ma(function(){pa.className=qa;na('');},true);return true;}});e.exports=ka;},null);
__d("Dock",["Event","shield","Arbiter","ArbiterMixin","ChatQuietLinks","CSS","DataStore","DOM","Parent","Scroll","Style","Toggler","Vector","copyProperties","csx","emptyFunction","WebMessengerWidthControl"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();b('WebMessengerWidthControl');function w(){}t(w,j,{MIN_HEIGHT:140,INITIAL_FLYOUT_HEIGHT_OFFSET:10,init:function(x){this.init=v;this.rootEl=x;this.calculateViewportDimensions();this.calculateFlyoutHeightOffset();k.removeEmptyHrefs(this.rootEl);g.listen(x,'click',this._onClick.bind(this));g.listen(window,'resize',this._onWindowResize.bind(this));r.subscribe(['show','hide'],function(y,z){var aa=z.getActive();if(!n.contains(x,aa))return;if(l.hasClass(aa,'fbNub')){this.notifyNub(aa,y);if(y==='show')this._resizeNubFlyout(aa);}else{var ba=o.byClass(aa,'fbNubFlyout');if(ba)l.conditionClass(ba,'menuOpened',y==='show');}}.bind(this));this.inform('init',{},i.BEHAVIOR_PERSISTENT);},calculateViewportDimensions:function(){return (this.viewportDimensions=s.getViewportDimensions());},calculateFlyoutHeightOffset:function(){this.flyoutHeightOffset=this.INITIAL_FLYOUT_HEIGHT_OFFSET+s.getElementDimensions(this.rootEl).y;var x=n.scry(document,"div._4f7n")[0];if(x){var y=q.isFixed(x)?'viewport':'document';this.flyoutHeightOffset+=s.getElementPosition(x,y).y+s.getElementDimensions(x).y;}},toggle:function(x){var y=this._findFlyout(x);if(!y)return;this.subscribe('init',function(){r.toggle(x);});},show:function(x){this.subscribe('init',function(){r.show(x);});},showNub:function(x){l.show(x);},hide:function(x){this.subscribe('init',function(){var y=r.getInstance(x);n.contains(x,y.getActive())&&y.hide();});},hideNub:function(x){l.hide(x);this.hide(x);},setUseMaxHeight:function(x,y){l.conditionClass(x,'maxHeight',y!==false);this._resizeNubFlyout(x);},_resizeNubFlyout:function(x){var y=this._findFlyout(x);if(!y||!(l.hasClass(x,'openToggler')||l.hasClass(x,'opened')))return;var z=n.find(y,'div.fbNubFlyoutOuter'),aa=n.find(z,'div.fbNubFlyoutInner'),ba=n.find(aa,'div.fbNubFlyoutBody'),ca=p.getTop(ba),da=ba.offsetHeight;q.set(ba,'height','auto');var ea=s.getElementDimensions(y),fa=s.getElementDimensions(ba),ga=this.getMaxFlyoutHeight(x);q.set(y,'max-height',ga+'px');q.set(z,'max-height',ga+'px');ea=s.getElementDimensions(y);var ha=s.getElementDimensions(aa),ia=ha.y-fa.y,ja=ea.y-ia,ka=parseInt(ba.style.height||ba.clientHeight,10),la=ja!==ka;if(ea.y>ia&&la)q.set(ba,'height',ja+'px');l.removeClass(y,'swapDirection');var ma=s.getElementPosition(y).x;l.conditionClass(y,'swapDirection',function(){if(ma<0)return true;return (ma+ea.x>this.viewportDimensions.x);}.bind(this)());if(la&&ca+da>=fa.y){p.setTop(ba,ba.scrollHeight);}else p.setTop(ba,ca);this.notifyNub(x,'resize');},getMaxFlyoutHeight:function(x){var y=this._findFlyout(x),z=s.getElementPosition(y,'viewport'),aa=s.getElementDimensions(y),ba=Math.max(this.MIN_HEIGHT,this.viewportDimensions.y-this.flyoutHeightOffset)-(this.viewportDimensions.y-z.y-aa.y);return Math.max(ba,0);},resizeAllFlyouts:function(){var x=this._getAllNubs(),y=x.length;while(y--)this._resizeNubFlyout(x[y]);},hideAllFlyouts:function(){var x=this._getAllNubs(),y=x.length;while(y--)this.hide(x[y]);},_getAllNubs:function(){var x=n.scry(this.rootEl,"div._50-v.openToggler");return x.concat(n.scry(this.rootEl,"div._50-v.opened"));},_onClick:function(event){var x=event.getTarget(),y=o.byClass(x,'fbNub');if(y){if(o.byClass(x,'fbNubFlyoutTitlebar')){var z=o.byTag(x,'a'),aa=x.nodeName=='INPUT'&&x.getAttribute('type')=='submit';if(!z&&!aa){this.hide(y);return false;}}this.notifyNub(y,'click');}},_onWindowResize:function(event){this.calculateViewportDimensions();this.resizeAllFlyouts();},_findFlyout:function(x){return l.hasClass(x,'fbNubFlyout')?x:n.scry(x,'div.fbNubFlyout')[0]||null;},registerNubController:function(x,y){m.set(x,'dock:nub:controller',y);y.subscribe('nub/button/content-changed',h(this.inform,this,'resize',x));y.subscribe('nub/flyout/content-changed',h(this._resizeNubFlyout,this,x));},unregisterNubController:function(x){m.remove(x,'dock:nub:controller');},notifyNub:function(x,y,z){var aa=m.get(x,'dock:nub:controller');aa&&aa.inform(y,z);}});e.exports=a.Dock||w;},null);
__d("swfobject",["AsyncRequest","Bootloader","CSS","copyProperties","htmlSpecialChars"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();if(typeof l=="undefined")var l={};if(typeof l.util=="undefined")l.util={};if(typeof l.SWFObjectUtil=="undefined")l.SWFObjectUtil={};l.SWFObject=function(n,o,p,q,r,s,t,u,v,w){if(!document.getElementById)return;this.DETECT_KEY=w?w:'detectflash';this.skipDetect=l.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];this.fallback_html='';this.fallback_js_fcn=function(){};if(n)this.setAttribute('swf',n);if(o)this.setAttribute('id',o);if(p)this.setAttribute('width',p);if(q)this.setAttribute('height',q);this.installedVer=l.SWFObjectUtil.getPlayerVersion();if(r){if(!(r instanceof Array))r=[r];var x;r.forEach(function(aa){x=new l.PlayerVersion(aa.toString().split('.'));if(x.major==this.installedVer.major){this.setAttribute('version',x);return;}else if(!this.getAttribute('version')||x.major<this.getAttribute('version').major)this.setAttribute('version',x);}.bind(this));}if(!window.opera&&document.all&&this.installedVer.major>7)if(!l.unloadSet){l.SWFObjectUtil.prepUnload=function(){var aa=function(){},ba=function(){};window.attachEvent("onunload",l.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",l.SWFObjectUtil.prepUnload);l.unloadSet=true;}if(s)this.addParam('bgcolor',s);var y=t?t:'high';this.addParam('quality',y);this.setAttribute('useExpressInstall',false);this.setAttribute('doExpressInstall',false);var z=(u)?u:window.location;this.setAttribute('xiRedirectUrl',z);this.setAttribute('redirectUrl','');if(v)this.setAttribute('redirectUrl',v);};l.SWFObject.ieWorkaroundApplied=false;l.SWFObject.ensureIEWorkaroundAttached=function(){if(!l.SWFObject.ieWorkaroundApplied&&document.attachEvent){l.SWFObject.ieWorkaroundApplied=true;document.attachEvent('onpropertychange',l.SWFObject.onDocumentPropertyChange);}};l.SWFObject.onDocumentPropertyChange=function(event){if(event.propertyName=="title"){var n=document.title;if(n!=null&&n.indexOf('#!')!=-1){n=n.substring(0,n.indexOf('#!'));document.title=n;}}};j(l.SWFObject.prototype,{useExpressInstall:function(n){this.xiSWFPath=!n?"/swf/expressinstall.swf":n;this.setAttribute('useExpressInstall',true);},setAttribute:function(n,o){this.attributes[n]=o;},getAttribute:function(n){return this.attributes[n]||"";},addParam:function(n,o){this.params[n]=o;},getParams:function(){return this.params;},addVariable:function(n,o){this.variables[n]=o;},getVariable:function(n){return this.variables[n]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var n=[],o,p=this.getVariables();for(o in p)n[n.length]=o+"="+p[o];return n.join('&');},getSWFHTML:function(){var n,o,p;if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute('swf',this.xiSWFPath);}o={type:'application/x-shockwave-flash',src:this.getAttribute('swf'),width:this.getAttribute('width'),height:this.getAttribute('height'),style:this.getAttribute('style')||'display: block;',id:this.getAttribute('id'),name:this.getAttribute('id')};var q=this.getParams();for(var r in q)o[r]=q[r];p=this.getVariablePairs();if(p)o.flashvars=p;n=m('embed',o,null);}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute('swf',this.xiSWFPath);}o={id:this.getAttribute('id'),classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',width:this.getAttribute('width'),height:this.getAttribute('height'),style:this.getAttribute('style')||'display: block;'};var s=m('param',{name:'movie',value:this.getAttribute('swf')},null),q=this.getParams();for(var r in q)s+=m('param',{name:r,value:q[r]},null);p=this.getVariablePairs();if(p)s+=m('param',{name:'flashvars',value:p},null);n=m('object',o,s);}return n;},write:function(n){if(this.getAttribute('useExpressInstall')){var o=new l.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(o)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}var p=(typeof n=='string')?document.getElementById(n):n;if(!p)return false;i.addClass(p,'swfObject');p.setAttribute('data-swfid',this.getAttribute('id'));if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){l.SWFObject.ensureIEWorkaroundAttached();p.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute('redirectUrl')!="")document.location.replace(this.getAttribute('redirectUrl'));var q=this.getAttribute('version').major+'.'+this.getAttribute('version').minor+'.'+this.getAttribute('version').release+'.'+this.getAttribute('version').build,r=this.installedVer.major+'.'+this.installedVer.minor+'.'+this.installedVer.release+'.'+this.installedVer.build;this.fallback_js_fcn(r,q);p.innerHTML=this.fallback_html;}return false;}});l.SWFObjectUtil.getPlayerVersion=function(){var n=new l.PlayerVersion([0,0,0,0]),o;if(navigator.plugins&&navigator.mimeTypes.length){for(var p=0;p<navigator.plugins.length;p++)try{var r=navigator.plugins[p];if(r.name=='Shockwave Flash'){o=new l.PlayerVersion(r.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+(r|d)|\s+b[0-9]+)/,".").split("."));if(typeof n=='undefined'||o.major>n.major||(o.major==n.major&&(o.minor>n.minor||(o.minor==n.minor&&(o.release>n.release||(o.release==n.release&&o.build>n.build))))))n=o;}}catch(q){}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var s=1,t=3;while(s)try{t++;s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+t);n=new l.PlayerVersion([t,0,0]);}catch(u){s=null;}}else{try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(v){try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");n=new l.PlayerVersion([6,0,21]);s.AllowScriptAccess="always";}catch(w){if(n.major==6)return n;}try{s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(x){}}if(s!=null)n=new l.PlayerVersion(s.GetVariable("$version").split(" ")[1].split(","));}return n;};l.PlayerVersion=function(n){this.major=n[0]!=null?parseInt(n[0],10):0;this.minor=n[1]!=null?parseInt(n[1],10):0;this.release=n[2]!=null?parseInt(n[2],10):0;this.build=n[3]!=null?parseInt(n[3],10):0;};l.PlayerVersion.prototype.versionIsValid=function(n){if(this.major<n.major)return false;if(this.major>n.major)return true;if(this.minor<n.minor)return false;if(this.minor>n.minor)return true;if(this.release<n.release)return false;if(this.release>n.release)return true;if(this.build<n.build)return false;return true;};l.util={getRequestParameter:function(n){var o=document.location.search||document.location.hash;if(n==null)return o;if(o){var p=o.substring(1).split("&");for(var q=0;q<p.length;q++)if(p[q].substring(0,p[q].indexOf("="))==n)return p[q].substring((p[q].indexOf("=")+1));}return "";}};l.SWFObjectUtil.cleanupSWFs=function(){var n=document.getElementsByTagName("OBJECT");for(var o=n.length-1;o>=0;o--){n[o].style.display='none';for(var p in n[o])if(typeof n[o][p]=='function')n[o][p]=function(){};}};if(!document.getElementById&&document.all)document.getElementById=function(n){return document.all[n];};l.spawn_flash_update_dialog=function(){new g().setURI('/ajax/flash_update_dialog.php').setMethod('GET').setReadOnly(true).send();};l.showFlashErrorDialog=function(n,o){h.loadModules(["ErrorDialog"],function(p){p.show(n,o);});};function m(n,o,p){var q=/^[A-Za-z0-9\-]+$/;if(!n.match(q))throw new Error('Invalid tag '+n);var r='<'+n;for(var s in o){if(!s.match(q))throw new Error('Invalid attr '+s);r+=' '+s+'="'+k(o[s])+'"';}if(p===null){return r+'/>';}else return r+'>'+p+'</'+n+'>';}e.exports=a.deconcept||l;},null);
__d("SoundPlayer",["Arbiter","URI","createArrayFromMixed","swfobject"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=b('swfobject').SWFObject,k={},l=null,m=false,n='so_sound_player',o='/swf/SoundPlayer.swf?v=1',p='10.0.22.87',q=null;function r(z){var aa=new h(z);if(!aa.getDomain())return new h(window.location.href).setPath(aa.getPath()).toString();return z;}function s(z){var aa=new h(z).getPath();if(/\.mp3$/.test(aa))return 'audio/mpeg';if(/\.og[ga]$/.test(aa))return 'audio/ogg';return '';}function t(){if(!q){var z=document.createElement('audio');if(!z||!z.canPlayType)return null;z.setAttribute('preload','auto');document.body.appendChild(z);q=z;}return q;}function u(){var z=document[n]||window[n];if(z)if(!z.playSound&&z.length)z=z[0];return (z&&z.playSound&&z.loopSound)?z:null;}function v(){return m;}function w(z,aa,ba){l={path:z,sync:aa,loop:ba};}function x(){m=true;if(l){var z=u();if(l.loop){z.loopSound(l.path,l.sync);}else z.playSound(l.path,l.sync);}}var y={init:function(z){z=i(z);var aa;for(var ba=0;ba<z.length;++ba){aa=z[ba];if(k[aa])return;}var ca=t();for(ba=0;ca&&ba<z.length;++ba){aa=z[ba];if(ca.canPlayType(aa)){k[aa]=true;return;}}k['audio/mpeg']=true;if(u())return;try{g.registerCallback(x,['sound/player_ready','sound/ready']);var ea=document.createElement('div');ea.id='sound_player_holder';document.body.appendChild(ea);var fa=new j(o,n,'1px','1px',[p],'#ffffff');fa.addParam('allowscriptaccess','always');fa.addParam('wmode','transparent');fa.addVariable('swf_id',n);fa.fallback_html=' ';fa.write(ea.id);window[n]=fa;g.inform('sound/player_ready');}catch(da){}},play:function(z,aa){z=i(z);var ba=t(),ca,da;for(var ea=0;ba&&ea<z.length;++ea){ca=z[ea];da=s(ca);if(!ba.canPlayType(da))continue;y.init([da]);ba.src=r(ca);if(aa){ba.setAttribute('loop','');}else ba.removeAttribute('loop');ba.play();return;}for(ea=0;ea<z.length;++ea){ca=r(z[ea]);da=s(ca);if(da!='audio/mpeg')continue;y.init([da]);var fa=u();if(!v()){w(ca,true,aa);return;}else if(fa){if(aa){fa.loopSound(ca,true);}else fa.playSound(ca,true);return;}}},stop:function(z){z=i(z);for(var aa=0;aa<z.length;++aa){var ba=r(z[aa]),ca=t(),da=u();if(ca&&ca.src==ba){ca.pause();ca.removeAttribute('src');}else da&&da.stopSound(ba);}}};e.exports=y;},null);
__d("SoundSynchronizer",["SoundPlayer","WebStorage","createArrayFromMixed"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='fb_sounds_playing3';function k(){var o=h.getLocalStorage();if(o)try{var q=o[j];if(q){q=JSON.parse(q);if(Array.isArray(q))return q;}}catch(p){}return [];}function l(o){var p=h.getLocalStorage();if(p){var q=k();q.push(o);while(q.length>5)q.shift();try{p[j]=JSON.stringify(q);}catch(r){}}}function m(o){return k().some(function(p){return p===o;});}var n={play:function(o,p,q){o=i(o);p=p||(o[0]+Math.floor(Date.now()/1000));if(m(p))return;g.play(o,q);l(p);},isSupported:function(){return !!h.getLocalStorage();}};e.exports=n;},null);
__d("SoundRPC",["Event","SoundSynchronizer"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(k,l,m){h.play(k,l,m);}var j={playLocal:i,playRemote:function(k,l,m,n){var o={paths:l,sync:m,loop:n};k.postMessage(JSON.stringify(o),'*');},supportsRPC:function(){return !!window.postMessage;},_listen:function(){g.listen(window,'message',function(k){if(!/\.facebook.com$/.test(k.origin))return;var l=JSON.parse(k.data||'{}');i(l.paths,l.sync,l.loop);});}};e.exports=j;},null);
__d("Sound",["SoundInitialData","SoundPlayer","SoundRPC","SoundSynchronizer","URI","UserAgent_DEPRECATED","isFacebookURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=null,o={init:function(s){if(!n)h.init(s);},play:function(s,t,u){if(n){i.playRemote(n.contentWindow,s,t,false);}else i.playLocal(s,t,u);},stop:function(s){if(!n)h.stop(s);}},p=new k(location.href);if(p.getSubdomain()&&p.getSubdomain()!=='www')p.setSubdomain('www');var q=p.getDomain();function r(){if(l.ie()<9)return false;if(g.RPC_DISABLED)return false;return j.isSupported()&&i.supportsRPC();}if(m(p)&&location.host!==q&&r()){n=document.createElement('iframe');n.setAttribute('src','//'+q+'/sound_iframe.php');n.style.display='none';document.body.appendChild(n);}e.exports=o;},null);
__d("FBRTCSoundController",["RTCConfig","Sound"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=[g.ringtone_mp3_url,g.ringtone_ogg_url],j={playIncomingRingtone:function(k,l,m){var n=['incoming_ringtone',k.toString(),l.toString()].join('_');h.play(i,n,m);},stopIncomingRingtone:function(){h.stop(i);}};e.exports=j;},null);
__d("P2PMercuryShareAttachmentSnippet.react",["MercuryShareAttachmentReactShape","P2PMercuryAttachmentSnippet.react","React"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=i.createClass({displayName:"P2PMercuryShareAttachmentSnippet",propTypes:{attachment:g},render:function(){var k=this.props.attachment?this.props.attachment.target:{};return (i.createElement(h,i.__spread({},k)));}});e.exports=j;},null);
__d("MercuryShareStyleMap",["Map","MercuryConfig","MercuryShareAttachmentRenderLocations","MNCommerceAttachmentUtils","StoryAttachmentStyle","cx","emptyFunction","getModuleLoader","MercuryFallbackShareAttachmentSnippet.react","P2PMercuryShareAttachmentSnippet.react","MessengerMomentsAppSnippet.react","MercuryPhotoShareSnippet.react","MercuryVideoShareSnippet.react","MercuryMessageLocationShareAttachmentSnippet.react","MercuryAnimatedShareSnippet.react"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();'use strict';var o=new g();o.set(k.FALLBACK,{componentName:'MercuryFallbackShareAttachment.react',componentLoader:n(['MercuryFallbackShareAttachment.react']),getSnippetComponent:function(){return b('MercuryFallbackShareAttachmentSnippet.react');},cx:new g([[i.MESSENGER,"_5i_d"]]),requiresNoBubbleTail:function(q,r){return q.share.media.image&&r;}});o.set(k.ORION,{componentName:'P2PMercuryShareAttachment.react',componentLoader:n(['P2PMercuryShareAttachment.react']),getSnippetComponent:function(){return b('P2PMercuryShareAttachmentSnippet.react');},cx:new g([[i.MESSENGER,"_5i_d _3djc"]])});if(h.WWWMessengerCommerceGK){o.set(k.RETAIL_RECEIPT,{componentName:'MNCommerceReceiptMercuryShareAttachment.react',componentLoader:n(['MNCommerceReceiptMercuryShareAttachment.react']),cx:new g([[i.MESSENGER,"_5i_d _205d"]]),requiresNoBubbleTail:function(q){return q.share&&q.share.target&&Object.keys(q.share.target.items).length===1;}});o.set(k.RETAIL_CANCELLATION,{componentName:'MNCommerceCancelReturnMercuryShareAttachment.react',componentLoader:n(['MNCommerceCancelReturnMercuryShareAttachment.react']),cx:new g([[i.MESSENGER,"_5i_d _205d"]])});o.set(k.RETAIL_SHIPMENT,{componentName:'MNCommerceShippingMercuryShareAttachment.react',componentLoader:n(['MNCommerceShippingMercuryShareAttachment.react']),cx:new g([[i.MESSENGER,"_5i_d _205d"]]),requiresNoBubbleTail:function(q){var r=q.share&&q.share.target&&q.share.target;return r&&j.shouldRenderMap(r.destination,r.estimated_delivery_display_time);}});o.set(k.RETAIL_SHIPMENT_TRACKING_EVENT,{componentName:'MNCommerceShippingMercuryShareAttachment.react',componentLoader:n(['MNCommerceShippingMercuryShareAttachment.react']),cx:new g([[i.MESSENGER,"_5i_d _205d"]])});}if(h.MomentsMessengerWWWGK)o.set(k.MOMENTS_APP_INVITATION,{componentName:'MessengerMomentsAppShareAttachment.react',componentLoader:n(['MessengerMomentsAppShareAttachment.react']),getSnippetComponent:function(){return b('MessengerMomentsAppSnippet.react');},cx:new g([[i.MESSENGER,"_5i_d"]]),requiresNoBubbleTail:m.thatReturnsTrue});o.set(k.PHOTO,{componentName:'MercuryPhotoShareAttachment.react',componentLoader:n(['MercuryPhotoShareAttachment.react']),getSnippetComponent:function(){return b('MercuryPhotoShareSnippet.react');},cx:null,requiresNoBubbleTail:m.thatReturnsTrue,unwrapInStory:m.thatReturnsTrue});o.set(k.IMAGE_SHARE,{componentName:'MercuryImageShareAttachment.react',componentLoader:n(['MercuryImageShareAttachment.react']),getSnippetComponent:function(){return b('MercuryPhotoShareSnippet.react');},cx:null,requiresNoBubbleTail:m.thatReturnsTrue,unwrapInStory:m.thatReturnsTrue});o.set(k.VIDEO,{componentName:'MercuryVideoShareAttachment.react',componentLoader:n(['MercuryVideoShareAttachment.react']),getSnippetComponent:function(){return b('MercuryVideoShareSnippet.react');},cx:null,requiresNoBubbleTail:m.thatReturnsTrue,unwrapInStory:m.thatReturnsTrue});o.set(k.MESSAGE_LOCATION,{componentName:'MercuryMessageLocationShareAttachment.react',componentLoader:n(['MercuryMessageLocationShareAttachment.react']),getSnippetComponent:function(){return b('MercuryMessageLocationShareAttachmentSnippet.react');},cx:new g([[i.MESSENGER,"_5i_d"]]),requiresNoBubbleTail:function(q,r){return q.share.media.image&&r;}});o.set(k.ANIMATED_IMAGE_SHARE,{componentName:'MercuryAnimatedShareAttachment.react',componentLoader:n(['MercuryAnimatedShareAttachment.react']),getSnippetComponent:function(){return b('MercuryAnimatedShareSnippet.react');},cx:null,requiresNoBubbleTail:m.thatReturnsTrue,unwrapInStory:m.thatReturnsFalse});var p={getStyleFactory:function(q){if(!q||!q.style_list)return null;if(q.style_list[0]===k.ATTACHED_STORY){var r=q.subattachments,s=(r&&r.length)?r[0].style_list:[],t=this._getStyleMapEntry(s);if(t&&t.unwrapInStory&&t.unwrapInStory())return {attachment:r[0],factory:t};}var u=this._getStyleMapEntry(q.style_list);if(!u)return null;return {attachment:q,factory:u};},_getStyleMapEntry:function(q){for(var r=0;r<q.length;r++){var s=o.get(q[r]);if(s)return s;}return null;}};e.exports=p;},null);
__d("MercuryMessageInfo",["MercuryActionStatus","MercuryViewer"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i={isOutbound:function(j){return j.author===h.getID();},isInbound:function(j){return !i.isOutbound(j);},isSending:function(j){return (j.status===g.UNSENT||j.status===g.UNCONFIRMED||j.status===g.UNABLE_TO_CONFIRM||j.status===g.RESENDING);},hasError:function(j){return (j.status===g.FAILED_UNKNOWN_REASON||j.status===g.UNABLE_TO_CONFIRM||j.status===g.ERROR);}};e.exports=i;},null);
__d("MercuryErrorInfo",["MercuryErrorType","MercuryMessageInfo","fbt"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={getMessage:function(k){var l='';if(j.isConnectionError(k)){l=i._("Esta mensagem n\u00e3o foi enviada.");if(j.isTransient(k))l=i._("{message} Verifique sua conex\u00e3o com a Internet e clique para tentar novamente.",[i.param("message",l)]);}else{if(k&&k.description){l=k.description;}else l=i._("Falha ao enviar mensagem.");if(j.isTransient(k))l=i._("{message} Clique para enviar novamente.",[i.param("message",l)]);}return l;},isConnectionError:function(k){if(k&&k.type==g.TRANSPORT)return k.code===1001||k.code===1004||k.code===1006;return false;},isTransient:function(k){return k&&k.is_transient;},isPermanent:function(k){return k?!this.isTransient(k):false;},hasErrorStatus:function(k){return h.hasError(k);}};e.exports=j;},null);
__d("MercuryThreadMetadataRawRenderer",["Event","CSS","DOM","MercuryActionStatus","MercuryErrorInfo","MercuryStatusTemplates","Tooltip","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p={renderParticipantListWithNoThreadName:function(q,r,s,t,u,v){var w={callback:true,check_length:true,show_unread_count:true};v=v||{};var x={};for(var y in v)if(w[y]){x[y]=v[y];delete v[y];}var z=s.map(function(ea){return t[ea];}),aa=this.renderRawParticipantList(q,z,s.length,v);aa=this.renderRawTitleWithUnreadCount(aa,x.show_unread_count?r.unread_count:0);var ba=v.abbr_mode,ca={};for(var da in v)ca[da]=v[da];ca.abbr_mode=true;u.forEach(function(ea){var fa=u.length>1?this._cloneIfDOMElement(aa):aa;i.setContent(ea,fa);if(x.check_length&&!ba&&ea.scrollWidth>ea.clientWidth){var ga=this.renderRawParticipantList(q,z,s.length,ca),ha=this.renderRawTitleWithUnreadCount(ga,x.show_unread_count?r.unread_count:0);i.setContent(ea,ha);}}.bind(this));x.callback&&x.callback(aa);},renderRawParticipantList:function(q,r,s,t){var u={abbr_mode:true,last_separator_uses_and:true,names_renderer:true};t=t||{};var v=null;if(t.names_renderer){v=t.names_renderer(r);}else v=r.map(function(x){return x.name;});var w=null;if(v.length===0){if(!q){w=o._("Nova mensagem");}else w=o._("Nenhum participante");}else if(v.length==1){w=v[0];}else if(v.length==2){if(t.last_separator_uses_and){w=o._("{participant1} e {participant2}",[o.param("participant1",v[0]),o.param("participant2",v[1])]);}else w=o._("{participant1}, {participant2}",[o.param("participant1",v[0]),o.param("participant2",v[1])]);}else if(t.last_separator_uses_and){if(t.abbr_mode){w=o._("{participant1} e {others_link}",[o.param("participant1",v[0]),o.param("others_link",this.renderRawParticipantCount({render_subset:true,count:s-1}))]);}else if(v.length==3){w=o._("{participant1}, {participant2} e {participant3}",[o.param("participant1",v[0]),o.param("participant2",v[1]),o.param("participant3",v[2])]);}else w=o._("{participant1}, {participant2} e {others_link}",[o.param("participant1",v[0]),o.param("participant2",v[1]),o.param("others_link",this.renderRawParticipantCount({render_subset:true,count:s-2}))]);}else if(v.length==3){w=o._("{participant1}, {participant2}, {participant3}",[o.param("participant1",v[0]),o.param("participant2",v[1]),o.param("participant3",v[2])]);}else w=o._("{participant1}, {participant2}, {participant3}, {others_link}",[o.param("participant1",v[0]),o.param("participant2",v[1]),o.param("participant3",v[2]),o.param("others_link",this.renderRawParticipantCount({render_subset:true,count:s-3}))]);if(Array.isArray(w))w=i.create('span',{},w);return w;},renderRawTitleWithUnreadCount:function(q,r){var s=q;if(r&&r>1)s=i.create('span',{},o._("''{conversation_title}'' ({unread_count})",[o.param("conversation_title",q),o.param("unread_count",r)]));return s;},renderRawParticipantCount:function(q){var r=q.render_subset,s;if(!r){s=q.count>1?o._({"*":"{num} pessoas"},[o.param("num",q.count,[0])]):o._("1 pessoa");}else s=q.count>1?o._({"*":"outras {others_count} pessoas"},[o.param("others_count",q.count,[0])]):o._("1 outro");return s;},renderShortNames:function(q){if(q.length==1)return [q[0].name];return q.map(function(r){return r.short_name;});},renderStatusIndicator:function(q,r,s){var t;if(q==j.RESENDING){t=this.renderResendIndicator();}else if(q!==(void 0)&&q!=j.UNSENT&&q!=j.UNCONFIRMED&&q!=j.SUCCESS)t=this.renderErrorIndicator(r,s);return t;},renderResendIndicator:function(){return l[':fb:mercury:resend-indicator'].render();},renderErrorIndicator:function(q,r){if(!q)return null;var s=l[':fb:mercury:error-indicator'].render(),t=q.is_transient,u=k.getMessage(q);if(t)if(k.isConnectionError(q)){u=o._("{message} Verifique sua conex\u00e3o com a Internet e clique para tentar novamente.",[o.param("message",u)]);}else u=o._("{message} Clique para enviar novamente.",[o.param("message",u)]);m.set(s,u,'above','center');if(r&&t){g.listen(s,'click',r);s.setAttribute('tabindex','0');h.addClass(s,"_55q-");}return s;},_cloneIfDOMElement:function(q){if(q&&q.cloneNode){return q.cloneNode();}else return q;}};e.exports=p;},null);