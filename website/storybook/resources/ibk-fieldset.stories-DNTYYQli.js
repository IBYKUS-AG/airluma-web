import{g as p,o as r,b as c}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:m,args:b,argTypes:g}=p("ibk-fieldset"),k={title:"Components/Fieldset",component:"ibk-fieldset",args:{...b,legend:"Fieldset Legend",supportingText:"Supporting text conveys additional information about the field.",disabled:!1},argTypes:{...g,disabled:{control:"boolean"}},parameters:{actions:{handles:m}},render:e=>u(e)},u=e=>c`
  <ibk-fieldset
    legend="${r(e.legend||void 0)}"
    supportingText="${r(e.supportingText||void 0)}"
    ?disabled="${e.disabled}"
  ></ibk-fieldset>
`,s={},t={args:{disabled:!0}};var o,a,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var i,n,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const T=["Default","Disabled"];export{s as Default,t as Disabled,T as __namedExportsOrder,k as default};
