import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
const img = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBAkbNWekJ9omGl22Vw9ucaKcwjftfKfRdLa3wbjNrE8xfTZw6atNFJtKEGQo55yAt6fmXDR31w9MeCRKBHuE49-zasrQ=s2560"

  return (
    <div className='d-flex container greeting'>
    <img src={img} alt="logo de wine meeting" />
    <h1 className='tituloGreeting'> {greeting} </h1>
    </div>
  )
}

export default ItemListContainer