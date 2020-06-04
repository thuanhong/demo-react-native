(self.webpackJsonp=self.webpackJsonp||[]).push([[9,7],{394:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(40),i=n(1),s=n(632),a=n.n(s),c=n(219),l=n(172),d=n(225),p=n(633),h=n(634),m=n(635),u=n(7);const g=e=>{let t=e.sessionID,n=e.onOpenFullview,r=e.theme;const s=Object(m.a)(t);return o.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:Object(i.css)(b.icon,"light"===r?b.externalLight:b.externalDark),onClick:n})};var f=Object(u.a)(class extends o.PureComponent{render(){const e=this.props,t=e.name,n=e.sessionID,r=e.onOpenFullview,s=e.theme;return o.createElement("div",{className:Object(i.css)(b.header)},o.createElement("h1",{className:Object(i.css)(b.title)},t),o.createElement("div",{className:Object(i.css)(b.iconContainer)},o.createElement(h.a,{content:o.createElement("p",{className:Object(i.css)(b.description)},"description")},o.createElement("button",{className:Object(i.css)(b.icon,"light"===s?b.infoLight:b.infoDark)})),n?o.createElement(g,{theme:s,sessionID:n,onOpenFullview:r}):null))}});const b=i.StyleSheet.create({header:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:0,margin:".25em .75em",backgroundColor:"inherit"},title:{lineHeight:1,fontSize:"1.2em",fontWeight:500,margin:0},iconContainer:{display:"flex",flexDirection:"row",margin:"0 .25em",backgroundColor:"inherit"},icon:{height:16,width:16,margin:8,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent",border:0,outline:0,opacity:.3,transition:".2s",":hover":{opacity:.8}},description:{margin:16},infoLight:{backgroundImage:`url(${n(637)})`},infoDark:{backgroundImage:`url(${n(638)})`},externalLight:{backgroundImage:`url(${n(519)})`},externalDark:{backgroundImage:`url(${n(520)})`}});var k=n(562),v=n(521),w=n(639),y=n(226);class x extends o.PureComponent{render(){const e=this.props,t=e.devicePreviewPlatform,n=e.devicePreviewShown,r=e.isResolving,s=e.loadingMessage,a=e.onChangeDevicePreviewPlatform,c=e.onToggleDevicePreview,l=e.platformOptions;return o.createElement(y.a,{type:r?"loading":void 0},o.createElement("div",null,r?o.createElement(w.a,null,s):null),o.createElement("div",{className:Object(i.css)(P.right)},o.createElement(k.a,{checked:n,onChange:c,label:"Preview"}),o.createElement(v.a,{disabled:!n,options:l,value:t,onValueChange:a})))}}const P=i.StyleSheet.create({loadingText:{textOverflow:"ellipsis",whiteSpace:"nowrap",padding:".5em"},right:{display:"flex",flex:1,justifyContent:"flex-end"}});var O=n(640),C=n(735),E=n(675),j=n(2),D=n(48),S=n(678),V=n(591);function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=`snack-session-${a()()}`;t.default=Object(u.a)(Object(S.a)(Object(r.b)(e=>({testConnectionMethod:e.splitTestSettings.defaultConnectionMethod}))(class extends o.PureComponent{constructor(e){super(e),$(this,"_handleClickRunOnPhone",()=>{this.props.onDeviceConnectionAttempt(),this.setState({currentModal:"device-instructions"})}),$(this,"_handleHideModal",()=>{this.setState({currentModal:null})}),$(this,"_handleOpenFullView",()=>{try{this.props.entry&&"content"in this.props.entry.item&&localStorage.setItem(_,JSON.stringify({code:this.props.entry.item.content,platform:this.props.query.platform}))}catch(e){}}),$(this,"_toggleDevicePreview",()=>this.setState(e=>({devicePreviewShown:!e.devicePreviewShown}))),$(this,"_changeDevicePreviewPlatform",e=>this.setState({devicePreviewPlatform:e})),$(this,"_changeConnectionMethod",e=>this.setState({deviceConnectionMethod:e}));let t=this.props.testConnectionMethod||"device-id";"account"===t&&(t="qr-code");const n=V.a({sdkVersion:e.sdkVersion,supportedPlatformsQueryParam:e.supportedPlatformsQueryParam});this.state={devicePreviewShown:"false"!==e.query.preview,platformOptions:n,devicePreviewPlatform:V.b({options:n,sdkVersion:e.sdkVersion,requestedPlatform:e.query.platform}),deviceConnectionMethod:t,currentModal:null}}render(){const e=this.state,t=e.devicePreviewShown,r=e.devicePreviewPlatform,s=this.props,a=s.name,h=s.description,m=s.channel,u=s.entry,g=s.params,b=s.isResolving,k=s.loadingMessage,v=s.previewRef,w=s.onDeviceConnectionAttempt,y=s.wasUpgraded,P=s.theme;return o.createElement("main",{className:Object(i.css)(N.container,"light"===P?N.backgroundLight:N.backgroundDark)},o.createElement(p.a,{name:a,description:h,params:g}),o.createElement(d.a,null,o.createElement(f,{name:a,description:h,sessionID:_,onOpenFullview:this._handleOpenFullView}),o.createElement("a",{href:"https://expo.io",target:"_blank",rel:"noopener noreferrer",className:Object(i.css)(N.logo)},o.createElement("img",{className:Object(i.css)(N.wordmark),src:n("light"===P?847:848)}))),o.createElement("div",{className:Object(i.css)(N.editorArea)},o.createElement(E.default,{path:u.item.path,value:u.item.content,onValueChange:this.props.onChangeCode,lineNumbers:"off"}),t?o.createElement(l.a,{load:()=>n.e(5).then(n.bind(null,627))},e=>{let t=e.loaded,n=e.data;return t&&n?o.createElement(n,{screenOnly:!0,supportedPlatformsQueryParam:this.props.supportedPlatformsQueryParam,previewRef:v,channel:m,snackId:g.id,sdkVersion:this.props.sdkVersion,platform:r,onChangePlatform:this._changeDevicePreviewPlatform,className:Object(i.css)(N.preview),payerCode:this.props.query.appetizePayerCode,onClickRunOnPhone:this._handleClickRunOnPhone,onAppLaunch:w,canUserAuthenticate:!1,wasUpgraded:y,previewQueue:"secondary"}):null}):null),o.createElement(C.a,{large:!0,isEmbedded:!0,visible:"device-instructions"===this.state.currentModal,onDismiss:this._handleHideModal,sdkVersion:this.props.sdkVersion,onChangeMethod:this._changeConnectionMethod,method:this.state.deviceConnectionMethod,channel:this.props.channel,snackId:this.props.params.id,setDeviceId:this.props.setDeviceId,deviceId:this.props.deviceId}),o.createElement("div",{className:Object(i.css)(N.footer)},o.createElement(x,{isResolving:b,loadingMessage:k,devicePreviewShown:t,devicePreviewPlatform:r,sdkVersion:this.props.sdkVersion,platformOptions:this.state.platformOptions,onToggleDevicePreview:this._toggleDevicePreview,onChangeDevicePreviewPlatform:this._changeDevicePreviewPlatform})),Object(D.c)(this.props.userAgent)?o.createElement("div",{className:Object(i.css)(N.button)},o.createElement(c.a,{sdkVersion:this.props.sdkVersion,channel:m,snackId:this.props.params.id})):null,o.createElement(O.a,{fileEntries:this.props.fileEntries,onEntriesChange:this.props.onFileEntriesChange,dependencyQueryParam:this.props.dependencyQueryParam,initialSdkVersion:this.props.initialSdkVersion,sdkVersion:this.props.sdkVersion,dependencies:this.props.dependencies,syncDependenciesAsync:this.props.syncDependenciesAsync,onOpenFullView:this._handleOpenFullView,sessionID:_}))}})));const N=i.StyleSheet.create({container:{display:"flex",flexDirection:"column",height:"100%",width:"100%",backgroundColor:j.a.background.light,color:j.a.text.light,minHeight:0},backgroundLight:{backgroundColor:j.a.background.light,color:j.a.text.light},backgroundDark:{backgroundColor:j.a.background.dark,color:j.a.text.dark},editorArea:{display:"flex",flex:1,flexDirection:"row",minHeight:0},editorPlaceholder:{display:"flex",flex:1},preview:{backgroundColor:"black"},logo:{display:"flex",flexDirection:"row",alignItems:"center",color:"#999",textDecoration:"none",whiteSpace:"nowrap","@media (max-width: 480px)":{display:"none"}},wordmark:{height:18,margin:"0 .75em"},footer:{"@media (max-width: 480px)":{display:"none"}},button:{backgroundColor:j.a.background.light,borderTop:`1px solid ${j.a.border}`,padding:".5em","@media (min-width: 480px)":{display:"none"}}})},463:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",function(){return o}),n.d(t,"ui",function(){return r});const o={text:"#5c6773",variable:"#5c6773",invalid:"#ff3333",constant:"#f08c36",comment:"#abb0b6",regexp:"#4dbf99",annotation:"#41a6d9",tag:"#e7c547",number:"#f08c36",string:"#86b300",property:"#41a6d9",value:"#0451a5",keyword:"#f2590c",operator:"#778899",predefined:"#FF00FF"},r={background:"#fafafa",text:"#5c6773",indent:{active:"#e0e0e0",inactive:"#ecebec"}}},464:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",function(){return o}),n.d(t,"ui",function(){return r});const o={text:"#d9d7ce",variable:"#d9d7ce",invalid:"#ff3333",constant:"#ff9d45",comment:"#5c6773",regexp:"#95e6cb",annotation:"#5ccfe6",tag:"#80d4ff",number:"#ff9d45",string:"#bae67e",property:"#5ccfe6",value:"#bae67e",keyword:"#ffae57",operator:"#778899",predefined:"#ff00ff"},r={background:"#212733",text:"#d9d7ce",indent:{active:"#393b41",inactive:"#494b51"}}},501:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});var o=n(463),r=n(464);const i=String.raw,s=e=>{let t=e.ui,n=e.syntax;return i`
  .prism-code {
    background-color: ${t.background};
    color: ${t.text};
  }

  .prism-code ::selection {
    background: rgba(0, 0, 0, 0.16);
  }

  .prism-code ::-moz-selection {
    background: rgba(0, 0, 0, 0.16);
  }

  .prism-code textarea {
    outline: 0;
  }

  .prism-code .token.tag,
  .prism-code .token.property {
    color: ${n.property};
  }

  .prism-code .token.function {
    color: ${n.constant};
  }

  .prism-code .token.entity {
    color: ${n.property};
  }

  .prism-code .token.string,
  .prism-code .token.selector,
  .prism-code .token.char,
  .prism-code .token.builtin,
  .prism-code .token.inserted {
    color: ${n.string};
  }

  .prism-code .token.regexp,
  .prism-code .token.variable {
    color: ${n.regexp};
  }

  .prism-code .token.keyword,
  .prism-code .token.atrule,
  .prism-code .token.tag > .token.punctuation,
  .prism-code .token.important {
    color: ${n.keyword};
  }

  .prism-code .token.attr-name {
    color: ${n.number};
  }

  .prism-code .token.attr-value {
    color: ${n.string};
  }

  .prism-code .token.markup,
  .prism-code .token.special {
    color: ${n.predefined};
  }

  .prism-code .token.comment,
  .prism-code .token.prolog,
  .prism-code .token.doctype,
  .prism-code .token.cdata {
    color: ${n.comment};
  }

  .prism-code .token.number {
    color: ${n.number};
  }

  .prism-code .token.constant,
  .prism-code .token.boolean,
  .prism-code .token.constant,
  .prism-code .token.symbol,
  .prism-code .token.deleted {
    color: ${n.constant};
  }

  .prism-code .token.operator,
  .prism-code .token.entity,
  .prism-code .token.url,
  .prism-code .language-css .token.string,
  .prism-code .style .token.string {
    color: ${n.operator};
  }

  .prism-code .token.punctuation {
    color: ${n.comment};
  }
`},a=s(o),c=s(r)},675:function(e,t,n){"use strict";n.r(t);n(64),n(10),n(484);var o=n(0),r=n.n(o),i=n(1),s=n(37),a=n.n(s),c=n(676),l=n.n(c),d=n(537),p=n.n(d),h=n(538),m=(n(539),n(540),n(541),n(542),n(543),n(544),n(677),n(7)),u=n(501);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f=new Map;class b extends r.a.Component{constructor(){super(...arguments),g(this,"_highlight",e=>this.props.path.endsWith(".ts")||this.props.path.endsWith(".tsx")?Object(h.highlight)(e,h.languages.ts):this.props.path.endsWith(".js")?Object(h.highlight)(e,h.languages.jsx):this.props.path.endsWith(".json")?Object(h.highlight)(e,h.languages.json):this.props.path.endsWith(".md")?Object(h.highlight)(e,h.languages.markdown):p()(e)),g(this,"_editor",r.a.createRef())}static removePath(e){f.delete(e)}static renamePath(e,t){const n=f.get(e);f.delete(e),f.set(t,n)}componentDidUpdate(e){const t=this._editor.current;if(this.props.path!==e.path&&t){f.set(e.path,t.session);const n=f.get(this.props.path);t.session=n||{history:{stack:[],offset:-1}}}}render(){const e=this.props,t=e.value,n=e.lineNumbers,o=e.theme,s=e.onValueChange;return r.a.createElement("div",{className:Object(i.css)(k.container,"on"===n&&k.containerWithLineNumbers)},r.a.createElement(l.a,{ref:this._editor,value:t,onValueChange:s,highlight:e=>"on"===n?this._highlight(e).split("\n").map(e=>`<span class="${Object(i.css)(k.line)}">${e}</span>`).join("\n"):this._highlight(e),padding:"on"===n?0:8,className:a()(Object(i.css)(k.editor),"prism-code")}),r.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"dark"===o?u.a:u.b}}))}}g(b,"defaultProps",{lineNumbers:"on"}),t.default=Object(m.a)(b);const k=i.StyleSheet.create({container:{flex:1,overflow:"auto"},containerWithLineNumbers:{paddingLeft:64},editor:{fontFamily:"var(--font-monospace)",fontSize:12,minHeight:"100%",counterReset:"line",overflow:"visible !important"},line:{":before":{position:"absolute",right:"100%",marginRight:26,textAlign:"right",opacity:.5,userSelect:"none",counterIncrement:"line",content:"counter(line)"}}})},847:function(e,t,n){e.exports=n.p+"assets/52001a8b742a278688f6b516f931d81b.png"},848:function(e,t,n){e.exports=n.p+"assets/e392635154a17bd759d3bbb77e72eada.png"}}]);