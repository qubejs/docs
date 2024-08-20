"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[457],{27457:(s,e,a)=>{a.r(e),a.d(e,{components:()=>V});a(92221);var n=a(85608),i=a(31085),t=a(66820),o=a(78008),l=(a(68037),a(30936),a(14041));const r={default:({iconName:s,size:e,variant:a,buttonText:n,children:t})=>(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsx)(o.A,{className:"sq-custom-button__icon",name:s,size:e,variant:a}),t&&(0,i.jsx)("div",{className:"sq-custom-button__info-text",children:t}),(0,i.jsx)("div",{className:"sq-custom-button__text",children:n})]})},c=s=>{var{classes:e,className:a="",actionValue:t,buttonText:o,iconName:l="",size:c="normal",template:d="default",variant:m="default",color:u="default",onClick:x,analytics:p={},onAnalytics:g,children:h}=s,v=(0,n.__rest)(s,["classes","className","actionValue","buttonText","iconName","size","template","variant","color","onClick","analytics","onAnalytics","children"]);const{disabled:N,target:b,href:j,tagName:_="div"}=v,{click:f}=p,P=r[d]||r.default,y=_,q={};return j&&(q.href=j),(0,i.jsx)(y,Object.assign({role:"button",target:b},q,{tabIndex:N?"-1":"0",className:`sq-custom-button ${a} ${c} ${d?" sq-custom-button-tpl--"+d:""} \n      ${u?" sq-custom-button--"+u:""}\n      ${N?" sq-custom-button--disabled":""}\n      `,onKeyPress:s=>{"Enter"!==s.key&&"Space"!==s.key||(!N&&x&&x(s),!N&&f&&g&&g(f))},onClick:s=>{!N&&x&&x(s),!N&&f&&g&&g(f)},children:(0,i.jsx)("div",{className:"sq-custom-button__container",children:(0,i.jsx)(P,{iconName:l,size:c,buttonText:o,variant:v.variant,children:h})})}))};c.propTypes={classes:t.P.object,className:t.P.string,size:t.P.string,disabled:t.P.bool,actionValue:t.P.string,onAnalytics:t.P.func,analytics:t.P.object,buttonText:t.P.string,iconName:t.P.string};a(96656),a(68374);var d=a(49446),m=a(80484),u=a(24640),x=a(27502),p=a(41245);const g=({className:s="",value:e,iconName:a,iconSize:n="small",iconColor:t,variant:l="default",color:r="primary"})=>(0,i.jsx)("div",{className:`sq-field-text ${s} sq-field-text--${l} sq-field-text--${r}`,children:(0,i.jsxs)("div",{className:"sq-field-text__container",children:[a&&(0,i.jsx)(o.A,{name:a,size:n,variant:t}),e]})});g.propTypes={defaultValue:t.P.string,value:t.P.any,row:t.P.object,tag:t.P.string,parentTag:t.P.string};var h=a(11398);const v=({className:s="",label:e,iconName:a="add",disabled:n,color:t="primary",position:l="bottom-right",onClick:r,analytics:c={},onAnalytics:d,size:m})=>(0,i.jsx)(h.A,{className:`sq-fab-button ${s} ${l}`,color:t,"aria-label":e,disabled:n,onClick:s=>{const{click:e}=c;r&&r(s),e&&d(e)},children:(0,i.jsx)(o.A,{name:a,size:m,variant:"white"})});v.propTypes={buttonText:t.P.string,className:t.P.string,onAnalytics:t.P.func,onClick:t.P.func};const N=({text:s="Please wait..."})=>(0,i.jsx)("div",{className:"in-proccess",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"white",position:"fixed",height:"100%",width:"100%",zIndex:"999999999"},children:(0,i.jsx)("div",{className:"in-progress-text",style:{color:"#233f45"},children:s})});N.propTypes={text:t.P.string};var b=a(82308),j=a(74618),_=a(24054),f=a(68688),P=a(78722),y=a(52990),q=a(95484);const A={success:b.A,warning:q.A,error:j.A,info:_.A};function C(s){const e={},{className:a,message:t,onClose:o,variant:l}=s,r=(0,n.__rest)(s,["className","message","onClose","variant"]),c=A[l];return(0,i.jsx)(y.A,Object.assign({className:`${e[l]} ${a}`,"aria-describedby":"client-snackbar",message:(0,i.jsxs)("span",{id:"client-snackbar",className:e.message,children:[(0,i.jsx)(c,{className:`${e.icon} ${e.iconVariant}`}),t]}),action:[(0,i.jsx)(P.A,{"aria-label":"Close",color:"inherit",onClick:o,children:(0,i.jsx)(f.A,{className:e.icon})},"close")]},r))}C.propTypes={className:t.P.string,message:t.P.node,onClose:t.P.func,variant:t.P.oneOf(["success","warning","error","info"]).isRequired};a(34237);var k=a(77376);const T=[{min:80,className:"red"},{min:50,className:"orange"},{min:0,className:"green"}],z=({variant:s="determinate",color:e="primary",value:a=0,className:n=""})=>{const t=a>100?100:a||0;let o;return T.forEach((s=>{if(!o&&a>=s.min)return o=s.className,!1})),(0,i.jsx)("div",{className:`sq-progress-indicator ${n} sq-progress-indicator--${o}`,children:(0,i.jsxs)("div",{className:"sq-progress-indicator__container",children:[(0,i.jsx)("div",{className:"sq-progress-indicator__bar",children:(0,i.jsx)(k.A,{className:"sq-progress-indicator__progress-bar",color:e,variant:s,value:t})}),(0,i.jsxs)("div",{className:"sq-progress-indicator__label",children:[t.toString(),t<1*a?"+":"","%"]})]})})};z.propTypes={value:t.P.number,type:t.P.string,className:t.P.string,text:t.P.string};var w=a(54184),$=a(22214);const S={default:"",error:"erroroutline",warning:"warning",info:"info"},O={default:"default",error:"error",warning:"warning",info:"info"},I=({fullScreen:s=!1,open:e=!1,isLoading:a=!1,title:t,content:l,onClose:r,severity:c="default",actions:d=[],onAction:m})=>(0,i.jsxs)("div",{className:"sq-simple-dialog",children:[(0,i.jsx)("div",{className:"sq-simple-dialog__overlay"}),(0,i.jsxs)("div",{className:"sq-simple-dialog__outer-container",children:[(0,i.jsxs)("div",{className:"sq-simple-dialog__header",children:[S[c]&&(0,i.jsx)("span",{className:"sq-dialog__d-icon",children:(0,i.jsx)(o.A,{size:"large",variant:O[c],name:S[c]})}),(0,i.jsx)("h4",{children:t}),(0,i.jsx)("div",{className:"sq-simple-dialog__close",children:(0,i.jsx)(o.A,{name:"close",onClick:()=>{r&&r()}})})]}),(0,i.jsx)("div",{className:"sq-simple-dialog__content",children:(0,i.jsxs)("div",{className:"sq-simple-dialog__content-body",children:[a&&(0,i.jsx)("div",{className:"sq-simple-dialog__loader",children:(0,i.jsx)($.A,{})}),l]})}),(0,i.jsx)("div",{className:"sq-simple-dialog__actions",children:d&&d.map(((s,e)=>{const{actionType:a,buttonText:t,color:o="secondary",className:l=""}=s;return(0,n.__rest)(s,["actionType","buttonText","color","className"]),(0,i.jsx)(w.A,{onClick:()=>(s=>{m&&m(s)})(s),className:l,color:o,children:t},e)}))})]})]});I.propTypes={open:t.P.bool,title:t.P.string,isLoading:t.P.bool,type:t.P.string,content:t.P.any,actions:t.P.array,onAction:t.P.func,onClose:t.P.func};var V=Object.freeze({__proto__:null,CustomButton:c,CustomMenu:({disabled:s,value:e,defaultText:a="Untitled",type:n="Button",header:t="No header",subHeader:r="",options:c=[],iconName:g="Save",iconSize:h="normal",className:v="",title:N,onAction:b})=>{const[j,_]=l.useState(null),f=Boolean(j),P=()=>{_(null)};return(0,i.jsxs)("div",{className:`sq-custom-menu ${v}`,children:[(0,i.jsx)(p.A,{disabled:s,buttonText:e||a,onClick:s=>{_(s.currentTarget)},variant:"outlined",iconName:"arrow-down",iconSize:"small",iconDirection:"right"}),(0,i.jsxs)(d.A,{anchorEl:j,open:f,className:"sq-custom-menu__menu",onClose:P,onClick:P,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",minWidth:100,mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,i.jsxs)("div",{className:"sq-custom-menu__header",children:[(0,i.jsx)("div",{className:"sq-custom-menu__user-name",children:t}),r&&(0,i.jsx)("div",{className:"sq-custom-menu__email",children:r})]}),c.map(((s,a)=>"divider"===s?(0,i.jsx)(x.A,{},a):(0,i.jsxs)(m.A,{disabled:s.disabled,onClick:a=>{return n=s,b&&b({value:e},n),void P();var n},children:[(0,i.jsx)(u.A,{children:(0,i.jsx)(o.A,{size:s.iconSize,className:s.className,name:s.iconName})}),s.buttonText]},a)))]})]})},FieldText:g,FloatingActionButton:v,InProgress:N,PopupMessage:C,ProgressIndicator:z,SimpleDialog:I})}}]);