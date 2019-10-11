const pruebas=document.getElementById('pruebas');
const MYCONFIG={
	functions: false, //'arrow', 'function', null, se pone tal cual esta
	noJson: 'all', //'all', 'function', 'date', 'symbol', null (se hace doble parseo)
	//CONFIG.dateVar: 'myVar', // 'myVar' ()=>d.getDate / d.getMonth / d.getYear [date1, date2, date3, ...]
	comillas: false, //true, false //default false
	index: true, //nueros del costado, true o false 
	//allow: ["valor_null","array_corto","array_largo","objeto_de_objetos"],	//matris de keys permitidas
	allow: null,	//SOLO TEXTOS de key
	indent:null, 	//cantidad de saltos desde la izq
	font:null 		//'"Inconsolata", monospace' ejemplo
}
const MYCOLOR={
	all: 'green',
	string: 'yellow',
	number: 'blue',
	boolean: 'blue',
	nulos: 'red',
	undef: 'red',
	key: 'brown',
	maths: 'violet',
	words: 'lime',
	words_ctrl: 'pink',
	words_user: 'red',
	args: 'orange'
}

function prittyJson(OBJ,CFG={},CLR={}){
	console.log('CLR',CLR)
let LINS=1;
/*
let CFG=(CONFIG)?{
	ff:CONFIG.functions,
	noJ:CONFIG.noJson,
	cc:CONFIG.comillas
}:{ff:null,noJ:null,cc:null};
*/
OBJ=(CFG.noJson)?OBJ:JSON.parse(JSON.stringify(OBJ));


const WWU=[],
WWC=['if','else','return','async','await','switch','case','for','default','break','continue','Infinity','null','true','false','with','private','long','short','try','catch','throw','new','while','finally','instanceof'],
WW=['var','let','const','class','console.log','function','extends','import','export','debugger','super','this','typeof','void'],

C = e=>document.createElement(e), 
cs = (e,c)=>{e.classList.add(c);}, 
clr = (e,css)=>{
	let c='';
	switch (css) {
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
app = (e,n)=>{e.appendChild(n);}, 
inn = (e,a)=>(a)?e.innerHTML=a:e.innerHTML,
onn = e=>e.outerHTML, 
RW=(s,w,css)=>{
	let vl=C(S);
	cs(vl,CM.l);
	cs(vl,css);
	if(CLR){
/*	switch (css) {
	case CM.w:if(CLR.words) clr(vl,CLR.words);break;
	case CM.wc:if(CLR.words_ctrl) clr(vl,CLR.words_ctrl);break;
	case CM.wu:if(CLR.words_user) clr(vl,CLR.words_user);break;
	} */
	clr(vl,css)
	}
	inn(vl,w);
	s=s.replace(new RegExp('('+w+')(?!\\w+)','g'),onn(vl));
	return s;
},
S='span', 
D='div', 
O='object', 
T={
	s:'string',
	n:'number',
	b:'boolean',
	u:'undefined',
	o:'object',
	f:'function',
	sy:'symbol',
	//d:'Date'

},//string, number, undefined, boolean, object,
CM={
	p:'CM_p',
	//c:'CM_c',
	l:'CM_l',
//	no:'CM_no',
	o:'CM_o',
	a:'CM_a',
	bk:'CM_b',
	r:'CM_r',
	
	v:'CM_v',

	//c:'CM_com',	//comunes
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
	"object":"CM_null",
}, 
/*
colores para usuario: objeto
CLR={
	all: ''
	string: ''
	number: ''
	boolean: ''
	nulos: ''
	undef: ''
	key: ''
	maths: ''
	words: ''
	words_ctrl: ''
	words_user: ''
	args: ''
}
*/
PT={
	g:'http://localhost/pritty/css/gral.css',
	c:'http://localhost/pritty/css/color.css'
}
t = e=>typeof e,
isA = e=>Array.isArray(e);

let UCOLOR=(t(CLR)==T.s)?CLR:undefined;


//-----------------------------------------------------------------
const cargarCSS=(userSheet=PT.c)=>{ //ruta completa de mi archivo server
console.log('userSheet',userSheet)
if(document.createStyleSheet) {
	console.log('IE!!!')
  	document.createStyleSheet(PT.g,0);
  	document.createStyleSheet(userSheet,1);
}
else{
	//let lks=Array.from(document.getElementsByTagName('link'))
//console.log(lks)
	let y=Array.from(document.getElementsByTagName('link')).find(function(l) {
		  return l.href == PT.g;	//aca tmb hay q usar ruta completa, sino no funciona
	});
//console.log('yata',yata)
	if(!y){

		var c1=C('link'),c2=C('link');
 	 	c1.rel='stylesheet';
  		c1.href=PT.g	//ruta completa de mi archivo server
  		app(document.getElementsByTagName("head")[0],c1);

  		c2.rel='stylesheet';
  		c2.href=userSheet
  		app(document.getElementsByTagName("head")[0],c2);
}
}
}

//-------------------------------------------------------------------------------------------
function esFuncion(fn){

let lineas=fn.split('\n')
//console.log(lineas)
let r=C(D);	
cs(r,CM.r);
cs(r,'CM_ff');

let i=1;
//let q=false;
for(let y=0;y<lineas.length;y++){
	LINS+=2;
	if(CFG.funcions=='arrow' && lineas[y].indexOf('function')>=0){
		if(/(function)(?=( |)(\w+))/.test(lineas[y])){
			lineas[y]=lineas[y].replace('{','=>{').replace('function','var').replace(new RegExp('(\\w*)(?=\\()'),'$1'+'=')
			//console.log('linea sin problemas',lineas[y])
			//console.log('linea replace exp',lineas[y].replace(new RegExp('(\\w*)(?=\\()'),'$1'+'='))
			//lineas[y]=lineas[y].replace(new RegExp('(\\w*)(?=\\()'),'$1'+'=')
		}else{
			lineas[y]=lineas[y].replace('{','=>{').replace('function','');
		}
	}else if(CFG.functions=='function' && lineas[y].indexOf('=>')>=0){ 
		if(lineas[y].indexOf('(')>=0){
			lineas[y]='function'+lineas[y];
			lineas[y]=lineas[y].replace('=>','')
		}else{
			let param=lineas[y].substring(0, lineas[y].indexOf('=>'));
			let b=lineas[y].substring(lineas[y].indexOf('=>'),lineas[y].length-1);
			lineas[y]='function('+param+')'+b;
			lineas[y]=lineas[y].replace('=>','{')
		}
	}
let z=false,t=false,k=null;
//let zz=0;
	let ly=lineas[y].trim()
	let chars=ly.split('');
	//let space='   ', 
	let lstr=''

	let l=C(S);
//cs(l,CM.c); //clor
cs(l,CM.r);


	//let z=true;
let vlt=C(S);	
//let vl=C(S);
	for (var x=0; x<chars.length; x++){

//inn(vlt,inn(vlt)+chars[x]) //posiblemente aqui
	//console.log('ly es |'+ly+'|')
//console.log('ly es |'+ly+'|')

if(chars[x]=='(' && ly.indexOf('(')>0 ){	
//console.log('ly es |'+ly+'|')
	let a=ly.substring(0, x);
	//console.log(a)
	
	a=a.split('').reverse().join('');
	//console.log('a en reverse |'+a+'|')
	if(/[:= *+\-./(]{1}/.test(a)){ 
		a=a.substring(0,a.search(/[:= *+\-./(]{1}/));
//		console.log('segundo sub |'+a+'|')
	}
	if(a.length>0){
	a=a.split('').reverse().join('');
//	console.log('a listo para push |'+a+'|')
	if(!WW.includes(a)&&!WWC.includes(a)) {
		WWU.push(' '+a,a);
		//WWU.push(a);
//		console.log('se pusheo |'+a+'|')
	}
	}

}


let vl=C(S);
//console.log('inicio del bucle--- aqui sh es: ',chars[x])

	if(chars[x]==k){
		t=!t;
		inn(vlt,inn(vlt)+chars[x])
		cs(vlt,CM.s)	//color
		if(CLR) clr(vlt,CM.s)
			console.log(CLR.string)
		if(inn(vlt).length>50) cs(vlt,'CM_tl')
		lstr+=onn(vlt);
		k=null;
	}else if(/["']{1}/g.test(chars[x])){
		k=chars[x];
		t=!t;
		vlt=C(S)
		//vlt.id='vlt';
		inn(vlt, chars[x])
		cs(vlt,CM.s)	//color
		if(CLR) clr(vlt,CM.s)
	}else if(!t){
	  if(isNaN(chars[x])){
	  	if(z) lstr+=onn(vlt);
	  	z=false;
	  }else if(!isNaN(chars[x])&&/[%\|&=+\-/<>*?,:[\(]{1}/.test(chars[x-1])){
	   		z=true;
	  	 vlt=C(S)
		 cs(vlt,CM.n)	//color
		 if(CLR) clr(vlt,CM.n)
	  } 
	  
	  if(!z){
		if(chars[x]=='{') {
			lstr+=chars[x];
			cs(l,'CM_f'+i);
			i++;
		}else if(chars[x]=='}'){
		//	vl=C(S)
			//cs(vl,'CM_l');
			//cs(vl,CM.c);	//clor
			app(l,vl);
			i--;
			cs(l,'CM_f'+i);
			lstr+=chars[x];
		}else if(chars[x]=='='){
			//vl=C(S)
			if(chars[x+1]=='>'){
			 	x++; 
			 	cs(vl,CM.w); 	//color
			 	if(CLR) clr(vl,CM.w)
		 		inn(vl, '=>')
			}else{ 
				cs(vl, CM.x);	//color
				if(CLR) clr(vl,CM.x)
				inn(vl, chars[x]);
			}
			lstr+=onn(vl);
		//}else if(chars[x]=='+'){ /* - * / = & | < > ! return await async if else switch case: break default continue    ----usar reqExp*/
		}else if(/[%\|&=+\-!/<>*?]{1}/.test(chars[x])){	//let vl=C(S);
			//vl=C(S)
			cs(vl,CM.x);	//color
			if(CLR) clr(vl,CM.x)
			inn(vl, chars[x]);
			//app(l,vl);
			lstr+=onn(vl);
		}else{
			lstr+=chars[x];
			cs(l,'CM_f'+i);
		}
	  }else{ 
	  	cs(vlt, CM.n);	//color
	  	if(CLR) clr(vlt,CM.n)
		inn(vlt, inn(vlt)+chars[x]);
	  }

	}else{
		inn(vlt,inn(vlt)+chars[x])
		cs(vlt,CM.s)	//color
		if(CLR) clr(vlt,CM.s)
	}

	} //-- fin for character

//buscar reeemplazar si (su anterior es uun espacio || un simbolo) && (su siguiente es un espacio || un simbolo)

//var re = new RegExp("\\w+");
//var re1 = /\w+/;

//var exp=/(^([}.)>]|[ ]|){1})+(book)+(([;:{(.<]|[ ]){1})/g

	WWU.forEach( function(w){ 	//priemero las propias, luego las de sistema
	//	if(lstr.indexOf(w)>=0){
	//		lstr=RW(lstr,w,CM.wu);
	//}
	let exp=new RegExp('(([.]|[ ]|){1})+('+w+')+(([:({]|[ ]){1})','g')
	//console.log(lstr)
	//console.log(exp)

	if(lstr.search(exp)>=0){
			lstr=RW(lstr,w,CM.wu);	//color
		}

	});

	WWC.forEach( function(w){ 	//lo mismo para clase 'fun'
		
		//if(lstr.indexOf(w)>=0){
			//lstr.replaceAll(w,RW(w)); 
		//	lstr=RW(lstr,w,CM.wc);
		
	//}
	let exp=new RegExp('(([}.]|[ ]|){1}){1}('+w+')+((|[;:{(.]|[ ]){1})','g')
	//console.log(lstr)
	//console.log(exp)
	if(lstr.search(exp)>=0){
			lstr=RW(lstr,w,CM.wc);	//color
		}

	});
	WW.forEach( function(w){ 	//lo mismo para clase 'fun'
	
	//	if(lstr.indexOf(w)>=0){
	//		lstr=RW(lstr,w,CM.w);
	//}
	//console.log('lstr (([=.]|[ ]|){1}){1}(class)+(([;{(=.]([^"])|[ ]){1})
	let exp=new RegExp('(([=.]|[ ]|){1}){1}('+w+')+(([;{(=.]([^"])|[ ]){1})','g')
	//console.log(lstr)
	//console.log(exp)
	//console.log(w)
	if(lstr.search(exp)>=0){
		//console.log(lstr)
			lstr=RW(lstr,w,CM.w);	//color
		}
	});

	//-------------------------------------- params bonito
	
	let solo_letras_args=/([\w*]+)/g
	//let mejor_hasta_hr=/([\w ,]*)(?=(\)| ){1,5}((=>)|(=&gt;)))|(\w*(?=(| ){1}((=>)|(=&gt;))))/g
	let mejor_hasta_hr2=/([\w ,]*)(?=(\)|,){1,2}(<))|(\w*(?=(|){1}(<)([^/])))/g
	let mejor=/([\w, ]*)(?=(\)|,){1,2}(<|{))|(\w*(?=(<)([^/])))/g
	let m2=/(\w*(?=(<)([^/])))|([\w, ]*)(?=(\)|,){1,2}(<|{))/g 
//	console.log('lstr |'+lstr)
	if((lstr.indexOf('=>')>0||lstr.indexOf('=&gt;')>0)||lstr.indexOf('function')>=0){
	//ineresantisimo el uso de exc
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec
	var re = m2;
	var result = re.exec(lstr);
	var mmtc=lstr.match(m2);
	//console.log('mmtc',mmtc)
	//console.log('lstr |'+lstr)
	//console.log('resul',result)
	
	if(mmtc){
	mmtc.forEach((m)=>{	
	//	console.log('result 0', result[0])
		let params=m.match(solo_letras_args)
	//console.log('params array',params)
		if(params) {
			//console.log(params)
			params.forEach((p)=>{
		
			let vl1=C(S);
			inn(vl1,p)
		//console.log('p',p)
			cs(vl1,CM.ags)	//color
			if(CLR) clr(vl1,CM.ags)

	//	console.log('onn vl1',onn(vl1))
			lstr=lstr.replace(new RegExp('('+p+')(?!\\w+)'), onn(vl1))
		//console.log(vl1)
	//	console.log('lstr despues del rep',lstr)
			})//, params)	
		}
	})
	}

}
//-----------------------------------------------
	
	inn(l,lstr);
	
	app(r,l);
	
} // fin for lineas


return r;
}// fin de esFuncion


//--------------------------------------------------------------
//console.log(CFG.allow)
function R(obj,k,ia){
var cc=(CFG.comillas)?'"':'';
	LINS+=2;
	
let r=C(D),	p=C(S), pp=C(S), atr=C(S), v=C(S), val=C(S), vv=C(S), J=obj;
cs(r,CM.r);
cs(r,'CM_r'+((CFG.indent>10)?10:CFG.indent))
cs(p,CM.p);

//cs(pp,CM.c);	//clor
//console.log('r',r);
//console.log('k',k)
try{
	//console.log('no include',!CFG.allow.includes(k))
	//console.log('no ia',!ia)
	if(CFG.allow) if(!CFG.allow.includes(k)&&!ia) throw 1;

/*
if(!ia){
 inn(atr,cc+k+cc);
//if (isNaN(k)&&CFG.noJson) inn(atr,cc+k+cc);
//else if(!isNaN(k)) inn(atr,cc+k+cc);

}
else inn(atr,'');
*/
inn(atr,(!ia)?cc+k+cc:'');


cs(atr,CM.k);	//color
if(CLR) clr(atr,CM.k)

cs(v,CM.v);
//cs(vv,CM.c);	//clor

if(t(J)==T.f){
	//console.log('es funcion o un Symbol')
	
//	console.log('CFG noJson',CFG.noJ)
	//if (CFG.noJson==('all'||'function')) 
	if(/(all)|(function)/.test(CFG.noJson)){ 
		inn(pp,':');
		app(v ,esFuncion(J.toString()) );
	//cs(r, t(J))
}else{
	inn(atr,' ')
	inn(pp,' ')
}
}else if (t(J)==T.sy) {
//	console.log('es symbol');
	if(/(all)|(object)/.test(CFG.noJson)){ 
//		console.log('comun',J)
//		console.log('toS',J.toString())

		inn(pp,':');
		let ss=C(S), t=C(S);
		cs(ss,CM.w);	//color
		if(CLR) clr(ss,CM.w)
		cs(t,CM.s);		//color
		if(CLR) clr(t,CM.s)
		inn(ss,'Symbol');

		//var result = /(?<=(\())(.*)(?=(\)))/.exec(J.toString())[0];
		//console.log(result)
		inn(t,'"'+/\((.*)(?=(\)))/.exec(J.toString())[0].replace('(','')+'"');
		inn(v,onn(ss)+'('+onn(t)+')');
}else{
	inn(atr,' ')
	inn(pp,' ')
}
}else if(t(J)!=T.o || J===null || t(J)===undefined){ 

	//cs(r,'n'); 
	inn(pp,':');
	cc=(t(J)==T.s)?'"':'';
	if(t(J)==T.n&&/(Infinity)|(NaN)/.test(String(J))&&!/(all)|(object)/.test(CFG.noJson)) J=null;
	inn(val, cc+String(J)+cc);
	cs(val, CM[t(J)] );
	if(CLR){ clr(val,CM[t(J)])
		/*switch (t(J)) {
		case T.s:if(CLR.string) clr(val,CLR.string);break;
		case T.n:if(CLR.number) clr(val,CLR.number);break;
		case T.b:if(CLR.boolean) clr(val,CLR.boolean);break;
		case T.u:if(CLR.undef) clr(val,CLR.undef);break;
		case T.o:if(CLR.nulos) clr(val,CLR.nulos);break;
		}*/
	}
	app(v,val);
	cs(vv,CM.l);
	inn(vv,',');
	app(v,vv);

}else if(isA(J)){ 
	cs(r,(!isA(J[0])&&t(J[0])==T.o&&J!==null)?CM.o:CM.a); 
	inn(pp,(inn(atr)!='')?':[':'['); 
	cs(pp,CM.l);

	 let J1=J;
	for (var x = 0; x < J1.length; x++) {
	let v1=C(S);
	//cs(v1,CM.c);	//clor
	cs(v1,CM.l);
	
		if(t(J1[x])=='object'&&J1[x]!==null){
			let aa=R(J1[x],x,'ia');
	
			app(v, aa );

			//app(v,val);
		//app(v,v1);
		}else{
			let val=C(S);
			cc=(t(J1[x])==T.s)?'"':'';
			inn(val,cc+String(J1[x])+cc)
			cs(val, CM[ t(J1[x]) ] );

			if(CLR){ clr(val,CM[ t(J1[x]) ])
		/*switch (t(J1[x])) {
		case T.s:if(CLR.string) clr(val,CLR.string);break;
		case T.n:if(CLR.number) clr(val,CLR.number);break;
		case T.b:if(CLR.boolean) clr(val,CLR.boolean);break;
		case T.u:if(CLR.undef) clr(val,CLR.undef);break;
		case T.o:if(CLR.nulos) clr(val,CLR.nulos);break;
		}*/
	}
			inn(v1, ((x!=J1.length-1)? ',':''));
			app(v,val);
			app(v,v1);
			
		}
	}

//inn(vv, (x!=J1.length-1)? ',':']');
inn(vv,'],');
app(v,vv);
}else{ 

  try{
  	J.toISOString();
  	//cs(r,'n'); 
  	inn(pp,':');
  	let dd=C(S);
  	cs(dd,CM.s);	//color
  	if(CLR) clr(dd,CM.s)
  	if(/(all)|(object)/.test(CFG.noJson)){
	
	//if(/(all)|(date)/.test(CFG.noJson)) app(v ,valorIlegal(J,t(J)) );
	//else{
		let n=C(S), D1=C(S), f=C(S);
		cs(n,CM.l);
		cs(n,CM.wc);	//color
		if(CLR) clr(n,CM.wcl)
		inn(n,'new ');
		cs(D1,CM.w);	//color
		if(CLR) clr(D1,CM.w)
		inn(D1,'Date');
		//cs(f,CM.c);		//clor

		
		
		inn(dd,'"'+J.getFullYear() +'/'+(J.getMonth()+1)+'/'+J.getDate()+
			((J.getHours())?' '+J.getHours()+':'+
				((J.getMinutes()<10)?'0'+J.getMinutes():J.getMinutes())+':'+
			((J.getSeconds()<10)?'0'+J.getSeconds():J.getSeconds()) :'')+'"');
		inn(f,'('+onn(dd)+'),');
		
		app(val,n);
		app(val,D1);
		app(val,f);
	//}
	//console.log('es un objeto Date')
	//valorIlegal(J,'Date');
}else{
inn(dd,'"'+J.toISOString()+'"')
val=dd;
inn(vv,',')
		
}
app(v,val);
		app(v,vv);
  }catch{

	cs(r,CM.o); 
	//inn(pp,':{');
	inn(pp,(inn(atr)!='')?':{':'{'); 
	cs(pp,CM.bk);

let oo=J, e=0;
	for (kk in oo) {

//let val=c(S);
		let v2=C(S);
		//cs(v2,CM.c);	//clor
		let bb=R(oo[kk],kk);

		app(v,bb);
//		app(val,bb );
		e++;
		cs(v2,CM.l);
		//inn(v2, (Object.keys(oo).length!=e)? '':'}');
		//app(v,v2);
	}

	
inn(vv,'},');
//app(v,val);
	//	inn(vv, (Object.keys(oo).length-1!=e)? ',':'},');
		cs(vv,CM.bk)
	app(v,vv);
  } 
}
app(p,atr);
app(p,pp);

app(r,p);
app(r,v);		
//	}	



	
//return r;
}catch(e){
	//return r;
	console.log(e)
	if(e!=1) inn(r,e)
}finally{
	return r;
}


} // fin de mySuoer alias R-------------------------------------------------------------------

cargarCSS(UCOLOR);


let all=C(D);
cs(all,'CM_all');
let st=C(S);
inn(st,(isA(OBJ))?'[':'{');
cs(st,CM.bk);
//cs(st,CM.c);	//clor
app(all,st);
if(CFG.font) all.style.fontFamily = CFG.font
if(CLR.all) all.style.color = CLR.all




for (key in OBJ) {
		app(all,R(OBJ[key],key,isA(OBJ)));

	}
	let fin=C(S);
inn(fin,(Array.isArray(OBJ))?']':'}')
//cs(fin,CM.c);	//clor
cs(fin,CM.bk);
app(all,fin)

if(CFG.index){
let nros=C(S);
//nros.id='nros'
cs(nros,'CM_nros')
for (var i = 1; i <= LINS ;i++) {
	let aa=C(S);
	inn(aa,i+'|')
	app(nros,aa)
}
//console.log('altura all',all.offsetHeight)
all.style.marginLeft = '2em'
app(all,nros)
}

	return all;
} //fin de prittyJson

//--------------------------------------



//--------------------------------
//String.prototype.replaceAll = (old, nnew)=>this.replace(new RegExp(old, 'g'), nnew);


String.prototype.replaceAll = function(search, replacement){
	let target=this;
	return target.replace(new RegExp(search, 'g'), replacement)
}





function type (value) {
  var r;
  return ((typeof value === 'object') ? 
    (value === null) ? 
      'null' : 
      (typeof value.constructor === 'function' &&
       (r = value.constructor.name) !== 'Object') ? 
        (r === '' || r === undefined) ? 
          Function.prototype.toString.call (value.constructor)
                  .match (/^\n?(function|class)(\w?)/)[ 2 ] || 'anonymous' : 
          r : 
        Object.prototype.toString.call (value).match (/\s(.*)\]/)[ 1 ] : 
    (typeof value === 'number') ? 
      (isNaN (value)) ? 
        'NaN' : 
        'number' : 
      typeof value);
}


/*
//declaracion
:root {
  --main-bg-color: brown;
}

//usos
.uno {
  color: white;
  background-color: var(--main-bg-color);
}

// Obtener la variable desde el estilo inline
element.style.getPropertyValue("--my-var");
// Obtener variable desde cualquier lugar
getComputedStyle(element).getPropertyValue("--my-var");

// Establecer variable en estilo inline
element.style.setProperty("--my-var", jsVar + 4);

//cambiar el content de un before con JS
https://es.stackoverflow.com/questions/35150/c%C3%B3mo-cambiar-after-y-before-de-un-elemento-con-javascript

*/