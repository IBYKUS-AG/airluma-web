import{g as ae,o as n,b as se}from"./iframe-DkRrOnhD.js";import{a as ce}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:ie,args:ue,argTypes:de}=ae("ibk-button"),ye={title:"Components/Button",component:"ibk-button",args:ue,argTypes:de,parameters:{actions:{handles:ie}},render:r=>ge(r)},ge=r=>se`
  <ibk-button
    label="${n(r.label||void 0)}"
    type="${n(r.type||void 0)}"
    htmlType="${n(r.htmlType||void 0)}"
    variant="${n(r.variant||void 0)}"
    icon="${n(r.icon||void 0)}"
    iconPosition="${n(r.iconPosition||void 0)}"
    ?disabled="${r.disabled}"
    @click="${r.onclick||ce}"
  ></ibk-button>
`,e={label:"Button Text",icon:"Home"},t={args:{...e}},o={args:{...e,type:"secondary"}},a={args:{...e,variant:"decent"}},s={args:{...e,type:"secondary",variant:"decent"}},c={args:{...e,type:"destructive"}},i={args:{...e,type:"success"}},u={args:{...e,iconPosition:"trailing"}},d={args:{...e,iconPosition:"trailing",type:"secondary"}},g={args:{...e,variant:"decent",iconPosition:"trailing"}},p={args:{...e,variant:"decent",iconPosition:"trailing",type:"secondary"}},l={args:{...e,iconPosition:"trailing",type:"destructive"}},m={args:{...e,iconPosition:"trailing",type:"success"}},y={args:{label:"Button Text",type:"primary",iconPosition:"text"}},B={args:{...e,iconPosition:"solo",type:"primary"}};var S,P,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(v=(P=t.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var I,T,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'secondary'
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var f,A,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent'
  }
}`,...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,x,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'secondary',
    variant: 'decent'
  }
}`,...(R=(x=s.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var $,k,O;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'destructive'
  }
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var h,H,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'success'
  }
}`,...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var C,E,j;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconPosition: 'trailing'
  }
}`,...(j=(E=u.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var q,w,z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconPosition: 'trailing',
    type: 'secondary'
  }
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var F,G,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    iconPosition: 'trailing'
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,N;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'decent',
    iconPosition: 'trailing',
    type: 'secondary'
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Q,U,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconPosition: 'trailing',
    type: 'destructive'
  }
}`,...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconPosition: 'trailing',
    type: 'success'
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Button Text',
    type: 'primary',
    iconPosition: 'text'
  }
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,oe;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconPosition: 'solo',
    type: 'primary'
  }
}`,...(oe=(te=B.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Be=["LeadingIconButtonRegularPrimary","LeadingIconButtonRegularSecondary","LeadingIconButtonDecentPrimary","LeadingIconButtonDecentSecondary","LeadingIconButtonDestructive","LeadingIconButtonSuccess","TrailingIconButtonRegularPrimary","TrailingIconButtonRegularSecondary","TrailingIconButtonDecentPrimary","TrailingIconButtonDecentSecondary","TrailingIconButtonDestructive","TrailingIconButtonSuccess","OnlyText","OnlyButton"];export{a as LeadingIconButtonDecentPrimary,s as LeadingIconButtonDecentSecondary,c as LeadingIconButtonDestructive,t as LeadingIconButtonRegularPrimary,o as LeadingIconButtonRegularSecondary,i as LeadingIconButtonSuccess,B as OnlyButton,y as OnlyText,g as TrailingIconButtonDecentPrimary,p as TrailingIconButtonDecentSecondary,l as TrailingIconButtonDestructive,u as TrailingIconButtonRegularPrimary,d as TrailingIconButtonRegularSecondary,m as TrailingIconButtonSuccess,Be as __namedExportsOrder,ye as default};
