 export const  getApi=async ()=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    let response=await fetch(url);
    let data=await response.json();
    return data;

}

export const putAPi=async (dados)=>{
  console.log('antes de fazer o string');
  console.log(dados.target[1].dataset.matricula);
    const dadosJson=JSON.stringify({
      nome: dados.target[1].value,
      sobrenome: dados.target[2].value,
      dataNascimento: dados.target[3].value,
      tel: dados.target[4].value,
      email: dados.target[5].value,
      foto: dados.target[6].value,
      turno: dados.target[7].value == 1? "M":"T",
      id_professor: dados.target[8].value,
      cep: dados.target[10].value,
      rua: dados.target[11].value,
      bairro: dados.target[12].value,
      cidade: dados.target[13].value,
      uf: dados.target[14].value,
      numero: dados.target[15].value,
      nota_matematica: dados.target[17].value,
      nota_historia: dados.target[18].value,
      nota_geografia: dados.target[19].value,
      nota_portugues: dados.target[20].value,
      nota_artes: dados.target[21].value,
      nota_edfisica: dados.target[22].value
    });
    
    console.log('dentro da putApi');
    console.log(dadosJson);

    const response=await fetch(`https://app-escola-resilia.herokuapp.com/alunos/${dados.target[1].dataset.matricula}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: dadosJson
      }
      );
     
    console.log(response);
    return response;
}



export const deleteApi=async (matricula)=>{

    const response=await fetch(`https://app-escola-resilia.herokuapp.com/alunos/${matricula}`, {
      method: "DELETE"      
      }
      );
      console.log(response)
     
    return response;
}


