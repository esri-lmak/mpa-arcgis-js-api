// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/IdentityManagerBase","dojo/_base/declare dojo/_base/config dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/_base/url dojo/sniff dojo/cookie dojo/io-query dojo/on dojo/regexp ./kernel ./config ./lang ./ServerInfo ./urlUtils ./deferredUtils ./request ./Evented ./OAuthCredential ./arcgis/OAuthInfo".split(" "),function(J,q,p,g,z,C,w,D,E,Q,R,S,h,F,v,G,r,K,y,L,M,N){var A={},O=function(a){var b=(new w(a.owningSystemUrl)).host;a=(new w(a.server)).host;var c=/.+\.arcgis\.com$/i;
return c.test(b)&&c.test(a)},H=function(a,b){return!!(O(a)&&b&&g.some(b,function(b){return b.test(a.server)}))},t,I=J(L,{declaredClass:"esri.IdentityManagerBase",constructor:function(){this._portalConfig=p.getObject("esriGeowConfig");this.serverInfos=[];this.oAuthInfos=[];this.credentials=[];this._soReqs=[];this._xoReqs=[];this._portals=[];this._getOAuthHash();R(window,"pageshow",p.hitch(this,this._pageShowHandler))},defaultOAuthInfo:null,defaultTokenValidity:60,tokenValidity:null,signInPage:null,
useSignInPage:!0,normalizeWebTierAuth:!1,_busy:null,_rejectOnPersistedPageShow:!1,_oAuthHash:null,_gwTokenUrl:"/sharing/generateToken",_agsRest:"/rest/services",_agsPortal:/\/sharing(\/|$)/i,_agsAdmin:/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i,_adminSvcs:/\/admin\/services(\/|$)/i,_agolSuffix:".arcgis.com",_gwDomains:[{regex:/https?:\/\/www\.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/dev\.arcgis\.com/i,tokenServiceUrl:"https://dev.arcgis.com/sharing/generateToken"},
{regex:/https?:\/\/.*dev[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://devext.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/.*qa[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://qaext.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/.*.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"}],_legacyFed:[],_regexSDirUrl:/http.+\/rest\/services\/?/ig,_regexServerType:/(\/(MapServer|GeocodeServer|GPServer|GeometryServer|ImageServer|NAServer|FeatureServer|GeoDataServer|GlobeServer|MobileServer|GeoenrichmentServer|VectorTileServer)).*/ig,
_gwUser:/http.+\/users\/([^\/]+)\/?.*/i,_gwItem:/http.+\/items\/([^\/]+)\/?.*/i,_gwGroup:/http.+\/groups\/([^\/]+)\/?.*/i,_errorCodes:[499,498,403,401],_rePortalTokenSvc:/\/sharing(\/rest)?\/generatetoken/i,_publicUrls:[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],_createDefaultOAuthInfo:!0,_hasTestedIfAppIsOnPortal:!1,registerServers:function(a){var b=this.serverInfos;b?(a=g.filter(a,function(a){return!this.findServerInfo(a.server)},this),this.serverInfos=b.concat(a)):
this.serverInfos=a;g.forEach(a,function(a){a.owningSystemUrl&&this._portals.push(a.owningSystemUrl);if(a.hasPortal){this._portals.push(a.server);var b=F.defaults.io.corsEnabledServers,c=this._getOrigin(a.tokenServiceUrl);r.canUseXhr(a.server)||b.push(a.server.replace(/^https?:\/\//i,""));r.canUseXhr(c)||b.push(c.replace(/^https?:\/\//i,""))}},this)},registerOAuthInfos:function(a){var b=this.oAuthInfos;b?(a=g.filter(a,function(a){return!this.findOAuthInfo(a.portalUrl)},this),this.oAuthInfos=b.concat(a)):
this.oAuthInfos=a},registerToken:function(a){var b=this._sanitizeUrl(a.server),c=this.findServerInfo(b),d=!0,e;c||(c=new G,c.server=this._getServerInstanceRoot(b),c.tokenServiceUrl=this._getTokenSvcUrl(b),c.hasPortal=!0,this.registerServers([c]));(e=this.findCredential(b,a.userId))?(p.mixin(e,a),d=!1):(e=new t({userId:a.userId,server:c.server,token:a.token,expires:a.expires,ssl:a.ssl,scope:this._isServerRsrc(b)?"server":"portal"}),e.resources=[b],this.credentials.push(e));e.onTokenChange(!1);d||e.refreshServerTokens()},
toJson:function(){return v.fixJson({serverInfos:g.map(this.serverInfos,function(a){return a.toJson()}),oAuthInfos:g.map(this.oAuthInfos,function(a){return a.toJson()}),credentials:g.map(this.credentials,function(a){return a.toJson()})})},initialize:function(a){if(a){p.isString(a)&&(a=C.fromJson(a));var b=a.serverInfos,c=a.oAuthInfos;a=a.credentials;if(b){var d=[];g.forEach(b,function(a){a.server&&a.tokenServiceUrl&&d.push(a.declaredClass?a:new G(a))});d.length&&this.registerServers(d)}if(c){var e=
[];g.forEach(c,function(a){a.appId&&e.push(a.declaredClass?a:new N(a))});e.length&&this.registerOAuthInfos(e)}a&&g.forEach(a,function(a){a.userId&&a.server&&a.token&&a.expires&&a.expires>(new Date).getTime()&&(a=a.declaredClass?a:new t(a),a.onTokenChange(),this.credentials.push(a))},this)}},findServerInfo:function(a){var b;a=this._sanitizeUrl(a);g.some(this.serverInfos,function(c){this._hasSameServerInstance(c.server,a)&&(b=c);return!!b},this);return b},findOAuthInfo:function(a){var b;a=this._sanitizeUrl(a);
g.some(this.oAuthInfos,function(c){this._hasSameServerInstance(c.portalUrl,a)&&(b=c);return!!b},this);return b},findCredential:function(a,b){var c,d;a=this._sanitizeUrl(a);d=this._isServerRsrc(a)?"server":"portal";b?g.some(this.credentials,function(e){this._hasSameServerInstance(e.server,a)&&b===e.userId&&e.scope===d&&(c=e);return!!c},this):g.some(this.credentials,function(b){this._hasSameServerInstance(b.server,a)&&-1!==this._getIdenticalSvcIdx(a,b)&&b.scope===d&&(c=b);return!!c},this);return c},
getCredential:function(a,b){var c,d,e=!0;v.isDefined(b)&&(p.isObject(b)?(c=!!b.token,d=b.error,e=!1!==b.prompt):c=b);a=this._sanitizeUrl(a);var g=new z(K._dfdCanceller),m=this._isAdminResource(a),l=c&&this._doPortalSignIn(a)?this._getEsriAuthCookie():null;if((c=c?this.findCredential(a):null)&&d&&498===d.code)c.destroy(),l&&l.token===b.token&&E("esri_auth",null,{expires:-1,path:"/",domain:document.domain});else if(l||c)return a=Error("You are currently signed in as: '"+(l&&l.email||c&&c.userId)+"'. You do not have access to this resource: "+
a),a.code="IdentityManagerBase.1",a.httpCode=d&&d.httpCode,a.messageCode=d?d.messageCode:null,a.subcode=d?d.subcode:null,a.details=d?d.details:null,a.log=!!q.isDebug,g.errback(a),g;if(d=this._findCredential(a,b))return g.callback(d),g;d=this.findServerInfo(a);if(d)!d.hasServer&&this._isServerRsrc(a)&&(d._restInfoDfd=this._getTokenSvcUrl(a,!0),d.hasServer=!0);else{l=this._getTokenSvcUrl(a);if(!l)return a=Error("Unknown resource - could not find token service endpoint."),a.code="IdentityManagerBase.2",
a.log=!!q.isDebug,g.errback(a),g;d=new G;d.server=this._getServerInstanceRoot(a);p.isString(l)?(d.tokenServiceUrl=l,d.hasPortal=!0):(d._restInfoDfd=l,d.hasServer=!0);this.registerServers([d])}e&&d.hasPortal&&void 0===d._selfReq&&!this._findOAuthInfo(a)&&(d._selfReq={owningTenant:b&&b.owningTenant,selfDfd:this._getPortalSelf(d.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),a)});return this._enqueue(a,d,b,g,m)},getResourceName:function(a){return this._isRESTService(a)?
a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(a)&&a.replace(this._gwUser,"$1")||this._gwItem.test(a)&&a.replace(this._gwItem,"$1")||this._gwGroup.test(a)&&a.replace(this._gwGroup,"$1")||""},generateToken:function(a,b,c){var d,e,g,m,l,u,f=this._rePortalTokenSvc.test(a.tokenServiceUrl),x=new w(window.location.href.toLowerCase()),P=this._getEsriAuthCookie(),B,k=!b;m=a.shortLivedTokenValidity;var n;b&&(n=h.id.tokenValidity||m||h.id.defaultTokenValidity,n>m&&
(n=m));c&&(d=c.isAdmin,e=c.serverUrl,g=c.token,u=c.ssl,a.customParameters=c.customParameters);d?m=a.adminTokenServiceUrl:(m=a.tokenServiceUrl,l=new w(m.toLowerCase()),P&&(B=(B=P.auth_tier)&&B.toLowerCase()),("web"===B||a.webTierAuth)&&c&&c.serverUrl&&!u&&"http"===x.scheme&&(r.hasSameOrigin(x.uri,m,!0)||"https"===l.scheme&&x.host===l.host&&"7080"===x.port&&"7443"===l.port)&&(m=m.replace(/^https:/i,"http:").replace(/:7443/i,":7080")),k&&f&&(m=m.replace(/\/rest/i,"")));d=p.mixin({url:m,content:p.mixin({request:"getToken",
username:b&&b.username,password:b&&b.password,serverUrl:e,token:g,expiration:n,referer:d||f?window.location.host:null,client:d?"referer":null,f:"json"},a.customParameters),handleAs:"json",callbackParamName:k?"callback":void 0},c&&c.ioArgs);c={usePost:!k,disableIdentityLookup:!0,useProxy:this._useProxy(a,c)};f||(d.withCredentials=!1);f=y(d,c);f.addCallback(function(c){if(!c||!c.token)return c=Error("Unable to generate token"),c.code="IdentityManagerBase.3",c.log=!!q.isDebug,c;var d=a.server;A[d]||
(A[d]={});b&&(A[d][b.username]=b.password);c.validity=n;return c});f.addErrback(function(a){});return f},isBusy:function(){return!!this._busy},checkSignInStatus:function(a){var b=new z;this.getCredential(a,{prompt:!1}).then(function(a){return a.token?y({url:a.server+("portal"===a.scope?"/sharing/rest":"/rest/services"),content:{f:"json",token:a.token},callbackParamName:"callback"},{disableIdentityLookup:!0}).then(function(){return a}).otherwise(function(b){if(498===b.code)throw a.destroy(),b=Error("User is not signed in."),
b.code="IdentityManagerBase.6",b.log=!!q.isDebug,b;return a}):a}).then(function(a){b.resolve(a)}).otherwise(function(a){b.reject(a)});return b},setRedirectionHandler:function(a){this._redirectFunc=a},setProtocolErrorHandler:function(a){this._protocolFunc=a},signIn:function(){},oAuthSignIn:function(){},onCredentialCreate:function(){},onCredentialsDestroy:function(){},destroyCredentials:function(){if(this.credentials){var a=this.credentials.slice();g.forEach(a,function(a){a.destroy()})}this.onCredentialsDestroy()},
_getOAuthHash:function(){var a=window.location.hash;if(a){"#"===a.charAt(0)&&(a=a.substring(1));var a=Q.queryToObject(a),b=!1;a.access_token&&a.expires_in&&a.state&&a.hasOwnProperty("username")?(a.state=C.fromJson(a.state),this._oAuthHash=a,b=!0):a.error&&a.error_description&&(console.log("IdentityManager OAuth Error: ",a.error," - ",a.error_description),"access_denied"===a.error&&(b=!0));b&&(!D("ie")||8<D("ie"))&&(window.location.hash="")}},_pageShowHandler:function(a){a.persisted&&this.isBusy()&&
this._rejectOnPersistedPageShow&&(a=Error("ABORTED"),a.code="IdentityManager.2",a.log=!!q.isDebug,this._errbackFunc(a))},_findCredential:function(a,b){var c=-1,d,e,h,m=b&&b.token;b=b&&b.resource;var l=this._isServerRsrc(a)?"server":"portal",u=g.filter(this.credentials,function(b){return this._hasSameServerInstance(b.server,a)&&b.scope===l},this);a=b||a;if(u.length)if(1===u.length)if(b=u[0],e=(d=(h=this.findServerInfo(b.server))&&h.owningSystemUrl)&&this.findCredential(d,b.userId),c=this._getIdenticalSvcIdx(a,
b),m)-1!==c&&(b.resources.splice(c,1),this._removeResource(a,e));else return-1===c&&b.resources.push(a),this._addResource(a,e),b;else{var f,x;g.some(u,function(b){x=this._getIdenticalSvcIdx(a,b);return-1!==x?(f=b,e=(d=(h=this.findServerInfo(f.server))&&h.owningSystemUrl)&&this.findCredential(d,f.userId),c=x,!0):!1},this);if(m)f&&(f.resources.splice(c,1),this._removeResource(a,e));else if(f)return this._addResource(a,e),f}},_findOAuthInfo:function(a){var b=this.findOAuthInfo(a);b||g.some(this.oAuthInfos,
function(c){this._isIdProvider(c.portalUrl,a)&&(b=c);return!!b},this);return b},_addResource:function(a,b){b&&-1===this._getIdenticalSvcIdx(a,b)&&b.resources.push(a)},_removeResource:function(a,b){var c=-1;b&&(c=this._getIdenticalSvcIdx(a,b),-1<c&&b.resources.splice(c,1))},_useProxy:function(a,b){return b&&b.isAdmin&&!r.hasSameOrigin(a.adminTokenServiceUrl,window.location.href)||!this._isPortalDomain(a.tokenServiceUrl)&&10.1==a.currentVersion&&!r.hasSameOrigin(a.tokenServiceUrl,window.location.href)},
_getOrigin:function(a){a=new w(a);return a.scheme+"://"+a.host+(v.isDefined(a.port)?":"+a.port:"")},_getServerInstanceRoot:function(a){var b=a.toLowerCase(),c=b.indexOf(this._agsRest);-1===c&&this._isAdminResource(a)&&(c=b.indexOf("/admin"));-1===c&&(c=b.indexOf("/sharing"));-1===c&&"/"===b.substr(-1)&&(c=b.length-1);return-1<c?a.substring(0,c):a},_hasSameServerInstance:function(a,b){"/"===a.substr(-1)&&(a=a.slice(0,-1));a=a.toLowerCase();b=this._getServerInstanceRoot(b).toLowerCase();a=this._normalizeAGOLorgDomain(a);
b=this._normalizeAGOLorgDomain(b);a=a.substr(a.indexOf(":"));b=b.substr(b.indexOf(":"));return a===b},_normalizeAGOLorgDomain:function(a){var b=/^https?:\/\/.+\.maps\.arcgis\.com/i,c=/^https?:\/\/.+\.mapsdevext\.arcgis\.com/i,d=/^https?:\/\/.+\.mapsqa\.arcgis\.com/i;b.test(a)?a=a.replace(b,"https://www.arcgis.com"):c.test(a)?a=a.replace(c,"https://devext.arcgis.com"):d.test(a)&&(a=a.replace(d,"https://qaext.arcgis.com"));return a},_sanitizeUrl:function(a){var b=(F.defaults.io.proxyUrl||"").toLowerCase(),
c=b?a.toLowerCase().indexOf(b+"?"):-1;-1!==c&&(a=a.substring(c+b.length+1));a=r.normalize(a);return r.urlToObject(a).path},_isRESTService:function(a){return-1<a.indexOf(this._agsRest)},_isAdminResource:function(a){return this._agsAdmin.test(a)||this._adminSvcs.test(a)},_isServerRsrc:function(a){return this._isRESTService(a)||this._isAdminResource(a)},_isIdenticalService:function(a,b){var c;this._isRESTService(a)&&this._isRESTService(b)?(a=this._getSuffix(a).toLowerCase(),b=this._getSuffix(b).toLowerCase(),
c=a===b,c||(c=/(.*)\/(MapServer|FeatureServer).*/ig,c=a.replace(c,"$1")===b.replace(c,"$1"))):this._isAdminResource(a)&&this._isAdminResource(b)?c=!0:this._isServerRsrc(a)||this._isServerRsrc(b)||!this._isPortalDomain(a)||(c=!0);return c},_isPortalDomain:function(a){a=a.toLowerCase();var b=(new w(a)).authority,c=this._portalConfig,d=-1!==b.indexOf(this._agolSuffix);!d&&c&&(d=this._hasSameServerInstance(this._getServerInstanceRoot(c.restBaseUrl),a));d||(!this._arcgisUrl&&(c=p.getObject("esri.arcgis.utils.arcgisUrl"))&&
(this._arcgisUrl=(new w(c)).authority),this._arcgisUrl&&(d=this._arcgisUrl.toLowerCase()===b));d||(d=g.some(this._portals,function(b){return this._hasSameServerInstance(b,a)},this));return d=d||this._agsPortal.test(a)},_isIdProvider:function(a,b){var c=-1,d=-1;g.forEach(this._gwDomains,function(e,g){-1===c&&e.regex.test(a)&&(c=g);-1===d&&e.regex.test(b)&&(d=g)});var e=!1;if(-1<c&&-1<d)if(0===c||4===c){if(0===d||4===d)e=!0}else if(1===c){if(1===d||2===d)e=!0}else 2===c?2===d&&(e=!0):3===c&&3===d&&
(e=!0);if(!e){var h=this.findServerInfo(b),m=h&&h.owningSystemUrl;m&&O(h)&&this._isPortalDomain(m)&&this._isIdProvider(a,m)&&(e=!0)}return e},_isPublic:function(a){a=this._sanitizeUrl(a);return g.some(this._publicUrls,function(b){return b.test(a)})},_getIdenticalSvcIdx:function(a,b){var c=-1;g.some(b.resources,function(b,e){return this._isIdenticalService(a,b)?(c=e,!0):!1},this);return c},_getSuffix:function(a){return a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")},_getTokenSvcUrl:function(a){var b,
c;if((b=this._isRESTService(a))||this._isAdminResource(a))return c=a.toLowerCase().indexOf(b?this._agsRest:"/admin/"),b=a.substring(0,c)+"/admin/generateToken",a=a.substring(0,c)+"/rest/info",c=y({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),c.adminUrl_=b,c;if(this._isPortalDomain(a)){var d="";g.some(this._gwDomains,function(b){b.regex.test(a)&&(d=b.tokenServiceUrl);return!!d});d||g.some(this._portals,function(b){this._hasSameServerInstance(b,a)&&(d=b+this._gwTokenUrl);
return!!d},this);d||(c=a.toLowerCase().indexOf("/sharing"),-1!==c&&(d=a.substring(0,c)+this._gwTokenUrl));d||(d=this._getOrigin(a)+this._gwTokenUrl);d&&(b=(new w(a)).port,/^http:\/\//i.test(a)&&"7080"===b&&(d=d.replace(/:7080/i,":7443")),d=d.replace(/http:/i,"https:"));return d}if(-1!==a.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"},_getPortalSelf:function(a,b){"https:"===window.location.protocol?a=a.replace(/^http:/i,"https:").replace(/:7080/i,
":7443"):/^http:/i.test(b)&&(a=a.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return y({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"},{crossOrigin:!1,disableIdentityLookup:!0})},_hasPortalSession:function(){return!!this._getEsriAuthCookie()},_getEsriAuthCookie:function(){var a=null;if(E.isSupported()){var b=this._getAllCookies("esri_auth"),c;for(c=0;c<b.length;c++){var d=C.fromJson(b[c]);if(d.portalApp){a=d;break}}}a&&(b=null,a.expires&&("number"===typeof a.expires?
b=a.expires:"string"===typeof a.expires&&(b=Date.parse(a.expires)),isNaN(b)&&(b=null),a.expires=b),b&&b<(new Date).getTime()&&(a=null));return a},_getAllCookies:function(a){var b=[],c=document.cookie.match(new RegExp("(?:^|; )"+S.escapeString(a)+"\x3d([^;]*)","g"));if(c)for(a=0;a<c.length;a++){var d=c[a],e=d.indexOf("\x3d");-1<e&&(d=d.substring(e+1),b.push(decodeURIComponent(d)))}return b},_doPortalSignIn:function(a){if(E.isSupported()){var b=this._getEsriAuthCookie(),c=this._portalConfig,d=window.location.href,
e=this.findServerInfo(a);if(this.useSignInPage&&(c||this._isPortalDomain(d)||b)&&(e?e.hasPortal||e.owningSystemUrl&&this._isPortalDomain(e.owningSystemUrl):this._isPortalDomain(a))&&(this._isIdProvider(d,a)||c&&(this._hasSameServerInstance(this._getServerInstanceRoot(c.restBaseUrl),a)||this._isIdProvider(c.restBaseUrl,a))||r.hasSameOrigin(d,a,!0)))return!0}return!1},_checkProtocol:function(a,b,c,d){var e=!0;d=d?b.adminTokenServiceUrl:b.tokenServiceUrl;0!==p.trim(d).toLowerCase().indexOf("https:")||
0===window.location.href.toLowerCase().indexOf("https:")||F.defaults.io.useCors&&(r.canUseXhr(d)||r.canUseXhr(r.getProxyUrl(!0).path))||(e=this._protocolFunc?!!this._protocolFunc({resourceUrl:a,serverInfo:b}):!1,e||(a=Error("Aborted the Sign-In process to avoid sending password over insecure connection."),a.code="IdentityManagerBase.4",a.log=!!q.isDebug,console.log(a.message),c(a)));return e},_enqueue:function(a,b,c,d,e,g){d||(d=new z(K._dfdCanceller));d.resUrl_=a;d.sinfo_=b;d.options_=c;d.admin_=
e;d.refresh_=g;this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(a),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(d)):this._xoReqs.push(d):this._doSignIn(d);return d},_doSignIn:function(a){this._busy=a;this._rejectOnPersistedPageShow=!1;var b=this,c=function(c){var d=a.options_&&a.options_.resource,f=a.resUrl_,e=a.refresh_,k=!1;-1===g.indexOf(b.credentials,c)&&(e&&-1!==g.indexOf(b.credentials,e)?(e.userId=c.userId,
e.token=c.token,e.expires=c.expires,e.validity=c.validity,e.ssl=c.ssl,e.creationTime=c.creationTime,k=!0,c=e):b.credentials.push(c));c.resources||(c.resources=[]);c.resources.push(d||f);c.scope=b._isServerRsrc(f)?"server":"portal";c.onTokenChange();var d=b._soReqs,n={};b._soReqs=[];g.forEach(d,function(a){if(!this._isIdenticalService(f,a.resUrl_)){var b=this._getSuffix(a.resUrl_);n[b]||(n[b]=!0,c.resources.push(a.resUrl_))}},b);a.callback(c);g.forEach(d,function(a){this._hasSameServerInstance(this._getServerInstanceRoot(f),
a.resUrl_)?a.callback(c):this._soReqs.push(a)},b);b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;if(!k)b.onCredentialCreate({credential:c});b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&b._doSignIn(b._xoReqs.shift())},d=function(c){a.errback(c);b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&b._doSignIn(b._xoReqs.shift())},e=function(f,e,g,m){var k=a.sinfo_,n=!a.options_||!1!==a.options_.prompt,h=k.hasPortal&&b._findOAuthInfo(a.resUrl_);
b._doPortalSignIn(a.resUrl_)?(f=b._getEsriAuthCookie(),h=b._portalConfig,f?c(new t({userId:f.email,server:k.server,token:f.token,expires:f.expires})):n?(n="",f=window.location.href,n=b.signInPage?b.signInPage:h?h.baseUrl+h.signin:b._isIdProvider(f,a.resUrl_)?b._getOrigin(f)+"/home/signin.html":k.tokenServiceUrl.replace(b._rePortalTokenSvc,"")+"/home/signin.html",n=n.replace(/http:/i,"https:"),h&&!1===h.useSSL&&(n=n.replace(/https:/i,"http:")),0===f.toLowerCase().replace("https","http").indexOf(n.toLowerCase().replace("https",
"http"))?(k=Error("Cannot redirect to Sign-In page from within Sign-In page. URL of the resource that triggered this workflow: "+a.resUrl_),k.code="IdentityManagerBase.5",k.log=!!q.isDebug,d(k)):(b._rejectOnPersistedPageShow=!0,b._redirectFunc?b._redirectFunc({signInPage:n,returnUrlParamName:"returnUrl",returnUrl:f,resourceUrl:a.resUrl_,serverInfo:k}):window.location=n+"?returnUrl\x3d"+window.escape(f))):(k=Error("User is not signed in."),k.code="IdentityManagerBase.6",k.log=!!q.isDebug,d(k))):f?
c(new t({userId:f,server:k.server,token:g,expires:v.isDefined(m)?Number(m):null,ssl:!!e})):h?(f=h._oAuthCred,f||(e=new M(h,window.localStorage),g=new M(h,window.sessionStorage),e.isValid()&&g.isValid()?e.expires>g.expires?(f=e,g.destroy()):(f=g,e.destroy()):f=e.isValid()?e:g,h._oAuthCred=f),f.isValid()?c(new t({userId:f.userId,server:k.server,token:f.token,expires:f.expires,ssl:f.ssl,_oAuthCred:f})):b._oAuthHash&&b._oAuthHash.state.portalUrl===h.portalUrl?(n=b._oAuthHash,k=new t({userId:n.username,
server:k.server,token:n.access_token,expires:(new Date).getTime()+1E3*Number(n.expires_in),ssl:"true"===n.ssl,oAuthState:n.state,_oAuthCred:f}),f.storage=n.persist?window.localStorage:window.sessionStorage,f.token=k.token,f.expires=k.expires,f.userId=k.userId,f.ssl=k.ssl,f.save(),b._oAuthHash=null,c(k)):n?a._pendingDfd=b.oAuthSignIn(a.resUrl_,k,h,a.options_).addCallbacks(c,d):(k=Error("User is not signed in."),k.code="IdentityManagerBase.6",k.log=!!q.isDebug,d(k))):n?b._checkProtocol(a.resUrl_,k,
d,a.admin_)&&(n=a.options_,a.admin_&&(n=n||{},n.isAdmin=!0),a._pendingDfd=b.signIn(a.resUrl_,k,n).addCallbacks(c,d)):(k=Error("User is not signed in."),k.code="IdentityManagerBase.6",k.log=!!q.isDebug,d(k))},h=function(){var f=a.sinfo_,e=f.owningSystemUrl,h=a.options_,m,k,n,l;h&&(m=h.token,k=h.error,n=h.prompt);(l=b._findCredential(e,{token:m,resource:a.resUrl_}))||g.some(b.credentials,function(a){this._isIdProvider(e,a.server)&&(l=a);return!!l},b);l?(h=b.findCredential(a.resUrl_,l.userId))?c(h):
H(f,b._legacyFed)?(h=l.toJson(),h.server=f.server,h.resources=null,c(new t(h))):(a._pendingDfd=b.generateToken(b.findServerInfo(l.server),null,{serverUrl:a.resUrl_,token:l.token,ssl:l.ssl})).addCallbacks(function(b){c(new t({userId:l.userId,server:f.server,token:b.token,expires:v.isDefined(b.expires)?Number(b.expires):null,ssl:!!b.ssl,isAdmin:a.admin_,validity:b.validity}))},d):(b._busy=null,m&&(a.options_.token=null),(a._pendingDfd=b.getCredential(e.replace(/\/?$/,"/sharing"),{resource:a.resUrl_,
owningTenant:f.owningTenant,token:m,error:k,prompt:n})).addCallbacks(function(c){b._enqueue(a.resUrl_,a.sinfo_,a.options_,a,a.admin_)},function(a){d(a)}))};this._errbackFunc=d;var m=a.sinfo_.owningSystemUrl,l=this._isServerRsrc(a.resUrl_),u=a.sinfo_._restInfoDfd;u?u.addCallbacks(function(c){var d=a.sinfo_;d.adminTokenServiceUrl=d._restInfoDfd.adminUrl_;d._restInfoDfd=null;d.tokenServiceUrl=p.getObject("authInfo.tokenServicesUrl",!1,c)||p.getObject("authInfo.tokenServiceUrl",!1,c)||p.getObject("tokenServiceUrl",
!1,c);d.shortLivedTokenValidity=p.getObject("authInfo.shortLivedTokenValidity",!1,c);d.currentVersion=c.currentVersion;d.owningTenant=c.owningTenant;(c=d.owningSystemUrl=c.owningSystemUrl)&&b._portals.push(c);l&&c?h():e()},function(){a.sinfo_._restInfoDfd=null;var b=Error("Unknown resource - could not find token service endpoint.");b.code="IdentityManagerBase.2";b.log=!!q.isDebug;d(b)}):l&&m?h():a.sinfo_._selfReq?a.sinfo_._selfReq.selfDfd.then(function(c){var d={},e,f,h,g;c&&(e=c.user&&c.user.username,
d.username=e,d.allSSL=c.allSSL,f=c.supportsOAuth,h=c.currentVersion,"multitenant"===c.portalMode&&(g=c.customBaseUrl));a.sinfo_.webTierAuth=!!e;return e&&b.normalizeWebTierAuth?b.generateToken(a.sinfo_,null,{ssl:d.allSSL}).addBoth(function(a){d.portalToken=a&&a.token;d.tokenExpiration=a&&a.expires;return d}):!e&&f&&4.4<=parseFloat(h)&&!b._doPortalSignIn(a.resUrl_)?b._generateOAuthInfo({portalUrl:a.sinfo_.server,customBaseUrl:g,owningTenant:a.sinfo_._selfReq.owningTenant}).always(function(){return d}):
d}).always(function(b){a.sinfo_._selfReq=null;b?e(b.username,b.allSSL,b.portalToken,b.tokenExpiration):e()}):e()},_generateOAuthInfo:function(a){var b=this,c,d=a.portalUrl,e=a.customBaseUrl,h=a.owningTenant;if(a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal){c=window.location.href;var g=c.indexOf("?");-1<g&&(c=c.slice(0,g));g=c.search(/\/(apps|home)\//);c=-1<g?c.slice(0,g):null}a&&c?(this._hasTestedIfAppIsOnPortal=!0,a=y({url:c+"/sharing/rest",content:{f:"json"},
handleAs:"json"}).then(function(){b.defaultOAuthInfo=new N({appId:"arcgisonline",popup:!0,popupCallbackUrl:c+"/home/oauth-callback.html"})})):(a=new z,a.resolve(),a=a.promise);return a.then(function(){if(b.defaultOAuthInfo)return d=d.replace(/^http:/i,"https:"),y({url:d+"/sharing/rest/oauth2/validateRedirectUri",content:{accountId:h,client_id:b.defaultOAuthInfo.appId,redirect_uri:r.getAbsoluteUrl(b.defaultOAuthInfo.popupCallbackUrl),f:"json"},handleAs:"json",callbackParamName:"callback"}).then(function(a){if(a.valid){var c=
b.defaultOAuthInfo.clone();c.portalUrl=a.urlKey&&e?"https://"+a.urlKey+"."+e:d;b.oAuthInfos.push(c)}})})}});t=J(L,{declaredClass:"esri.Credential",tokenRefreshBuffer:2,constructor:function(a){p.mixin(this,a);this.resources=this.resources||[];v.isDefined(this.creationTime)||(this.creationTime=(new Date).getTime())},_oAuthCred:null,refreshToken:function(){var a=this,b=this.resources&&this.resources[0],c=h.id.findServerInfo(this.server),d=c&&c.owningSystemUrl,e=!!d&&"server"===this.scope,p=e&&H(c,h.id._legacyFed),
m=e&&h.id.findServerInfo(d),l,u=(l=c.webTierAuth)&&h.id.normalizeWebTierAuth,f=A[this.server],f=f&&f[this.userId],r={username:this.userId,password:f},q;if(!l||u)if(e&&!m&&g.some(h.id.serverInfos,function(a){h.id._isIdProvider(d,a.server)&&(m=a);return!!m}),l=m&&h.id.findCredential(m.server,this.userId),!e||l)if(p)l.refreshToken();else{if(e)q={serverUrl:b,token:l&&l.token,ssl:l&&l.ssl};else if(u)r=null,q={ssl:this.ssl};else if(f)this.isAdmin&&(q={isAdmin:!0});else{var t;b&&(b=h.id._sanitizeUrl(b),
this._enqueued=1,t=h.id._enqueue(b,c,null,null,this.isAdmin,this),t.addCallback(function(){a._enqueued=0;a.refreshServerTokens()}).addErrback(function(){a._enqueued=0}));return t}return h.id.generateToken(e?m:c,e?null:r,q).addCallback(function(b){a.token=b.token;a.expires=v.isDefined(b.expires)?Number(b.expires):null;a.creationTime=(new Date).getTime();a.validity=b.validity;a.onTokenChange();a.refreshServerTokens()}).addErrback(function(){})}},refreshServerTokens:function(){"portal"===this.scope&&
g.forEach(h.id.credentials,function(a){var b=h.id.findServerInfo(a.server),c=b&&b.owningSystemUrl;a!==this&&a.userId===this.userId&&c&&"server"===a.scope&&(h.id._hasSameServerInstance(this.server,c)||h.id._isIdProvider(c,this.server))&&(H(b,h.id._legacyFed)?(a.token=this.token,a.expires=this.expires,a.creationTime=this.creationTime,a.validity=this.validity,a.onTokenChange()):a.refreshToken())},this)},onTokenChange:function(a){clearTimeout(this._refreshTimer);var b=this.server&&h.id.findServerInfo(this.server),
c=(b=b&&b.owningSystemUrl)&&h.id.findServerInfo(b);!1!==a&&(!b||"portal"===this.scope||c&&c.webTierAuth&&!h.id.normalizeWebTierAuth)&&(v.isDefined(this.expires)||v.isDefined(this.validity))&&this._startRefreshTimer()},onDestroy:function(){},destroy:function(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null;this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);var a=g.indexOf(h.id.credentials,this);-1<a&&h.id.credentials.splice(a,1);this.onTokenChange();
this.onDestroy()},toJson:function(){return this._toJson()},_toJson:function(){var a=v.fixJson({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),b=this.resources;b&&0<b.length&&(a.resources=b.slice());return a},_startRefreshTimer:function(){clearTimeout(this._refreshTimer);var a=6E4*this.tokenRefreshBuffer,b=(this.validity?this.creationTime+6E4*this.validity:this.expires)-
(new Date).getTime();0>b&&(b=0);this._refreshTimer=setTimeout(p.hitch(this,this.refreshToken),b>a?b-a:b)}});I.Credential=t;D("extend-esri")&&(h.IdentityManagerBase=I);return I});