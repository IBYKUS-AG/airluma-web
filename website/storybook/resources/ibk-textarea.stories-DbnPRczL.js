import{g as L,o as a,b as P}from"./iframe-DkRrOnhD.js";import{a as d}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:j,args:q,argTypes:B}=L("ibk-textarea"),Q={title:"Components/Textarea",component:"ibk-textarea",args:{...q,state:"default",disabled:!1,readonly:!1,resize:!1},argTypes:{...B,state:{control:"select",options:["default","alert","warning","success"]},supportingText:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},resize:{control:"boolean"},maxlength:{control:"number"}},parameters:{actions:{handles:j}},render:e=>F(e)},F=e=>P`
  <ibk-textarea
    label="${a(e.label||void 0)}"
    placeholder="${a(e.placeholder||void 0)}"
    value="${a(e.value||void 0)}"
    maxlength="${a(e.maxlength||void 0)}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?resize="${e.resize}"
    state="${a(e.state&&e.state!=="default"?e.state:void 0)}"
    supportingText="${a(e.supportingText||void 0)}"
    supportingIcon="${a(e.supportingIcon||void 0)}"
    labelInfoIcon="${a(e.labelInfoIcon||void 0)}"
    @input="${e.oninput||d}"
    @label-icon-click="${d}"
  ></ibk-textarea>
`,r={label:"Label",placeholder:"Placeholder Text",supportingText:"Supporting text conveys additional information about the field.",supportingIcon:"Notf",labelInfoIcon:"InfoCirc"},t={args:{...r}},s={args:{...r,maxlength:256,supportingText:"Sie können bis zu 256 Zeichen eingeben."}},n={args:{...r,resize:!0}},o={args:{...r,state:"alert",supportingText:"Alert text helps users identify mistakes and recover from them.",supportingIcon:"WarnTria"}},c={args:{...r,state:"warning",supportingText:"This could be a warning message.",supportingIcon:"Notf"}},i={args:{...r,state:"success",supportingText:"Success text informs users when an action has been successfully completed.",supportingIcon:"ChkMCirc"}},l={args:{...r,label:"Disabled Textarea",disabled:!0,value:"Some content"}},u={args:{...r,readonly:!0,value:"Textarea content"}},p={args:{...r,readonly:!0,resize:!0,value:"Textarea content"}};var g,m,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    maxlength: 256,
    supportingText: 'Sie können bis zu 256 Zeichen eingeben.'
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var T,v,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    resize: true
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,I,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'alert',
    supportingText: 'Alert text helps users identify mistakes and recover from them.',
    supportingIcon: 'WarnTria'
  }
}`,...(z=(I=o.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,$,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'warning',
    supportingText: 'This could be a warning message.',
    supportingIcon: 'Notf'
  }
}`,...(k=($=c.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var W,C,R;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'success',
    supportingText: 'Success text informs users when an action has been successfully completed.',
    supportingIcon: 'ChkMCirc'
  }
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var w,D,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Disabled Textarea',
    disabled: true,
    value: 'Some content'
  }
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var N,M,Z;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    readonly: true,
    value: 'Textarea content'
  }
}`,...(Z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var _,E,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    readonly: true,
    resize: true,
    value: 'Textarea content'
  }
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const U=["Default","WithCounter","Resize","WithAlert","WithWarning","WithSuccess","Disabled","ReadOnly","ReadOnlyResize"];export{t as Default,l as Disabled,u as ReadOnly,p as ReadOnlyResize,n as Resize,o as WithAlert,s as WithCounter,i as WithSuccess,c as WithWarning,U as __namedExportsOrder,Q as default};
