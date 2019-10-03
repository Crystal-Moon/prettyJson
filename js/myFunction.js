const pruebas=document.getElementById('pruebas');

let config={
	functions: 'arrow', //'arrow', 'function', null, se pone tal cual esta
	noJson: 'function', //'all', 'function', 'date', 'symbol', null (se hace doble parseo)
	dateVar: 'myVar', // 'myVar' ()=>d.getDate / d.getMonth / d.getYear [date1, date2, date3, ...]
	space: 'myDibujo', //'myDibujo', 123, null(se toma dos espacios) //no hacer!!
	comillas: false //true, false

}


const WWU=[]
const WWC=['if','else','return','async','await','switch','case','for','default','break','continue','Infinity','null','true','false','with','private','long','short','try','catch','throw','new','while','finally','instanceof'];
const WW=['var','let','const','class ','console.log','function','extends','import','export','debugger','super','this','typeof','void']

const C = e=>document.createElement(e), 
cs = (e,c)=>{e.classList.add(c);}, 
app = (e,n)=>{e.appendChild(n);}, 
inn = (e,a)=>(a)?e.innerHTML=a:e.innerHTML,
onn = e=>e.outerHTML, 
S='span', 
D='div', 
O='object', 
T={
	//"string":"txt",
	//"number":"num",
	//"boolean":"bul",
	//"undefined":"und",
	//"object":"nul",
	s:'string',
	n:'number',
	b:'boolean',
	u:'undefined',
	o:'object',
	f:'function',
	sy:'symbol',
	d:'Date'

},//string, number, undefined, boolean, object,
CM={
	p:'CM_p',
	n:'CM_n',
	l:'CM_l',
	no:'CM_no',
	o:'CM_o',
	a:'CM_a',
	b:'CM_b',
	r:'CM_r',
	at:'CM_at',
	v:'CM_v',
"string":"txt",
	"number":"num",
	"boolean":"bul",
	"undefined":"und",
	"object":"nul",
}, 
t = e=>typeof e,
isA = e=>Array.isArray(e);


