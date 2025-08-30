//usar enum
//gerar a opção do computador aleatoriamente
//usuario pode escolher o que deseja
import 'dart:ffi';
import 'dart:io';
import 'dart:math';

enum opcoes { PEDRA, PAPEL, TESOURA }

void jogo() {
  //enquanto o usuário não quiser sair
  // exibir menu
  // capturar a opção do usuário, validando
  // se o usuário escolher sair, sair

  // senão
  // sortear a escolha do computador

  // mapear a opção do usuário de int para enum

  // mapear a opção do computador de int para enum

  // exibir as opções de cada um
  // Você(pedra) VS (papel)Computador

  // exibir o resultado

  // dormir por 4 segundos
  print("BEM VINDO AO PEDRA, PAPEL E TESOURA!");

  while (true) {
    stdout.writeln(
      "Jogador, o que deseja fazer?\n 0 -> Pedra \n 1 -> Papel \n 2 -> Tesoura \n 3 -> Sair",
    );
    final op = stdin.readLineSync();

    if (op == '3') {
      print("Saindo...");
      break;
    }

    final escolhaUsuario = int.tryParse(op ?? "");
    if (escolhaUsuario == null || escolhaUsuario > 3 || escolhaUsuario < 0) {
      print("Escolha uma opção válida...");
      continue;
    }
    final escolhaComputador = Random().nextInt(3);

    final jogadaUsuario = opcoes.values[escolhaUsuario];
    final jogadaComputador = opcoes.values[escolhaComputador];

    print(
      "Jogador(${jogadaUsuario.name}) VS Computador(${jogadaComputador.name})",
    );

    if (jogadaUsuario == jogadaComputador) {
      print("Empate!");
    } else if (jogadaUsuario == opcoes.PEDRA &&
            jogadaComputador == opcoes.TESOURA ||
        jogadaUsuario == opcoes.PAPEL && jogadaComputador == opcoes.PEDRA ||
        jogadaUsuario == opcoes.TESOURA && jogadaComputador == opcoes.PAPEL) {
      print("Jogador venceu!");
    } else {
      print("Computador venceu!");
    }
    sleep(Duration(seconds: 3));
  }
}
