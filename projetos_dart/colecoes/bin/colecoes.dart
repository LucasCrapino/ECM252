import 'dart:io';
import 'dart:math';

import 'package:colecoes/colecoes.dart' as colecoes;

void main(List<String> arguments) {
  final numeros = <int>[];
  while (numeros.length < 6) {
    stdout.write('Digite o ${numeros.length + 1}° número (1-60, sem repetir)');
    final line = stdin.readLineSync();
    final n = int.tryParse(line ?? '');
    if (n == null || n < 1 || n > 60) {
      print("Valor inválido");
      continue;
    }
    if (numeros.contains(n)) {
      print("Número repetido, tente outro...");
      continue;
    }
    numeros.add(n);
  }

  final rng = Random();
  final sorteados = <int>[];
  while (sorteados.length < 6) {
    final x = rng.nextInt(60) + 1;
    if (!sorteados.contains(x)) {
      sorteados.add(x);
    }
  }

  final a = List<int>.from(numeros)..sort();
  final b = List<int>.from(sorteados)..sort();

  print("Números que você digitou: $a");
  print("Números da mega sena: $b");

  bool ganhou = a.length == b.length;

  if (ganhou) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) {
        ganhou = false;
        break;
      }
    }
  }
  print(ganhou ? 'Parabéns! Você ganhou!' : 'Que pena! Você perdeu...');
  // type annotation
  // var nomes = <String?>["a", null];
  // final nomes = ['João', 'Ana'];
  // var lista = ["a", null];
  // List nomes = ['Ana', 'Pedro'];
  // nomes.add(true);
  // nomes.add(1);
  // nomes[0].falar();
  // nomes.add(null);
  // List<Object?> outra = ['whatever', 1];
  // outra.add(true);
  // outra.add(null);
  // outra[0].falar();
  // for/in
  // var itensDiversos = [1, 1.2, true, "abc"];
  // var numeros = [1, 1.2];
  // var nomes = ['João', 'Pedro'];
  // for (final item in itensDiversos) {
  //   print(item);
  // }
}
