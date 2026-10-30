import{g as K,o as d,b as t}from"./iframe-DkRrOnhD.js";import{a as b}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:Q,args:X,argTypes:Y}=K("ibk-bottom-navigation"),m=[{label:"Startseite",icon:"Home",active:!0},{label:"Suche",icon:"Search"},{label:"Favoriten",icon:"Fav"},{label:"Einstellungen",icon:"Setting"}],Z=[{label:"Eingabe",icon:"Scan",active:!0},{label:"Verarbeitung",icon:"Chip"},{label:"Ausgabe",icon:"Printer",disabled:!0},{label:"Speicherung",icon:"HybStor"}],se={title:"Components/Bottom Navigation",component:"ibk-bottom-navigation",args:{...X,items:m,variant:"regular",dominance:"regular",label:"Hauptnavigation"},argTypes:{...Y,items:{control:"object"}},parameters:{actions:{handles:Q},docs:{description:{component:"A bar of primary destinations pinned to the bottom of a view, each one an icon stacked over its label. Exactly one item is the current destination and carries the selected fill; `dominance` picks that fill: `regular` (petrol) or `prominent` (red). `variant` picks the size of the bar: `regular` (120x66 items, 8px gap) for a roomier bar and `decent` (84x52 items, 4px gap) for a compact one. The bar draws no background of its own, so it takes on whatever surface it is placed on. Activating an item fires `navigation-change` with `{ index, item }`; the bar never navigates on its own."}}},render:e=>ee(e)},ee=e=>t`
  <ibk-bottom-navigation
    variant="${d(e.variant||void 0)}"
    dominance="${d(e.dominance||void 0)}"
    label="${d(e.label||void 0)}"
    .items="${e.items}"
    ?disabled="${e.disabled}"
    @navigation-change="${e["navigation-change"]||b}"
  ></ibk-bottom-navigation>
`,n={args:{items:m,variant:"regular",dominance:"regular",label:"Hauptnavigation",disabled:!1}},i={render:()=>t`
    <div style="display:flex; flex-direction:column; gap:1.5rem; align-items:flex-start;">
      ${["regular","decent"].map(e=>t`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              ${e}
            </p>
            <ibk-bottom-navigation
              variant=${e}
              label="Hauptnavigation"
              .items=${m}
              @navigation-change=${b}
            ></ibk-bottom-navigation>
          </div>
        `)}
    </div>
  `},o={render:()=>t`
    <div style="display:flex; flex-direction:column; gap:1.5rem; align-items:flex-start;">
      ${["regular","prominent"].map(e=>t`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              ${e}
            </p>
            <ibk-bottom-navigation
              dominance=${e}
              label="Hauptnavigation"
              .items=${m}
              @navigation-change=${b}
            ></ibk-bottom-navigation>
          </div>
        `)}
    </div>
  `},s={args:{items:Z}},r={args:{items:m,disabled:!0}},l={args:{variant:"decent",items:[{icon:"Home",title:"Startseite",active:!0},{icon:"Search",title:"Suche"},{icon:"Fav",title:"Favoriten"},{icon:"Setting",title:"Einstellungen"}]}},te=[{key:"enabled",cls:""},{key:"disabled",cls:"",disabled:!0},{key:"hover",cls:"sb-force-hover"},{key:"pressed",cls:"sb-force-pressed"},{key:"focus",cls:"sb-force-focus"}],ae=t`
  <style>
    /* A static reference matrix — no cell reacts to the pointer. */
    .sb-states .sb-cell {
      display: inline-flex;
      pointer-events: none;
    }

    /* Only the first item of a cell is the specimen; the second one is there so
       the "unselected" column has something to be unselected against. */
    .sb-force-hover
      .ibkBottomNavigation-listItem:first-child
      .ibkBottomNavigation-item:not(.selected):not(:disabled) {
      background: var(--ibk-neutral-grey-90);
    }
    .sb-force-pressed
      .ibkBottomNavigation-listItem:first-child
      .ibkBottomNavigation-item:not(.selected):not(:disabled) {
      background: var(--ibk-neutral-grey-74);
    }
    /* Same values as the component's own :focus-visible rule - drawn inside the
       item, see the accessibility notes above. */
    .sb-force-focus .ibkBottomNavigation-listItem:first-child .ibkBottomNavigation-item {
      outline: solid 2px var(--ibk-focusstroke);
      outline-offset: -2px;
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
`,p=[{title:"Unselected",variant:"regular",dominance:"regular",selected:!1},{title:"Regular Selection",variant:"regular",dominance:"regular",selected:!0},{title:"Prominent Selection",variant:"regular",dominance:"prominent",selected:!0},{title:"Decent Unselected",variant:"decent",dominance:"regular",selected:!1},{title:"Decent Selection",variant:"decent",dominance:"regular",selected:!0}],c={render:()=>t`
    ${ae}
    <table class="sb-states">
      <thead>
        <tr>
          <th></th>
          ${p.map(e=>t`<th>${e.title}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${te.map(e=>t`
            <tr>
              <td class="sb-row-label">${e.key}</td>
              ${p.map(a=>t`
                  <td>
                    ${a.selected&&e.disabled?t`<span class="sb-row-label">—</span>`:t`
                          <span class="sb-cell ${e.cls}">
                            <ibk-bottom-navigation
                              variant=${d(a.variant)}
                              dominance=${d(a.dominance)}
                              label="Hauptnavigation"
                              .items=${[{label:"Startseite",icon:"Home",active:a.selected,disabled:e.disabled},{label:"Suche",icon:"Search",active:!a.selected}]}
                            ></ibk-bottom-navigation>
                          </span>
                        `}
                  </td>
                `)}
            </tr>
          `)}
      </tbody>
    </table>
  `};var g,u,h,v,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'regular',
    dominance: 'regular',
    label: 'Hauptnavigation',
    disabled: false
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`Default — four destinations with the first one current, driven by the controls
panel.`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var y,S,$,k,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:1.5rem; align-items:flex-start;">
      \${(['regular', 'decent'] as const).map(variant => html\`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              \${variant}
            </p>
            <ibk-bottom-navigation
              variant=\${variant}
              label="Hauptnavigation"
              .items=\${defaultItems}
              @navigation-change=\${action}
            ></ibk-bottom-navigation>
          </div>
        \`)}
    </div>
  \`
}`,...($=(S=i.parameters)==null?void 0:S.docs)==null?void 0:$.source},description:{story:"Variant — `regular` sizes the items 120x66 with an 8px gap, `decent` 84x52 with\na 4px gap and the smaller support type. Nothing else changes between the two.",...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var x,H,I,T,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:1.5rem; align-items:flex-start;">
      \${(['regular', 'prominent'] as const).map(dominance => html\`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              \${dominance}
            </p>
            <ibk-bottom-navigation
              dominance=\${dominance}
              label="Hauptnavigation"
              .items=\${defaultItems}
              @navigation-change=\${action}
            ></ibk-bottom-navigation>
          </div>
        \`)}
    </div>
  \`
}`,...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:"Dominance — `regular` fills the current item with petrol, `prominent` with red.",...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var N,E,A,z,O;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: figmaItems
  }
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:`The Figma bar — the four destinations the design is drawn with, "Ausgabe"
disabled. Disabled items are skipped by both the pointer and the arrow keys.`,...(O=(z=s.parameters)==null?void 0:z.docs)==null?void 0:O.description}}};var B,F,_,C,U;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    disabled: true
  }
}`,...(_=(F=r.parameters)==null?void 0:F.docs)==null?void 0:_.source},description:{story:"The whole bar can be switched off with the `disabled` attribute.",...(U=(C=r.parameters)==null?void 0:C.docs)==null?void 0:U.description}}};var V,L,M,R,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    items: [{
      icon: 'Home',
      title: 'Startseite',
      active: true
    }, {
      icon: 'Search',
      title: 'Suche'
    }, {
      icon: 'Fav',
      title: 'Favoriten'
    }, {
      icon: 'Setting',
      title: 'Einstellungen'
    }]
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:"Icon only — an item without a `label` drops the caption. Its `title` then\ncarries the accessible name, because the icon alone has nothing to read out.",...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var W,j,q,G,J;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
                            <ibk-bottom-navigation
                              variant=\${ifDefined(column.variant)}
                              dominance=\${ifDefined(column.dominance)}
                              label="Hauptnavigation"
                              .items=\${[{
    label: 'Startseite',
    icon: 'Home',
    active: column.selected,
    disabled: state.disabled
  }, {
    label: 'Suche',
    icon: 'Search',
    active: !column.selected
  }]}
                            ></ibk-bottom-navigation>
                          </span>
                        \`}
                  </td>
                \`)}
            </tr>
          \`)}
      </tbody>
    </table>
  \`
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:`States reference — the full Figma matrix: every state (enabled / disabled /
hover / pressed / focus) for an unselected item and for both selections, in
both bar variants. Hover, pressed and focus are normally interactive, so here
they are forced visually to show the whole matrix at once.

The current item has no disabled state in the design and keeps its fill on
hover and pressed — only the focus ring is added.`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const re=["Default","Variant","Dominance","DisabledItem","Disabled","IconOnly","States"];export{n as Default,r as Disabled,s as DisabledItem,o as Dominance,l as IconOnly,c as States,i as Variant,re as __namedExportsOrder,se as default};
