import React from 'react';
import './App.css';
const axios = require('axios');

class App  extends React.Component{

  constructor(props){
    super(props);
    this.state ={consulteApi:false, data: []};
  }

  hundlerBt(){
    console.log("me dieron click");
    //codigo de la api 

        axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
          .then(response=>{
            console.log(response.data);
            this.setState(() => {return {consulteApi: true, data: response.data}});
          })
          .catch((error)=>{
            console.log(error);
          });
  }

  render(){
    var result;
    if(this.state.consulteApi){
      console.log(this.state.consulteApi);
      result = (
        <div>
          <ul>
            <li>
          Dolar Oficial Compra: 
          {this.state.data[0].casa.compra}
          </li>
          <li>
          Dolar Oficial venta: 
          {this.state.data[0].casa.venta}
          </li>
          <li>
          Dolar Blue Compra: 
          {this.state.data[1].casa.compra}
          </li>
          <li>
          Dolar Blue venta: 
          {this.state.data[1].casa.venta}
          </li>
          </ul>
        </div>
      );
    }else{
      console.log(this.state.consulteApi);
      result=<div></div>
    }

    return(
    <div>
      <div>
      <button onClick={this.hundlerBt.bind(this)}>Consultar precio dolar blue</button>
      </div>
      {result}    
      </div>
    );
  }

}
export default App;

/*-------------------

import React from 'react'
import './App.css';
const axios = require('axios');

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={consulteApi:false, item: []};

  }

  handlerBtn(){
   var nombre = this.state.nombre;
   axios.get("https://breakingbadapi.com/api/characters",{params:{name:nombre}})
   .then(response=>{
     console.log(response);
    this.setState(() => {return {consulteApi: true, item: response.data}});
   })
   .catch(error=>{
     console.log(error);
   });
}

  handlerTxt(event){
    this.setState({nombre: event.target.value});
}

  render(){  
    var resultados;
    if(this.state.consulteApi){
      resultados = this.state.item.map(i=>
        <li key= {i.char_id}>
        {i.name}
        </li>
      );
     }else{
       resultados = <div></div>
     }
    return (
      <div> 
        <input onChange={this.handlerTxt.bind(this)} type="text" placeholder="Nombre del personaje"/>
        <button onClick={this.handlerBtn.bind(this)}>Consultar API </button>
        <ul>{resultados}</ul>
      </div>
  );
 }
}

export default App;
*/