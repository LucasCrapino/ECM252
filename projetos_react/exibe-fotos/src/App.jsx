import Busca from "./components/Busca"
import ListaImagens from "./components/ListaImagens"
import React from "react";
import {createClient} from "pexels";
import env from "react-dotenv";
import PexelsLogo from './components/PexelsLogo'
import pexelsClient from './utils/pexelsClient'

export default class App extends React.Component {

  // pexelsClient = null

  state = {
    photos: []
  }

  // onBuscaRealizada = (termoDeBusca) => {
  //   this.pexelsClient.photos.search({
  //     query: termoDeBusca
  //   })
  //   .then(result => { this.setState({photos: result.photos})})
  // }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo,
        per_page: 12
      }
    })
    .then(result => this.setState({photos: result.data.photos}))
  }

  // componentDidMount() {
  //   this.pexelsClient = createClient(env.PEXELS_KEY);
  // }

  render() {
    return (
      <div className="grid border-2 justify-content-center w-9 m-auto">
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h4>Exibir uma lista de...</h4>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens photos={this.state.photos} imgStyle={'md:col-6 lg:col-4 xl:col-3'}/>
          </div>
        </div>
      </div>
    );
  }
}
