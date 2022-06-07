export default async function apiCep(cep) {
    const cepReg = cep.replace(/\D/g, "");
    const url = `https://viacep.com.br/ws/${cepReg}/json/`;
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }
