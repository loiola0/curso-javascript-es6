import api from './api';


class App{
  constructor(){
    this.respositories = [];

    //buscando a referência do form, tudo pelo lado do javascript
    this.formElem = document.getElementById('repo-form');
    this.inputElem = document.querySelector('input[name=repository]');
    this.listElem = document.getElementById('repo-list');

    this.registerHandlers();

  }

  //registra os eventos
  registerHandlers(){

    this.formElem.onsubmit = event => this.addRepository(event); 

  }


  setLoading(loading =true){
    if(loading === true){
      let loadingElem = document.createElement('span');
      loadingElem.setAttribute('id','loading');
      loadingElem.appendChild(document.createTextNode('Carregando...'));

      this.formElem.appendChild(loadingElem);

    }else{
      document.getElementById('loading').remove();
    }

    
    
  }


  async addRepository(event){
    event.preventDefault();
    
    const repoInput = this.inputElem.value; 

    if(repoInput.lenght === 0){
      return;
    }
      
  this.setLoading();
    
  try{
    const response = await api.get(`/repos/${repoInput}`);
    
    const {name,description,html_url, owner:{avatar_url}} = response.data;



    this.respositories.push({
      name,
      description,
      avatar_url,
      html_url,
    });

    this.inputElem.value = '';

    this.render();

   }catch(err){
     alert('Error');
   }

   this.setLoading(false);

  }

  render(){
    this.listElem.innerHTML = '';

    this.respositories.forEach(repo=>{

      let imgElem = document.createElement('img');
      imgElem.setAttribute('src',repo.avatar_url);

      let titleElem = document.createElement('strong');
      titleElem.appendChild(document.createTextNode(repo.name));

      let descriptionElem = document.createElement('p');
      descriptionElem.appendChild(document.createTextNode(repo.description));

      let linkElem = document.createElement('a');
      linkElem.setAttribute('target','_blank');
      linkElem.setAttribute('href',repo.html_url);
      linkElem.appendChild(document.createTextNode('Acessar'));

      let listItemElem = document.createElement('li');
      listItemElem.appendChild(imgElem);
      listItemElem.appendChild(titleElem);
      listItemElem.appendChild(descriptionElem);
      listItemElem.appendChild(linkElem);

      this.listElem.appendChild(listItemElem);

    });
  }

}

new App();