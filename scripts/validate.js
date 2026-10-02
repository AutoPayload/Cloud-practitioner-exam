const fs=require('fs');
const html=fs.readFileSync(require('path').join(__dirname,'..','clf-c02-study-guide.html'),'utf8');
const QB=[],DEC=[],CARDS=[];
function Q(t,x,q,o,n){QB.push({t,x:!!x,q,o,n:n||1});} function D(name,cat,t,what,cue){DEC.push({name,cat,t,what,cue});} function C(t,f,b){CARDS.push({t,f,b});}
const dataStart=html.indexOf('function C(t, f, b)'); const dataEnd=html.indexOf('</script>', dataStart);
eval(html.slice(html.indexOf('\n',dataStart), dataEnd));
const topicsSrc=html.match(/const TOPICS = \{([\s\S]*?)\n  \};/)[1];
const topics=[...topicsSrc.matchAll(/^\s+(\w+):\s+\{ d: (\d)/gm)].map(m=>[m[1],+m[2]]);
const T=Object.fromEntries(topics);
let bad=0;
QB.forEach(q=>{ if(!T[q.t]){console.log('BAD TOPIC',q.t,q.q.slice(0,50));bad++;}
  const want=q.n===1?4:5; if(q.o.length!==want){console.log('BAD OPTS',q.o.length,q.q.slice(0,60));bad++;}
  q.o.forEach(o=>{ if(o.length!==2||!o[0]||!o[1]){console.log('BAD OPTION',q.q.slice(0,60));bad++;} });
  if(q.n>1 && !/\(Select (TWO|THREE)\.\)/.test(q.q)){console.log('MR without Select',q.q.slice(0,60));}
});
DEC.forEach(d=>{ if(!T[d.t]){console.log('BAD DEC TOPIC',d.name,d.t);bad++;} });
CARDS.forEach(c=>{ if(!T[c.t]){console.log('BAD CARD TOPIC',c.t,c.f);bad++;} });
const seen=new Map(); QB.forEach(q=>{ if(seen.has(q.q)){console.log('DUP',q.q.slice(0,70));bad++;} seen.set(q.q,1); });
const per={}; QB.forEach(q=>per[q.t]=(per[q.t]||0)+1);
const dom={1:0,2:0,3:0,4:0}; QB.forEach(q=>dom[T[q.t]]++);
console.log('questions',QB.length,'multi',QB.filter(q=>q.n>1).length,'extra',QB.filter(q=>q.x).length);
console.log('by domain',dom); console.log('by topic',per);
console.log('decoder',DEC.length,'fact cards',CARDS.length,'total cards',CARDS.length+DEC.filter(d=>d.cue).length);
// chapters present
const chapterIds=[...html.matchAll(/<article class="chapter" id="t-(\w+)"/g)].map(m=>m[1]);
const missing=topics.map(t=>t[0]).filter(k=>!chapterIds.includes(k)); console.log('chapters',chapterIds.length,'missing',missing);
// giveaway stat for single-answer
let longest=0, single=0; QB.filter(q=>q.n===1).forEach(q=>{single++; const L=q.o.map(o=>o[0].length); if(L[0]>Math.max(...L.slice(1))) longest++;});
console.log('correct strictly longest', longest,'/',single, Math.round(100*longest/single)+'%');
console.log('bad',bad);
