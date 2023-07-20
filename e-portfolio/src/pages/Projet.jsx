import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
import axios from "axios";
import Button from '../components/Button/Button';


export default function Projet() {
  const params = useParams();
  

  const [pickedAppart, setPickedAppart] = useState();
  const [validUrl, setValidUrl] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/projets.json");
      const picked = res.data.find(({ id }) => id === params.id);
      if (picked === undefined) {
        setValidUrl(false);
      } else {
        setValidUrl(true);
        setPickedAppart(picked);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []); // Le useEffect ne doit être exécuté qu'une seule fois (tableau de dépendances vide)

  const slidePics = pickedAppart && pickedAppart.pictures;

  const site = pickedAppart && pickedAppart.siteComposition; // Récupération des élements du projet sélectionné et création d'un élément <li> pour chaque élements
  const siteCompo = site && site.map((item, index) => (
      <li key={index} className="List">
        {item}
      </li>
    ));

  const skills = pickedAppart && pickedAppart.newSkills; // Récupération des compétences du projet sélectionné et création d'un élément <li> pour chaque compétences
  const newSkl = skills && skills.map((item, index) => (
      <li key={index} className="List">
        {item}
      </li>
    ));

  return (
    validUrl ? (
      pickedAppart && (
        <div key={params.id} className="fiche-container"> {/*voir style dans body.scss */}



          <Carrousel slides={slidePics} />
          <section className="projetInfo-container"> {/*voir style dans body.scss */}
          <div className="title-container">
                <h1 className="h1Size">{pickedAppart.title}</h1> {/*voir style dans body.scss */}
                <p>{pickedAppart.description}</p>
            </div>

            <div className="collapse-projet-container">
              <Collapse
                aboutTitle="Mission"
                aboutText={pickedAppart.mission}
              />

              <Collapse
                aboutTitle="Composition du site"            
                aboutText={siteCompo} 
              />

              <Collapse
                aboutTitle="Compétences acquises"            
                aboutText={newSkl} 
              />
            </div>

            <p className='info'> <b>Vous pouvez consulter <a href={pickedAppart.seeProject}>le site</a> ou retrouver <a href={pickedAppart.codeSource}>le code source du projet</a> sur mon espace GitHub.</b></p>
            <div className='btn-center'> {/*voir style de btn-center dans card.scss */}
              <Button to= "/portfolio" text="Retour aux projets"  />
            </div>
          </section>
        </div>

      ) ) : (
      <></>
    )
  );
}
