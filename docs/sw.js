if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>i(e,n),t={module:{uri:n},exports:a,require:u};s[n]=Promise.all(l.map((e=>t[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3c99db12"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"d8155efa8a592d314ed9d0bbce2e304e"},{url:"assets/_...all_.6352a7d5.js",revision:null},{url:"assets/_name_.75b1abff.js",revision:null},{url:"assets/_name_.7e30c135.css",revision:null},{url:"assets/404.a9d4f0d8.css",revision:null},{url:"assets/404.e60db5ed.js",revision:null},{url:"assets/about.43cdaa54.css",revision:null},{url:"assets/about.97f6651c.js",revision:null},{url:"assets/app.ad3942b6.css",revision:null},{url:"assets/app.db732191.js",revision:null},{url:"assets/home.70aa1dc6.css",revision:null},{url:"assets/home.a427b2cd.js",revision:null},{url:"assets/README.7c88450d.css",revision:null},{url:"assets/README.8be51a48.js",revision:null},{url:"assets/virtual_pwa-register.0b4e155d.js",revision:null},{url:"index.html",revision:"8afa32069e687f4acf16a1f70aeeaf84"},{url:"readme.html",revision:"f71b9bdc8ce9ab569eedddfb1e5dffc1"},{url:"favicon.svg",revision:"505fc25048cd39e43f4913849a1c62e0"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
