 const  getApi=async ()=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    let response=await fetch(url);
    let data=await response.json();
    return data;

}

const postAPi=async (dados)=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    return data;
}


const deleteApi=async (matricula)=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    return data;
}


export default getApi;