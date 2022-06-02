(window["webpackJsonp_@app/map-webpack"]=window["webpackJsonp_@app/map-webpack"]||[]).push([["marker~marker-polygon"],{5586:function(t,e,n){},"69df":function(t,e,n){var o,i,s;
/*
	Leaflet.contextmenu, a context menu for Leaflet.
	(c) 2015, Adam Ratcliffe, GeoSmart Maps Limited

	@preserve
*/(function(r){i=[n("ff6a")],o=r,s="function"===typeof o?o.apply(e,i):o,void 0===s||(t.exports=s)})((function(t){t.Map.mergeOptions({contextmenuItems:[]}),t.Map.ContextMenu=t.Handler.extend({_touchstart:t.Browser.msPointer?"MSPointerDown":t.Browser.pointer?"pointerdown":"touchstart",statics:{BASE_CLS:"leaflet-contextmenu"},initialize:function(e){t.Handler.prototype.initialize.call(this,e),this._items=[],this._visible=!1;var n=this._container=t.DomUtil.create("div",t.Map.ContextMenu.BASE_CLS,e._container);n.style.zIndex=1e4,n.style.position="absolute",e.options.contextmenuWidth&&(n.style.width=e.options.contextmenuWidth+"px"),this._createItems(),t.DomEvent.on(n,"click",t.DomEvent.stop).on(n,"mousedown",t.DomEvent.stop).on(n,"dblclick",t.DomEvent.stop).on(n,"contextmenu",t.DomEvent.stop)},addHooks:function(){var e=this._map.getContainer();t.DomEvent.on(e,"mouseleave",this._hide,this).on(document,"keydown",this._onKeyDown,this),t.Browser.touch&&t.DomEvent.on(document,this._touchstart,this._hide,this),this._map.on({contextmenu:this._show,mousedown:this._hide,movestart:this._hide,zoomstart:this._hide},this)},removeHooks:function(){var e=this._map.getContainer();t.DomEvent.off(e,"mouseleave",this._hide,this).off(document,"keydown",this._onKeyDown,this),t.Browser.touch&&t.DomEvent.off(document,this._touchstart,this._hide,this),this._map.off({contextmenu:this._show,mousedown:this._hide,movestart:this._hide,zoomstart:this._hide},this)},showAt:function(e,n){e instanceof t.LatLng&&(e=this._map.latLngToContainerPoint(e)),this._showAtPoint(e,n)},hide:function(){this._hide()},addItem:function(t){return this.insertItem(t)},insertItem:function(t,e){e=void 0!==e?e:this._items.length;var n=this._createItem(this._container,t,e);return this._items.push(n),this._sizeChanged=!0,this._map.fire("contextmenu.additem",{contextmenu:this,el:n.el,index:e}),n.el},removeItem:function(e){var n=this._container;return isNaN(e)||(e=n.children[e]),e?(this._removeItem(t.Util.stamp(e)),this._sizeChanged=!0,this._map.fire("contextmenu.removeitem",{contextmenu:this,el:e}),e):null},removeAllItems:function(){var e,n=this._container.children;while(n.length)e=n[0],this._removeItem(t.Util.stamp(e));return n},hideAllItems:function(){var t,e,n;for(e=0,n=this._items.length;e<n;e++)t=this._items[e],t.el.style.display="none"},showAllItems:function(){var t,e,n;for(e=0,n=this._items.length;e<n;e++)t=this._items[e],t.el.style.display=""},setDisabled:function(e,n){var o=this._container,i=t.Map.ContextMenu.BASE_CLS+"-item";isNaN(e)||(e=o.children[e]),e&&t.DomUtil.hasClass(e,i)&&(n?(t.DomUtil.addClass(e,i+"-disabled"),this._map.fire("contextmenu.disableitem",{contextmenu:this,el:e})):(t.DomUtil.removeClass(e,i+"-disabled"),this._map.fire("contextmenu.enableitem",{contextmenu:this,el:e})))},isVisible:function(){return this._visible},_createItems:function(){var t,e,n=this._map.options.contextmenuItems;for(t=0,e=n.length;t<e;t++)this._items.push(this._createItem(this._container,n[t]))},_createItem:function(e,n,o){if(n.separator||"-"===n)return this._createSeparator(e,o);var i=t.Map.ContextMenu.BASE_CLS+"-item",s=n.disabled?i+" "+i+"-disabled":i,r=this._insertElementAt("a",s,e,o),a=this._createEventHandler(r,n.callback,n.context,n.hideOnSelect),h=this._getIcon(n),c=this._getIconCls(n),m="";return h?m='<img class="'+t.Map.ContextMenu.BASE_CLS+'-icon" src="'+h+'"/>':c&&(m='<span class="'+t.Map.ContextMenu.BASE_CLS+"-icon "+c+'"></span>'),r.innerHTML=m+n.text,r.href="#",t.DomEvent.on(r,"mouseover",this._onItemMouseOver,this).on(r,"mouseout",this._onItemMouseOut,this).on(r,"mousedown",t.DomEvent.stopPropagation).on(r,"click",a),t.Browser.touch&&t.DomEvent.on(r,this._touchstart,t.DomEvent.stopPropagation),t.Browser.pointer||t.DomEvent.on(r,"click",this._onItemMouseOut,this),{id:t.Util.stamp(r),el:r,callback:a}},_removeItem:function(e){var n,o,i,s,r;for(i=0,s=this._items.length;i<s;i++)if(n=this._items[i],n.id===e)return o=n.el,r=n.callback,r&&(t.DomEvent.off(o,"mouseover",this._onItemMouseOver,this).off(o,"mouseover",this._onItemMouseOut,this).off(o,"mousedown",t.DomEvent.stopPropagation).off(o,"click",r),t.Browser.touch&&t.DomEvent.off(o,this._touchstart,t.DomEvent.stopPropagation),t.Browser.pointer||t.DomEvent.on(o,"click",this._onItemMouseOut,this)),this._container.removeChild(o),this._items.splice(i,1),n;return null},_createSeparator:function(e,n){var o=this._insertElementAt("div",t.Map.ContextMenu.BASE_CLS+"-separator",e,n);return{id:t.Util.stamp(o),el:o}},_createEventHandler:function(e,n,o,i){var s=this,r=this._map,a=t.Map.ContextMenu.BASE_CLS+"-item-disabled";i=void 0===i||i;return function(h){t.DomUtil.hasClass(e,a)||(i&&s._hide(),n&&n.call(o||r,s._showLocation),s._map.fire("contextmenu.select",{contextmenu:s,el:e}))}},_insertElementAt:function(t,e,n,o){var i,s=document.createElement(t);return s.className=e,void 0!==o&&(i=n.children[o]),i?n.insertBefore(s,i):n.appendChild(s),s},_show:function(t){this._showAtPoint(t.containerPoint,t)},_showAtPoint:function(e,n){if(this._items.length){var o=this._map,i=o.containerPointToLayerPoint(e),s=o.layerPointToLatLng(i),r=t.extend(n||{},{contextmenu:this});this._showLocation={latlng:s,layerPoint:i,containerPoint:e},n&&n.relatedTarget&&(this._showLocation.relatedTarget=n.relatedTarget),this._setPosition(e),this._visible||(this._container.style.display="block",this._visible=!0),this._map.fire("contextmenu.show",r)}},_hide:function(){this._visible&&(this._visible=!1,this._container.style.display="none",this._map.fire("contextmenu.hide",{contextmenu:this}))},_getIcon:function(e){return t.Browser.retina&&e.retinaIcon||e.icon},_getIconCls:function(e){return t.Browser.retina&&e.retinaIconCls||e.iconCls},_setPosition:function(e){var n,o=this._map.getSize(),i=this._container,s=this._getElementSize(i);this._map.options.contextmenuAnchor&&(n=t.point(this._map.options.contextmenuAnchor),e=e.add(n)),i._leaflet_pos=e,e.x+s.x>o.x?(i.style.left="auto",i.style.right=Math.min(Math.max(o.x-e.x,0),o.x-s.x-1)+"px"):(i.style.left=Math.max(e.x,0)+"px",i.style.right="auto"),e.y+s.y>o.y?(i.style.top="auto",i.style.bottom=Math.min(Math.max(o.y-e.y,0),o.y-s.y-1)+"px"):(i.style.top=Math.max(e.y,0)+"px",i.style.bottom="auto")},_getElementSize:function(t){var e=this._size,n=t.style.display;return e&&!this._sizeChanged||(e={},t.style.left="-999999px",t.style.right="auto",t.style.display="block",e.x=t.offsetWidth,e.y=t.offsetHeight,t.style.left="auto",t.style.display=n,this._sizeChanged=!1),e},_onKeyDown:function(t){var e=t.keyCode;27===e&&this._hide()},_onItemMouseOver:function(e){t.DomUtil.addClass(e.target||e.srcElement,"over")},_onItemMouseOut:function(e){t.DomUtil.removeClass(e.target||e.srcElement,"over")}}),t.Map.addInitHook("addHandler","contextmenu",t.Map.ContextMenu),t.Mixin.ContextMenu={bindContextMenu:function(e){return t.setOptions(this,e),this._initContextMenu(),this},unbindContextMenu:function(){return this.off("contextmenu",this._showContextMenu,this),this},addContextMenuItem:function(t){this.options.contextmenuItems.push(t)},removeContextMenuItemWithIndex:function(t){for(var e=[],n=0;n<this.options.contextmenuItems.length;n++)this.options.contextmenuItems[n].index==t&&e.push(n);var o=e.pop();while(void 0!==o)this.options.contextmenuItems.splice(o,1),o=e.pop()},replaceContextMenuItem:function(t){this.removeContextMenuItemWithIndex(t.index),this.addContextMenuItem(t)},_initContextMenu:function(){this._items=[],this.on("contextmenu",this._showContextMenu,this)},_showContextMenu:function(e){var n,o,i,s,r;if(this._map.contextmenu){for(o=t.extend({relatedTarget:this},e),i=this._map.mouseEventToContainerPoint(e.originalEvent),this.options.contextmenuInheritItems||this._map.contextmenu.hideAllItems(),s=0,r=this.options.contextmenuItems.length;s<r;s++)n=this.options.contextmenuItems[s],this._items.push(this._map.contextmenu.insertItem(n,n.index));this._map.once("contextmenu.hide",this._hideContextMenu,this),this._map.contextmenu.showAt(i,o)}},_hideContextMenu:function(){var t,e;for(t=0,e=this._items.length;t<e;t++)this._map.contextmenu.removeItem(this._items[t]);this._items.length=0,this.options.contextmenuInheritItems||this._map.contextmenu.showAllItems()}};var e,n,o,i=[t.Marker,t.Path],s={contextmenu:!1,contextmenuItems:[],contextmenuInheritItems:!0};for(n=0,o=i.length;n<o;n++)e=i[n],e.prototype.options?e.mergeOptions(s):e.prototype.options=s,e.addInitHook((function(){this.options.contextmenu&&this._initContextMenu()})),e.include(t.Mixin.ContextMenu);return t.Map.ContextMenu}))},"7fc3":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("ff6a");n("2c86"),n("0d35"),n("cc3e"),n("69df"),n("5586");function i(){var t=function(t){return console.log("进入hooks useMap"),e(t)},e=function(t){i();var e=o["map"]("map",{zoom:13,minZoom:10,maxZoom:22,center:t,doubleClickZoom:!1,zoomControl:!1,attributionControl:!1,tap:!1});return r(e),s(e),a(e),e},i=function(){delete o["Icon"].Default.prototype._getIconUrl,o["Icon"].Default.mergeOptions({iconRetinaUrl:n("4d1b"),iconUrl:n("85ed"),shadowUrl:n("a2c4")})},s=function(t){var e=o["tileLayer"]("https://mt{s}.sea.utuapp.cn/610403/satellite/{z}/{x}/{y}.png",{subdomains:["1","2","3","4"]}),n=o["tileLayer"]("https://mt{s}.sea.utuapp.cn/610403/overlay/{z}/{x}/{y}.png",{subdomains:["1","2","3","4"]}),i=o["tileLayer"]("https://mt{s}.sea.utuapp.cn/610403/models/610403102210/{z}/{x}/{y}.png",{subdomains:["1","2","3","4"],minZoom:10,maxZoom:22}),s=o["layerGroup"]([e,n,i]);s.addTo(t)},r=function(t){o["control"].zoom({position:"bottomleft"}).addTo(t)},a=function(t){t.pm.setLang("zh"),t.pm.setPathOptions({color:"orange",fillColor:"green",fillOpacity:.3})},h=function(t,e){console.log(t,"eee"),e.eachLayer((function(e){e.pm&&"Marker"===e.pm._shape&&t.marker._leaflet_id!==e._leaflet_id&&e.remove()}))},c=function(t){t.eachLayer((function(t){t.pm&&"Marker"===t.pm._shape&&t.remove()}))},m=function(t){t.eachLayer((function(t){t.pm&&"Polygon"===t.pm._shape&&t.remove()}))};return{init:t,removeAllMarkers:c,removeHistoryMarkers:h,removePolygon:m}}},8442:function(t,e,n){},"87d2":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("eda3"),n("84d7"),n("75ad"),n("d9e2"),n("f53f"),n("5183"),n("f3d2");var o=n("92f8");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},eda3:function(t,e,n){var o=n("14b0"),i=n("8371"),s=n("9e17"),r=n("c09f"),a=r((function(){s(1)}));o({target:"Object",stat:!0,forced:a},{keys:function(t){return s(i(t))}})},f3d2:function(t,e,n){var o=n("14b0"),i=n("9e66"),s=n("6b07"),r=n("2dc0"),a=n("8246"),h=n("6317");o({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,o=r(t),i=a.f,c=s(o),m={},u=0;while(c.length>u)n=i(o,e=c[u++]),void 0!==n&&h(m,e,n);return m}})},f53f:function(t,e,n){var o=n("14b0"),i=n("c09f"),s=n("2dc0"),r=n("8246").f,a=n("9e66"),h=i((function(){r(1)})),c=!a||h;o({target:"Object",stat:!0,forced:c,sham:!a},{getOwnPropertyDescriptor:function(t,e){return r(s(t),e)}})}}]);