(this.webpackJsonpchat_catalog=this.webpackJsonpchat_catalog||[]).push([[0],{287:function(e,t,a){"use strict";a.r(t);a(207),a(233),a(235),a(236),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275);var n=a(0),c=a.n(n),r=a(80),l=a.n(r),o=a(53),i=a.n(o),s=a(99),u=a.n(s),m=a(126),d=a(83),p=a(43),E=a(74),f=(a(284),a(69)),b=a(54),h=a(64),g=a(73),v=a(63),y=a(76),j=a(59),O=a(72),k=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(f.a,{id:t},c.a.createElement(b.a,null,"Example"),n&&c.a.createElement(v.a,{header:c.a.createElement(h.a,{mode:"secondary"})},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(O.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(v.a,{header:c.a.createElement(h.a,{mode:"secondary"},"Navigation Example")},c.a.createElement(j.a,null,c.a.createElement(g.a,{stretched:!0,size:"l",mode:"secondary",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},_=a(36),w=["\u0412\u0430\u0441\u044f","\u041f\u0435\u0442\u044f","\u041c\u0430\u043a\u0441\u0438\u043c","\u0415\u0433\u043e\u0440"].map((function(e){return c.a.createElement(_.b,{before:c.a.createElement(_.a,null),description:e},e)})),x=function(e){return c.a.createElement(_.f,{id:e.id},c.a.createElement(_.g,null,"Footer"),c.a.createElement(_.d,null,c.a.createElement(_.e,null,c.a.createElement(_.b,{before:c.a.createElement(_.a,null),description:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),w,c.a.createElement(_.b,{before:c.a.createElement(_.a,null),description:"\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0434\u043e\u043c"},"\u041f\u043e\u0441\u0442\u041d\u0430\u0443\u043a\u0430"))),c.a.createElement(_.c,null,"3 c\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"))},A=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),o=Object(d.a)(l,2),s=o[0],f=o[1],b=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),h=Object(d.a)(b,2),g=h[0],v=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:g},c.a.createElement(k,{id:"home",fetchedUser:s,go:y}),c.a.createElement(x,{id:"persik",go:y}))};i.a.send("VKWebAppInit"),l.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[287,1,2]]]);
//# sourceMappingURL=main.3b632d26.chunk.js.map