import{b as i}from"./iframe-DkRrOnhD.js";import{w as vi,a as gi,b as hi}from"./LayoutPreview-DOAJHvNe.js";import"./preload-helper-C1FmrZbK.js";const e=(s,h)=>i`
  <p class="lp-caption">${s}</p>
  <div>${hi(h)}</div>
`,a=(s=3,h="Item")=>Array.from({length:s},(mi,bi)=>i`<div class="lp-box">${h} ${bi+1}</div>`),g=s=>i`
  <div class="lp-box">${s}<br />second line<br />third line</div>
`,xi={title:"Design System/Layout",decorators:[vi,gi],parameters:{docs:{canvas:{sourceState:"none"},codePanel:!1,description:{component:`
Four arrangements cover almost every screen, so the design system names four
primitives and gives each one a default gap:

| Primitive | Class | Arrangement | Default gap | Wraps |
| --- | --- | --- | --- | --- |
| Stack | \`.ibk-stack\` | below each other | \`--ibk-spacing-16\` | – |
| Cluster | \`.ibk-cluster\` | next to each other | \`--ibk-spacing-16\` | yes, when space runs out |
| Auto-Grid | \`.ibk-auto-grid\` | equal-width tiles | \`--ibk-spacing-24\` | yes, column by column |
| Sidebar | \`.ibk-sidebar\` | main + secondary column | \`--ibk-spacing-24\` | yes, aside moves below |

A primitive answers **in which direction** the elements sit. The spacing token
answers **how strongly they belong together**. The two questions are independent,
which is why the gap is always a separate class.

There is no twelve-column grid on purpose. A column count assumes the element
knows how wide the screen is - it does not. The same card can sit in a 20rem aside
or in the wide main area. The primitives react to the space they actually get, so
they need no breakpoint and pass WCAG 1.4.10 "Reflow" at 320px on their own.

### Reading an example

Every story carries an **Inspect** toggle. Turn it on once - it applies to all
stories on the page - and then:

- **click any element** to see the IDES classes it carries, e.g. \`ibk-stack gap-spacing-8\`
- **Layout** shows what those classes actually resolved to — the measured size plus
  \`display\`, \`gap\`, \`align-items\`, the grid's real column list, and how the element
  behaves as a flex child. It updates live while a frame is dragged, so it is also the
  answer to "why is this tile taller than that one?": compare their sizes.
- **click a chip under "Parents"** to step up to the container and read its classes
- **Show HTML** unfolds the selected element's markup as a collapsible tree
- **Copy** puts the class list on the clipboard, **Esc** leaves inspect mode

Only framework classes are listed. The Storybook-only preview styles that draw the
dashed frames and the coloured dummy boxes are filtered out, so everything the
inspector shows you is a class that works in a real page. An element that reports
no class is pure presentation - the arrangement is on one of its parents.

While inspect is off the page behaves normally, so the resizable frames can still
be dragged.
        `}}}},t={name:"01 · Cheat sheet",render:()=>i`
    <div class="ibk-stack gap-spacing-24">
      <div class="ibk-auto-grid ibk-auto-grid-narrow">
        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Stack</p>
          <p class="lp-caption">.ibk-stack</p>
          <div class="ibk-stack gap-spacing-8">${a(3)}</div>
          <p class="lp-note">Below each other. Forms, text sections, card content.</p>
        </div>

        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Cluster</p>
          <p class="lp-caption">.ibk-cluster</p>
          <div class="ibk-cluster gap-spacing-8">${a(3)}</div>
          <p class="lp-note">Next to each other, wraps. Button bars, chips, filters.</p>
        </div>

        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Auto-Grid</p>
          <p class="lp-caption">.ibk-auto-grid</p>
          <div class="ibk-auto-grid ibk-auto-grid-narrow gap-spacing-8">${a(4,"Tile")}</div>
          <p class="lp-note">Equal-width tiles, free height. Card overviews.</p>
        </div>

        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Sidebar</p>
          <p class="lp-caption">.ibk-sidebar</p>
          <div class="ibk-sidebar gap-spacing-8" style="--ibk-sidebar-main-min: 6rem;">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div
              class="ibk-sidebar-aside lp-box lp-box-alt"
              style="--ibk-sidebar-aside-size: 4rem;"
            >
              Aside
            </div>
          </div>
          <p class="lp-note">Two unequal areas. Page layout, detail plus filter panel.</p>
        </div>
      </div>
    </div>
  `},n={name:"02 · Gap scale",render:()=>i`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        ${e(".gap-spacing-0",i`<div class="ibk-cluster gap-spacing-0">${a(3)}</div>`)}
        ${e(".gap-spacing-4 — parts of one label",i`<div class="ibk-cluster gap-spacing-4">${a(3)}</div>`)}
        ${e(".gap-spacing-6 — a field and its label",i`<div class="ibk-cluster gap-spacing-6">${a(3)}</div>`)}
        ${e(".gap-spacing-8 — parts of one control",i`<div class="ibk-cluster gap-spacing-8">${a(3)}</div>`)}
        ${e(".gap-spacing-16 — independent blocks (default)",i`<div class="ibk-cluster gap-spacing-16">${a(3)}</div>`)}
        ${e(".gap-spacing-24 — sections of a page",i`<div class="ibk-cluster gap-spacing-24">${a(3)}</div>`)}
        ${e(".gap-spacing-32",i`<div class="ibk-cluster gap-spacing-32">${a(3)}</div>`)}
        ${e(".gap-spacing-48",i`<div class="ibk-cluster gap-spacing-48">${a(3)}</div>`)}
      </div>
    </div>
  `},l={name:"03 · Stack",render:()=>i`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        ${e("default — spacing-16",i`<div class="ibk-stack lp-frame">${a(3)}</div>`)}
        ${e(".gap-spacing-8 — siblings of one group",i`<div class="ibk-stack gap-spacing-8 lp-frame">${a(3)}</div>`)}
        ${e("nested — outer 24, inner 8",i`
            <div class="ibk-stack gap-spacing-24 lp-frame">
              <div class="ibk-stack gap-spacing-8">
                <div class="lp-box">Group A · 1</div>
                <div class="lp-box">Group A · 2</div>
              </div>
              <div class="ibk-stack gap-spacing-8">
                <div class="lp-box lp-box-alt">Group B · 1</div>
                <div class="lp-box lp-box-alt">Group B · 2</div>
              </div>
            </div>
          `)}
        ${e(".ibk-stack-push — footer to the bottom",i`
            <div class="ibk-stack gap-spacing-8 lp-frame" style="block-size: 14rem;">
              <div class="lp-box">Header</div>
              <div class="lp-box lp-box-ghost">Content</div>
              <div class="ibk-stack-push lp-box lp-box-alt">Footer</div>
            </div>
          `)}
      </div>
    </div>
  `},o={name:"04 · Cluster",render:()=>i`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        ${e("default — spacing-16, centred",i`<div class="ibk-cluster lp-frame">${a(4)}</div>`)}
        ${e(".ibk-cluster-end",i`<div class="ibk-cluster ibk-cluster-end lp-frame">${a(3)}</div>`)}
        ${e(".ibk-cluster-center",i`<div class="ibk-cluster ibk-cluster-center lp-frame">${a(3)}</div>`)}
        ${e(".ibk-cluster-between",i`
            <div class="ibk-cluster ibk-cluster-between lp-frame">
              <div class="lp-box">Left</div>
              <div class="lp-box lp-box-alt">Right</div>
            </div>
          `)}
        ${e(".ibk-cluster-push — from here to the end",i`
            <div class="ibk-cluster lp-frame">
              <div class="lp-box">Title</div>
              <div class="ibk-cluster-push lp-box lp-box-alt">Cancel</div>
              <div class="lp-box lp-box-alt">Save</div>
            </div>
          `)}
        ${e(".ibk-cluster-grow — one child takes the rest",i`
            <div class="ibk-cluster gap-spacing-8 lp-frame">
              <div class="ibk-cluster-grow lp-box">Search field (grows)</div>
              <div class="lp-box lp-box-alt">Filter</div>
              <div class="lp-box lp-box-alt">Sort</div>
            </div>
          `)}
        ${e("align-items — start vs. centre vs. stretch",i`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                The left box is taller only because it holds three lines of text. Watch what the
                short box beside it does: it sits at the top, in the middle, or grows to match.
              </p>
              <div class="ibk-cluster ibk-cluster-align-start gap-spacing-8 lp-frame">
                ${g("three lines")}
                <div class="lp-box lp-box-alt">start — sits at the top</div>
              </div>
              <div class="ibk-cluster gap-spacing-8 lp-frame">
                ${g("three lines")}
                <div class="lp-box lp-box-alt">centre — the default</div>
              </div>
              <div class="ibk-cluster ibk-cluster-align-stretch gap-spacing-8 lp-frame">
                ${g("three lines")}
                <div class="lp-box lp-box-alt">stretch — grows to match</div>
              </div>
            </div>
          `)}
      </div>
    </div>
  `},r={name:"05 · Auto-Grid",render:()=>i`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        ${e(".ibk-auto-grid-narrow — min 12rem",i`
            <div class="ibk-auto-grid ibk-auto-grid-narrow lp-frame">${a(6,"Tile")}</div>
          `)}
        ${e("default — min 20rem",i`<div class="ibk-auto-grid lp-frame">${a(4,"Tile")}</div>`)}
        ${e(".ibk-auto-grid-wide — min 28rem",i`<div class="ibk-auto-grid ibk-auto-grid-wide lp-frame">${a(4,"Tile")}</div>`)}
        ${e("custom — --ibk-auto-grid-min: 16rem",i`
            <div class="ibk-auto-grid lp-frame" style="--ibk-auto-grid-min: 16rem;">
              ${a(5,"Tile")}
            </div>
          `)}
        ${e("auto-fit (default) — last row stretches",i`
            <div class="ibk-auto-grid ibk-auto-grid-narrow lp-frame">${a(5,"Tile")}</div>
          `)}
        ${e(".ibk-auto-grid-fill — last row keeps its size",i`
            <div class="ibk-auto-grid ibk-auto-grid-narrow ibk-auto-grid-fill lp-frame">
              ${a(5,"Tile")}
            </div>
          `)}
        ${e("differing heights — equal by default",i`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                The middle tile is taller because it holds three lines of text — nothing sets a
                height. By default every tile in a row then matches the tallest one, which is what a
                row of cards wants: their bottom edges line up.
              </p>
              <div class="ibk-auto-grid ibk-auto-grid-narrow lp-frame">
                <div class="lp-box">one line</div>
                ${g("three lines")}
                <div class="lp-box">one line</div>
              </div>
            </div>
          `)}
        ${e(".ibk-auto-grid-align-start — natural heights",i`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                Same markup, same three lines in the middle. The only difference is
                <code>.ibk-auto-grid-align-start</code>, which turns the stretch off — so the two
                short tiles keep the height their own content needs and no longer reach the bottom.
              </p>
              <div class="ibk-auto-grid ibk-auto-grid-narrow ibk-auto-grid-align-start lp-frame">
                <div class="lp-box">one line</div>
                ${g("three lines")}
                <div class="lp-box">one line</div>
              </div>
            </div>
          `)}
      </div>
    </div>
  `},d={name:"06 · Sidebar",render:()=>i`
    <div class="ibk-stack gap-spacing-24">
      <p class="lp-note">
        Drag the bottom-right corner of each frame to see the wrap happen. The aside drops below the
        main area at the width where both minimums stop fitting — nothing else changes.
      </p>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">default — main min 30rem, aside 20rem</p>
        <div class="lp-viewport lp-viewport-768">
          <div class="ibk-sidebar">
            <div class="ibk-sidebar-main lp-box">Main — takes the rest</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside — ~20rem</div>
          </div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">narrow aside — --ibk-sidebar-aside-size: 14rem</p>
        <div class="lp-viewport lp-viewport-768">
          <div class="ibk-sidebar" style="--ibk-sidebar-aside-size: 14rem;">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside — 14rem</div>
          </div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">.ibk-sidebar-aside-first — aside on the left</p>
        <div class="lp-viewport lp-viewport-768">
          <div class="ibk-sidebar ibk-sidebar-aside-first">
            <div class="ibk-sidebar-main lp-box">Main — first in the DOM</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside — shown first</div>
          </div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">already wrapped — 320px, no breakpoint involved</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-sidebar">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside</div>
          </div>
        </div>
      </div>
    </div>
  `},c={name:"07 · Container",render:()=>i`
    <div class="ibk-stack gap-spacing-24">
      ${[{cls:"ibk-container-sm",label:".ibk-container-sm — 40rem"},{cls:"ibk-container-md",label:".ibk-container-md — 60rem"},{cls:"ibk-container-lg",label:".ibk-container-lg — 80rem (default)"},{cls:"ibk-container-xl",label:".ibk-container-xl — 100rem"},{cls:"ibk-container-full",label:".ibk-container-full — no cap"},{cls:"ibk-container-prose",label:".ibk-container-prose — 70ch"}].map(s=>i`
          <div class="ibk-stack gap-spacing-4">
            <p class="lp-caption">${s.label}</p>
            <div class="ibk-container ${s.cls}">
              <div class="lp-ruler"></div>
            </div>
          </div>
        `)}

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">
          in use — .ibk-container-md holding a .ibk-stack, gutter visible on both edges
        </p>
        <div class="lp-frame" style="padding: 0;">
          <div class="ibk-container ibk-container-md">
            <div class="ibk-stack gap-spacing-8" style="padding-block: 1rem;">${a(3)}</div>
          </div>
        </div>
      </div>
    </div>
  `},p={name:"08 · Nesting",render:()=>i`
    <div class="ibk-container ibk-container-md ibk-container-flush">
      <div class="ibk-stack gap-spacing-32 lp-frame">
        <div class="ibk-cluster ibk-cluster-between gap-spacing-16">
          <div class="lp-box lp-box-ghost">Cluster · page header</div>
          <div class="lp-box">Action</div>
        </div>

        <div class="ibk-sidebar gap-spacing-24" style="--ibk-sidebar-main-min: 20rem;">
          <div class="ibk-sidebar-main ibk-stack gap-spacing-16">
            <div class="lp-box lp-box-ghost">Sidebar · main</div>
            <div class="ibk-auto-grid ibk-auto-grid-narrow gap-spacing-16">${a(3,"Tile")}</div>
            <div class="ibk-stack gap-spacing-8">
              <div class="lp-box">Stack · field 1</div>
              <div class="lp-box">Stack · field 2</div>
            </div>
          </div>
          <div class="ibk-sidebar-aside ibk-stack gap-spacing-8">
            <div class="lp-box lp-box-ghost">Sidebar · aside</div>
            <div class="lp-box lp-box-alt">Filter</div>
            <div class="lp-box lp-box-alt">Filter</div>
          </div>
        </div>

        <div class="ibk-cluster ibk-cluster-end gap-spacing-16">
          <div class="lp-box lp-box-alt">Cancel</div>
          <div class="lp-box">Save</div>
        </div>
      </div>
    </div>
  `},b={name:"09 · Reflow at 320px",render:()=>i`
    <div class="ibk-auto-grid" style="--ibk-auto-grid-min: 22rem;">
      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Stack — already one column</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-stack gap-spacing-8">${a(3)}</div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Cluster — wrapped, no horizontal scrollbar</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-cluster gap-spacing-8">${a(5)}</div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Auto-Grid — one column, min() beats the 20rem minimum</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-auto-grid gap-spacing-8">${a(3,"Tile")}</div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Sidebar — aside below the main area</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-sidebar gap-spacing-8">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside</div>
          </div>
        </div>
      </div>
    </div>
  `},v={name:"10 · What not to do",render:()=>i`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        ${e("A fixed max-width on the component",i`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                <strong>No:</strong> <code>style="max-width: 458px"</code> on an accordion. The
                component cannot know how much room it was given, and a px value never grows with
                the font size.
              </p>
              <p class="lp-note">
                <strong>Yes:</strong> leave the component fluid and cap the <em>container</em> —
                <code>.ibk-container-sm</code>, or a <code>.ibk-sidebar-aside</code>.
              </p>
            </div>
          `)}
        ${e("A Cluster that cannot wrap",i`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                <strong>No:</strong> <code>flex-wrap: nowrap</code> on a toolbar. It forces
                horizontal scrolling and breaks WCAG 1.4.10.
              </p>
              <p class="lp-note">
                <strong>Yes:</strong> keep the wrap. If the row genuinely must not break, the
                component is wrong for that width — swap it, the way the segmented control falls
                back to a select.
              </p>
            </div>
          `)}
        ${e("A viewport media query inside a component",i`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                <strong>No:</strong> <code>@media (max-width: 480px)</code> in a component
                stylesheet. The same bar can sit under a wide table or in a 20rem aside, and the
                viewport says nothing about which.
              </p>
              <p class="lp-note">
                <strong>Yes:</strong> <code>.ibk-query-container</code> on a block-level ancestor
                plus <code>@container (inline-size &lt; 30rem)</code> in the component — see
                <code>pagination.css</code>.
              </p>
              <p class="lp-note">
                <strong>The trap:</strong> never put <code>.ibk-query-container</code> on a box that
                is sized by its own content — a float, an inline-block, or a flex item with the
                default <code>flex-basis: auto</code>. Containment makes such a box compute its
                width as if it were empty, so it collapses to zero and its content spills over its
                neighbours. That is also why the class cannot sit on the component itself.
              </p>
            </div>
          `)}
        ${e("Spacing chosen by available room",i`
            <div class="ibk-stack gap-spacing-8">
              <div class="ibk-stack gap-spacing-16 lp-frame">
                <p class="lp-caption">No — inner gap equals outer gap, the group dissolves</p>
                <div class="ibk-stack gap-spacing-16">
                  <div class="lp-box">Field</div>
                  <div class="lp-box">Field</div>
                </div>
                <div class="lp-box lp-box-alt">Next section</div>
              </div>
              <div class="ibk-stack gap-spacing-24 lp-frame">
                <p class="lp-caption">Yes — inside 8, outside 24</p>
                <div class="ibk-stack gap-spacing-8">
                  <div class="lp-box">Field</div>
                  <div class="lp-box">Field</div>
                </div>
                <div class="lp-box lp-box-alt">Next section</div>
              </div>
            </div>
          `)}
      </div>
    </div>
  `};var m,k,u,w,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '01 · Cheat sheet',
  render: () => html\`
    <div class="ibk-stack gap-spacing-24">
      <div class="ibk-auto-grid ibk-auto-grid-narrow">
        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Stack</p>
          <p class="lp-caption">.ibk-stack</p>
          <div class="ibk-stack gap-spacing-8">\${boxes(3)}</div>
          <p class="lp-note">Below each other. Forms, text sections, card content.</p>
        </div>

        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Cluster</p>
          <p class="lp-caption">.ibk-cluster</p>
          <div class="ibk-cluster gap-spacing-8">\${boxes(3)}</div>
          <p class="lp-note">Next to each other, wraps. Button bars, chips, filters.</p>
        </div>

        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Auto-Grid</p>
          <p class="lp-caption">.ibk-auto-grid</p>
          <div class="ibk-auto-grid ibk-auto-grid-narrow gap-spacing-8">\${boxes(4, 'Tile')}</div>
          <p class="lp-note">Equal-width tiles, free height. Card overviews.</p>
        </div>

        <div class="ibk-stack gap-spacing-8 lp-frame">
          <p class="lp-title">Sidebar</p>
          <p class="lp-caption">.ibk-sidebar</p>
          <div class="ibk-sidebar gap-spacing-8" style="--ibk-sidebar-main-min: 6rem;">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div
              class="ibk-sidebar-aside lp-box lp-box-alt"
              style="--ibk-sidebar-aside-size: 4rem;"
            >
              Aside
            </div>
          </div>
          <p class="lp-note">Two unequal areas. Page layout, detail plus filter panel.</p>
        </div>
      </div>
    </div>
  \`
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source},description:{story:`Start here. Four questions, four answers - if none of them fits, the problem is
usually the choice of component, not the choice of primitive.`,...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var f,y,$,S,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  name: \'02 · Gap scale\',\n  render: () => html`\n    <div class="ibk-query-container">\n      <div class="lp-matrix lp-matrix-labelled">\n        ${row(\'.gap-spacing-0\', html`<div class="ibk-cluster gap-spacing-0">${boxes(3)}</div>`)}\n        ${row(\'.gap-spacing-4 — parts of one label\', html`<div class="ibk-cluster gap-spacing-4">${boxes(3)}</div>`)}\n        ${row(\'.gap-spacing-6 — a field and its label\', html`<div class="ibk-cluster gap-spacing-6">${boxes(3)}</div>`)}\n        ${row(\'.gap-spacing-8 — parts of one control\', html`<div class="ibk-cluster gap-spacing-8">${boxes(3)}</div>`)}\n        ${row(\'.gap-spacing-16 — independent blocks (default)\', html`<div class="ibk-cluster gap-spacing-16">${boxes(3)}</div>`)}\n        ${row(\'.gap-spacing-24 — sections of a page\', html`<div class="ibk-cluster gap-spacing-24">${boxes(3)}</div>`)}\n        ${row(\'.gap-spacing-32\', html`<div class="ibk-cluster gap-spacing-32">${boxes(3)}</div>`)}\n        ${row(\'.gap-spacing-48\', html`<div class="ibk-cluster gap-spacing-48">${boxes(3)}</div>`)}\n      </div>\n    </div>\n  `\n}',...($=(y=n.parameters)==null?void 0:y.docs)==null?void 0:$.source},description:{story:`The proximity scale. Pick the gap by how strongly the parts belong together,
**not** by the space that happens to be available - whitespace is information,
and what sits close together is read as one unit.

One utility class works on all four primitives, because they all read their gap
from the same place. \`--ibk-layout-gap\` is declared \`inherits: false\`, so a
\`.gap-spacing-24\` on an outer Stack never leaks into a Cluster nested inside it.

Two rules are binding:
1. **Inside tighter than outside.** Otherwise the unit falls apart visually and
   a label gets read as belonging to the wrong field.
2. **Same relationship, same gap** - across components, not just within one.`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var A,C,z,q,G;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '03 · Stack',
  render: () => html\`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        \${row('default — spacing-16', html\`<div class="ibk-stack lp-frame">\${boxes(3)}</div>\`)}
        \${row('.gap-spacing-8 — siblings of one group', html\`<div class="ibk-stack gap-spacing-8 lp-frame">\${boxes(3)}</div>\`)}
        \${row('nested — outer 24, inner 8', html\`
            <div class="ibk-stack gap-spacing-24 lp-frame">
              <div class="ibk-stack gap-spacing-8">
                <div class="lp-box">Group A · 1</div>
                <div class="lp-box">Group A · 2</div>
              </div>
              <div class="ibk-stack gap-spacing-8">
                <div class="lp-box lp-box-alt">Group B · 1</div>
                <div class="lp-box lp-box-alt">Group B · 2</div>
              </div>
            </div>
          \`)}
        \${row('.ibk-stack-push — footer to the bottom', html\`
            <div class="ibk-stack gap-spacing-8 lp-frame" style="block-size: 14rem;">
              <div class="lp-box">Header</div>
              <div class="lp-box lp-box-ghost">Content</div>
              <div class="ibk-stack-push lp-box lp-box-alt">Footer</div>
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(z=(C=l.parameters)==null?void 0:C.docs)==null?void 0:z.source},description:{story:`**Stack — below each other.** The most common arrangement there is.

\`.ibk-stack-push\` on a child pushes it and everything after it to the bottom
edge, which turns "header, content, footer" into a full-height layout without a
wrapper - a card whose action row stays at the bottom however long the text is.`,...(G=(q=l.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var F,N,M,B,W;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '04 · Cluster',
  render: () => html\`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        \${row('default — spacing-16, centred', html\`<div class="ibk-cluster lp-frame">\${boxes(4)}</div>\`)}
        \${row('.ibk-cluster-end', html\`<div class="ibk-cluster ibk-cluster-end lp-frame">\${boxes(3)}</div>\`)}
        \${row('.ibk-cluster-center', html\`<div class="ibk-cluster ibk-cluster-center lp-frame">\${boxes(3)}</div>\`)}
        \${row('.ibk-cluster-between', html\`
            <div class="ibk-cluster ibk-cluster-between lp-frame">
              <div class="lp-box">Left</div>
              <div class="lp-box lp-box-alt">Right</div>
            </div>
          \`)}
        \${row('.ibk-cluster-push — from here to the end', html\`
            <div class="ibk-cluster lp-frame">
              <div class="lp-box">Title</div>
              <div class="ibk-cluster-push lp-box lp-box-alt">Cancel</div>
              <div class="lp-box lp-box-alt">Save</div>
            </div>
          \`)}
        \${row('.ibk-cluster-grow — one child takes the rest', html\`
            <div class="ibk-cluster gap-spacing-8 lp-frame">
              <div class="ibk-cluster-grow lp-box">Search field (grows)</div>
              <div class="lp-box lp-box-alt">Filter</div>
              <div class="lp-box lp-box-alt">Sort</div>
            </div>
          \`)}
        \${row('align-items — start vs. centre vs. stretch', html\`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                The left box is taller only because it holds three lines of text. Watch what the
                short box beside it does: it sits at the top, in the middle, or grows to match.
              </p>
              <div class="ibk-cluster ibk-cluster-align-start gap-spacing-8 lp-frame">
                \${tallBox('three lines')}
                <div class="lp-box lp-box-alt">start — sits at the top</div>
              </div>
              <div class="ibk-cluster gap-spacing-8 lp-frame">
                \${tallBox('three lines')}
                <div class="lp-box lp-box-alt">centre — the default</div>
              </div>
              <div class="ibk-cluster ibk-cluster-align-stretch gap-spacing-8 lp-frame">
                \${tallBox('three lines')}
                <div class="lp-box lp-box-alt">stretch — grows to match</div>
              </div>
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(M=(N=o.parameters)==null?void 0:N.docs)==null?void 0:M.source},description:{story:`**Cluster — next to each other, with wrapping.**

\`flex-wrap: wrap\` is the core of this primitive, not a detail: a Cluster that
cannot wrap forces horizontal scrolling and breaks WCAG 1.4.10 "Reflow".

\`.ibk-cluster-between\` survives a wrap and is the right choice for two groups
that must stay at the two edges. \`.ibk-cluster-push\` is the shorter form but
only works while the row is on one line - after a wrap the auto margin ends up
between two lines instead.`,...(W=(B=o.parameters)==null?void 0:B.docs)==null?void 0:W.description}}};var I,R,P,D,L;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '05 · Auto-Grid',
  render: () => html\`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        \${row('.ibk-auto-grid-narrow — min 12rem', html\`
            <div class="ibk-auto-grid ibk-auto-grid-narrow lp-frame">\${boxes(6, 'Tile')}</div>
          \`)}
        \${row('default — min 20rem', html\`<div class="ibk-auto-grid lp-frame">\${boxes(4, 'Tile')}</div>\`)}
        \${row('.ibk-auto-grid-wide — min 28rem', html\`<div class="ibk-auto-grid ibk-auto-grid-wide lp-frame">\${boxes(4, 'Tile')}</div>\`)}
        \${row('custom — --ibk-auto-grid-min: 16rem', html\`
            <div class="ibk-auto-grid lp-frame" style="--ibk-auto-grid-min: 16rem;">
              \${boxes(5, 'Tile')}
            </div>
          \`)}
        \${row('auto-fit (default) — last row stretches', html\`
            <div class="ibk-auto-grid ibk-auto-grid-narrow lp-frame">\${boxes(5, 'Tile')}</div>
          \`)}
        \${row('.ibk-auto-grid-fill — last row keeps its size', html\`
            <div class="ibk-auto-grid ibk-auto-grid-narrow ibk-auto-grid-fill lp-frame">
              \${boxes(5, 'Tile')}
            </div>
          \`)}
        \${row('differing heights — equal by default', html\`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                The middle tile is taller because it holds three lines of text — nothing sets a
                height. By default every tile in a row then matches the tallest one, which is what a
                row of cards wants: their bottom edges line up.
              </p>
              <div class="ibk-auto-grid ibk-auto-grid-narrow lp-frame">
                <div class="lp-box">one line</div>
                \${tallBox('three lines')}
                <div class="lp-box">one line</div>
              </div>
            </div>
          \`)}
        \${row('.ibk-auto-grid-align-start — natural heights', html\`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                Same markup, same three lines in the middle. The only difference is
                <code>.ibk-auto-grid-align-start</code>, which turns the stretch off — so the two
                short tiles keep the height their own content needs and no longer reach the bottom.
              </p>
              <div class="ibk-auto-grid ibk-auto-grid-narrow ibk-auto-grid-align-start lp-frame">
                <div class="lp-box">one line</div>
                \${tallBox('three lines')}
                <div class="lp-box">one line</div>
              </div>
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(P=(R=r.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:`**Auto-Grid — equal-weight tiles.** All the same width, free height. As soon as
there is room for another column, a new one appears.

The only value worth deciding is the minimum tile width - it answers *"from
which width on does this tile become unreadable?"* The **content** decides that,
not the screen, so it belongs to the component:

\`\`\`html
<div class="ibk-auto-grid" style="--ibk-auto-grid-min: 24rem;">
\`\`\`

\`rem\`, never \`px\`: a px minimum still does not wrap at 200% text zoom, long
after the text stopped fitting (WCAG 1.4.4 "Resize Text").`,...(L=(D=r.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var Y,O,E,H,_;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '06 · Sidebar',
  render: () => html\`
    <div class="ibk-stack gap-spacing-24">
      <p class="lp-note">
        Drag the bottom-right corner of each frame to see the wrap happen. The aside drops below the
        main area at the width where both minimums stop fitting — nothing else changes.
      </p>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">default — main min 30rem, aside 20rem</p>
        <div class="lp-viewport lp-viewport-768">
          <div class="ibk-sidebar">
            <div class="ibk-sidebar-main lp-box">Main — takes the rest</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside — ~20rem</div>
          </div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">narrow aside — --ibk-sidebar-aside-size: 14rem</p>
        <div class="lp-viewport lp-viewport-768">
          <div class="ibk-sidebar" style="--ibk-sidebar-aside-size: 14rem;">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside — 14rem</div>
          </div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">.ibk-sidebar-aside-first — aside on the left</p>
        <div class="lp-viewport lp-viewport-768">
          <div class="ibk-sidebar ibk-sidebar-aside-first">
            <div class="ibk-sidebar-main lp-box">Main — first in the DOM</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside — shown first</div>
          </div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">already wrapped — 320px, no breakpoint involved</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-sidebar">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside</div>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:`**Sidebar — main and secondary column.** The main area takes the remaining
space; the aside has an approximate target width and slides below the main area
by itself once the space gets too tight. No breakpoint, no media query - the
wrap happens as soon as the two declared minimums no longer fit side by side.

Those two values are the entire configuration:

\`\`\`html
<div class="ibk-sidebar"
     style="--ibk-sidebar-main-min: 30rem; --ibk-sidebar-aside-size: 20rem;">
  <div class="ibk-sidebar-main">…</div>
  <div class="ibk-sidebar-aside">…</div>
</div>
\`\`\`

\`.ibk-sidebar-aside-first\` moves the aside to the left **visually only**. The
keyboard and a screen reader keep following the DOM, so put the reading order in
the markup (WCAG 1.3.2 "Meaningful Sequence").`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.description}}};var j,U,J,K,Q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '07 · Container',
  render: () => html\`
    <div class="ibk-stack gap-spacing-24">
      \${[{
    cls: 'ibk-container-sm',
    label: '.ibk-container-sm — 40rem'
  }, {
    cls: 'ibk-container-md',
    label: '.ibk-container-md — 60rem'
  }, {
    cls: 'ibk-container-lg',
    label: '.ibk-container-lg — 80rem (default)'
  }, {
    cls: 'ibk-container-xl',
    label: '.ibk-container-xl — 100rem'
  }, {
    cls: 'ibk-container-full',
    label: '.ibk-container-full — no cap'
  }, {
    cls: 'ibk-container-prose',
    label: '.ibk-container-prose — 70ch'
  }].map(size => html\`
          <div class="ibk-stack gap-spacing-4">
            <p class="lp-caption">\${size.label}</p>
            <div class="ibk-container \${size.cls}">
              <div class="lp-ruler"></div>
            </div>
          </div>
        \`)}

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">
          in use — .ibk-container-md holding a .ibk-stack, gutter visible on both edges
        </p>
        <div class="lp-frame" style="padding: 0;">
          <div class="ibk-container ibk-container-md">
            <div class="ibk-stack gap-spacing-8" style="padding-block: 1rem;">\${boxes(3)}</div>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(J=(U=c.parameters)==null?void 0:U.docs)==null?void 0:J.source},description:{story:"**Container — page width and page margins.** Centres the content and caps how\nwide a page becomes. The inline padding *is* the page margin: it breathes with\nthe viewport (`clamp(1rem, 4vw, 2rem)`), so a phone keeps a 1rem edge and a wide\nmonitor does not put text flush against the window frame.\n\n| Class | max-inline-size | Use for |\n| --- | --- | --- |\n| `.ibk-container` | 80rem | the default page width |\n| `.ibk-container-sm` | 40rem | a single-column form, a login screen |\n| `.ibk-container-md` | 60rem | an article, a settings page |\n| `.ibk-container-lg` | 80rem | a normal application page |\n| `.ibk-container-xl` | 100rem | a dashboard, a wide table |\n| `.ibk-container-full` | none | a hero or banner spanning the window |\n| `.ibk-container-prose` | 70ch | running text |\n| `.ibk-container-flush` | – | drops the page margin as well |\n\n`rem`, so the cap grows with the user's font size instead of squeezing\n200%-zoomed text into the same measure. `.ibk-container-prose` is the one\nexception and uses `ch`, because what matters for readability is the number of\ncharacters per line (~65–75), and `ch` is the only unit that stays correct when\nthe font changes.",...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var V,X,Z,ii,ei;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '08 · Nesting',
  render: () => html\`
    <div class="ibk-container ibk-container-md ibk-container-flush">
      <div class="ibk-stack gap-spacing-32 lp-frame">
        <div class="ibk-cluster ibk-cluster-between gap-spacing-16">
          <div class="lp-box lp-box-ghost">Cluster · page header</div>
          <div class="lp-box">Action</div>
        </div>

        <div class="ibk-sidebar gap-spacing-24" style="--ibk-sidebar-main-min: 20rem;">
          <div class="ibk-sidebar-main ibk-stack gap-spacing-16">
            <div class="lp-box lp-box-ghost">Sidebar · main</div>
            <div class="ibk-auto-grid ibk-auto-grid-narrow gap-spacing-16">\${boxes(3, 'Tile')}</div>
            <div class="ibk-stack gap-spacing-8">
              <div class="lp-box">Stack · field 1</div>
              <div class="lp-box">Stack · field 2</div>
            </div>
          </div>
          <div class="ibk-sidebar-aside ibk-stack gap-spacing-8">
            <div class="lp-box lp-box-ghost">Sidebar · aside</div>
            <div class="lp-box lp-box-alt">Filter</div>
            <div class="lp-box lp-box-alt">Filter</div>
          </div>
        </div>

        <div class="ibk-cluster ibk-cluster-end gap-spacing-16">
          <div class="lp-box lp-box-alt">Cancel</div>
          <div class="lp-box">Save</div>
        </div>
      </div>
    </div>
  \`
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`Primitives compose - that is the whole point of having only four. A page is
almost always a Container holding a Stack, and the Stack holds whatever each
section needs.

