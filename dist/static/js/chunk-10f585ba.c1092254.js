(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f585ba"],{1169:function(e,t,r){var n=r("2d95");e.exports=Array.isArray||function(e){return"Array"==n(e)}},2882:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rolesControl"},[r("el-card",[r("el-button",{attrs:{type:"primary"},on:{click:e.addRolesTab}},[e._v("添加权限")]),r("el-table",{staticClass:"mtop30",staticStyle:{width:"100%"},attrs:{data:e.rolesTab,stripe:"",border:""}},[r("el-table-column",{attrs:{prop:"key",label:"身份"}}),r("el-table-column",{attrs:{prop:"description",label:"说明"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{staticStyle:{margin:"5px"},attrs:{type:"primary"},on:{click:function(r){return e.editRoles(t.$index,t.row)}}},[e._v("编辑")]),r("el-button",{staticStyle:{margin:"5px"},attrs:{type:"warning",disabled:e.isAdmin(t.row)},on:{click:function(r){return e.deleteRoles(t.$index)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{staticClass:"diaForm",attrs:{title:"权限编辑",visible:e.diaIsShow},on:{"update:visible":function(t){e.diaIsShow=t}}},[r("el-form",{ref:"rolesForm",attrs:{model:e.formData,rules:e.rules,"label-width":"140px"}},[r("el-form-item",{attrs:{label:"身份",prop:"key"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入要添加的身份类别"},model:{value:e.formData.key,callback:function(t){e.$set(e.formData,"key",t)},expression:"formData.key"}})],1),r("el-form-item",{attrs:{label:"说明",prop:"description"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入相关说明"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),r("el-form-item",{attrs:{label:"菜单"}},[r("el-tree",{ref:"tree",attrs:{data:e.treeData,"node-key":"name",props:e.defaultProps,"show-checkbox":"","check-strictly":!1}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeRoles("rolesForm",e.editType)}}},[e._v("确认")]),r("el-button",{on:{click:function(t){e.diaIsShow=!1}}},[e._v("取消")])],1)],1)],1)],1)},i=[],a=(r("8e6e"),r("456d"),r("6762"),r("2fdb"),r("bd86")),o=(r("7f7f"),r("ac4d"),r("8a81"),r("ac6a"),r("75fc")),c=r("a18c");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={data:function(){return{rolesTab:[],diaIsShow:!1,formData:{},editType:"update",rules:{key:[{required:!0,message:"请输入要添加的身份类别",trigger:"blur"}],description:[{required:!0,message:"请输入相关说明",trigger:"blur"}]},editIndex:0,allRoute:[].concat(Object(o["a"])(c["b"]),Object(o["a"])(c["a"])),treeData:[],defaultProps:{label:"label",children:"children"}}},created:function(){this._getAllRolse(),this.treeData=this.getTreeData(this.allRoute)},methods:{_getAllRolse:function(){this.rolesTab=[{description:"管理员",key:"admin",pages:["Dashbord","Permission","PageUser","Roles","Table","BaseTable","ComplexTable","Components","Upload","Echarts","Sldie-chart","Dynamic-chart","Excel","Excel-out","Excel-in","error","Page404"]}]},isAdmin:function(e){return"admin"===e.key||"user"===e.key},deleteRoles:function(e){var t=this;this.$confirm("此操作将永久删除相关数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.rolesTab.splice(e,1),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},addRolesTab:function(){var e=this;this.diaIsShow=!0,this.editType="add",this.formData={},this.$nextTick((function(){e.$refs.rolesForm.clearValidate(),e.$refs.tree.setCheckedKeys([])}))},editRoles:function(e,t){var r=this;this.diaIsShow=!0,this.editIndex=e,this.editType="update",this.formData=Object.assign({},this.formData,{key:t.key,description:t.description}),this.$nextTick((function(){r.$refs.rolesForm.clearValidate(),r.$refs.tree.setCheckedKeys(t.pages)}))},changeRoles:function(e,t){var r=this;this.$refs[e].validate((function(e){if(e){var n=r.$refs.tree.getCheckedKeys();if("update"===t){var i=r.editIndex;r.rolesTab[i].key=r.formData.key,r.rolesTab[i].description=r.formData.description,r.rolesTab[i].pages=n,r.$notify({title:"成功",message:"权限修改成功",type:"success"})}else if("add"===t){var a={};a.key=r.formData.key,a.description=r.formData.description,a.pages=n,r.rolesTab.push(a),r.$notify({title:"成功",message:"权限添加成功",type:"success"})}window.console.log(r.rolesTab),r.diaIsShow=!1}}))},getTreeData:function(e){var t=[],r=!0,n=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var c=a.value;if(!c.hidden){var s=this.hasOnlyChild(c.children,c);s&&!s.children&&(c=s);var l={label:c.meta.title,name:c.name};c.children&&(l.children=this.getTreeData(c.children)),t.push(l)}}}catch(u){n=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return t},hasOnlyChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=e.filter((function(e){return!e.hidden}));return 1!==r.length||t.meta?0===r.length&&t:r[0]},forSearchArr:function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var s=o.value,u=l({},s);t.includes(u.name)&&(u.children&&(u.children=this.forSearchArr(u.children,t)),r.push(u))}}catch(f){i=!0,a=f}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}return r}}},f=u,d=(r("d242"),r("f8b8"),r("2877")),p=Object(d["a"])(f,n,i,!1,null,"2dae6a25",null);t["default"]=p.exports},"2fdb":function(e,t,r){"use strict";var n=r("5ca1"),i=r("d2c8"),a="includes";n(n.P+n.F*r("5147")(a),"String",{includes:function(e){return!!~i(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"37c8":function(e,t,r){t.f=r("2b4c")},"3a72":function(e,t,r){var n=r("7726"),i=r("8378"),a=r("2d00"),o=r("37c8"),c=r("86cc").f;e.exports=function(e){var t=i.Symbol||(i.Symbol=a?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:o.f(e)})}},5147:function(e,t,r){var n=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}},"58f4":function(e,t,r){},6762:function(e,t,r){"use strict";var n=r("5ca1"),i=r("c366")(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"67ab":function(e,t,r){var n=r("ca5a")("meta"),i=r("d3f4"),a=r("69a8"),o=r("86cc").f,c=0,s=Object.isExtensible||function(){return!0},l=!r("79e5")((function(){return s(Object.preventExtensions({}))})),u=function(e){o(e,n,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,n)){if(!s(e))return"F";if(!t)return"E";u(e)}return e[n].i},d=function(e,t){if(!a(e,n)){if(!s(e))return!0;if(!t)return!1;u(e)}return e[n].w},p=function(e){return l&&h.NEED&&s(e)&&!a(e,n)&&u(e),e},h=e.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},"7bbc":function(e,t,r){var n=r("6821"),i=r("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return i(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?c(e):i(n(e))}},"7f7f":function(e,t,r){var n=r("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in i||r("9e1e")&&n(i,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"8a81":function(e,t,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("9e1e"),o=r("5ca1"),c=r("2aba"),s=r("67ab").KEY,l=r("79e5"),u=r("5537"),f=r("7f20"),d=r("ca5a"),p=r("2b4c"),h=r("37c8"),b=r("3a72"),y=r("d4c0"),m=r("1169"),v=r("cb7c"),g=r("d3f4"),w=r("4bf8"),S=r("6821"),O=r("6a99"),k=r("4630"),x=r("2aeb"),D=r("7bbc"),T=r("11e9"),P=r("2621"),j=r("86cc"),E=r("0d58"),$=T.f,F=j.f,I=D.f,_=n.Symbol,C=n.JSON,R=C&&C.stringify,A="prototype",N=p("_hidden"),J=p("toPrimitive"),K={}.propertyIsEnumerable,B=u("symbol-registry"),W=u("symbols"),q=u("op-symbols"),M=Object[A],U="function"==typeof _&&!!P.f,V=n.QObject,Y=!V||!V[A]||!V[A].findChild,z=a&&l((function(){return 7!=x(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=$(M,t);n&&delete M[t],F(e,t,r),n&&e!==M&&F(M,t,n)}:F,G=function(e){var t=W[e]=x(_[A]);return t._k=e,t},Q=U&&"symbol"==typeof _.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof _},H=function(e,t,r){return e===M&&H(q,t,r),v(e),t=O(t,!0),v(r),i(W,t)?(r.enumerable?(i(e,N)&&e[N][t]&&(e[N][t]=!1),r=x(r,{enumerable:k(0,!1)})):(i(e,N)||F(e,N,k(1,{})),e[N][t]=!0),z(e,t,r)):F(e,t,r)},L=function(e,t){v(e);var r,n=y(t=S(t)),i=0,a=n.length;while(a>i)H(e,r=n[i++],t[r]);return e},X=function(e,t){return void 0===t?x(e):L(x(e),t)},Z=function(e){var t=K.call(this,e=O(e,!0));return!(this===M&&i(W,e)&&!i(q,e))&&(!(t||!i(this,e)||!i(W,e)||i(this,N)&&this[N][e])||t)},ee=function(e,t){if(e=S(e),t=O(t,!0),e!==M||!i(W,t)||i(q,t)){var r=$(e,t);return!r||!i(W,t)||i(e,N)&&e[N][t]||(r.enumerable=!0),r}},te=function(e){var t,r=I(S(e)),n=[],a=0;while(r.length>a)i(W,t=r[a++])||t==N||t==s||n.push(t);return n},re=function(e){var t,r=e===M,n=I(r?q:S(e)),a=[],o=0;while(n.length>o)!i(W,t=n[o++])||r&&!i(M,t)||a.push(W[t]);return a};U||(_=function(){if(this instanceof _)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===M&&t.call(q,r),i(this,N)&&i(this[N],e)&&(this[N][e]=!1),z(this,e,k(1,r))};return a&&Y&&z(M,e,{configurable:!0,set:t}),G(e)},c(_[A],"toString",(function(){return this._k})),T.f=ee,j.f=H,r("9093").f=D.f=te,r("52a7").f=Z,P.f=re,a&&!r("2d00")&&c(M,"propertyIsEnumerable",Z,!0),h.f=function(e){return G(p(e))}),o(o.G+o.W+o.F*!U,{Symbol:_});for(var ne="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ie=0;ne.length>ie;)p(ne[ie++]);for(var ae=E(p.store),oe=0;ae.length>oe;)b(ae[oe++]);o(o.S+o.F*!U,"Symbol",{for:function(e){return i(B,e+="")?B[e]:B[e]=_(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in B)if(B[t]===e)return t},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),o(o.S+o.F*!U,"Object",{create:X,defineProperty:H,defineProperties:L,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:re});var ce=l((function(){P.f(1)}));o(o.S+o.F*ce,"Object",{getOwnPropertySymbols:function(e){return P.f(w(e))}}),C&&o(o.S+o.F*(!U||l((function(){var e=_();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))}))),"JSON",{stringify:function(e){var t,r,n=[e],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=t=n[1],(g(t)||void 0!==e)&&!Q(e))return m(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!Q(t))return t}),n[1]=t,R.apply(C,n)}}),_[A][J]||r("32e9")(_[A],J,_[A].valueOf),f(_,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},a0cb:function(e,t,r){},ac4d:function(e,t,r){r("3a72")("asyncIterator")},d242:function(e,t,r){"use strict";var n=r("a0cb"),i=r.n(n);i.a},d2c8:function(e,t,r){var n=r("aae3"),i=r("be13");e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},d4c0:function(e,t,r){var n=r("0d58"),i=r("2621"),a=r("52a7");e.exports=function(e){var t=n(e),r=i.f;if(r){var o,c=r(e),s=a.f,l=0;while(c.length>l)s.call(e,o=c[l++])&&t.push(o)}return t}},f8b8:function(e,t,r){"use strict";var n=r("58f4"),i=r.n(n);i.a}}]);