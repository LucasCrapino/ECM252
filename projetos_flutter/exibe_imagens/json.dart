import 'dart:convert';

void main() {
  var pessoaJson = '{"nome": "Ana", "idade": 18}';
  var pessoaDecoded = json.decode(pessoaJson);

  // var pessoa = PessoaModel(pessoaDecoded['nome'], pessoaDecoded['idade']);
  var pessoa = PessoaModel.fromJSON(pessoaDecoded);
  print(pessoa.nome);
  print(pessoa.idade);
  // print(pessoa);
  // print(pessoa.runtimeType);
  // print(pessoa['nome']);
  // print(pessoa['idade']);
}

class PessoaModel {
  late String nome;
  late int idade;
  PessoaModel(this.nome, this.idade);
  // se fosse java
  // Pessoa(string nome, int idade){
  //   this.nome = nome;
  //   this.idade = idade;
  // }
  // constutor nomeado
  PessoaModel.fromJSON(decodedJSON) {
    nome = decodedJSON['nome'];
    idade = decodedJSON['idade'];
  }
}
