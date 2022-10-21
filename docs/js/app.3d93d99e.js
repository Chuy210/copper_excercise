(function(){"use strict";var t={1446:function(t,a,e){var i=e(144),c=e(998),o=e(2928),s=function(){var t=this,a=t._self._c;return a(c.Z,[a(o.Z,[a("Abcc")],1)],1)},n=[],l=e(7359),r=e(6190),u=e(4145),h=e(266),d=e(2118),A=e(6236),v=e(5125),m=e(1831),f=e(1713),k=e(4221),F=e(3687),p=e(2540),b=e(7808),C=function(){var t=this,a=t._self._c;return a(d.Z,[a(l.Z,{attrs:{value:t.alertwarning,outlined:"",type:"warning",prominent:"",border:"left"}},[t._v(" "+t._s(t.alertName)+" ")]),a(u.Z,{staticClass:"mx-auto",attrs:{"max-width":"600",outlined:""}},[a(v.Z,{ref:"form",staticClass:"pa-4",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[a(f.Z,{attrs:{align:"center"}},[a(h.Z,{attrs:{cols:"6"}},[a(p.Z,[t._v(" Elije tu accion ")])],1),a(h.Z,{attrs:{cols:"6"}},[a(k.Z,{attrs:{items:t.acciones,label:"Accion","single-line":""},model:{value:t.accion,callback:function(a){t.accion=a},expression:"accion"}})],1)],1),a(f.Z,[a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.SkuActive,label:"Sku",maxlength:"6"},on:{keypress:function(a){return t.filter()}},model:{value:t.Sku,callback:function(a){t.Sku=a},expression:"Sku"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.DescontinuadoActive,label:"Descontinuado",maxlength:"1"},on:{keypress:function(a){return t.filter()}},model:{value:t.Descontinuado,callback:function(a){t.Descontinuado=a},expression:"Descontinuado"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.ArtículoActive,label:"Artículo",maxlength:"15"},model:{value:t.Artículo,callback:function(a){t.Artículo=a},expression:"Artículo"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.MarcaActive,label:"Marca",maxlength:"15"},model:{value:t.Marca,callback:function(a){t.Marca=a},expression:"Marca"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.ModeloActive,label:"Modelo",maxlength:"20"},model:{value:t.Modelo,callback:function(a){t.Modelo=a},expression:"Modelo"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.DepartamentoActive,label:"Departamento",maxlength:"1"},on:{keypress:function(a){return t.filter()}},model:{value:t.Departamento,callback:function(a){t.Departamento=a},expression:"Departamento"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.ClaseActive,label:"Clase",maxlength:"2"},on:{keypress:function(a){return t.filter()}},model:{value:t.Clase,callback:function(a){t.Clase=a},expression:"Clase"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.FamiliaActive,label:"Familia",maxlength:"3"},on:{keypress:function(a){return t.filter()}},model:{value:t.Familia,callback:function(a){t.Familia=a},expression:"Familia"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(m.Z,{ref:"menuAlta",attrs:{"close-on-content-click":!1,"return-value":t.FechaAlta,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(a){t.FechaAlta=a},"update:return-value":function(a){t.FechaAlta=a}},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:i}){return[a(b.Z,t._g(t._b({attrs:{disabled:t.FechaAltaActive,label:"Fecha Alta","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.FechaAlta,callback:function(a){t.FechaAlta=a},expression:"FechaAlta"}},"v-text-field",i,!1),e))]}}]),model:{value:t.menuAlta,callback:function(a){t.menuAlta=a},expression:"menuAlta"}},[a(A.Z,{attrs:{"no-title":"",scrollable:""},model:{value:t.FechaAlta,callback:function(a){t.FechaAlta=a},expression:"FechaAlta"}},[a(F.Z),a(r.Z,{attrs:{text:"",color:"primary"},on:{click:function(a){t.menuAlta=!1}}},[t._v(" Cancel ")]),a(r.Z,{attrs:{text:"",color:"primary"},on:{click:function(a){return t.$refs.menuAlta.save(t.FechaAlta)}}},[t._v(" OK ")])],1)],1)],1),a(h.Z,{attrs:{cols:"6"}},[a(m.Z,{ref:"menuBaja",attrs:{"close-on-content-click":!1,"return-value":t.FechaBaja,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(a){t.FechaBaja=a},"update:return-value":function(a){t.FechaBaja=a}},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:i}){return[a(b.Z,t._g(t._b({attrs:{disabled:t.FechaBajaActive,label:"Fecha Baja","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.FechaBaja,callback:function(a){t.FechaBaja=a},expression:"FechaBaja"}},"v-text-field",i,!1),e))]}}]),model:{value:t.menuBaja,callback:function(a){t.menuBaja=a},expression:"menuBaja"}},[a(A.Z,{attrs:{"no-title":"",scrollable:""},model:{value:t.FechaBaja,callback:function(a){t.FechaBaja=a},expression:"FechaBaja"}},[a(F.Z),a(r.Z,{attrs:{text:"",color:"primary"},on:{click:function(a){t.menuBaja=!1}}},[t._v(" Cancel ")]),a(r.Z,{attrs:{text:"",color:"primary"},on:{click:function(a){return t.$refs.menuBaja.save(t.FechaBaja)}}},[t._v(" OK ")])],1)],1)],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.StockActive,label:"Stock",maxlength:"9"},on:{keypress:function(a){return t.filter()}},model:{value:t.Stock,callback:function(a){t.Stock=a},expression:"Stock"}})],1),a(h.Z,{attrs:{cols:"6"}},[a(b.Z,{attrs:{disabled:t.CantidadActive,label:"Cantidad",maxlength:"9"},on:{keypress:function(a){return t.filter()}},model:{value:t.Cantidad,callback:function(a){t.Cantidad=a},expression:"Cantidad"}})],1)],1),a(f.Z,[a(F.Z),a(h.Z,[t.consultarEx?a(r.Z,{staticClass:"mr-4",attrs:{disabled:t.consultarExActive,color:"blue",dark:""},on:{click:t.consultar}},[t._v(" Consular existencia ")]):t._e()],1),a(h.Z,[a(r.Z,{staticClass:"mr-4",attrs:{disabled:t.accionActive,color:"success"},on:{click:t.ejecutarAccion}},[t._v(" "+t._s(t.btnName)+" ")])],1),a(h.Z,[a(r.Z,{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Limpiar ")])],1),a(F.Z)],1)],1)],1)],1)},S=[],D=(e(7658),{data:()=>({valid:!0,Sku:"","Artículo":"",Marca:"",Modelo:"",Departamento:"",Clase:"",Familia:"",FechaAlta:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),FechaBaja:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menuAlta:!1,menuBaja:!1,Stock:"",Cantidad:"",Descontinuado:"",SkuActive:!1,DescontinuadoActive:!1,"ArtículoActive":!1,MarcaActive:!1,ModeloActive:!1,DepartamentoActive:!1,ClaseActive:!1,FamiliaActive:!1,FechaAltaActive:!1,FechaBajaActive:!1,StockActive:!1,CantidadActive:!1,btnName:"",accion:"",acciones:["Alta","Baja","Cambio","Consulta"],alertwarning:!1,alertName:"",articulo:{Sku:"","Artículo":"",Marca:"",Modelo:"",Departamento:"",Clase:"",Familia:"",FechaAlta:"",FechaBaja:"",Stock:"",Cantidad:"",Descontinuado:""},articuloIndex:"",articulos:[{Sku:1,"Artículo":"Licuadora",Marca:"Oester",Modelo:"Modelo1",Departamento:"1",Clase:1,Familia:1,FechaAlta:"2022-10-19",FechaBaja:"1900-01-01",Stock:10,Cantidad:2,Descontinuado:0},{Sku:2,"Artículo":"Tostadora",Marca:"Oester",Modelo:"Modelo2",Departamento:"1",Clase:1,Familia:1,FechaAlta:"2022-10-19",FechaBaja:"1900-01-01",Stock:10,Cantidad:2,Descontinuado:0},{Sku:3,"Artículo":"Stereo",Marca:"Steren",Modelo:"Modelo3",Departamento:"2",Clase:1,Familia:1,FechaAlta:"2022-10-19",FechaBaja:"1900-01-01",Stock:10,Cantidad:2,Descontinuado:0},{Sku:4,"Artículo":"Stereo",Marca:"Steren",Modelo:"Modelo4",Departamento:"2",Clase:1,Familia:1,FechaAlta:"2022-10-19",FechaBaja:"1900-01-01",Stock:10,Cantidad:2,Descontinuado:0},{Sku:5,"Artículo":"Sala",Marca:"Gala",Modelo:"Modelo5",Departamento:"3",Clase:1,Familia:1,FechaAlta:"2022-10-19",FechaBaja:"1900-01-01",Stock:10,Cantidad:2,Descontinuado:0}],consultarEx:!0,consultarExActive:!0,accionActive:!0}),mounted(){this.accion="Alta",this.DescontinuadoActive=!0,this.ArtículoActive=!0,this.MarcaActive=!0,this.ModeloActive=!0,this.DepartamentoActive=!0,this.ClaseActive=!0,this.FamiliaActive=!0,this.FechaAltaActive=!0,this.FechaBajaActive=!0,this.StockActive=!0,this.CantidadActive=!0,this.consultarExActive=!0},watch:{accion(t){switch(t){case"Alta":this.btnName="Dar de Alta",this.consultarEx=!0,this.accionActive=!0,this.reset();break;case"Baja":this.btnName="Dar de Baja",this.consultarEx=!0,this.accionActive=!0,this.reset();break;case"Cambio":this.btnName="Actualizar",this.consultarEx=!0,this.accionActive=!0,this.reset();break;case"Consulta":this.btnName="Consultar",this.consultarEx=!1,this.accionActive=!1,this.reset();break;default:break}},Sku(t){this.consultarEx=!1,this.consultarExActive=!0,this.accionActive=!1,""!=t?("Consulta"!=this.accion&&(this.consultarEx=!0,this.accionActive=!0),this.consultarExActive=!1):this.accionActive=!0},Cantidad(t){console.log(this.Stock+"-----"+t),""!=t&&+t>+this.Stock?(console.log("Entrooo"),this.alertwarning=!0,this.alertName="Cantidad no puede ser mayor a Stock",this.accionActive=!0):(this.alertwarning=!1,this.accionActive=!1)},Stock(t){console.log(t),""!=t&&+t<+this.Cantidad?(this.alertwarning=!0,this.alertName="Cantidad no puede ser mayor a Stock",this.accionActive=!0):(this.alertwarning=!1,this.accionActive=!1)},Departamento(t){this.ClaseActive=!0,""!=t&&(this.ClaseActive=!1)},Clase(t){this.FamiliaActive=!0,""!=t&&(this.FamiliaActive=!1)},Descontinuado(t){0!=t&&"Cambio"==this.accion&&(this.FechaBaja=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10))}},methods:{reset(){this.consultarEx=!1,this.consultarExActive=!0,this.Sku="",this.Artículo="",this.Marca="",this.Modelo="",this.Departamento="",this.Clase="",this.Familia="",this.FechaAlta="",this.FechaBaja="",this.Stock="",this.Cantidad="",this.Descontinuado="",this.DescontinuadoActive=!0,this.ArtículoActive=!0,this.MarcaActive=!0,this.ModeloActive=!0,this.DepartamentoActive=!0,this.ClaseActive=!0,this.FamiliaActive=!0,this.FechaAltaActive=!0,this.FechaBajaActive=!0,this.StockActive=!0,this.CantidadActive=!0,this.alertwarning=!1,this.accionActive=!0},filter(t){t=t||window.event;let a=t.target.value.toString()+t.key.toString();if(/^[-+]?[0-9]*\.?[0-9]*$/.test(a))return!0;t.preventDefault()},consultar(){let t=!1;this.articuloIndex="";for(let a=0;a<this.articulos.length;a++){const e=this.articulos[a];e.Sku==this.Sku&&(this.articuloIndex=a,t=!0,this.articulo={Sku:e.Sku,"Artículo":e.Artículo,Marca:e.Marca,Modelo:e.Modelo,Departamento:e.Departamento,Clase:e.Clase,Familia:e.Familia,FechaAlta:e.FechaAlta,FechaBaja:e.FechaBaja,Stock:e.Stock,Cantidad:e.Cantidad,Descontinuado:e.Descontinuado})}switch(!t&&"Alta"==this.accion||t&&"Cambio"==this.accion?(this.DescontinuadoActive=!1,this.ArtículoActive=!1,this.MarcaActive=!1,this.ModeloActive=!1,this.DepartamentoActive=!1,this.ClaseActive=!1,this.FamiliaActive=!1,this.StockActive=!1,this.CantidadActive=!1,this.accionActive=!1):(this.DescontinuadoActive=!0,this.ArtículoActive=!0,this.MarcaActive=!0,this.ModeloActive=!0,this.DepartamentoActive=!0,this.ClaseActive=!0,this.FamiliaActive=!0,this.StockActive=!0,this.CantidadActive=!0,this.accionActive=!0),t||"Alta"==this.accion||(this.articulo={Sku:this.Sku,"Artículo":"",Marca:"",Modelo:"",Departamento:"",Clase:"",Familia:"",FechaAlta:"",FechaBaja:"",Stock:"",Cantidad:"",Descontinuado:""}),this.accion){case"Alta":this.alertwarning=t,this.alertName="Ya existe este articulo",this.FechaAlta=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.FechaBaja="1900-01-01",this.Descontinuado=0,this.DescontinuadoActive=!0,this.FechaAltaActive=!0,this.FechaBajaActive=!0,this.ClaseActive=!0,this.FamiliaActive=!0,this.accionActive=!1;break;case"Baja":this.alertName="No se encontro este articulo",this.alertwarning=!t,this.Artículo=this.articulo.Artículo,this.Marca=this.articulo.Marca,this.Modelo=this.articulo.Modelo,this.Departamento=this.articulo.Departamento,this.Clase=this.articulo.Clase,this.Familia=this.articulo.Familia,this.FechaAlta=this.articulo.FechaAlta,this.FechaBaja=this.articulo.FechaBaja,this.Stock=this.articulo.Stock,this.Cantidad=this.articulo.Cantidad,this.Descontinuado=this.articulo.Descontinuado,this.accionActive=!1;break;case"Cambio":this.alertName="No se encontro este articulo",this.alertwarning=!t,this.Artículo=this.articulo.Artículo,this.Marca=this.articulo.Marca,this.Modelo=this.articulo.Modelo,this.Departamento=this.articulo.Departamento,this.Clase=this.articulo.Clase,this.Familia=this.articulo.Familia,this.FechaAlta=this.articulo.FechaAlta,this.FechaBaja=this.articulo.FechaBaja,this.Stock=this.articulo.Stock,this.Cantidad=this.articulo.Cantidad,this.Descontinuado=this.articulo.Descontinuado,this.accionActive=!1;break;case"Consulta":this.alertName="No se encontro este articulo",this.alertwarning=!t,this.Artículo=this.articulo.Artículo,this.Marca=this.articulo.Marca,this.Modelo=this.articulo.Modelo,this.Departamento=this.articulo.Departamento,this.Clase=this.articulo.Clase,this.Familia=this.articulo.Familia,this.FechaAlta=this.articulo.FechaAlta,this.FechaBaja=this.articulo.FechaBaja,this.Stock=this.articulo.Stock,this.Cantidad=this.articulo.Cantidad,this.Descontinuado=this.articulo.Descontinuado,this.accionActive=!1;break;default:break}},ejecutarAccion(){switch(this.accion){case"Alta":let t={Sku:this.Sku,"Artículo":this.Artículo,Marca:this.Marca,Modelo:this.Modelo,Departamento:this.Departamento,Clase:this.Clase,Familia:this.Familia,FechaAlta:this.FechaAlta,FechaBaja:this.FechaBaja,Stock:this.Stock,Cantidad:this.Cantidad,Descontinuado:this.Descontinuado};this.articulos.push(t),this.reset();break;case"Baja":this.articulos.splice(this.articuloIndex,1),this.reset();break;case"Cambio":this.articulos[this.articuloIndex]={Sku:this.Sku,"Artículo":this.Artículo,Marca:this.Marca,Modelo:this.Modelo,Departamento:this.Departamento,Clase:this.Clase,Familia:this.Familia,FechaAlta:this.FechaAlta,FechaBaja:this.FechaBaja,Stock:this.Stock,Cantidad:this.Cantidad,Descontinuado:this.Descontinuado},this.reset();break;case"Consulta":this.consultar();break;default:break}}}}),M=D,x=e(1001),j=(0,x.Z)(M,C,S,!1,null,null,null),Z=j.exports,g={name:"App",components:{Abcc:Z},data:()=>({})},B=g,w=(0,x.Z)(B,s,n,!1,null,null,null),y=w.exports,_=e(1705);i.ZP.use(_.Z);var O=new _.Z({});i.ZP.config.productionTip=!1,new i.ZP({vuetify:O,render:t=>t(y)}).$mount("#app")}},a={};function e(i){var c=a[i];if(void 0!==c)return c.exports;var o=a[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(a,i,c,o){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],c=t[u][1],o=t[u][2];for(var n=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[l])}))?i.splice(l--,1):(n=!1,o<s&&(s=o));if(n){t.splice(u--,1);var r=c();void 0!==r&&(a=r)}}return a}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,c,o]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,i){var c,o,s=i[0],n=i[1],l=i[2],r=0;if(s.some((function(a){return 0!==t[a]}))){for(c in n)e.o(n,c)&&(e.m[c]=n[c]);if(l)var u=l(e)}for(a&&a(i);r<s.length;r++)o=s[r],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(u)},i=self["webpackChunkabcc"]=self["webpackChunkabcc"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(1446)}));i=e.O(i)})();
//# sourceMappingURL=app.3d93d99e.js.map