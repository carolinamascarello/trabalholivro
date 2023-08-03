class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }
}

class Area {
    constructor(nome) {
        this.nome = nome;
    }
}

class Obra {
    constructor(codigo, titulo, autor, area, doacao, paginas) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.area = area;
        this.doacao = doacao;
        this.paginas = paginas;
    }
}

const autor1 = new Autor("Autor1", "Nacionalidade1");
const autor2 = new Autor("Autor2", "Nacionalidade2");
const area1 = new Area("Área1");
const area2 = new Area("Área2");

const obra1 = new Obra(1, "Título1", autor1, area1, true, 150);
const obra2 = new Obra(2, "Título2", autor2, area2, false, 250);

const listaObras = [obra1, obra2];

function consultarObraPorCodigoArea(codigo, area) {
    for (const obra of listaObras) {
        if (obra.codigo === codigo && obra.area.nome === area) {
            return obra;
        }
    }
    return null;
}

function consultarObraPorNomeArea(nome, area) {
    for (const obra of listaObras) {
        if (obra.titulo.toLowerCase() === nome && obra.area.nome.toLowerCase() === area) {
            return obra;
        }
    }
    return null;
}

function listarObrasDoacao() {
    const obrasDoacao = listaObras.filter((obra) => obra.doacao === true);
    if (obrasDoacao.length > 0) {
        console.log("Livros doados:");
        for (const obra of obrasDoacao) {
            console.log("Código:", obra.codigo);
            console.log("Título:", obra.titulo);
            console.log("Autor:", obra.autor.nome);
            console.log("Área:", obra.area.nome);
            console.log("Doação:", obra.doacao ? "Sim" : "Não");
            console.log("Páginas:", obra.paginas);
            console.log("---------------------------");
        }
    } else {
        console.log("Nenhum livro doado encontrado.");
    }
}

function listarObrasCompradasPaginas() {
    const obrasCompradasPaginas = listaObras.filter((obra) => obra.doacao === false && obra.paginas >= 100 && obra.paginas <= 300);
    if (obrasCompradasPaginas.length > 0) {
        console.log("Livros comprados com páginas entre 100 e 300:");
        for (const obra of obrasCompradasPaginas) {
            console.log("Código:", obra.codigo);
            console.log("Título:", obra.titulo);
            console.log("Autor:", obra.autor.nome);
            console.log("Área:", obra.area.nome);
            console.log("Doação:", obra.doacao ? "Sim" : "Não");
            console.log("Páginas:", obra.paginas);
            console.log("---------------------------");
        }
    } else {
        console.log("Nenhum livro comprado com páginas entre 100 e 300 encontrado.");
    }
}

function adicionarObra() {
    const codigo = parseInt(prompt("Digite o código da obra:"));
    const titulo = prompt("Digite o título da obra:");
    const autorNome = prompt("Digite o nome do autor:");
    const autorNacionalidade = prompt("Digite a nacionalidade do autor:");
    const autor = new Autor(autorNome, autorNacionalidade);
    const areaNome = prompt("Digite a área da obra:");
    const area = new Area(areaNome);
    const doacao = prompt("A obra foi doada? (Sim ou Não)").toLowerCase() === "sim";
    const paginas = parseInt(prompt("Digite o número de páginas:"));

    const novaObra = new Obra(codigo, titulo, autor, area, doacao, paginas);
    listaObras.push(novaObra);

    console.log("Obra adicionada com sucesso.");
}

function alterarObra(codigo) {
    const index = listaObras.findIndex((obra) => obra.codigo === codigo);
    if (index !== -1) {
        const obraAlterar = listaObras[index];

        const titulo = prompt("Digite o novo título da obra:");
        const autorNome = prompt("Digite o novo nome do autor:");
        const autorNacionalidade = prompt("Digite a nova nacionalidade do autor:");
        const autor = new Autor(autorNome, autorNacionalidade);
        const areaNome = prompt("Digite a nova área da obra:");
        const area = new Area(areaNome);
        const doacao = prompt("A obra foi doada? (Sim ou Não)").toLowerCase() === "sim";
        const paginas = parseInt(prompt("Digite o novo número de páginas:"));

        obraAlterar.titulo = titulo;
        obraAlterar.autor = autor;
        obraAlterar.area = area;
        obraAlterar.doacao = doacao;
        obraAlterar.paginas = paginas;

        console.log("Registro alterado com sucesso.");
    } else {
        console.log("Obra não encontrada.");
    }
}

function excluirObra(codigo) {
    const index = listaObras.findIndex((obra) => obra.codigo === codigo);
    if (index !== -1) {
        listaObras.splice(index, 1);
        console.log("Obra excluída com sucesso.");
    } else {
        console.log("Obra não encontrada.");
    }
}

console.log("Lista de Obras:");
console.log(listaObras);

let opcao = 0;
while (opcao !== -1) {
    opcao = parseInt(prompt("Digite -1 para sair, -2 para adicionar uma obra, -3 para consultar livros doados, -4 para consultar livros comprados entre 100 e 300 páginas, -5 para alterar um registro ou -6 para excluir um livro:"));

    if (opcao === -1) {
        break;
    } else if (opcao === -2) {
        adicionarObra();
    } else if (opcao === -3) {
        listarObrasDoacao();
    } else if (opcao === -4) {
        listarObrasCompradasPaginas();
    } else if (opcao === -5) {
        const codigoConsulta = parseInt(prompt("Digite o código da obra que deseja alterar:"));
        alterarObra(codigoConsulta);
    } else if (opcao === -6) {
        const codigoConsulta = parseInt(prompt("Digite o código da obra que deseja excluir:"));
        excluirObra(codigoConsulta);
    } else {
        console.log("Opção inválida.");
    }
}