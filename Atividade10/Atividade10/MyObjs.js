var aluno1 = new Object();

//Primeira forma de criar Objeto
aluno1.ra = "0030482021014";
aluno1.nome = "Vitor Moraes de Sousa";
alert("PRIMEIRA FORMA:" +
      "\n\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);


//Segunda forma de criar Objeto
aluno1["ra"] = "0030482021014";
aluno1["nome"] = "Vitones";
alert("SEGUNDA FORMA:" +
      "\n\nNome: " + aluno1["nome"] + 
      "\nRA: " + aluno1["ra"]);


//Terceira forma de criar Objeto
var ra = "ra", nome = "nome"
aluno1[ra] = "0030482021014";
aluno1[nome] = "Vitolers";
alert("TERCEIRA FORMA:" +
      "\n\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);


