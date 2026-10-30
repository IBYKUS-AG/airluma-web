import{g as l,b as p}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:d,args:g,argTypes:m}=l("ibk-banner"),b={title:"Components/Banner",component:"ibk-banner",args:g,argTypes:{...m,variant:{control:"radio",options:["prominent","regular","none"],description:"The visual variant of the banner"},title:{control:"text",description:"The headline text"},content:{control:"text",description:"The body text"},icon:{control:"text",description:"The icon character (e.g. Cls)"}},parameters:{actions:{handles:d}},render:e=>p`
    <ibk-banner
      title="${e.title}"
      variant="${e.variant}"
      icon="${e.icon}"
      content="${e.content}"
    >
    </ibk-banner>
  `},t={args:{title:"Headline goes here",content:"Text goes here",variant:"prominent"}},n={args:{title:"Headline goes here",content:"Text goes here",variant:"regular"}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: "Headline goes here",
    content: "Text goes here",
    variant: "prominent"
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,s,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Headline goes here",
    content: "Text goes here",
    variant: "regular"
  }
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const x=["Prominent","Regular"];export{t as Prominent,n as Regular,x as __namedExportsOrder,b as default};
