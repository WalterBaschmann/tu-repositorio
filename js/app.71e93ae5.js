(function(){"use strict";var e={1686:function(e,o,n){var t=n(5130),r=n(6768),i=n(4232),u=n.p+"img/logopoke.b55247ab.png";const s={id:"app"},c=(0,r.Lk)("img",{src:u,alt:"logo pokemon"},null,-1),a=(0,r.Lk)("h1",null,"¿Quién es ese Pokémon?",-1),p={class:"pokemon-grid"};function l(e,o,n,t,u,l){const d=(0,r.g2)("PokemonCard");return(0,r.uX)(),(0,r.CE)("div",s,[c,a,(0,r.Lk)("p",null,[(0,r.eW)("Pokémon descubiertos: "),(0,r.Lk)("span",{class:(0,i.C4)(l.discoveredClass)},(0,i.v_)(u.discoveredCount),3)]),(0,r.Lk)("div",p,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.pokemons,(e=>((0,r.uX)(),(0,r.Wv)(d,{key:e.name,pokemon:e,onPokemonDiscovered:l.incrementDiscoveredCount},null,8,["pokemon","onPokemonDiscovered"])))),128))])])}const d={class:"pokemon-card"},m=["src"],f={key:0},k={key:1};function v(e,o,n,u,s,c){return(0,r.uX)(),(0,r.CE)("div",d,[(0,r.Lk)("img",{src:c.pokemonImage,class:(0,i.C4)({revealed:s.isRevealed}),alt:"imágen de pokémon"},null,10,m),s.isRevealed?((0,r.uX)(),(0,r.CE)("div",k,[(0,r.Lk)("p",null,(0,i.v_)(n.pokemon.name),1)])):((0,r.uX)(),(0,r.CE)("div",f,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>s.userInput=e),onKeyup:o[1]||(o[1]=(0,t.jR)(((...e)=>c.checkName&&c.checkName(...e)),["enter"])),placeholder:"Nombre del pokémon"},null,544),[[t.Jo,s.userInput]]),(0,r.Lk)("button",{onClick:o[2]||(o[2]=(...e)=>c.checkName&&c.checkName(...e))},"Descubrir")]))])}var h={props:["pokemon"],data(){return{userInput:"",isRevealed:!1}},computed:{pokemonImage(){return this.pokemon.sprites.front_default}},methods:{checkName(){this.userInput.toLowerCase()===this.pokemon.name.toLowerCase()?(this.isRevealed=!0,this.$emit("pokemon-discovered")):alert("El nombre ingresado es incorrecto.")}}},g=n(1241);const b=(0,g.A)(h,[["render",v],["__scopeId","data-v-4547a107"]]);var C=b,y=n(4373),P={components:{PokemonCard:C},data(){return{pokemons:[],discoveredCount:0}},computed:{discoveredClass(){return this.discoveredCount>0?"highlighted":""}},methods:{fetchPokemons(){y.A.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((e=>{const o=e.data.results.map((e=>y.A.get(e.url)));Promise.all(o).then((e=>{this.pokemons=e.map((e=>e.data))}))}))},incrementDiscoveredCount(){this.discoveredCount++}},created(){this.fetchPokemons()}};const O=(0,g.A)(P,[["render",l]]);var L=O;const _=(0,t.Ef)(L);_.config.globalProperties.$axios=y.A,_.mount("#app")}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(o,t,r,i){if(!t){var u=1/0;for(p=0;p<e.length;p++){t=e[p][0],r=e[p][1],i=e[p][2];for(var s=!0,c=0;c<t.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[c])}))?t.splice(c--,1):(s=!1,i<u&&(u=i));if(s){e.splice(p--,1);var a=r();void 0!==a&&(o=a)}}return o}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,r,i]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/tu-repositorio/"}(),function(){var e={524:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,i,u=t[0],s=t[1],c=t[2],a=0;if(u.some((function(o){return 0!==e[o]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var p=c(n)}for(o&&o(t);a<u.length;a++)i=u[a],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},t=self["webpackChunkpokemon_app"]=self["webpackChunkpokemon_app"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(1686)}));t=n.O(t)})();
//# sourceMappingURL=app.71e93ae5.js.map