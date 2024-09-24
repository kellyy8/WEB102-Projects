import './Card.css'

const Card = (props) => {
    return(
        <div className="cardWrapper">
            <h1 className="title">{props.title}</h1>
            <div className="imageWrapper">
                <img src={props.src} height="100%" width="100%" alt={props.alt}/>
            </div>
            <div className="infoWrapper">
                <p className="info">{props.info}</p>
            </div>
            <a className="url" href={props.url}>Link to more info!</a>
        </div>
    )
}

export default Card