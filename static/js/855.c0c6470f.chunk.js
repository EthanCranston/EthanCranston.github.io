"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[855],{443:function(e,s,i){i(2791);var t=i(184);s.Z=function(e){var s=e.image,i=e.caption,a=e.alt;return void 0===a&&(a=i),(0,t.jsxs)("div",{className:"flex flex-col m-2",children:[(0,t.jsx)("img",{src:s,className:"max-w-80 max-h-80 border-amber-500 rounded-md border-b-2\n            ".concat(void 0!==i?" rounded-bl-none":""),alt:a}),(0,t.jsx)("div",{className:"flex rounded-b-lg",children:(0,t.jsx)("p",{className:"mt-0 px-1 text-sm bg-amber-500 rounded-b-sm",children:i})})]})}},5497:function(e,s,i){i.r(s),i.d(s,{default:function(){return o}});i(2791),i(4311);var t=i(443),a=i.p+"static/media/test-base.ca55064811ff1e2f3f0a.png",n=i.p+"static/media/test-actual.51814f2c48af73796655.png",r=i.p+"static/media/test-diff.58b31f6e324ac7cd9903.png",c=i(184),o=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Visual Regression Tests"}),(0,c.jsxs)("p",{children:["While writing regression tests for a 3D modeling software, I was faced with the challenge of verifying the state of the modeling canvas. The specific architecture of this web application made the canvas a complete black box to ",(0,c.jsx)("a",{href:"https://www.cypress.io/",children:"Cypress"}),", the testing framework I was using. To overcome this, I implemented visual testing to identify regressions with pixel differences."]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)(t.Z,{image:a,caption:"Cube base image"}),(0,c.jsx)(t.Z,{image:n,caption:"Cylinder regression"})]}),(0,c.jsx)(t.Z,{image:r,caption:"Pixel difference highlights the issue"}),(0,c.jsx)("p",{children:"Visual testing takes a screenshot of the test run and compares it to a base image to check for any discrepancies"}),(0,c.jsxs)("p",{children:["I used the ",(0,c.jsx)("a",{href:"https://github.com/mjhea0/cypress-visual-regression",children:"cypress-visual-regression"})," open source plugin for the core of the visual testing logic, and added custom command line arguments for testers to easily interact with the library. "]})]})}},4311:function(){}}]);
//# sourceMappingURL=855.c0c6470f.chunk.js.map