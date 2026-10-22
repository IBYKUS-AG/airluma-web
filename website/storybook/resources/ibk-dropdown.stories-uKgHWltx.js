import{g as K,o as d,b as t}from"./iframe-DkRrOnhD.js";import{a as l}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:V,args:q,argTypes:G}=K("ibk-dropdown"),p=[{label:"Rückgängig",icon:"Undo",shortcut:"Strg / Command + Z",disabled:!0},{separator:!0},{label:"Ausschneiden",icon:"Cut",shortcut:"Strg / Command + X",disabled:!0},{label:"Kopieren",icon:"Paste",shortcut:"Strg / Command + C",disabled:!0},{label:"Einfügen",icon:"Dup",shortcut:"Strg / Command + V"},{separator:!0},{label:"Letzten Wert einfügen",icon:"BklgAdd",items:[{label:"Aus diesem Formular",icon:"FTypDoc"},{label:"Aus der Vorlage",icon:"Copy"},{label:"Aus dem Zwischenspeicher",icon:"Paste"}]},{label:"Liste der letzten Werte zeigen",icon:"List",shortcut:"Umsch + F5"},{label:"Letzte Formularwerte einfügen",icon:"RowAddD",shortcut:"Strg / Command + F5"},{label:"Wert rücksetzen",icon:"UndoAll",shortcut:"Alt + F5",disabled:!0}],_=e=>e.currentTarget.querySelector("ibk-dropdown"),Z=(e,n)=>e.composedPath().includes(n),h=e=>{const n=_(e);!n||Z(e,n)||n.toggle()},m=e=>{const n=_(e);!n||Z(e,n)||(e.key==="ArrowDown"?(e.preventDefault(),n.focusFirstItem()):e.key==="ArrowUp"&&(e.preventDefault(),n.focusLastItem()))},c=e=>{const n=e.currentTarget,g=n.querySelector("ibk-dropdown"),b=n.querySelector("button.ibkButton");!g||!b||(b.setAttribute("aria-haspopup","menu"),b.setAttribute("aria-expanded",String(g.open)))},ne={title:"Components/Dropdown",component:"ibk-dropdown",args:{...q,items:p,label:"Bearbeiten",placement:"bottom-start"},argTypes:{...G,items:{control:"object"}},parameters:{actions:{handles:V},docs:{description:{component:"**The menu, not the button.** The trigger is the page's — an `ibk-button`, a step button, a bare icon. Wrap it and the `ibk-dropdown` in one `.ibkDropdownAnchor`: the panel hangs off that container and counts clicks inside it as its own, so opening is just `toggle()`. `focusFirstItem()` / `focusLastItem()` hand the keyboard over on Arrow Down / Up, and `dropdown-open` / `dropdown-close` keep the trigger's `aria-expanded` in step. \n\nEach row is an object in `items`, every optional part expressed by its presence: `icon` for a leading glyph, `shortcut` for a trailing keyboard hint, nested `items` for a submenu (which replaces the hint with a chevron), `separator: true` for a rule. Hover and pressed share one fill, so the parent row of an open submenu stays highlighted. \n\nKeyboard: Up/Down and Home/End walk the rows, skipping separators and disabled ones; Right/Left step into and out of a submenu; Enter/Space choose; Escape, Tab or an outside click close and return focus to the trigger."}}},render:e=>j(e)},u=e=>{e.target.open=!0},j=(e,n=!1)=>t`
  <div style="min-height: 26rem;">
    <div
      class="ibkDropdownAnchor"
      @click=${h}
      @keydown=${m}
      @dropdown-open=${c}
      @dropdown-close=${c}
    >
      <ibk-button
        label="${d(e.label||void 0)}"
        icon="ChevD"
        iconPosition="trailing"
        type="secondary"
      ></ibk-button>
      <ibk-dropdown
        label="${d(e.label||void 0)}"
        placement="${d(e.placement||void 0)}"
        .items="${e.items}"
        ?open="${e.open}"
        @dropdown-select="${e["dropdown-select"]||l}"
        @dropdown-open="${e["dropdown-open"]||l}"
        @dropdown-close="${n?u:e["dropdown-close"]||l}"
      ></ibk-dropdown>
    </div>
  </div>
`,o={args:{items:p,label:"Bearbeiten"}},r={render:e=>j(e,!0),args:{label:"Berichte",open:!0,items:[{label:"Übersicht",icon:"Dash"},{separator:!0},{label:"Nach Zeitraum",icon:"Cal",items:[{label:"Diese Woche"},{label:"Dieser Monat"},{label:"Dieses Jahr"},{separator:!0},{label:"Eigener Zeitraum",icon:"CalEdit"}]},{label:"Nach Region",icon:"Globe",items:[{label:"Deutschland"},{label:"Regionen",items:[{label:"Nord"},{label:"Süd"},{label:"Ost"},{label:"West"}]},{label:"Nicht zugeordnet",disabled:!0}]},{label:"Archiv",icon:"TimeHist",disabled:!0}]}},a={render:()=>t`
    <div style="display:flex; align-items:flex-start; gap:1rem; flex-wrap:wrap; min-height:26rem;">
      ${[{label:"Primary",type:"primary",variant:"regular"},{label:"Secondary",type:"secondary",variant:"regular"},{label:"Decent",type:"secondary",variant:"decent"},{label:"",type:"primary",variant:"regular"}].map(e=>t`
          <div
            class="ibkDropdownAnchor"
            @click=${h}
            @keydown=${m}
            @dropdown-open=${c}
            @dropdown-close=${c}
          >
            <ibk-button
              label=${d(e.label||void 0)}
              icon=${e.label?"ChevD":"BrgrMenu"}
              iconPosition="trailing"
              type=${e.type}
              variant=${e.variant}
            ></ibk-button>
            <ibk-dropdown
              label=${e.label||"Menü"}
              .items=${p}
              @dropdown-select=${l}
            ></ibk-dropdown>
          </div>
        `)}
    </div>
  `},i={render:()=>t`
    <div
      style="display:flex; align-items:flex-start; justify-content:space-between; min-height:26rem; gap:1.5rem;"
    >
      ${["bottom-start","bottom-end"].map(e=>t`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              ${e}
            </p>
            <div class="ibkDropdownAnchor" @click=${h} @keydown=${m}>
              <ibk-button
                label="Bearbeiten"
                icon="ChevD"
                iconPosition="trailing"
                type="secondary"
              ></ibk-button>
              <ibk-dropdown
                label="Bearbeiten"
                placement=${e}
                open
                .items=${p}
                @dropdown-select=${l}
                @dropdown-close=${u}
              ></ibk-dropdown>
            </div>
          </div>
        `)}
    </div>
  `},J=t`
  <style>
    /* A static reference matrix — no cell reacts to the pointer. */
    .sb-states .sb-cell {
      display: inline-flex;
      pointer-events: none;
    }

    /* Lay the panel out in flow: this matrix is about the rows, not the positioning. */
    .sb-states ibk-dropdown {
      position: static;
    }

    /* Once the panel is static, the component's viewport flip has nothing meaningful to
       measure — a cell low on the page can still pick up the flipped class, and with it
       the flipped corners. Pin the corners the design specifies for a panel hanging
       below its trigger, so every cell in the matrix reads the same. */
    .sb-states ibk-dropdown.ibkDropdown-flip-block > .ibkDropdown-menu {
      border-radius: 0 0 var(--ibk-radius-10, 0.625rem) var(--ibk-radius-10, 0.625rem);
    }

    /* Hover and pressed are one fill by design, so one rule covers both rows. The full
       selector chain is repeated on purpose: dropdown.css resets the row background
       through ibk-dropdown .ibkDropdown-menu button.ibkDropdown-item, so anything
       shorter than that loses on specificity no matter where it sits in the cascade. */
    .sb-force-hover ibk-dropdown .ibkDropdown-menu button.ibkDropdown-item:not(:disabled) {
      background: var(--ibk-neutral-grey-94);
    }
    /* Same 2px ring the component draws, inset so it lands inside the edge-to-edge row
       rather than over the panel border — see the focus block in dropdown.css. */
    .sb-force-focus ibk-dropdown .ibkDropdown-menu button.ibkDropdown-item {
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
`,X=[{key:"enabled",cls:""},{key:"disabled",cls:"",disabled:!0},{key:"hover / pressed",cls:"sb-force-hover"},{key:"focus",cls:"sb-force-focus"}],w=[{title:"Trailing Text",trailing:{shortcut:"Strg + V"}},{title:"Trailing Icon",trailing:{items:[{label:"Untermenü"}]}}],s={render:()=>t`
    ${J}
    <table class="sb-states">
      <thead>
        <tr>
          <th></th>
          ${w.map(e=>t`<th>${e.title}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${X.map(e=>t`
            <tr>
              <td class="sb-row-label">${e.key}</td>
              ${w.map(n=>t`
                  <td>
                    <span class="sb-cell ${e.cls}">
                      <ibk-dropdown
                        open
                        @dropdown-close=${u}
                        .items=${[{label:"Text goes here",icon:"TriPtVert",disabled:e.disabled,...n.trailing}]}
                      ></ibk-dropdown>
                    </span>
                  </td>
                `)}
            </tr>
          `)}
      </tbody>
    </table>
  `};var y,f,k,v,$;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: editItems,
    label: 'Bearbeiten'
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"Default — the command menu from the design, closed. Click the button, or focus it and\npress Enter or Arrow Down, to open it; Escape, Tab or a click outside closes it again and\nhands focus back to the button. The controls panel drives this story like any other, so\n`label`, `placement` and `items` can be changed here directly.",...($=(v=o.parameters)==null?void 0:v.docs)==null?void 0:$.description}}};var D,S,A,T,x;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => renderDropdown(args, true),
  args: {
    label: 'Berichte',
    open: true,
    items: [{
      label: 'Übersicht',
      icon: 'Dash'
    }, {
      separator: true
    }, {
      label: 'Nach Zeitraum',
      icon: 'Cal',
      items: [{
        label: 'Diese Woche'
      }, {
        label: 'Dieser Monat'
      }, {
        label: 'Dieses Jahr'
      }, {
        separator: true
      }, {
        label: 'Eigener Zeitraum',
        icon: 'CalEdit'
      }]
    }, {
      label: 'Nach Region',
      icon: 'Globe',
      items: [{
        label: 'Deutschland'
      }, {
        label: 'Regionen',
        items: [{
          label: 'Nord'
        }, {
          label: 'Süd'
        }, {
          label: 'Ost'
        }, {
          label: 'West'
        }]
      }, {
        label: 'Nicht zugeordnet',
        disabled: true
      }]
    }, {
      label: 'Archiv',
      icon: 'TimeHist',
      disabled: true
    }]
  }
}`,...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:`Submenus — nest \`items\` on a row to hang another panel off it. The parent row keeps the
hover fill for as long as its submenu is open, which is what marks the branch you are
currently inside. Submenus nest as deep as the data does; here "Regionen" carries one of
its own.`,...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.description}}};var C,E,P,B,O;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; align-items:flex-start; gap:1rem; flex-wrap:wrap; min-height:26rem;">
      \${([{
    label: 'Primary',
    type: 'primary',
    variant: 'regular'
  }, {
    label: 'Secondary',
    type: 'secondary',
    variant: 'regular'
  }, {
    label: 'Decent',
    type: 'secondary',
    variant: 'decent'
  }, {
    label: '',
    type: 'primary',
    variant: 'regular'
  }] as const).map(trigger => html\`
          <div
            class="ibkDropdownAnchor"
            @click=\${onAnchorClick}
            @keydown=\${onAnchorKeydown}
            @dropdown-open=\${syncTriggerAria}
            @dropdown-close=\${syncTriggerAria}
          >
            <ibk-button
              label=\${ifDefined(trigger.label || undefined)}
              icon=\${trigger.label ? 'ChevD' : 'BrgrMenu'}
              iconPosition="trailing"
              type=\${trigger.type}
              variant=\${trigger.variant}
            ></ibk-button>
            <ibk-dropdown
              label=\${trigger.label || 'Menü'}
              .items=\${editItems}
              @dropdown-select=\${action}
            ></ibk-dropdown>
          </div>
        \`)}
    </div>
  \`
}`,...(P=(E=a.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"Triggers — the dropdown does not care what opens it. All four of these are `ibk-button`\nin different guises, including an icon-only one, and every one of them is driven by the\nsame three delegated handlers at the top of this file. Swapping in a step button or a\nplain `<button>` would need no change to either the component or the wiring.",...(O=(B=a.parameters)==null?void 0:B.docs)==null?void 0:O.description}}};var z,L,N,M,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display:flex; align-items:flex-start; justify-content:space-between; min-height:26rem; gap:1.5rem;"
    >
      \${(['bottom-start', 'bottom-end'] as const).map(placement => html\`
          <div>
            <p style="margin:0 0 0.5rem; color:#555; font-size:0.75rem; font-weight:600;">
              \${placement}
            </p>
            <div class="ibkDropdownAnchor" @click=\${onAnchorClick} @keydown=\${onAnchorKeydown}>
              <ibk-button
                label="Bearbeiten"
                icon="ChevD"
                iconPosition="trailing"
                type="secondary"
              ></ibk-button>
              <ibk-dropdown
                label="Bearbeiten"
                placement=\${placement}
                open
                .items=\${editItems}
                @dropdown-select=\${action}
                @dropdown-close=\${keepOpen}
              ></ibk-dropdown>
            </div>
          </div>
        \`)}
    </div>
  \`
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:"Placement — `bottom-start` lines the panel up with the anchor's leading edge and\n`bottom-end` with its trailing edge. The block axis is not a choice: the panel always\nhangs below and only flips above the anchor when the viewport leaves no room, which is\nwhy its top corners are the square ones.",...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var U,W,F,I,H;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
                    <span class="sb-cell \${state.cls}">
                      <ibk-dropdown
                        open
                        @dropdown-close=\${keepOpen}
                        .items=\${[{
    label: 'Text goes here',
    icon: 'TriPtVert',
    disabled: state.disabled,
    ...column.trailing
  }]}
                      ></ibk-dropdown>
                    </span>
                  </td>
                \`)}
            </tr>
          \`)}
      </tbody>
    </table>
  \`
}`,...(F=(W=s.parameters)==null?void 0:W.docs)==null?void 0:F.source},description:{story:`States reference — the full Figma matrix: every state (enabled / disabled / hover and
pressed / focus) for a row ending in a keyboard hint and for one ending in a submenu
chevron. Hover and focus are normally interactive, so here they are forced visually to
show the whole matrix at once.

Hover and pressed share a row because they share a fill in the design — that is what
lets the parent row of an open submenu stay highlighted while its submenu is up.`,...(H=(I=s.parameters)==null?void 0:I.docs)==null?void 0:H.description}}};const te=["Default","Submenu","Triggers","Placement","States"];export{o as Default,i as Placement,s as States,r as Submenu,a as Triggers,te as __namedExportsOrder,ne as default};
