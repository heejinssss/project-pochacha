(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{5997:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/room/[id]/RoomCam",function(){return a(6788)}])},7337:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return c}});var o=a(5893),t=a(7294),i=a(4533),s=a.n(i);function c(e){let n=t.createRef();return(0,t.useEffect)(()=>{e&&n&&e.streamManager.addVideoElement(n.current)}),(0,o.jsx)("div",{children:(0,o.jsx)("video",{autoPlay:!0,ref:n,className:s().videofilter})})}},6788:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return m}});var o=a(5893);a(7294);var t=a(7337),i=a(1649),s=a(9255),c=a.n(s),r=a(4533),_=a.n(r);function m(){let e=(0,i.v9)(e=>e.openvidu.session),n=(0,i.v9)(e=>e.player.currentNick),a=(0,i.v9)(e=>e.openvidu.publisher),s=(0,i.v9)(e=>e.openvidu.participants);return console.log("Room Cam"),console.log(a),console.log(s),(0,o.jsx)("div",{className:"container",children:void 0!==e?(0,o.jsx)("div",{id:"session",children:(0,o.jsxs)("div",{id:"video-container",className:c().camList,children:[null!=s?s.map((e,n)=>null!=e?(0,o.jsxs)("span",{className:_().streamcomponent,children:[(0,o.jsx)(t.default,{className:c().cam,streamManager:e.participant}),console.log(e.nick),(0,o.jsx)("div",{className:_().nickname,children:e.nick})]},e.id):null):null,void 0!==a?(0,o.jsxs)("span",{className:_().streamcomponent,children:[(0,o.jsx)(t.default,{className:c().cam,streamManager:a}),(0,o.jsx)("div",{className:_().nickname,children:n})]}):null]})}):null})}},9255:function(e){e.exports={container:"RoomPage_container__nrifP",room:"RoomPage_room__jZJqd",camList:"RoomPage_camList__pr94X",cam:"RoomPage_cam__bKlCM",chatContainer:"RoomPage_chatContainer__Hlg7I",outerChat:"RoomPage_outerChat__j4Ee0",innerChat:"RoomPage_innerChat__ZniE2",chatUnit:"RoomPage_chatUnit__9sfcL",sender:"RoomPage_sender__9HCU2",time:"RoomPage_time__4KvWW",message:"RoomPage_message__3J_1w",chatArea:"RoomPage_chatArea__njIvi",chatInput:"RoomPage_chatInput__xkHum",sendBtn:"RoomPage_sendBtn__836RZ"}},4533:function(e){e.exports={streamcomponent:"UserVideo_streamcomponent__72vDQ",nickname:"UserVideo_nickname__IX3Tw",videofilter:"UserVideo_videofilter__Ua11Z"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5997)}),_N_E=e.O()}]);