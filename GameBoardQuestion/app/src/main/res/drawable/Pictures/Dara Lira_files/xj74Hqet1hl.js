/*!CK:921399705!*//*1434123773,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fOp1t"]); }

__d("MessageThreadViewSource",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={UNSPECIFIED:"unspecified",LEGACY:"legacy",LEGACY_MESSAGES_PREVIEW:"legacy_messages_preview",REFRESH_SPRINGBOARD:"springboard",REFRESH_MESSAGETAB:"message_tab",REFRESH_PERMALINK:"permalink",REFRESH_HIGHLANDER_JEWEL:"highlander_jewel",REFRESH_SEARCH_TYPEAHEAD:"search_typeahead",MTOUCH_MESSAGE_TAB:"mtouch_message_tab",MBASIC_MESSAGE_TAB:"mbasic_message_tab"};},null);
__d("PagesMessengerThreadDialogLink.react",["AsyncDialog","AsyncRequest","Link.react","MessageThreadViewSource","PagesMessagingConst","ReactComponentWithPureRenderMixin","React","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();'use strict';var o=m,p=o.PropTypes,q=m.createClass({displayName:"PagesMessengerThreadDialogLink",mixins:[l],propTypes:{threadID:p.string.isRequired,viewer:p.string.isRequired,folder:p.string},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(r){if(r.threadID!==this.props.threadID||r.folder!==this.props.folder)this._getPermalinkURI(r);},render:function(){return (m.createElement(i,{className:this.props.className,href:"#",onClick:this._handleClick,role:"button"},this.props.children));},_handleClick:function(r){r.preventDefault();g.send(new h(this.state.permalinkURI).setRelativeTo(r.target));},_getPermalinkURI:function(r){this.setState(this.getInitialState());var s=r.threadID,t=r.viewer,u=r.folder;d(['MercuryThreadIDMap'],function(v){var w=v.getForFBID(t);w.getFBIDFromClientID(s,function(x){this.isMounted()&&this.setState({permalinkURI:new n(k.LOAD_MESSAGE_THREAD_URI).setQueryData({pageid:t,threadid:s,threadElementID:x,folder:u,source:j.REFRESH_HIGHLANDER_JEWEL}).toString()});}.bind(this));}.bind(this));}});e.exports=q;},null);
__d("MercuryJewelCountControl",["Arbiter","MercuryServerRequests","MercuryThreadInformer","MercuryUnseenState","UserActivity"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m){"use strict";var n=h.get(),o=i.get();this.$MercuryJewelCountControl2=j.get();this.render();n.subscribe('model-update-completed',function(p,q){this.$MercuryJewelCountControl4(false);}.bind(this));o.subscribe('unseen-updated',function(){return this.render();}.bind(this));this.$MercuryJewelCountControl5=m;this.$MercuryJewelCountControl5.subscribe('marked-seen',function(){this.$MercuryJewelCountControl4(true);}.bind(this));}l.prototype.render=function(){"use strict";g.inform('jewel/count-updated',{jewel:'mercurymessages',count:this.$MercuryJewelCountControl2.getUnseenCount()},g.BEHAVIOR_STATE);};l.prototype.$MercuryJewelCountControl4=function(m){"use strict";if(m||(this.$MercuryJewelCountControl5.isOpen()&&k.isActive()))this.$MercuryJewelCountControl2.markAsSeen();};l.constructStores=function(){"use strict";j.get();};e.exports=l;},null);
__d("P2PJewelBanner.react",["Image.react","Layout.react","Link.react","React","XUIGrayText.react","cx","emptyFunction","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();'use strict';var o=h.FillColumn,p=h.Column,q=j,r=q.PropTypes,s=j.createClass({displayName:"P2PJewelBanner",propTypes:{actionURI:r.oneOfType([r.string,r.object]).isRequired,actionText:r.string.isRequired,bodyText:r.oneOfType([r.string,r.object]).isRequired,icon:r.oneOf(['warning','coin']),onClick:r.func.isRequired,titleText:r.string.isRequired},getDefaultProps:function(){return {actionURI:'#',onClick:m};},getImagePath:function(){var t=this.props.icon;if(t==="warning"){return n("/images/p2p/receiver-risk-notification.png");}else return n("/images/p2p/receiver-nux-notification.png");},render:function(){return (j.createElement("div",{className:"_5d0n",onClick:this.props.onClick},j.createElement(h,null,j.createElement(p,{className:"_5d0o"},j.createElement(g,{className:"_5d0q",height:28,src:this.getImagePath(),width:28})),j.createElement(o,{className:"_2pic"},j.createElement(k,{display:"block",shade:"medium",weight:"bold"},this.props.titleText),j.createElement(k,{display:"block",shade:"medium"},this.props.bodyText),j.createElement(i,{className:"_5d0t",href:this.props.actionURI,target:"_blank"},this.props.actionText)))));}});e.exports=s;},null);
__d("P2PPendingPushFailJewelBanner.react",["P2PJewelBanner.react","P2PTransferParam","XP2PTransactionDetailController","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=j,m=l.PropTypes,n=j.createClass({displayName:"P2PPendingPushFailJewelBanner",propTypes:{transfer:m.object.isRequired},getActionText:function(){return k._("Atualizar cart\u00e3o");},render:function(){var o=this.props.transfer;return (j.createElement(g,{actionText:k._("Atualizar cart\u00e3o"),bodyText:k._("Parece que seu cart\u00e3o expirou ou \u00e9 inv\u00e1lido. Atualize-o para receber {currency} {amount} de {sender_name}.",[k.param("currency",o.currency),k.param("amount",o.amount),k.param("sender_name",o.sender.name)]),icon:"warning",actionURI:(i.getURIBuilder()).setString('id',o[h.TRANSFER_ID]).getURI(),titleText:k._("Atualize seu cart\u00e3o")}));}});e.exports=n;},null);
__d("P2PTimeBasedAcceptMessage.react",["React","fbt"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=g,j=i.PropTypes,k=g.createClass({displayName:"P2PTimeBasedAcceptMessage",propTypes:{transfer:j.object.isRequired},render:function(){var l=this.props.transfer,m=l.creationTime*1000,n=(1000*60*60*24),o=Date.now(),p=(o-m)/n,q=Math.max(14-Math.floor(p),1),r;if(p<=5){r=h._("Adicione um cart\u00e3o de d\u00e9bito e a transfer\u00eancia ser\u00e1 efetuada diretamente para a sua conta corrente.");}else if(p<=11){r=h._("Esta transfer\u00eancia ser\u00e1 estornada em {days left} dias. Adicione um cart\u00e3o de d\u00e9bito para aceit\u00e1-la.",[h.param("days left",q)]);}else r=h._({"day":"Voc\u00ea tem {days left} dia para adicionar um cart\u00e3o de d\u00e9bito antes de a transfer\u00eancia ser estornada para {sender_name}.","days":"Voc\u00ea tem {days left} dias para adicionar um cart\u00e3o de d\u00e9bito antes de a transfer\u00eancia ser estornada para {sender_name}."},[h.param("days left",q),h['enum'](q===1?'day':'days',{day:"day",days:"days"}),h.param("sender_name",l.sender.name)]);return g.createElement("div",null,r);}});e.exports=k;},null);
__d("P2PPendingRecipientNUXJewelBanner.react",["P2PAcceptMoneyDialog.react","P2PActions","P2PCreditCardStore","P2PJewelBanner.react","P2PTimeBasedAcceptMessage.react","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=l,o=n.PropTypes,p=l.createClass({displayName:"P2PPendingRecipientNUXJewelBanner",propTypes:{transfer:o.object.isRequired},getInitialState:function(){return {creditCards:i.getAll()};},creditCardStoreSub:(null),componentDidMount:function(){this.creditCardStoreSub=i.addListener('change',this.onCreditCardStoreChange);},componentWillUnmount:function(){if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null;}},onCreditCardStoreChange:function(){var q={creditCards:i.getAll()};if(this.isMounted())this.setState(q);},handleClick:function(){this.showAcceptMoneyDialog();},showAcceptMoneyDialog:function(){h.showDialog(g,{creditCards:this.state.creditCards,onClose:h.hideDialog,transfer:this.props.transfer});},renderTimeBasedMessage:function(){return (l.createElement(k,{transfer:this.props.transfer}));},render:function(){var q=this.props.transfer;if(!i.isCreditCardsFetchComplete())return null;return (l.createElement(j,{actionText:m._("Adicionar cart\u00e3o de d\u00e9bito"),bodyText:this.renderTimeBasedMessage(),icon:"coin",onClick:this.handleClick,titleText:m._("Aceitar {currency} {amount} de {sender_name}.",[m.param("currency",q.currency),m.param("amount",q.amount),m.param("sender_name",q.sender.name)])}));}});e.exports=p;},null);
__d("P2PPendingRecipientVerificationJewelBanner.react",["P2PJewelBanner.react","P2PTransferParam","P2PVerificationFlowHelper","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=j,m=l.PropTypes,n=j.createClass({displayName:"P2PPendingRecipientVerificationJewelBanner",propTypes:{transfer:m.object.isRequired},handleClick:function(){i.startVerificationFlow(this.props.transfer[h.TRANSFER_ID],false);},render:function(){return (j.createElement(g,{actionText:k._("Confirmar informa\u00e7\u00f5es"),bodyText:k._("Para aceitar a transfer\u00eancia efetuada por {sender_name}, confirme suas informa\u00e7\u00f5es.",[k.param("sender_name",this.props.transfer.sender.name)]),icon:"warning",onClick:this.handleClick,titleText:k._("Confirme seus dados")}));}});e.exports=n;},null);
__d("P2PJewelBannerContainer.react",["CurrentUser","P2PPendingPushFailJewelBanner.react","P2PPendingRecipientNUXJewelBanner.react","P2PPendingRecipientVerificationJewelBanner.react","P2PTransferParam","P2PTransferStatus","P2PTransferStore","React","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();'use strict';var p=n.createClass({displayName:"P2PJewelBannerContainer",getInitialState:function(){return {dialogComponent:null,transfer:m.getNUXTransfer()};},transferStoreSub:(null),componentDidMount:function(){this.transferStoreSub=m.addListener('change',this.onTransferStoreChange);},componentWillUnmount:function(){if(this.transferStoreSub){this.transferStoreSub.remove();this.transferStoreSub=null;}},onTransferStoreChange:function(){this.setState({transfer:m.getNUXTransfer()});},renderTransferBanner:function(){var q=this.state.transfer,r=q[k.STATUS];switch(r){case l.PENDING_RECIPIENT_NUX:return (n.createElement(i,{transfer:q}));case l.PENDING_RECIPIENT_VERIFICATION:return (n.createElement(j,{transfer:q}));case l.PENDING_PUSH_FAIL:return (n.createElement(h,{transfer:q}));}},render:function(){var q=this.state.transfer,r;if(q&&q.receiver.id==g.getID())r=this.renderTransferBanner();return (n.createElement("div",{className:"_1xfk"},r));}});e.exports=p;},null);
__d("MercuryThreadlistContainer.react",["Bootloader","immutable","MercuryAPIArgsSource","MercuryThreadlistConstants","P2PJewelBannerContainer.react","React","SubscriptionsHandler"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=l,o=n.PropTypes,p='search',q=l.createClass({displayName:"MercuryThreadlistContainer",propTypes:{ChildClass:o.func.isRequired,folder:o.string.isRequired,showCount:o.bool,showPresence:o.bool,threadCount:o.number,viewer:o.string.isRequired},getInitialState:function(){return {isLoading:true,isSearching:false,threads:h.Map()};},componentDidMount:function(){g.loadModules(["MercuryOrderedThreadlist","MercuryThreadInformer","MercuryThreads"],function(r,s,t){this._threadlist=r.getForFBID(this.props.viewer);this._threads=t.getForFBID(this.props.viewer);this._informer=s.getForFBID(this.props.viewer);this._subscriptions=new m();this._subscriptions.addSubscriptions(this._informer.subscribe('threadlist-updated',function(u,v){this._updateThreads(this.props.folder);}.bind(this)));this._handleFolderChange(this.props.folder);}.bind(this));},componentWillReceiveProps:function(r){if(r.folder!==this.props.folder)this._handleFolderChange(r.folder);},componentWillUnmount:function(){this._cancelThreadsCallback();this._cancelThreadlistCallback();this._subscriptions&&this._subscriptions.release();},render:function(){var r=this.props,s=r.ChildClass,t=r.folder,u=(function(w,x){var y={},z=Object.prototype.hasOwnProperty;if(w==null)throw new TypeError();for(var aa in w)if(z.call(w,aa)&&!z.call(x,aa))y[aa]=w[aa];return y;})(r,{ChildClass:1,folder:1}),v=this.state.isSearching?this.state.threads.get(p)||[]:this.state.threads.get(t)||[];return (l.createElement(s,l.__spread({},u,{isLoaded:!!this._threadlist&&this._threadlist.hasLoadedThreadlist(t),isLoading:this.state.isLoading,isSearching:this.state.isSearching,onLoadMoreRequest:this._loadMoreThreads,onQuery:this._handleQuery,onSearchResults:this._handleSearchResults,p2pJewelBannerContainer:this._renderP2PJewelBannerContainer(),threads:v})));},_renderP2PJewelBannerContainer:function(){return (l.createElement(k,null));},_handleFolderChange:function(r){if(!this._hasInitialThreads(r)){this._loadThreads(r,this.props.threadCount||(j.JEWEL_THREAD_COUNT+1));}else if(this.state.isLoading){this.setState({isLoading:false},function(){this._updateThreads(r);}.bind(this));}else this._updateThreads(r);},_loadMoreThreads:function(){if(!this.state.isSearching&&!this.state.isLoading&&!this._threadlist.hasLoadedThreadlist(this.props.folder))this._loadThreads(this.props.folder,this._getThreadCount(this.props.folder)+j.JEWEL_MORE_COUNT+1);},_loadThreads:function(r,s){if(!this._threadlist)return;this._cancelThreadlistCallback();this.setState({isLoading:true},function(){var t=this._threadlist.getThreadlist(j.RECENT_THREAD_OFFSET,s,r,function(u){return this.setState({isLoading:false});}.bind(this),true,i.JEWEL);this._threadlistSub={subscriberID:t,folder:r};}.bind(this));},_updateThreads:function(r,s){if(!this._threadlist||!this._threads)return;this._cancelThreadsCallback();var t=s||this._threadlist.getAvailableThreadlistNow(r);this._threadsSub=this._threads.getMultiThreadMeta(t,function(u){this.setState({threads:this.state.threads.set(r,t.map(function(v){return u[v];}))});}.bind(this));},_hasInitialThreads:function(r){return !!(this._threadlist&&(this._threadlist.getThreadCount(r)>=j.JEWEL_THREAD_COUNT+1||this._threadlist.hasLoadedThreadlist(r)));},_getThreadCount:function(r){var s=this.state.threads.get(r);return s?s.length:0;},_cancelThreadsCallback:function(){this._threads&&this._threadsSub&&this._threads.unsubscribe(this._threadsSub);},_cancelThreadlistCallback:function(){this._threadlist&&this._threadlistSub&&this._threadlist.unsubscribe(this._threadlistSub.subscriberID,this._threadlistSub.folder);},_handleSearchResults:function(r,s){this.setState({isLoading:s,searchThreads:[]},function(){return this._updateThreads(p,r);}.bind(this));},_handleQuery:function(r){this.setState({isSearching:!!r});}});e.exports=q;},null);
__d("MercuryThreadlistRowContainer.react",["immutable","ImmutableObject","MercuryParticipants","React","StoreAndPropBasedStateMixin","shallowEqual"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=j,n=m.PropTypes,o=j.createClass({displayName:"MercuryThreadlistRowContainer",mixins:[k(i)],propTypes:{ChildClass:n.func.isRequired,thread:n.instanceOf(h).isRequired,viewer:n.string.isRequired},statics:{calculateState:function(p){return {participants:g.Map(g.Seq(p.thread.participants).map(function(q){return [q,i.getOrFetch(q)];}))};}},shouldComponentUpdate:function(p,q){return (!l(p,this.props)||!g.is(q.participants,this.state.participants));},render:function(){var p=this.props,q=p.ChildClass,r=(function(s,t){var u={},v=Object.prototype.hasOwnProperty;if(s==null)throw new TypeError();for(var w in s)if(v.call(s,w)&&!v.call(t,w))u[w]=s[w];return u;})(p,{ChildClass:1});return (j.createElement(q,j.__spread({},r,{participants:this.state.participants})));}});e.exports=o;},null);
__d("MercuryPresenceIndicator.react",["Arbiter","AvailableListConstants","MercuryIDs","PresenceStatus","ReactComponentWithPureRenderMixin","React","SubscriptionsHandler","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();'use strict';var p=l,q=p.PropTypes,r=l.createClass({displayName:"MercuryPresenceIndicator",mixins:[k],propTypes:{threadID:q.string.isRequired},componentDidMount:function(){this._subscriptions=new m();this._subscriptions.addSubscriptions(g.subscribe(h.ON_AVAILABILITY_CHANGED,function(){return this.forceUpdate();}.bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var s=this._getPresence();return (l.createElement("span",{className:this._getClasses(s)},l.createElement("span",{className:"accessible_elem"},this._getLabel(s))));},_getPresence:function(){if(!i.isCanonical(this.props.threadID)){return null;}else{var s=i.getUserIDFromThreadID(this.props.threadID);return j.get(s);}},_getClasses:function(s){return (("presenceIndicator")+(i.isGroupChat(this.props.threadID)?' '+"groupThread":'')+(s==h.ACTIVE?' '+"presenceActive":'')+(s==h.MOBILE?' '+"presenceMobile":''));},_getLabel:function(s){switch(s){case h.ACTIVE:return (o._("Ativos"));case h.MOBILE:return (o._("Celular"));default:return null;}}});e.exports=r;},null);
__d("MercurySeenIndicator.react",["MercuryDelayedRoger","MercuryIDs","React","SubscriptionsHandler","cx"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=i,m=l.PropTypes,n=i.createClass({displayName:"MercurySeenIndicator",propTypes:{thread:m.object.isRequired,viewer:m.string.isRequired},componentDidMount:function(){this._subscriptions=new j();this._subscriptions.addSubscriptions(g.subscribe('state-changed',function(o,p){p[this.props.thread.thread_id]&&this.forceUpdate();}.bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var o=this._separateParticipants(),p=o.viewer,q=o.others,r=this._viewerLastToReply(p),s=this._seenByAll(q);return (i.createElement("span",{className:(("MercuryRepliedIndicator")+(r?' '+"repliedLast":'')+(r&&s?' '+"seenByAll":''))}));},_separateParticipants:function(){var o=h.getParticipantIDFromUserID(this.props.viewer),p=this.props.thread.participants.filter(function(q){return q!==o;});return {viewer:o,others:p};},_viewerLastToReply:function(o){var p=this.props.thread.participants;return p.length>0&&p[0]===o;},_seenByAll:function(o){var p=this.props.thread.thread_id;return g.getSeenBy(p).length===o.length;}});e.exports=n;},null);
__d("MercuryThreadPermalink.react",["HighlanderFinchGating","Link.react","PagesMessengerThreadDialogLink.react","ReactComponentWithPureRenderMixin","React","WebMessengerThreadPermalinks"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=k,n=m.PropTypes,o=k.createClass({displayName:"MercuryThreadPermalink",mixins:[j],propTypes:{threadID:n.string.isRequired,viewer:n.string.isRequired,folder:n.string,onClick:n.func},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(p){if(p.threadID!==this.props.threadID||p.folder!==this.props.folder)this._getPermalinkURI(p);},render:function(){if(g.HIGHLANDER_FINCH_GATING)return (k.createElement(i,{className:this.props.className,threadID:this.props.threadID,viewer:this.props.viewer,folder:this.props.folder},this.props.children));return (k.createElement(h,{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:"button"},this.props.children));},_getPermalinkURI:function(p){if(g.HIGHLANDER_FINCH_GATING)return;this.setState(this.getInitialState());l.getThreadURI(p.threadID,function(q){return this.isMounted()&&this.setState({permalinkURI:q});}.bind(this),p.folder);}});e.exports=o;},null);
__d("MercuryThreadReadToggle.react",["MercuryThreadActions","ReactComponentWithPureRenderMixin","React","ReadToggle.react","fbt","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=i,n=m.PropTypes,o=i.createClass({displayName:"MercuryThreadReadToggle",mixins:[h],propTypes:{threadID:n.string.isRequired,viewer:n.string.isRequired,unreadCount:n.number.isRequired},render:function(){l(this.props.unreadCount>=0);return (i.createElement(j,{isRead:this.props.unreadCount===0,onClick:this._handleClick,readLabel:k._("Marcar como n\u00e3o lido"),unreadLabel:k._("Marcar como lido")}));},_handleClick:function(p){p.preventDefault();p.stopPropagation();var q=g.getForFBID(this.props.viewer);this.props.unreadCount>0?q.markRead(this.props.threadID):q.markUnread(this.props.threadID);}});e.exports=o;},null);
__d("MercuryThreadSnippet.react",["immutable","MercuryAttachmentSnippet.react","MercuryIDs","React","TextWithEmoticons.react","fbt","shallowEqual"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=j,o=n.PropTypes,p=j.createClass({displayName:"MercuryThreadSnippet",propTypes:{participants:o.instanceOf(g.Map).isRequired,shouldRenderYou:o.bool,thread:o.object.isRequired,viewer:o.string.isRequired},shouldComponentUpdate:function(s,t){return (!m(s,this.props)||!g.is(s.participants,this.props.participants));},render:function(){return (j.createElement("span",{className:this.props.className},this._renderAttachmentIndicator(),this._renderSnippet()));},_renderAttachmentIndicator:function(){if(!this.props.thread.snippet||!q(this.props.thread))return null;return j.createElement("span",{className:"MercuryAttachmentIndicator"});},_renderSnippet:function(){var s=this.props.thread,t=i.getParticipantIDFromUserID(this.props.viewer),u=this._renderInnerSnippet(),v=s.participants.length;if(s.is_subscribed)v--;if(r(s)||!s.snippet_sender)return u;if(s.snippet_sender===t){if(!this.props.shouldRenderYou)return u;return (l._("You: {conversation_snippet}",[l.param("conversation_snippet",u)]));}if(v<=1)return u;var w=this.props.participants.get(s.snippet_sender);if(!w||!w.short_name)return u;return (l._("{name}: {conversation_snippet}",[l.param("name",w.short_name),l.param("conversation_snippet",u)]));},_renderInnerSnippet:function(){var s=this.props.thread,t=s.snippet;if(t&&t.startsWith('?OTR'))return (l._("[mensagem criptografada]"));if(t)return (j.createElement(k,{renderEmoticons:true,renderEmoji:true,text:t.replace(/\r\n|[\r\n]/g,' ')}));if(q(s))return (j.createElement(h,{thread:s,viewer:this.props.viewer}));return null;}});function q(s){return (s.snippet_has_attachment&&s.snippet_attachments&&s.snippet_attachments.length>0);}function r(s){return !s.snippet&&q(s);}e.exports=p;},null);
__d("MercuryThreadTimestamp.react",["ReactComponentWithPureRenderMixin","React","formatDate","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();'use strict';var k=h,l=k.PropTypes,m=h.createClass({displayName:"MercuryThreadTimestamp",mixins:[g],propTypes:{time:l.number,title:l.string,text:l.string},render:function(){var n=this.props.time;if(!n)return h.createElement("abbr",null);return (h.createElement("abbr",{className:j(this.props.className,'timestamp'),title:this.props.title||(new Date(n)).toLocaleDateString(),"data-utime":n/1000},this.props.text||i(new Date(n),'g:ia')));}});e.exports=m;},null);
__d("MessagesJewelInlineThumbnail.react",["MercuryAttachmentType","React","cx"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=h,k=j.PropTypes,l=h.createClass({displayName:"MessagesJewelInlineThumbnail",propTypes:{thread:k.object.isRequired},render:function(){var m=this._getPhotoAttachments();if(m.length===0)return h.createElement("span",null);var n=m[0].thumbnail_url;if(!n)return h.createElement("span",null);var o=h.createElement("span",{className:"_56hv"},h.createElement("i",{style:{backgroundImage:("url("+n+")")}}));if(m.length>1)o=h.createElement("span",null,h.createElement("span",{className:"_56hy"}),o);return o;},_getPhotoAttachments:function(){var m=this.props.thread;if(!m.snippet_attachments)return [];return m.snippet_attachments.filter(function(n){return n.attach_type===g.PHOTO;});}});e.exports=l;},null);
__d("MessagesJewelThreadListRow.react",["ImageBlock.react","immutable","ImmutableObject","MercuryPresenceIndicator.react","MercurySeenIndicator.react","MercuryThreadImage.react","MercuryThreadPermalink.react","MercuryThreadReadToggle.react","MercuryThreadSnippet.react","MercuryThreadTimestamp.react","MercuryThreadTitle.react","MessagesJewelInlineThumbnail.react","ReactComponentWithPureRenderMixin","React","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();'use strict';var v=t,w=v.PropTypes,x=t.createClass({displayName:"MessagesJewelThreadListRow",mixins:[s],propTypes:{onClick:w.func,participants:w.instanceOf(h.Map).isRequired,showPresence:w.bool,thread:w.instanceOf(i).isRequired,viewer:w.string.isRequired,wasSeenByAll:w.bool},render:function(){return (t.createElement("li",{className:((this.props.thread.unread_count>0?"jewelItemNew":''))},t.createElement(m,{className:"messagesContent",threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},t.createElement(g,{spacing:"medium"},t.createElement("div",{className:"MercuryThreadImage"},t.createElement(l,{thread:this.props.thread,viewer:this.props.viewer})),t.createElement("div",{className:"content"},t.createElement("div",{className:"author"},t.createElement("strong",null,t.createElement(q,{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:true})),this._renderPresenceIndicator()),t.createElement("div",{className:"snippet preview"},t.createElement(k,{thread:this.props.thread,viewer:this.props.viewer}),t.createElement(o,{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer})),t.createElement("div",{className:"time"},t.createElement(p,{time:this.props.thread.timestamp,title:this.props.thread.timestamp_absolute,text:this.props.thread.timestamp_relative}))),t.createElement("div",null,t.createElement(r,{thread:this.props.thread}),t.createElement("div",{className:"x_div"},t.createElement(n,{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count})))))));},_renderPresenceIndicator:function(){if(!this.props.showPresence)return null;return (t.createElement(j,{threadID:this.props.thread.thread_id}));}});e.exports=x;},null);
__d("MessagesJewelThreadlistRowContainer.react",["ImmutableObject","MercuryDelayedRoger","MercuryThreadlistRowContainer.react","MessagesJewelThreadListRow.react","ReactComponentWithPureRenderMixin","React","StoreAndPropBasedStateMixin","requireWeak"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();'use strict';var o=l,p=o.PropTypes,q;n(['ChatOpenTab'],function(s){q=s;});var r=l.createClass({displayName:"MessagesJewelThreadlistRowContainer",mixins:[k,m(h)],propTypes:{thread:p.instanceOf(g).isRequired,viewer:p.string.isRequired},statics:{calculateState:function(s){return {wasSeenByAll:h.wasSeenByAll(s.thread.thread_id)};}},componentDidMount:function(){if(!q)n(['ChatOpenTab'],function(s){this.forceUpdate();}.bind(this));},render:function(){return (l.createElement(i,{ChildClass:j,onClick:this._handleClick,showPresence:q&&q.canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll}));},_handleClick:function(s){if(s.button===1||s.altKey||s.ctrlKey||s.metaKey||s.shiftKey)return;if(q&&q.canOpenTab()){s.preventDefault();q.openThread(this.props.thread.thread_id,'jewel');}}});e.exports=r;},null);
__d("MessagesJewelThreadList.react",["ImmutableObject","ScrollableArea.react","Link.react","MessagesJewelThreadlistRowContainer.react","React","XUISpinner.react","cx","fbt","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();'use strict';var p=k,q=p.PropTypes,r=k.createClass({displayName:"MessagesJewelThreadList",propTypes:{isLoaded:q.bool,isLoading:q.bool,onLoadMoreRequest:q.func,p2pJewelBannerContainer:q.element,threads:q.arrayOf(q.instanceOf(g)).isRequired,viewer:q.string.isRequired},render:function(){return (k.createElement(h,{onScroll:o(this._handleScroll,50),ref:"scrollable"},k.createElement("ul",{className:"jewelContent"},this.props.p2pJewelBannerContainer?k.createElement("li",null,this.props.p2pJewelBannerContainer):null,this.props.threads.map(function(s){return k.createElement(j,{key:s.thread_id,thread:s,viewer:this.props.viewer});}.bind(this))),this._renderLoadMoreLink()));},_renderLoadMoreLink:function(){if(this.props.isLoaded)return null;if(this.props.isLoading)return (k.createElement("div",{className:"_v8y"},k.createElement(l,null)));return (k.createElement("div",{className:"_v8y"},k.createElement(i,{href:"#",onClick:this._handleLoadMoreClick},n._("Mostrar mais antigas"))));},_handleScroll:function(){if(this.props.isLoaded)return;var s=this.refs.scrollable.getArea();if(s.getScrollTop()+s.getClientHeight()>=s.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();},_handleLoadMoreClick:function(s){s.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();}});e.exports=r;},null);
__d("MercuryJewelThreadlistControl",["ArbiterMixin","CurrentUser","CSS","DOM","Event","JSLogger","MercuryConfig","MercuryThreadlistConstants","MercuryThreadlistContainer.react","MessagesJewelThreadList.react","MessagingTag","React","copyProperties","csx","cx","fbt","MercuryThreadInformer","MercuryUnreadState"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();var w=b('MercuryThreadInformer').get(),x=b('MercuryUnreadState').get(),y=l.create('mercury_jewel'),z=m.CoreGraphEnabled?q.PENDING:q.OTHER;function aa(ea){this._threadlistContainer=j.find(ea,"._3v_l");this._currentFolder=q.INBOX;this._jewelFolderLinks={};this._jewelFolderLinks[q.INBOX]=j.find(ea,"._1sde");this._jewelFolderLinks[z]=j.find(ea,"._1sdf");this._jewelFolderCounts={};this._jewelFolderCounts[q.INBOX]=j.find(ea,"._1sdg");this._jewelFolderCounts[z]=j.find(ea,"._1sdh");ca.bind(this)();this._markAllReadLink=j.find(ea,"._1c1m");k.listen(this._jewelFolderLinks[q.INBOX],'click',ba.bind(this,q.INBOX));k.listen(this._jewelFolderLinks[z],'click',ba.bind(this,z));k.listen(this._markAllReadLink,'click',function(fa){x.markFolderAsRead(this._currentFolder);fa.kill();}.bind(this));w.subscribe('unread-updated',ca.bind(this));this.render();y.bump('opened_threadlist_'+this._currentFolder);}s(aa.prototype,g);s(aa.prototype,{render:function(){r.render(r.createElement(o,{ChildClass:p,viewer:h.getID(),folder:this._currentFolder}),this._threadlistContainer);}});function ba(ea){if(this._currentFolder!=ea){y.bump('opened_threadlist_'+ea);i.addClass(this._jewelFolderLinks[ea],"_1sdd");i.removeClass(this._jewelFolderLinks[this._currentFolder],"_1sdd");this._currentFolder=ea;this.render();}}function ca(){da.bind(this)(q.INBOX);da.bind(this)(z);}function da(ea){var fa;if(x.exceedsMaxCount(ea)){fa=n.MAX_UNREAD_COUNT;}else fa=x.getUnreadCount(ea);var ga=this._jewelFolderCounts[ea];if(fa>0){if(fa==n.MAX_UNREAD_COUNT)fa+='+';j.setContent(ga,v._("({unread_count})",[v.param("unread_count",fa)]));}else j.setContent(ga,'');}e.exports=aa;},null);
__d("MercuryJewel",["MercuryJewelCountControl","MercuryServerRequests","MercuryChannelHandler"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();b('MercuryChannelHandler').get().turnOn();var i=false;function j(k,l){"use strict";g.constructStores();h.get().handleUpdate(l);var m=k.getFlyout();this.$MercuryJewel0=new g(k);if(k.getRoot()&&k.isOpen()){this.$MercuryJewel1(m);}else k.subscribeOnce('opened',this.$MercuryJewel1.bind(this,m));}j.prototype.$MercuryJewel1=function(k){"use strict";if(!i){d(['MercuryJewelThreadlistControl'],function(l){this.$MercuryJewel2=new l(k);}.bind(this));i=true;}};e.exports=j;},null);