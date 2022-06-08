 export const  getApi=async ()=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    let response=await fetch(url);
    let data=await response.json();
    return data;

}

export const putAPi=async (dados)=>{
  console.log('antes de fazer o string');
  console.log(dados.target[1].nome);
    const dadosJson=JSON.stringify({
      nome: dados.target.nome.value,
      sobrenome: dados.target.sobrenome.value,
      dataNascimento: dados.target.dataNascimento.value,
      tel: dados.target.telefone.value,
      email: dados.target.email.value,
      foto: dados.target.foto.value,
      id_professor: dados.target.professor.value,
      turno: dados.target.turno.value == 1? "M":"T",
      cep: dados.target.cep.value,
      rua: dados.target.rua.value,
      bairro: dados.target.bairro.value,
      cidade: dados.target.cidadev,
      uf: dados.target.estado.value,
      numero: dados.target.numero.value,
      nota_historia: dados.target.nota_historia.value,
      nota_matematica: dados.target.nota_matematica.value,
      nota_geografia: dados.target.nota_geografia.value,
      nota_portugues: dados.target.nota_portugues.value,
      nota_artes: dados.target.nota_artes.value,
      nota_edfisica: dados.target.nota_edfisica.value
    });
    
    console.log('dentro da putApi');
    console.log(dadosJson);






    const response=await fetch(`https://app-escola-resilia.herokuapp.com/alunos/${dados.matricula}`, {
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


