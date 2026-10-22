import{g as d,b as u}from"./iframe-DkRrOnhD.js";import"./preload-helper-C1FmrZbK.js";const{events:p,args:m,argTypes:k}=d("ibk-table"),I={title:"Components/Table",component:"ibk-table",args:m,argTypes:{...k,variant:{control:{type:"select"},options:["regular","decent"]},headers:{control:"object"},rows:{control:"object"},footers:{control:"object"}},parameters:{actions:{handles:p}},render:e=>u`
    <ibk-table
      .variant="${e.variant}"
      ?zebra="${e.zebra}"
      ?hover="${e.hover}"
      .caption="${e.caption}"
      .headers="${e.headers}"
      .rows="${e.rows}"
      .footers="${e.footers}"
    ></ibk-table>
  `},t={args:{variant:"regular",zebra:!0,hover:!0,caption:"Cloud Infrastructure Health - Real-time Status",headers:[{label:"Status"},{label:"Instanz-ID"},{label:"Region",icon:"&#xe91c;"},{label:"CPU Last",align:"right"},{label:"Latenz",align:"right"},{label:"Aktionen",align:"center"}],rows:[[{content:'<ibk-chip label="Online" type="success" variant="decent"></ibk-chip>'},"i-04f2923da","eu-central-1",{content:"12%",align:"right"},{content:"14ms",align:"right"},{content:"Details",align:"center"}],[{content:'<ibk-chip label="Warnung" type="warning" variant="decent"></ibk-chip>'},"i-923da4f20","us-east-1",{content:"88%",align:"right"},{content:"120ms",align:"right"},{content:"Prüfen",align:"center"}],[{content:'<ibk-chip label="Kritisch" type="alert" variant="decent"></ibk-chip>'},"i-23da04f29","eu-west-1",{content:"99%",align:"right"},{content:"450ms",align:"right"},{content:"Neustart",align:"center"}],[{content:'<ibk-chip label="Offline" type="default" variant="decent"></ibk-chip>'},"i-a4f20923d","ap-southeast-1",{content:"0%",align:"right"},{content:"-",align:"right"},{content:"Aktivieren",align:"center"}]],footers:["Gesamt: 4 Instanzen","","",{content:"Ø Last: 49%",align:"right"},"",""]}},n={args:{variant:"decent",zebra:!1,hover:!0,caption:"Postgres - users_metadata Table Schema",headers:[{label:"Feldname"},{label:"Typ"},{label:"Nullable"},{label:"Standardwert"}],rows:[["uuid","UUID",{content:"NEIN",class:"ibkAlert"},"gen_random_uuid()"],["user_id","INTEGER",{content:"NEIN",class:"ibkAlert"},"-"],["settings","JSONB","JA","{}"],["last_login","TIMESTAMP","JA","CURRENT_TIMESTAMP"],["is_active","BOOLEAN",{content:"NEIN",class:"ibkAlert"},"WAHR"]]}};var a,r,i,l,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'regular',
    zebra: true,
    hover: true,
    caption: 'Cloud Infrastructure Health - Real-time Status',
    headers: [{
      label: 'Status'
    }, {
      label: 'Instanz-ID'
    }, {
      label: 'Region',
      icon: '&#xe91c;'
    }, {
      label: 'CPU Last',
      align: 'right'
    }, {
      label: 'Latenz',
      align: 'right'
    }, {
      label: 'Aktionen',
      align: 'center'
    }],
    rows: [[{
      content: '<ibk-chip label="Online" type="success" variant="decent"></ibk-chip>'
    }, 'i-04f2923da', 'eu-central-1', {
      content: '12%',
      align: 'right'
    }, {
      content: '14ms',
      align: 'right'
    }, {
      content: 'Details',
      align: 'center'
    }], [{
      content: '<ibk-chip label="Warnung" type="warning" variant="decent"></ibk-chip>'
    }, 'i-923da4f20', 'us-east-1', {
      content: '88%',
      align: 'right'
    }, {
      content: '120ms',
      align: 'right'
    }, {
      content: 'Prüfen',
      align: 'center'
    }], [{
      content: '<ibk-chip label="Kritisch" type="alert" variant="decent"></ibk-chip>'
    }, 'i-23da04f29', 'eu-west-1', {
      content: '99%',
      align: 'right'
    }, {
      content: '450ms',
      align: 'right'
    }, {
      content: 'Neustart',
      align: 'center'
    }], [{
      content: '<ibk-chip label="Offline" type="default" variant="decent"></ibk-chip>'
    }, 'i-a4f20923d', 'ap-southeast-1', {
      content: '0%',
      align: 'right'
    }, {
      content: '-',
      align: 'right'
    }, {
      content: 'Aktivieren',
      align: 'center'
    }]],
    footers: ['Gesamt: 4 Instanzen', '', '', {
      content: 'Ø Last: 49%',
      align: 'right'
    }, '', '']
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source},description:{story:`Infrastructure Health Dashboard
Updated: Buttons replaced with text links/actions`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};var s,o,b,g,h;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'decent',
    zebra: false,
    hover: true,
    caption: 'Postgres - users_metadata Table Schema',
    headers: [{
      label: 'Feldname'
    }, {
      label: 'Typ'
    }, {
      label: 'Nullable'
    }, {
      label: 'Standardwert'
    }],
    rows: [['uuid', 'UUID', {
      content: 'NEIN',
      class: 'ibkAlert'
    }, 'gen_random_uuid()'], ['user_id', 'INTEGER', {
      content: 'NEIN',
      class: 'ibkAlert'
    }, '-'], ['settings', 'JSONB', 'JA', '{}'], ['last_login', 'TIMESTAMP', 'JA', 'CURRENT_TIMESTAMP'], ['is_active', 'BOOLEAN', {
      content: 'NEIN',
      class: 'ibkAlert'
    }, 'WAHR']]
  }
}`,...(b=(o=n.parameters)==null?void 0:o.docs)==null?void 0:b.source},description:{story:"Database Schema Review",...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};const N=["InfrastructureHealth","SchemaReview"];export{t as InfrastructureHealth,n as SchemaReview,N as __namedExportsOrder,I as default};
