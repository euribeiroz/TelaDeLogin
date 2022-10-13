function logar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let usuarioConfirma = localStorage.getItem('usuario');
    let senhaConfirma = localStorage.getItem('senha');
    let mensagem = "";
    let resposta = document.getElementById('resposta');
    
    let login = {
        usuario: usuario,
        senha: senha
    };

    let cadastro = {
        usuario: usuarioConfirma,
        senha: senhaConfirma
    };

    let json = JSON.stringify(login);
    let jsonConfirma = JSON.stringify(cadastro);

    if(json === jsonConfirma){
        mensagem = "Login Confirmado!";
    }else{
        mensagem = "Usuario ou Senha Incorreto!";
    }

    resposta.innerHTML = `${mensagem}`;
}