import React from 'react'




export default function Card({cover, title, description, language, }) {
  
  return (
    <article className="card-projet">
      <div className='card-image'><img src={cover} alt="projet"/></div>

        <div className="card-projet_body" >
            <h2 className="card-projet_title">{title}</h2>
            <p className="card-projet_description">{description}</p>
            <div className='card-projet_language'>
              {language.map((lang, index) => (
                <img key= {index} src={lang} alt="langage de programmation"/>
              ))}
            </div>

        </div>


    </article>
  );
}
