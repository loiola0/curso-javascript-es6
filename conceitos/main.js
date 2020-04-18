/* operacoes com array
const arr = [1,2,4,5,6];

const newArr = arr.map(function(item, index){
    return item +index;
});

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total+next;
});

console.log(sum);


const filter = arr.filter(function(item){
    return item %2 ===0;
});

console.log(filter);


const find = arr.find(function(item){
    return item === 4;
});

console.log(find);


const arr = [1,4,5,6];


const newArr = arr.map(item=>item*2);

console.log(newArr);



const soma = (a=5,b=3) => a+b;

console.log(soma());
console.log(soma(2));


const usuario = {
    nome: 'Victor',
    idade:19,
    endereco:{
        cidade:'Tauá',
        estado:'Ceará'
    },
};

function mostrarNome({nome,idade,endereco:{cidade}}){
    console.log(nome, idade, cidade);
}

mostrarNome(usuario);


//instalar->@babel/plugin-proposal-object-rest-spread

//REST:
const arrTest = [1,2,4,6];

const [a,b, ...resto] = arrTest;

console.log(a);//1
console.log(b);//2
console.log(resto);//[4,6]


function soma(a,b,...params){
    return params;
}

console.log(soma(1,2,4,78,9,0,-12));


//SPREAD: Permite destribuir o conteúdo de qualquer objeto iterável em múltiplos elementos.

const usuario1 = {
    nome:'victor',
    idade:19,
    empresa:'Fachada S/A'
};

const usuario2 = {...usuario1, nome:'Gabriel'};

console.log(usuario2);

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const arr3 = [...arr1,...arr2];

console.log(arr3);


 * Se pensarmos no operador spread como alguém que tira os elementos 
 *  de uma caixa e espalha em outro lugar, podemos dizer que o
 *  parâmetro rest faz o oposto: ele coleta elementos espalhados 
 *  e guarda em uma caixa.
 * 
 * 
 

//template Literals

 const nome = 'Victor';
 const idade = 19;

 //console.log('Meu nome é '+nome+' e tenho '+idade+' anos');
 
 //usando o template literals
 console.log(`Meu nome é ${nome} e tenho ${idade} anos`);


 //object-short-syntax(sintáxe curta de objeto);

 const user={
     nome,
     idade,
     empresa:'Fachada'
 };
 console.log(user);
 

 //Exercices-pdf

 //Exercice-1

 
 class Usuario{
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;

    }

    isAdmin(){
        return this.admin;
    }
  
 }

 class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }

    isAdmin(){
       return this.admin;
   }
}

 const User1 = new Usuario('email@teste.com', 'senha123');
 const Adm1 = new Admin('email@teste.com', 'senha123');
 console.log(User1.isAdmin()); // false
 console.log(Adm1.isAdmin()); // true

 
//Exercice 2


//exercice-2.1

 const usuarios = [  
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' }, 
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = [];
const pushIdade = usuarios.map(item => idades.push(item.idade));
//console.log(idades);

//exercice-2.2

const users = [];

const usersPush = usuarios.filter(item =>{
     if((item.empresa ==='Rocketseat')&& (item.idade>=18)){
         users.push(item);
     }
});

//console.log(users);

//exercice-2.3



const workGoogle = usuarios.find(item =>item.empresa === 'Google');

//console.log(workGoogle);


//exercice-2.4
const result = [];

 usuarios.map(item => {
    return item.idade = item.idade*2;
});



 usuarios.filter(item=>{
   if(item.idade<=50){
      result.push(item);
   }
});

console.log(result);

*/
/*
//Exercice-3

// exercice-3.1
const arr = [1, 2, 3, 4, 5];


arr.map(item => item + 10);

//exerice-3.2

// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

/**
 * 
 * No Lugar de utilizar uma função mais "verbosa"
 * ex:
 * 
 * function mostraIdade(usuario) { 
 *     return usuario.idade;
 * }
 * 
 * utliza-se a arrow function
 

const mostraIdade = (usuario) => usuario.idade;

//console.log(mostraIdade(usuario));




//exercice-3.3

// Dica: Utilize uma constante pra function
const nome = "Victor";
const idade = 23;

const mostraUsuario = (nome = 'Diego',idade = 19) => { return {nome, idade}};

console.log(mostraUsuario(nome,idade)); 

console.log(mostraUsuario(nome));



//exercice-3.4

const promise = ()  => new Promise((resolve, reject) => resolve());


//Exercice-4


//exercice-4.1

const {nome,endereco:{cidade,estado}} = {
    nome: 'Rocketseat', 
        endereco: {   
        cidade: 'Rio do Sul',    
        estado: 'SC',  
        }
};

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


//exercice-4.2

function mostraInfo({nome,idade}) {  
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));






//Exercice-5


//exercice-5.1

const [x,...y] = [1, 2, 3, 4, 5, 6];

//console.log(x); // 1
//console.log(y); // [2, 3, 4, 5, 6]


// function soma...

function soma(...params){
   return  params.reduce((item,next)=> item+next);
}


console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1,2)); // 3



//exercice-5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
        endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};


const usuario2 = {...usuario, nome:'Gabriel'};

console.log(usuario2);


const usuario3 = {...usuario,endereco:{cidade:'Lontras'}};

console.log(usuario3);



//Exercice-6

const usuario = 'Victor';
const idade = 19;

console.log(`O usuário ${usuario} possui ${idade} anos`);

*/

//Exercice-7(object-short-syntax)

const nome = 'Victor Gabriel';
const idade = 19;

const usuario = {
    nome,

    idade,
    
    cidade: 'Crateús-CE',
};


console.log(usuario);




