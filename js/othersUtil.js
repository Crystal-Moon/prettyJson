
const CARTELITO=document.getElementById('cartelito');
const LOADER=document.getElementById('loader');

function copy(btnCopy){
	let divLogin=btnCopy.parentNode;
	for (var i=divLogin.childNodes.length-1; i >= 0; i--) {
		let node=divLogin.childNodes[i];
		if(node.tagName=='INPUT'){
			node.select();
  			document.execCommand("copy");
  			cartelitoTemporal('yellow','copiado al portapapeles')
		}
	}
}

function cartelitoTemporal(color,mge){
	CARTELITO.style.backgroundColor = color;
	CARTELITO.childNodes[0].innerHTML=mge;
	window.setTimeout(()=>{
  		CARTELITO.style.display = 'block'; },1);
	window.setTimeout(()=>{
		CARTELITO.style.display = 'none';  },2000);
}



HTMLFormElement.prototype.toJSON = function(){
	let formJson={}
	let form=this;
	for (var x = form.length - 1; x >= 0; x--) {
		if(form[x].max)
			formJson[form[x].name]=parseFloat(form[x].value)
		else
			formJson[form[x].name]=form[x].value;
	}
	return formJson;
}

const SECCION_ARTICLES=document.getElementById('articles');
var countP=0;

function cargarSeccion(id_seccion){	
	if(countP==RutasAPI.length){
		setHorarios()
		document.getElementById('loadPage').style.display = 'none'
	}else{
	countP++;
	fetch(MY_SERVER+'/test/apiRecursos?p='+id_seccion)
	.then(res=>{
		if(res.status==200) return res.text()
		else return null;
	})
    .then(data=>{
	if(data){
    	let template = Handlebars.compile(data);
        let a=document.createElement('div')
        a.innerHTML=template()
        SECCION_ARTICLES.append(a)
     	cargarSeccion(RutasAPI[countP])
    }
	})
}
}