The one rule when nesting: **the outer gap must be the larger one.** If an inner
group is spaced as widely as the sections around it, the group stops reading as
a group.`,...(ei=(ii=p.parameters)==null?void 0:ii.docs)==null?void 0:ei.description}}};var ai,si,ti,ni,li;b.parameters={...b.parameters,docs:{...(ai=b.parameters)==null?void 0:ai.docs,source:{originalSource:`{
  name: '09 · Reflow at 320px',
  render: () => html\`
    <div class="ibk-auto-grid" style="--ibk-auto-grid-min: 22rem;">
      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Stack — already one column</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-stack gap-spacing-8">\${boxes(3)}</div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Cluster — wrapped, no horizontal scrollbar</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-cluster gap-spacing-8">\${boxes(5)}</div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Auto-Grid — one column, min() beats the 20rem minimum</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-auto-grid gap-spacing-8">\${boxes(3, 'Tile')}</div>
        </div>
      </div>

      <div class="ibk-stack gap-spacing-8">
        <p class="lp-caption">Sidebar — aside below the main area</p>
        <div class="lp-viewport lp-viewport-320">
          <div class="ibk-sidebar gap-spacing-8">
            <div class="ibk-sidebar-main lp-box">Main</div>
            <div class="ibk-sidebar-aside lp-box lp-box-alt">Aside</div>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(ti=(si=b.parameters)==null?void 0:si.docs)==null?void 0:ti.source},description:{story:`**The 320px check.** Content must stay usable at 320 CSS pixels without
scrolling in two directions (WCAG 1.4.10 "Reflow"), and at 200% text zoom
without loss of information (WCAG 1.4.4 "Resize Text").

This is to be *tested*, not estimated - which is why the frames below are fixed
at 320px. If an arrangement does not fit there, the gap is not the problem: the
choice of component is. The segmented control, for instance, deliberately falls
back to a select at that width.

Three of the four primitives wrap, and that is exactly why. The fourth, Stack,
is already one column.`,...(li=(ni=b.parameters)==null?void 0:ni.docs)==null?void 0:li.description}}};var oi,ri,di,ci,pi;v.parameters={...v.parameters,docs:{...(oi=v.parameters)==null?void 0:oi.docs,source:{originalSource:`{
  name: '10 · What not to do',
  render: () => html\`
    <div class="ibk-query-container">
      <div class="lp-matrix lp-matrix-labelled">
        \${row('A fixed max-width on the component', html\`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                <strong>No:</strong> <code>style="max-width: 458px"</code> on an accordion. The
                component cannot know how much room it was given, and a px value never grows with
                the font size.
              </p>
              <p class="lp-note">
                <strong>Yes:</strong> leave the component fluid and cap the <em>container</em> —
                <code>.ibk-container-sm</code>, or a <code>.ibk-sidebar-aside</code>.
              </p>
            </div>
          \`)}
        \${row('A Cluster that cannot wrap', html\`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                <strong>No:</strong> <code>flex-wrap: nowrap</code> on a toolbar. It forces
                horizontal scrolling and breaks WCAG 1.4.10.
              </p>
              <p class="lp-note">
                <strong>Yes:</strong> keep the wrap. If the row genuinely must not break, the
                component is wrong for that width — swap it, the way the segmented control falls
                back to a select.
              </p>
            </div>
          \`)}
        \${row('A viewport media query inside a component', html\`
            <div class="ibk-stack gap-spacing-8">
              <p class="lp-note">
                <strong>No:</strong> <code>@media (max-width: 480px)</code> in a component
                stylesheet. The same bar can sit under a wide table or in a 20rem aside, and the
                viewport says nothing about which.
              </p>
              <p class="lp-note">
                <strong>Yes:</strong> <code>.ibk-query-container</code> on a block-level ancestor
                plus <code>@container (inline-size &lt; 30rem)</code> in the component — see
                <code>pagination.css</code>.
              </p>
              <p class="lp-note">
                <strong>The trap:</strong> never put <code>.ibk-query-container</code> on a box that
                is sized by its own content — a float, an inline-block, or a flex item with the
                default <code>flex-basis: auto</code>. Containment makes such a box compute its
                width as if it were empty, so it collapses to zero and its content spills over its
                neighbours. That is also why the class cannot sit on the component itself.
              </p>
            </div>
          \`)}
        \${row('Spacing chosen by available room', html\`
            <div class="ibk-stack gap-spacing-8">
              <div class="ibk-stack gap-spacing-16 lp-frame">
                <p class="lp-caption">No — inner gap equals outer gap, the group dissolves</p>
                <div class="ibk-stack gap-spacing-16">
                  <div class="lp-box">Field</div>
                  <div class="lp-box">Field</div>
                </div>
                <div class="lp-box lp-box-alt">Next section</div>
              </div>
              <div class="ibk-stack gap-spacing-24 lp-frame">
                <p class="lp-caption">Yes — inside 8, outside 24</p>
                <div class="ibk-stack gap-spacing-8">
                  <div class="lp-box">Field</div>
                  <div class="lp-box">Field</div>
                </div>
                <div class="lp-box lp-box-alt">Next section</div>
              </div>
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(di=(ri=v.parameters)==null?void 0:ri.docs)==null?void 0:di.source},description:{story:"The four mistakes that actually happen. Left is wrong, right is the fix.",...(pi=(ci=v.parameters)==null?void 0:ci.docs)==null?void 0:pi.description}}};const fi=["CheatSheet","GapScale","Stack","Cluster","AutoGrid","Sidebar","Container","Nesting","Reflow320","AntiPatterns"];export{v as AntiPatterns,r as AutoGrid,t as CheatSheet,o as Cluster,c as Container,n as GapScale,p as Nesting,b as Reflow320,d as Sidebar,l as Stack,fi as __namedExportsOrder,xi as default};
