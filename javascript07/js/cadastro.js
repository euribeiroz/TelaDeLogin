function cadastrar(){
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    let cadastro = {
        nome: nome,
        cpf: cpf,
        endereco: endereco,
        email: email,
        telefone: telefone,
        usuario: usuario,
        senha: senha
    };

    let json = JSON.stringify(cadastro);

    localStorage.setItem('usuario', usuario);
    localStorage.setItem('senha', senha);
}