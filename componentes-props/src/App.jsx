import Pedido from "./Pedido"
const App = () => {
  return (
    <div className="conatainer border mt-2">
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="SSD"
            descricao="Um SSD de 512Gb"
            icone="hdd" />
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="Livro"
            descricao="Harry Potter"
            icone="book" />
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="Hipopótamo"
            descricao="Sim, um hipo :)"
            icone="hippo" />
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="Um boneco de neve"
            descricao="Um boneco de neve que balança sozinho"
            icone="snowman fa-shake" />
        </div>
      </div>
    </div>
  )
}

export default App