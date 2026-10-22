import{g as $,o as r,b as E}from"./iframe-DkRrOnhD.js";import{a as R}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:L,args:T,argTypes:C}=$("ibk-link"),z={title:"Components/Link",component:"ibk-link",args:{...T,variant:"regular",disabled:!1},argTypes:{...C,variant:{control:"select",options:["regular","decent"]},disabled:{control:"boolean"}},parameters:{actions:{handles:L}},render:e=>O(e)},O=e=>E`
  <ibk-link
    href="${r(e.href||void 0)}"
    target="${r(e.target||void 0)}"
    label="${r(e.label||void 0)}"
    variant="${r(e.variant||void 0)}"
    ?disabled="${e.disabled}"
    @click="${e.onclick||R}"
  ></ibk-link>
`,a={args:{label:"Hyperlink",href:"#regular-link",variant:"regular"}},n={args:{label:"Hyperlink",href:"#decent-link",variant:"decent"}},t={args:{label:"Hyperlink",href:"https://example.com",target:"_blank",variant:"regular"}},l={args:{label:"Hyperlink",href:"https://example.com",target:"_blank",variant:"decent"}},s={args:{label:"Hyperlink",href:"#disabled-link",disabled:!0,variant:"regular"}},i={args:{label:"Hyperlink",href:"#disabled-decent-link",disabled:!0,variant:"decent"}};var o,c,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Hyperlink',
    href: '#regular-link',
    variant: 'regular'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Hyperlink',
    href: '#decent-link',
    variant: 'decent'
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,k,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Hyperlink',
    href: 'https://example.com',
    target: '_blank',
    variant: 'regular'
  }
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var v,h,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Hyperlink',
    href: 'https://example.com',
    target: '_blank',
    variant: 'decent'
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,H,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Hyperlink',
    href: '#disabled-link',
    disabled: true,
    variant: 'regular'
  }
}`,...(x=(H=s.parameters)==null?void 0:H.docs)==null?void 0:x.source}}};var D,S,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Hyperlink',
    href: '#disabled-decent-link',
    disabled: true,
    variant: 'decent'
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const A=["Regular","Decent","RegularExternal","DecentExternal","Disabled","DisabledDecent"];export{n as Decent,l as DecentExternal,s as Disabled,i as DisabledDecent,a as Regular,t as RegularExternal,A as __namedExportsOrder,z as default};
