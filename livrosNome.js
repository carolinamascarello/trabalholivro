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
}

console.log("Lista de Obras:");
console.log(listaObras);

let nomeConsulta = 0;
while (nomeConsulta !== -1) {
    nomeConsulta = prompt("Digite o nome da obra (-1 para sair, -2 para adicionar uma obra):");
    if (nomeConsulta === "-1") {
        break;
    } else if (nomeConsulta === "-2") {
        adicionarObra();
    } else {
        const areaConsulta = prompt("Digite a área da obra:");
        const obraConsultada = consultarObraPorNomeArea(nomeConsulta, areaConsulta);
        if (obraConsultada) {
            console.log("Informações da obra:");
            console.log("Código:", obraConsultada.codigo);
            console.log("Título:", obraConsultada.titulo);
            console.log("Autor:", obraConsultada.autor.nome);
            console.log("Área:", obraConsultada.area.nome);
            console.log("Doação:", obraConsultada.doacao ? "Sim" : "Não");
            console.log("Páginas:", obraConsultada.paginas);
        } else {
            console.log("Obra não encontrada.");
        }
    }
}