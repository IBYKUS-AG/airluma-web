import{g as R,o,b as t}from"./iframe-DkRrOnhD.js";import{n as B}from"./ref-yj2NHpU9.js";import{a as F}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const D=e=>{if(!e)return;const d=e.querySelector("button");d&&!e.contains(document.activeElement)&&requestAnimationFrame(()=>d.focus())},{events:E,args:V,argTypes:A}=R("ibk-step-button-bar"),G={title:"Components/Step Button Bar",component:"ibk-step-button-bar",args:V,argTypes:A,parameters:{actions:{handles:E},docs:{description:{component:"Two step buttons grouped as one control. `shape` sets the layout: `round` is a horizontal previous / next bar, `quad` and `rect` are vertical up / down bars. `framed` wraps the pair in a bordered frame. `startIcon` / `endIcon` override the two chevron icons."}}},render:e=>C(e)},C=e=>t`
  <ibk-step-button-bar
    dominance="${o(e.dominance||void 0)}"
    size="${o(e.size||void 0)}"
    shape="${o(e.shape||void 0)}"
    .startIcon=${e.startIcon||void 0}
    .endIcon=${e.endIcon||void 0}
    ?framed="${e.framed}"
    ?disabled="${e.disabled}"
    @step="${e.step||F}"
  ></ibk-step-button-bar>
`,N=["prominent","regular","decent"],r=(e,d,P,H=!1)=>t`
  <div style="display:flex; gap:2rem; align-items:center;">
    <span style="width:6rem; color:#777; font-size:0.8125rem;">${e}</span>
    ${N.map(O=>t`
        <ibk-step-button-bar
          dominance=${o(O)}
          size=${o(d)}
          shape=${o(P)}
          ?framed=${H}
          @step=${F}
        ></ibk-step-button-bar>
      `)}
  </div>
`,n={args:{dominance:"prominent",size:"40",shape:"round",framed:!0,disabled:!1}},s={render:()=>t`
    <div style="display:flex; flex-direction:column; gap:1.5rem;">
      ${r("40h framed","40","round",!0)} ${r("40h","40","round",!1)}
      ${r("20h framed","20","round",!0)} ${r("20h","20","round",!1)}
    </div>
  `},a={render:()=>t`
    <div style="display:flex; flex-direction:column; gap:1.5rem;">
      ${r("20v quad","20","quad",!1)} ${r("20v rect","20","rect",!1)}
    </div>
  `},i={render:()=>t`
    <div ${B(D)} style="display:flex; gap:2rem; align-items:center;">
      <ibk-step-button-bar dominance="prominent" shape="round" framed></ibk-step-button-bar>
      <ibk-step-button-bar dominance="prominent" shape="round"></ibk-step-button-bar>
    </div>
    <p style="margin-top:1rem; color:#666; font-size:0.875rem;">
      The blue ring is the keyboard focus state (<code>:focus-visible</code>). Press
      <kbd>Tab</kbd> to move focus between buttons.
    </p>
  `};var c,p,u,m,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    dominance: 'prominent',
    size: '40',
    shape: 'round',
    framed: true,
    disabled: false
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"Interactive playground driven by the controls panel.",...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};var b,f,v,h,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:1.5rem;">
      \${row('40h framed', '40', 'round', true)} \${row('40h', '40', 'round', false)}
      \${row('20h framed', '20', 'round', true)} \${row('20h', '20', 'round', false)}
    </div>
  \`
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Horizontal (Round) bars — previous / next. Order per row: Prominent, Regular, Decent.",...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var $,g,k,w,x;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:1.5rem;">
      \${row('20v quad', '20', 'quad', false)} \${row('20v rect', '20', 'rect', false)}
    </div>
  \`
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source},description:{story:"Vertical (Quad / Rect) bars — up / down. Order per row: Prominent, Regular, Decent.",...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var z,I,S,T,q;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div \${ref(autofocusFirst)} style="display:flex; gap:2rem; align-items:center;">
      <ibk-step-button-bar dominance="prominent" shape="round" framed></ibk-step-button-bar>
      <ibk-step-button-bar dominance="prominent" shape="round"></ibk-step-button-bar>
    </div>
    <p style="margin-top:1rem; color:#666; font-size:0.875rem;">
      The blue ring is the keyboard focus state (<code>:focus-visible</code>). Press
      <kbd>Tab</kbd> to move focus between buttons.
    </p>
  \`
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source},description:{story:`Focus state — the blue focus ring on a round bar (framed and unframed). The
first button is auto-focused; press Tab to move focus between the buttons.`,...(q=(T=i.parameters)==null?void 0:T.docs)==null?void 0:q.description}}};const J=["Playground","Horizontal","Vertical","Focus"];export{i as Focus,s as Horizontal,n as Playground,a as Vertical,J as __namedExportsOrder,G as default};
