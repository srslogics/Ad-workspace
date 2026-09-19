const assert=require('node:assert/strict');
const V=require('../dist/validation.js');
const base=()=>({role:'Administrator',members:[{name:'Demo',email:'demo@example.com',role:'Administrator',account:'All accounts'}],settings:{name:'Workspace',threshold:50000},requests:[],groups:{},health:{},schedules:[]});
let count=0;function test(name,fn){fn();count++;console.log('PASS '+name)}
const valid=s=>V.operations(s,['Meta / Demo'],[101]);
test('valid state',()=>assert(valid(base())));
for(const value of [null,[],{},'bad'])test('reject malformed '+JSON.stringify(value),()=>assert(!valid(value)));
for(const value of [NaN,Infinity,-1,0,1e9])test('reject invalid threshold '+value,()=>{const s=base();s.settings.threshold=value;assert(!valid(s))});
test('reject unknown role',()=>{const s=base();s.role='Root';assert(!valid(s))});
test('reject unknown account',()=>{const s=base();s.members[0].account='Unknown';assert(!valid(s))});
test('reject orphan campaign groups',()=>{const s=base();s.groups[999]=[];assert(!valid(s))});
test('reject invalid ad state',()=>{const s=base();s.groups[101]=[{name:'g',target:'audience',ads:[{name:'a',copy:'text',creative:'image',status:'Published'}]}];assert(!valid(s))});
test('reject unbounded member state',()=>{const s=base();s.members=Array(101).fill(s.members[0]);assert(!valid(s))});
test('reject invalid health',()=>{const s=base();s.health['Meta / Demo']={status:'Unknown',time:'Now'};assert(!valid(s))});
test('accept bounded approval and schedule',()=>{const s=base();s.requests=[{id:1,campaign:101,before:100,amount:200,by:'Campaign manager',status:'Pending'}];s.schedules=[{name:'Weekly',email:'demo@example.com',client:'Demo',frequency:'Monday at 09:00',paused:false}];assert(valid(s))});
console.log(`${count} validation checks passed`);
