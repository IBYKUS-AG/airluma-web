import{g as R,o as n,b as U}from"./iframe-DkRrOnhD.js";import{a as g}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:V,args:X,argTypes:Y}=R("ibk-select"),te={title:"Components/Select",component:"ibk-select",args:{...X,state:"default",disabled:!1,prominent:!1},argTypes:{...Y,value:{table:{disable:!0}},state:{control:"select",options:["default","alert","warning","success"]},supportingText:{control:"text"},disabled:{control:"boolean"},prominent:{control:"boolean"}},parameters:{actions:{handles:V}},render:e=>Z(e)},Z=e=>U`
  <ibk-select
    label="${n(e.label||void 0)}"
    labelInfoIcon="${n(e.labelInfoIcon||void 0)}"
    placeholder="${n(e.placeholder||void 0)}"
    value="${n(e.value||void 0)}"
    ?disabled="${e.disabled}"
    ?prominent="${e.prominent}"
    state="${n(e.state&&e.state!=="default"?e.state:void 0)}"
    supportingText="${n(e.supportingText||void 0)}"
    supportingIcon="${n(e.supportingIcon||void 0)}"
    textInfoIcon="${n(e.textInfoIcon||void 0)}"
    .options="${e.options}"
    @change="${e.onchange||g}"
    @label-icon-click="${g}"
  ></ibk-select>
`,o=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],t={args:{label:"Select Label",placeholder:"Please choose",value:"",options:o,supportingText:"This is a sample supporting text.",supportingIcon:"Notf",textInfoIcon:"",labelInfoIcon:"InfoCirc"}},s={args:{label:"Select Label",placeholder:"Please choose",value:"1",options:o,state:"alert",supportingText:"This could be an alert message.",supportingIcon:"WarnTria"}},a={args:{label:"Select Label",placeholder:"Please choose",value:"1",options:o,state:"warning",supportingText:"This could be a warning message.",supportingIcon:"Notf"}},r={args:{label:"Select Label",placeholder:"Please choose",value:"1",options:o,state:"success",supportingText:"Selection confirmed",supportingIcon:"ChkMCirc"}},l={args:{label:"Disabled Select",placeholder:"Please choose",value:"1",options:o,disabled:!0,supportingText:"This field is disabled.",supportingIcon:"Notf"}},c={args:{placeholder:"Please choose",value:"",options:o,supportingText:"Select without a label.",supportingIcon:"Notf"}},i={args:{label:"Select Label",placeholder:"Please choose",value:"",options:[{label:"Option 1 with a very long text, to show the selectable default state.",value:"1"},{label:"Option 2",value:"2"}],supportingText:"This is a sample supporting text.",supportingIcon:"Notf"}},p={args:{label:"With Info Icon",placeholder:"Please choose",value:"",options:o,textInfoIcon:"Search",labelInfoIcon:"InfoCirc",supportingText:"Select with an info icon inside.",supportingIcon:"Notf"}},u={args:{label:"Prominent Select",placeholder:"Please choose",value:"",options:o,prominent:!0,supportingText:"Prominent select variant.",supportingIcon:"Notf"}},d={args:{label:"Prominent Select",placeholder:"Please choose",value:"1",options:o,prominent:!0,state:"alert",supportingText:"Alert text helps users identify mistakes and recover from them.",supportingIcon:"WarnTria",labelInfoIcon:"InfoCirc"}},m={args:{label:"Prominent Select",placeholder:"Please choose",value:"1",options:o,prominent:!0,state:"success",supportingText:"Success text informs users when an action has been successfully completed.",supportingIcon:"ChkMCirc",labelInfoIcon:"InfoCirc"}};var h,b,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Select Label',
    placeholder: 'Please choose',
    value: '',
    options: defaultOptions,
    supportingText: 'This is a sample supporting text.',
    supportingIcon: 'Notf',
    textInfoIcon: '',
    labelInfoIcon: 'InfoCirc'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var I,v,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Select Label',
    placeholder: 'Please choose',
    value: '1',
    options: defaultOptions,
    state: 'alert',
    supportingText: 'This could be an alert message.',
    supportingIcon: 'WarnTria'
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,T,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Select Label',
    placeholder: 'Please choose',
    value: '1',
    options: defaultOptions,
    state: 'warning',
    supportingText: 'This could be a warning message.',
    supportingIcon: 'Notf'
  }
}`,...(P=(T=a.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var O,W,C;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Select Label',
    placeholder: 'Please choose',
    value: '1',
    options: defaultOptions,
    state: 'success',
    supportingText: 'Selection confirmed',
    supportingIcon: 'ChkMCirc'
  }
}`,...(C=(W=r.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var w,L,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    placeholder: 'Please choose',
    value: '1',
    options: defaultOptions,
    disabled: true,
    supportingText: 'This field is disabled.',
    supportingIcon: 'Notf'
  }
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var $,k,y;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: 'Please choose',
    value: '',
    options: defaultOptions,
    supportingText: 'Select without a label.',
    supportingIcon: 'Notf'
  }
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var A,D,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Select Label',
    placeholder: 'Please choose',
    value: '',
    options: [{
      label: 'Option 1 with a very long text, to show the selectable default state.',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    supportingText: 'This is a sample supporting text.',
    supportingIcon: 'Notf'
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var _,E,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'With Info Icon',
    placeholder: 'Please choose',
    value: '',
    options: defaultOptions,
    textInfoIcon: 'Search',
    labelInfoIcon: 'InfoCirc',
    supportingText: 'Select with an info icon inside.',
    supportingIcon: 'Notf'
  }
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var j,q,z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Select',
    placeholder: 'Please choose',
    value: '',
    options: defaultOptions,
    prominent: true,
    supportingText: 'Prominent select variant.',
    supportingIcon: 'Notf'
  }
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,F,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Select',
    placeholder: 'Please choose',
    value: '1',
    options: defaultOptions,
    prominent: true,
    state: 'alert',
    supportingText: 'Alert text helps users identify mistakes and recover from them.',
    supportingIcon: 'WarnTria',
    labelInfoIcon: 'InfoCirc'
  }
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Select',
    placeholder: 'Please choose',
    value: '1',
    options: defaultOptions,
    prominent: true,
    state: 'success',
    supportingText: 'Success text informs users when an action has been successfully completed.',
    supportingIcon: 'ChkMCirc',
    labelInfoIcon: 'InfoCirc'
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const se=["Default","WithAlert","WithWarning","WithSuccess","Disabled","WithoutLabel","LongOptions","WithInfoIcon","Prominent","ProminentAlert","ProminentSuccess"];export{t as Default,l as Disabled,i as LongOptions,u as Prominent,d as ProminentAlert,m as ProminentSuccess,s as WithAlert,p as WithInfoIcon,r as WithSuccess,a as WithWarning,c as WithoutLabel,se as __namedExportsOrder,te as default};
