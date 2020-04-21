/*

const minhaPromise = () => new Promise((resolve,reject) =>{
    setTimeout(() => {resolve('OK')},2000);
});




// o que acontece qaundo se cria uma async function: automáticamente essa função vira uman Promise.
async function executarPromise(){
     console.log(await minhaPromise());
     console.log(await minhaPromise());
     console.log(await minhaPromise());

    
 }


//async-await com arrow function
//a funcção abaixo equivale a função acima

const executarPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}



 executarPromise();





//Aula do axios-configurando

 import axios from 'axios';

 class Api{
    static async getUserInfo(username){
      try{
      
        const response = await axios.get(`https://api.github.com/users/${username}`);

        console.log(response);

      }catch (err){ 
        console.warn('Erro na API');
      }
       
        
    }

 }

 Api.getUserInfo('loiola0');

 */


 //Exercicio 2

//exercicio-2.1

/*
 // Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


  //function umPorSegundo() {

    //delay().then(() => {
        //console.log('1s');

    delay().then(() => {
        //console.log('2s');

   // delay().then(() => {
        //console.log('3s');

    //});
  // })
  //});
//}


async function umPorSegundo(){
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
   


}


umPorSegundo();
*/

//exercicio-2.2

import axios from 'axios';

/*

async function getUserFromGithub(user) {
    

        try{
         
          const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response.data);
        }catch (err){
            console.log('Usuário não existe');
        }
        
      
        
      
}

getUserFromGithub('diego3g');

getUserFromGithub('diego3g124123');


//exercicio-2.3

class Github {
    static async getRepositories(repo) {

    try{
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
    }catch (err){
            console.log('Repositório não existe');
    }
    
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');



//exercicio-2.4

const buscaUsuario = async usuario => {

    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch (err){
        console.log('Usuário não existe');
    }
}
buscaUsuario('loiola0');

*/