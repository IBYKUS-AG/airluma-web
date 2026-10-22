import{g as d,o as b,b as u}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:T,args:y,argTypes:h}=d("ibk-tooltip"),v={title:"Components/Tooltip",component:"ibk-tooltip",args:{...y,label:"Tooltip text with some words on several lines.",type:"tooltip",open:!0},argTypes:{...h,label:{control:"text"},type:{control:"select",options:["tooltip","toggletip"]},open:{control:"boolean"}},parameters:{actions:{handles:T}},render:e=>w(e)},w=e=>u`
  <ibk-tooltip
    label="${b(e.label||void 0)}"
    type="${e.type}"
    ?open=${e.open}
  ></ibk-tooltip>
`,o={args:{label:"Tooltip text with some words on several lines.",type:"tooltip",open:!0}},t={args:{label:"Tooltip text with some words on several lines.",type:"toggletip",open:!0}},r={args:{label:"Short tooltip",type:"toggletip",open:!0}};var s,p,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Tooltip text with some words on several lines.',
    type: 'tooltip',
    open: true
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Tooltip text with some words on several lines.',
    type: 'toggletip',
    open: true
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,g,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Short tooltip',
    type: 'toggletip',
    open: true
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const k=["Tooltip","Toggletip","ShortText"];export{r as ShortText,t as Toggletip,o as Tooltip,k as __namedExportsOrder,v as default};
