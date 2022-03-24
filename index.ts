interface DadosUsuario {
    id: number;
    nome: string;
    email: string;
    cpf: number;
    dataNascimento: Date;
    endereco: Endereco;
}

interface Endereco{
    logradouro: string;
    numero: number;
    complemento: string;
}

class Usuario{
    constructor() {
        
    }

    private dadosUsuario = {} as DadosUsuario;
    
    setId(novoId: number): void {
        this.dadosUsuario.id = novoId;
    }
    setNome(novoNome: string): void {
        this.dadosUsuario.nome = novoNome;
    }
    setEmail(novoEmail: string): void {
        this.dadosUsuario.email = novoEmail;
    }
    setCpf(novoCpf: number): void {
        this.dadosUsuario.cpf = novoCpf;
    }
    setDataNascimento(novoDataNascimento: Date): void{
        this.dadosUsuario.dataNascimento = novoDataNascimento;
    }
    setEndereco (novoEndereco: Endereco){
        this.dadosUsuario.endereco = novoEndereco
    }
    getDadosUsuario(): DadosUsuario {
        return this.dadosUsuario;
    }
}

function index() {
    const allUsers = [];

    for (let i = 0; i < 10; i++) {
        
        let id = i + 1;
        const usuario = new Usuario();
        usuario.setId(id);
        usuario.setNome("Nome Completo" + id);
        usuario.setEmail("email@email.com" + id);
        usuario.setCpf(12345678912 + id);
        usuario.setDataNascimento(new Date());
        const endereco = {
            logradouro: "Nome Rua" + id,
            numero: 10 + i,
            complemento: "Complemento" + i
        } as Endereco;
        usuario.setEndereco(endereco);
        allUsers.push(usuario);
    }

    allUsers.forEach(usuario => console.log(usuario.getDadosUsuario()))
   
    for (let i = 0; i < allUsers.length; i++) {
        let id = i + 1;
        if (i%2 == 0) {
            allUsers[i].setNome("Nome atualizado" + id);
        } else {
            const novoEndereco = {
                logradouro: "Logradouro atualizado" + id,
                numero: 234,
                complemento: "Complemento atualizado " + id,
            }as Endereco;

            allUsers[i].setEndereco(novoEndereco);
        }

        console.log(allUsers[i].getDadosUsuario());
    }
  
}

index();