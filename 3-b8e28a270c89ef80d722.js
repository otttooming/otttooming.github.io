(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(e,t,a){var r;e.exports=(r=a(213))&&r.default||r},210:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(68),l=a.n(i);a.d(t,"a",function(){return l.a});a(208),a(10).default.enqueue,n.a.createContext({})},211:function(e,t,a){"use strict";var r=a(212),n=a(0),i=a(207),l=a(209),o=a(259),s=a(210),d=l.default.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1vfx1sm-0"})(["display:flex;align-self:center;justify-content:space-between;max-width:960px;margin:0 auto;padding:",";"],i.theme.space.l),c=Object(l.default)(s.a).withConfig({displayName:"Header__Home",componentId:"sc-1vfx1sm-1"})(["display:flex;align-self:center;color:inherit;text-decoration:none;"]),u=l.default.h1.withConfig({displayName:"Header__Heading",componentId:"sc-1vfx1sm-2"})(["margin:0;font-size:18px;margin-left:8px;"]),f=l.default.ul.withConfig({displayName:"Header__List",componentId:"sc-1vfx1sm-3"})(["margin:0;padding:0;"]),m=l.default.li.withConfig({displayName:"Header__Item",componentId:"sc-1vfx1sm-4"})(["list-style:none;"]),p=Object(l.default)(s.a).withConfig({displayName:"Header__Link",componentId:"sc-1vfx1sm-5"})(["color:inherit;text-decoration:none;"]),g=function(e){e.siteTitle;return n.createElement(d,null,n.createElement(c,{to:"/"},n.createElement(o.a,null),n.createElement(u,null,"OTTO")),n.createElement(f,null,n.createElement(m,null,n.createElement(p,{to:"/projects"},"Projects"))))};g.defaultProps={siteTitle:""};var C=g;a(217),t.a=function(e){var t=e.children,a=r.data;return n.createElement(n.Fragment,null,n.createElement(C,{siteTitle:a.site.siteMetadata.title}),n.createElement(i.GlobalStyle,null),n.createElement("div",{style:{paddingTop:0}},n.createElement("main",null,t),n.createElement("footer",null)))}},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Personal portfolio - Ott"}}}}},213:function(e,t,a){"use strict";a.r(t);a(52),a(16),a(14),a(15),a(8),a(22);var r=a(0),n=a.n(r),i=a(100);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){o(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},221:function(e,t,a){"use strict";a(14),a(15),a(8),a(98),a(154),a(249);var r=a(20);t.__esModule=!0,t.default=void 0;var n,i=r(a(77)),l=r(a(78)),o=r(a(156)),s=r(a(157)),d=r(a(0)),c=r(a(53)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,C="undefined"!=typeof window,h=C&&window.IntersectionObserver,y=new WeakMap;function L(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function b(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var w=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)}).join("")+"<img "+d+l+o+a+r+t+i+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(H,(0,s.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},H=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,s.default)({sizes:a,srcSet:r,src:n},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});H.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var M=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=C&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||C&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,C=e.backgroundColor,h=e.durationFadeIn,y=e.Tag,v=e.itemProp,k=e.loading,w=e.draggable,M=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,s.default)({opacity:M?1:0,transition:x?"opacity "+h+"ms":"none"},o),R="boolean"==typeof C?"lightgray":C,Z={transitionDelay:h+"ms"},I=(0,s.default)({opacity:this.state.imgLoaded?0:1},x&&Z,o,f),z={title:t,alt:this.state.isVisible?"":a,style:I,className:m};if(p){var q=p,W=q[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),R&&d.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&Z)}),W.base64&&d.default.createElement(S,{src:W.base64,spreadProps:z,imageVariants:q,generateSources:b}),W.tracedSVG&&d.default.createElement(S,{src:W.tracedSVG,spreadProps:z,imageVariants:q,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,L(q),d.default.createElement(H,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:k,draggable:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,s.default)({alt:a,title:t,loading:k},W,{imageVariants:q}))}}))}if(g){var j=g,P=j[0],T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete T.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},R&&d.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:R,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},x&&Z)}),P.base64&&d.default.createElement(S,{src:P.base64,spreadProps:z,imageVariants:j,generateSources:b}),P.tracedSVG&&d.default.createElement(S,{src:P.tracedSVG,spreadProps:z,imageVariants:j,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,L(j),d.default.createElement(H,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:k,draggable:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,s.default)({alt:a,title:t,loading:k},P,{imageVariants:j}))}}))}return null},t}(d.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});M.propTypes={resolutions:x,sizes:O,fixed:c.default.oneOfType([x,c.default.arrayOf(x)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=M;t.default=R},225:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,[r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.3 76.362C33.3 58.31 43.081 51.882 52.231 51.882C63.46 51.882 71.004 61.648 71.004 76.194C71.004 92.784 61.407 100.195 51.915 100.195C39.116 100.195 33.3 87.827 33.3 76.362ZM56.74 30.644C43.389 30.644 35.66 36.699 31.932 40.878C31.484 37.275 29.133 32.6 19.949 32.6H0V53.671H8.176C9.562 53.671 10.009 54.114 10.009 55.513V151.73H33.783V115.618C33.783 114.644 33.765 113.732 33.739 112.918C37.449 116.352 44.546 121.098 55.626 121.098C78.864 121.098 95.12 102.506 95.12 75.875C95.12 48.82 79.689 30.644 56.74 30.644",fill:"currentColor",key:0}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M127.046 96.396V45.41C127.046 36.796 122.932 32.6 114.502 32.6H93.255V53.67H101.439C102.817 53.67 103.264 54.122 103.264 55.512V106.321C103.264 115.068 107.247 119.131 115.782 119.131H137.055V98.247H128.871C127.555 98.247 127.046 97.715 127.046 96.397",fill:"currentColor",key:1}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M184.306 100.195C171.542 100.195 165.699 87.827 165.699 76.362C165.699 58.31 175.481 51.882 184.639 51.882C195.868 51.882 203.412 61.648 203.412 76.194C203.412 92.784 193.824 100.195 184.306 100.195V100.195ZM189.156 30.644C175.788 30.644 168.076 36.699 164.331 40.878C163.892 37.275 161.55 32.6 152.365 32.6H132.408V53.671H140.584C141.961 53.671 142.408 54.114 142.408 55.513V151.73H166.2V115.618C166.2 114.644 166.174 113.732 166.148 112.918C169.841 116.352 176.964 121.098 188.035 121.098C211.282 121.098 227.52 102.506 227.52 75.875C227.52 48.82 212.098 30.644 189.158 30.644H189.156ZM254.326 63.386C256.905 54.896 263.352 50.079 272.266 50.079C279.424 50.079 284.933 55.577 285.906 63.386H254.326ZM272.266 30.646C246.65 30.646 228.736 49.247 228.736 75.878C228.736 102.075 248.062 121.1 274.696 121.1C295.644 121.1 308.443 108.582 308.986 108.05L309.943 107.095L299.583 89.751L298.047 91.221C297.942 91.301 288.547 100.038 276.134 100.038C264.221 100.038 255.501 92.699 253.44 81.19H309.82L309.952 79.614C309.996 79.401 310.46 74.294 310.46 71.796C310.46 47.184 295.109 30.646 272.265 30.646H272.266ZM354.535 100.195C343.227 100.195 335.911 90.642 335.911 75.875C335.911 61.515 343.526 51.883 354.86 51.883C367.711 51.883 373.475 63.843 373.475 75.716C373.475 93.776 363.685 100.196 354.535 100.196V100.195ZM396.932 96.397V12.831C396.932 4.21699 392.765 0.0209961 384.221 0.0209961H362.974V21.1H371.159C372.536 21.1 372.983 21.543 372.983 22.941V38.045C369.475 34.849 362.623 30.644 350.824 30.644C327.753 30.644 311.655 49.244 311.655 75.875C311.655 102.931 327.077 121.098 350.026 121.098C363.141 121.098 370.703 114.954 374.396 110.668C374.878 114.405 377.273 119.132 386.168 119.132H406.766V98.247H398.756C397.441 98.247 396.932 97.717 396.932 96.397V96.397ZM459.672 31.457C449.777 31.457 440.671 37.221 435.267 46.402V44.427C435.267 36.583 430.977 32.599 422.556 32.599H402.116V53.67H410.292C411.669 53.67 412.125 54.113 412.125 55.512V119.132H435.9V84.506C435.9 79.946 436.479 75.556 437.601 71.492C441.181 59.549 450.69 55.299 458.383 55.299C461.112 55.299 463.094 55.591 463.129 55.6L465.112 55.901V32.051L463.664 31.803C463.594 31.785 461.577 31.457 459.673 31.457H459.672ZM498.951 96.396V45.41C498.951 36.796 494.855 32.6 486.424 32.6H467.204V53.67H473.344C474.731 53.67 475.169 54.122 475.169 55.512V106.321C475.169 115.068 479.161 119.131 487.714 119.131H508.97V98.247H500.776C499.46 98.247 498.951 97.715 498.951 96.397",fill:"currentColor",key:2}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M588.708 32.601H576.023C568.61 32.601 564.636 35.195 562.285 41.561L546.785 85.251C546.249 86.871 545.749 88.687 545.319 90.431C544.872 88.687 544.337 86.845 543.749 85.225L528.248 41.552C525.871 35.116 522.028 32.602 514.519 32.602H501.027V53.672H504.527C506.387 53.672 506.984 54.309 507.422 55.478L531.415 119.133H558.153L582.146 55.478C582.584 54.309 583.199 53.672 585.058 53.672H588.708V32.602V32.601ZM611.71 63.386C614.316 54.896 620.738 50.079 629.642 50.079C636.818 50.079 642.318 55.577 643.292 63.386H611.71V63.386ZM629.642 30.646C604.035 30.646 586.13 49.247 586.13 75.878C586.13 102.075 605.438 121.1 632.072 121.1C653.029 121.1 665.837 108.582 666.372 108.05L667.337 107.095L657.003 89.751L655.423 91.221C655.345 91.301 645.897 100.038 633.528 100.038C621.606 100.038 612.886 92.699 610.825 81.19H667.223L667.354 79.614C667.381 79.401 667.864 74.294 667.864 71.796C667.864 47.184 652.503 30.646 629.642 30.646ZM125.42 0.026001H104.225V22.558H125.42V0.026001ZM497.336 0.026001H476.133V22.558H497.336V0.026001Z",fill:"currentColor",key:3})])}n.defaultProps={viewBox:"0 0 668 152",fill:"none"},e.exports=n,n.default=n},226:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},[r.createElement("marker",{id:"DefaultArrow2",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:0},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M -9 54 L -9 -54 L 117 0 z"}))),r.createElement("marker",{id:"DefaultArrow3",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:1},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M -27 54 L -9 0 L -27 -54 L 135 0 z"}))),r.createElement("marker",{id:"DefaultArrow4",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:2},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M -9,0 L -9,-45 C -9,-51.708 2.808,-56.580 9,-54 L 117,-9 C 120.916,-7.369 126.000,-4.242 126,0 C 126,4.242 120.916,7.369 117,9 L 9,54 C 2.808,56.580 -9,51.708 -9,45 z"}))),r.createElement("marker",{id:"DefaultArrow5",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:3},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M -54, 0 C -54,29.807 -29.807,54 0,54 C 29.807,54 54,29.807 54,0 C 54,-29.807 29.807,-54 0,-54 C -29.807,-54 -54,-29.807 -54,0 z"}))),r.createElement("marker",{id:"DefaultArrow6",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:4},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M -63,0 L 0,63 L 63,0 L 0,-63 z"}))),r.createElement("marker",{id:"DefaultArrow7",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:5},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M 18,-54 L 108,-54 L 63,0 L 108,54 L 18, 54 L -36,0 z"}))),r.createElement("marker",{id:"DefaultArrow8",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:6},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M -36,0 L 18,-54 L 54,-54 L 18,-18 L 27,-18 L 63,-54 L 99,-54 L 63,-18 L 72,-18 L 108,-54 L 144,-54 L 90,0 L 144,54 L 108,54 L 72,18 L 63,18 L 99,54 L 63,54 L 27,18 L 18,18 L 54,54 L 18,54 z"}))),r.createElement("marker",{id:"DefaultArrow9",markerUnits:"strokeWidth",viewBox:"0 0 1 1",markerWidth:"1",markerHeight:"1",overflow:"visible",orient:"auto",key:7},r.createElement("g",{transform:"scale(0.0092592592)"},r.createElement("path",{d:"M 0,45 L -45,0 L 0, -45 L 45, 0 z M 0, 63 L-63, 0 L 0, -63 L 63, 0 z"}))),r.createElement("filter",{id:"StainedFilter",key:8},[r.createElement("feBlend",{mode:"multiply",in2:"BackgroundImage",in:"SourceGraphic",result:"blend",key:0}),r.createElement("feComposite",{in:"blend",in2:"SourceAlpha",operator:"in",result:"comp",key:1})]),r.createElement("filter",{id:"BleachFilter",key:9},[r.createElement("feBlend",{mode:"screen",in2:"BackgroundImage",in:"SourceGraphic",result:"blend",key:0}),r.createElement("feComposite",{in:"blend",in2:"SourceAlpha",operator:"in",result:"comp",key:1})]),r.createElement("filter",{id:"InvertTransparencyBitmapFilter",key:10},[r.createElement("feComponentTransfer",{key:0},[r.createElement("feFuncR",{type:"gamma",amplitude:"1.055",exponent:".416666666",offset:"-0.055",key:0}),r.createElement("feFuncG",{type:"gamma",amplitude:"1.055",exponent:".416666666",offset:"-0.055",key:1}),r.createElement("feFuncB",{type:"gamma",amplitude:"1.055",exponent:".416666666",offset:"-0.055",key:2})]),r.createElement("feComponentTransfer",{key:1},[r.createElement("feFuncR",{type:"linear",slope:"-1",intercept:"1",key:0}),r.createElement("feFuncG",{type:"linear",slope:"-1",intercept:"1",key:1}),r.createElement("feFuncB",{type:"linear",slope:"-1",intercept:"1",key:2}),r.createElement("feFuncA",{type:"linear",slope:"1",intercept:"0",key:3})]),r.createElement("feComponentTransfer",{key:2},[r.createElement("feFuncR",{type:"gamma",amplitude:"1",exponent:"2.4",offset:"0",key:0}),r.createElement("feFuncG",{type:"gamma",amplitude:"1",exponent:"2.4",offset:"0",key:1}),r.createElement("feFuncB",{type:"gamma",amplitude:"1",exponent:"2.4",offset:"0",key:2})])])]),r.createElement("g",{id:"Document",fill:"none",stroke:"black",fontFamily:"Times New Roman",fontSize:"16",transform:"scale(1 -1)",key:1},r.createElement("g",{id:"Spread",transform:"translate(0 -269.292)"},r.createElement("g",{id:"Layer 1"},r.createElement("path",{d:"M 125.898,29.759 L 120.696,44.317 C 120.451,45.087 120.859,45.969 122.06,46.1 C 125.953,46.526 130.753,48.052 134.426,49.809 C 141.027,52.967 145.954,59.882 146.573,67.458 C 145.535,66.858 144.307,66.361 142.845,65.945 C 141.637,65.508 140.152,65.172 138.424,64.905 C 136.68,64.649 134.769,64.54 132.685,64.54 C 125.991,64.54 120.451,65.553 116.056,67.608 C 111.673,69.676 108.17,72.379 105.563,75.71 C 102.951,79.066 101.136,82.849 100.085,87.094 C 99.042,91.341 98.527,95.647 98.527,100.004 C 98.527,104.729 99.109,109.211 100.283,113.44 C 101.453,117.688 103.387,121.423 106.086,124.638 C 108.776,127.847 112.244,130.412 116.505,132.345 C 120.753,134.272 127.239,135.753 133.41,135.705 C 145.573,135.625 153.229,133.214 156.534,132.307 C 159.67,131.429 164.77,129.969 167.165,128.905 C 168.37,128.373 168.739,127.616 168.739,126.366 L 168.739,81.756 C 168.428,64.96 166.97,53.992 160.031,44.336 C 155.405,37.867 148.587,34.45 143.688,32.513 C 139.895,31.019 130.633,28.585 127.674,28.351 C 126.854,28.284 126.161,29.108 125.898,29.759 Z M 213.278,73.745 C 208.38,79.679 208.678,88.732 208.678,96.589 L 208.678,130.569 C 208.678,131.56 209.483,132.365 210.499,132.365 L 228.982,132.365 C 229.998,132.365 230.812,131.56 230.812,130.569 L 230.783,91.675 C 230.783,89.405 230.883,87.481 231.46,85.975 C 232.1,84.263 232.992,82.756 234.54,81.656 C 236.086,80.56 237.557,80.044 240.263,80.044 C 242.962,80.044 244.421,80.56 245.954,81.656 C 247.512,82.756 248.396,84.263 249.041,85.975 C 249.611,87.481 249.711,89.405 249.711,91.675 L 249.678,130.569 C 249.678,131.56 250.503,132.365 251.499,132.365 L 270.001,132.365 C 271.007,132.365 271.831,131.56 271.831,130.569 L 271.831,96.589 C 271.831,88.732 272.107,79.679 267.212,73.745 C 261.175,66.413 251.699,64.54 240.253,64.54 C 228.804,64.54 219.325,66.413 213.278,73.745 Z M 69.323,68.256 L 69.323,130.569 C 69.323,131.56 70.122,132.365 71.139,132.365 L 89.624,132.365 C 90.634,132.365 91.448,131.56 91.448,130.569 L 91.448,68.256 C 91.448,67.258 90.634,66.457 89.624,66.457 L 71.139,66.457 C 70.122,66.457 69.323,67.258 69.323,68.256 Z M 177.636,68.256 L 177.636,153.722 C 177.636,154.723 178.456,155.517 179.456,155.517 L 197.955,155.517 C 198.945,155.517 199.769,154.723 199.769,153.722 L 199.769,68.256 C 199.769,67.258 198.945,66.457 197.955,66.457 L 179.456,66.457 C 178.456,66.457 177.636,67.258 177.636,68.256 Z M 305.281,68.771 C 305.359,70.33 305.346,71.878 305.346,73.44 C 305.346,152.029 240.907,215.734 161.423,215.731 C 103.566,215.731 53.961,181.864 31.084,133.205 C 30.353,131.64 27.987,132.559 28.394,134.268 C 43.462,195.857 100.851,240.945 167.893,240.945 C 247.383,240.945 311.812,177.244 311.812,98.644 C 311.812,88.29 310.678,78.146 308.568,68.41 C 307.93,65.508 305.147,65.992 305.281,68.771 Z M 138.321,78.928 C 139.783,79.182 141.127,79.521 142.348,79.971 C 143.79,80.464 145.201,80.977 146.497,81.756 L 146.497,117.884 C 145.644,118.486 144.688,119.037 143.647,119.551 C 142.781,119.986 141.755,120.362 140.594,120.708 C 139.421,121.054 138.138,121.236 136.75,121.236 C 133.378,121.236 130.611,120.563 128.502,119.233 C 126.379,117.902 124.719,116.21 123.551,114.152 C 122.375,112.093 121.609,109.827 121.208,107.346 C 120.82,104.857 120.622,102.408 120.622,100.004 C 120.622,97.872 120.743,95.708 120.945,93.528 C 121.166,91.341 121.73,89.273 122.651,87.35 C 123.551,85.417 124.911,83.708 126.68,82.204 C 128.453,80.711 130.855,79.669 133.891,79.066 C 135.375,78.759 136.84,78.668 138.321,78.928 Z M 69.323,142.142 L 69.323,153.722 C 69.323,154.723 70.122,155.517 71.139,155.517 L 89.624,155.517 C 90.634,155.517 91.448,154.723 91.448,153.722 L 91.448,142.142 C 91.448,141.155 90.634,140.35 89.624,140.35 L 71.139,140.35 C 70.122,140.35 69.323,141.155 69.323,142.142 Z",fill:"currentColor",stroke:"none",fillRule:"nonzero",strokeWidth:"0",markerStart:"none",markerEnd:"none",strokeMiterlimit:"79.8403193612775"}))))])}n.defaultProps={strokeWidth:"0.501",strokeLinejoin:"bevel",fillRule:"evenodd",version:"1.1",overflow:"visible",viewBox:"0 0 340.158 269.292"},e.exports=n,n.default=n},227:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Voog logo blue"),r.createElement("desc",{key:1},"Created with Sketch."),r.createElement("defs",{key:2}),r.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:3},r.createElement("g",{id:"Voog-logo-blue",fillRule:"nonzero",fill:"currentColor"},r.createElement("path",{d:"M174.283,20.941 L174.283,20.943 C174.283,21.136 174.26,21.326 174.254,21.519 C174.219,22.84 174.059,24.13 173.795,25.382 L173.748,25.381 C171.711,34.814 163.33,41.884 153.287,41.884 C147.506,41.884 142.269,39.541 138.48,35.751 L138.515,35.715 C138.486,35.689 138.454,35.661 138.425,35.631 C134.702,31.851 132.4,26.667 132.4,20.941 C132.4,9.376 141.775,0 153.342,0 C159.125,0 164.362,2.343 168.151,6.133 L164.424,9.86 C161.588,7.022 157.67,5.268 153.342,5.268 C144.686,5.268 137.668,12.287 137.668,20.942 C137.668,24.62 138.943,27.993 141.063,30.667 C141.44,31.14 141.85,31.583 142.278,32.008 L142.233,32.052 C145.067,34.874 148.973,36.618 153.288,36.618 C161.046,36.618 167.47,30.977 168.726,23.579 L153.21,23.579 L153.21,18.306 L168.778,18.306 L172.249,18.306 L174.101,18.306 C174.209,19.172 174.283,20.047 174.283,20.941 M64.34,0.001 L64.34,5.27 C72.998,5.27 80.014,12.288 80.014,20.944 C80.014,29.6 72.998,36.617 64.34,36.617 C55.684,36.617 48.664,29.599 48.664,20.943 L43.396,20.943 C43.396,32.508 52.773,41.884 64.339,41.884 C75.905,41.884 85.282,32.508 85.282,20.943 C85.283,9.377 75.906,0.001 64.34,0.001 M37.906,12.331 L27.861,33.529 C27.054,35.275 25.588,36.55 24.318,36.591 L24.121,36.592 C22.885,36.567 21.406,35.286 20.592,33.53 L5.809,1.501 L0,1.501 L15.811,35.738 C17.581,39.57 20.702,41.859 24.159,41.859 L24.296,41.859 C27.753,41.859 30.876,39.57 32.644,35.74 L42.636,14.668 L42.634,14.668 C45.054,9.135 50.577,5.27 57.003,5.27 L57.003,0.001 C48.504,0.001 41.189,5.061 37.906,12.331 M108.768,0 C97.201,0 87.824,9.376 87.824,20.943 C87.824,32.507 97.201,41.883 108.767,41.883 C120.333,41.883 129.708,32.507 129.708,20.943 C129.709,9.376 120.334,0 108.768,0 M108.768,36.564 C100.139,36.564 93.145,29.57 93.145,20.943 C93.145,12.314 100.139,5.318 108.768,5.318 C117.395,5.318 124.389,12.314 124.389,20.943 C124.389,29.57 117.395,36.564 108.768,36.564",id:"Shape"})))])}n.defaultProps={viewBox:"0 0 175 42",version:"1.1"},e.exports=n,n.default=n},228:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M17.689,12.756c1.278,0.734,1.278,1.934,0,2.668s-3.366,1.935-4.643,2.668-2.321.133-2.321-1.335V11.422c0-1.466,1.043-2.066,2.321-1.333ZM28.049,26V13.952a14.015,14.015,0,1,0-5.184,10.824v1.668a0.494,0.494,0,0,0,.144.355c0.18,0.14.582,0.518,2.36,0.518a3.982,3.982,0,0,0,2.523-.506,0.551,0.551,0,0,0,.157-0.42V26ZM14.024,23.486a9.535,9.535,0,1,1,9.582-9.534A9.568,9.568,0,0,1,14.024,23.486ZM42.695,12.074q-2.9,0-2.894,3.485v2.36a4.168,4.168,0,0,0,.634,2.552,2.624,2.624,0,0,0,2.206.823,4.391,4.391,0,0,0,3-1.153V13.419A3.884,3.884,0,0,0,42.695,12.074Zm5.35,10.893Q48.045,29,42.474,29a9.3,9.3,0,0,1-3.749-.659,1.025,1.025,0,0,1-.359-1.756,0.866,0.866,0,0,1,.827-0.219,6.62,6.62,0,0,0,.634.192l0.663,0.165a8.061,8.061,0,0,0,1.847.22q3.308,0,3.309-3.868V22.308a5.933,5.933,0,0,1-3.419,1.1q-4.854,0-4.853-5.761V15.833q0-5.87,4.909-5.872A5.272,5.272,0,0,1,45.646,11.2V11.169a1.183,1.183,0,0,1,.344-0.851,1.127,1.127,0,0,1,.84-0.357,1.171,1.171,0,0,1,.883.343,1.2,1.2,0,0,1,.332.864v11.8Zm11.028-7.326q0-3.457-3.143-3.457-3.115,0-3.116,3.457v2.826q0,3.486,3.116,3.485,3.145,0,3.143-3.485V15.641ZM60.2,22.473a5.318,5.318,0,0,1-4.274,1.674,5.28,5.28,0,0,1-4.246-1.674,5.933,5.933,0,0,1-1.3-4.006V15.641a5.937,5.937,0,0,1,1.3-4.006A5.283,5.283,0,0,1,55.93,9.961,5.321,5.321,0,0,1,60.2,11.635a5.94,5.94,0,0,1,1.3,4.006v2.826A5.936,5.936,0,0,1,60.2,22.473Zm10.327,1.18a1.05,1.05,0,0,1-.787.329H68.918a4.341,4.341,0,0,1-3.833-1.619,7.746,7.746,0,0,1-.966-4.308V12.184h-0.8a1.011,1.011,0,0,1-.743-0.3,0.973,0.973,0,0,1-.3-0.713,1.033,1.033,0,0,1,1.047-1.043h0.8V7.3a1.157,1.157,0,0,1,.358-0.85,1.171,1.171,0,0,1,.855-0.357,1.126,1.126,0,0,1,.842.357,1.184,1.184,0,0,1,.344.85v2.827h2.564a1.02,1.02,0,0,1,.745.3,1.009,1.009,0,0,1,.3.741,0.975,0.975,0,0,1-.3.713,1.016,1.016,0,0,1-.745.3H66.518v5.845a5.764,5.764,0,0,0,.523,2.935,2.375,2.375,0,0,0,2.152.823h0.551a1.076,1.076,0,0,1,.787.315,1.064,1.064,0,0,1,.317.783A1.076,1.076,0,0,1,70.531,23.653Zm9.94-8.012q0-3.457-3.144-3.457-3.115,0-3.116,3.457v2.826q0,3.486,3.116,3.485,3.145,0,3.144-3.485V15.641ZM81.6,22.473a6.257,6.257,0,0,1-8.519,0,5.929,5.929,0,0,1-1.3-4.006V15.641a5.933,5.933,0,0,1,1.3-4.006,6.257,6.257,0,0,1,8.519,0,5.936,5.936,0,0,1,1.3,4.006v2.826A5.932,5.932,0,0,1,81.6,22.473ZM92.975,12.444Q92.161,10.125,91.2,7.711q-1.875,4.8-3.309,9.356H94.5Q93.788,14.764,92.975,12.444Zm5.708,10.468a1.181,1.181,0,0,1,.013.165,1.026,1.026,0,0,1-.385.837,1.365,1.365,0,0,1-.884.315,1.13,1.13,0,0,1-1.183-.96q-0.195-.768-0.469-1.742T95.14,19.317H87.252q-0.386,1.318-1.075,3.951a1.116,1.116,0,0,1-1.157.96,1.287,1.287,0,0,1-.856-0.329,1.066,1.066,0,0,1-.385-0.851,1.447,1.447,0,0,1,.055-0.329q1.048-4.335,2.509-8.725t3.308-8.917a1.607,1.607,0,0,1,3.172,0q1.763,4.336,3.213,8.711t2.606,8.931C98.659,22.793,98.673,22.858,98.683,22.912ZM110.73,23.8a1.178,1.178,0,0,1-.867.342,1.145,1.145,0,0,1-.841-0.342,1.167,1.167,0,0,1-.345-0.864V15.2a3.538,3.538,0,0,0-.523-2.14,2.485,2.485,0,0,0-2.095-.824,3.539,3.539,0,0,0-3.338,1.729V22.94a1.144,1.144,0,0,1-.358.864,1.2,1.2,0,0,1-.855.342,1.223,1.223,0,0,1-1.214-1.207V13.693a1.759,1.759,0,0,0-.855-1.729,0.834,0.834,0,0,1-.469-0.8,0.991,0.991,0,0,1,1.187-1.043,2.349,2.349,0,0,1,1.488.576,2.643,2.643,0,0,1,.608.906,5.552,5.552,0,0,1,4.3-1.646q4.521,0,4.522,5.022V22.94A1.164,1.164,0,0,1,110.73,23.8Zm10.631-10.5a3.913,3.913,0,0,0-2.868-1.262q-2.951,0-2.95,3.7v2.991q0,3.32,3.006,3.32a4.221,4.221,0,0,0,2.812-1.153v-7.6Zm2.454,10.838a2.136,2.136,0,0,1-1.986-1.207,5.914,5.914,0,0,1-3.611,1.207q-5.1,0-5.1-5.542v-2.5q0-6.146,4.935-6.146a5.461,5.461,0,0,1,3.309,1.07V5.3a1.131,1.131,0,0,1,.345-0.836,1.179,1.179,0,0,1,.868-0.344,1.148,1.148,0,0,1,.841.344,1.135,1.135,0,0,1,.345.836V20.58a1.774,1.774,0,0,0,.772,1.728,0.836,0.836,0,0,1,.469.8A0.99,0.99,0,0,1,123.815,24.147ZM137.3,9.413a2.765,2.765,0,0,0-.827-2.086,4.383,4.383,0,0,0-3.2-1.015h-3.86V13.8h4.219a3.963,3.963,0,0,0,2.811-.905,2.839,2.839,0,0,0,.855-2.141V9.413Zm0.855,5.213a6.461,6.461,0,0,1-4.467,1.455h-4.273v6.914a1.242,1.242,0,1,1-2.483,0V5.215a1.206,1.206,0,0,1,.358-0.864,1.178,1.178,0,0,1,.883-0.371h5.267a6.642,6.642,0,0,1,4.936,1.728,5.077,5.077,0,0,1,1.405,3.677v1.4A4.953,4.953,0,0,1,138.153,14.626Zm6.065,9.521a2.281,2.281,0,0,1-1.489-.576,3.058,3.058,0,0,1-1.075-2.552V5.3a1.111,1.111,0,0,1,.359-0.836,1.234,1.234,0,0,1,1.709,0,1.114,1.114,0,0,1,.359.836V20.58a1.754,1.754,0,0,0,.855,1.728,0.836,0.836,0,0,1,.468.8A0.989,0.989,0,0,1,144.218,24.147Zm10.341-6.365h-2.9q-2.923,0-2.923,2.14V20.14q0,2.14,2.839,2.14,2.979,0,2.979-2.881V17.781Zm2.453,6.365a1.95,1.95,0,0,1-1.433-.576,1.8,1.8,0,0,1-.551-0.823,5.01,5.01,0,0,1-3.861,1.4,5.256,5.256,0,0,1-3.695-1.152,3.781,3.781,0,0,1-1.13-2.881v-0.22a3.563,3.563,0,0,1,1.213-2.853,5.945,5.945,0,0,1,3.86-1.126h3.144V15.257a4.159,4.159,0,0,0-.552-2.469,2.735,2.735,0,0,0-2.289-.823,5.81,5.81,0,0,0-2.811.686,1.226,1.226,0,0,1-.58.165A0.947,0.947,0,0,1,147.6,12.5a1.044,1.044,0,0,1-.289-0.727,0.987,0.987,0,0,1,.5-0.851,7.594,7.594,0,0,1,4.054-.96,5.081,5.081,0,0,1,4.026,1.4,6.394,6.394,0,0,1,1.074,4.115v5.1a1.813,1.813,0,0,0,.772,1.728,0.912,0.912,0,0,1,.469.8A0.989,0.989,0,0,1,157.012,24.147Zm9.184-2.085a14.981,14.981,0,0,1-2.787,5.158A5.725,5.725,0,0,1,159.385,29a1.227,1.227,0,0,1-.966-0.33,1.159,1.159,0,0,1-.358-0.851,1.038,1.038,0,0,1,1.13-1.152q2.427-.082,3.888-2.8-1.572-3.923-2.73-7.01t-1.875-5.42c-0.019-.072-0.032-0.137-0.042-0.192a1.335,1.335,0,0,1-.013-0.192,0.992,0.992,0,0,1,.358-0.8,1.287,1.287,0,0,1,.855-0.3,1.078,1.078,0,0,1,1.048.823q0.744,2.334,1.64,4.843t1.944,5.227l3.419-10.1a1.1,1.1,0,0,1,1.1-.8,1.253,1.253,0,0,1,.855.316,1.029,1.029,0,0,1,.358.809,1.473,1.473,0,0,1-.082.466Z"}))}n.defaultProps={viewBox:"0 0 170 29",className:"logo__img",fill:"currentColor",fillRule:"evenodd"},e.exports=n,n.default=n},249:function(e,t,a){"use strict";a(219)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=3-b8e28a270c89ef80d722.js.map