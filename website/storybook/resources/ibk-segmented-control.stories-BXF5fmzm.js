import{g as J,o as m,b as t}from"./iframe-DkRrOnhD.js";import{a as G}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:Q,args:V,argTypes:X}=J("ibk-segmented-control"),c=[{label:"Segment One",active:!0,icon:"Home"},{label:"Segment Two"},{label:"Segment Three"},{label:"Segment Four"},{label:"Segment Five"}],re={title:"Components/Segmented Control",component:"ibk-segmented-control",args:{...V,items:c,dominance:"regular",label:"Segment"},argTypes:{...X,items:{control:"object"}},parameters:{actions:{handles:Q},docs:{description:{component:"A pill-shaped row of mutually exclusive segments for switching between a small set of closely related views. Exactly one segment is selected at a time and `dominance` picks its fill: `regular` (petrol) or `prominent` (red). A segment shows a leading icon when its object carries an `icon` ligature, so icons are chosen per segment rather than for the whole group. Every enabled segment is its own tab stop, like a toolbar of toggle buttons, rather than a native radio group where only the checked input is tabbable: Tab cycles through them one at a time, the arrow keys and Home/End do the same while skipping disabled segments, and a click or Enter/Space is what actually selects the focused segment."}}},render:e=>Z(e)},Z=e=>t`
  <ibk-segmented-control
    dominance="${m(e.dominance||void 0)}"
    label="${m(e.label||void 0)}"
    .items="${e.items}"
    ?disabled="${e.disabled}"
    @segment-change="${e["segment-change"]||G}"
  ></ibk-segmented-control>
`,n={args:{items:c,dominance:"regular",label:"Segment",disabled:!1}},s={args:{items:c}},a={render:()=>t`
    <div style="display:flex; flex-direction:column; gap:1.5rem; align-items:flex-start;">
      ${["regular","prominent"].map(e=>t`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              ${e}
            </p>
            <ibk-segmented-control
              dominance=${e}
              label="Segment"
              .items=${c}
              @segment-change=${G}
            ></ibk-segmented-control>
          </div>
        `)}
    </div>
  `},r={args:{items:[{label:"Segment One",icon:"Home",active:!0},{label:"Segment Two",icon:"InfoCirc"},{label:"Segment Three"}]}},o={args:{items:[{label:"Segment One",active:!0},{label:"Segment Two",disabled:!0},{label:"Segment Three"}]}},l={args:{items:c,disabled:!0}},ee=[{key:"enabled",cls:""},{key:"disabled",cls:"",disabled:!0},{key:"hover",cls:"sb-force-hover"},{key:"pressed",cls:"sb-force-pressed"},{key:"focus",cls:"sb-force-focus"}],te=t`
  <style>
    /* A static reference matrix — no cell reacts to the pointer. */
    .sb-states .sb-cell {
      display: inline-flex;
      pointer-events: none;
    }

    /* Only the first segment of a cell is the specimen; the second one is there
       so the "unselected" column has something to be unselected against.
       :first-of-type rather than :first-child - the selection thumb is the
       first child of the container. */
    .sb-force-hover .ibkSegmentedControl-segment:first-of-type:not(.selected):not(:disabled) {
      background: var(--ibk-neutral-grey-90);
    }
    .sb-force-pressed .ibkSegmentedControl-segment:first-of-type:not(.selected):not(:disabled) {
      background: var(--ibk-neutral-grey-74);
    }
    /* Same values as the shared ::focus-visible rule in global.css - the
       component itself no longer overrides focus styling at all. */
    .sb-force-focus .ibkSegmentedControl-segment:first-of-type {
      outline: 2px solid var(--ibk-focusstroke);
      outline-offset: 2px;
    }
    .sb-states {
      border-collapse: separate;
      border-spacing: 0.75rem 0.5rem;
    }
    .sb-states th {
      color: #555;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .sb-states .sb-row-label {
      color: #777;
      font-size: 0.8125rem;
      padding-right: 0.5rem;
      text-align: right;
      text-transform: capitalize;
    }
  </style>
`,g=[{title:"Unselected Segment",dominance:"regular",selected:!1},{title:"Regular Selection",dominance:"regular",selected:!0},{title:"Prominent Selection",dominance:"prominent",selected:!0}],i={render:()=>t`
    ${te}
    <table class="sb-states">
      <thead>
        <tr>
          <th></th>
          ${g.map(e=>t`<th>${e.title}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${ee.map(e=>t`
            <tr>
              <td class="sb-row-label">${e.key}</td>
              ${g.map(d=>t`
                  <td>
                    ${d.selected&&e.disabled?t`<span class="sb-row-label">—</span>`:t`
                          <span class="sb-cell ${e.cls}">
                            <ibk-segmented-control
                              dominance=${m(d.dominance)}
                              label="Segment"
                              .items=${[{label:"Segment name",icon:"Home",active:d.selected,disabled:e.disabled},{label:"Other",icon:"Home",active:!d.selected}]}
                            ></ibk-segmented-control>
                          </span>
                        `}
                  </td>
                `)}
            </tr>
          `)}
      </tbody>
    </table>
  `};var b,p,h,u,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    dominance: 'regular',
    label: 'Segment',
    disabled: false
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"Interactive playground driven by the controls panel.",...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var S,y,v,k,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"Default — five segments with the first one selected.",...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var $,T,x,O,D;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:1.5rem; align-items:flex-start;">
      \${(['regular', 'prominent'] as const).map(dominance => html\`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              \${dominance}
            </p>
            <ibk-segmented-control
              dominance=\${dominance}
              label="Segment"
              .items=\${defaultItems}
              @segment-change=\${action}
            ></ibk-segmented-control>
          </div>
        \`)}
    </div>
  \`
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source},description:{story:"Dominance — `regular` fills the selected segment with petrol, `prominent`\nwith red. Everything else is identical.",...(D=(O=a.parameters)==null?void 0:O.docs)==null?void 0:D.description}}};var I,C,E,H,A;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Segment One',
      icon: 'Home',
      active: true
    }, {
      label: 'Segment Two',
      icon: 'InfoCirc'
    }, {
      label: 'Segment Three'
    }]
  }
}`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:'Leading icon — each segment picks its own IBYKUS-Iconset ligature through its\n`icon`. A segment without one, like "Segment Three" here, renders text only.',...(A=(H=r.parameters)==null?void 0:H.docs)==null?void 0:A.description}}};var _,L,z,U,W;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Segment One',
      active: true
    }, {
      label: 'Segment Two',
      disabled: true
    }, {
      label: 'Segment Three'
    }]
  }
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source},description:{story:"Disabled segments are skipped by both the pointer and the arrow keys.",...(W=(U=o.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var F,M,N,P,R;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    disabled: true
  }
}`,...(N=(M=l.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"The whole control can be switched off with the `disabled` attribute.",...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var j,B,K,Y,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    \${forceStyles}
    <table class="sb-states">
      <thead>
        <tr>
          <th></th>
          \${STATE_COLUMNS.map(column => html\`<th>\${column.title}</th>\`)}
        </tr>
      </thead>
      <tbody>
        \${STATE_ROWS.map(state => html\`
            <tr>
              <td class="sb-row-label">\${state.key}</td>
              \${STATE_COLUMNS.map(column => html\`
                  <td>
                    \${column.selected && state.disabled ? html\`<span class="sb-row-label">—</span>\` : html\`
                          <span class="sb-cell \${state.cls}">
                            <ibk-segmented-control
                              dominance=\${ifDefined(column.dominance)}
                              label="Segment"
                              .items=\${[{
    label: 'Segment name',
    icon: 'Home',
    active: column.selected,
    disabled: state.disabled
  }, {
    label: 'Other',
    icon: 'Home',
    active: !column.selected
  }]}
                            ></ibk-segmented-control>
                          </span>
                        \`}
                  </td>
                \`)}
            </tr>
          \`)}
      </tbody>
    </table>
  \`
}`,...(K=(B=i.parameters)==null?void 0:B.docs)==null?void 0:K.source},description:{story:`States reference — the full Figma matrix: every state (enabled / disabled /
hover / pressed / focus) for an unselected segment and for both selections.
Hover, pressed and focus are normally interactive, so here they are forced
visually to show the whole matrix at once.

The selected segment has no disabled state in the design and keeps its fill
on hover and pressed — only the focus ring is added.`,...(q=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};const oe=["Playground","Default","Dominance","WithLeadingIcon","DisabledSegment","Disabled","States"];export{s as Default,l as Disabled,o as DisabledSegment,a as Dominance,n as Playground,i as States,r as WithLeadingIcon,oe as __namedExportsOrder,re as default};
