const instance = axios.create({
    baseURL: 'http://localhost:8080',
  });
  
  // captura de dados do formulário (cadastro) para criação de novo usuário
  const dadosFormulario = document.getElementById("cadastro")

  dadosFormulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
  
    const nome = evento.target.nomeCompleto.value
    const email = evento.target.email.value
    const senha = evento.target.senha.value
    const confirmarSenha = evento.target.confirmarSenha.value
  
    const novoUsuario = {
      nome,
      email,
      senha,
      confirmarSenha
    }
    await criarUsuario(novoUsuario)
  
  })
  
  //POST para criar usuários
  async function criarUsuario(novoUsuario) {
  
    if (novoUsuario.senha != novoUsuario.confirmarSenha) {
      alert("As senhas são diferentes!")
    }
      
    try {
      const resposta = await instance.post('/usuarios', {
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        senha: novoUsuario.senha
      })
  
      console.log(resposta);
      
      alert("Cadastro realizado com sucesso!")

      window.location.href = "./login.html"

      return true;
  
    } catch (error) {
      console.log(error);
      return false
    }
  }