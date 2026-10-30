import{g as v,o as r,b as I}from"./iframe-DkRrOnhD.js";import{a as P}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:C,args:N,argTypes:_}=v("ibk-checkbox"),w={title:"Components/Checkbox",component:"ibk-checkbox",args:N,argTypes:_,parameters:{actions:{handles:C}},render:e=>H(e)},H=e=>I`
  <ibk-checkbox
    ?checked="${e.checked}"
    ?indeterminate="${e.indeterminate}"
    label="${r(e.label||void 0)}"
    labelPosition="${r(e.labelPosition||void 0)}"
    ?disabled="${e.disabled}"
    @change="${e.onchange||P}"
    supportingText="${r(e.supportingText||void 0)}"
    state="${r(e.state||void 0)}"
    inputId="${r(e.inputId||void 0)}"
  ></ibk-checkbox>
`,a={args:{checked:!0,supportingText:"Supporting Text for more information.",label:"Example Label"}},t={args:{}},o={args:{checked:!1,label:"Example Label",supportingText:"Supporting Text for more information."}},n={args:{checked:!0,label:"Example Label",supportingText:"Supporting Text for more information.",state:"alert",disabled:!0}},s={args:{checked:!0,label:"Leading Label Example",labelPosition:"leading"}},i={args:{checked:!1,indeterminate:!0,label:"Indeterminate Checkbox",supportingText:"This checkbox is natively in an indeterminate state."}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    supportingText: 'Supporting Text for more information.',
    label: 'Example Label'
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,x,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Example Label',
    supportingText: 'Supporting Text for more information.'
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,k,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Example Label',
    supportingText: 'Supporting Text for more information.',
    state: 'alert',
    disabled: true
  }
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var S,T,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Leading Label Example',
    labelPosition: 'leading'
  }
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var L,y,$;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: false,
    indeterminate: true,
    label: 'Indeterminate Checkbox',
    supportingText: 'This checkbox is natively in an indeterminate state.'
  }
}`,...($=(y=i.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const z=["PrimaryStory","EmptyStory","ExampleNo1","ExampleNo2","LeadingLabel","IndeterminateStatus"];export{t as EmptyStory,o as ExampleNo1,n as ExampleNo2,i as IndeterminateStatus,s as LeadingLabel,a as PrimaryStory,z as __namedExportsOrder,w as default};