function prettyJson(OBJ,cfg){
cfg={
	comillas:false,
	noJson: 'all'
};
//OBJ=(cfg.ilegal)?OBJ:JSON.parse(JSON.stringify(OBJ));


let all=C('div');
let st=C(S);
inn(st,(isA(OBJ))?'[':'{')
cs(st,'b');
cs(st,'no');
app(all,st)	


//--------------------------------------------------------------

function R(obj,k){
	let cc=(cfg.comillas)?'"':'';
let r=C('div');	
cs(r,'row')
	//for (k in obj) {
let p=C(S);
cs(p,'p');

let pp=C(S);
cs(pp,'no');

let atr=C(S);
if(isNaN(k)) inn(atr,cc+k+cc);
else inn(atr,'');

cs(atr,'atr');

let v=C(S);
cs(v,'v');
let val=C(S);

let vv=C(S);
cs(vv,'no');
let tmp1=obj;

if(t(tmp1)==T.f || t(tmp1)==T.sy){
	//console.log('es funcion o un Symbol')
	inn(pp,':');
	if (cfg.noJson) app(v ,valorIlegal(tmp1,t(tmp1)) );
	//cs(r, t(tmp1))

}else if(t(tmp1)!=T.o || tmp1===null){ 

	cs(r,'n'); 
	inn(pp,':');
	cc=(t(tmp1)==T.s)?'"':'';
	inn(val, cc+String(tmp1)+cc);
	cs(val, CM[ t(tmp1) ] );
	app(v,val);
	cs(vv,'l');
	inn(vv,',');
	app(v,vv);

}else if(isA(tmp1)){ 
	cs(r,(!isA(tmp1[0])&&t(tmp1[0])==T.o&&tmp1!==null)?'o':'a'); 
	inn(pp,(inn(atr)!='')?':[':'['); 
	cs(pp,'l');

	 let tmp=tmp1;
	for (var x = 0; x < tmp.length; x++) {
	let v1=C(S);
	cs(v1,'no');
	cs(v1,'l');
	
		if(t(tmp[x])=='object'&&tmp[x]!==null){
			let aa=R(tmp[x],x);
	
			app(v, aa );

			//app(v,val);
		//app(v,v1);
		}else{
			let val=C(S);
			cc=(t(tmp[x])==T.s)?'"':'';
			inn(val,cc+String(tmp[x])+cc)
			cs(val, CM[ t(tmp[x]) ] );
			inn(v1, ((x!=tmp.length-1)? ',':''));
			app(v,val);
			app(v,v1);
			
		}
	}

//inn(vv, (x!=tmp.length-1)? ',':']');
inn(vv,'],');
app(v,vv);
}else{ 
  try{
	let d=tmp1.toISOString();
	//console.log('es un objeto Date')
	//valorIlegal(tmp1,'Date');
  }catch{

	cs(r,'o'); 
	//inn(pp,':{');
	inn(pp,(inn(atr)!='')?':{':'{'); 
	cs(pp,'b');

let oo=tmp1;
let e=0;
	for (kk in oo) {

//let val=c(S);
		let v2=C(S);
		cs(v2,'no');
		let bb=R(oo[kk],kk);

		app(v,bb);
//		app(val,bb );
		e++;
		cs(v2,'l');
		//inn(v2, (Object.keys(oo).length!=e)? '':'}');
		//app(v,v2);
	}

	
inn(vv,'},');
//app(v,val);
	//	inn(vv, (Object.keys(oo).length-1!=e)? ',':'},');
		cs(vv,'b')
	app(v,vv);
  } 
}
app(p,atr);
app(p,pp);

app(r,p);
app(r,v);		
//	}	



	
return r;


function valorIlegal(value,z){
	let x='';
	switch (z) {
		case null:
		case undefined:

			break;
		case T.f:
			x=value.toString();
			x=esFuncion(x)
			break;
		case T.d:
			// statements_1
			break;
		case T.sy:
			x=value.toString();
			break;
		default:
			console.log('llegue al default de Ilegal :/')
			break;
	}
return x;

}
//-------------------------------------------------------------------


//------------------------------------------------------------------
let fff=/((&){1,2})|((=){1})|((\|){1,2})|((\*){1})|((<){1})|((\>){1})|((%){1})|((!){1})/
let ggg=/[%\|&=+\-!/<>*?]{1}/g

} // fin de mySuoer alias R-------------------------------------------------------------------

for (key in OBJ) {
		app(all,R(OBJ[key],key));

	}
	let fin=C(S);
inn(fin,(Array.isArray(OBJ))?']':'}')
cs(fin,'no');
cs(fin,'b',);
app(all,fin)
	return all;
}

//--------------------------------------

