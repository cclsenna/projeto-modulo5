export default function formSubmitApi(e) {
    fetch("https://app-escola-resilia.herokuapp.com/alunos", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        nome: e.target.nome.value,
        sobrenome: e.target.sobrenome.value,
        dataNascimento: e.target.dataNascimento.value,
        tel: e.target.telefone.value,
        email: e.target.email.value,
        foto: e.target.foto.value,
        id_professor: e.target.professor.value,
        turno: e.target.turno.value == 1? "M":"T",
        cep: e.target.cep.value,
        rua: e.target.rua.value,
        bairro: e.target.bairro.value,
        cidade: e.target.cidade.value,
        uf: e.target.estado.value,
        numero: e.target.numero.value,
      }),
    })
}