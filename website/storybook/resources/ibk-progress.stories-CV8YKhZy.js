import{g as B,o as r,b as F}from"./iframe-DkRrOnhD.js";import{a as G}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:J,args:K,argTypes:M}=B("ibk-progress"),V={title:"Components/Progress",component:"ibk-progress",args:{...K,label:"Label",type:"linear",variant:"regular",value:40,max:100,disabled:!1},argTypes:{...M,type:{control:"select",options:["linear","circular","spinner"]},variant:{control:"select",options:["regular","decent"]},value:{control:{type:"number",min:0,max:100,step:1}},max:{control:{type:"number",min:1,max:100,step:1}},disabled:{control:"boolean"},decent:{table:{disable:!0},control:!1}},parameters:{actions:{handles:J}},render:e=>N(e)},N=e=>F`
  <ibk-progress
    label="${r(e.label||void 0)}"
    labelInfoIcon="${r(e.labelInfoIcon||void 0)}"
    type="${r(e.type||void 0)}"
    variant="${r(e.variant||void 0)}"
    value="${r(typeof e.value=="number"?e.value:void 0)}"
    max="${r(typeof e.max=="number"?e.max:void 0)}"
    ?disabled="${e.disabled}"
    @label-icon-click="${G}"
  ></ibk-progress>
`,a={label:"Label",value:40,max:100},n={args:{...a,type:"linear",variant:"regular"}},s={args:{...a,label:void 0,type:"circular",variant:"regular"}},t={args:{label:void 0,type:"spinner",variant:"regular",value:40,max:100}},o={args:{...a,type:"linear",variant:"decent"}},l={args:{...a,type:"linear",variant:"regular",disabled:!0}},i={args:{...a,label:void 0,type:"circular",variant:"decent"}},c={args:{...a,label:void 0,type:"circular",variant:"regular",disabled:!0}},d={args:{label:void 0,type:"spinner",variant:"decent",value:40,max:100}},p={args:{label:void 0,type:"spinner",variant:"regular",value:40,max:100,disabled:!0}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'linear',
    variant: 'regular'
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,v,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: undefined,
    type: 'circular',
    variant: 'regular'
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,x,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: undefined,
    type: 'spinner',
    variant: 'regular',
    value: 40,
    max: 100
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var D,L,$;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'linear',
    variant: 'decent'
  }
}`,...($=(L=o.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var A,C,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'linear',
    variant: 'regular',
    disabled: true
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,P,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: undefined,
    type: 'circular',
    variant: 'decent'
  }
}`,...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var _,h,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: undefined,
    type: 'circular',
    variant: 'regular',
    disabled: true
  }
}`,...(E=(h=c.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var H,O,j;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: undefined,
    type: 'spinner',
    variant: 'decent',
    value: 40,
    max: 100
  }
}`,...(j=(O=d.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,w,z;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: undefined,
    type: 'spinner',
    variant: 'regular',
    value: 40,
    max: 100,
    disabled: true
  }
}`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const W=["ProgressLinear","ProgressCircular","InfiniteSpinner","LinearDecent","LinearDisabled","CircularDecent","CircularDisabled","SpinnerDecent","SpinnerDisabled"];export{i as CircularDecent,c as CircularDisabled,t as InfiniteSpinner,o as LinearDecent,l as LinearDisabled,s as ProgressCircular,n as ProgressLinear,d as SpinnerDecent,p as SpinnerDisabled,W as __namedExportsOrder,V as default};
