const idUsuario = "ab33a6f0-8724-49df-acfa-22602e22e40d";

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});


//captura de dados do formulário (login) para efetar o login
const logar = document.getElementById("login")
logar.addEventListener('submit', async (evento) => {
  evento.preventDefault()

  const email = evento.target.email.value
  const senha = evento.target.senha.value

  await login(email, senha)

})

//POST para fazer o login
async function login(email, senha) {
  try {
      const resposta = await instance.post(`/usuarios/login`, {
          email,
          senha
      })

     localStorage.setItem("idUsuario logado:", idUsuario);
     
     console.log(resposta)
     alert("Login efetuado com sucesso!")
     
    return true;

  } catch (error) {
    
    return false;
  }
}

























// const instance = axios.create({
//   baseURL: "http://localhost:8080",
//   // headers: {'X-Custom-Header': 'foobar'}
// });

// const formulario = document.getElementById("login");

// async function logar(evento) {
//   evento.preventDefault();
//   const email = evento.srcElement.email.value;
//   const senha = evento.srcElement.senha.value;

//   try {
//     const response = await instance.post(`/usuarios/login`, {
//       email,
//       senha,
//     });

//     console.log(response);
//     console.log("Login realizado com sucesso")
    
//     localStorage.setItem("idUsuario logado:", idUsuario);
//     // location.href = "/crudrecados.html";
//   } catch (error) {
//     console.log(error);
//     alert("Erro ao realizar o login!");
//   }
// }



























