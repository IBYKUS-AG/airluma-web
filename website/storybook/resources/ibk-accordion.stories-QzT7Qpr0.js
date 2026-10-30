import{g as $,b as y}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:D,args:S,argTypes:f}=$("ibk-accordion"),n="Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",C={title:"Components/Accordion",component:"ibk-accordion",args:{...S,iconPosition:"trailing"},argTypes:{...f,items:{control:"object"}},parameters:{actions:{handles:D}},render:i=>y`
    <div class="ibk-container ibk-container-sm ibk-container-flush">
      <ibk-accordion .items="${i.items}" iconPosition="${i.iconPosition}"></ibk-accordion>
    </div>
  `},a=[{title:"The Legend goes here",content:n},{title:"The Legend goes here",content:n,active:!0},{title:"The Legend goes here",content:n}],o={args:{iconPosition:"trailing",items:a}},t={args:{iconPosition:"leading",items:a}},s={args:{iconPosition:"trailing",items:[{title:"Enabled section",content:n},{title:"Opened section",content:n,active:!0},{title:"Disabled section",content:n,disabled:!0}]}},e={render:i=>y`
    <div class="ibk-sidebar">
      <div class="ibk-sidebar-main ibk-stack gap-spacing-8">
        <h5 style="margin: 0;">Main column</h5>
        <ibk-accordion .items="${i.items}" iconPosition="${i.iconPosition}"></ibk-accordion>
      </div>
      <div class="ibk-sidebar-aside ibk-stack gap-spacing-8">
        <h5 style="margin: 0;">Aside</h5>
        <ibk-accordion .items="${i.items}" iconPosition="${i.iconPosition}"></ibk-accordion>
      </div>
    </div>
  `,args:{iconPosition:"trailing",items:a}};var r,c,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    iconPosition: 'trailing',
    items
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    iconPosition: 'leading',
    items
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,p,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    iconPosition: 'trailing',
    items: [{
      title: 'Enabled section',
      content: sampleContent
    }, {
      title: 'Opened section',
      content: sampleContent,
      active: true
    }, {
      title: 'Disabled section',
      content: sampleContent,
      disabled: true
    }]
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var k,u,v,P,w;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => html\`
    <div class="ibk-sidebar">
      <div class="ibk-sidebar-main ibk-stack gap-spacing-8">
        <h5 style="margin: 0;">Main column</h5>
        <ibk-accordion .items="\${args.items}" iconPosition="\${args.iconPosition}"></ibk-accordion>
      </div>
      <div class="ibk-sidebar-aside ibk-stack gap-spacing-8">
        <h5 style="margin: 0;">Aside</h5>
        <ibk-accordion .items="\${args.items}" iconPosition="\${args.iconPosition}"></ibk-accordion>
      </div>
    </div>
  \`,
  args: {
    iconPosition: 'trailing',
    items
  }
}`,...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:'The answer to "how wide may an accordion get?" (IDES-48): as wide as its\ncontainer, and no wider. The component carries no `max-width`, so the layout\ndecides - here the same accordion sits in the main column and in the aside of\none `.ibk-sidebar`. Drag the canvas narrower and the aside wraps below the main\ncolumn on its own, without a breakpoint.',...(w=(P=e.parameters)==null?void 0:P.docs)==null?void 0:w.description}}};const x=["Default","LeadingIcon","WithDisabled","Fluid"];export{o as Default,e as Fluid,t as LeadingIcon,s as WithDisabled,x as __namedExportsOrder,C as default};
