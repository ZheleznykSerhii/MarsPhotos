"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[727],{1687:function(e,r,a){a.d(r,{$A:function(){return l},e4:function(){return d},ux:function(){return c},wf:function(){return u}});var t=a(5861),n=a(7757),o=a.n(n),i=a(2837),s=a.n(i),l=function(){var e=(0,t.Z)(o().mark((function e(r,a,t,n){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(r,"/photos?sol=").concat(a,"&page=").concat(t).concat(n,"&api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6"));case 2:return i=e.sent,e.abrupt("return",i.data.photos);case 4:case"end":return e.stop()}}),e)})));return function(r,a,t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(o().mark((function e(r,a,t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(r,"/photos?sol=").concat(a).concat(t,"&api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6"));case 2:return n=e.sent,e.abrupt("return",n.data.photos);case 4:case"end":return e.stop()}}),e)})));return function(r,a,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,t.Z)(o().mark((function e(r){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.nasa.gov/mars-photos/api/v1/manifests/".concat(r,"/?api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6"));case 2:return e.next=4,e.sent;case 4:return a=e.sent,e.abrupt("return",a.data.photo_manifest);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(o().mark((function e(r,a){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(r,"/photos?sol=").concat(a,"$&api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6"));case 2:return t=e.sent,e.abrupt("return",t.data.photos);case 4:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}()},4727:function(e,r,a){a.r(r),a.d(r,{default:function(){return be}});var t=a(5861),n=a(2982),o=a(885),i=a(7757),s=a.n(i),l=a(2791),u=a.t(l,2),c=a(1687),d="dataNotFound_container__LeihN",p="dataNotFound_head__O93Qn",f="dataNotFound_reason__b2JXa",m=a(184),v=function(e){var r=e.solValue,a=e.roverValue,t=e.\u0441uriosityManifest;return(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("p",{className:p,children:"Nothing was found for your request"}),(0,m.jsxs)("p",{className:f,children:[a," didn't send any photos for sol number ",r,"."," ",r>t.max_sol&&"Please note, that you paste sol nr. ".concat(r,", but the largest value is ").concat(t.max_sol),r<0&&"Sol can not be less than 1"]})]})},h={header:"header_header__9sbjB",header_card:"header_header_card__8NScK",input:"header_input__Dm+J-",inputGroup:"header_inputGroup__Ep+k-",solHeader:"header_solHeader__w+sM+"},x=a(9891),Z=a(8881),b=a(7462),g=a(3366),S=a(8182),y=a(2039),w=0;var _=u.useId;function j(e){if(void 0!==_){var r=_();return null!=e?e:r}return function(e){var r=l.useState(e),a=(0,o.Z)(r,2),t=a[0],n=a[1],i=e||t;return l.useEffect((function(){null==t&&n("mui-".concat(w+=1))}),[t]),i}(e)}var k=a(9553),C=a(551),N=a(7078),F=a(4527),R=a(8029),q=a(4942),P=a(6147),M=a(2930),z=a(4036),W=a(2354),E=a(2152);function T(e){return(0,W.Z)("MuiFormLabel",e)}var A=(0,E.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),I=["children","className","color","component","disabled","error","filled","focused","required"],L=(0,k.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return(0,b.Z)({},r.root,"secondary"===a.color&&r.colorSecondary,a.filled&&r.filled)}})((function(e){var r,a=e.theme,t=e.ownerState;return(0,b.Z)({color:(a.vars||a).palette.text.secondary},a.typography.body1,(r={lineHeight:"1.4375em",padding:0,position:"relative"},(0,q.Z)(r,"&.".concat(A.focused),{color:(a.vars||a).palette[t.color].main}),(0,q.Z)(r,"&.".concat(A.disabled),{color:(a.vars||a).palette.text.disabled}),(0,q.Z)(r,"&.".concat(A.error),{color:(a.vars||a).palette.error.main}),r))})),G=(0,k.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,q.Z)({},"&.".concat(A.error),{color:(r.vars||r).palette.error.main})})),B=l.forwardRef((function(e,r){var a=(0,C.Z)({props:e,name:"MuiFormLabel"}),t=a.children,n=a.className,o=a.component,i=void 0===o?"label":o,s=(0,g.Z)(a,I),l=(0,M.Z)(),u=(0,P.Z)({props:a,muiFormControl:l,states:["color","required","focused","disabled","error","filled"]}),c=(0,b.Z)({},a,{color:u.color||"primary",component:i,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),d=function(e){var r=e.classes,a=e.color,t=e.focused,n=e.disabled,o=e.error,i=e.filled,s=e.required,l={root:["root","color".concat((0,z.Z)(a)),n&&"disabled",o&&"error",i&&"filled",t&&"focused",s&&"required"],asterisk:["asterisk",o&&"error"]};return(0,y.Z)(l,T,r)}(c);return(0,m.jsxs)(L,(0,b.Z)({as:i,ownerState:c,className:(0,S.Z)(d.root,n),ref:r},s,{children:[t,u.required&&(0,m.jsxs)(G,{ownerState:c,"aria-hidden":!0,className:d.asterisk,children:["\u2009","*"]})]}))}));function O(e){return(0,W.Z)("MuiInputLabel",e)}(0,E.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var V=["disableAnimation","margin","shrink","variant"],H=(0,k.ZP)(B,{shouldForwardProp:function(e){return(0,k.FO)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[(0,q.Z)({},"& .".concat(A.asterisk),r.asterisk),r.root,a.formControl&&r.formControl,"small"===a.size&&r.sizeSmall,a.shrink&&r.shrink,!a.disableAnimation&&r.animated,r[a.variant]]}})((function(e){var r=e.theme,a=e.ownerState;return(0,b.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},a.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===a.size&&{transform:"translate(0, 17px) scale(1)"},a.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!a.disableAnimation&&{transition:r.transitions.create(["color","transform","max-width"],{duration:r.transitions.duration.shorter,easing:r.transitions.easing.easeOut})},"filled"===a.variant&&(0,b.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===a.size&&{transform:"translate(12px, 13px) scale(1)"},a.shrink&&(0,b.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===a.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===a.variant&&(0,b.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===a.size&&{transform:"translate(14px, 9px) scale(1)"},a.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))})),J=l.forwardRef((function(e,r){var a=(0,C.Z)({name:"MuiInputLabel",props:e}),t=a.disableAnimation,n=void 0!==t&&t,o=a.shrink,i=(0,g.Z)(a,V),s=(0,M.Z)(),l=o;"undefined"===typeof l&&s&&(l=s.filled||s.focused||s.adornedStart);var u=(0,P.Z)({props:a,muiFormControl:s,states:["size","variant","required"]}),c=(0,b.Z)({},a,{disableAnimation:n,formControl:s,shrink:l,size:u.size,variant:u.variant,required:u.required}),d=function(e){var r=e.classes,a=e.formControl,t=e.size,n=e.shrink,o={root:["root",a&&"formControl",!e.disableAnimation&&"animated",n&&"shrink","small"===t&&"sizeSmall",e.variant],asterisk:[e.required&&"asterisk"]},i=(0,y.Z)(o,O,r);return(0,b.Z)({},r,i)}(c);return(0,m.jsx)(H,(0,b.Z)({"data-shrink":l,ownerState:c,ref:r},i,{classes:d}))})),U=a(5470);var D=function(e,r){return l.isValidElement(e)&&-1!==r.indexOf(e.type.muiName)},Y=a(3840);function $(e){return(0,W.Z)("MuiFormControl",e)}(0,E.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var K=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Q=(0,k.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return(0,b.Z)({},r.root,r["margin".concat((0,z.Z)(a.margin))],a.fullWidth&&r.fullWidth)}})((function(e){var r=e.ownerState;return(0,b.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===r.margin&&{marginTop:16,marginBottom:8},"dense"===r.margin&&{marginTop:8,marginBottom:4},r.fullWidth&&{width:"100%"})})),X=l.forwardRef((function(e,r){var a=(0,C.Z)({props:e,name:"MuiFormControl"}),t=a.children,n=a.className,i=a.color,s=void 0===i?"primary":i,u=a.component,c=void 0===u?"div":u,d=a.disabled,p=void 0!==d&&d,f=a.error,v=void 0!==f&&f,h=a.focused,x=a.fullWidth,Z=void 0!==x&&x,w=a.hiddenLabel,_=void 0!==w&&w,j=a.margin,k=void 0===j?"none":j,N=a.required,F=void 0!==N&&N,R=a.size,q=void 0===R?"medium":R,P=a.variant,M=void 0===P?"outlined":P,W=(0,g.Z)(a,K),E=(0,b.Z)({},a,{color:s,component:c,disabled:p,error:v,fullWidth:Z,hiddenLabel:_,margin:k,required:F,size:q,variant:M}),T=function(e){var r=e.classes,a=e.margin,t=e.fullWidth,n={root:["root","none"!==a&&"margin".concat((0,z.Z)(a)),t&&"fullWidth"]};return(0,y.Z)(n,$,r)}(E),A=l.useState((function(){var e=!1;return t&&l.Children.forEach(t,(function(r){if(D(r,["Input","Select"])){var a=D(r,["Select"])?r.props.input:r;a&&(0,U.B7)(a.props)&&(e=!0)}})),e})),I=(0,o.Z)(A,2),L=I[0],G=I[1],B=l.useState((function(){var e=!1;return t&&l.Children.forEach(t,(function(r){D(r,["Input","Select"])&&(0,U.vd)(r.props,!0)&&(e=!0)})),e})),O=(0,o.Z)(B,2),V=O[0],H=O[1],J=l.useState(!1),X=(0,o.Z)(J,2),ee=X[0],re=X[1];p&&ee&&re(!1);var ae=void 0===h||p?ee:h,te=l.useCallback((function(){H(!0)}),[]),ne={adornedStart:L,setAdornedStart:G,color:s,disabled:p,error:v,filled:V,focused:ae,fullWidth:Z,hiddenLabel:_,size:q,onBlur:function(){re(!1)},onEmpty:l.useCallback((function(){H(!1)}),[]),onFilled:te,onFocus:function(){re(!0)},registerEffect:undefined,required:F,variant:M};return(0,m.jsx)(Y.Z.Provider,{value:ne,children:(0,m.jsx)(Q,(0,b.Z)({as:c,ownerState:E,className:(0,S.Z)(T.root,n),ref:r},W,{children:t}))})}));function ee(e){return(0,W.Z)("MuiFormHelperText",e)}var re,ae=(0,E.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),te=["children","className","component","disabled","error","filled","focused","margin","required","variant"],ne=(0,k.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,a.size&&r["size".concat((0,z.Z)(a.size))],a.contained&&r.contained,a.filled&&r.filled]}})((function(e){var r,a=e.theme,t=e.ownerState;return(0,b.Z)({color:(a.vars||a).palette.text.secondary},a.typography.caption,(r={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,q.Z)(r,"&.".concat(ae.disabled),{color:(a.vars||a).palette.text.disabled}),(0,q.Z)(r,"&.".concat(ae.error),{color:(a.vars||a).palette.error.main}),r),"small"===t.size&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})})),oe=l.forwardRef((function(e,r){var a=(0,C.Z)({props:e,name:"MuiFormHelperText"}),t=a.children,n=a.className,o=a.component,i=void 0===o?"p":o,s=(0,g.Z)(a,te),l=(0,M.Z)(),u=(0,P.Z)({props:a,muiFormControl:l,states:["variant","size","disabled","error","filled","focused","required"]}),c=(0,b.Z)({},a,{component:i,contained:"filled"===u.variant||"outlined"===u.variant,variant:u.variant,size:u.size,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),d=function(e){var r=e.classes,a=e.contained,t=e.size,n=e.disabled,o=e.error,i=e.filled,s=e.focused,l=e.required,u={root:["root",n&&"disabled",o&&"error",t&&"size".concat((0,z.Z)(t)),a&&"contained",s&&"focused",i&&"filled",l&&"required"]};return(0,y.Z)(u,ee,r)}(c);return(0,m.jsx)(ne,(0,b.Z)({as:i,ownerState:c,className:(0,S.Z)(d.root,n),ref:r},s,{children:" "===t?re||(re=(0,m.jsx)("span",{className:"notranslate",children:"\u200b"})):t}))}));function ie(e){return(0,W.Z)("MuiTextField",e)}(0,E.Z)("MuiTextField",["root"]);var se=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],le={standard:N.Z,filled:F.Z,outlined:R.Z},ue=(0,k.ZP)(X,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),ce=l.forwardRef((function(e,r){var a=(0,C.Z)({props:e,name:"MuiTextField"}),t=a.autoComplete,n=a.autoFocus,o=void 0!==n&&n,i=a.children,s=a.className,l=a.color,u=void 0===l?"primary":l,c=a.defaultValue,d=a.disabled,p=void 0!==d&&d,f=a.error,v=void 0!==f&&f,h=a.FormHelperTextProps,x=a.fullWidth,w=void 0!==x&&x,_=a.helperText,k=a.id,N=a.InputLabelProps,F=a.inputProps,R=a.InputProps,q=a.inputRef,P=a.label,M=a.maxRows,z=a.minRows,W=a.multiline,E=void 0!==W&&W,T=a.name,A=a.onBlur,I=a.onChange,L=a.onFocus,G=a.placeholder,B=a.required,O=void 0!==B&&B,V=a.rows,H=a.select,U=void 0!==H&&H,D=a.SelectProps,Y=a.type,$=a.value,K=a.variant,Q=void 0===K?"outlined":K,X=(0,g.Z)(a,se),ee=(0,b.Z)({},a,{autoFocus:o,color:u,disabled:p,error:v,fullWidth:w,multiline:E,required:O,select:U,variant:Q}),re=function(e){var r=e.classes;return(0,y.Z)({root:["root"]},ie,r)}(ee);var ae={};"outlined"===Q&&(N&&"undefined"!==typeof N.shrink&&(ae.notched=N.shrink),ae.label=P),U&&(D&&D.native||(ae.id=void 0),ae["aria-describedby"]=void 0);var te=j(k),ne=_&&te?"".concat(te,"-helper-text"):void 0,ce=P&&te?"".concat(te,"-label"):void 0,de=le[Q],pe=(0,m.jsx)(de,(0,b.Z)({"aria-describedby":ne,autoComplete:t,autoFocus:o,defaultValue:c,fullWidth:w,multiline:E,name:T,rows:V,maxRows:M,minRows:z,type:Y,value:$,id:te,inputRef:q,onBlur:A,onChange:I,onFocus:L,placeholder:G,inputProps:F},ae,R));return(0,m.jsxs)(ue,(0,b.Z)({className:(0,S.Z)(re.root,s),disabled:p,error:v,fullWidth:w,ref:r,required:O,color:u,variant:Q,ownerState:ee},X,{children:[null!=P&&""!==P&&(0,m.jsx)(J,(0,b.Z)({htmlFor:te,id:ce},N,{children:P})),U?(0,m.jsx)(Z.Z,(0,b.Z)({"aria-describedby":ne,id:te,labelId:ce,value:$,input:pe},D,{children:i})):pe,_&&(0,m.jsx)(oe,(0,b.Z)({id:ne},h,{children:_}))]}))})),de=function(e){var r=e.handleChange,a=e.\u0441uriosityManifest,t=e.handleCamera,n=e.handleSol,o=e.solValue,i=e.roverValue,s=e.currentData,l=e.unique;return(0,m.jsxs)("div",{className:o?h.header_card:h.header,children:[(0,m.jsxs)("div",{className:h.inputGroup,children:[(0,m.jsx)("span",{children:"Rover: "}),(0,m.jsxs)(Z.Z,{name:"rover",onChange:r,className:h.input,value:i,children:[(0,m.jsx)(x.Z,{value:"curiosity",children:"Curiosity"}),(0,m.jsx)(x.Z,{value:"spirit",children:"Spirit"}),(0,m.jsx)(x.Z,{value:"opportunity",children:"Opportunity"})]})]}),(0,m.jsxs)("div",{className:h.inputGroup,children:[(0,m.jsx)("span",{className:h.solHeader,children:"Sol: "}),(0,m.jsxs)("div",{children:[" ",(0,m.jsx)(ce,{className:h.input,required:!0,name:"sol",type:"number",onChange:n,value:o,variant:"filled",label:"The last available is ".concat(a.max_sol),InputLabelProps:{style:{color:"#000000"}},InputProps:{style:{backgroundColor:"#fff"}}})]})]}),(0,m.jsxs)("div",{className:h.inputGroup,children:[(0,m.jsx)("span",{className:h.CameraHeader,children:"Camera: "}),(0,m.jsxs)(Z.Z,{name:"camera",onChange:t,className:h.input,value:s,disabled:!o,children:[(0,m.jsx)(x.Z,{value:"All",children:"All"}),l.map((function(e){return(0,m.jsx)(x.Z,{value:e,children:e},e)}))]})]})]})},pe=a(477),fe=a(4986),me={flexContainer:"photosGallery_flexContainer__Tde0B",cardImg:"photosGallery_cardImg__UeQqV",cardTexts:"photosGallery_cardTexts__JUMpV",flexButton:"photosGallery_flexButton__OvWp6",cardParams:"photosGallery_cardParams__ZANgb",button:"photosGallery_button__AqZ4y"},ve=function(e){var r=e.posts,a=e.pagination,t=e.page,n=e.setPage,i=e.cards,s=(0,l.useState)(12),u=(0,o.Z)(s,2),c=u[0],d=u[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:me.flexContainer,children:r.slice(0,c).map((function(e){return(0,m.jsxs)("div",{className:me.card,children:[(0,m.jsx)("img",{src:e.img_src,alt:"Mars photos",className:me.cardImg})," ",(0,m.jsxs)("div",{className:me.cardTexts,children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:me.cardParams,children:["Rover: ",e.rover.name]}),(0,m.jsxs)("div",{className:me.cardParams,children:["Camera: ",e.camera.full_name]})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:me.cardParams,children:["Sol: ",e.sol]}),(0,m.jsxs)("div",{className:me.cardParams,children:["Earth date: ",e.earth_date]})]})]})]},e.id)}))}),(0,m.jsx)("div",{className:me.flexButton,children:12===c&&a.length>12&&(0,m.jsx)("button",{onClick:function(){return d(25)},className:me.button,children:"Load more"})}),a.length>24&&12!==c&&(0,m.jsx)(fe.Z,{pagination:a,page:t,setPage:n,cards:i})]})},he="startPage_container__WBMzp",xe="startPage_text__h1vlv",Ze=function(){return(0,m.jsxs)("div",{className:he,children:[(0,m.jsx)("h1",{children:"Explore NASA`s expeditions to Mars"}),(0,m.jsx)("p",{className:xe,children:"The website provides an ability for the user to select a Rover(Curiosity, Opportunity, Spirit), Camera(Front, Rear, \u2026) and Sol(Mars day). After the Rover, Camera and Sol were selected, the website shows the images were done by the Rover."})]})},be=function(){var e=(0,l.useState)("curiosity"),r=(0,o.Z)(e,2),a=r[0],i=r[1],u=(0,l.useState)("All"),d=(0,o.Z)(u,2),p=d[0],f=d[1],h=(0,l.useState)(1),x=(0,o.Z)(h,2),Z=x[0],b=x[1],g=(0,l.useState)([]),S=(0,o.Z)(g,2),y=S[0],w=S[1],_=(0,l.useState)([]),j=(0,o.Z)(_,2),k=j[0],C=j[1],N=(0,l.useState)(""),F=(0,o.Z)(N,2),R=F[0],q=F[1],P=(0,l.useState)([]),M=(0,o.Z)(P,2),z=M[0],W=M[1],E=(0,l.useState)("All"),T=(0,o.Z)(E,2),A=T[0],I=T[1],L=(0,l.useState)(!1),G=(0,o.Z)(L,2),B=G[0],O=G[1],V=(0,l.useState)(),H=(0,o.Z)(V,2),J=H[0],U=H[1],D=(0,l.useState)([]),Y=(0,o.Z)(D,2),$=Y[0],K=Y[1],Q=$.map((function(e){return e.camera.name})),X=(0,n.Z)(new Set(Q));return(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.$A)(a,R,Z,p);case 2:r=e.sent,w(r),O(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O(!0),e()}),[a,R,p,Z]),(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.wf)(a,R,p).then((function(e){return W(e)}));case 2:O(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O(!0),e()}),[a,R,p]),(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.ux)(a);case 2:r=e.sent,O(!1),C(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O(!0),e(),b(1)}),[a]),(0,l.useEffect)((function(){b(1)}),[R]),(0,l.useEffect)((function(){U(window.innerWidth)}),[J]),(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.e4)(a,R).then((function(e){return K(e)}));case 2:O(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O(!0),e()}),[a,R,Z]),(0,l.useEffect)((function(){O(!0),f("All"),I("All"),O(!1)}),[a,R]),(0,l.useEffect)((function(){q("")}),[a]),(0,l.useEffect)((function(){b(1)}),[A]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(de,{handleChange:function(e){var r=e.target.value;i(r)},"\u0441uriosityManifest":k,handleCamera:function(e){var r=e.target.value;f("All"!==r?"&camera=".concat(r):""),I(r)},handleSol:function(e){var r=e.target.value;q(r)},solValue:R,roverValue:a,currentData:A,unique:X}),B?(0,m.jsx)(pe.Z,{}):z.length>0?(0,m.jsx)(ve,{posts:y,pagination:z,page:Z,setPage:b}):R?(0,m.jsx)(v,{roverValue:a,solValue:R,"\u0441uriosityManifest":k}):(0,m.jsx)(Ze,{})]})}},4986:function(e,r,a){a.d(r,{Z:function(){return i}});var t=a(7246),n="pagination_footer__IpnK3",o=a(184),i=function(e){var r=e.pagination,a=e.page,i=e.setPage;e.cards;return(0,o.jsx)("div",{className:n,children:(0,o.jsx)(t.Z,{count:Math.ceil(r.length/25),page:a,onChange:function(e,r){return i(r)}})})}}}]);
//# sourceMappingURL=727.cba0af88.chunk.js.map