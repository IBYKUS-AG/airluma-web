import{g as F,o as t,b as e}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:V,args:H,argTypes:O}=F("ibk-pagination"),K={title:"Components/Pagination",component:"ibk-pagination",args:{...H,currentPage:22,totalPages:999,mode:"maximum",variant:"regular",disabled:!1},argTypes:{...O,currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},mode:{control:{type:"select"},options:["minimum","maximum"]},variant:{control:{type:"select"},options:["regular","prominent"]},prominent:{control:!1,table:{disable:!0}},disabled:{control:"boolean"},navigationLabel:{control:!1,table:{disable:!0}},"navigation-label":{control:!1,table:{disable:!0}}},parameters:{actions:{handles:V}},render:a=>G(a)},L=e`
  <style>
    .paginationStoryCanvas {
      color: var(--ibk-neutral-grey-18);
      display: grid;
      gap: var(--ibk-spacing-32, 2rem);
      padding: var(--ibk-spacing-16, 1rem);
    }

    .paginationStorySection {
      display: grid;
      gap: var(--ibk-spacing-16, 1rem);
    }

    .paginationStorySectionHeader {
      display: grid;
      gap: var(--ibk-spacing-4, 0.25rem);
    }

    .paginationStoryTitle {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5;
      margin: 0;
    }

    .paginationStoryDescription {
      color: var(--ibk-neutral-grey-42);
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin: 0;
    }

    .paginationStoryMatrix {
      display: grid;
      gap: var(--ibk-spacing-24, 1.5rem);
    }

    .paginationStoryVariant {
      display: grid;
      gap: var(--ibk-spacing-12, 0.75rem);
    }

    .paginationStoryVariantTitle {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.25rem;
    }

    .paginationStoryExamples {
      display: grid;
      gap: var(--ibk-spacing-12, 0.75rem);
    }

    .paginationStoryExample {
      align-items: center;
      display: grid;
      gap: var(--ibk-spacing-16, 1rem);
      grid-template-columns: 6rem minmax(0, 1fr);
    }

    .paginationStoryExampleLabel {
      color: var(--ibk-neutral-grey-42);
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1rem;
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      .paginationStoryExample {
        grid-template-columns: 1fr;
      }
    }
  </style>
`,R=[{label:"START",currentPage:1,totalPages:99},{label:"MIDDLE",currentPage:22,totalPages:99},{label:"END",currentPage:99,totalPages:99}],N=[{label:"START",currentPage:1,totalPages:999},{label:"MIDDLE",currentPage:22,totalPages:999},{label:"END",currentPage:999,totalPages:999}],_=[{label:"Prominent",variant:"prominent"},{label:"Regular",variant:"regular"}],G=a=>e`
  <ibk-pagination
    currentPage="${t(a.currentPage??void 0)}"
    totalPages="${t(a.totalPages??void 0)}"
    mode="${t(a.mode||void 0)}"
    variant="${t(a.variant||void 0)}"
    ?disabled=${a.disabled}
  ></ibk-pagination>
`,j=(a,d,i)=>e`
  <div class="paginationStoryExample">
    <span class="paginationStoryExampleLabel">${i.label}</span>
    <ibk-pagination
      currentPage="${i.currentPage}"
      totalPages="${i.totalPages}"
      mode="${a}"
      variant="${d}"
    ></ibk-pagination>
  </div>
`,p=(a,d,i,C)=>e`
  <section class="paginationStorySection">
    <div class="paginationStorySectionHeader">
      <h2 class="paginationStoryTitle">${a}</h2>
      <p class="paginationStoryDescription">${d}</p>
    </div>
    <div class="paginationStoryMatrix">
      ${_.map(({label:I,variant:W})=>e`
          <div class="paginationStoryVariant">
            <span class="paginationStoryVariantTitle">${I}</span>
            <div class="paginationStoryExamples">
              ${C.map(A=>j(i,W,A))}
            </div>
          </div>
        `)}
    </div>
  </section>
`,r={args:{currentPage:22,totalPages:99,mode:"minimum",variant:"regular"}},o={args:{currentPage:22,totalPages:999,mode:"maximum",variant:"regular"}},s={args:{currentPage:22,totalPages:999,mode:"maximum",variant:"prominent"}},m={args:{currentPage:22,totalPages:999,mode:"maximum",variant:"regular",disabled:!0}},l={name:"Figma States",render:()=>e`
    ${L}
    <div class="paginationStoryCanvas">
      ${p("Minimum","Ohne erste und letzte Seite","minimum",R)}
      ${p("Maximum","Erste und letzte Seite direkt ansteuerbar","maximum",N)}
    </div>
  `},n={name:"Compact in tight space",render:()=>e`
    ${L}
    <div style="display: flex; flex-direction: column; gap: var(--ibk-spacing-24, 1.5rem);">
      <div>
        <p class="paginationStoryExampleLabel">With .ibk-query-container — 20rem, compact</p>
        <div
          class="ibk-query-container"
          style="inline-size: 20rem; border: 1px dashed var(--ibk-neutral-grey-74); padding: 0.75rem;"
        >
          <ibk-pagination currentPage="22" totalPages="999" mode="maximum"></ibk-pagination>
        </div>
      </div>

      <div>
        <p class="paginationStoryExampleLabel">
          Without it — 20rem, full size, wraps onto a second line
        </p>
        <div
          style="inline-size: 20rem; border: 1px dashed var(--ibk-neutral-grey-74); padding: 0.75rem;"
        >
          <ibk-pagination currentPage="22" totalPages="999" mode="maximum"></ibk-pagination>
        </div>
      </div>

      <div>
        <p class="paginationStoryExampleLabel">
          With .ibk-query-container — 48rem, above the 30rem threshold, full size
        </p>
        <div
          class="ibk-query-container"
          style="inline-size: 48rem; max-inline-size: 100%; border: 1px dashed var(--ibk-neutral-grey-74); padding: 0.75rem;"
        >
          <ibk-pagination currentPage="22" totalPages="999" mode="maximum"></ibk-pagination>
        </div>
      </div>
    </div>
  `};var g,c,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    currentPage: 22,
    totalPages: 99,
    mode: 'minimum',
    variant: 'regular'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,v,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    currentPage: 22,
    totalPages: 999,
    mode: 'maximum',
    variant: 'regular'
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,h,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    currentPage: 22,
    totalPages: 999,
    mode: 'maximum',
    variant: 'prominent'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var P,k,f;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    currentPage: 22,
    totalPages: 999,
    mode: 'maximum',
    variant: 'regular',
    disabled: true
  }
}`,...(f=(k=m.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var z,$,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Figma States',
  render: () => html\`
    \${storyStyles}
    <div class="paginationStoryCanvas">
      \${renderModeSection('Minimum', 'Ohne erste und letzte Seite', 'minimum', minimumScenarios)}
      \${renderModeSection('Maximum', 'Erste und letzte Seite direkt ansteuerbar', 'maximum', maximumScenarios)}
    </div>
  \`
}`,...(w=($=l.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var E,M,T,q,D;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Compact in tight space',
  render: () => html\`
    \${storyStyles}
    <div style="display: flex; flex-direction: column; gap: var(--ibk-spacing-24, 1.5rem);">
      <div>
        <p class="paginationStoryExampleLabel">With .ibk-query-container — 20rem, compact</p>
        <div
          class="ibk-query-container"
          style="inline-size: 20rem; border: 1px dashed var(--ibk-neutral-grey-74); padding: 0.75rem;"
        >
          <ibk-pagination currentPage="22" totalPages="999" mode="maximum"></ibk-pagination>
        </div>
      </div>

      <div>
        <p class="paginationStoryExampleLabel">
          Without it — 20rem, full size, wraps onto a second line
        </p>
        <div
          style="inline-size: 20rem; border: 1px dashed var(--ibk-neutral-grey-74); padding: 0.75rem;"
        >
          <ibk-pagination currentPage="22" totalPages="999" mode="maximum"></ibk-pagination>
        </div>
      </div>

      <div>
        <p class="paginationStoryExampleLabel">
          With .ibk-query-container — 48rem, above the 30rem threshold, full size
        </p>
        <div
          class="ibk-query-container"
          style="inline-size: 48rem; max-inline-size: 100%; border: 1px dashed var(--ibk-neutral-grey-74); padding: 0.75rem;"
        >
          <ibk-pagination currentPage="22" totalPages="999" mode="maximum"></ibk-pagination>
        </div>
      </div>
    </div>
  \`
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:`The compact 32px size is opt-in as of IDES-58. It used to be driven by
\`@media (max-width: 480px)\`, which asked the wrong question: the same bar can
sit under a wide table or inside a 20rem aside, and the viewport width says
nothing about which. It is now a container query.

Add \`.ibk-query-container\` to a **block-level ancestor** to opt in. It cannot go
on the pagination itself: inline-size containment makes a box compute its width
as if it were empty, so any box sized by its own content - and the bar is - would
collapse to zero.

\`\`\`html
<div class="ibk-query-container">
  <ibk-pagination currentPage="22" totalPages="999" mode="maximum"></ibk-pagination>
</div>
\`\`\`

Without the wrapper the buttons stay at 40px and the bar wraps onto a second
line, which keeps 320px usable on its own and preserves the larger hit area
(WCAG 2.5.8 "Target Size").`,...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.description}}};const Q=["Minimum","Maximum","Prominent","Disabled","FigmaStates","CompactInTightSpace"];export{n as CompactInTightSpace,m as Disabled,l as FigmaStates,o as Maximum,r as Minimum,s as Prominent,Q as __namedExportsOrder,K as default};
