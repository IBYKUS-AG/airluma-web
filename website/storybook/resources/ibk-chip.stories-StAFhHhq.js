import{g as M,o as t,b as r}from"./iframe-DkRrOnhD.js";import{a as s}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:V,args:W,argTypes:_}=M("ibk-chip"),J={title:"Components/Chip",component:"ibk-chip",args:W,argTypes:_,parameters:{actions:{handles:V},docs:{description:{component:"Chips are compact, partly interactive elements used to display or filter attributes. A `passive` chip only shows a value; an `active` chip is removable via its trailing close icon."}}},render:e=>Y(e)},Y=e=>r`
  <ibk-chip
    label="${t(e.label||void 0)}"
    variant="${t(e.variant||void 0)}"
    status="${t(e.status||void 0)}"
    type="${t(e.type||void 0)}"
    @remove="${e.remove||s}"
  ></ibk-chip>
`,j=["default","info","success","warning","alert"],d=(e,v,a="Schlagwort")=>r`
  <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
    ${j.map(i=>r`
        <ibk-chip
          label=${a}
          status=${t(e)}
          variant=${t(v)}
          type=${t(i)}
          @remove=${s}
        ></ibk-chip>
      `)}
  </div>
`,n={args:{label:"Schlagwort",status:"active",variant:"regular",type:"default"}},o={render:()=>r`
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Regular</strong></p>
        ${d("active","regular")}
      </div>
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Decent</strong></p>
        ${d("active","decent")}
      </div>
    </div>
  `},c={render:()=>r`
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Regular</strong></p>
        ${d("passive","regular")}
      </div>
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Decent</strong></p>
        ${d("passive","decent")}
      </div>
    </div>
  `},l={render:()=>r`
    <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
      <ibk-chip label="Filter A" status="active" @remove=${s}></ibk-chip>
      <ibk-chip label="Filter B" status="active" type="info" @remove=${s}></ibk-chip>
      <ibk-chip
        label="Filter C"
        status="active"
        variant="decent"
        type="success"
        @remove=${s}
      ></ibk-chip>
    </div>
  `},p={render:()=>r`
      <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;" @remove=${a=>{var i;s(a),(i=a.target)==null||i.remove()}}>
        ${["React","Lit","Vue","Svelte","Angular"].map((a,i)=>r`
            <ibk-chip
              label=${a}
              status="active"
              type=${["default","info","success","warning","alert"][i]}
            ></ibk-chip>
          `)}
      </div>
      <p style="margin-top:1rem; color:var(--ibk-neutral-grey-42);">
        Click the ✕ on any chip to remove it. Reload the story to reset.
      </p>
    `};var m,g,u,h,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Schlagwort',
    status: 'active',
    variant: 'regular',
    type: 'default'
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"Interactive playground driven by the controls panel.",...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var b,f,$,k,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Regular</strong></p>
        \${row('active', 'regular')}
      </div>
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Decent</strong></p>
        \${row('active', 'decent')}
      </div>
    </div>
  \`
}`,...($=(f=o.parameters)==null?void 0:f.docs)==null?void 0:$.source},description:{story:`Active (removable) chips. Hover / press / focus each chip to see the
interactive states. Order per row: Standard, Info, Success, Warning, Alert.`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var x,R,S,A,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Regular</strong></p>
        \${row('passive', 'regular')}
      </div>
      <div>
        <p style="margin:0 0 0.5rem;"><strong>Decent</strong></p>
        \${row('passive', 'decent')}
      </div>
    </div>
  \`
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source},description:{story:`Passive (non-interactive) chips — display only.
Order per row: Standard, Info, Success, Warning, Alert.`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var L,D,F,P,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
      <ibk-chip label="Filter A" status="active" @remove=\${action}></ibk-chip>
      <ibk-chip label="Filter B" status="active" type="info" @remove=\${action}></ibk-chip>
      <ibk-chip
        label="Filter C"
        status="active"
        variant="decent"
        type="success"
        @remove=\${action}
      ></ibk-chip>
    </div>
  \`
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"Removable chips wired to the `remove` event (see the Actions panel).",...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};var O,T,B,H,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const labels = ['React', 'Lit', 'Vue', 'Svelte', 'Angular'];
    const onRemove = (e: Event) => {
      action(e);
      // The \`remove\` event bubbles from the ibk-chip that was closed.
      (e.target as HTMLElement | null)?.remove();
    };
    return html\`
      <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;" @remove=\${onRemove}>
        \${labels.map((label, i) => html\`
            <ibk-chip
              label=\${label}
              status="active"
              type=\${['default', 'info', 'success', 'warning', 'alert'][i]}
            ></ibk-chip>
          \`)}
      </div>
      <p style="margin-top:1rem; color:var(--ibk-neutral-grey-42);">
        Click the ✕ on any chip to remove it. Reload the story to reset.
      </p>
    \`;
  }
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source},description:{story:"Live removal: clicking the close icon (or pressing Delete / Backspace while a\nchip is focused) fires `remove`, and the handler deletes the chip from the DOM.\nReload the story to reset the list.",...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};const K=["Playground","Active","Passive","Removable","RemovableLive"];export{o as Active,c as Passive,n as Playground,l as Removable,p as RemovableLive,K as __namedExportsOrder,J as default};
