 const  getApi=async ()=>{
    const url='https://app-escola-resilia.herokuapp.com/alunos';
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    return;

}

export default getApi;