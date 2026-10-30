import{g as M,o as R,b as t,A as j}from"./iframe-DkRrOnhD.js";import{a as B}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:G,args:P,argTypes:q}=M("ibk-top-navigation"),l=[{label:"Start",href:"#start",active:!0},{label:"Info",href:"#info"},{label:"Themen",href:"#themen"},{label:"Kontakt",href:"#kontakt"}],ee={title:"Components/Top Navigation",component:"ibk-top-navigation",args:{...P,items:l,label:"Hauptnavigation"},argTypes:{...q,items:{control:"object"}},parameters:{actions:{handles:G},docs:{description:{component:"A horizontal bar of text-only links to an application top-level destinations. Exactly one item is the current destination and carries the accent colour plus an underline indicator; hover and pressed underline the label as well, and focus draws the shared blue ring. Only for top level navigation and only without eIB decorations - the underline indicator occupies exactly the space an eIB decoration would need, so the two cannot be combined, and items therefore carry no icons at all. The bar draws no background of its own, so it takes on whatever surface it is placed on. An item with an `href` renders as a link, one without as a button; either way activating it fires `navigation-change` with `{ index, item }`."}}},render:e=>J(e)},J=e=>t`
  <ibk-top-navigation
    label="${R(e.label||void 0)}"
    .items="${e.items}"
    ?disabled="${e.disabled}"
    @navigation-change="${e["navigation-change"]||B}"
  ></ibk-top-navigation>
`,a={args:{items:l,label:"Hauptnavigation",disabled:!1}},n={args:{items:[{label:"Start",href:"#start",active:!0},{label:"Info",href:"#info"},{label:"Themen",href:"#themen",disabled:!0},{label:"Kontakt",href:"#kontakt"}]}},s={args:{items:l,disabled:!0}},o={args:{items:[{label:"Start",active:!0},{label:"Info"},{label:"Themen"},{label:"Kontakt"}]}},Q=[{key:"enabled",cls:"",inSelected:!0},{key:"disabled",cls:"",disabled:!0,inSelected:!1},{key:"hover",cls:"sb-force-hover",inSelected:!0},{key:"pressed",cls:"sb-force-pressed",inSelected:!1},{key:"focus",cls:"sb-force-focus",inSelected:!0}],V=t`
  <style>
    /* A static reference matrix — no cell reacts to the pointer. */
    .sb-states .sb-cell {
      display: inline-flex;
      pointer-events: none;
    }

    /* The padding is bar-level, not item-level; drop it so the cells line up. */
    .sb-states .ibkTopNavigation-list {
      padding: 0;
    }

    .sb-force-hover .ibkTopNavigation .ibkTopNavigation-item:not(.selected) {
      color: var(--ibk-neutral-grey-26);
    }
    .sb-force-pressed .ibkTopNavigation .ibkTopNavigation-item:not(.selected) {
      color: var(--ibk-neutral-grey-2);
    }
    /* Hover and pressed underline across the full label width, selected or not. The
       selector repeats the whole chain of the component's own .selected rule and
       adds the force class on top, so it outweighs the 20px indicator width. */
    .sb-cell.sb-force-hover .ibkTopNavigation .ibkTopNavigation-item .ibkTopNavigation-indicator,
    .sb-cell.sb-force-pressed .ibkTopNavigation .ibkTopNavigation-item .ibkTopNavigation-indicator {
      background: currentColor;
      width: 100%;
    }
    /* Same values as the shared :focus-visible rule in global.css. */
    .sb-force-focus .ibkTopNavigation-item {
      outline: solid 2px var(--ibk-focusstroke);
      outline-offset: 2px;
    }
    .sb-states {
      border-collapse: separate;
      border-spacing: 1.5rem 0.75rem;
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
`,c=[{title:"Unselected",selected:!1},{title:"Selected",selected:!0}],i={render:()=>t`
    ${V}
    <table class="sb-states">
      <thead>
        <tr>
          <th></th>
          ${c.map(e=>t`<th>${e.title}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${Q.map(e=>t`
            <tr>
              <td class="sb-row-label">${e.key}</td>
              ${c.map(d=>t`
                  <td>
                    ${d.selected&&!e.inSelected?j:t`
                          <span class="sb-cell ${e.cls}">
                            <ibk-top-navigation
                              label="Hauptnavigation"
                              .items=${[{label:"Text",active:d.selected,disabled:e.disabled}]}
                            ></ibk-top-navigation>
                          </span>
                        `}
                  </td>
                `)}
            </tr>
          `)}
      </tbody>
    </table>
  `},r={args:{items:l}};var b,h,p,m,u;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    label: 'Hauptnavigation',
    disabled: false
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source},description:{story:`Default — the four destinations of the Figma bar with "Start" current, driven by
the controls panel.`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var g,f,v,k,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Start',
      href: '#start',
      active: true
    }, {
      label: 'Info',
      href: '#info'
    }, {
      label: 'Themen',
      href: '#themen',
      disabled: true
    }, {
      label: 'Kontakt',
      href: '#kontakt'
    }]
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:`A disabled destination — "Themen" is switched off. Disabled items are skipped by
both the pointer and the arrow keys, and render as an inert button rather than a
link so they cannot be navigated to by any means.`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.description}}};var w,T,S,$,x;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    disabled: true
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source},description:{story:"The whole bar can be switched off with the `disabled` attribute.",...(x=($=s.parameters)==null?void 0:$.docs)==null?void 0:x.description}}};var N,A,I,D,H;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Start',
      active: true
    }, {
      label: 'Info'
    }, {
      label: 'Themen'
    }, {
      label: 'Kontakt'
    }]
  }
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:"Without `href` — items render as buttons and only report the pick through\n`navigation-change`, for apps that route on their own.",...(H=(D=o.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var E,O,_,K,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
                    \${column.selected && !state.inSelected ? nothing : html\`
                          <span class="sb-cell \${state.cls}">
                            <ibk-top-navigation
                              label="Hauptnavigation"
                              .items=\${[{
    label: 'Text',
    active: column.selected,
    disabled: state.disabled
  }]}
                            ></ibk-top-navigation>
                          </span>
                        \`}
                  </td>
                \`)}
            </tr>
          \`)}
      </tbody>
    </table>
  \`
}`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:`States reference — the Figma matrix cell for cell: every state (enabled /
disabled / hover / pressed / focus) for an unselected item, and only the three
the design draws for the current destination. Selected/Disabled and
Selected/Pressed have no variant in the Figma set, so those cells are empty.
Hover, pressed and focus are normally interactive, so here they are forced
visually to show the whole matrix at once.

The current destination keeps its accent colour throughout; on hover its short
20px indicator grows to the full label width, the same underline an unselected
item gets.`,...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.description}}};var C,U,W,z,F;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(W=(U=r.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:`Keyboard operation and accessibility.

- The bar is a \`nav\` landmark holding a real list, so screen readers announce
  it as navigation and read the item count and position from it.
- Give every bar a \`label\` (e.g. "Hauptnavigation") when a page carries more
  than one landmark, otherwise they cannot be told apart.
- **Tab / Shift+Tab** reach every enabled item: each one is its own tab stop,
  regardless of which item is current.
- **Arrow Left / Right** (and Up / Down) move focus along the bar as a
  shortcut, skipping disabled items and wrapping around at both ends. Moving
  focus does not change the current destination.
- **Home / End** jump to the first / last enabled item.
- **Enter** activates the focused item, **Space** additionally on the button
  form.
- The current destination carries \`aria-current="page"\`, so it is announced
  and not conveyed by colour and underline alone.
- Focus is shown with the shared 2px blue ring from \`global.css\`; it is never
  removed, and it is the only visual state added on top of the current item.
- A disabled item renders as a disabled button rather than a link, so it is
  unreachable by pointer, keyboard and assistive technology alike.`,...(F=(z=r.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};const te=["Default","DisabledItem","Disabled","WithoutLinks","States","Accessibility"];export{r as Accessibility,a as Default,s as Disabled,n as DisabledItem,i as States,o as WithoutLinks,te as __namedExportsOrder,ee as default};
