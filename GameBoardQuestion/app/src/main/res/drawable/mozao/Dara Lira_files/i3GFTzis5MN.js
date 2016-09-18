/*!CK:3637882841!*//*1434123769,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["w9Cul"]); }

__d("PhotoStoreCore",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={actions:{UPDATE:'update'},_photoCache:{},_postCreateCallbacks:{},getPhotoCache:function(h){if(!this._photoCache[h])throw new Error('Photo cache requested for unknown set ID');return this._photoCache[h];},hasBeenCreated:function(h){return !!this._photoCache[h];},clearSetCache:function(h){delete this._photoCache[h];delete this._postCreateCallbacks[h];},getByIndex:function(h,i,j){this.getPhotoCache(h).getItemAtIndex(i,j);},getByIndexImmediate:function(h,i){if(this._photoCache[h])return this._photoCache[h].getItemAtIndexImmediate(i);return (void 0);},getItemsInAvailableRange:function(h){var i=this.getAvailableRange(h),j=[];for(var k=i.offset;k<i.length;k++)j.push(this.getByIndexImmediate(h,k));return j;},getItemsAfterIndex:function(h,i,j,k){var l=this.getCursorByIndexImmediate(h,i);this.fetchForward(h,l,j,k);},getAllByIDImmediate:function(h){var i=Object.keys(this._photoCache);return i.map(function(j){return this.getByIndexImmediate(j,this.getIndexForID(j,h));}.bind(this)).filter(function(j){return !!j;});},getIndexForID:function(h,i){if(this._photoCache[h])return this._photoCache[h].getIndexForID(i);return (void 0);},getEndIndex:function(h){var i=this.getAvailableRange(h);return i.offset+i.length-1;},getCursorByIndexImmediate:function(h,i){var j=this.getByIndexImmediate(h,i);if(j)return this._photoCache[h].getCursorForID(j.id);return (void 0);},hasNextPage:function(h){var i=this.getCursorByIndexImmediate(h,this.getEndIndex(h));return this.getPhotoCache(h).hasNextPage(i);},getAvailableRange:function(h){return this.getPhotoCache(h).getAvailableRange();},hasLooped:function(h){return this.getPhotoCache(h).hasLooped();},fetchForward:function(h,i,j,k){this.getPhotoCache(h).getItemsAfterCursor(i,j,k);},fetchBackward:function(h,i,j,k){this.getPhotoCache(h).getItemsBeforeCursor(i,j,k);},executePostCreate:function(h,i){if(this._photoCache[h]){i&&i();}else this._postCreateCallbacks[h]=i;},runPostCreateCallback:function(h){var i=this._postCreateCallbacks[h];if(i){i();delete this._postCreateCallbacks[h];}},setPreFetchCallback:function(h,i){this.getPhotoCache(h).setPreFetchCallback(i);},updateData:function(h){var i=h.set_id;if(!this._photoCache[i]){this._photoCache[i]=new h.cache_class(h);this.runPostCreateCallback(i);}else if(h.query_metadata.action==g.actions.UPDATE){this._photoCache[i].updateData(h);}else this._photoCache[i].addData(h);},updateFeedbackData:function(h){var i=Object.keys(h);i.forEach(function(j){return g.getAllByIDImmediate(j).forEach(function(k){k.feedback=h[j].feedback;});});},reset:function(){Object.keys(this._photoCache).forEach(function(h){return this.clearSetCache(h);}.bind(this));}};e.exports=g;},null);
__d("PhotoStore",["Arbiter","PhotoStoreCore"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();g.subscribe('update-photos',function(i,j){h.updateData(j);});e.exports=h;},null);
__d("PhotoUtils",["Event","URI"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={getImagesFromData:function(j){var k=[];for(var l in j)if(l.indexOf('image')===0)k.push(j[l]);return k;},getFBIDFromData:function(j){return j&&j.id;},getOriginalImageFromData:function(j){return j.original||j.download_image;},getDownloadURLFromData:function(j){var k=this.getOriginalImageFromData(j);if(!k)return null;var l=new h(k.uri);l.addQueryData({dl:1});return l;},getPermalinkFromData:function(j){return j.permalink;},canViewerMakeCoverPhoto:function(j){return !!j.can_viewer_make_cover_photo;},getCoverPhotoURLFromData:function(j){return new h('/profile.php').addQueryData({preview_cover:i.getFBIDFromData(j)});},preload:function(j,k,l){var m=j.getDimensions();for(var n=0;n<k.length;++n){var o=m.getBestFitImageFromPhoto(k[n],m.getMaxStageDimensions()),p=new Image();l&&g.listen(p,'load',l.bind(null,k[n]));j.getLogger().log(o.uri);p.src=o.uri;}}};e.exports=i;},null);
__d("PhotoViewState",["ArbiterMixin","PhotoStore","PhotoUtils","SpotlightViewerLoggingEvents","copyProperties","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=l(g);for(var n in m)if(m.hasOwnProperty(n))p[n]=m[n];var o=m===null?null:m.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=m;function p(q,r,s,t,u){"use strict";this._viewer=q;this._setID=r;this._updateCallback=t;this._position=s||0;this._preloaded={};this._reverse=u;}p.prototype._fetchCallback=function(q){"use strict";if(!this._viewer.isOpen())return;this._preload(q);this._log(j.DATA_FETCH_COMPLETE);};p.prototype._preload=function(q){"use strict";i.preload(this._viewer,q,function(r){this._preloaded[i.getFBIDFromData(r)]=true;}.bind(this));};p.prototype._preloadPhotosInRange=function(q,r){"use strict";var s=[];for(var t=q;t<=r;++t){var u=h.getByIndexImmediate(this._setID,t);if(u&&!this._isPreloaded(u))s.push(u);}this._preload(s);};p.prototype._isPreloaded=function(q){"use strict";return this._preloaded[i.getFBIDFromData(q)];};p.prototype.getPosition=function(){"use strict";return this._position;};p.prototype.isValidMovement=function(q){"use strict";if(!h.hasBeenCreated(this._setID))return false;if(h.hasLooped(this._setID))return true;var r=this._position+q,s=h.getAvailableRange(this._setID),t=s.offset+s.length-1;return r>=s.offset-1&&r<=t+1;};p.prototype.getRelativeMovement=function(q){"use strict";return h.getIndexForID(this._setID,q)-this._position;};p.prototype.moveCursor=function(q){"use strict";if(!this.isValidMovement(q))return false;this._position+=q;return true;};p.prototype._page=function(q){"use strict";if(!this.moveCursor(q))return;this._log(j.PAGE_BEGIN);var r=h.getByIndexImmediate(this._setID,this._position);if(!r){this.inform('photo_fetch');this._log(j.PHOTO_FETCH);}else if(!this._isPreloaded(r))this._preload([r]);h.getByIndex(this._setID,this._position,this._updateCallback);this._loadMoreIfNecessary(q>0,p.BUFFER_SIZE);this._log(j.PAGE_COMPLETE);};p.prototype.loadMoreForwardIfNecessary=function(q){"use strict";var r=h.getAvailableRange(this._setID),s=r.offset+r.length-1,t=this._position+q;if(t>s&&!h.hasLooped(this._setID)){var u=h.getCursorByIndexImmediate(this._setID,s);h.fetchForward(this._setID,u,q,this._fetchCallback.bind(this));}else this._preloadPhotosInRange(this._position+1,t);};p.prototype.loadMoreBackwardIfNecessary=function(q){"use strict";var r=h.getAvailableRange(this._setID),s=this._position-q;if(s<r.offset&&!h.hasLooped(this._setID)){var t=h.getCursorByIndexImmediate(this._setID,r.offset);h.fetchBackward(this._setID,t,q,this._fetchCallback.bind(this));}else this._preloadPhotosInRange(s,this._position-1);};p.prototype._loadMoreIfNecessary=function(q,r){"use strict";if(q){this.loadMoreForwardIfNecessary(r);}else this.loadMoreBackwardIfNecessary(r);};p.prototype.displayFirst=function(){"use strict";if(!this._viewer.isOpen())return;h.setPreFetchCallback(this._setID,function(){this._log(j.DATA_FETCH_BEGIN);}.bind(this));var q=function(r){if(!this._isPreloaded(r))this._preload([r]);this._updateCallback(r);}.bind(this);h.getByIndex(this._setID,this._position,q);if(this._reverse){this.loadMoreBackwardIfNecessary(p.BUFFER_SIZE);}else this.loadMoreForwardIfNecessary(p.BUFFER_SIZE);};p.prototype.backward=function(){"use strict";this._page(this._reverse?1:-1);};p.prototype.forward=function(){"use strict";this._page(this._reverse?-1:1);};p.prototype._log=function(q){"use strict";this._viewer.log(q);};k(p,{BUFFER_SIZE:4});e.exports=p;},null);
__d("SpotlightViewerClose",["React","TooltipLink.react","cx","fbt","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=g,m=l.PropTypes,n=g.createClass({displayName:"SpotlightViewerClose",propTypes:{position:m.oneOf(['left','right'])},getDefaultProps:function(){return {position:'right'};},render:function(){var o=(this.props.position=='left')?"_5wx3":"_5wx4",p=g.createElement("span",null,j._({"*":"Pressione ESC para fechar","__vcg":1}));return (g.createElement(h,{className:k("_4-o9 _50-m _51an",o),onClick:this.props.onClick,tooltip:p}));}});e.exports=n;},null);
__d("SpotlightViewerImage",["React","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=g.createClass({displayName:"SpotlightViewerImage",render:function(){return (g.createElement("img",{className:"_4-od",src:this.props.src,style:{width:this.props.dimensions.x,height:this.props.dimensions.y}}));}});e.exports=i;},null);
__d("SpotlightViewerCoreMixin",["PhotoLogger","PhotoStore","PhotoUtils","PhotoViewState","React","SpotlightViewerImage","SpotlightViewerLoggingEvents"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={_displayFirstPhoto:function(){h.executePostCreate(this.props.setid,this.viewState.displayFirst.bind(this.viewState));},_getInitialPosition:function(){var o;if(!this.props.clearcache)o=h.getIndexForID(this.props.setid,this.props.photoid);if(o===(void 0)){h.clearSetCache(this.props.setid);o=0;}return o;},__displayPhoto:function(){var o=this._getInitialPosition();this.viewState=new j(this,this.props.setid,o,this._updatePhoto,this.props.reverse);this.inform('open');this._displayFirstPhoto();},componentWillMount:function(){this._logger=new g(this.getViewerID());this.log(m.OPEN_BEGIN);this.__displayPhoto();},componentDidMount:function(){this._enableSubscriptions&&this._enableSubscriptions();this.log(m.OPEN_COMPLETE);},isOpen:function(){return this.state.open;},close:function(){if(!this.isOpen())return;this.log(m.CLOSE_BEGIN);this.setState({open:false},function(){this.inform('close');this.log(m.CLOSE_COMPLETE);});},componentWillUnmount:function(){this.viewState=null;},_onClickViewport:function(o){o?this.viewState.forward():this.viewState.backward();},_getMedia:function(o,p){return (k.createElement(l,{ref:"image",src:o.uri,dimensions:p.imageDimensions}));},_getCurrentFBID:function(){return i.getFBIDFromData(this.state.photoData);},_updatePhoto:function(o){this.log(m.PHOTO_CHANGE_BEGIN);this.setState({photoData:o},function(){this.inform('photo_change',this.state.photoData);this.log(m.PHOTO_CHANGE_COMPLETE);});},getLogger:function(){return this._logger;},log:function(o){this._logger&&this._logger.logEvent(o);}};e.exports=n;},null);
__d("SpotlightViewerStageResizer",["Event","SubscriptionsHandler","Vector"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=520;function k(l,m){"use strict";this._subscriptionsHandler=new h();this._subscriptionsHandler.addSubscriptions(g.listen(window,'resize',this._resetStageDimensions.bind(this)));this._dimensions=l;this._minHeight=m.minHeight||j;this._minWidth=m.minWidth||j;this._resetStageDimensions();}k.prototype.destroy=function(){"use strict";this._dimensions=null;this._subscriptionsHandler.release();};k.prototype._resetStageDimensions=function(){"use strict";this._currentStageDimensions=new i(this._minWidth,this._minHeight);};k.prototype.getImageAndStageDimensions=function(l){"use strict";var m=this._dimensions.getBestFitDimensionsFromPhoto(l,this._dimensions.getMaxStageDimensions()),n=this._dimensions.getStageDimensions(m);this._currentStageDimensions=new i(Math.max(n.x,this._minWidth,this._currentStageDimensions.x),Math.max(n.y,this._minHeight,this._currentStageDimensions.y));var o=this._dimensions.getImageDimensionsForStage(m,this._currentStageDimensions);return {stageDimensions:this._currentStageDimensions,imageDimensions:o};};k.prototype.getCurrentStageDimensions=function(){"use strict";return this._currentStageDimensions;};e.exports=k;},null);
__d("PhotoViewerDimensions",["Event","PhotoUtils","Vector","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={verticalPadding:'number',horizontalPadding:'number',normalResDim:'object'};function l(m){"use strict";for(var n in m){if(!k[n])throw new Error("Unsupported extraData value '"+n+"' should not be used");if(typeof m[n]===k[n])this['_'+n]=m[n];}this._listener=g.listen(window,'resize',this._resetMaxStageDimensions.bind(this));}l.prototype.destroy=function(){"use strict";this._listener.remove();};l.prototype.getStageDimensions=function(m){"use strict";var n=this.getMaxStageDimensions(),o=new i(Math.min(m.x,n.x),Math.min(m.y,n.y)),p=o.x/o.y,q=m.x/m.y;if(p<q){o.y=Math.round(o.x/q);}else o.x=Math.round(o.y*q);return o;};l.prototype.getImageDimensionsForStage=function(m,n){"use strict";var o=m.x,p=m.y,q=n.x,r=n.y;if(o>=q||p>=r){var s=o/p,t=q/r;if(t<s){o=q;p=Math.round(q/s);}else if(t>s){o=Math.round(r*s);p=r;}else{o=q;p=r;}}return new i(o,p);};l.prototype.getMaxStageDimensions=function(){"use strict";if(!this._maxStageDimensions)this._maxStageDimensions=new i(i.getViewportDimensions().x-this._horizontalPadding,i.getViewportDimensions().y-this._verticalPadding);return this._maxStageDimensions;};l.prototype._resetMaxStageDimensions=function(){"use strict";this._maxStageDimensions=null;};l.prototype.getBestFitImageFromPhoto=function(m,n){"use strict";var o=null,p=h.getImagesFromData(m);p=p.sort(function(r,s){return s.width-r.width;});if(window.devicePixelRatio&&window.devicePixelRatio>1)n=new i(n.x*window.devicePixelRatio,n.y*window.devicePixelRatio);for(var q=0;q<p.length;q++)if(!o||p[q].width>=n.x||p[q].height>=n.y)o=p[q];return o;};l.prototype.getOriginalDimensionsFromPhoto=function(m){"use strict";var n=h.getOriginalImageFromData(m);return new i(n.width,n.height);};l.prototype.getBestFitDimensionsFromPhoto=function(m,n){"use strict";var o=this.getBestFitImageFromPhoto(m,n);return new i(o.width,o.height);};l.prototype.getVerticalPadding=function(){"use strict";return this._verticalPadding;};l.prototype.getHorizontalPadding=function(){"use strict";return this._horizontalPadding;};j(l.prototype,{_verticalPadding:40,_horizontalPadding:60,_normalResDim:{x:960,y:960}});e.exports=l;},null);
__d("SpotlightViewerDimensionMixin",["SpotlightViewerStageResizer","PhotoViewerDimensions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={getInitialState:function(){this._dimensions=new h({verticalPadding:this.props.verticalPadding,horizontalPadding:this.props.horizontalPadding});this._resizer=new g(this._dimensions,{minHeight:this.props.minHeight,minWidth:this.props.minWidth});return {maxStageDimensions:this._dimensions.getMaxStageDimensions()};},componentWillUnmount:function(){this._resizer&&this._resizer.destroy();this._resizer=null;this._dimensions&&this._dimensions.destroy();this._dimensions=null;},getMedia:function(){if(this.state.photoData){var j=this._resizer.getImageAndStageDimensions(this.state.photoData),k=this._dimensions.getBestFitImageFromPhoto(this.state.photoData,this.state.maxStageDimensions);return this._getMedia(k,j);}else return null;},getDimensions:function(){return this._dimensions;},getStageDimensions:function(){if(this.state.photoData){return this._resizer.getImageAndStageDimensions(this.state.photoData).stageDimensions;}else return this._dimensions.getMaxStageDimensions();},getImageDimensions:function(){if(!this.state.photoData)return null;return this._resizer.getImageAndStageDimensions(this.state.photoData).imageDimensions;},onResize:function(){this.setState({maxStageDimensions:this._dimensions.getMaxStageDimensions()});}};e.exports=i;},null);
__d("SpotlightViewport",["Locale","Parent","React","Vector","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=i,n=m.PropTypes,o=i.createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:n.object.isRequired},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},getInitialState:function(){return {currentActiveSection:this.sections.NONE,active:true};},_onMouseMove:function(event){var p=j.getEventPosition(event.nativeEvent),q=j.getElementPosition(i.findDOMNode(this)),r,s=p.x-q.x,t=s/this.props.stageDimensions.x;if(g.isRTL()){r=t>(1-this.PAGE_TO_PREV_PERCENTAGE);}else r=t<this.PAGE_TO_PREV_PERCENTAGE;if(r){this.setState({currentActiveSection:this.sections.BACKWARD});}else this.setState({currentActiveSection:this.sections.FORWARD});},_onClick:function(event){var p=this.state.currentActiveSection==this.sections.FORWARD,q=event.target;if(!h.byClass(q,"_51an"))this.props.onClick&&this.props.onClick(p);},_onMouseEnter:function(){this.setState({active:true});},_onMouseLeave:function(){this.setState({active:false});},render:function(){var p=(("_4-of")+(!this.state.active&&!this.props.active?' '+"_50-l":'')+(this.state.currentActiveSection===this.sections.BACKWARD?' '+"_516a":'')+(this.state.currentActiveSection===this.sections.FORWARD?' '+"_516b":'')+(this.props.showLoadingIndicator?' '+"_51jp":''));if(this.props.className)p=l(p,this.props.className);var q={};if(this.props.stageDimensions)q={height:this.props.stageDimensions.y,widht:this.props.stageDimensions.x};return (i.createElement("div",{className:p,style:q,onClick:this._onClick,onMouseMove:this._onMouseMove,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},this.props.children,i.createElement("div",{className:"_4-og"},i.createElement("span",{className:"_4-oh"}),this.props.media,i.createElement("div",{className:"_4-oi"}))));}});e.exports=o;},null);
__d("Spotlight",["Arbiter","ArbiterMixin","DOM","JSXDOM","Layer","LayerAutoFocus","LayerTabIsolation","ModalLayer","Vector","classWithMixins","copyProperties","csx","cx","joinClasses","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();var v=p(k,u(h));for(var w in v)if(v.hasOwnProperty(w))y[w]=v[w];var x=v===null?null:v.prototype;y.prototype=Object.create(x);y.prototype.constructor=y;y.__superConstructor__=v;function y(aa,ba){"use strict";v.call(this,aa,ba);this.stageMinSize=new o(0,0);this.stagePadding=new o(0,0);}y.prototype._buildWrapper=function(aa,ba){"use strict";var ca=t("_n8 _3qx",aa.rootClassName);return (j.div({className:ca},j.div({className:"_n9"},ba)));};y.prototype._getDefaultBehaviors=function(){"use strict";return x._getDefaultBehaviors.call(this).concat([z,l,m,n]);};y.prototype.getContentRoot=function(){"use strict";if(!this._content)this._content=i.find(this.getRoot(),"div._n3");return this._content;};y.prototype.configure=function(aa){"use strict";if(aa.stageMinSize)this.stageMinSize=aa.stageMinSize;if(aa.stagePadding)this.stagePadding=aa.stagePadding;};y.prototype.onContentLoaded=function(){"use strict";this.inform('content-load');};y.prototype.updatePermalink=function(aa){"use strict";this.inform('permalinkchange',aa);};q(y.prototype,{stageMinSize:null,stagePadding:null});function z(aa){"use strict";this._layer=aa;}z.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe(['show','hide'],function(aa,ba){if(aa==='show'){g.inform('layer_shown',{type:'Spotlight'});}else g.inform('layer_hidden',{type:'Spotlight'});});};z.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};q(z.prototype,{_subscription:null});e.exports=y;},null);