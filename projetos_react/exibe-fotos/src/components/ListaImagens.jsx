import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({photos, imgStyle}) => {
  return (
    photos.map((photo, key) => (
        <Imagem 
            src={photo.src.small} 
            alt={photo.alt} 
            imgStyle={imgStyle}/>
    ))
  )
}

export default ListaImagens