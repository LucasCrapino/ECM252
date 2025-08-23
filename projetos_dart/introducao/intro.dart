import 'dart:io';
import 'dart:math';

void main(){
    // var gerador = Random();
    // print(gerador.nextInt(3));
    // print(gerador.nextInt(10) + 1);
    // print(gerador.nextInt(101));
    // // [0,1]
    // print(gerador.nextDouble());
    // print(gerador.nextDouble() * 100);
    // // [100,150]
    // print(100 + gerador.nextDouble() * 50);
    // // [17, 43]
    // print(17 + gerador.nextDouble() * (43 - 17));
    // print("digite a idade: ");
    // int idade = int.parse(stdin.readLineSync()!);
    // stdout.writeln("Digite seu nome: ");
    // final nome = stdin.readLineSync();
    // stdout.writeln("Oi, $nome");
    // stdout.write("oi");
    // stdout.writeln("oi");
}
// // 
// enum DiaSemana{
//     SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO, DOMINGO
// }

// void main(){

//     // print(DiaSemana.values);
//     // DiaSemana dia = DiaSemana.SABADO;
//     // print(dia.name);
//     // switch(dia){
//     //     case DiaSemana.SEGUNDA:
//     //         print(":(");
//     //     case DiaSemana.SABADO || DiaSemana.DOMINGO:
//     //         print(":)");
//     //     default:
//     //     print("whatever");
//     // }
//     // const SEGUNDA = 1;
//     // if(dia == SEGUNDA)
//     // int i = 0;
//     // do {
//     //   print(i++);
//     // } while (i < 20);
//     // while
//     // while (i < 20){
//     //     print(i);
//     //     i++;
//     // }
//     // for each enhanced for
//     // const nomes = ['José', 'Antônio'];
//     // // for/in
//     // for(final nome in nomes){
//     //     print(nome);
//     // }
//     // for(int i = 0; i < 10; i++){
//     //     print(i);
//     // }
// }

// int somar(int a, int b){
//     return a + b;
// }

// void main(){

//     // switch/expression
//     final mediaFinal = 10;
//     final conceito = switch(mediaFinal){
//         10 || 9 => 'A',
//         8 => 'B',
//         _  => 'C'
//     };
   
//    print(conceito);
    // expression
    // const a = 2 + 2;
    // const b = a;
    // final c = somar(2,3);
    // var d = somar;
    // var e = 2 >= 3;
    // var f = if(a > b){
    //     print('oi');
    // }
    // dart é cidadã de primeira classe
    // statement

    // const nota = 9.7;
    // switch(nota){
    //     case >= 9 && <= 10:
    //     print("A");
    //     default:
    //     print("outro conceito");
    // }
    // fall through
    // switch(nota){
    //     case 10:
    //     print("A");
    //     case 9:
    //     print("A");
    //     case 8:
    //     print("B");
    //     default:
    //     print("C");
    // }
    // const idade = 19;
    // if(idade >= 18){
    //     print("Sim");
    //     print("Até logo");
    // }
    // dangling else
    // else{
    // print("Não");
    // }
    // var b = 1;
    // final a = b + 2;

    // const a = 1;
    // operadores de inferência de tipo
    // const, final, var
    // const nome = "abc";
    // final nome = "João".toUpperCase();
    // nome = 'João';
    // nome.falar();
    // var nome = "João";
    // print(nome.runtimeType);
    // nome.falar();
    // nome = "João Silva";
    // print(nome.runtimeType);
    
    // int a = 2; // estátio
    // dynamic b = 2;
    // b = "abc";
    // b.falar();
    // a.falar();
    
    // int a = 2;
    // a++; // pós incremento
    // print(a); // 3
    // ++a; // pré incremento
    // print(a); // 4
    // print(a++); // 4
    // // 5
    // print(a++); // 6
    
    // double real = 2.3;
    // int inteiro = real.floor();

    // double d1 = 2;
    // int i1 = 2;
    // double d2 = i1;
    // double d2 = i1.toDouble();

    // String idadeTextual = '25';
    // int idade = int.parse(idadeTextual);
    // String pesoTextual = '80.5';
    // double peso = double.parse(pesoTextual);
    // String alturaTextual = '180';
    // num altura = num.parse(alturaTextual);
    // print(altura.runtimeType);
    
    // var letra = 'x';
    // print(letra * 10);

    // String nome = 'João';
    // String sobrenome = 'Silva';
    // String nomeCompleto = '$nome $sobrenome';
    // int idade = 20;
    // print('No ano que vem terei ${idade + 1} anos');
    // print('Minha idade é $idade');
    // String nomeCompleto = nome + ' ' + sobrenome;
    // int idade = 20;
    // print("Minha idade é: " + idade.toString());
    // String nome = 'João';
    // bool deMaior = false;
    // int idade = 17;
    // num peso = 80.7;
    // double altura = 1.82;
    // num a = 2;
    // num b = 3.0;
    // int c = b / a;
    // int k = 2;
    // int l = 3;
    // double d2 = 1;
    // // double d = k + l;

    // print(nome.runtimeType);
    // print(deMaior.runtimeType);
    // print(idade.runtimeType); // int
    // print(peso.runtimeType); // double
    // print(altura.runtimeType); // double

    // unica linha
    /*
    multiplas linhas
    */
    // print("Hello, World");
