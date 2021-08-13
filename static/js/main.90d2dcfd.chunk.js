(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),r=a(3),n=a.n(r),c=(a(12),a(13),a(0));var l=function(){return Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsx)("h1",{children:"Hi, I am Alex"}),Object(c.jsx)("h1",{children:"I am a junior React developer."}),Object(c.jsx)("h1",{className:"subtitle",children:"Welcome to my playground!"})]})};var o=function(){return Object(c.jsx)("section",{className:"about",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:"I've started programming in high school, but life got in the way... a lot. Now, I am able to give it my full attention again."}),Object(c.jsx)("p",{children:"Meanwhile I've become a decent frontend developer. I am comfortable using SASS and while I prefer to write my own CSS, I am familiar with CSS libraries like Tachyons, Materialize or Bootstrap."}),Object(c.jsx)("p",{children:"I have played with VanillaJS, ReactJS and Wordpress, I am able to use APIs or connect databases. I am familiar with mapping data for both mysql and nosql databases like Mongo or Firebase."}),Object(c.jsx)("p",{children:"Why pick me? Well, I am self-taught and I am a fast learner, I am used to manage my own workload and I don't need much babysitting, I love challenges and solving bugs but I am also capable of asking for help when I need it. I am a good team player and I work well under pressure."})]})})},j=a(4),d=a(5),h=a(7),b=a(6),p={projects:[{id:"1",index:1,title:"Responsive Grid Layout",desc:"Responsive photography portofolio website with CSS grid layout",photo:"/images/fmp.png",ghlink:"https://github.com/alexVezer/gridLayoutFMP",live:"https://alexvezer.github.io/gridLayoutFMP/"},{id:"2",index:2,title:"Travel",desc:"Responsive travel agency landing page. HTML and SASS only.",photo:"/images/travel.png",ghlink:"https://github.com/alexVezer/travel",live:"https://alexvezer.github.io/travel/"},{id:"3",index:3,title:"Cooking Friends",desc:"A searchable user gallery using a fake API and Tachyons CSS library. Part of Zero to Mastery course by Andrei Neagoie.",photo:"/images/robo.png",ghlink:"https://github.com/alexVezer/robofriends",live:"https://alexvezer.github.io/robofriends/"},{id:"4",index:4,title:"One Page Responsive Layout",desc:"A responsive HTML & CSS brochure website.",photo:"/images/OnePage.png",ghlink:"https://github.com/alexVezer/responsiveOnePage",live:"https://alexvezer.github.io/responsiveOnePage/"},{id:"5",index:5,title:"Parallax Landing Page",desc:"A simple landing page with multiple parallax effects using RellaxJS.",photo:"/images/sky2.png",ghlink:"https://github.com/alexVezer/parallax-skyLand",live:"https://alexvezer.github.io/parallax-skyLand/"},{id:"6",index:6,title:"Background Generator",desc:"Simple JS website which generates a linear gradient background and provides the CSS for it.",photo:"/images/bkg_gen.png",ghlink:"https://github.com/alexVezer/background-generator",live:"https://alexvezer.github.io/background-generator/"}]},g=function(e){var t=e.project,a=(t.id,t.index,t.title),s=t.desc,i=t.photo,r=t.ghlink,n=t.live;return Object(c.jsxs)("div",{className:"full_slide",children:[Object(c.jsxs)("div",{className:"slide",children:[Object(c.jsxs)("h2",{children:[a," "]}),Object(c.jsxs)("p",{children:[" ",s," "]}),Object(c.jsxs)("div",{className:"links",children:[Object(c.jsxs)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:[" ",Object(c.jsx)("i",{class:"fab fa-github-square"})," "]}),Object(c.jsx)("a",{className:"button",href:n,target:"_blank",rel:"noopener noreferrer",children:" See live "})]})]}),Object(c.jsx)("div",{className:"slide-img",children:Object(c.jsx)("img",{src:"/myPortofolio"+i,alt:a})})]})},x=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).nextProject=function(){var e=s.state.project.index+1;s.setState({project:s.state.projects[e-1]})},s.prevProject=function(){var e=s.state.project.index-1;s.setState({project:s.state.projects[e-1]})},s.state={projects:p.projects,project:p.projects[0]},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.projects,s=t.project,i=s.index;return Object(c.jsxs)("section",{className:"project-container content",children:[Object(c.jsx)(g,{project:s}),Object(c.jsxs)("div",{className:"aa",children:[Object(c.jsx)("button",{className:"arrows dim",onClick:function(){return e.prevProject()},disabled:1===s.index,children:Object(c.jsx)("i",{className:"fas fa-chevron-left"})}),a.map((function(e,t){return t+1===i?Object(c.jsx)("i",{className:"fas fa-circle"},e.id):Object(c.jsx)("i",{class:"far fa-circle"},e.id)})),Object(c.jsx)("button",{className:"arrows right",onClick:function(){return e.nextProject()},disabled:s.index===p.projects.length,children:Object(c.jsx)("i",{className:"fas fa-chevron-right"})})]})]})}}]),a}(s.Component);var u=function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("i",{className:"fab fa-github-square skill"}),Object(c.jsx)("i",{className:"fab fa-html5 skill"}),Object(c.jsx)("i",{className:"fab fa-css3 skill"}),Object(c.jsx)("i",{className:"fab fa-react skill"}),Object(c.jsx)("i",{className:"fab fa-js-square skill"}),Object(c.jsx)("i",{className:"fas fa-database skill"}),Object(c.jsx)("i",{className:"fab fa-npm skill"})]})};var f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"https://github.com/alexVezer",children:Object(c.jsx)("i",{className:"fab fa-github scMed"})}),Object(c.jsx)("a",{href:"https://www.facebook.com/alexandra.artimon",children:Object(c.jsx)("i",{className:"fab fa-facebook-f scMed"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/alex-vezer-35936099/",children:Object(c.jsx)("i",{className:"fab fa-linkedin scMed"})}),Object(c.jsx)("a",{href:"https://stackoverflow.com/users/4579996/alexandra-v",children:Object(c.jsx)("i",{className:"fab fa-stack-overflow scMed"})})]})};var m=function(){return Object(c.jsx)("section",{className:"footer",children:Object(c.jsxs)("div",{className:"contact",children:[Object(c.jsx)(f,{}),Object(c.jsx)("hr",{}),Object(c.jsx)("h5",{children:" \xa9 2021 Alex Vezer. All Rights Reserved"})]})})};var v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)(o,{}),Object(c.jsx)(x,{}),Object(c.jsx)(u,{}),Object(c.jsx)(m,{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),r(e),n(e)}))};n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.90d2dcfd.chunk.js.map