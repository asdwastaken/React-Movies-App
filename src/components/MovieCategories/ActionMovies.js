import { Link } from "react-router-dom";

export default function ActionMovies({
    allMovies,

}) {


    return (
        <div className="movies-category-container">

            <h3>Action</h3>
            <div className="movies-category">
                <div className="cards-category-section">
                    {allMovies.map(x =>
                        x.genres.includes('Action') &&
                        <Link key={x._id} className="card" to={`/movies/${x._id}`}>
                            <img src={x.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                            </div>
                        </Link>
                    )}
                </div>
            </div>

        </div>
    )



}