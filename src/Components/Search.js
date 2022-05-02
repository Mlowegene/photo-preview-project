import React, { useState } from 'react'
import './Search.css'
import Axios from 'axios'

function Search() {
    const [images, setImages] = useState('');
    const [output, setOutput] = useState([]);

    function handleChange(e){
        setImages(e.target.value)
    }

    function handleSubmit () {
        console.log(images)

        Axios.get("https://api.unsplash.com/search/photos?page=1&query="+images+"&per_page=100&client_id=yA_MVWYAf4y7qnoLiC0RaBvOq1Gf1lC8aT8HGJx_Nf8")
        .then((response) => {
            console.log(response);
            setOutput(response.data.results)
        }
      ).catch((error) =>{
          console.log('error has been occured')
      })
    }

   

    return (
        <div className='search'>
          <div className='searchInput'>
              <input type="text" placeholder="search here..." onChange={handleChange} />
              <button type='submit' className='search-btn'onClick={handleSubmit}>search</button>
          </div> 
          <div className='container'>
          {
              output.map((image, index)=>{
                  return(
                      <div>
                      <img className='imageSize' key={index} src={image.urls.small} alt={image.urls.alt_description} />
                      </div>
                  )
              })
          }
       </div>
        </div>
    );
}

export default Search
