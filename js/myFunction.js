Array.prototype.includes=null;
if (!Array.from) {
  console.warn('Su navegador no contiene "Array.from" method, necesario para "prettyJson" method, se implementara el provisto por MDN "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill"\n - Atte: CrystalMoon');
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isC = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toint = function (v) {
      var n = Number(v);
      if (isNaN(n)) { return 0; }
      if (n === 0 || !isFinite(n)) { return n; }
      return (n > 0 ? 1 : -1) * Math.floor(Math.abs(n));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (v) {
      var len = toint(v);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };
    return function from(arrayLike/*, mapFn, thisArg */) {
      var C = this;
      var items = Object(arrayLike);
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isC(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }
      var len = toLength(items.length);
      var A = isC(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  }());
}

function prittyJson(OBJ,CFG={},CLR={}){
OBJ=(CFG.noJson)?OBJ:JSON.parse(JSON.stringify(OBJ));

const WWU=[],
WWC=['if','else','return','async','await','switch','case','for','default','break','continue','Infinity','null',
	'true','false','with','private','long','short','try','catch','throw','new','do','while','finally','instanceof'],
WW=['var','let','const','class','console.log','function','extends','import','export','debugger','super','this',
	'typeof','void'],
S='span', 
D='div', 
T={
	s:'string',
	n:'number',
	b:'boolean',
	u:'undefined',
	o:'object',
	f:'function',
	sy:'symbol'
},
CM={
	p:'CM_p',
	l:'CM_l',
	o:'CM_o',
	a:'CM_a',
	bk:'CM_b',
	r:'CM_r',
	v:'CM_v',

	c:'CM_com',
	s:'CM_txt',
	b:'CM_bool',
	n:'CM_num',
	z:'CM_null',
	u:'CM_udf',
	k:'CM_key',
	x:'CM_x',
	w:'CM_w',
	wc:'CM_wc',
	wu:'CM_wu',
	ags:'CM_ags',
	"string":"CM_txt",
	"number":"CM_num",
	"boolean":"CM_bool",
	"undefined":"CM_udf",
	"object":"CM_null"
}, 
PT={
	g:'http://localhost/pritty/css/gral.css',
	c:'http://localhost/pritty/css/color.css'
},
C = e=>document.createElement(e), 
cs = (e,c)=>{e.classList.add(c)}, 
cu = (e,css)=>{
	let c='';
	switch (css) {
	case CM.c:c=CLR.comment;break;
	case CM.s:c=CLR.string;break;
	case CM.n:c=CLR.number;break;
	case CM.b:c=CLR.boolean;break;
	case CM.u:c=CLR.undef;break;
	case CM.x:c=CLR.maths;break;
	case CM.z:c=CLR.nulos;break;
	case CM.k:c=CLR.key;break;
	case CM.w:c=CLR.words;break;
	case CM.wc:c=CLR.words_ctrl;break;
	case CM.wu:c=CLR.words_user;break;
	case CM.ags:c=CLR.args;break;
	}
	if(c) e.style.color=c;
},
incl=(a,k,f)=>(Array.prototype.includes)?a.includes(k,f):((a,k,f)=>{
   let o=Object(a),len=o.length>>>0,n=f|0,j=Math.max(n>=0?n:len-Math.abs(n),0);
   if(len===0) return false;
   let sameValueZero=(x,y)=>x===y||(typeof x==='number'&& typeof y==='number'&&isNaN(x)&&isNaN(y));
   while(j<len){
    if(sameValueZero(o[j],k)) return true;
    j++;
   }
   return false;
})(a,k,f),
app = (e,n)=>{e.appendChild(n)}, 
inn = (e,a)=>(a)?e.innerHTML=a:e.innerHTML,
onn = e=>e.outerHTML||((n)=>{let d=C(D),h;app(d,n.cloneNode(true));h=d.innerHTML;d=null;return h})(e),
RW=(s,w,css)=>{
	let vl=C(S);
	cs(vl,CM.l);
	cs(vl,css);
	if(CLR) cu(vl,css);
	inn(vl,w);
	s=s.replace(new RegExp('^('+w+')|(){0}('+w+')(?!\\w+)','g'),onn(vl));
	return s;
},
t = e=>typeof e,
isA = e=>(!Array.isArray)?((arg)=>Object.prototype.toString.call(arg)==='[object Array]')(e):Array.isArray(e),
lcss=(userSheet=PT.c)=>{
let y=Array.from(document.getElementsByTagName('link')).find((l)=>l.href == PT.g);
if(!y){
	let c1=C('link'),c2=C('link');
  	c1.rel='stylesheet';
  	c1.href=PT.g
  	app(document.getElementsByTagName("head")[0],c1);

  	c2.rel='stylesheet';
  	c2.href=userSheet
  	app(document.getElementsByTagName("head")[0],c2);
}
};
let L=1, UC=(t(CLR)==T.s)?CLR:undefined;

function isF(fn){
let ls=fn.split('\n'), r=C(D), i=1;
cs(r,CM.r);
cs(r,'CM_ff');

for(let y=0;y<ls.length;y++){
	L+=2;
	if(CFG.functions=='arrow' && ls[y].indexOf('function')>=0){
		if(/(function)(?=( |)(\w+))/.test(ls[y]))
			ls[y]=ls[y].replace('{','=>{').replace('function','var').replace(new RegExp('(\\w*)(?=\\()'),'$1'+'=');
		else ls[y]=ls[y].replace('{','=>{').replace('function','');
	}else if(CFG.functions=='function' && ls[y].indexOf('=>')>=0){ 
		if(ls[y].indexOf('(')>=0){
			ls[y]='function'+ls[y];
			ls[y]=ls[y].replace('=>','');
		}else{
			let param=ls[y].substring(0, ls[y].indexOf('=>'));
			let b=ls[y].substring(ls[y].indexOf('=>'),ls[y].length-1);
			ls[y]='function('+param+')'+b;
			ls[y]=ls[y].replace('=>','{');
		}
	}
let z=false,t=false,k=null,q=false, ly=ls[y].trim(), ch=ly.split(''), lstr='', l=C(S), vlt=C(S), vl=C(S);
cs(l,CM.r);

for(let x=0;x<ch.length;x++){

	if(ch[x]=='(' && ly.indexOf('(')>0 ){	
		let a=ly.substring(0, x).split('').reverse().join('');
		if(/[:= *+\-./(}]{1}/.test(a)) a=a.substring(0,a.search(/[:= *+\-./(}]{1}/));
		if(a.length>0){
		a=a.split('').reverse().join('');
		if(!incl(WW,a)&&!incl(WWC,a)) WWU.push(' '+a,a);
		}
	}

	if(ch[x]=='/'&&ch[x+1]=='/'&&!t){
		q=true;
		let a=ch.slice(x).join('');
		x=ch.length;
		vlt=C(S);
		if(a.length>50) cs(vlt,'CM_tl');
		inn(vlt,a);
		cs(vlt,CM.c);
		if(CLR) cu(vlt,CM.c);
		lstr+=onn(vlt);
		cs(l,'CM_f'+i);
	}else{

	if(ch[x]==k){
		t=!t;
		inn(vlt,inn(vlt)+ch[x]);
		cs(vlt,CM.s);
		if(CLR) cu(vlt,CM.s);
		if(inn(vlt).length>50) cs(vlt,'CM_tl');
		lstr+=onn(vlt);
		k=null;
	}else if(/["']{1}/g.test(ch[x])){
		k=ch[x];
		t=!t;
		vlt=C(S);
		inn(vlt, ch[x]);
		cs(vlt,CM.s);
		if(CLR) cu(vlt,CM.s);
	}else if(!t){
	  if(isNaN(ch[x])){
	  	if(z) lstr+=onn(vlt);
	  	z=false;
	  }else if(!isNaN(ch[x])&&/[%\|&=+\-/<>*?,:[\(]{1}/.test(ch[x-1])){
	   	z=true;
	  	vlt=C(S);
		cs(vlt,CM.n);
		if(CLR) cu(vlt,CM.n);
	  } 
	  
	  if(!z){
		if(ch[x]=='{') {
			lstr+=ch[x];
			cs(l,'CM_f'+i);
			i++;
		}else if(ch[x]=='}'){
			app(l,vl);
			i--;
			cs(l,'CM_f'+i);
			lstr+=ch[x];
		}else if(ch[x]=='='){
			if(ch[x+1]=='>'){
			 	x++; 
			 	cs(vl,CM.w);
			 	if(CLR) cu(vl,CM.w);
		 		inn(vl,'=>');
			}else{ 
				cs(vl, CM.x);
				if(CLR) cu(vl,CM.x);
				inn(vl, ch[x]);
			}
			lstr+=onn(vl);
		}else if(/[%\|&+\-!/<>*?]{1}/.test(ch[x])){
			cs(vl,CM.x);
			if(CLR) cu(vl,CM.x);
			inn(vl, ch[x]);
			lstr+=onn(vl);
		}else{
			lstr+=ch[x];
			cs(l,'CM_f'+i);
		}
	  }else inn(vlt, inn(vlt)+ch[x]);
	}else inn(vlt,inn(vlt)+ch[x]);
	}
}
q=false;

	if((lstr.indexOf('=>')>0||lstr.indexOf('=&gt;')>0)||lstr.indexOf('function')>=0){
	  let mm=lstr.match(/(\w*(?=(<)([^/])))|([\w, ]*)(?=(\)|,){1,2}(<|{))/g);
	  if(mm) mm.forEach((m)=>{
		let pr=m.match(/([\w]+)/g);
		if(pr) pr.forEach((p)=>{
			if(p){
			  let vl1=C(S);
			  inn(vl1,p);
			  cs(vl1,CM.ags);
			  if(CLR) cu(vl1,CM.ags);
			  lstr=lstr.replace(new RegExp('('+p+')(?![\\w(]+)'), onn(vl1));
			}
		})
	  })
	}

	WWU.forEach((w)=>{
	if(lstr.search(new RegExp('^('+w+'){1}|(([.]|[ ]|){1})+('+w+')+(([:({]|[ ]){1})','g'))>=0)
			lstr=RW(lstr,w,CM.wu)
	});

	WWC.forEach((w)=>{
	if(lstr.search(new RegExp('^('+w+'){1}|(([}.(]|[ ]|){1}){1}('+w+')+((|[;:{(.]|[ ]){1})','g'))>=0)
			lstr=RW(lstr,w,CM.wc)
	});
	WW.forEach((w)=>{
	if(lstr.search(new RegExp('^('+w+'){1}|(([=.( ]){1}){1}('+w+')+(([;{(=.]([^"])|[ ]){1})','g'))>=0)
			lstr=RW(lstr,w,CM.w)
	});
	
	inn(l,lstr);
	app(r,l);
}
return r;
}

function R(obj,k,ia){
L+=2;
let cc=(!CFG.comillas)?'"':'', r=C(D), p=C(S), pp=C(S), atr=C(S), v=C(S), val=C(S), vv=C(S), J=obj;
cs(r,CM.r);
cs(r,'CM_r'+((CFG.indent>10)?10:CFG.indent));
cs(p,CM.p);

try{
if(CFG.allow) if(!incl(CFG.allow,k)&&!ia) throw 1;

inn(atr,(!ia)?cc+k+cc:'');
cs(atr,CM.k);
if(CLR) cu(atr,CM.k);
cs(v,CM.v);

if(t(J)==T.f){
	if(/(all)|(function)/.test(CFG.noJson)){ 
		inn(pp,':');
		app(v,isF(J.toString()));
	}else{
		inn(atr,' ');
		inn(pp,' ');
	}
}else if (t(J)==T.sy) {
	if(/(all)|(object)/.test(CFG.noJson)){ 
		inn(pp,':');
		let ss=C(S), t=C(S);
		cs(ss,CM.w);
		if(CLR) cu(ss,CM.w);
		cs(t,CM.s);
		if(CLR) cu(t,CM.s);
		inn(ss,'Symbol');
		inn(t,'"'+/\((.*)(?=(\)))/.exec(J.toString())[0].replace('(','')+'"');
		inn(v,onn(ss)+'('+onn(t)+'),');
	}else{
		inn(atr,' ');
		inn(pp,' ');
	}
}else if(t(J)!=T.o || J===null || t(J)===undefined){
	inn(pp,':');
	cc=(t(J)==T.s)?'"':'';
	if(t(J)==T.n&&/(Infinity)|(NaN)/.test(String(J))&&!/(all)|(object)/.test(CFG.noJson)) J=null;
	inn(val,cc+String(J)+cc);
	cs(val,CM[t(J)]);
	if(CLR) cu(val,CM[t(J)]);
	app(v,val);
	cs(vv,CM.l);
	inn(vv,',');
	app(v,vv);
}else if(isA(J)){ 
	cs(r,(!isA(J[0])&&t(J[0])==T.o&&J!==null)?CM.o:CM.a); 
	inn(pp,(inn(atr)!='')?':[':'['); 
	cs(pp,CM.l);
	let J1=J;
	for(let x = 0; x < J1.length; x++){
	let v1=C(S);
	cs(v1,CM.l);
		if(t(J1[x])==T.o&&J1[x]!==null) app(v,R(J1[x],x,'x'));
		else{
			let val=C(S);
			cc=(t(J1[x])==T.s)?'"':'';
			inn(val,cc+String(J1[x])+cc);
			cs(val,CM[t(J1[x])]);
			if(CLR) cu(val,CM[t(J1[x])]);
			inn(v1, ((x!=J1.length-1)? ',':''));
			app(v,val);
			app(v,v1);
		}
	}
	inn(vv,'],');
	app(v,vv);
}else{
  try{
  	J.toISOString();
  	inn(pp,':');
  	let dd=C(S);
  	cs(dd,CM.s);
  	if(CLR) cu(dd,CM.s);
  	if(/(all)|(object)/.test(CFG.noJson)){
		let n=C(S), D1=C(S), f=C(S);
		cs(n,CM.l);
		cs(n,CM.wc);
		if(CLR) cu(n,CM.wcl);
		inn(n,'new ');
		cs(D1,CM.w);
		if(CLR) cu(D1,CM.w);
		inn(D1,'Date');
		inn(dd,'"'+J.getFullYear() +'/'+(J.getMonth()+1)+'/'+J.getDate()+((J.getHours())?' '+J.getHours()+':'+
			((J.getMinutes()<10)?'0'+J.getMinutes():J.getMinutes())+':'+((J.getSeconds()<10)?'0'+J.getSeconds():J.getSeconds()):'')+'"');
		inn(f,'('+onn(dd)+')');
		app(val,n);
		app(val,D1);
		app(val,f);
	}else{
		inn(dd,'"'+J.toISOString()+'"');
		val=dd;
	}
	inn(vv,',');
	app(v,val);
	app(v,vv);
  }catch{
	cs(r,CM.o);
	inn(pp,(inn(atr)!='')?':{':'{'); 
	cs(pp,CM.bk);
	let oo=J;
	for (kk in oo){
		let v2=C(S), bb=R(oo[kk],kk);
		app(v,bb);
		cs(v2,CM.l);
	}
	inn(vv,'},');
	cs(vv,CM.bk);
	app(v,vv);
  } 
}
app(p,atr);
app(p,pp);
app(r,p);
app(r,v);		
}catch(e){ if(e!=1) inn(r,e) 
}finally{ return r }
}

lcss(UC);

let all=C(D), st=C(S), fin=C(S);
cs(all,'CM_all');
inn(st,(isA(OBJ))?'[':'{');
cs(st,CM.bk);
app(all,st);
if(CFG.font) all.style.fontFamily=CFG.font;
if(CLR.all) all.style.color=CLR.all;

for (key in OBJ) app(all,R(OBJ[key],key,isA(OBJ)));
inn(fin,(isA(OBJ))?']':'}');
cs(fin,CM.bk);
app(all,fin);

if(CFG.index){
let nrs=C(S);
cs(nrs,'CM_index');
if(CLR.index) nrs.style.color = CLR.index;
for (let x= 1;x<=L;x++){
	let a=C(S);
	inn(a,x+'|');
	app(nrs,a);
}
all.style.marginLeft='2em';
app(all,nrs);
}
return all;
}
