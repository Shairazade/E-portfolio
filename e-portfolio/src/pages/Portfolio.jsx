import React, {useEffect, useState} from 'react';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Portfolio() {
    const [data, setData] = useState ([]);

    useEffect (() => {
      axios.get("/projets.json").then((res)=> setData(res.data));
    }, []);

  return (
    <div className='portfolio-container'> 
        <div className='portfolio-description'>
          <h2 className='h1Size'>A propos de moi</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <div className="btn-center">
          <Button to= "https://github.com/Shairazade?tab=repositories" text="Voir mon CV"/>
          </div>
        </div>

        <h2 className='h1Size'>Projets réalisés</h2>
        <div className='cards-container'>
            {data.map((projet, id) => (
                        <div className='card_projet' key={id}>
                            <Link className='link_card_projet' to={`/projet/${projet.id}`}>
                                <Card cover={projet.cover} title={projet.title} description={projet.description} language={projet.language} />                               
                            </Link>
                            

                        </div>
                    ))}

        </div>
    </div>
  )
}