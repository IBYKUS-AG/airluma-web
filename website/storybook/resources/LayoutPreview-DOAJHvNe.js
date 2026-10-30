import{b as r,E as $,G as u,I as E,A as c,J as T}from"./iframe-DkRrOnhD.js";const C="lp-",L=e=>Array.from(e.classList).filter(t=>!t.startsWith(C));var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,w=(e,t,s,n)=>{for(var o=n>1?void 0:n?O(t,s):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(n?l(t,s,o):l(o))||o);return n&&o&&P(t,s,o),o};const N=new Set(["area","base","br","col","embed","hr","img","input","link","meta","source","track","wbr"]),z=new Set(["layout-code","layout-inspector"]),A=e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.data.trim(),D=e=>{const t=e.split(";").map(s=>s.trim()).filter(s=>s&&!/^outline(-offset)?\s*:/i.test(s));return t.length?`${t.join("; ")};`:""},S=e=>{const t=[];for(const s of Array.from(e.attributes)){let n=s.value;if(s.name==="class"){const o=L(e);if(!o.length)continue;n=o.join(" ")}s.name==="style"&&(n=D(n),!n)||(t.push({kind:"attr",text:` ${s.name}`}),n!==""&&(t.push({kind:"punct",text:'="'}),t.push({kind:"value",text:n}),t.push({kind:"punct",text:'"'})))}return t},y=(e,t,s)=>{if(e.nodeType===Node.TEXT_NODE){const a=e.data.replace(/\s+/g," ").trim();a&&s.push({indent:t,tokens:[{kind:"text",text:a}]});return}if(!(e instanceof Element))return;const n=e.localName;if(z.has(n)){Array.from(e.childNodes).forEach(a=>y(a,t,s));return}const o=[{kind:"punct",text:"<"},{kind:"tag",text:n},...S(e)],i=[{kind:"punct",text:"</"},{kind:"tag",text:n},{kind:"punct",text:">"}];if(N.has(n)){s.push({indent:t,tokens:[...o,{kind:"punct",text:" />"}]});return}const l=n.includes("-")?[]:Array.from(e.childNodes).filter(a=>A(a));if(!l.length){s.push({indent:t,tokens:[...o,{kind:"punct",text:">"},...i]});return}if(l.every(a=>a.nodeType===Node.TEXT_NODE)){const a=l.map(d=>d.data).join("").replace(/\s+/g," ").trim();s.push({indent:t,tokens:[...o,{kind:"punct",text:">"},{kind:"text",text:a},...i]});return}s.push({indent:t,tokens:[...o,{kind:"punct",text:">"}]}),l.forEach(a=>y(a,t+1,s)),s.push({indent:t,tokens:i})},H=e=>e.map(t=>"  ".repeat(t.indent)+t.tokens.map(s=>s.text).join("")).join(`
`);let h=class extends E{constructor(){super(...arguments),this._open=!1,this._redundant=!1,this._onSlotChange=()=>{this._redundant=!!this.querySelector("layout-code")}}_lines(){const e=[];return Array.from(this.childNodes).forEach(t=>y(t,0,e)),e}async _copy(e){try{await navigator.clipboard.writeText(e)}catch{}}_renderPanel(){const e=this._lines(),t=H(e),s=e.some(n=>n.tokens.some(o=>o.kind==="tag"&&o.text.startsWith("ibk-")));return r`
      <div class="panel">
        <div class="panelBar">
          <span class="note">
            ${s?"Layout markup. Component data is passed as properties and is not part of the HTML.":"Layout markup, preview-only classes removed."}
          </span>
          <button @click=${()=>this._copy(t)}>Copy</button>
        </div>
        <div class="code">
          ${e.map(n=>r`
              <div class="line" style="--indent: ${n.indent};">
                ${n.tokens.map(o=>r`<span class="${o.kind}">${o.text}</span>`)}
              </div>
            `)}
        </div>
      </div>
    `}render(){return r`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._redundant?c:r`
            <div class="bar">
              <button
                aria-expanded=${this._open?"true":"false"}
                @click=${()=>{this._open=!this._open}}
              >
                ${this._open?"Hide code":"Show code"}
              </button>
            </div>
            ${this._open?this._renderPanel():c}
          `}
    `}};h.styles=$`
    :host {
      display: block;
    }

    .bar {
      display: flex;
      justify-content: flex-end;
      margin-block-start: 0.25rem;
    }

    button {
      background-color: #fff;
      border: 1px solid #bdbdbd;
      border-radius: 0.375rem;
      color: #2e2e2e;
      cursor: pointer;
      font-family: 'Asap', sans-serif;
      font-size: 0.75rem;
      padding: 0.125rem 0.5rem;
    }

    button:hover {
      border-color: #6b6b6b;
    }

    button:focus-visible {
      outline: 2px solid #425563;
      outline-offset: 2px;
    }

    /* Dark panel, in the shape of Storybook's own source block. */
    .panel {
      background-color: #1b1b1d;
      border-radius: 0.375rem;
      margin-block-start: 0.25rem;
      overflow: hidden;
    }

    .panelBar {
      align-items: center;
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
      padding: 0.375rem 0.625rem;
    }

    .panelBar button {
      background-color: transparent;
      border-color: #444;
      color: #e6edf3;
    }

    .panelBar button:hover {
      border-color: #8b949e;
    }

    .note {
      color: #8b949e;
      font-family: 'Asap', sans-serif;
      font-size: 0.6875rem;
    }

    .code {
      font-family: ui-monospace, 'SFMono-Regular', 'Consolas', monospace;
      font-size: 0.75rem;
      line-height: 1.6;
      max-block-size: 26rem;
      overflow: auto;
      padding: 0 0.625rem 0.625rem;
    }

    /* Indentation is padding, not literal spaces. Emitting repeated spaces into the
       template would need white-space: pre to survive, and that would preserve the
       newlines and indentation of the template literal itself - every line would come
       out carrying the source file's own leading whitespace. Padding on the block also
       keeps a wrapped long line aligned under its opening tag. */
    .line {
      padding-inline-start: calc(var(--indent, 0) * 2ch);
    }

    .punct {
      color: #8b949e;
    }

    .tag {
      color: #79c0ff;
    }

    .attr {
      color: #7ee787;
    }

    .value {
      color: #a5d6ff;
    }

    .text {
      color: #e6edf3;
    }
  `;w([u()],h.prototype,"_open",2);w([u()],h.prototype,"_redundant",2);h=w([T("layout-code")],h);const F=e=>r`<layout-code>${e}</layout-code>`,V=e=>r`<layout-code>${e()}</layout-code>`;var j=Object.defineProperty,M=Object.getOwnPropertyDescriptor,g=(e,t,s,n)=>{for(var o=n>1?void 0:n?M(t,s):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(n?l(t,s,o):l(o))||o);return n&&o&&j(t,s,o),o};let m=!1;const v="layout-inspector-toggle",I=e=>Array.from(e.childNodes).filter(t=>t.nodeType===Node.TEXT_NODE).map(t=>t.data).join("").replace(/\s+/g," ").trim(),k=e=>{const t=Array.from(e.classList),s=L(e);return{classes:s,hidden:t.length-s.length,label:e.tagName.toLowerCase()+s.map(n=>`.${n}`).join("")}},R=7,G=24,X=2;let p=class extends E{constructor(){super(...arguments),this._active=m,this._selected=null,this._showHtml=!1,this._hovered=null,this._saved=new WeakMap,this._onSharedToggle=()=>{this._active=m,this._active||this._setHovered(null)},this._onClick=e=>{if(!this._active)return;const t=this._stageTarget(e);t&&(e.preventDefault(),e.stopPropagation(),this._select(t))},this._onMouseDown=e=>{if(!this._active)return;const t=this._stageTarget(e);t!=null&&t.closest('button, input, select, textarea, a, [role="button"]')&&(e.preventDefault(),e.stopPropagation())},this._onPointerOver=e=>{if(!this._active)return;const t=this._stageTarget(e);!t||t===this._hovered||this._setHovered(t)},this._onPointerOut=e=>{!this._active||!this._hovered||this._stageTarget(e)===this._hovered&&this._setHovered(null)},this._onKeyDown=e=>{e.key==="Escape"&&this._active&&this._setActive(!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onClick,!0),this.addEventListener("mousedown",this._onMouseDown,!0),this.addEventListener("pointerover",this._onPointerOver,!0),this.addEventListener("pointerout",this._onPointerOut,!0),document.addEventListener("keydown",this._onKeyDown),window.addEventListener(v,this._onSharedToggle),this._active=m}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeEventListener("click",this._onClick,!0),this.removeEventListener("mousedown",this._onMouseDown,!0),this.removeEventListener("pointerover",this._onPointerOver,!0),this.removeEventListener("pointerout",this._onPointerOut,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener(v,this._onSharedToggle),(e=this._resizeObserver)==null||e.disconnect(),this._hovered!==this._selected&&this._highlight(this._hovered,null),this._highlight(this._selected,null)}_setActive(e){m=e,window.dispatchEvent(new Event(v))}_stageTarget(e){const t=e.composedPath()[0];if(!(t instanceof Element))return null;const s=t.getRootNode();return s instanceof ShadowRoot&&(s===this.shadowRoot||s.host.localName==="layout-code")||t===this?null:t}_setHovered(e){this._hovered!==this._selected&&this._highlight(this._hovered,null),this._hovered=e,e&&e!==this._selected&&this._highlight(e,"1px dashed #425563")}_select(e){this._selected!==e&&this._highlight(this._selected,null),this._selected=e,this._highlight(e,"2px solid #425563"),this._observe(e)}_clear(){this._selected!==this._hovered&&this._highlight(this._selected,null),this._selected=null,this._showHtml=!1,this._observe(null)}_observe(e){var t;(t=this._resizeObserver)==null||t.disconnect(),e&&(this._resizeObserver=new ResizeObserver(()=>this.requestUpdate()),this._resizeObserver.observe(e))}_layout(e){const t=getComputedStyle(e),s=(b,x)=>t.getPropertyValue(b)||(x?t.getPropertyValue(x):""),n=e.getBoundingClientRect(),o=b=>Math.round(b*10)/10,i=[["size",`${o(n.width)} × ${o(n.height)} px`],["display",t.display]],l=t.display.includes("flex"),a=t.display.includes("grid");l&&i.push(["flex-direction",t.flexDirection],["flex-wrap",t.flexWrap]),a&&i.push(["grid-template-columns",t.gridTemplateColumns]),(l||a)&&i.push(["gap",t.gap],["align-items",t.alignItems],["justify-content",t.justifyContent]);const d=e.parentElement;d&&getComputedStyle(d).display.includes("flex")&&i.push(["flex",`${t.flexGrow} ${t.flexShrink} ${t.flexBasis}`]);const _=s("max-inline-size","max-width");_&&_!=="none"&&i.push(["max-inline-size",_]);const f=s("min-inline-size","min-width");return f&&f!=="0px"&&f!=="auto"&&i.push(["min-inline-size",f]),i}_highlight(e,t){if(!(e instanceof HTMLElement))return;if(t){this._saved.has(e)||this._saved.set(e,{outline:e.style.outline,offset:e.style.outlineOffset}),e.style.outline=t,e.style.outlineOffset="-2px";return}const s=this._saved.get(e);e.style.outline=(s==null?void 0:s.outline)??"",e.style.outlineOffset=(s==null?void 0:s.offset)??"",this._saved.delete(e)}_parents(e){const t=[];let s=e.parentElement;for(;s&&s!==this;)s.localName!=="layout-code"&&t.unshift(s),s=s.parentElement;return t}async _copy(e){try{await navigator.clipboard.writeText(e)}catch{}}_chip(e){const{label:t}=k(e);return r`
      <button
        class="chip"
        title=${t}
        @click=${s=>{s.preventDefault(),s.stopPropagation(),this._select(e)}}
      >
        ${t}
      </button>
    `}_renderTree(e,t){const s=Array.from(e.children),n=I(e),o=n.length>48?`${n.slice(0,48)}…`:n;if(!s.length||t>=R)return r`
        <div class="leaf cell">
          ${this._chip(e)}
          ${s.length?r`<span class="more">+${s.length} nested</span>`:o?r`<span class="txt">${o}</span>`:c}
        </div>
      `;const i=s.slice(0,G);return r`
      <details ?open=${t<X}>
        <summary>
          <span class="cell">
            ${this._chip(e)}
            <span class="txt">
              ${s.length} ${s.length===1?"child":"children"}
            </span>
          </span>
        </summary>
        ${i.map(l=>this._renderTree(l,t+1))}
        ${s.length>i.length?r`<div class="more">+${s.length-i.length} more</div>`:c}
      </details>
    `}_renderPanel(e){const{classes:t,hidden:s,label:n}=k(e),o=this._parents(e),i=Array.from(e.children),l=t.join(" ");return r`
      <div class="panel">
        <div class="row">
          <span class="rowLabel">Element</span>
          <code class="element">${n}</code>
        </div>

        <div class="row">
          <span class="rowLabel">Class</span>
          <span class="cell">
            ${t.length?r`
                  <code class="classes">${l}</code>
                  <button @click=${()=>this._copy(l)}>Copy</button>
                `:s?r`
                    <span class="muted">
                      no IDES class here — this element only carries preview styling. The
                      arrangement is on a parent.
                    </span>
                  `:r`<span class="muted">no class on this element</span>`}
          </span>
        </div>

        <div class="row">
          <span class="rowLabel">Layout</span>
          <span class="facts">
            ${this._layout(e).map(([a,d])=>r`
                <code class="fact"><span class="factName">${a}</span> ${d}</code>
              `)}
          </span>
        </div>

        ${o.length?r`
              <div class="row">
                <span class="rowLabel">Parents</span>
                <span class="cell">
                  ${o.map((a,d)=>r`
                      ${this._chip(a)}
                      ${d<o.length-1?r`<span class="sep">›</span>`:c}
                    `)}
                </span>
              </div>
            `:c}
        ${i.length?r`
              <div class="row">
                <span class="rowLabel">Children</span>
                <span class="cell">${i.map(a=>this._chip(a))}</span>
              </div>
            `:c}
        ${this._showHtml?r`
              <div class="row">
                <span class="rowLabel">HTML</span>
                <div class="tree">${this._renderTree(e,0)}</div>
              </div>
            `:c}
      </div>
    `}render(){const e=this._selected;return r`
      <div class="bar">
        <button
          class="toggle ${this._active?"on":""}"
          aria-pressed=${this._active?"true":"false"}
          @click=${()=>this._setActive(!this._active)}
        >
          <span class="dot"></span> Inspect ${this._active?"on":"off"}
        </button>

        ${e?r`
              <button
                aria-expanded=${this._showHtml?"true":"false"}
                @click=${()=>{this._showHtml=!this._showHtml}}
              >
                ${this._showHtml?"Hide":"Show"} HTML
              </button>
              <button @click=${()=>this._clear()}>Clear</button>
            `:c}

        <span class="hint">
          ${this._active?"Click any element for its classes · click a parent chip to step up · Esc to leave":"Turn on to read classes by clicking. The page stays interactive while off."}
        </span>
      </div>

      <slot></slot>
      ${e?this._renderPanel(e):c}
    `}};p.styles=$`
    :host {
      display: block;
    }

    .bar {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      font-family: 'Asap', sans-serif;
      font-size: 0.8125rem;
      gap: 0.5rem;
      margin-block-end: 0.75rem;
    }

    button {
      background-color: #fff;
      border: 1px solid #bdbdbd;
      border-radius: 0.375rem;
      color: #2e2e2e;
      cursor: pointer;
      font: inherit;
      padding: 0.25rem 0.625rem;
    }

    button:hover {
      border-color: #6b6b6b;
    }

    button:focus-visible {
      outline: 2px solid #425563;
      outline-offset: 2px;
    }

    .toggle {
      align-items: center;
      display: inline-flex;
      font-weight: 600;
      gap: 0.375rem;
    }

    .toggle.on {
      background-color: #425563;
      border-color: #425563;
      color: #fff;
    }

    .dot {
      background-color: #bdbdbd;
      block-size: 0.5rem;
      border-radius: 50%;
      inline-size: 0.5rem;
    }

    .toggle.on .dot {
      background-color: #8ce99a;
    }

    .hint {
      color: #6b6b6b;
    }

    /* Sticky, so the readout stays in view while scrolling a long story. */
    .panel {
      background-color: #fff;
      border: 1px solid #bdbdbd;
      border-radius: 0.375rem;
      bottom: 0;
      display: grid;
      font-family: 'Asap', sans-serif;
      font-size: 0.8125rem;
      gap: 0.5rem;
      margin-block-start: 0.75rem;
      padding: 0.75rem;
      position: sticky;
      z-index: 5;
    }

    .row {
      align-items: baseline;
      display: grid;
      gap: 0.25rem 0.75rem;
      grid-template-columns: 4.5rem minmax(0, 1fr);
    }

    .rowLabel {
      color: #6b6b6b;
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    code {
      font-family: ui-monospace, 'SFMono-Regular', 'Consolas', monospace;
      overflow-wrap: anywhere;
    }

    .element {
      color: #425563;
      font-weight: 600;
    }

    .classes {
      background-color: #f0f0f0;
      border-radius: 0.25rem;
      padding: 0.125rem 0.375rem;
    }

    .muted {
      color: #6b6b6b;
      font-style: italic;
    }

    .cell {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
    }

    .chip {
      font-family: ui-monospace, 'SFMono-Regular', 'Consolas', monospace;
      font-size: 0.75rem;
      max-inline-size: 22rem;
      overflow: hidden;
      padding: 0.0625rem 0.375rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .sep {
      color: #bdbdbd;
    }

    .facts {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
    }

    .fact {
      background-color: #f0f0f0;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      max-inline-size: 26rem;
      overflow: hidden;
      padding: 0.125rem 0.375rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .factName {
      color: #6b6b6b;
    }

    .factName::after {
      content: ':';
    }

    .tree {
      font-size: 0.75rem;
      max-block-size: 22rem;
      overflow: auto;
    }

    /* One indent step per level. The nesting itself accumulates the offset, so the
       step stays constant instead of being computed from the depth. */
    details > *:not(summary),
    .leaf {
      padding-inline-start: 0.875rem;
    }

    /* summary keeps its default display: list-item - a summary set to flex or grid
       loses the disclosure triangle - so the flex row goes on a span inside it. */
    summary {
      cursor: pointer;
    }

    .txt {
      color: #6b6b6b;
    }

    .more {
      color: #6b6b6b;
      font-style: italic;
      padding-inline-start: 0.875rem;
    }
  `;g([u()],p.prototype,"_active",2);g([u()],p.prototype,"_selected",2);g([u()],p.prototype,"_showHtml",2);p=g([T("layout-inspector")],p);const W=e=>r`<layout-inspector>${e()}</layout-inspector>`;export{V as a,F as b,W as w};
