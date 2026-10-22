import{g as te,o as r,b as oe}from"./iframe-DkRrOnhD.js";import{a as le}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:ce,args:ie,argTypes:ge}=te("ibk-meter"),ve={title:"Components/Meter",component:"ibk-meter",args:{...ie,level:"optimal",variant:"regular",disabled:!1},argTypes:{...ge,level:{control:"select",options:["max","highPos","highNeg","optimal","low","min"]},variant:{control:"select",options:["regular","decent"]},disabled:{control:"boolean"},value:{control:{type:"number",min:0,max:100,step:1}}},parameters:{actions:{handles:ce}},render:a=>de(a)},de=a=>oe`
  <ibk-meter
    label="${r(a.label||void 0)}"
    labelInfoIcon="${r(a.labelInfoIcon||void 0)}"
    level="${r(a.level||void 0)}"
    variant="${r(a.variant||void 0)}"
    value="${r(typeof a.value=="number"?a.value:void 0)}"
    ?disabled="${a.disabled}"
    @label-icon-click="${le}"
  ></ibk-meter>
`,e={label:"Label",labelInfoIcon:"InfoCirc"},s={args:{...e,variant:"regular",level:"max"}},n={args:{...e,variant:"regular",level:"highPos"}},t={args:{...e,variant:"regular",level:"highNeg"}},o={args:{...e,variant:"regular",level:"optimal"}},l={args:{...e,variant:"regular",level:"low"}},c={args:{...e,variant:"regular",level:"min"}},i={args:{...e,variant:"regular",level:"optimal",disabled:!0}},g={args:{...e,variant:"decent",level:"max"}},d={args:{...e,variant:"decent",level:"highPos"}},m={args:{...e,variant:"decent",level:"highNeg"}},u={args:{...e,variant:"decent",level:"optimal"}},p={args:{...e,variant:"decent",level:"low"}},v={args:{...e,variant:"decent",level:"min"}},b={args:{...e,variant:"decent",level:"optimal",disabled:!0}};var h,f,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'regular',
    level: 'max'
  }
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var A,S,R;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'regular',
    level: 'highPos'
  }
}`,...(R=(S=n.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var x,M,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'regular',
    level: 'highNeg'
  }
}`,...(w=(M=t.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var H,N,P;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'regular',
    level: 'optimal'
  }
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var I,$,k;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'regular',
    level: 'low'
  }
}`,...(k=($=l.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var y,L,O;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'regular',
    level: 'min'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var C,T,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'regular',
    level: 'optimal',
    disabled: true
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,j,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    level: 'max'
  }
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,B,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    level: 'highPos'
  }
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    level: 'highNeg'
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    level: 'optimal'
  }
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    level: 'low'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    level: 'min'
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,ne;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    level: 'optimal',
    disabled: true
  }
}`,...(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const be=["RegularMax","RegularHighPos","RegularHighNeg","RegularOptimal","RegularLow","RegularMin","RegularDisabled","DecentMax","DecentHighPos","DecentHighNeg","DecentOptimal","DecentLow","DecentMin","DecentDisabled"];export{b as DecentDisabled,m as DecentHighNeg,d as DecentHighPos,p as DecentLow,g as DecentMax,v as DecentMin,u as DecentOptimal,i as RegularDisabled,t as RegularHighNeg,n as RegularHighPos,l as RegularLow,s as RegularMax,c as RegularMin,o as RegularOptimal,be as __namedExportsOrder,ve as default};
