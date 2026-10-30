import{g as O,o as s,b as j}from"./iframe-DkRrOnhD.js";import{a as q}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:z,args:B,argTypes:F}=O("ibk-switch"),M={title:"Components/Switch",component:"ibk-switch",args:{...B,checked:!1,state:"default",labelPosition:"trailing",supportingText:""},argTypes:{...F,state:{control:"select",options:["default","alert","success"]},supportingText:{control:"text"},checked:{control:"boolean"},labelPosition:{control:"select",options:["trailing","leading"]}},parameters:{actions:{handles:z}},render:e=>G(e)},G=e=>j`
  <ibk-switch
    label="${s(e.label||void 0)}"
    labelPosition="${s(e.labelPosition||void 0)}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    state="${s(e.state&&e.state!=="default"?e.state:void 0)}"
    supportingText="${s(e.supportingText||void 0)}"
    @change="${e.onchange||q}"
  ></ibk-switch>
`,d={label:"This is a sample switch",labelPosition:"trailing",supportingText:"This is a sample text support"},a={args:{...d}},t={args:{...d,state:"alert",supportingText:"Please select an option"}},r={args:{...d,state:"success",supportingText:"Selection confirmed"}},i={args:{...d,label:"This is a sample with leading Textlabel",labelPosition:"leading"}},o={args:{label:"This is a sample with a checked Switch",checked:!0}},l={args:{label:"This is a sample with a disabled Switch",disabled:!0}},c={args:{label:"This is a sample with a disabled checked Switch",checked:!0,disabled:!0}},n={args:{label:"This is a sample with leading Textlabel",labelPosition:"leading"}};var p,h,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,g,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'alert',
    supportingText: 'Please select an option'
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var T,w,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'success',
    supportingText: 'Selection confirmed'
  }
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,x,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'This is a sample with leading Textlabel',
    labelPosition: 'leading'
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var P,L,A;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'This is a sample with a checked Switch',
    checked: true
  }
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var $,D,v;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'This is a sample with a disabled Switch',
    disabled: true
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var C,W,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'This is a sample with a disabled checked Switch',
    checked: true,
    disabled: true
  }
}`,...(y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var _,E,H;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'This is a sample with leading Textlabel',
    labelPosition: 'leading'
  }
}`,...(H=(E=n.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const N=["Default","WithAlert","WithSuccess","LeadingLabel","Checked","Disabled","DisabledChecked","LeadingLabelSwitch"];export{o as Checked,a as Default,l as Disabled,c as DisabledChecked,i as LeadingLabel,n as LeadingLabelSwitch,t as WithAlert,r as WithSuccess,N as __namedExportsOrder,M as default};
