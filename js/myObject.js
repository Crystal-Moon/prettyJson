const p=document.getElementById('pruebas');
const MYCONFIG={
	functions: false, //'arrow', 'function', null, se pone tal cual esta
	noJson: 'all', //'all', 'function', 'date', 'symbol', null (se hace doble parseo)
	//CONFIG.dateVar: 'myVar', // 'myVar' ()=>d.getDate / d.getMonth / d.getYear [date1, date2, date3, ...]
	comillas: true, //true, false //default true
	index: true, //nueros del costado, true o false 
	//replacer: ["valor_null","array_corto","array_largo","objeto_de_objetos"],	//matris de keys permitidas
	//replacer: [0,2,5],	//matris de keys permitidas
	replacer: null,
	indent:undefined, 	//cantidad de saltos desde la izq
	font:null 		//'"Inconsolata", monospace' ejemplo
}
const MYCOLOR={
	all: 'skyblue',
	string: 'yellow',
	number: '#f75db0',
	boolean: '#f75db0',
	null: '#894723',
	undef: '#850382',
	key: '#775392',
	x: '#738944',
	words: '#759267',
	words_ctrl: '#775235',
	words_user: '#721140',
	args: 'yellow',
	index: '#123689',
	comment: '#478952'
}

const myObject={
	
	texto_chico: "soy pocas letras",
	texto_largo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet omnis beatae distinctio esse tempora enim incidunt sed rem exercitationem eligendi ullam accusantium dolores aperiam nihil perferendis quas, reprehenderit fugit! Ratione.",
	numero: 3456,
	array_corto: ["hola","soy","un","array"],
	array_largo: ["Lorem"," ipsum dolor sit amet, ","consectetur"," adipisicing elit.",
				" Excepturi"," corporis eum ","iusto quia tempore ","officiis ","magnam officia ",
				"deserunt ","aspernatur ","nulla libero, ","veniam doloremque ","dolor architecto ",
				"suscipit facilis,"," doloribus molestias ","minima?"],
	array_numeros:[43,144,4546,7564,2123,46456,34677,3234,57657,],
	array_misto:["hola",5436456,"soy","un",479275,"array",242,567,11,"mixto",true,false,"con bolleans"],
	objeto:{
		text1:"texto en objeto 1",
		text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
		num1:52344,
		array_in:["hola",5436456,"soy","un",479275,"array",242,567,11,"mixto","en array_in del objeto"]
	},
	objeto_symbol: Symbol('foo (algo1234)Name'),//comentario
	objeto_date: new Date(), //comentario
	valor_null: null,
	valor_undefined:undefined,
	"booleann": true,
	array_cuasi: ["hola",["hola","soy","un","array"],"soy","un","array",[5436456,479275,"array",242,true,false,"con bolleans"],"con arrays"],
	array_array: [["array","uno"],["array","dos"],["array","tres"],["array","cuatro"],["cindo",5436456,479275,"array",242,true,false,"con bolleans"]],
	vars45:345,
	var12:'variable numerica',
	funcion_comun: function(a=56,b,c){
		class Rect{
  			constructor(height, width){
    		this.height = height;
    		this.width = width;
  			}
		}
		do{
			b=b+c+444;
		}while(a>90)
		let r1=new Rect();
		let r2= new Rect(234,145);
		let var88=1234;
		if(res>0){
			a=10;
			res=b+c;
		}
		return res;
	},
	function_com_1_param: function(a){
		var algo1234='{un texto con simbolos}[= 0/2 %nada]';
		for(var i = algo1234.length - 1; i >= 0; i--){
			algo1234[i]=''
		}

		let res= a/2;	//comentario cn numeros 8593068
		switch(abc()>99) {
			case label_1:
				let a=822;	//comentario con "texto!"
				break;
			default:
				let b='texto'
				break;
		}
		return res;
	},
	funcion_arrow: (a='texto',b,c)=>{
		const unaVariable_larga="Lorem ipsum dolor //sit amet, consectetur adipisicing elit. Deserunt voluptatem magnam, necessitatibus! Voluptatum officia non aliquid totam ducimus molestias, harum blanditiis, alias voluptatibus facere nisi quia quibusdam, sit sint ullam."
		let res= a+b+c;
		if(res>0){
			a=10;
			res=b+c;
		}
		try {
			//Lorem ipsum dolor //sit amet, consectetur adipisicing elit. Deserunt voluptatem magnam, necessitatibus! Voluptatum officia non aliquid totam ducimus molestias, harum blanditiis, alias voluptatibus facere nisi quia quibusdam, sit sint ullam."
		} catch(e) {
			//statements
			console.log(e);
		}
		return res;
	},
	arrow_1_param: param=>{
		function abc(){
			return 'Hola';
		}
		const variable_con_reservas="probando palabras reservadas varletconst default."
		let res= param/2;
		if(res>0){
			param=10;
			res-=param;
		}else if(res<0){
			param='texto'
		}else abc(param)
		res=res.concat(abc(666));
		res=res.concat(abc(abc('text',123,res)));
		return res;
	},
	array_de_objetos:[
		{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:Infinity
		},{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:NaN
		},{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		}
	],
	objeto_de_objetos:{
		ob1:{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},
		obj2:{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},
		obj3:{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},
		obj4:{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		}
	}
}


