import{g as f,b as k}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:$,args:S,argTypes:v}=f("ibk-tabs"),n=(t,e=!0)=>[{label:"Tab Text",icon:e?"Home":void 0,id:`${t}-1`},{label:"Tab Text",icon:e?"Setting":void 0,id:`${t}-2`},{label:"Tab Text",icon:e?"InfoCirc":void 0,id:`${t}-3`,disabled:!0}],i=(t,e)=>k`
  <ibk-tabs .items="${t.items}" ?rail="${t.rail}">
    <ibk-tabs-content id="${e}-1">Content of the first tab.</ibk-tabs-content>
    <ibk-tabs-content id="${e}-2">Content of the second tab.</ibk-tabs-content>
    <ibk-tabs-content id="${e}-3">This tab is disabled.</ibk-tabs-content>
  </ibk-tabs>
`,R={title:"Components/Tabs",component:"ibk-tabs",args:{...S,items:n("tabsDefault"),rail:!1},argTypes:{...v,items:{control:"object"},rail:{control:"boolean"}},parameters:{actions:{handles:$}},render:t=>i(t,"tabsDefault")},a={args:{items:n("tabsDefault")}},s={args:{items:n("tabsPlain",!1)},render:t=>i(t,"tabsPlain")},r={args:{items:n("tabsRail"),rail:!0},render:t=>i(t,"tabsRail")};var o,b,c,l,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: itemsFor('tabsDefault')
  }
}`,...(c=(b=a.parameters)==null?void 0:b.docs)==null?void 0:c.source},description:{story:"One `ibk-tabs-content` child per tab, carrying the `id` its tab points at. The\nleading icon is part of the item (`icon`, an IBYKUS-Iconset ligature), so every\ntab can have its own. Selecting a tab shows its section and hides the others.",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var m,g,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: itemsFor('tabsPlain', false)
  },
  render: args => renderTabs(args, 'tabsPlain')
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,h,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: itemsFor('tabsRail'),
    rail: true
  },
  render: args => renderTabs(args, 'tabsRail')
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const C=["Default","WithoutLeadingIcon","WithRail"];export{a as Default,r as WithRail,s as WithoutLeadingIcon,C as __namedExportsOrder,R as default};
