import{g as Z,o as ee,b as re}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:se,args:ae,argTypes:te}=Z("ibk-breadcrumb"),me={title:"Components/Breadcrumb",component:"ibk-breadcrumb",args:ae,argTypes:{...te,variant:{control:"select",options:["regular","decent"]}},parameters:{actions:{handles:se}},render:r=>ne(r)},ne=r=>re`
  <ibk-breadcrumb
    .items="${r.items}"
    variant="${ee(r.variant||void 0)}"
  ></ibk-breadcrumb>
`,e=r=>{const v=["First Level","Second Level","Third Level","Fourth Level","Fifth Level","Sixth Level"].slice(0,r-1).map((X,Y)=>({label:X,href:`#level-${Y+1}`}));return v.push({label:"Current Level"}),v},s={args:{items:[{label:"First Level",href:"#level-1"}]}},a={args:{items:e(3)}},t={args:{items:e(4)}},n={args:{items:e(5)}},c={args:{items:e(6)}},o={args:{items:e(7)}},i={args:{variant:"decent",items:[{label:"First Level",href:"#level-1"}]}},m={args:{variant:"decent",items:e(3)}},l={args:{variant:"decent",items:e(4)}},d={args:{variant:"decent",items:e(5)}},u={args:{variant:"decent",items:e(6)}},p={args:{variant:"decent",items:e(7)}};var g,b,L;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'First Level',
      href: '#level-1'
    }]
  }
}`,...(L=(b=s.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var S,h,F;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: buildItems(3)
  }
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var D,I,f;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: buildItems(4)
  }
}`,...(f=(I=t.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var x,T,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: buildItems(5)
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var y,$,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: buildItems(6)
  }
}`,...(B=($=c.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var C,_,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: buildItems(7)
  }
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var H,O,j;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    items: [{
      label: 'First Level',
      href: '#level-1'
    }]
  }
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,w,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    items: buildItems(3)
  }
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var A,G,J;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    items: buildItems(4)
  }
}`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,N;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    items: buildItems(5)
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,Q,R;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    items: buildItems(6)
  }
}`,...(R=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,V,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    items: buildItems(7)
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const le=["Single","ThreeLevel","FourLevel","FiveLevel","SixLevel","SevenLevel","SingleDecent","ThreeLevelDecent","FourLevelDecent","FiveLevelDecent","SixLevelDecent","SevenLevelDecent"];export{n as FiveLevel,d as FiveLevelDecent,t as FourLevel,l as FourLevelDecent,o as SevenLevel,p as SevenLevelDecent,s as Single,i as SingleDecent,c as SixLevel,u as SixLevelDecent,a as ThreeLevel,m as ThreeLevelDecent,le as __namedExportsOrder,me as default};
