 export const  getApi=async ()=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    let response=await fetch(url);
    let data=await response.json();
    return data;

}

export const putAPi=async (dados)=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';

    const response=await fetch(`https://app-escola-resilia.herokuapp.com/alunos/${dados.matricula}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        nome: dados.nome,
        sobrenome: dados.sobrenome,
        dataNascimento: dados.dataNascimento,
        tel: dados.telefone,
        email: dados.email,
        foto: dados.foto,
        id_professor: dados.professor,
        turno: dados.turno == 1? "M":"T",
        cep: dados.cep,
        rua: dados.rua,
        bairro: dados.bairro,
        cidade: dados.cidade,
        uf: dados.estado,
        numero: dados.numero,
      })   
      }
      );
     
    console.log(response);
    return response;
}



export const deleteApi=async (matricula)=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';

    const response=await fetch(`https://app-escola-resilia.herokuapp.com/alunos/${matricula}`, {
      method: "DELETE"      
      }
      );
     
    console.log(response);
    return response;
}


