import{g as Ae,o as n,b as Te}from"./iframe-DkRrOnhD.js";import{a as $}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{useArgs:fe}=__STORYBOOK_MODULE_PREVIEW_API__,{events:Se,args:De,argTypes:$e}=Ae("ibk-range-slider"),ye={title:"Components/Range Slider",component:"ibk-range-slider",args:{...De,dominance:"regular",state:"default",disabled:!1,min:0,max:100,step:1},argTypes:{...$e,dominance:{control:"select",options:["regular","decent"]},state:{control:"select",options:["default","warning"]},disabled:{control:"boolean"},value:{control:{type:"number",min:0,max:100,step:1}}},parameters:{actions:{handles:Se}},render:e=>{const[,D]=fe();return Re(e,s=>D({value:s}))}},Re=(e,D)=>Te`
  <div style="width: 9.75rem;">
    <ibk-range-slider
      label="${n(e.label||void 0)}"
      labelInfoIcon="${n(e.labelInfoIcon||void 0)}"
      dominance="${n(e.dominance||void 0)}"
      min="${n(typeof e.min=="number"?e.min:void 0)}"
      max="${n(typeof e.max=="number"?e.max:void 0)}"
      step="${n(typeof e.step=="number"?e.step:void 0)}"
      value="${n(typeof e.value=="number"?e.value:void 0)}"
      leadingIcon="${n(e.leadingIcon||void 0)}"
      trailingIcon="${n(e.trailingIcon||void 0)}"
      leadingText="${n(e.leadingText||void 0)}"
      trailingText="${n(e.trailingText||void 0)}"
      supportingText="${n(e.supportingText||void 0)}"
      supportingIcon="${n(e.supportingIcon||void 0)}"
      state="${n(e.state||void 0)}"
      ?disabled="${e.disabled}"
      @label-icon-click="${$}"
      @input="${s=>{$(s),D(s.target.valueAsNumber)}}"
      @change="${$}"
    ></ibk-range-slider>
  </div>
`,a={supportingIcon:"Notf",supportingText:"Supporting text conveys additional information about the field."},S={state:"warning",supportingIcon:"Notf",supportingText:"Warning text alerts users to potential risks or consequences."},r={label:"Label",labelInfoIcon:"InfoCirc",leadingIcon:"Minus",trailingIcon:"Plus"},o={label:"Label",labelInfoIcon:"InfoCirc",leadingText:"0%",trailingText:"100%"},t={args:{...r,...a,dominance:"regular",value:0}},c={args:{...r,...S,dominance:"regular",value:0}},i={args:{...r,...a,dominance:"regular",value:0,disabled:!0}},d={args:{...o,...a,dominance:"regular",value:0}},l={args:{...o,...S,dominance:"regular",value:0}},u={args:{...o,...a,dominance:"regular",value:0,disabled:!0}},g={args:{...r,...a,dominance:"decent",value:0}},m={args:{...r,...S,dominance:"decent",value:0}},p={args:{...r,...a,dominance:"decent",value:0,disabled:!0}},b={args:{...o,...a,dominance:"decent",value:0}},v={args:{...o,...S,dominance:"decent",value:0}},I={args:{...o,...a,dominance:"decent",value:0,disabled:!0}},x={args:{...r,dominance:"regular",value:0}},A={args:{...r,dominance:"regular",value:50}},T={args:{...r,dominance:"regular",value:100}},f={args:{label:"Label",labelInfoIcon:"InfoCirc",dominance:"regular",value:40}};var R,E,k;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    ...supportingArgs,
    dominance: 'regular',
    value: 0
  }
}`,...(k=(E=t.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var W,y,_;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    ...warningArgs,
    dominance: 'regular',
    value: 0
  }
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var w,L,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    ...supportingArgs,
    dominance: 'regular',
    value: 0,
    disabled: true
  }
}`,...(h=(L=i.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var C,O,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...textArgs,
    ...supportingArgs,
    dominance: 'regular',
    value: 0
  }
}`,...(M=(O=d.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var N,P,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...textArgs,
    ...warningArgs,
    dominance: 'regular',
    value: 0
  }
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var B,H,K;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...textArgs,
    ...supportingArgs,
    dominance: 'regular',
    value: 0,
    disabled: true
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var U,V,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    ...supportingArgs,
    dominance: 'decent',
    value: 0
  }
}`,...(Y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var j,z,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    ...warningArgs,
    dominance: 'decent',
    value: 0
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,J,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    ...supportingArgs,
    dominance: 'decent',
    value: 0,
    disabled: true
  }
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...textArgs,
    ...supportingArgs,
    dominance: 'decent',
    value: 0
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,ae;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...textArgs,
    ...warningArgs,
    dominance: 'decent',
    value: 0
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,se,te;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...textArgs,
    ...supportingArgs,
    dominance: 'decent',
    value: 0,
    disabled: true
  }
}`,...(te=(se=I.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ce,ie,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    dominance: 'regular',
    value: 0
  }
}`,...(de=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ue,ge;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    dominance: 'regular',
    value: 50
  }
}`,...(ge=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,pe,be;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...iconArgs,
    dominance: 'regular',
    value: 100
  }
}`,...(be=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ve,Ie,xe;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    labelInfoIcon: 'InfoCirc',
    dominance: 'regular',
    value: 40
  }
}`,...(xe=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};const _e=["RegularIconEnabled","RegularIconWarning","RegularIconDisabled","RegularTextEnabled","RegularTextWarning","RegularTextDisabled","DecentIconEnabled","DecentIconWarning","DecentIconDisabled","DecentTextEnabled","DecentTextWarning","DecentTextDisabled","TrackStart","TrackMid","TrackEnd","WithoutLeadingAndTrailing"];export{p as DecentIconDisabled,g as DecentIconEnabled,m as DecentIconWarning,I as DecentTextDisabled,b as DecentTextEnabled,v as DecentTextWarning,i as RegularIconDisabled,t as RegularIconEnabled,c as RegularIconWarning,u as RegularTextDisabled,d as RegularTextEnabled,l as RegularTextWarning,T as TrackEnd,A as TrackMid,x as TrackStart,f as WithoutLeadingAndTrailing,_e as __namedExportsOrder,ye as default};