function esFuncion(fn){
//saltos de linea
	/*
	jsonString=jsonString.replaceAll(',"',',\n"').replaceAll('{','{\n')
	.replaceAll('}','\n}').replaceAll(',{',',\n{');
*/

	//for (k in obj) {
/*
let p=C(S);
cs(p,'p');

let pp=C(S);
cs(pp,'no');

let atr=C(S);
if(isNaN(k)) inn(atr,cc+k+cc);
else inn(atr,'');

cs(atr,'atr');


let v=C(S);
cs(v,'v');
cs(v,'vf')
let val=C(S);

let vv=C(S);
cs(vv,'no');
let tmp1=obj;
*/
	//mas colorcitos en codigos :3
/*	jsonString=jsonString.replace('false','<span class="b">false</span>')
	.replace('false','<span class="b">false</span>').replace('true','<span class="b">true</span>')
	.replace('200','<span class="ok">200</span>').replace('201','<span class="ok">201</span>')
	.replace('400','<span class="alert">400</span>').replace('401','<span class="alert">401</span>')
	.replace('403','<span class="alert">403</span>').replace('404','<span class="alert">404</span>')
	.replace('500','<span class="error">500</span>')
*/	
let cfg={
	functions:false
}
	
	//variables
//preElement.innerHTML='';

let lineas=fn.split('\n')
//console.log(lineas)
let r=C('div');	
cs(r,'row');
cs(r,'ff');

let i=1;
let q=false;
for(let y=0;y<lineas.length;y++){

	if(cfg.functions=='arrow' && lineas[y].indexOf('function')>=0){
		if(/(function)(?=( |)(\w+))/.test(lineas[y])){
			lineas[y]=lineas[y].replace('{','=>{').replace('function','var').replace(new RegExp('(\\w*)(?=\\()'),'$1'+'=')
			//console.log('linea sin problemas',lineas[y])
			//console.log('linea replace exp',lineas[y].replace(new RegExp('(\\w*)(?=\\()'),'$1'+'='))
			//lineas[y]=lineas[y].replace(new RegExp('(\\w*)(?=\\()'),'$1'+'=')
		}else{
			lineas[y]=lineas[y].replace('{','=>{').replace('function','');
		}
	}else if(cfg.functions=='function' && lineas[y].indexOf('=>')>=0){ 
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
let z=false;
let t=false;
let k=null;
//let zz=0;
	let ly=lineas[y].trim()
	let chars=ly.split('');
	//let space='   ', 
	let lstr=''

	let l=C(S);
cs(l,'no');
cs(l,'row');


//---------------------------------------------------	expreciones para params en arrow
/*
let args_y_parentesis=/(^([>(,]|[ ]|){1})+(.\w)+(([,)<]|[ ]){1})/g
let solo_letras_args=/([\w*]+)/g
let funcional=/(([(])(.*)(([)])|[ ]|())(=>))|(([ ]|)(\w*)([ ]|())(=>))/g
let para_1_solo_param=/(\w{1,}(?=((=>)|(\)=>))))/g
let casi_casi=/(\w{1,}(?=((=>)|(\)=>))))|(\w{1,}(?=((,)|(\)))))((.*)?=(=>))/g //segir probando
let mejor_hasta_hr=/([\w ,]*)(?=(\)| ){1,3}(=>))|(\w*(?=(| ){1}(=>)))/g


if(ly.indexOf('=>')>0){
	//ineresantisimo el uso de exc
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec
	var re = mejor_hasta_hr;
	var result = re.exec(ly);
	console.log('ly |'+ly)
	console.log('re-lasteIndex',re.lastIndex)
	console.log('resul',result[0])
	console.log('----------------------------------------------')
	

	let params=result[0].match(solo_letras_args)
	console.log('params array',params)
	if(params) params.forEach((p)=>{
		
		let vl1=C(S);
		inn(vl1,p)
		console.log('p',p)
		console.log('onn vl1',onn(vl1))
		ly=ly.replace(p, onn(vl1))
		console.log(vl1)
		console.log('ly despues del rep',ly)
	})//, params)

	
	
	
}
*/
//----------------------------------------------------------------
	

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
		cs(vlt,'txt')
		if(inn(vlt).length>50) cs(vlt,'tl')
		lstr+=onn(vlt);
		k=null;
	}else if(/["']{1}/g.test(chars[x])){
		k=chars[x];
		t=!t;
		vlt=C(S)
		//vlt.id='vlt';
		inn(vlt, chars[x])
		cs(vlt,'txt')
	}else if(!t){
	  if(isNaN(chars[x])){
	  	if(z) lstr+=onn(vlt);
	  	z=false;
	  }else if(!isNaN(chars[x])&&/[%\|&=+\-/<>*?,:[]{1}/.test(chars[x-1])){
	   		z=true;
	  	 vlt=C(S)
		 cs(vlt,'num')
	  } 
	  
	  if(!z){
		if(chars[x]=='{') {
			lstr+=chars[x];
			cs(l,'f'+i);
			i++;
		}else if(chars[x]=='}'){
		//	vl=C(S)
			//cs(vl,'l');
			cs(vl,'no');
			app(l,vl);
			i--;
			cs(l,'f'+i);
			lstr+=chars[x];
		}else if(chars[x]=='='){
			//vl=C(S)
			if(chars[x+1]=='>'){
			 	x++; 
			 	cs(vl,'ww'); 
		 		inn(vl, '=>')
			}else{ 
				cs(vl, 'comm');
				inn(vl, chars[x]);
			}
			lstr+=onn(vl);
		//}else if(chars[x]=='+'){ /* - * / = & | < > ! return await async if else switch case: break default continue    ----usar reqExp*/
		}else if(/[%\|&=+\-!/<>*?]{1}/g.test(chars[x])){	//let vl=C(S);
			//vl=C(S)
			cs(vl, 'comm');
			inn(vl, chars[x]);
			//app(l,vl);
			lstr+=onn(vl);
		}else{
			lstr+=chars[x];
			cs(l,'f'+i);
		}
	  }else{ 
	  	cs(vlt, 'num');
		inn(vlt, inn(vlt)+chars[x]);
	  }

	}else{
		inn(vlt,inn(vlt)+chars[x])
		cs(vlt,'txt')
	}

	} //-- fin for character

//buscar reeemplazar si (su anterior es uun espacio || un simbolo) && (su siguiente es un espacio || un simbolo)

var re = new RegExp("\\w+");
var re1 = /\w+/;

var exp=/(^([}.)>]|[ ]|){1})+(book)+(([;:{(.<]|[ ]){1})/g

	WWU.forEach( function(w){ 	//priemero las propias, luego las de sistema
	//	if(lstr.indexOf(w)>=0){
	//		lstr=RW(lstr,w,'wwu');
	//}
	let exp=new RegExp('(([.]|[ ]|){1})+('+w+')+(([:(]|[ ]){1})','g')
	//console.log(lstr)
	//console.log(exp)

	if(lstr.search(exp)>=0){
			lstr=RW(lstr,w,'wwu');
		}

	});

	WWC.forEach( function(w){ 	//lo mismo para clase 'fun'
		
		//if(lstr.indexOf(w)>=0){
			//lstr.replaceAll(w,RW(w)); 
		//	lstr=RW(lstr,w,'wwc');
		
	//}
	let exp=new RegExp('(([}.]|[ ]|){1}){1}('+w+')+((|[;:{(.]|[ ]){1})','g')
	//console.log(lstr)
	//console.log(exp)
	if(lstr.search(exp)>=0){
			lstr=RW(lstr,w,'wwc');
		}

	});
	WW.forEach( function(w){ 	//lo mismo para clase 'fun'
	
	//	if(lstr.indexOf(w)>=0){
	//		lstr=RW(lstr,w,'ww');
	//}
	let exp=new RegExp('(([=.]|[ ]|){1}){1}('+w+')+(([;{(=.]|[ ]){1})','g')
	//console.log(lstr)
	//console.log(exp)
	if(lstr.search(exp)>=0){
			lstr=RW(lstr,w,'ww');
		}
	});

	//-------------------------------------- params bonito
	
	let solo_letras_args=/([\w*]+)/g
	//let mejor_hasta_hr=/([\w ,]*)(?=(\)| ){1,5}((=>)|(=&gt;)))|(\w*(?=(| ){1}((=>)|(=&gt;))))/g
	let mejor_hasta_hr2=/([\w ,]*)(?=(\)|,){1,2}(<))|(\w*(?=(|){1}(<)([^/])))/g
//	console.log('lstr |'+lstr)
	if((lstr.indexOf('=>')>0||lstr.indexOf('=&gt;')>0)||lstr.indexOf('function')>=0){
	//ineresantisimo el uso de exc
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec
	var re = mejor_hasta_hr2;
	var result = re.exec(lstr);
	//console.log('lstr |'+lstr)
	//console.log('re-lasteIndex',re.lastIndex)
	//console.log('resul',result)
	//console.log('----------------------------------------------')
	
	if(result){
	let params=result[0].match(solo_letras_args)
	//console.log('params array',params)
	if(params) params.forEach((p)=>{
		
		let vl1=C(S);
		inn(vl1,p)
		//console.log('p',p)
		cs(vl1,'arg')

	//	console.log('onn vl1',onn(vl1))
		lstr=lstr.replace(new RegExp('('+p+')(?!\\w+)'), onn(vl1))
		//console.log(vl1)
	//	console.log('lstr despues del rep',lstr)
	})//, params)	
	}
}
//-----------------------------------------------
	
	inn(l,lstr);
	
	app(r,l);
	
} // fin for lineas
//preElement.innerHTML=ls;

return r;
}// fin de esFuncion

//--------------------------------
//String.prototype.replaceAll = (old, nnew)=>this.replace(new RegExp(old, 'g'), nnew);


String.prototype.replaceAll = function(search, replacement){
	let target=this;
	return target.replace(new RegExp(search, 'g'), replacement)
}


const RW=(s,w,css)=>{
	let vl=C(S);
	cs(vl,'l');
	cs(vl,css);
	inn(vl,w);
	s=s.replace(new RegExp('('+w+')(?!\\w+)','g'),vl.outerHTML);
	return s;
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