let myArray=[
{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},{
			text1:"texto in 1",
			text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, consequatur, quia dolorum iusto voluptates corrupti quas iure repellat voluptatum eveniet, numquam cupiditate optio mollitia eum! Nemo odio sapiente, aliquam unde!",
			num1:52344
		},
["array","uno"],["array","dos"],["array","tres"],["array","cuatro"],["cindo",5436456,479275,"array",242,true,false,"con bolleans"]
]

/*
emojis
https://gist.github.com/rxaviers/7360908

generalidades de json
https://lenguajejs.com/p/javascript/caracteristicas/json

indentar con JSON.stringify()
https://programacion.net/articulo/indentar_json_con_javascript_1170

code pritty...
https://github.com/google/code-prettify
https://github.com/kasparsd/code-prettify
https://github.com/padolsey-archive/prettyprint.js 		//lo convierte en tablas :D

ejemplo de stringify con funciones
https://medium.com/javascript-in-plain-english/how-to-use-stringify-and-parse-in-javascript-6b637b571a32
https://www.dyn-web.com/tutorials/php-js/json/filter.php
https://stackoverflow.com/questions/30280322/how-to-stringify-objects-through-jsons-replacer-function

https://github.com/ricval/Documentacion/blob/master/Markdown/daringfireball/syntax.md

compatibiliades
https://caniuse.com/

markdown
https://joedicastro.com/pages/markdown.html
*/
/**
isNaN(NaN);          // true
isNaN(1);            // false: 1 is a number
isNaN(-2e-4);        // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity);     // false: Infinity is a number
isNaN(true);         // false: converted to 1, which is a number
isNaN(false);        // false: converted to 0, which is a number
isNaN(null);         // false: converted to 0, which is a number
isNaN("");           // false: converted to 0, which is a number
isNaN(" ");          // false: converted to 0, which is a number
isNaN("45.3");       // false: string representing a number, converted to 45.3
isNaN("1.2e3");      // false: string representing a number, converted to 1.2e3
isNaN("Infinity");   // false: string representing a number, converted to Infinity
isNaN(new Date);     // false: Date object, converted to milliseconds since epoch
isNaN("10$");        // true : conversion fails, the dollar sign is not a digit
isNaN("hello");      // true : conversion fails, no digits at all
isNaN(undefined);    // true : converted to NaN
isNaN();             // true : converted to NaN (implicitly undefined)
isNaN(function(){}); // true : conversion fails
isNaN({});           // true : conversion fails
isNaN([1, 2]);       // true : converted to "1, 2", which can't be converted to a number
*/

/*
Copyright (c) 2019 Perla Smaniotto ('CrystalMoon').  All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
   1. Redistributions of source code must retain the above copyright
	  notice, this list of conditions and the following disclaimer.
   2. Redistributions in binary form must reproduce the above copyright
	  notice, this list of conditions and the following disclaimer in the
	  documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY CrystalMoon ``AS IS'' AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL CrystalMoon OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
SUCH DAMAGE.
The views and conclusions contained in the software and documentation are
those of the authors and should not be interpreted as representing official
policies, either expressed or implied, of CrystalMoon.
 AUTHOR Perla Smaniotto [CrystalMoon](https://www.linkedin.com/in/perla-stto/)
 VERSION 0.1.0
 UPDATED 29-10-2011
*/


falta fecha de update aca arriba !!!!!