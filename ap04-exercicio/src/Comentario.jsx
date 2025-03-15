const Comentario = (props) => {
    return (
        <div className=" d-flex">
          <div className="d-flex justify-content-center flex-column">
            <img src = {`src/assets/${props.icone}.jpeg`}></img>
          </div>
          <div className="border flex-grow-1 py-3 ms-3">
            <h4 className="text-left" style={{marginLeft: '10px'}}>{props.nome}</h4>
            <p className="text-left" style={{marginLeft: '10px'}}>{props.comentario}</p>
          </div>
        </div>
    )
}

export default Comentario