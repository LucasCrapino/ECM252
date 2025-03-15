import Comentario from "./Comentario"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const listaComentarios = ['Muito bom!!!! Aprovado', 'Não gostei desse lixo', 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ']
  const textoAprova = 'Aprovar'
  const textoReprova = 'Reprovar'
  const funcaoAprovar = () => alert('O comentário foi aprovado')
  const funcaoReprovar = () => alert('O comentário foi reprovado')
  const componenteFeedback = (
    <Feedback
      textoAprova={textoAprova}
      textoReprova={textoReprova}
      funcaoAprovar={funcaoAprovar}
      funcaoReprovar={funcaoReprovar}
    />
  )
  return (
    <div className="container border mt-2">
      <div className="row d-flex flex-column">
        <div className="col-lg-6 col-xxl-300">
          <Cartao cabecalho={new Date().toLocaleString()}>
            <Comentario
              nome="Meci Careca"
              comentario={listaComentarios[0]}
              icone="mecicareca" />
              {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-lg-6 col-xxl-300">
          <Cartao cabecalho={new Date().toLocaleString()}>
            <Comentario
              nome="Marselo"
              comentario={listaComentarios[1]}
              icone="download" />
              {componenteFeedback}
          </Cartao>

        </div>

        <div className="col-lg-6 col-xxl-300">
          <Cartao cabecalho={new Date().toLocaleString()}>
            <Comentario
              nome="Julio César"
              comentario={listaComentarios[2]}
              icone="juliocesar" />
              {componenteFeedback}
          </Cartao>

        </div>
      </div>
    </div>
  )
}

export default App