
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
	objeto_symbol: Symbol('foo (algo1234)Name'),
	objeto_date: new Date(),
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

		let res= a/2;
		switch(abc()>99) {
			case label_1:
				let a=822;
				break;
			default:
				let b='texto'
				break;
		}
		return res;
	},
	funcion_arrow: (a='texto',b,c)=>{
		const unaVariable_larga="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatem magnam, necessitatibus! Voluptatum officia non aliquid totam ducimus molestias, harum blanditiis, alias voluptatibus facere nisi quia quibusdam, sit sint ullam."
		let res= a+b+c;
		if(res>0){
			a=10;
			res=b+c;
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