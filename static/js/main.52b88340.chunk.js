(this.webpackJsonpbeautifulreadme=this.webpackJsonpbeautifulreadme||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){},249:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n(1),a=n(77),r=n.n(a),s=(n(150),n(151),n(81)),o=n.n(s),l=n(133),d=n(134),h=n(135),j=n(143),b=n(142),u=n(26),g=(n(248),n(249),n(141)),x=n(269),O=n(265),p=n(276),f=n(274),m=n(270),C=n(66),v=n(65),k=n.n(v),S=n(273),w=n(268),y=function(e){return Object(c.jsx)(O.a,{flex:"1",bg:"white",border:"1px",borderColor:"gray.10",p:5,children:Object(c.jsxs)(S.e,{children:[Object(c.jsxs)(S.b,{children:[Object(c.jsx)(S.a,{children:"Output"}),Object(c.jsx)(S.a,{children:"Preview"})]}),Object(c.jsxs)(S.d,{children:[Object(c.jsx)(S.c,{children:Object(c.jsx)(w.a,{children:e.file})}),Object(c.jsx)(S.c,{children:Object(c.jsx)("div",{dangerouslySetInnerHTML:function(){var t=k()("_Nothing_ to show ");return e.file?(t=k()(e.file),console.log(e.file),console.log()):t=k()("_Nothing_ to show "),{__html:t}}()})})]})]})})},_=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={editorState:u.EditorState.createEmpty(),file:""},c.onChange=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.setState({editorState:t});case 2:return e.next=4,Object(g.a)(c.state.editorState.getCurrentContent());case 4:n=e.sent,c.setState({file:c.replacer(n)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c}return Object(h.a)(n,[{key:"replacer",value:function(e){return e=(e=e.replace(/<p>/g,"").replace(/<\/p>/g,"</br>").replace(/<br>/g,"").replace(/<strong>/g,"**").replace(/<\/strong>/g,"**").replace(/&nbsp;/g," ")).replace(/<em>/g,"_").replace(/<\/em>/g,"_")}},{key:"_onBoldClick",value:function(){this.onChange(u.RichUtils.toggleInlineStyle(this.state.editorState,"BOLD"))}},{key:"_onItalicClick",value:function(){this.onChange(u.RichUtils.toggleInlineStyle(this.state.editorState,"ITALIC"))}},{key:"_onUnderlineClick",value:function(){this.onChange(u.RichUtils.toggleInlineStyle(this.state.editorState,"UNDERLINE"))}},{key:"onDownload",value:function(){var e=document.createElement("a");e.href="data:attachment/text,"+encodeURI(this.file),e.target="_blank",e.download="README.md",e.click()}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(x.a,{color:"black",children:[Object(c.jsxs)(O.a,{flex:"1",bg:"#F0A6CA",border:"0.5px",borderColor:"#F0E6EF",p:1,m:2,children:[Object(c.jsxs)(p.a,{direction:"row",spacing:1,align:"center",children:[Object(c.jsx)(f.a,{onClick:this._onBoldClick.bind(this),children:Object(c.jsx)(m.a,{as:C.a})}),Object(c.jsxs)(f.a,{onClick:this._onItalicClick.bind(this),children:[" ",Object(c.jsx)(m.a,{as:C.c})]}),Object(c.jsxs)(f.a,{onClick:this.onDownload.bind(this),children:[Object(c.jsx)(m.a,{as:C.b})," \xa0Download"]})]}),Object(c.jsx)(O.a,{className:"editors-panel",children:Object(c.jsx)(u.Editor,{editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,placeholder:"Lets Start Documenting ..."})})]}),Object(c.jsx)(y,{file:this.state.file})]})})}}]),n}(i.Component),I=(n(253),n(140)),E=n(271),D=n.p+"static/media/white heading.e7c01da3.png";var L=function(){return Object(c.jsx)(O.a,{className:"nav_header",p:1,children:Object(c.jsxs)(x.a,{direction:"row",spacing:2,children:[Object(c.jsx)("img",{src:D,alt:"heading",width:"120px",class:"center"}),Object(c.jsx)(E.a,{}),Object(c.jsxs)(p.a,{direction:"row",spacing:2,children:[Object(c.jsx)(f.a,{leftIcon:Object(c.jsx)(I.a,{}),colorScheme:"pink",variant:"solid",children:"Login"}),Object(c.jsx)(f.a,{colorScheme:"white",variant:"outline",children:"Register"})]})]})})};var F=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(L,{}),Object(c.jsx)(_,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,277)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},R=n(272);r.a.render(Object(c.jsx)(R.a,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),N()}},[[254,1,2]]]);
//# sourceMappingURL=main.52b88340.chunk.js.map