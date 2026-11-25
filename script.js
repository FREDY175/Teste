// ALTERNAR PARA CADASTRO
function showRegister() {
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-form").classList.add("active");
}

// ALTERNAR PARA LOGIN
function showLogin() {
    document.getElementById("register-form").classList.remove("active");
    document.getElementById("login-form").classList.add("active");
}

// MOSTRAR / ESCONDER SENHA
function togglePassword(id, button) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        button.textContent = "Ocultar";
    } else {
        input.type = "password";
        button.textContent = "Mostrar";
    }
}

// CADASTRO
document.getElementById("formRegister").addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const senha = document.getElementById("register-password").value;
    const confirmarSenha = document.getElementById("confirm-password").value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve conter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro validado com sucesso! A interface está pronta para ser ligada à base de dados.");

    this.reset();

    showLogin();

});

// LOGIN
document.getElementById("formLogin").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-password").value;

    if (email === "" || senha === "") {
        alert("Preencha o e-mail e a senha.");
        return;
    }

    alert("Interface de login concluída! Agora pode ser conectada ao sistema de gestão da Farmácia Hazael.");

});