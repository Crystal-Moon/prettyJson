

String.substring(start: int, end: int)
function writeIndentJson(preElement, jsonString){
	//saltos de linea
	jsonString=jsonString.replaceAll(',"',',\n"').replaceAll('{','{\n')
	.replaceAll('}','\n}').replaceAll(',{',',\n{');

	//mas colorcitos en codigos :3
	jsonString=jsonString.replace('false','<span class="b">false</span>')
	.replace('false','<span class="b">false</span>').replace('true','<span class="b">true</span>')
	.replace('200','<span class="ok">200</span>').replace('201','<span class="ok">201</span>')
	.replace('400','<span class="alert">400</span>').replace('401','<span class="alert">401</span>')
	.replace('403','<span class="alert">403</span>').replace('404','<span class="alert">404</span>')
	.replace('500','<span class="error">500</span>')
	
	//variables
	preElement.innerHTML='';
	let chars=jsonString.split('');
	let space='   ', txt='', i=0;

	//escritura
	for (var x=0; x<chars.length; x++) {
		if(chars[x]=='{') {
			txt+=chars[x];
			i++;
		}else if(chars[x]=='}') {
			i--;
			txt=txt.substring(0, txt.length-space.length)
			txt+=chars[x];
		}else if(chars[x]=='\n'){
			txt+=chars[x]+space.repeat(i);
		}else{
			txt+=chars[x]
		}
	}
	preElement.innerHTML=txt;
}

String.prototype.replaceAll = (old, nnew)=> this.replace(new RegExp(old, 'g'), nnew);

/*
generalidades de json
https://lenguajejs.com/p/javascript/caracteristicas/json

indentar con JSON.stringify()
https://programacion.net/articulo/indentar_json_con_javascript_1170

code pritty de ggl
https://github.com/google/code-prettify

ejemplo de stringify con funciones
https://medium.com/javascript-in-plain-english/how-to-use-stringify-and-parse-in-javascript-6b637b571a32
https://www.dyn-web.com/tutorials/php-js/json/filter.php
https://stackoverflow.com/questions/30280322/how-to-stringify-objects-through-jsons-replacer-function

diferenciar entre object y array

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

generar una hoja de stylos css con javascript

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.cssClass { color: #F00; }';
document.getElementsByTagName('head')[0].appendChild(style);

document.getElementById('someElementId').className = 'cssClass';


*/