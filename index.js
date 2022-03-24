var Usuario = /** @class */ (function () {
    function Usuario() {
        this.dadosUsuario = {};
    }
    Usuario.prototype.setId = function (novoId) {
        this.dadosUsuario.id = novoId;
    };
    Usuario.prototype.setNome = function (novoNome) {
        this.dadosUsuario.nome = novoNome;
    };
    Usuario.prototype.setEmail = function (novoEmail) {
        this.dadosUsuario.email = novoEmail;
    };
    Usuario.prototype.setCpf = function (novoCpf) {
        this.dadosUsuario.cpf = novoCpf;
    };
    Usuario.prototype.setDataNascimento = function (novoDataNascimento) {
        this.dadosUsuario.dataNascimento = novoDataNascimento;
    };
    Usuario.prototype.setEndereco = function (novoEndereco) {
        this.dadosUsuario.endereco = novoEndereco;
    };
    Usuario.prototype.getDadosUsuario = function () {
        return this.dadosUsuario;
    };
    return Usuario;
}());
function index() {
    var allUsers = [];
    for (var i = 0; i < 10; i++) {
        var id = i + 1;
        var usuario = new Usuario();
        usuario.setId(id);
        usuario.setNome("Nome Completo" + id);
        usuario.setEmail("email@email.com" + id);
        usuario.setCpf(12345678912 + id);
        usuario.setDataNascimento(new Date());
        var endereco = {
            logradouro: "Nome Rua" + id,
            numero: 10 + i,
            complemento: "Complemento" + i
        };
        usuario.setEndereco(endereco);
        allUsers.push(usuario);
    }
    allUsers.forEach(function (usuario) { return console.log(usuario.getDadosUsuario()); });
    for (var i = 0; i < allUsers.length; i++) {
        var id = i + 1;
        if (i % 2 == 0) {
            allUsers[i].setNome("Nome atualizado" + id);
        }
        else {
            var novoEndereco = {
                logradouro: "Logradouro atualizado" + id,
                numero: 234,
                complemento: "Complemento atualizado " + id
            };
            allUsers[i].setEndereco(novoEndereco);
        }
        console.log(allUsers[i].getDadosUsuario());
    }
}
index();
