import './style.css';

function Card({ title, description, cover }) {
    return (
        <div className='card'>
            <img src={cover} alt='card cover' />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card;