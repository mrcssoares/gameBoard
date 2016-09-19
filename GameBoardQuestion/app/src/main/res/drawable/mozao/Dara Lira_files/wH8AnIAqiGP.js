/*!CK:4068760119!*//*1431344739,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["dgmFs"]); }

__d("Barrier",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){"use strict";if(h===(void 0)||h<0||i===(void 0))return null;if(h==0){i();return;}this.ops_num=h;this.callback=i;}g.prototype.notify=function(){"use strict";if(this.ops_num<=0)return;this.ops_num--;if(this.ops_num==0)this.callback();};e.exports=g;},null);
__d("XPubcontentImpressionLoggingController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/suggestions\/impression_logging\/",{});},null);
__d("NetEgoShowcase",["Arbiter","AsyncRequest","CSS","DOM","Parent","TidyArbiterMixin","XPubcontentImpressionLoggingController","csx","mixin","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q=o(l);for(var r in q)if(q.hasOwnProperty(r))t[r]=q[r];var s=q===null?null:q.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=q;function t(u,v){"use strict";this.$NetEgoShowcase0=u;this.$NetEgoShowcase1=[];this.$NetEgoShowcase2=v.serializedData;p(this.$NetEgoShowcase0.subscribe('page_end',this.$NetEgoShowcase3.bind(this)),g.subscribe('netego_replacedUnit',this.$NetEgoShowcase4.bind(this)));this.$NetEgoShowcase5(v.firstItemId);}t.prototype.$NetEgoShowcase4=function(u,v){"use strict";var w=j.scry(this.$NetEgoShowcase0.getNode(),"li._2xr");for(var x=0;x<w.length;x++)if(!w[x].childNodes.length)this.$NetEgoShowcase0.remove(x);var y=j.scry(this.$NetEgoShowcase0.getNode(),'.ego_unit');if(!y.length){var z=k.byClass(this.$NetEgoShowcase0.getNode(),'ego_section');if(z)i.hide(z);return;}if(!v.serializedData)return;var aa=y[this.$NetEgoShowcase0.getIndex()].getAttribute('data-ego-fbid'),ba=JSON.parse(v.serializedData);for(var ca in ba)if(aa===ca){this.$NetEgoShowcase2[ca]=ba[ca];this.$NetEgoShowcase5(ca);}};t.prototype.$NetEgoShowcase3=function(u){"use strict";var v=j.scry(this.$NetEgoShowcase0.getNode(),'.ego_unit'),w=v[this.$NetEgoShowcase0.getIndex()].getAttribute('data-ego-fbid');this.$NetEgoShowcase5(w);};t.prototype.$NetEgoShowcase5=function(u){"use strict";var v=this.$NetEgoShowcase1.indexOf(u)>-1;if(!v&&this.$NetEgoShowcase2[u]){this.$NetEgoShowcase1.push(u);var w=m.getURIBuilder();new h().setMethod('POST').setURI(w.getURI()).setData({q:this.$NetEgoShowcase2[u]}).send();}};e.exports=t;},null);
__d("PubcontentSuggestionsUtil",["DOM","DOMDimensions","LitestandEllipsis","Parent","Style","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={truncateName:function(n,o){var p=g.scry(n,'.nameText')[0];if(p){var q=k.getFloat(n,'lineHeight')*o;i.add(p,q,n);var r=g.scry(n.parentNode,'.socialContext')[0];if(r){q=k.getFloat(n,'lineHeight')*o*2-h.getElementDimensions(n).height;i.add(r,q,r);}}},truncateText:function(n,o){if(n){var p=k.getFloat(n,'lineHeight')*o;i.add(n,p,n);}},truncateAllText:function(n,o){var p,q=g.scry(n,'.ego_title');for(p=0;p<q.length;p++)m.truncateName(q[p],2);var r=g.scry(n,'.descriptionText');for(p=0;p<r.length;p++)m.truncateText(r[p],3);var s=g.scry(n,'.ego_like');for(p=0;p<s.length;p++)m.cutLikeButtonText(s[p],o);},cutButtonText:function(n){var o=j.byClass(n,"_5ry0");if(o&&h.getElementDimensions(n).width>h.getElementDimensions(o).width){var p=g.scry(n,'input')[0];p.value='';}},cutLikeButtonText:function(n,o){var p=o?j.byClass(n,'ego_unit'):j.byClass(n,'likeButton');if(p&&h.getElementDimensions(n).width>h.getElementDimensions(p).width){var q=g.scry(n,'img')[0];q.parentNode.removeChild(q.nextSibling);}}};e.exports=m;},null);
__d("Showcase",["Animation","Barrier","Ease","Slideshow","Style","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=i.sineInOut;for(var n in j)if(j.hasOwnProperty(n))p[n]=j[n];var o=j===null?null:j.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=j;function p(){"use strict";if(j!==null)j.apply(this,arguments);}p.prototype._animateTo=function(q){"use strict";if(this._animating)return;var r=this._items.length,s=(q+r)%r;if(s==this._currentIndex)return;var t=new h(2,l(this._setCurrent,this,s)),u=t.notify.bind(t);this._animating=true;this.inform('page_start',s);this._conditionFade(this._items[this._currentIndex],false,u);this._conditionFade(this._items[s],true,u);};p.prototype._conditionFade=function(q,r,s){"use strict";k.set(q,'visibility','visible');new g(q).from('opacity',r?0:1).to('opacity',r?1:0).duration(this._config.animationDuration).ease(m).ondone(function(){if(!r)k.set(q,'visibility','hidden');s();}).go();};e.exports=p;},null);