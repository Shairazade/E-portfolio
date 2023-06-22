import React from 'react'

export default function Card({cover, title, description, language}) {
  return (
    <article className="card-projet">
    <img src={cover} alt="projet" />
    <div className="card-projet_description">
        <p className="card-projet_title">{title}</p>
        <p className="card-projet_description">{description}</p>
        <div className='card-projet_language'>{language}</div>
    </div>
</article>
  );
}
