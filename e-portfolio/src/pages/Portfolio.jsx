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
    <div className='portfolio-container'> {/*voir style dans card.scss */}
        <div className='portfolio-description'> {/*voir style dans card.scss */}
          <h2 className='h1Size'>A propos de moi</h2>
          <p>Je suis Shairazade Hassani, développeuse intégratrice web, mon objectif est de donner vie à vos projets. Je suis à l'écoute de vos besoins, force de proposition et en quête de nouveaux défis. Prête à m'investir pleinement dans votre projet, je m'adapte avec agilité pour offrir des solutions sur mesure. Chaque projet démontre mon savoir-faire, associant créativité et compétences techniques pour concrétiser vos idées les plus ambitieuses. Parcourez mon portfolio pour découvrir l’ensemble des projets que j’ai réalisés. Si vous voulez en savoir plus sur mon parcours, n’hésitez pas :</p>
          <div className="btn-center">
          <Button to= "https://github.com/Shairazade?tab=repositories" text="Voir mon CV"/>
          </div>
        </div>

        <h2 className='h1Size'>Projets réalisés</h2>
        <div className='cards-container'>
            {data.map((projet, id) => (
                            <Link key={id} className='link_card_projet' to={`/projet/${projet.id}`}>
                                <Card cover={projet.cover} title={projet.title} description={projet.description} language={projet.language} />                               
                            </Link>
                    ))}

        </div>
    </div>
  )
}