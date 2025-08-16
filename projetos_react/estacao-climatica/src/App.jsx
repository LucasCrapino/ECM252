import React from "react";
import Hippo from "./Hippo";
import EstacaoClimatica from "./EstacaoClimatica";
import Loading from "./Loading";

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    icone: null,
    msgErro: null,
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacoes: null,
  //     data: null,
  //     icone: null,
  //     msgErro: null,
  //   };
  //   console.log('constructor')
  // }
  estacoes = {
    VERAO: {
      nome: "Verão",
      icone: "sun",
    },
    OUTONO: {
      nome: "Outono",
      icone: "leaf",
    },
    INVERNO: {
      nome: "Inverno",
      icone: "snowflake",
    },
    PRIMAVERA: {
      nome: "Primavera",
      icone: "umbrella",
    },
  };
  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    const d1 = new Date(anoAtual, 5, 21); // 21/06
    const d2 = new Date(anoAtual, 8, 24); // 24/09
    const d3 = new Date(anoAtual, 11, 22); // 22/12
    const d4 = new Date(anoAtual, 2, 21); // 21/03

    const estouNoSul = latitude < 0;

    if (data >= d1 && data < d2) {
      return estouNoSul ? this.estacoes.INVERNO : this.estacoes.VERAO;
    }
    if (data >= d2 && data < d3) {
      return estouNoSul ? this.estacoes.PRIMAVERA : this.estacoes.OUTONO;
    }
    if (data >= d3 || data < d4) {
      return estouNoSul ? this.estacoes.VERAO : this.estacoes.INVERNO;
    }
    return estouNoSul ? this.estacoes.OUTONO : this.estacoes.PRIMAVERA;
  };
  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const dataAtual = new Date();
        const estacao = this.obterEstacao(dataAtual, posicao.coords.latitude);
        const icone = estacao.icone;
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao.nome,
          icone: icone,
        });
      },
      (erro) => {
        this.setState({
          msgErro: `Tente novamente mais tarde: ${erro.message}`,
        });
      }
    );
  };

  componentDidMount() {
    console.log('componentDidMount')
    this.obterLocalizacao();
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <div className="justify-content-center d-flex">
              <Hippo />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 col-xxl-4">
            {
            (!this.state.latitude && !this.state.msgErro) ?
              <Loading mensagem="Por favor, autorize o acesso à localização"/>
              :
              this.state.msgErro ?
                <p className="border rounded p-2 fs-1 text-center">
                  É preciso dar permissão para acesso à localização
                </p>
                :
                <EstacaoClimatica 
                  latitude = {this.state.latitude}
                  longitude = {this.state.longitude}
                  estacao = {this.state.estacao}
                  icone = {this.state.icone}
                  msgErro = {this.state.msgErro}
                  obterLocalizacao = {this.obterLWocalizacao} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App
