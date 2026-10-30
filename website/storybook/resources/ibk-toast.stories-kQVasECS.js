import{g as j,o as a,b as q}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:z,args:F,argTypes:G}=j("ibk-toast"),Q={title:"Components/Toast",component:"ibk-toast",args:{...F,variant:"regular",state:"default",label:"Text goes here",secondaryLabel:void 0,icon:void 0},argTypes:{...G,variant:{control:"select",options:["regular","decent"]},state:{control:"select",options:["default","alert","warning","success"]},type:{table:{disable:!0}},status:{table:{disable:!0}},icon:{control:"text",description:"IBYKUS icon ligature, for example Time, ChkM, InfoCirc or WarnTria."},label:{control:"text"},secondaryLabel:{control:"text"}},parameters:{actions:{handles:z}},render:e=>J(e)},J=e=>q`
  <ibk-toast
    variant="${a(e.variant||void 0)}"
    state="${a(e.state||void 0)}"
    icon="${a(e.icon||void 0)}"
    label="${a(e.label||void 0)}"
    secondary-label="${a(e.secondaryLabel||void 0)}"
  ></ibk-toast>
`,r={args:{variant:"regular",state:"default",icon:void 0,label:"Text goes here"}},t={args:{variant:"regular",state:"default",icon:"Time",label:"Text goes here"}},s={args:{variant:"regular",state:"success",icon:"ChkM",label:"Text goes here"}},n={args:{variant:"regular",state:"warning",icon:"Time",label:"Text goes here"}},o={args:{variant:"regular",state:"alert",icon:"Time",label:"Text goes here"}},c={args:{variant:"decent",state:"default",icon:void 0,label:"Text goes here"}},l={args:{variant:"decent",state:"success",icon:"ChkM",label:"Text goes here"}},i={args:{variant:"decent",state:"default",icon:"Time",label:"Available until",secondaryLabel:"14:30"}},u={args:{variant:"regular",state:"default",icon:"Time",label:"Text goes here new line"}},g={args:{variant:"regular",state:"default",icon:void 0,label:"Text goes here new line"}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    state: 'default',
    icon: undefined,
    label: 'Text goes here'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,T,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    state: 'default',
    icon: 'Time',
    label: 'Text goes here'
  }
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var h,f,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    state: 'success',
    icon: 'ChkM',
    label: 'Text goes here'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,w,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    state: 'warning',
    icon: 'Time',
    label: 'Text goes here'
  }
}`,...(R=(w=n.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,k,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    state: 'alert',
    icon: 'Time',
    label: 'Text goes here'
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var D,C,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    state: 'default',
    icon: undefined,
    label: 'Text goes here'
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var M,W,$;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    state: 'success',
    icon: 'ChkM',
    label: 'Text goes here'
  }
}`,...($=(W=l.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var A,B,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    state: 'default',
    icon: 'Time',
    label: 'Available until',
    secondaryLabel: '14:30'
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var _,H,K;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    state: 'default',
    icon: 'Time',
    label: 'Text goes here new line'
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var O,U,Y;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    state: 'default',
    icon: undefined,
    label: 'Text goes here new line'
  }
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const V=["Default","RegularWithIcon","RegularSuccess","RegularWarning","RegularAlert","DecentDefault","DecentSuccess","DecentTwoLabel","RegularEIBTowLines","RegularTowLines"];export{c as DecentDefault,l as DecentSuccess,i as DecentTwoLabel,r as Default,o as RegularAlert,u as RegularEIBTowLines,s as RegularSuccess,g as RegularTowLines,n as RegularWarning,t as RegularWithIcon,V as __namedExportsOrder,Q as default};
