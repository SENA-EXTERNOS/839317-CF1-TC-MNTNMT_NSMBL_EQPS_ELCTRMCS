(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"3fc0ad6a","chunk-0206bfa0":"710ee3d2","chunk-0c047e41":"a5b04820","chunk-13a6037e":"910708d3","chunk-18f95272":"a4d5c1be","chunk-25b302c8":"aed3cf05","chunk-26fc7596":"f2131e31","chunk-2c06842c":"eae31e5d","chunk-2d0e96ec":"35da4e0e","chunk-2d208d90":"700b9324","chunk-2d21d0e2":"2f00f384","chunk-2d22c123":"1006ecf9","chunk-2d2747e2":"b820ac25","chunk-2e80bb9a":"78e78952","chunk-319206de":"1edcc121","chunk-32334cb6":"7690b8e1","chunk-3c57cd7b":"0b1d6c40","chunk-3d6834f6":"cd57abbc","chunk-4cdd78c0":"4b728e57","chunk-4f2d402a":"0d5f4818","chunk-4fde0a08":"360badc4","chunk-515a8379":"ad145460","chunk-53ccb27e":"9b4d6baa","chunk-55d286b8":"61ee35e0","chunk-59974754":"6e809983","chunk-6e1e538a":"74cf3581","chunk-766a929b":"c4f887f6","chunk-c796899c":"6becfaf5","chunk-e8a7823a":"7891b7eb","chunk-f2df7d2c":"213639c0","chunk-fde47172":"0a3d372a",comple:"9fb31929",creditos:"badfcca4",glosario:"9492a39a",intro:"c2943cfc",referencias:"b2be7687",sintesis:"8100b212",tema1:"87a84df6",tema2:"009543ec",tema3:"13e35b65",tema4:"8e41d9d8",tema5:"575c2c71",tema6:"6d0c869e"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"a486f78b","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"27c4d7e7","chunk-6e1e538a":"126808df","chunk-766a929b":"62526152","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e10f9ea1",creditos:"c81402ba",glosario:"347c64c0",intro:"31d6cfe0",referencias:"78868272",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Preparación del entorno de trabajo",descripcionCurso:"Un entorno de trabajo adecuado es más importante y necesario de lo que se piensa, debe brindar una sensación de limpieza, orden, seguridad y tranquilidad. El propósito de esta preparación debe ser prioritario en cualquier ambiente de trabajo y de aprendizaje, convirtiéndose en un hábito para el desarrollo de todas sus labores.",imagenBannerPrincipal:n("ed6d"),fondoBannerPrincipal:n("8404"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("efe7")},{clases:["banner-principal-decorativo-2"],imagen:n("a603")},{clases:["banner-principal-decorativo-3"],imagen:n("e4e6")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Gestión de la información",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Formatos y registros",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Documentación e información",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Hoja de vida de equipos",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Entorno de trabajo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Área de trabajo",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Equipos",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Herramientas",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Elementos de trabajo",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Condiciones técnicas, térmicas y atmosféricas",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Aprovisionamiento y solicitud",hash:"t_2_6"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Herramientas, equipos e instrumentos",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Documentación técnica",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Seguridad y salud en el trabajo",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Atención al cliente",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Atención al cliente",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2022, 28 junio). <em>Atención al cliente</em>. [Vídeo]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=Z9zSnDD46IU"},{tema:"Condiciones de trabajo",referencia:"Organización Internacional del Trabajo (2022). <em>Metas de los ODS pertinentes vinculados con las condiciones de trabajo.</em>",tipo:"Página web",link:"https://www.ilo.org/global/topics/dw4sd/themes/working-conditions/WCMS_620657/lang--es/index.htm"},{tema:"Herramientas",referencia:"Herramundo (2022). <em>Herramientas de Electrónica. Características, Historia, Tipos e Importancia.</em>",tipo:"Página web",link:"https://herramientas.tv/electronica/"},{tema:"Seguridad y salud en el trabajo (SST)",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2022, 20 mayo). <em>Seguridad y salud en el trabajo (SST).</em> [Vídeo]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=87fQFljT7OQ"}],glosario:[{termino:"Ambiente de aprendizaje",significado:"es un término propio del SENA. Se refiere al espacio donde el aprendiz desarrolla sus habilidades, el cual puede estar dotado o no de tecnologías específicas o simplemente de mobiliarios comunes."},{termino:"Código",significado:"es la combinación de diferentes símbolos, por lo general, son alfanuméricos, organizados de una forma determinada."},{termino:"Componente electrónico",significado:"es un dispositivo que compone un circuito electrónico, son de materiales y aplicaciones específicas."},{termino:"Herramientas",significado:"son instrumentos necesarios para la ejecución adecuada de cualquier montaje o reparación de los dispositivos. "},{termino:"Laboratorio",significado:"lugar en el cual se pueden desarrollar diferentes tipos de trabajos científicos, enfocado a la investigación y experimentación, porque está dotado de equipos e instrumentos destinados para áreas específicas."},{termino:"Manual",significado:"es un compilado de aspectos que tratan sobre algún aparato o dispositivo."},{termino:"Osciloscopio",significado:"es un instrumento que realiza mediciones electrónicas, representadas en una gráfica en dos dimensiones de amplitud (Eje Y) vs tiempo (Eje X), presentando los valores en forma de coordenadas cartesianas en una pantalla en una gráfica llamada oscilograma. "},{termino:"Servicio al cliente",significado:"agregado que se da en cada producto que ofrece la organización, haciendo que los usuarios se sientan atendidos y considerados en sus necesidades."},{termino:"<em>Stock</em>",significado:"almacenamiento de productos solicitados para una posible reparación."},{termino:"Taller",significado:"lugar donde se desarrolla algún tipo de labor, por lo general, de tipo manual o artesanal."}],referencias:[{referencia:'ABI Electronics Ltd. (2022). BoardMaster 19" Rack [Imagen]. Recuperado el 18 agosto de 2022 de ',link:"https://www.abielectronics.co.uk/Products/images/BoardMaster8000PLUS.png. "},{referencia:"Arango, N. (2019). La Ley 1480 de 2011 y su impacto en la estructura obligacional de las entidades fiduciarias como voceras de las fiducias de administración y pagos, también llamadas fiducias completas en desarrollos inmobiliarios:  hacia un cambio de paradigma. . Bogotá: Universidad Externado de Colombia, 2019, en ",link:"https://bdigital.uexternado.edu.co/entities/publication/fd8708c1-7f31-4c0f-9387-ffaed440dad1"},{referencia:"Blanco, L., & Sánchez, Á. (2002). “Equipos Electrónicos. Mantenimiento.” Mantenimiento de equipos electrónicos (pp. [1]-13). Paraninfo. ",link:"https://link.gale.com/apps/doc/CX2190100007/GVRL?u=sena&sid=bookmark-GVRL&xid=08458c9c "},{referencia:"Carrasco, M. A., García, L. M., & Núñez, J. (2012). Instalaciones eléctricas básicas. Editorial Paraninfo."},{referencia:"García, S. (2019). Ingeniería del mantenimiento: manual práctico para la gestión eficaz del mantenimiento. Editorial Renovetec."},{referencia:"Garrido, S. G. (2010). Organización y gestión integral de mantenimiento. Ediciones Diaz de Santos."},{referencia:"Kosow, I. L. (1979). Control de máquinas eléctricas. Reverté."},{referencia:"Hernández Alfonso, Pablo Manuel, & Medina Peña, Diarelys , & Suárez Fragas, Yanelis (2015). Sistema automatizado para la gestión del mantenimiento de equipos (módulos administración y solicitud de servicio). Revista Ciencias Técnicas Agropecuarias, 24 ( ),85-90.[fecha de Consulta 30 de Agosto de 2022]. ISSN: 1010-2760. Disponible en: ",link:"https://www.redalyc.org/articulo.oa?id=93243475015 "},{referencia:"Nuevo, A. (2020). Montaje y mantenimiento eléctrico-electrónico. Editorial Paraninfo."},{referencia:"Vahos, J., Pino, A., & Castro, J. (2019). Desarrollo de una herramienta de software para la gestión del mantenimiento de infraestructura en el SENA regional Antioquia. Revista CINTEX, 24(1), 13-19."}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},8404:function(e,a,n){e.exports=n.p+"img/banner-bg.f435ada7.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},a603:function(e,a,n){e.exports=n.p+"img/decorativo-2.6ba14915.svg"},e4e6:function(e,a,n){e.exports=n.p+"img/decorativo-3.7268d022.svg"},ed6d:function(e,a,n){e.exports=n.p+"img/banner-img.081f921a.png"},efe7:function(e,a,n){e.exports=n.p+"img/decorativo-1.dfa2c89e.svg"}});
//# sourceMappingURL=app.c71ceaf4.js.map