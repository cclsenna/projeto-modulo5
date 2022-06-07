 export const  getApi=async ()=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    let response=await fetch(url);
    let data=await response.json();
    return data;

}

export const putAPi=async (matricula)=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';

    const response=await fetch(`https://app-escola-resilia.herokuapp.com/alunos/${matricula}`, {
      method: "PUT"      
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


