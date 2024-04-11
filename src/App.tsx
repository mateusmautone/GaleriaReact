import { useState, useEffect } from 'react'
import * as C from './App.styles'
import * as Photos from './services/photos'
import { Photo } from './types/Photo'
import React from 'react';
import ReactLoading from 'react-loading';
import { PhotoItem } from './components/PhotoItem';

const App = () => {
   const [loading, setLoading] = useState(false);
   const [photos, setPhotos] = useState<Photo[]>([])

   useEffect(()=> {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos( await Photos.getAll()) ;
      setLoading(false);
    }
    getPhotos();
   },[])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        {/* Area de upload */}

        { loading && 
          <C.ScreenWarning>
            <ReactLoading className="loader" type={'spin'} color={'white'} height={'100px'} width={'100px'}  />
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item,index)=> (
            <PhotoItem key={index} url={item.url} name={item.name}/>
          ))}
        </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
        <C.ScreenWarning>
          <div>Não há fotos cadastradas 😞</div>
        </C.ScreenWarning>
       }
      </C.Area>
    </C.Container>
  )
}

export default App