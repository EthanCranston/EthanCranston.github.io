"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[855],{443:function(e,s,t){t(2791);var i=t(184);s.Z=function(e){var s=e.image,t=e.caption,a=e.alt;return void 0===a&&(a=t),(0,i.jsxs)("div",{className:"flex flex-col m-2",children:[(0,i.jsx)("img",{src:s,className:"max-w-80 max-h-80 border-amber-500 rounded-md border-b-2\n            ".concat(void 0!==t?" rounded-bl-none":""),alt:a}),(0,i.jsx)("div",{className:"flex rounded-b-lg",children:(0,i.jsx)("p",{className:"mt-0 px-1 text-sm bg-amber-500 rounded-b-sm",children:t})})]})}},5497:function(e,s,t){t.r(s),t.d(s,{default:function(){return o}});t(2791),t(4311);var i=t(443),a=t.p+"static/media/test-base.ca55064811ff1e2f3f0a.png",n=t.p+"static/media/test-actual.51814f2c48af73796655.png",r=t.p+"static/media/test-diff.58b31f6e324ac7cd9903.png",c=t(184),o=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Visual Regression Tests"}),(0,c.jsxs)("p",{children:["While writing regression tests for a 3D modeling software, I was faced with the challenge of verifying the state of the modeling canvas. The specific architecture of this web application made the canvas a complete black box to ",(0,c.jsx)("a",{href:"https://www.cypress.io/",children:"Cypress"}),", the testing framework. The usual techniques of verifying HTML elements and CSS would not work because that data did not exist. To overcome this, I implemented visual testing to identify regressions with pixel differences."]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-8 justify-center",children:[(0,c.jsx)(i.Z,{image:a,caption:"Cube base image"}),(0,c.jsx)(i.Z,{image:n,caption:"Cylinder regression"})]}),(0,c.jsx)(i.Z,{image:r,caption:"Pixel difference highlights the issue"}),(0,c.jsx)("p",{children:"Visual testing takes a screenshot of the test run and compares it to a base image to check for any discrepancies"}),(0,c.jsxs)("p",{children:["I used the ",(0,c.jsx)("a",{href:"https://github.com/mjhea0/cypress-visual-regression",children:"cypress-visual-regression"})," open source plugin for the core of the visual testing logic, and added custom command line arguments for testers to easily interact with the library. "]})]})}},4311:function(){}}]);
//# sourceMappingURL=855.ffa51120.chunk.js.map