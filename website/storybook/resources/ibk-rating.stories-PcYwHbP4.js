import{g as L,o as p,b as e,e as u,A as z}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:G,args:M,argTypes:_}=L("ibk-rating"),Q={title:"Components/Rating",component:"ibk-rating",args:{...M,value:4,max:5,variant:"red",allowHalf:!1,readonly:!1,disabled:!1},argTypes:{..._,value:{control:{type:"number",min:0,step:.5}},max:{control:{type:"number",min:1}},variant:{control:"select",options:["red","gold"]},allowHalf:{control:"boolean"},readonly:{control:"boolean"},disabled:{control:"boolean"},ratingLabel:{control:!1,table:{disable:!0}},"rating-label":{control:!1,table:{disable:!0}}},parameters:{actions:{handles:G}},render:a=>q(a)},c=[{label:"Red",variant:"red"},{label:"Gold",variant:"gold"}],j=Array.from({length:11},(a,r)=>r*.5),P=[{label:"Empty",fill:"empty"},{label:"Half",fill:"half"},{label:"Full",fill:"full"}],O=e`
  <style>
    .ratingStoryCanvas {
      color: var(--ibk-neutral-grey-18);
      display: grid;
      gap: var(--ibk-spacing-48, 3rem);
      padding: var(--ibk-spacing-16, 1rem);
    }

    .ratingStorySection {
      display: grid;
      gap: var(--ibk-spacing-24, 1.5rem);
      justify-items: start;
    }

    .ratingStoryTitle {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.25;
      margin: 0;
    }

    .ratingStoryMatrix {
      align-items: center;
      display: grid;
      gap: var(--ibk-spacing-16, 1rem) var(--ibk-spacing-24, 1.5rem);
      grid-template-columns: 5rem repeat(2, minmax(7rem, auto));
      justify-items: start;
    }

    .ratingStoryHeader {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5;
    }

    .ratingStoryRowLabel {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5;
    }
  </style>
`,q=a=>e`
  <ibk-rating
    value="${p(a.value??void 0)}"
    max="${p(a.max??void 0)}"
    variant="${p(a.variant||void 0)}"
    ?allowHalf=${a.allowHalf}
    ?readonly=${a.readonly}
    ?disabled=${a.disabled}
  ></ibk-rating>
`,B=()=>e`
  <section class="ratingStorySection">
    <h2 class="ratingStoryTitle">Half-star Steps</h2>
    <div class="ratingStoryMatrix">
      <span></span>
      ${c.map(({label:a})=>e`<span class="ratingStoryHeader">${a}</span>`)}
      ${j.map(a=>e`
          <span class="ratingStoryRowLabel">${a.toFixed(1)}</span>
          ${c.map(({variant:r})=>e`<ibk-rating
                value="${a}"
                variant="${r}"
                allowHalf
                readonly
              ></ibk-rating>`)}
        `)}
    </div>
  </section>
`,J=(a,r,t)=>{const m={ibkRating:!0,[`ibkRating-${a}`]:!0,"ibkRating-pressed":t},g={ibkIcon:!0,"ibkRating-starFill":!0,"ibkRating-starFill-half":r==="half"};return e`
    <span class=${u(m)}>
      <span class="ibkRating-star">
        <i class="ibkIcon" aria-hidden="true">Star</i>
        ${r==="empty"?z:e`<i class=${u(g)} aria-hidden="true"
              >${r==="half"?"StarFillHalf":"StarFill"}</i
            >`}
      </span>
    </span>
  `},v=(a,r)=>e`
  <section class="ratingStorySection">
    <h2 class="ratingStoryTitle">${a}</h2>
    <div class="ratingStoryMatrix">
      <span></span>
      ${c.map(({label:t})=>e`<span class="ratingStoryHeader">${t}</span>`)}
      ${P.map(({label:t,fill:m})=>e`
          <span class="ratingStoryRowLabel">${t}</span>
          ${c.map(({variant:g})=>J(g,m,r))}
        `)}
    </div>
  </section>
`,n={args:{value:4,max:5,variant:"red"}},s={args:{value:4,max:5,variant:"gold"}},l={name:"Allow Half",args:{value:3.5,max:5,variant:"red",allowHalf:!0}},i={args:{value:4,max:5,variant:"red",readonly:!0}},o={args:{value:4,max:5,variant:"red",disabled:!0}},d={name:"Figma States",render:()=>e`
    ${O}
    <div class="ratingStoryCanvas">
      ${B()} ${v("Star Items — Enabled",!1)}
      ${v("Star Items — Pressed",!0)}
    </div>
  `};var b,S,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 5,
    variant: 'red'
  }
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,$,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 5,
    variant: 'gold'
  }
}`,...(h=($=s.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var k,x,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Allow Half',
  args: {
    value: 3.5,
    max: 5,
    variant: 'red',
    allowHalf: true
  }
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var H,R,F;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 5,
    variant: 'red',
    readonly: true
  }
}`,...(F=(R=i.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var I,A,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 5,
    variant: 'red',
    disabled: true
  }
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var T,D,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Figma States',
  render: () => html\`
    \${storyStyles}
    <div class="ratingStoryCanvas">
      \${renderStepSection()} \${renderItemSection('Star Items — Enabled', false)}
      \${renderItemSection('Star Items — Pressed', true)}
    </div>
  \`
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const U=["Default","Gold","AllowHalf","Readonly","Disabled","FigmaStates"];export{l as AllowHalf,n as Default,o as Disabled,d as FigmaStates,s as Gold,i as Readonly,U as __namedExportsOrder,Q as default};
