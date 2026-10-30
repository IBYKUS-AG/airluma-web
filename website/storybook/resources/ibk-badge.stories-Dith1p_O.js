import{g as j,o as b,A,b as i}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:H,args:q,argTypes:F}=j("ibk-badge"),N={title:"Components/Badge",component:"ibk-badge",args:{...q,variant:"regular",type:"regular",icon:"Mail",iconSize:"2rem"},argTypes:{...F,variant:{control:"select",options:["decent","regular"]},type:{control:"select",options:["regular","info","success","warning","alert"]},count:{control:"text"},icon:{control:"text"},iconSize:{control:"text"}},parameters:{actions:{handles:H}},render:e=>G(e)},u=i`
  <style>
    .badgeStoryIcon {
      color: var(--ibk-neutral-grey-18);
    }

    .badgeStoryOverview {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 1rem;
    }

    .badgeStorySizeExamples {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 1rem;
    }
  </style>
`,a=(e,r="2rem")=>e?i` <i class="ibkIcon badgeStoryIcon" style="font-size: ${r};">${e}</i> `:A,G=e=>{const r=e.count===void 0||e.count===""?void 0:e.count;return i`
    ${u}
    <ibk-badge
      variant=${b(e.variant||void 0)}
      type=${b(e.type||void 0)}
      count=${b(r)}
    >
      ${a(e.icon,e.iconSize)}
    </ibk-badge>
  `},T={styles:`<ibk-badge variant="regular" type="regular">
  <i class="ibkIcon" style="font-size: 2rem;">Mail</i>
</ibk-badge>
<ibk-badge variant="regular" type="info">
  <i class="ibkIcon" style="font-size: 2rem;">Mail</i>
</ibk-badge>
<ibk-badge variant="regular" type="success">
  <i class="ibkIcon" style="font-size: 2rem;">Mail</i>
</ibk-badge>
<ibk-badge variant="regular" type="warning">
  <i class="ibkIcon" style="font-size: 2rem;">Mail</i>
</ibk-badge>
<ibk-badge variant="regular" type="alert">
  <i class="ibkIcon" style="font-size: 2rem;">Mail</i>
</ibk-badge>`,iconSizes:`<ibk-badge variant="decent" type="regular">
  <i class="ibkIcon" style="font-size: 12px;">Mail</i>
</ibk-badge>
<ibk-badge variant="decent" type="regular">
  <i class="ibkIcon" style="font-size: 17px;">Mail</i>
</ibk-badge>
<ibk-badge variant="regular" type="regular">
  <i class="ibkIcon" style="font-size: 25px;">Mail</i>
</ibk-badge>`},W=e=>({docs:{source:{code:e,language:"html",type:"code"}}}),J=e=>{const r=[e.variant?`variant="${e.variant}"`:"",e.type?`type="${e.type}"`:"",e.count?`count="${e.count}"`:""].filter(Boolean),p=r.length?` ${r.join(" ")}`:"";return e.icon?`<ibk-badge${p}>
  <i class="ibkIcon" style="font-size: ${e.iconSize||"2rem"};">${e.icon}</i>
</ibk-badge>`:`<ibk-badge${p}></ibk-badge>`},t=()=>({docs:{source:{language:"html",type:"dynamic",transform:(e,r)=>J(r.args)}}}),n={args:{variant:"decent",type:"regular",icon:"Mail",iconSize:"1rem"},parameters:t()},o={args:{variant:"regular",type:"regular",icon:"Mail",iconSize:"2rem"},parameters:t()},s={render:()=>i`
    ${u}
    <div class="badgeStoryOverview">
      <ibk-badge variant="regular" type="regular"> ${a("Mail","2rem")} </ibk-badge>
      <ibk-badge variant="regular" type="info"> ${a("Mail","2rem")} </ibk-badge>
      <ibk-badge variant="regular" type="success"> ${a("Mail","2rem")} </ibk-badge>
      <ibk-badge variant="regular" type="warning"> ${a("Mail","2rem")} </ibk-badge>
      <ibk-badge variant="regular" type="alert"> ${a("Mail","2rem")} </ibk-badge>
    </div>
  `,parameters:W(T.styles)},c={render:()=>i`
    ${u}
    <div class="badgeStorySizeExamples">
      <ibk-badge variant="decent" type="regular">
        <i class="ibkIcon badgeStoryIcon" style="font-size: 12px;">Mail</i>
      </ibk-badge>
      <ibk-badge variant="decent" type="regular">
        <i class="ibkIcon badgeStoryIcon" style="font-size: 17px;">Mail</i>
      </ibk-badge>
      <ibk-badge variant="regular" type="regular">
        <i class="ibkIcon badgeStoryIcon" style="font-size: 25px;">Mail</i>
      </ibk-badge>
    </div>
  `,parameters:W(T.iconSizes)},l={name:"Badge with Counter",args:{variant:"regular",type:"regular",count:"42",icon:"Mail",iconSize:"2rem"},parameters:t()},d={args:{variant:"regular",type:"regular",count:"120",icon:"Mail",iconSize:"2rem"},parameters:t()},g={args:{variant:"regular",type:"regular",icon:void 0},parameters:t()};var m,y,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    type: 'regular',
    icon: 'Mail',
    iconSize: '1rem'
  },
  parameters: dynamicSourceParameters()
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,S,z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    type: 'regular',
    icon: 'Mail',
    iconSize: '2rem'
  },
  parameters: dynamicSourceParameters()
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var M,f,I;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    \${storyStyles}
    <div class="badgeStoryOverview">
      <ibk-badge variant="regular" type="regular"> \${renderStoryIcon('Mail', '2rem')} </ibk-badge>
      <ibk-badge variant="regular" type="info"> \${renderStoryIcon('Mail', '2rem')} </ibk-badge>
      <ibk-badge variant="regular" type="success"> \${renderStoryIcon('Mail', '2rem')} </ibk-badge>
      <ibk-badge variant="regular" type="warning"> \${renderStoryIcon('Mail', '2rem')} </ibk-badge>
      <ibk-badge variant="regular" type="alert"> \${renderStoryIcon('Mail', '2rem')} </ibk-badge>
    </div>
  \`,
  parameters: sourceParameters(sourceCode.styles)
}`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var $,x,w;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    \${storyStyles}
    <div class="badgeStorySizeExamples">
      <ibk-badge variant="decent" type="regular">
        <i class="ibkIcon badgeStoryIcon" style="font-size: 12px;">Mail</i>
      </ibk-badge>
      <ibk-badge variant="decent" type="regular">
        <i class="ibkIcon badgeStoryIcon" style="font-size: 17px;">Mail</i>
      </ibk-badge>
      <ibk-badge variant="regular" type="regular">
        <i class="ibkIcon badgeStoryIcon" style="font-size: 25px;">Mail</i>
      </ibk-badge>
    </div>
  \`,
  parameters: sourceParameters(sourceCode.iconSizes)
}`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var C,h,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Badge with Counter',
  args: {
    variant: 'regular',
    type: 'regular',
    count: '42',
    icon: 'Mail',
    iconSize: '2rem'
  },
  parameters: dynamicSourceParameters()
}`,...(P=(h=l.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var B,E,O;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    type: 'regular',
    count: '120',
    icon: 'Mail',
    iconSize: '2rem'
  },
  parameters: dynamicSourceParameters()
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var _,D,R;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    type: 'regular',
    icon: undefined
  },
  parameters: dynamicSourceParameters()
}`,...(R=(D=g.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const Q=["Decent","Regular","Styles","IconSizes","BadgeWithCounter","CounterOverflow","Empty"];export{l as BadgeWithCounter,d as CounterOverflow,n as Decent,g as Empty,c as IconSizes,o as Regular,s as Styles,Q as __namedExportsOrder,N as default};
