fetch("people.com/Perla-stto")
.then( person => {
	var yo = new Developer(person,{
	  name: "Perla Marina",
	  last_name: "Smaniotto",
	  age: 26,
	  skills: ["Java","JS","Node","CSS","MySQL","SQLite","HTML5"],
	  about_me: "yo soy bla bla..ufherhgkjegknkvnlefvñdfvñdm"
	  			"lsjdlkjvlsjlsdjljsdljlj fksdlk sdjfjlajflsjldv kslk"
	  			"jlksdjvlsdv sdfhwehek sdhjvhjksehskdhv sdjsdhfk...",
	  learn: function(data){
		this.skills.add(data);
		return "It's funny";
	  }
	});

	return yo.activity;		// 'activity' estara en verde

}).then( projetcs => {
	projetcs[0].resume();	
	->	name: 'akbook',
	->  type: 'MVC (model-view-controller)'
	->	date: 'Agost 18´',
	->	techs: ['Java','JavaFx','SQLite'],
	->	github: 'http//link_del_proyecto'

	projetcs[1].resume();
	->	name: 'Adios English for classmates',
	->  type: 'WebSite'
	->	date: 'May 19´',
	->	techs: ['HTML5','CSS','JS']
	->	github: 'http//link_del_proyecto'

	projetcs[2].resume();
	->	name: 'akbook2',
	->  type: 'MVC (model-view-controller)'
	->	date: 'September 19´',
	->	techs: ['Java','JavaFx','SQLite']
	->	github: 'http//linksdvsdvsdv'

}).finally( ()=> {
	yo.github = "http//mi_github";		//los 'yo' en blanco,
	yo.linkedin = "http//mi_linkedin";  //las palabras q le siguen
	yo.telephone = "1234456789"			//estarab en verde
	yo.correo = "perla.stto@gmmm.com"
	yo.curriculum = download_CV();
})