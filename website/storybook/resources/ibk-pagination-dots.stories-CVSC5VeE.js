import{g as I,o,b as e,e as _}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:N,args:O,argTypes:U}=I("ibk-pagination-dots"),W={title:"Components/Pagination Dots",component:"ibk-pagination-dots",args:{...O,currentPage:3,totalPages:5,size:"medium",variant:"regular",disabled:!1},argTypes:{...U,currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["regular","prominent"]},prominent:{control:!1,table:{disable:!0}},disabled:{control:"boolean"},navigationLabel:{control:!1,table:{disable:!0}},"navigation-label":{control:!1,table:{disable:!0}}},parameters:{actions:{handles:N}},render:a=>J(a)},u=["small","medium","large"],q=[{label:"Enabled",state:"enabled"},{label:"Hover",state:"hover"},{label:"Pressed",state:"pressed"},{label:"Focus",state:"focus"}],A=[{label:"Prominent States",variant:"prominent"},{label:"Regular States",variant:"regular"}],B={small:"Mark12",medium:"Mark16",large:"Mark20"},G=e`
  <style>
    .paginationDotsStoryCanvas {
      color: var(--ibk-neutral-grey-18);
      display: grid;
      gap: var(--ibk-spacing-48, 3rem);
      padding: var(--ibk-spacing-16, 1rem);
    }

    .paginationDotsStorySection {
      align-items: start;
      display: grid;
      gap: var(--ibk-spacing-24, 1.5rem);
      grid-template-columns: 12rem minmax(0, 1fr);
    }

    .paginationDotsStoryTitle {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.25;
      margin: 0;
      padding-top: 7rem;
      text-align: right;
    }

    .paginationDotsStoryMatrix {
      align-items: center;
      display: grid;
      gap: var(--ibk-spacing-16, 1rem) var(--ibk-spacing-24, 1.5rem);
      grid-template-columns: 6rem repeat(6, minmax(4.5rem, 1fr));
      justify-items: center;
    }

    .paginationDotsStoryHeader {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5;
      text-align: center;
    }

    .paginationDotsStoryHeader.size {
      grid-column: span 2;
    }

    .paginationDotsStoryRowLabel {
      font-size: 1rem;
      font-weight: 700;
      justify-self: start;
      line-height: 1.5;
    }

    .paginationDotsStory-hover:not(.selected) {
      color: var(--ibk-neutral-grey-90);
    }

    .paginationDotsStory-pressed:not(.selected) {
      color: var(--ibk-neutral-grey-74);
    }

    .paginationDotsStory-focus {
      outline: solid var(--ibk-spacing-2, 2px) var(--ibk-focusstroke);
      outline-offset: 0;
    }

    @media (max-width: 900px) {
      .paginationDotsStorySection {
        grid-template-columns: 1fr;
      }

      .paginationDotsStoryTitle {
        padding-top: 0;
        text-align: left;
      }

      .paginationDotsStoryMatrix {
        grid-template-columns: 5rem repeat(6, minmax(3rem, 1fr));
        overflow-x: auto;
      }
    }
  </style>
`,J=a=>e`
  <ibk-pagination-dots
    currentPage="${o(a.currentPage??void 0)}"
    totalPages="${o(a.totalPages??void 0)}"
    size="${o(a.size||void 0)}"
    variant="${o(a.variant||void 0)}"
    ?disabled=${a.disabled}
  ></ibk-pagination-dots>
`,b=(a,t,r,n)=>{const s={single:!0,selected:r,[`paginationDotsStory-${n}`]:n!=="enabled"};return e`
    <span class="ibkPaginationDots ${a} ${t}">
      <button type="button" class=${_(s)} aria-label="Pagination state">
        <i class="ibkIcon" aria-hidden="true">${B[t]}</i>
      </button>
    </span>
  `},K=(a,t)=>e`
  <section class="paginationDotsStorySection">
    <h2 class="paginationDotsStoryTitle">${a}</h2>
    <div class="paginationDotsStoryMatrix">
      <span></span>
      ${u.map(r=>e`<span class="paginationDotsStoryHeader size">${r}</span>`)}
      <span></span>
      ${u.map(()=>e`
          <span class="paginationDotsStoryHeader">Selected</span>
          <span class="paginationDotsStoryHeader">Unselected</span>
        `)}
      ${q.map(({label:r,state:n})=>e`
          <span class="paginationDotsStoryRowLabel">${r}</span>
          ${u.map(s=>e`
              ${b(t,s,!0,n)}
              ${b(t,s,!1,n)}
            `)}
        `)}
    </div>
  </section>
`,i={args:{currentPage:3,totalPages:5,size:"medium",variant:"regular"}},l={args:{currentPage:3,totalPages:5,size:"medium",variant:"prominent"}},g={args:{currentPage:3,totalPages:5,size:"small",variant:"regular"}},c={args:{currentPage:3,totalPages:5,size:"medium",variant:"regular"}},m={args:{currentPage:3,totalPages:5,size:"large",variant:"regular"}},p={args:{currentPage:3,totalPages:5,size:"medium",variant:"regular",disabled:!0}},d={name:"Figma States",render:()=>e`
    ${G}
    <div class="paginationDotsStoryCanvas">
      ${A.map(({label:a,variant:t})=>K(a,t))}
    </div>
  `};var v,S,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5,
    size: 'medium',
    variant: 'regular'
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var P,D,f;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5,
    size: 'medium',
    variant: 'prominent'
  }
}`,...(f=(D=l.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var $,k,z;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5,
    size: 'small',
    variant: 'regular'
  }
}`,...(z=(k=g.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var h,x,M;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5,
    size: 'medium',
    variant: 'regular'
  }
}`,...(M=(x=c.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var w,H,C;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5,
    size: 'large',
    variant: 'regular'
  }
}`,...(C=(H=m.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var F,L,T;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5,
    size: 'medium',
    variant: 'regular',
    disabled: true
  }
}`,...(T=(L=p.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var R,j,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Figma States',
  render: () => html\`
    \${storyStyles}
    <div class="paginationDotsStoryCanvas">
      \${variants.map(({
    label,
    variant
  }) => renderStateSection(label, variant))}
    </div>
  \`
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const X=["Default","Prominent","Small","Medium","Large","Disabled","FigmaStates"];export{i as Default,p as Disabled,d as FigmaStates,m as Large,c as Medium,l as Prominent,g as Small,X as __namedExportsOrder,W as default};
