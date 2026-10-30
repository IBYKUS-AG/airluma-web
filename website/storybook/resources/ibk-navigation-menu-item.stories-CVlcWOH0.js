import{g as X,o as n,b as Y}from"./iframe-DkRrOnhD.js";import{a as Z}from"./utils-dRMwQzqD.js";import"./preload-helper-C1FmrZbK.js";const{events:ee,args:re,argTypes:ne}=X("ibk-navigation-menu-item"),ie={title:"Components/Navigation Menu Item",component:"ibk-navigation-menu-item",args:{...re,label:"Nutzerverwaltung",icon:"Home",showTrailingIcon:!0,shortcut:"",variant:"regular",selected:!0,disabled:!1,dropdown:!1},argTypes:{...ne,variant:{control:"select",options:["regular","prominent"]},selected:{control:"boolean"},disabled:{control:"boolean"},showTrailingIcon:{control:"boolean"},trailingIcon:{control:"text",description:"Ligature name of the trailing icon. Leave empty for the default chevron `ChevD`."},dropdown:{control:"boolean"}},parameters:{actions:{handles:ee}},render:e=>ae(e)},ae=e=>Y`
  <ibk-navigation-menu-item
    label="${n(e.label||void 0)}"
    icon="${n(e.icon??void 0)}"
    variant="${n(e.variant||void 0)}"
    .showTrailingIcon="${e.showTrailingIcon}"
    trailingIcon="${n(e.trailingIcon||void 0)}"
    shortcut="${n(e.shortcut||void 0)}"
    ?selected="${e.selected}"
    ?disabled="${e.disabled}"
    ?dropdown="${e.dropdown}"
    @click="${e.onclick||Z}"
  ></ibk-navigation-menu-item>
`,r={label:"Nutzerverwaltung",icon:"Home",showTrailingIcon:!0},a={args:{...r,selected:!1}},o={args:{...r,selected:!1,variant:"prominent"}},t={args:{...r,icon:""}},s={name:"showTrailingIcon true",args:{...r,showTrailingIcon:!0}},i={name:"custom trailingIcon",args:{...r,showTrailingIcon:!0,trailingIcon:"ChevR"}},c={name:"showTrailingIcon false",args:{...r,showTrailingIcon:!1},parameters:{docs:{source:{code:`<ibk-navigation-menu-item
  label="Nutzerverwaltung"
  icon="Home"
  variant="regular"
  selected
  .showTrailingIcon=\${false}
></ibk-navigation-menu-item>`}}}},l={args:{...r,selected:!0}},d={args:{...r,selected:!0,variant:"prominent"}},u={args:{...r,selected:!0,dropdown:!0}},g={args:{...r,selected:!0,variant:"prominent",dropdown:!0}},m={args:{...r,disabled:!0}},p={name:"with keyboard shortcut (no trailing icon)",args:{...r,label:"Speichern",icon:"Save",showTrailingIcon:!1,shortcut:"Strg + S",selected:!1}};var h,w,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    selected: false
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,I,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    selected: false,
    variant: 'prominent'
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var b,T,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: ''
  }
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var A,$,R;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'showTrailingIcon true',
  args: {
    ...defaultArgs,
    showTrailingIcon: true
  }
}`,...(R=($=s.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var D,y,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'custom trailingIcon',
  args: {
    ...defaultArgs,
    showTrailingIcon: true,
    trailingIcon: 'ChevR'
  }
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var N,P,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'showTrailingIcon false',
  args: {
    ...defaultArgs,
    showTrailingIcon: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<ibk-navigation-menu-item
  label="Nutzerverwaltung"
  icon="Home"
  variant="regular"
  selected
  .showTrailingIcon=\\\${false}
></ibk-navigation-menu-item>\`
      }
    }
  }
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var H,z,L;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    selected: true
  }
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var U,x,F;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    selected: true,
    variant: 'prominent'
  }
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var M,_,E;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    selected: true,
    dropdown: true
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,j,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    selected: true,
    variant: 'prominent',
    dropdown: true
  }
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var B,G,J;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,V;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'with keyboard shortcut (no trailing icon)',
  args: {
    ...defaultArgs,
    label: 'Speichern',
    icon: 'Save',
    showTrailingIcon: false,
    shortcut: 'Strg + S',
    selected: false
  }
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const ce=["UnselectedRegular","UnselectedProminent","WithoutLeadingIcon","ShowTrailingIcon","WithCustomTrailingIcon","ShowTrailingIconFalse","SelectedStandaloneRegular","SelectedStandaloneProminent","SelectedDropdownRegular","SelectedDropdownProminent","Disabled","WithShortcut"];export{m as Disabled,g as SelectedDropdownProminent,u as SelectedDropdownRegular,d as SelectedStandaloneProminent,l as SelectedStandaloneRegular,s as ShowTrailingIcon,c as ShowTrailingIconFalse,o as UnselectedProminent,a as UnselectedRegular,i as WithCustomTrailingIcon,p as WithShortcut,t as WithoutLeadingIcon,ce as __namedExportsOrder,ie as default};
