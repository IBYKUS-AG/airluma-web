import{g as T,o,b as a}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:f,args:x,argTypes:E}=T("ibk-card"),R={title:"Components/Card",component:"ibk-card",args:x,argTypes:E,parameters:{actions:{handles:f}},render:e=>C(e)},d=["filled","bordered","elevated"],I=["0","2","6","10"],C=e=>a`
  <ibk-card
    variant="${o(e.variant||void 0)}"
    delta="${o(e.delta||void 0)}"
  >
    <h3>Card Title</h3>
    <p>This is some content inside the card. It adapts to the card styling.</p>
  </ibk-card>
`,t={args:{variant:"filled",delta:"6"}},n={args:{variant:"bordered",delta:"6"}},s={args:{variant:"elevated",delta:"6"}},r={parameters:{controls:{disable:!0}},render:()=>a`
    <div
      style="display: grid; grid-template-columns: repeat(${d.length}, 12.5rem); gap: 1.5rem; padding: 1.5rem; background-color: var(--ibk-neutral-grey-50);"
    >
      ${d.map(e=>a`<strong style="text-align: center;">${e}</strong>`)}
      ${I.map(e=>a`
          ${d.map(A=>a`
              <ibk-card variant="${A}" delta="${e}" style="height: 12.5rem;">
                Delta-${e}
              </ibk-card>
            `)}
        `)}
    </div>
  `};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    delta: '6'
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    delta: '6'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,u,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    delta: '6'
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,$,y,k,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div
      style="display: grid; grid-template-columns: repeat(\${VARIANTS.length}, 12.5rem); gap: 1.5rem; padding: 1.5rem; background-color: var(--ibk-neutral-grey-50);"
    >
      \${VARIANTS.map(variant => html\`<strong style="text-align: center;">\${variant}</strong>\`)}
      \${DELTAS.map(delta => html\`
          \${VARIANTS.map(variant => html\`
              <ibk-card variant="\${variant}" delta="\${delta}" style="height: 12.5rem;">
                Delta-\${delta}
              </ibk-card>
            \`)}
        \`)}
    </div>
  \`
}`,...(y=($=r.parameters)==null?void 0:$.docs)==null?void 0:y.source},description:{story:`Every combination of variant and surface step. The backdrop is a mid grey so
that the white and near-white surfaces stay visible.`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};const V=["Filled","Bordered","Elevated","Matrix"];export{n as Bordered,s as Elevated,t as Filled,r as Matrix,V as __namedExportsOrder,R as default};
