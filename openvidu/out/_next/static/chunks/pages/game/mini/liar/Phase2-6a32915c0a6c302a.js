(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{2126:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/mini/liar/Phase2",function(){return t(7677)}])},7677:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(5893),s=t(7294),l=t(1649),i=t(8e3),a=t.n(i),o=t(4593),c=t(480),d=t(9417),u=t.n(d);function x(){let[e,n]=(0,s.useState)(0),[t,i]=(0,s.useState)(33),[d,x]=(0,s.useState)("ing"),[_,h]=(0,s.useState)({}),m=(0,l.v9)(e=>e.room.currentRoomId),j=()=>{_.current=o.L.over(()=>{let e=new(a())("http://localhost:80/ws");return e})},b=()=>{_.current.connect({},()=>{_.current.subscribe("/topic/timer/".concat(m),e=>{let n=JSON.parse(e.body);console.log("Timer 연결"),console.log(n),i(t+n.time)})})};(0,s.useEffect)(()=>{j(),b()},[]),(0,s.useEffect)(()=>{let r=setInterval(()=>{parseInt(t)>0&&i(parseInt(t)-1),0===parseInt(t)&&(0===parseInt(e)?(clearInterval(r),x("done")):(n(parseInt(e)-1),i(59)))},1e3);return()=>clearInterval(r)},[e,t]);let g=()=>{_.current?_.current.send("/timer/".concat(m),{},JSON.stringify({time:30})):alert("소켓 연결 실패!")};return(0,r.jsxs)("div",{className:"discuss",children:["ing"===d&&e>=0&&t>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"토론을 해보세요"}),(0,r.jsxs)("h2",{children:[e,":",t<10?"0".concat(t):t,"초 남았습니다."]})]}),"ing"===d&&0===e&&t<=30&&t>=1&&(0,r.jsx)("button",{className:u().addTimebtn,onClick:()=>g(),children:"시간 추가"}),"done"===d&&(0,r.jsx)(c.default,{})]})}},480:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),s=t(7294),l=t(1649),i=t(8e3),a=t.n(i),o=t(4593),c=t(9417),d=t.n(c);function u(){let e=(0,l.v9)(e=>e.room.currentRoomId),n=(0,l.v9)(e=>e.player),t=(0,l.v9)(e=>e.players.tmpPlayers),[i,c]=(0,s.useState)({}),[u,_]=(0,s.useState)("voting"),[h,m]=(0,s.useState)(!1),[j,b]=(0,s.useState)(null),[g,f]=(0,s.useState)(null),[p,v]=(0,s.useState)(""),[S,y]=(0,s.useState)(Object.keys(t)),C=e=>{b(e.target.id),console.log(j)},L=()=>{i.current=o.L.over(()=>{let e=new(a())("http://localhost:80/ws");return e})},N=()=>{i.current.connect({},()=>{i.current.subscribe("/topic/mini/liar/vote/".concat(e),e=>{let n=JSON.parse(e.body);console.log(n),4===n.total&&(!1===n.tiebreak?(f(n.liar),v(n.word),!0===n.winner?(console.log("라이어 승리!!!!"),_("liarWin")):(console.log("라이어 패배!!!!"),_("liarLose"))):(alert("동률이 나왔습니다. 재투표 해주세요!"),_("voting"),m(!1),y(n.tiebreaker)))})})};return(0,s.useEffect)(()=>{L(),N()},[]),(0,r.jsx)(r.Fragment,{children:"voting"===u?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{style:{marginBottom:"30px"},children:"누가 거짓말을 하고 있을까?"}),(0,r.jsxs)("div",{className:d().voteContainer,children:[(0,r.jsxs)("fieldset",{className:d().fieldSet,children:[(0,r.jsx)("legend",{className:d().legend,children:"라이어라고 생각되는 사람에게 투표하세요"}),(0,r.jsx)("div",{children:S.map((e,n)=>(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{style:{marginTop:"20px"},type:"radio",id:t[e].id,name:"votePlayer",value:t[e].nickname,onChange:C}),(0,r.jsx)("span",{style:{fontSize:"18px"},children:t[e].nickname}),(0,r.jsx)("br",{})]},n))})]}),!1==h?(0,r.jsx)("button",{className:d().beforeVotebtn,onClick:()=>{if(console.log("------------------------"),console.log("투표하기 클릭 시 선택된 플레이어",j),console.log("send 처리 전 voteStatus",h),console.log("------------------------"),!h){if(j){let t={playerId:n.currentPlayerId,vote:j};i.current?(i.current.send("/mini/liar/vote/".concat(e),{},JSON.stringify(t)),m(!0)):alert("소켓 연결 실패!")}else alert("플레이어를 선택해주세요!")}},children:"투표하기"}):(0,r.jsx)("button",{className:d().voteCompletebtn,onClick:()=>{h&&alert("이미 투표에 참여하셨습니다.")},children:"투표완료"})]})]}):(0,r.jsx)(x,{stageStatus:u,liar:g,currentPlayer:n.currentPlayerId,word:p})})}function x(e){let n=e.word;console.log(n);let t=e.stageStatus;console.log(t);let s=null;console.log(s=e.currentPlayer===e.liar);let i=(0,l.v9)(e=>e.players.tmpPlayers)[e.liar].nickname;return(0,r.jsx)("div",{className:d().resultContainer,children:"liarWin"===t?!0==s?(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["축하합니다.",(0,r.jsx)("br",{}),"당신의 승리입니다."]}),(0,r.jsx)("br",{}),(0,r.jsxs)("h2",{children:["제시 단어는 ",(0,r.jsx)("span",{style:{fontSize:"xx-large"},children:n})," 입니다."]})]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["아쉽네요.",(0,r.jsx)("br",{})," 라이어의 승리입니다."]}),(0,r.jsx)("div",{children:(0,r.jsxs)("h2",{children:["라이어는",(0,r.jsx)("br",{})," ",(0,r.jsx)("span",{style:{fontSize:"xx-large"},children:i}),(0,r.jsx)("br",{})," 입니다."]})})]}):!0==s?(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["아쉽네요.",(0,r.jsx)("br",{}),"당신의 패배입니다."]}),(0,r.jsx)("br",{}),(0,r.jsxs)("h2",{children:["제시 단어는 ",(0,r.jsx)("span",{style:{fontSize:"xx-large"},children:n})," 입니다."]})]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["축하합니다.",(0,r.jsx)("br",{})," 당신의 승리입니다."]}),(0,r.jsx)("div",{children:(0,r.jsxs)("h2",{children:["라이어는",(0,r.jsx)("br",{})," ",(0,r.jsx)("span",{style:{fontSize:"xx-large"},children:i}),(0,r.jsx)("br",{})," 입니다."]})})]})})}},9417:function(e){e.exports={gameContainer:"LiarGame_gameContainer__6i3pS",buttonContainer:"LiarGame_buttonContainer__3B_Kf",button:"LiarGame_button__hii_r",roof:"LiarGame_roof__jx8ig",title:"LiarGame_title__ABeA8",boxContainer:"LiarGame_boxContainer__fM4DP",box:"LiarGame_box__cUAyY",checkword:"LiarGame_checkword__LAsTV",addTimebtn:"LiarGame_addTimebtn__SCke_",voteContainer:"LiarGame_voteContainer__7hKQ_",fieldSet:"LiarGame_fieldSet__bogqs",legend:"LiarGame_legend__soHrV",beforeVotebtn:"LiarGame_beforeVotebtn__nXzg_",voteCompletebtn:"LiarGame_voteCompletebtn__5MlsQ",resultContainer:"LiarGame_resultContainer__pnHMp"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2126)}),_N_E=e.O()}]);