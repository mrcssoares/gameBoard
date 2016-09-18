/*!CK:2134278448!*//*1431993580,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/Okmc"]); }

__d("PlacesCitySharerX",["Arbiter","ArbiterMixin","AsyncRequest","CSS","DOM","Event","Parent","csx","cx","fbt","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r={},s=q(h);for(var t in s)if(s.hasOwnProperty(t))v[t]=s[t];var u=s===null?null:s.prototype;v.prototype=Object.create(u);v.prototype.constructor=v;v.__superConstructor__=s;function v(w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja){"use strict";this._root=w;this.setShareSetting(fa);this.init(x,y,z,aa,ba,ga,ia,ja);if(da)this.setDefaultCity(ca,da,ea);if(this._shareDefaultCity)this.useDefaultCity();if(ha)this.toggleSelect();}v.prototype.init=function(w,x,y,z,aa,ba,ca,da){"use strict";this._cityLink=w;this._closeButton=x;this._input=y;this._disableShareInput=z;this._options=aa;this._targetId=ba||0;this._cityName=k.find(this._cityLink,"._y8");this._data={};this._resetTempInfo();l.listen(this._closeButton,'click',function(){this._resetTempInfo();this._defaultCityData={};this.clearCity();this._disableShareInput.value='true';}.bind(this));r[this._root]=this;this.inform('init',null,g.BEHAVIOR_PERSISTENT);this._implicitLocationConfig=ca;this._checkinBranding=da;};v.prototype.toggleSelect=function(){"use strict";this._placeSelected=true;j.addClass(this._cityLink,"_1dsf");j.hide(this._closeButton);};v.prototype.addPlace=function(w){"use strict";this.toggleSelect();this._resetTempInfo();};v.prototype.changeCity=function(w,x,y){"use strict";this.setCity(w,x,y);this.toggleLocationSharing(w,x,y,false);};v.prototype.clearCity=function(){"use strict";this._data={};this._input.value='';k.empty(this._cityName);var w=this._checkinBranding?p._("Fazer check-in"):p._("Adicionar uma localiza\u00e7\u00e3o \u00e0 publica\u00e7\u00e3o");this._cityLink.setAttribute('aria-label',w);j.removeClass(this._root,"_y7");j.hide(this._closeButton);j.removeClass(this._cityLink,"_1dsf");this.inform('change',null,g.BEHAVIOR_PERSISTENT);};v.prototype.clearPlace=function(){"use strict";this._placeSelected=false;j.removeClass(this._cityLink,"_1dsf");j.conditionShow(this._closeButton,this.getValue());if(typeof this._implicitLocationConfig==='boolean'){if(this._implicitLocationConfig){this.clearCity();}else this.setDefaultCity(this._data.city_name,this._data.city_page_id,this._data.city_id);}else if(this._implicitLocationConfig.enable_implicit_location){this.setDefaultCity(this._data.city_name,this._data.city_page_id,this._data.city_id);}else this.clearCity();};v.prototype.getIcon=function(){"use strict";return this._root;};v.prototype.getValue=function(){"use strict";return this._input.value;};v.prototype.restoreCityInfo=function(){"use strict";if(this._placeSelected||this._shareDefaultCity){this.changeCity(this._tempCityName,this._tempCityPid,this._tempCityId);this._resetTempInfo();}};v.prototype.saveCityInfo=function(){"use strict";if(this._defaultCityData){this._tempCityName=this._defaultCityData.city_name;this._tempCityPid=this._defaultCityData.city_page_id;this._tempCityId=this._defaultCityData.city_id;}};v.prototype.setCity=function(w,x,y){"use strict";if(x){this.setCityData(w,x,y);this._input.value=x;this.inform('change',this._data,g.BEHAVIOR_PERSISTENT);}};v.prototype.setCityData=function(w,x,y){"use strict";if(x){this._data={city_name:w,city_page_id:x,city_id:y};var z=w.lastIndexOf(',');if(z!=-1)w=w.substring(0,z);var aa;if(w){aa=this._checkinBranding?p._("Currently in {city-name}. Check in",[p.param("city-name",w)]):p._("Currently in {city-name}. Add a location to post",[p.param("city-name",w)]);}else aa=this._checkinBranding?p._("Fazer check-in"):p._("Adicionar uma localiza\u00e7\u00e3o \u00e0 publica\u00e7\u00e3o");k.setContent(this._cityName,w);this._cityLink.setAttribute('aria-label',aa);j.addClass(this._root,"_y7");j.conditionShow(this._closeButton,!this._placeSelected);}};v.prototype.setDefaultCity=function(w,x,y){"use strict";this._defaultCityData={city_id:y,city_page_id:x,city_name:w};};v.prototype.setSessionID=function(w){"use strict";this._options.session_id=w;};v.prototype.setShareSetting=function(w){"use strict";this._shareDefaultCity=w;};v.prototype.toggleLocationSharing=function(w,x,y,z){"use strict";if(x)new i().setURI('/ajax/places/toggle_location_sharing').setData({city_id:y,city_page_id:x,city_name:w,is_default:z,session_id:this._options.session_id}).send();};v.prototype.useDefaultCity=function(){"use strict";if(this._defaultCityData){this.setCity(this._defaultCityData.city_name,this._defaultCityData.city_page_id,this._defaultCityData.city_id);j.show(this._closeButton);this.toggleLocationSharing(this._defaultCityData.city_name,this._defaultCityData.city_page_id,this._defaultCityData.city_id,true);}};v.prototype._resetTempInfo=function(){"use strict";this._tempCityName=null;this._tempCityPid=null;this._tempCityId=null;};v.getInstance=function(w){"use strict";var x=m.byClass(w,'ComposerCitySharer');return x&&r[x];};v.prototype.getTargetID=function(){"use strict";return this._targetId;};e.exports=v;},null);
__d("ComposerXCitySharerReset",["AsyncRequest"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(j){var k=j.instance.getTargetID();if(k!==0&&j.instance.getValue()!=="")k=0;j.instance.clearCity();new g().setURI('/ajax/places/city_sharer_reset.php').setData({target_id:k}).setHandler(function(l){i(j,l.getPayload());}).send();}function i(j,k){j.instance.setShareSetting(k.sharedefault);j.instance.setSessionID((new Date()).valueOf().toString().substr(0,10));if(k.citypageid)j.instance.setDefaultCity(k.citystring,k.citypageid,k.cityid);if(k.sharedefault)j.instance.useDefaultCity();}e.exports=h;},null);
__d("BasePrivacyWidget",["Arbiter","ArbiterMixin","DOM","Form","PrivacyConst","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=k.BaseValue;function n(){}l(n.prototype,h,{init:function(o,p,q,r){this._controllerId=p;this._root=o;this._options=l(r||{},q||{});this._formDataKey='privacy_data';},getData:function(){return this._model.getData();},_getPrivacyData:function(o){o=o||this._fbid;var p={};p[o]=this.getData();return p;},getRoot:function(){return this._root;},_initMenu:function(o){this._menu=o;this._menu.subscribe('itemclick',this._onMenuSelect.bind(this));},_isCustomSetting:function(o){return (o==m.CUSTOM);},_isEveryoneSetting:function(o){return (o==m.EVERYONE);},_updateSelector:function(o){var p=this._model.value;if(!this._isCustomSetting(p)){this._onPrivacyChanged();return;}},_onPrivacyChanged:function(){this._saveFormData();g.inform('Form/change',{node:this.getRoot()});this.inform('privacyChanged',this.getData());g.inform('UIPrivacyWidget/globalPrivacyChanged',{fbid:this._fbid,data:this.getData()});},_saveFormData:function(){var o=i.find(this.getRoot(),'div.UIPrivacyWidget_Form');i.empty(o);var p={};if(this._options.useLegacyFormData){p[this._formDataKey]=this.getData();}else p[this._formDataKey]=this._getPrivacyData();j.createHiddenInputs(p,o);}});e.exports=n;},null);
__d("TargetedPrivacyModel",["PrivacyConst","TargetedPrivacyConsts","copyProperties"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.BaseValue;function k(){this.value=j.EVERYONE;this.countries=[];this.countries_names=[];this.location_type=h.LOC_ALL;this.location_ids=[];this.location_ids_names=[];this.locales=[];this.locales_names=[];this.gender=h.GENDER_BOTH;this.age_min=0;this.age_max=0;return this;}i(k.prototype,{init:function(l,m,n,o,p,q,r,s,t,u,v,w,x){this.value=l;this.countries=m.slice();this.countries_names=n.slice();this.location_type=o;this.location_ids=p.slice();this.location_ids_names=q.slice();this.age_min=r;this.age_max=s;this.gender=t;this.locales=u.slice();this.locales_names=v.slice();this.see_regions=x;this.see_cities=w;},getData:function(){var l={};if(this.value==j.EVERYONE)return l;var m=['countries','location_type','location_ids','age_min','age_max','gender','locales'];for(var n=0;n<m.length;++n){var o=m[n];l[o]=this[o];}return l;}});e.exports=k;},null);
__d("UITargetedPrivacyWidget",["ArbiterMixin","AsyncRequest","BasePrivacyWidget","BootloadedComponent.react","Bootloader","Dialog","DOM","MenuSelectableItem","PrivacyConst","React","TargetedPrivacyConsts","TargetedPrivacyModel","Tooltip","$","classWithMixins","copyProperties","fbt","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){b.__markCompiled&&b.__markCompiled();var y=u(i,x(g));for(var z in y)if(y.hasOwnProperty(z))ba[z]=y[z];var aa=y===null?null:y.prototype;ba.prototype=Object.create(aa);ba.prototype.constructor=ba;ba.__superConstructor__=y;function ba(ca,da,ea,fa,ga,ha,ia){"use strict";var ja={useLegacyFormData:true};aa.init.call(this,da,ea,ja,ia);this._profileId=fa;this._model=new r();this._formDataKey='targeted_privacy_data';this._button=ga;this._everyoneItem=this._retrieveEveryoneItem(ca);this._customItem=this._retrieveCustomItem(ca);this._defaultTooltip=ha;ba.instances[this._controllerId]=this;this._initMenu(ca);this._saveFormData();}ba.prototype._onMenuSelect=function(ca,da){"use strict";var ea=da.item;if(!ea instanceof n)return;var fa=ea.getValue();if(fa==o.BaseValue.EVERYONE)this._model=new r();this._saveFormData();this._updateSelector();this._updateTooltipForButtonFromItem(ea);if(this._isCustomSetting(fa))this._showDialog();};ba.prototype._updateTooltipForButtonFromItem=function(ca){"use strict";var da=ca.getValue();if(this._isCustomSetting(da)){s.set(this._button,w._("Personalizado"));}else s.set(this._button,this._defaultTooltip);};ba.prototype.reset=function(){"use strict";this._model=new r();this._updateSelector();this._saveFormData();return this;};ba.prototype.setProfileID=function(ca){"use strict";this._profileId=ca;};ba.prototype._showDialog=function(){"use strict";var ca={controller_id:this._controllerId,profile_id:this._profileId};if(this._options.useAdvancedGating){this._showAdvancedGatingDialog();}else this._dialog=new l().setAsync(new h().setURI(ba.DIALOG_URI).setData(ca)).setModal(true).show();};ba.prototype._showAdvancedGatingDialog=function(){"use strict";this._renderAdvancedGatingDialog(true);};ba.prototype._hideAdvancedGatingDialog=function(){"use strict";this._renderAdvancedGatingDialog(false);};ba.prototype._renderAdvancedGatingDialog=function(ca){"use strict";var da=this._advancedGatingAnchor;if(!da){this._advancedGatingAnchor=da=m.create('span');m.appendContent(t(this._controllerId),da);}p.render(p.createElement(j,{bootloadPlaceholder:p.createElement("span",null),bootloadComponent:function(ea){k.loadModules(["PagePostAdvancedGatingDialog.react"],ea);},shown:ca,locations:{countries:this._model.countries},onCancel:this._hideAdvancedGatingDialog.bind(this),onSave:this._onAdvancedGatingSave.bind(this)}),da);};ba.prototype._onAdvancedGatingSave=function(ca){"use strict";var da=false;if(ca.countries.length>0)da=true;if(da){this._model.init(o.BaseValue.CUSTOM,ca.countries,[],q.LOC_ALL,[],[],0,0,q.GENDER_BOTH,[],[]);}else this.reset();this._onPrivacyChanged();this._hideAdvancedGatingDialog();};ba.prototype._updateSelector=function(ca){"use strict";aa._updateSelector.call(this);if(ca&&!this._isCustomSetting(this._model.value)){this._everyoneItem.select();this._customItem.deselect();this._updateTooltipForButtonFromItem(this._everyoneItem);this._menu.inform('change',this._menu.getSelection());}};ba.prototype._retrieveEveryoneItem=function(ca){"use strict";return this._retrieveTargetItem(ca,this._isEveryoneSetting);};ba.prototype._retrieveCustomItem=function(ca){"use strict";return this._retrieveTargetItem(ca,this._isCustomSetting);};ba.prototype._retrieveTargetItem=function(ca,da){"use strict";return ca._items.find(function(ea){return (ea instanceof n&&da(ea.getValue()));});};ba.getInstance=function(ca){"use strict";return this.instances[ca];};v(ba,{DIALOG_URI:'/ajax/privacy/targeted_privacy_widget_dialog.php',instances:{}});e.exports=ba;},null);