(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{5997:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/room/[id]/RoomCam",function(){return a(6788)}])},7337:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return s}});var o=a(5893),t=a(7294);function s(e){let n=e.streamManager,a=(0,t.useRef)(null);return navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{a.current.srcObject=e}).catch(e=>{e.response?router.push({pathname:"/exception",query:{msg:e.response.data}}):console.log(e)}),(0,t.useEffect)(()=>{n&&!a&&n.addVideoElement(a.current)},[a]),(0,o.jsx)("span",{children:(0,o.jsx)("video",{autoPlay:!0,ref:a})})}},6788:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return _}});var o=a(5893);a(7294);var t=a(7337),s=a(1649),r=a(9255),c=a.n(r),i=a(4533),m=a.n(i);function _(){let e=(0,s.v9)(e=>e.room.currentRoomId),n=(0,s.v9)(e=>e.player.currentNick),a=(0,s.v9)(e=>e.openvidu.publisher),r=(0,s.v9)(e=>e.openvidu.participants);return console.log("룸캠"),console.log(a),console.log(r),(0,o.jsx)("div",{className:"container",children:void 0!==e?(0,o.jsx)("div",{id:"session",children:(0,o.jsxs)("div",{id:"video-container",className:c().camList,children:[void 0!==a?(0,o.jsxs)("span",{className:m().streamcomponent,children:[(0,o.jsx)(t.default,{className:c().cam,streamManager:a}),(0,o.jsx)("div",{className:m().nickname,children:n})]}):null,null!=r?r.map((e,n)=>(0,o.jsxs)("span",{className:m().streamcomponent,children:[(0,o.jsx)(t.default,{className:c().cam,streamManager:e}),console.log(e.nick),(0,o.jsx)("div",{className:m().nickname,children:e.nick})]},e.id)):null]})}):null})}},9255:function(e){e.exports={container:"RoomPage_container__nrifP",room:"RoomPage_room__jZJqd",camList:"RoomPage_camList__pr94X",cam:"RoomPage_cam__bKlCM",chatContainer:"RoomPage_chatContainer__Hlg7I",outerChat:"RoomPage_outerChat__j4Ee0",innerChat:"RoomPage_innerChat__ZniE2",chatUnit:"RoomPage_chatUnit__9sfcL",sender:"RoomPage_sender__9HCU2",time:"RoomPage_time__4KvWW",message:"RoomPage_message__3J_1w",chatArea:"RoomPage_chatArea__njIvi",chatInput:"RoomPage_chatInput__xkHum",sendBtn:"RoomPage_sendBtn__836RZ"}},4533:function(e){e.exports={streamcomponent:"UserVideo_streamcomponent__72vDQ",nickname:"UserVideo_nickname__IX3Tw"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5997)}),_N_E=e.O()}]);