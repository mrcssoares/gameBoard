/*!CK:2942351155!*//*1430106182,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GZ99J"]); }

__d("XPubcontentChainingHideController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/chaining\/hide\/",{});},null);
__d("ArticleChainingHide",["AsyncRequest","AttachmentRelatedShareConstants","ContextualThing","CSS","DOM","DOMQuery","Event","XPubcontentChainingHideController","csx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q={listenForQuickHide:function(r,s,t,u,v){p(m.listen(r,'click',function(){var w=l.find(s,"^._1ui8"),x=l.find(w,"._3f-c"),y=l.find(w,"._3f-d");j.hide(x);setTimeout(function(){var z=i.getContext(s),aa=n.getURIBuilder(),ba=(z&&JSON.parse(z.getAttribute('data-ft')))||{};ba.object_id=t;ba.reason=v;ba.chaining_type=u;new g().setMethod('POST').setURI(aa.getURI()).setData(ba).setRelativeTo(s).send();},h.HIDE_DELAY);j.show(y);}));},listenForUndoLink:function(r,s,t,u){p(m.listen(r,'click',function(){var v=l.find(s,"^._1ui8"),w=l.find(v,"._3f-c");j.hide(s);setTimeout(function(){var x=i.getContext(s),y='/pubcontent/chaining/unhide',z=(x&&JSON.parse(x.getAttribute('data-ft')))||{};z.object_id=t;z.chaining_type=u;new g().setMethod('POST').setURI(y).setData(z).setRelativeTo(s).send();},h.HIDE_DELAY);j.show(w);}));},listenForCloseButton:function(r,s){p(m.listen(r,'click',function(){j.hide(s);}));},listenForButtons:function(r,s){p(m.listen(r,'click',function(){var u=l.find(r,"^._1ui8"),v=l.find(u,"._3f-c"),w=l.find(u,"._3f-d");j.hide(v);j.show(w);}));var t=l.find(s,"._3f-e");p(m.listen(t,'click',function(){var u=l.find(s,"^._1ui8"),v=l.find(u,"._3f-c");j.hide(s);j.show(v);}));},listenForHideConfirm:function(r,s,t){p(m.listen(r,'click',function(u){setTimeout(function(){var v=i.getContext(r),w=n.getURIBuilder(),x=(v&&JSON.parse(v.getAttribute('data-ft')))||{};x.object_id=s;x.reason=t;new g().setMethod('POST').setURI(w.getURI()).setData(x).setRelativeTo(r).send();var y=l.find(r,"^._1ui8"),z=l.find(r,"^._4-u2");k.remove(y);var aa=l.scry(z,"._1ui8");if(aa.length===0)k.remove(z);},h.HIDE_DELAY);}));},listenForUnitHideButton:function(r,s,t){p(m.listen(r,'click',function(u){setTimeout(function(){var v=n.getURIBuilder(),w={object_id:t,unit:true,reason:0};new g().setMethod('POST').setURI(v.getURI()).setData(w).send();k.remove(s);},h.HIDE_DELAY);}));}};e.exports=q;},null);