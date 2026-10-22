import{g as q,o as n,b as t}from"./iframe-DkRrOnhD.js";import{n as A}from"./ref-yj2NHpU9.js";import{a as D}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const E=e=>{if(!e)return;const c=e.querySelector("button");c&&!e.contains(document.activeElement)&&requestAnimationFrame(()=>c.focus())},{events:H,args:O,argTypes:_}=q("ibk-step-button"),K={title:"Components/Step Button",component:"ibk-step-button",args:O,argTypes:_,parameters:{actions:{handles:H},docs:{description:{component:"A compact icon-only stepper button. `dominance` sets the colour ramp (prominent / regular / decent), `size` the icon scale (40 / 20) and `shape` the corner style (round / quad / rect — rect is size 20 only). Hover, pressed, focus and disabled states are handled automatically. For a grouped previous/next or up/down pair, see Step Button Bar."}}},render:e=>C(e)},C=e=>t`
  <ibk-step-button
    icon="${n(e.icon||void 0)}"
    dominance="${n(e.dominance||void 0)}"
    size="${n(e.size||void 0)}"
    shape="${n(e.shape||void 0)}"
    label="${n(e.label||void 0)}"
    ?disabled="${e.disabled}"
    @step="${e.step||D}"
  ></ibk-step-button>
`,p=["prominent","regular","decent"],r={args:{icon:"JmpU",dominance:"prominent",size:"40",shape:"round",label:"Increase value",disabled:!1}},s={render:()=>t`
    <ibk-step-button
      dominance="prominent"
      size="40"
      shape="round"
      icon="JmpU"
      label="Increase value"
      @step=${D}
    ></ibk-step-button>
  `},N=[{key:"enabled",cls:""},{key:"hover",cls:"sb-force-hover"},{key:"pressed",cls:"sb-force-pressed"},{key:"focus",cls:"sb-force-focus"},{key:"disabled",cls:"",disabled:!0}],Q=t`
  <style>
    /* A static reference matrix — no cell reacts to the pointer. */
    .sb-states .sb-cell {
      display: inline-flex;
      pointer-events: none;
    }

    .sb-force-hover .ibkStepButton-prominent {
      background: var(--ibk-red-49);
      border-color: var(--ibk-red-49);
    }
    /* Regular hover has no palette token — same literal ramp as step-button.css. */
    .sb-force-hover .ibkStepButton-regular {
      background: rgb(82, 105, 122);
      border-color: rgb(82, 105, 122);
    }
    .sb-force-hover .ibkStepButton-decent {
      background: var(--ibk-neutral-grey-90);
      border-color: var(--ibk-neutral-grey-90);
    }

    .sb-force-pressed .ibkStepButton-prominent {
      background: var(--ibk-red-33);
      border-color: var(--ibk-red-33);
    }
    .sb-force-pressed .ibkStepButton-regular {
      background: var(--ibk-petrol-26);
      border-color: var(--ibk-petrol-26);
    }
    .sb-force-pressed .ibkStepButton-decent {
      background: var(--ibk-neutral-grey-74);
      border-color: var(--ibk-neutral-grey-74);
    }

    .sb-force-focus .ibkStepButton {
      outline: 2px solid var(--ibk-focusstroke);
      outline-offset: 2px;
    }
    .sb-states {
      border-collapse: separate;
      border-spacing: 0.75rem 0.5rem;
    }
    .sb-states th {
      font-weight: 600;
      font-size: 0.75rem;
      color: #555;
    }
    .sb-states td {
      text-align: center;
    }
    .sb-states .sb-row-label {
      text-align: right;
      color: #777;
      font-size: 0.8125rem;
      text-transform: capitalize;
      padding-right: 0.5rem;
    }
  </style>
`,l=(e,c,d)=>t`
  <div style="margin-bottom:2rem;">
    <p style="margin:0 0 0.5rem;"><strong>Style: ${e}</strong></p>
    <table class="sb-states">
      <thead>
        <tr>
          <th></th>
          ${p.map(o=>t`<th colspan=${d.length} style="text-transform:capitalize;">${o}</th>`)}
        </tr>
        <tr>
          <th></th>
          ${p.map(()=>d.map(o=>t`<th>${o}</th>`))}
        </tr>
      </thead>
      <tbody>
        ${N.map(o=>t`
            <tr>
              <td class="sb-row-label">${o.key}</td>
              ${p.map(I=>d.map(P=>t`
                    <td>
                      <span class="sb-cell ${o.cls}">
                        <ibk-step-button
                          dominance=${n(I)}
                          size=${n(P)}
                          shape=${n(c)}
                          icon="JmpU"
                          label="${o.key}"
                          ?disabled=${o.disabled}
                        ></ibk-step-button>
                      </span>
                    </td>
                  `))}
            </tr>
          `)}
      </tbody>
    </table>
  </div>
`,a={render:()=>t`
    ${Q} ${l("Round","round",["40","20"])}
    ${l("Quad","quad",["40","20"])} ${l("Rect","rect",["20"])}
  `},i={render:()=>t`
    <div ${A(E)} style="display:flex; gap:1.5rem; align-items:center;">
      <ibk-step-button
        icon="JmpU"
        dominance="prominent"
        shape="round"
        label="Prominent"
      ></ibk-step-button>
      <ibk-step-button
        icon="JmpU"
        dominance="regular"
        shape="round"
        label="Regular"
      ></ibk-step-button>
      <ibk-step-button
        icon="JmpU"
        dominance="decent"
        shape="round"
        label="Decent"
      ></ibk-step-button>
    </div>
    <p style="margin-top:1rem; color:#666; font-size:0.875rem;">
      The blue ring is the keyboard focus state (<code>:focus-visible</code>). Press
      <kbd>Tab</kbd> to move focus between buttons.
    </p>
  `};var b,u,m,h,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: 'JmpU',
    dominance: 'prominent',
    size: '40',
    shape: 'round',
    label: 'Increase value',
    disabled: false
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Interactive playground driven by the controls panel.",...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.description}}};var f,g,y,v,$;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <ibk-step-button
      dominance="prominent"
      size="40"
      shape="round"
      icon="JmpU"
      label="Increase value"
      @step=\${action}
    ></ibk-step-button>
  \`
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Default — a single stepper button.",...($=(v=s.parameters)==null?void 0:v.docs)==null?void 0:$.description}}};var S,x,z,w,B;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{\n  render: () => html`\n    ${forceStyles} ${statesSection('Round', 'round', ['40', '20'])}\n    ${statesSection('Quad', 'quad', ['40', '20'])} ${statesSection('Rect', 'rect', ['20'])}\n  `\n}",...(z=(x=a.parameters)==null?void 0:x.docs)==null?void 0:z.source},description:{story:`States reference — the full Figma matrix: every state (enabled / hover /
pressed / focus / disabled) across dominance and size, per style. Hover,
pressed and focus are normally interactive, so here they are forced visually
to show the whole matrix at once.`,...(B=(w=a.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var J,U,F,T,R;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div \${ref(autofocusFirst)} style="display:flex; gap:1.5rem; align-items:center;">
      <ibk-step-button
        icon="JmpU"
        dominance="prominent"
        shape="round"
        label="Prominent"
      ></ibk-step-button>
      <ibk-step-button
        icon="JmpU"
        dominance="regular"
        shape="round"
        label="Regular"
      ></ibk-step-button>
      <ibk-step-button
        icon="JmpU"
        dominance="decent"
        shape="round"
        label="Decent"
      ></ibk-step-button>
    </div>
    <p style="margin-top:1rem; color:#666; font-size:0.875rem;">
      The blue ring is the keyboard focus state (<code>:focus-visible</code>). Press
      <kbd>Tab</kbd> to move focus between buttons.
    </p>
  \`
}`,...(F=(U=i.parameters)==null?void 0:U.docs)==null?void 0:F.source},description:{story:`Focus state — the blue focus ring on round buttons, matching the Figma
"focus" row. The first button is auto-focused so the ring shows immediately;
press Tab to move focus between them.`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.description}}};const L=["Playground","Default","States","Focus"];export{s as Default,i as Focus,r as Playground,a as States,L as __namedExportsOrder,K as default};
