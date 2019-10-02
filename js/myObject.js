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
	objeto_date: new Date(),
	valor_null: null,
	booleann: true,
	array_cuasi: ["hola",["hola","soy","un","array"],"soy","un","array",[5436456,479275,"array",242,true,false,"con bolleans"],"con arrays"],
	array_array: [["array","uno"],["array","dos"],["array","tres"],["array","cuatro"],["cindo",5436456,479275,"array",242,true,false,"con bolleans"]],

	array_de_objetos:[
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
		}
	],
	vars45:345,
	var12:'variable numerica',
	funcion_comun: function(a,b,c){
		let res=a+b+c;
		let var45="variable num";
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
		let nombre_cifred='algo';
		let myObj={
			propaA:123,
			propB:'propiedad',
			propC:null
		}
		let res= a/2;
		if(res>0&&3+1==algo1234){
			a=10;
			res-=a;
		}
		return res;
	},
	funcion_arrow: (a,b,c)=>{
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
		const variable_con_reservas="probando palabras reservadas var let const default."
		let res= param/2;
		if(res>0){
			param=10;
			res-=param;
		}
		res=res.concat(abc());
		res=res.concat(abc(abc('text',123,res)));
		return res;
	},
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