!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=t=>e=>(t=>{const e=typeof t;return null===t?"null":"object"===e&&Array.isArray(t)?"array":"object"===e&&(n=r=t,o=(l=String).prototype,o.isPrototypeOf(n)||(null===(a=r.constructor)||void 0===a?void 0:a.name)===l.name)?"string":e;var n,o;var r,l,a})(e)===t,n=t=>e=>typeof e===t,o=e("string"),r=e("object"),l=e("array"),a=(i=null,t=>i===t);var i;const s=n("boolean"),c=t=>!(t=>null==t)(t),u=n("function"),g=(t,e)=>{if(l(t)){for(let n=0,o=t.length;n<o;++n)if(!e(t[n]))return!1;return!0}return!1},d=()=>{},p=(t,e)=>t===e;class Optional{constructor(t,e){this.tag=t,this.value=e}static some(t){return new Optional(!0,t)}static none(){return Optional.singletonNone}fold(t,e){return this.tag?e(this.value):t()}isSome(){return this.tag}isNone(){return!this.tag}map(t){return this.tag?Optional.some(t(this.value)):Optional.none()}bind(t){return this.tag?t(this.value):Optional.none()}exists(t){return this.tag&&t(this.value)}forall(t){return!this.tag||t(this.value)}filter(t){return!this.tag||t(this.value)?this:Optional.none()}getOr(t){return this.tag?this.value:t}or(t){return this.tag?this:t}getOrThunk(t){return this.tag?this.value:t()}orThunk(t){return this.tag?this:t()}getOrDie(t){if(this.tag)return this.value;throw new Error(null!=t?t:"Called getOrDie on None")}static from(t){return c(t)?Optional.some(t):Optional.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(t){this.tag&&t(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}Optional.singletonNone=new Optional(!1);const m=Array.prototype.indexOf,h=Array.prototype.push,f=(t,e)=>((t,e)=>m.call(t,e))(t,e)>-1,v=t=>{const e=[];for(let n=0,o=t.length;n<o;++n){if(!l(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t);h.apply(e,t[n])}return e},k=(t,e)=>v(((t,e)=>{const n=t.length,o=new Array(n);for(let r=0;r<n;r++){const n=t[r];o[r]=e(n,r)}return o})(t,e)),O=(t,e)=>{for(let n=0;n<t.length;n++){const o=e(t[n],n);if(o.isSome())return o}return Optional.none()},y=(t,e,n=p)=>t.exists((t=>n(t,e))),x=t=>{const e=[],n=t=>{e.push(t)};for(let o=0;o<t.length;o++)t[o].each(n);return e},b=(t,e)=>t?Optional.some(e):Optional.none(),_=t=>e=>e.options.get(t),w=_("link_assume_external_targets"),C=_("link_context_toolbar"),N=_("link_list"),A=_("link_default_target"),S=_("link_default_protocol"),T=_("link_target_list"),E=_("link_rel_list"),P=_("link_class_list"),R=_("link_title"),L=_("allow_unsafe_link_target"),M=_("link_quicklink");var D=tinymce.util.Tools.resolve("tinymce.util.Tools");const U=t=>o(t.value)?t.value:"",B=(t,e)=>{const n=[];return D.each(t,(t=>{const r=(t=>o(t.text)?t.text:o(t.title)?t.title:"")(t);if(void 0!==t.menu){const o=B(t.menu,e);n.push({text:r,items:o})}else{const o=e(t);n.push({text:r,value:o})}})),n},I=(t=U)=>e=>Optional.from(e).map((e=>B(e,t))),j={sanitize:t=>I(U)(t),sanitizeWith:I,createUi:(t,e)=>n=>({name:t,type:"listbox",label:e,items:n}),getValue:U},K=Object.keys,z=Object.hasOwnProperty,q=(t,e,n,o)=>{((t,e)=>{const n=K(t);for(let o=0,r=n.length;o<r;o++){const r=n[o];e(t[r],r)}})(t,((t,r)=>{(e(t,r)?n:o)(t,r)}))},V=(t,e)=>z.call(t,e);var F=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),W=tinymce.util.Tools.resolve("tinymce.util.URI");const $=t=>c(t)&&"a"===t.nodeName.toLowerCase(),G=t=>$(t)&&!!Q(t),H=(t,e)=>{if(t.collapsed)return[];{const n=t.cloneContents(),o=n.firstChild,r=new F(o,n),l=[];let a=o;do{e(a)&&l.push(a)}while(a=r.next());return l}},J=t=>/^\w+:/i.test(t),Q=t=>{var e,n;return null!==(n=null!==(e=t.getAttribute("data-mce-href"))&&void 0!==e?e:t.getAttribute("href"))&&void 0!==n?n:""},X=(t,e)=>{const n=["noopener"],o=t?t.split(/\s+/):[],r=t=>t.filter((t=>-1===D.inArray(n,t))),l=e?(t=>(t=r(t)).length>0?t.concat(n):n)(o):r(o);return l.length>0?(t=>D.trim(t.sort().join(" ")))(l):""},Y=(t,e)=>(e=e||t.selection.getNode(),ot(e)?Optional.from(t.dom.select("a[href]",e)[0]):Optional.from(t.dom.getParent(e,"a[href]"))),Z=(t,e)=>Y(t,e).isSome(),tt=(t,e)=>(t=>t.replace(/\uFEFF/g,""))(e.fold((()=>t.getContent({format:"text"})),(t=>t.innerText||t.textContent||""))),et=t=>D.grep(t,G).length>0,nt=t=>{const e=t.schema.getTextInlineElements();return 0===H(t.selection.getRng(),(t=>1===t.nodeType&&!$(t)&&!V(e,t.nodeName.toLowerCase()))).length},ot=t=>c(t)&&"FIGURE"===t.nodeName&&/\bimage\b/i.test(t.className),rt=(t,e)=>{const n={...e};if(0===E(t).length&&!L(t)){const t=X(n.rel,"_blank"===n.target);n.rel=t||null}return Optional.from(n.target).isNone()&&!1===T(t)&&(n.target=A(t)),n.href=((t,e)=>"http"!==e&&"https"!==e||J(t)?t:e+"://"+t)(n.href,w(t)),n},lt=(t,e,n)=>{const o=t.selection.getNode(),r=Y(t,o),l=rt(t,(t=>{return e=["title","rel","class","target"],n=(e,n)=>(t[n].each((t=>{e[n]=t.length>0?t:null})),e),o={href:t.href},((t,e)=>{for(let n=0,o=t.length;n<o;n++)e(t[n],n)})(e,((t,e)=>{o=n(o,t,e)})),o;var e,n,o})(n));t.undoManager.transact((()=>{n.href===e.href&&e.attach(),r.fold((()=>{((t,e,n,o)=>{const r=t.dom;ot(e)?ut(r,e,o):n.fold((()=>{t.execCommand("mceInsertLink",!1,o)}),(e=>{t.insertContent(r.createHTML("a",o,r.encode(e)))}))})(t,o,n.text,l)}),(e=>{t.focus(),((t,e,n,o)=>{n.each((t=>{V(e,"innerText")?e.innerText=t:e.textContent=t})),t.dom.setAttribs(e,o),t.selection.select(e)})(t,e,n.text,l)}))}))},at=t=>{const{class:e,href:n,rel:o,target:r,text:l,title:i}=t;return((t,e)=>{const n={};var o;return q(t,e,(o=n,(t,e)=>{o[e]=t}),d),n})({class:e.getOrNull(),href:n,rel:o.getOrNull(),target:r.getOrNull(),text:l.getOrNull(),title:i.getOrNull()},((t,e)=>!1===a(t)))},it=(t,e,n)=>{const o=((t,e)=>{const n=t.options.get,o={allow_html_data_urls:n("allow_html_data_urls"),allow_script_urls:n("allow_script_urls"),allow_svg_data_urls:n("allow_svg_data_urls")},r=e.href;return{...e,href:W.isDomSafe(r,"a",o)?r:""}})(t,n);t.hasPlugin("rtc",!0)?t.execCommand("createlink",!1,at(o)):lt(t,e,o)},st=t=>{t.hasPlugin("rtc",!0)?t.execCommand("unlink"):(t=>{t.undoManager.transact((()=>{const e=t.selection.getNode();ot(e)?ct(t,e):(t=>{const e=t.dom,n=t.selection,o=n.getBookmark(),r=n.getRng().cloneRange(),l=e.getParent(r.startContainer,"a[href]",t.getBody()),a=e.getParent(r.endContainer,"a[href]",t.getBody());l&&r.setStartBefore(l),a&&r.setEndAfter(a),n.setRng(r),t.execCommand("unlink"),n.moveToBookmark(o)})(t),t.focus()}))})(t)},ct=(t,e)=>{var n;const o=t.dom.select("img",e)[0];if(o){const r=t.dom.getParents(o,"a[href]",e)[0];r&&(null===(n=r.parentNode)||void 0===n||n.insertBefore(o,r),t.dom.remove(r))}},ut=(t,e,n)=>{var o;const r=t.select("img",e)[0];if(r){const e=t.create("a",n);null===(o=r.parentNode)||void 0===o||o.insertBefore(e,r),e.appendChild(r)}},gt=t=>{return V(e=t,n="items")&&void 0!==e[n]&&null!==e[n];var e,n},dt=(t,e)=>O(e,(e=>gt(e)?dt(t,e.items):b(e.value===t,e))),pt=(t,e,n,o)=>{const r=o[e],l=t.length>0;return void 0!==r?dt(r,n).map((e=>({url:{value:e.value,meta:{text:l?t:e.text,attach:d}},text:l?t:e.text}))):Optional.none()},mt=(t,e)=>{const n={text:t.text,title:t.title},o=t=>{const e=(o=t.url,b(n.text.length<=0,Optional.from(null===(r=o.meta)||void 0===r?void 0:r.text).getOr(o.value)));var o,r;const l=(t=>{var e;return b(n.title.length<=0,Optional.from(null===(e=t.meta)||void 0===e?void 0:e.title).getOr(""))})(t.url);return e.isSome()||l.isSome()?Optional.some({...e.map((t=>({text:t}))).getOr({}),...l.map((t=>({title:t}))).getOr({})}):Optional.none()},r=(t,o)=>{const r=(l=e,a=o,"link"===a?l.link:"anchor"===a?l.anchor:Optional.none()).getOr([]);var l,a;return pt(n.text,o,r,t)};return{onChange:(t,e)=>{const l=e.name;return"url"===l?o(t()):f(["anchor","link"],l)?r(t(),l):"text"===l||"title"===l?(n[l]=t()[l],Optional.none()):Optional.none()}}};var ht=tinymce.util.Tools.resolve("tinymce.util.Delay");const ft=t=>{const e=t.href;return e.indexOf("@")>0&&-1===e.indexOf("/")&&-1===e.indexOf("mailto:")?Optional.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:t=>({...t,href:"mailto:"+e})}):Optional.none()},vt=(t,e)=>n=>{const o=n.href;return 1===t&&!J(o)||0===t&&/^\s*www(\.|\d\.)/i.test(o)?Optional.some({message:`The URL you entered seems to be an external link. Do you want to add the required ${e}:// prefix?`,preprocess:t=>({...t,href:e+"://"+o})}):Optional.none()},kt=(t,e)=>O([ft,vt(w(t),S(t))],(t=>t(e))).fold((()=>Promise.resolve(e)),(n=>new Promise((o=>{((t,e,n)=>{const o=t.selection.getRng();ht.setEditorTimeout(t,(()=>{t.windowManager.confirm(e,(e=>{t.selection.setRng(o),n(e)}))}))})(t,n.message,(t=>{o(t?n.preprocess(e):e)}))})))),Ot=t=>{const e=t.dom.select("a:not([href])"),n=k(e,(t=>{const e=t.name||t.id;return e?[{text:e,value:"#"+e}]:[]}));return n.length>0?Optional.some([{text:"None",value:""}].concat(n)):Optional.none()},yt=t=>{const e=P(t);return e.length>0?j.sanitize(e):Optional.none()},xt=t=>{try{return Optional.some(JSON.parse(t))}catch(e){return Optional.none()}},bt=t=>{const e=e=>t.convertURL(e.value||e.url||"","href"),n=N(t);return new Promise((t=>{o(n)?fetch(n).then((t=>t.ok?t.text().then(xt):Promise.reject())).then(t,(()=>t(Optional.none()))):u(n)?n((e=>t(Optional.some(e)))):t(Optional.from(n))})).then((t=>t.bind(j.sanitizeWith(e)).map((t=>{if(t.length>0){return[{text:"None",value:""}].concat(t)}return t}))))},_t=(t,e)=>{const n=E(t);if(n.length>0){const o=y(e,"_blank"),r=t=>X(j.getValue(t),o);return(!1===L(t)?j.sanitizeWith(r):j.sanitize)(n)}return Optional.none()},wt=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],Ct=t=>{const e=T(t);return l(e)?j.sanitize(e).orThunk((()=>Optional.some(wt))):!1===e?Optional.none():Optional.some(wt)},Nt=(t,e,n)=>{const o=t.getAttrib(e,n);return null!==o&&o.length>0?Optional.some(o):Optional.none()},At=(t,e)=>bt(t).then((n=>{const o=((t,e)=>{const n=t.dom,o=nt(t)?Optional.some(tt(t.selection,e)):Optional.none(),r=e.bind((t=>Optional.from(n.getAttrib(t,"href")))),l=e.bind((t=>Optional.from(n.getAttrib(t,"target")))),a=e.bind((t=>Nt(n,t,"rel"))),i=e.bind((t=>Nt(n,t,"class")));return{url:r,text:o,title:e.bind((t=>Nt(n,t,"title"))),target:l,rel:a,linkClass:i}})(t,e);return{anchor:o,catalogs:{targets:Ct(t),rels:_t(t,o.target),classes:yt(t),anchor:Ot(t),link:n},optNode:e,flags:{titleEnabled:R(t)}}})),St=t=>{const e=(t=>{const e=Y(t);return At(t,e)})(t);e.then((e=>{const n=((t,e)=>n=>{const o=n.getData();if(!o.url.value)return st(t),void n.close();const r=t=>Optional.from(o[t]).filter((n=>!y(e.anchor[t],n))),l={href:o.url.value,text:r("text"),target:r("target"),rel:r("rel"),class:r("linkClass"),title:r("title")},a={href:o.url.value,attach:void 0!==o.url.meta&&o.url.meta.attach?o.url.meta.attach:d};kt(t,l).then((e=>{it(t,a,e)})),n.close()})(t,e);return((t,e,n)=>{const o=t.anchor.text.map((()=>({name:"text",type:"input",label:"Text to display"}))).toArray(),r=t.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],l=((t,e)=>{const n=t.anchor,o=n.url.getOr("");return{url:{value:o,meta:{original:{value:o}}},text:n.text.getOr(""),title:n.title.getOr(""),anchor:o,link:o,rel:n.rel.getOr(""),target:n.target.or(e).getOr(""),linkClass:n.linkClass.getOr("")}})(t,Optional.from(A(n))),a=t.catalogs,i=mt(l,a);return{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:v([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],o,r,x([a.anchor.map(j.createUi("anchor","Anchors")),a.rels.map(j.createUi("rel","Rel")),a.targets.map(j.createUi("target","Open link in...")),a.link.map(j.createUi("link","Link list")),a.classes.map(j.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:l,onChange:(t,{name:e})=>{i.onChange(t.getData,{name:e}).each((e=>{t.setData(e)}))},onSubmit:e}})(e,n,t)})).then((e=>{t.windowManager.open(e)}))};var Tt=tinymce.util.Tools.resolve("tinymce.util.VK");const Et=t=>{const e=document.createElement("a");e.target="_blank",e.href=t,e.rel="noreferrer noopener";const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),((t,e)=>{document.body.appendChild(t),t.dispatchEvent(e),document.body.removeChild(t)})(e,n)},Pt=(t,e)=>t.dom.getParent(e,"a[href]"),Rt=t=>Pt(t,t.selection.getStart()),Lt=(t,e)=>{if(e){const n=Q(e);if(/^#/.test(n)){const e=t.dom.select(n);e.length&&t.selection.scrollIntoView(e[0],!0)}else Et(e.href)}},Mt=t=>()=>{t.execCommand("mceLink",!1,{dialog:!0})},Dt=t=>()=>{Lt(t,Rt(t))},Ut=(t,e)=>(t.on("NodeChange",e),()=>t.off("NodeChange",e)),Bt=t=>e=>{const n=()=>e.setActive(!t.mode.isReadOnly()&&Z(t,t.selection.getNode()));return n(),Ut(t,n)},It=t=>e=>{const n=()=>e.setEnabled(Z(t,t.selection.getNode()));return n(),Ut(t,n)},jt=t=>e=>{const n=e=>{return et(e)||(n=t.selection.getRng(),H(n,G).length>0);var n},o=t.dom.getParents(t.selection.getStart());return e.setEnabled(n(o)),Ut(t,(t=>e.setEnabled(n(t.parents))))},Kt=t=>{const e=e=>{const n=t.selection.getNode();return e.setEnabled(Z(t,n)),d};t.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:Bt(t)},label:"Link",predicate:e=>C(t)&&Z(t,e),initValue:()=>{return Y(t).fold((e="",()=>e),Q);var e},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:e=>{const n=t.selection.getNode();return e.setActive(Z(t,n)),Bt(t)(e)},onAction:e=>{const n=e.getValue(),o=(e=>{const n=Y(t),o=nt(t);if(n.isNone()&&o){const o=tt(t.selection,n);return Optional.some(o.length>0?o:e)}return Optional.none()})(n);it(t,{href:n,attach:d},{href:n,text:o,title:Optional.none(),rel:Optional.none(),target:Optional.none(),class:Optional.none()}),(t=>{t.selection.collapse(!1)})(t),e.hide()}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:e,onAction:e=>{st(t),e.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:e,onAction:e=>{Dt(t)(),e.hide()}}]})};t.add("link",(t=>{(t=>{const e=t.options.register;e("link_assume_external_targets",{processor:t=>{const e=o(t)||s(t);return e?!0===t?{value:1,valid:e}:"http"===t||"https"===t?{value:t,valid:e}:{value:0,valid:e}:{valid:!1,message:"Must be a string or a boolean."}},default:!1}),e("link_context_toolbar",{processor:"boolean",default:!1}),e("link_list",{processor:t=>o(t)||u(t)||g(t,r)}),e("link_default_target",{processor:"string"}),e("link_default_protocol",{processor:"string",default:"https"}),e("link_target_list",{processor:t=>s(t)||g(t,r),default:!0}),e("link_rel_list",{processor:"object[]",default:[]}),e("link_class_list",{processor:"object[]",default:[]}),e("link_title",{processor:"boolean",default:!0}),e("allow_unsafe_link_target",{processor:"boolean",default:!1}),e("link_quicklink",{processor:"boolean",default:!1})})(t),(t=>{t.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Mt(t),onSetup:Bt(t)}),t.ui.registry.addButton("openlink",{icon:"new-tab",tooltip:"Open link",onAction:Dt(t),onSetup:It(t)}),t.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:()=>st(t),onSetup:jt(t)})})(t),(t=>{t.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Dt(t),onSetup:It(t)}),t.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:Mt(t)}),t.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:()=>st(t),onSetup:jt(t)})})(t),(t=>{t.ui.registry.addContextMenu("link",{update:e=>et(t.dom.getParents(e,"a"))?"link unlink openlink":"link"})})(t),Kt(t),(t=>{t.on("click",(e=>{const n=Pt(t,e.target);n&&Tt.metaKeyPressed(e)&&(e.preventDefault(),Lt(t,n))})),t.on("keydown",(e=>{if(!e.isDefaultPrevented()&&13===e.keyCode&&(t=>!0===t.altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey)(e)){const n=Rt(t);n&&(e.preventDefault(),Lt(t,n))}}))})(t),(t=>{t.addCommand("mceLink",((e,n)=>{!0!==(null==n?void 0:n.dialog)&&M(t)?t.dispatch("contexttoolbar-show",{toolbarKey:"quicklink"}):St(t)}))})(t),(t=>{t.addShortcut("Meta+K","",(()=>{t.execCommand("mceLink")}))})(t)}))}();