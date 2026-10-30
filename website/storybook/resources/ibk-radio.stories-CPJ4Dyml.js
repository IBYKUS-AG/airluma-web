import{g as _,o as a,b as y}from"./iframe-DkRrOnhD.js";import{a as C}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:E,args:H,argTypes:j}=_("ibk-radio-group"),F={title:"Components/Radio",component:"ibk-radio-group",args:H,argTypes:j,parameters:{actions:{handles:E}},render:e=>q(e)},q=e=>y`
  <ibk-radio-group
    name="${a(e.name||void 0)}"
    supportingText="${a(e.supportingText||void 0)}"
    state="${a(e.state||void 0)}"
    labelPosition="${a(e.labelPosition||void 0)}"
    @change="${e.onchange||C}"
  >
    <ibk-radio label="Option 1" value="1"></ibk-radio>
    <ibk-radio label="Option 2" value="2"></ibk-radio>
    <ibk-radio label="Option 3" value="3" disabled></ibk-radio>
  </ibk-radio-group>
`,c=e=>y`
  <ibk-radio
    label="${a(e.label||void 0)}"
    value="${a(e.value||void 0)}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    name="${a(e.name||void 0)}"
    labelPosition="${a(e.labelPosition||void 0)}"
  ></ibk-radio>
`,l={name:"radio-group",supportingText:"Select an option"},r={args:{...l}},o={args:{...l,state:"alert",supportingText:"Please select an option"}},n={args:{...l,state:"success",supportingText:"Selection confirmed"}},s={args:{...l,labelPosition:"leading"}},i={args:{label:"Single Option",value:"single",name:"single-radio"},render:e=>c(e)},t={args:{label:"Disabled Option",value:"disabled",disabled:!0,name:"disabled-radio"},render:e=>c(e)},d={args:{label:"Leading Label",value:"leading",name:"leading-radio",labelPosition:"leading"},render:e=>c(e)};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,m,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'alert',
    supportingText: 'Please select an option'
  }
}`,...(S=(m=o.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var v,k,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'success',
    supportingText: 'Selection confirmed'
  }
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var L,R,$;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    labelPosition: 'leading'
  }
}`,...($=(R=s.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var P,h,x;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Single Option',
    value: 'single',
    name: 'single-radio'
  },
  render: args => renderRadio(args)
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var O,T,A;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Option',
    value: 'disabled',
    disabled: true,
    name: 'disabled-radio'
  },
  render: args => renderRadio(args)
}`,...(A=(T=t.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var G,D,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Leading Label',
    value: 'leading',
    name: 'leading-radio',
    labelPosition: 'leading'
  },
  render: args => renderRadio(args)
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const I=["Default","GroupWithAlert","GroupWithSuccess","GroupLeadingLabel","SingleRadio","SingleRadioDisabled","SingleRadioLeadingLabel"];export{r as Default,s as GroupLeadingLabel,o as GroupWithAlert,n as GroupWithSuccess,i as SingleRadio,t as SingleRadioDisabled,d as SingleRadioLeadingLabel,I as __namedExportsOrder,F as default};
