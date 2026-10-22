import{g as xe,o as n,b as he}from"./iframe-DkRrOnhD.js";import{a as t}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:Te,args:ye,argTypes:Se}=xe("ibk-input"),we={title:"Components/Input",component:"ibk-input",args:{...ye,type:"text",state:"default",disabled:!1,readonly:!1,prominent:!1},argTypes:{...Se,type:{control:"select",options:["text","password","email","number","search","tel","url"]},state:{control:"select",options:["default","alert","warning","success"]},supportingText:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},prominent:{control:"boolean"},maxlength:{control:"number"}},parameters:{actions:{handles:Te}},render:e=>Le(e)},Le=e=>he`
  <ibk-input
    label="${n(e.label||void 0)}"
    type="${n(e.type||void 0)}"
    placeholder="${n(e.placeholder||void 0)}"
    value="${n(e.value||void 0)}"
    maxlength="${n(e.maxlength||void 0)}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?prominent="${e.prominent}"
    state="${n(e.state&&e.state!=="default"?e.state:void 0)}"
    supportingText="${n(e.supportingText||void 0)}"
    supportingIcon="${n(e.supportingIcon||void 0)}"
    textInfoIcon="${n(e.textInfoIcon||void 0)}"
    labelInfoIcon="${n(e.labelInfoIcon||void 0)}"
    labelInfoIconLabel="${n(e.labelInfoIconLabel||void 0)}"
    funcIcon1="${n(e.funcIcon1||void 0)}"
    funcIcon1Label="${n(e.funcIcon1Label||void 0)}"
    funcIcon2="${n(e.funcIcon2||void 0)}"
    funcIcon2Label="${n(e.funcIcon2Label||void 0)}"
    funcIcon3="${n(e.funcIcon3||void 0)}"
    funcIcon3Label="${n(e.funcIcon3Label||void 0)}"
    @input="${e.oninput||t}"
    @func-icon-1-click="${t}"
    @func-icon-2-click="${t}"
    @func-icon-3-click="${t}"
    @label-icon-click="${t}"
  ></ibk-input>
`,o={label:"Bezeichnung des Textfeldes",type:"text",placeholder:"Please type here",supportingText:"This is a sample supporting text.",supportingIcon:"Notf",textInfoIcon:"Search"},r={args:{...o,labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",funcIcon1:"Backspace",funcIcon1Label:"Eingabe löschen",funcIcon2:"Mic",funcIcon2Label:"Spracheingabe starten",funcIcon3:"Cls",funcIcon3Label:"Eingabe löschen"}},a={args:{...o,maxlength:65,supportingText:"Sie können bis zu 65 Zeichen eingeben."}},s={args:{...o,state:"alert",supportingText:"This could be an alert message.",supportingIcon:"WarnTria"}},c={args:{...o,state:"warning",supportingText:"This could be a warning message.",supportingIcon:"Notf"}},i={args:{...o,state:"success",supportingText:"Selection confirmed",supportingIcon:"ChkMCirc"}},l={args:{...o,label:"Disabled Input",disabled:!0,value:"Some content"}},p={args:{...o,label:"Label",readonly:!0,value:"Input Text",funcIcon1:"Backspace",funcIcon1Label:"Eingabe löschen",funcIcon2:"Mic",funcIcon2Label:"Spracheingabe starten",funcIcon3:"Cls",funcIcon3Label:"Eingabe löschen",supportingText:"Supporting text conveys additional information about the field."}},u={args:{...o,label:"With Icons",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",supportingIcon:"Notf",supportingText:"Icon example"}},I={args:{label:"Label",type:"password",placeholder:"Password",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",supportingText:"Supporting text conveys additional information about the field.",supportingIcon:"Notf"}},f={args:{label:"Label",type:"password",value:"password12",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",state:"alert",supportingText:"Alert text helps users identify mistakes and recover from them.",supportingIcon:"WarnTria"}},d={args:{label:"Label",type:"password",value:"password12",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",state:"success",supportingText:"Success text informs users when an action has been successfully completed.",supportingIcon:"ChkMCirc"}},m={args:{label:"Label",type:"password",prominent:!0,placeholder:"Password",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",supportingText:"Supporting text conveys additional information about the field.",supportingIcon:"Notf"}},b={args:{label:"Prominent Text",type:"text",prominent:!0,placeholder:"Prominent style",textInfoIcon:"Search",supportingText:"Prominent input variant.",supportingIcon:"Notf"}},g={args:{label:"Prominent Text",type:"text",prominent:!0,value:"Invalid entry",textInfoIcon:"Search",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",state:"alert",supportingText:"Alert text helps users identify mistakes and recover from them.",supportingIcon:"WarnTria"}},x={args:{label:"Prominent Text",type:"text",prominent:!0,value:"Valid entry",textInfoIcon:"Search",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",state:"success",supportingText:"Success text informs users when an action has been successfully completed.",supportingIcon:"ChkMCirc"}},h={args:{label:"Prominent Text",type:"text",prominent:!0,readonly:!0,value:"Input Text",textInfoIcon:"Search",labelInfoIcon:"InfoCirc",labelInfoIconLabel:"Weitere Informationen",supportingText:"Supporting text conveys additional information about the field.",supportingIcon:"Notf"}},T={args:{label:"Prominent Text",type:"text",prominent:!0,funcIcon1:"Edit",funcIcon1Label:"Eingabe bearbeiten",funcIcon2:"Search",funcIcon2Label:"Suche starten",funcIcon3:"Cls",funcIcon3Label:"Eingabe löschen",textInfoIcon:"Search",supportingText:"This could be a warning message.",state:"warning",supportingIcon:"Notf"}};var y,S,L;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    funcIcon1: 'Backspace',
    funcIcon1Label: 'Eingabe löschen',
    funcIcon2: 'Mic',
    funcIcon2Label: 'Spracheingabe starten',
    funcIcon3: 'Cls',
    funcIcon3Label: 'Eingabe löschen'
  }
}`,...(L=(S=r.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var v,C,P;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    maxlength: 65,
    supportingText: 'Sie können bis zu 65 Zeichen eingeben.'
  }
}`,...(P=(C=a.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var w,W,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'alert',
    supportingText: 'This could be an alert message.',
    supportingIcon: 'WarnTria'
  }
}`,...(k=(W=s.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var $,A,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'warning',
    supportingText: 'This could be a warning message.',
    supportingIcon: 'Notf'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var N,M,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: 'success',
    supportingText: 'Selection confirmed',
    supportingIcon: 'ChkMCirc'
  }
}`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var B,O,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Disabled Input',
    disabled: true,
    value: 'Some content'
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var z,F,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Label',
    readonly: true,
    value: 'Input Text',
    funcIcon1: 'Backspace',
    funcIcon1Label: 'Eingabe löschen',
    funcIcon2: 'Mic',
    funcIcon2Label: 'Spracheingabe starten',
    funcIcon3: 'Cls',
    funcIcon3Label: 'Eingabe löschen',
    supportingText: 'Supporting text conveys additional information about the field.'
  }
}`,...(V=(F=p.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var Z,_,H;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'With Icons',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    supportingIcon: 'Notf',
    supportingText: 'Icon example'
  }
}`,...(H=(_=u.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var j,q,G;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'password',
    placeholder: 'Password',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    supportingText: 'Supporting text conveys additional information about the field.',
    supportingIcon: 'Notf'
  }
}`,...(G=(q=I.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'password',
    value: 'password12',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    state: 'alert',
    supportingText: 'Alert text helps users identify mistakes and recover from them.',
    supportingIcon: 'WarnTria'
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'password',
    value: 'password12',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    state: 'success',
    supportingText: 'Success text informs users when an action has been successfully completed.',
    supportingIcon: 'ChkMCirc'
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ne,oe;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'password',
    prominent: true,
    placeholder: 'Password',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    supportingText: 'Supporting text conveys additional information about the field.',
    supportingIcon: 'Notf'
  }
}`,...(oe=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,re,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Text',
    type: 'text',
    prominent: true,
    placeholder: 'Prominent style',
    textInfoIcon: 'Search',
    supportingText: 'Prominent input variant.',
    supportingIcon: 'Notf'
  }
}`,...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ce,ie;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Text',
    type: 'text',
    prominent: true,
    value: 'Invalid entry',
    textInfoIcon: 'Search',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    state: 'alert',
    supportingText: 'Alert text helps users identify mistakes and recover from them.',
    supportingIcon: 'WarnTria'
  }
}`,...(ie=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,pe,ue;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Text',
    type: 'text',
    prominent: true,
    value: 'Valid entry',
    textInfoIcon: 'Search',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    state: 'success',
    supportingText: 'Success text informs users when an action has been successfully completed.',
    supportingIcon: 'ChkMCirc'
  }
}`,...(ue=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var Ie,fe,de;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Text',
    type: 'text',
    prominent: true,
    readonly: true,
    value: 'Input Text',
    textInfoIcon: 'Search',
    labelInfoIcon: 'InfoCirc',
    labelInfoIconLabel: 'Weitere Informationen',
    supportingText: 'Supporting text conveys additional information about the field.',
    supportingIcon: 'Notf'
  }
}`,...(de=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:de.source}}};var me,be,ge;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Prominent Text',
    type: 'text',
    prominent: true,
    funcIcon1: 'Edit',
    funcIcon1Label: 'Eingabe bearbeiten',
    funcIcon2: 'Search',
    funcIcon2Label: 'Suche starten',
    funcIcon3: 'Cls',
    funcIcon3Label: 'Eingabe löschen',
    textInfoIcon: 'Search',
    supportingText: 'This could be a warning message.',
    state: 'warning',
    supportingIcon: 'Notf'
  }
}`,...(ge=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};const We=["Default","WithCounter","WithAlert","WithWarning","WithSuccess","Disabled","ReadOnly","WithIcons","Password","PasswordAlert","PasswordSuccess","PasswordProminent","Prominent","ProminentAlert","ProminentSuccess","ProminentReadOnly","ProminentThreeFuncs"];export{r as Default,l as Disabled,I as Password,f as PasswordAlert,m as PasswordProminent,d as PasswordSuccess,b as Prominent,g as ProminentAlert,h as ProminentReadOnly,x as ProminentSuccess,T as ProminentThreeFuncs,p as ReadOnly,s as WithAlert,a as WithCounter,u as WithIcons,i as WithSuccess,c as WithWarning,We as __namedExportsOrder,we as default};
