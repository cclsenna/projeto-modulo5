import formSubmitApi from "./formSubmit";

export default function validaCampos(e) {
 e.preventDefault();
  const nome = e.target.nome.value;
  const sobrenome = e.target.sobrenome.value;
  const dataNascimento = e.target.dataNascimento.value;
  const tel = e.target.telefone.value;
  const email = e.target.email.value;
  const foto = e.target.foto.value;
  const cep = e.target.cep.value;
  const rua = e.target.rua.value;
  const bairro = e.target.bairro.value;
  const cidade = e.target.cidade.value;
  const uf = e.target.estado.value;
  const numero = e.target.numero.value;
  if( nome.length == 0 ||  
      sobrenome.length == 0 ||  
      dataNascimento.length == 0 ||  
      tel.length == 0 ||  
      email.length == 0 ||  
      cep.length == 0 ||  
      rua.length == 0 ||
      bairro.length == 0 ||
      cidade.length == 0 ||
      uf.length == 0 ||
      numero.length == 0 ||
      foto.length == 0) return "Preencha todos os campos"
      else {
          formSubmitApi(e)
          return "Aluno(a) cadastrado"
    } 

}
