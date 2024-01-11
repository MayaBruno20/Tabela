// Objeto representando o jogador Bruno
var bruno = { nome: "Bruno", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

// Objeto representando a jogadora Maria
var maria = { nome: "Maria", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

/**
 * Calcula e retorna os pontos de um jogador com base em suas estatísticas.
 * @param {Object} jogador - O objeto que representa o jogador.
 * @returns {number} - Os pontos calculados do jogador.
 */
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

// Calcula e atribui os pontos para os jogadores Bruno e Maria
bruno.pontos = calculaPontos(bruno);
maria.pontos = calculaPontos(maria);

// Array que armazena os jogadores
var jogadores = [bruno, maria];

/**
 * Exibe os jogadores na tabela HTML.
 * @param {Array} jogadores - O array contendo os objetos de jogadores.
 */
function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  // Obtém a referência à tabela na página e atualiza seu conteúdo
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

// Exibe os jogadores na tela inicialmente
exibeJogadoresNaTela(jogadores);

/**
 * Adiciona uma vitória ao jogador especificado e atualiza a tabela.
 * @param {number} i - O índice do jogador no array.
 */
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

/**
 * Adiciona um empate ao jogador especificado e atualiza a tabela.
 * @param {number} i - O índice do jogador no array.
 */
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

/**
 * Adiciona uma derrota ao jogador especificado e atualiza a tabela.
 * @param {number} i - O índice do jogador no array.
 */
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

// Possíveis melhorias:
// - Validar empates entre jogadores.
// - Subtrair pontos em caso de derrota.
// - Adicionar botão para zerar estatísticas.
