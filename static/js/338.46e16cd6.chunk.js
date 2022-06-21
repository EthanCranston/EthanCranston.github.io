"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[338],{443:function(e,t,a){a(2791);var n=a(184);t.Z=function(e){var t,a=e.image,i=e.caption,s=e.alt,r=e.maxHeight;void 0===s&&(s=i),t=void 0===i?"":" pb-0";var o="";return void 0!==r&&(o=" max-h-".concat(r)),(0,n.jsxs)("div",{class:"flex flex-col max-w-md items-center p-2".concat(t),children:[(0,n.jsx)("div",{class:"flex w-96 justify-center",children:(0,n.jsx)("img",{src:a,class:"object-contain border-amber-500 rounded-md border-b-2\n                ".concat(o),alt:s})}),(0,n.jsx)("div",{className:"flex rounded-b-lg",children:(0,n.jsx)("p",{class:"ml-0 mt-0 mb-0 text-sm pl-1 pr-1 bg-amber-500 rounded-b-sm",children:i})})]})}},2478:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(5671),i=a(3144),s=a(9340),r=a(5716),o=a(2791),c=a(1293),l=a.n(c),h=(a(5156),a(9402),a(184)),d=function(e){(0,s.Z)(a,e);var t=(0,r.Z)(a);function a(e){var i;return(0,n.Z)(this,a),(i=t.call(this,e)).code=e.code,i.language=e.language,i}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){l().highlightAll()}},{key:"render",value:function(){return(0,h.jsx)("div",{className:"max-w-full",children:(0,h.jsx)("pre",{className:"rounded-md border-amber-500 border-b-2",children:(0,h.jsx)("code",{className:"language-".concat(this.language),children:this.code})})})}}]),a}(o.Component)},4231:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});a(2791),a(4311);var n=a(443),i=a(2478),s=a(1821),r=a.p+"static/media/kilimanjaroPath.2655f3f45db69d8355c4.png",o=a.p+"static/media/grandCanyonPath.0f3207fab4b65981f088.png",c=a(184),l=function(){return(0,c.jsxs)("div",{className:"flex flex-col place-items-center w-full",children:[(0,c.jsx)("h1",{children:"DP Path-Finding"}),(0,c.jsx)("p",{children:"This program determines the most efficient path through a given terrain. It generates a grayscale map of the given elevation data with optimal paths plotted as an output."}),(0,c.jsxs)("div",{class:"flex flex-wrap gap-8 justify-center",children:[(0,c.jsx)(n.Z,{image:r,caption:"Path through Kilimanjaro"}),(0,c.jsx)(n.Z,{image:o,caption:"Path through The Grand Canyon"}),(0,c.jsx)(n.Z,{image:s,caption:"Path through The Rockies"})]}),(0,c.jsx)("br",{}),(0,c.jsx)("p",{children:"The program uses the given terrain elevation and finds the path left to right that experiences the least elevation change. The program also represents the elevations as a grayscale image. The optimal path from each left pixel is plotted in blue, and the most optimal path is plotted in yellow."}),(0,c.jsx)("br",{}),(0,c.jsx)(i.Z,{language:"c",code:h}),(0,c.jsx)("p",{children:"This simplified code snippet shows the algorithm used to  efficiently calculate the path"})]})},h="// traverse table in reverse order\nfor (int w = _width - 2; w > -1; w--) {\n    for (int h = 0; h < _height; h++) {\n        //get current elevation from previously-generated elevation table\n        curr_pos = _elevations.at(h).at(w);\n\n        //  calculate total distance for each possible movement   \n        straight_dist = abs(curr_pos - _elevations.at(h).at(w + 1)) + _dynamic_paths.at(h).at(w + 1);\n        down_dist = abs(curr_pos - _elevations.at(h + 1).at(w + 1)) + _dynamic_paths.at(h + 1).at(w + 1);\n        up_dist = abs(curr_pos - _elevations.at(h - 1).at(w + 1)) + _dynamic_paths.at(h - 1).at(w + 1);\n\n        //choose the shortest path and update the path table\n        _dynamic_paths.at(h).at(w) = min(straight_dist, up_dist, down_dist)\n    }\n"},4311:function(){},1821:function(e,t,a){e.exports=a.p+"static/media/coloradoPath.bcc685733c917a5b7324.png"}}]);
//# sourceMappingURL=338.46e16cd6.chunk.js.map