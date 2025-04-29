import image from "../assets/chess.jpg"

const NewsItem = ({title, description, src, url}) => {
    return ( 
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-inline-block">
        <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src? src: image} style={{height:"200px", width:"100%"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description? description.slice(0,90):"News is not available"}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
        </div>
     );
}

export default NewsItem