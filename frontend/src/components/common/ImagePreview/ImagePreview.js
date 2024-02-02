import React, { useEffect, useState } from 'react'

const ImagePreview = ({data,className}) => {
    const [srcData  , setSrcData] = useState();
    const preview = async (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
          setSrcData(reader.result);
        }
      }
      useEffect(()=>{
        preview(data);
      },[data])
  return (
    <img src={srcData}  className={className} alt='img'  loading='lazy'/>
  )
}

export default ImagePreview