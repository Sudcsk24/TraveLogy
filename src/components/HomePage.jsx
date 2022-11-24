import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/tajmahal">
                            <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>TAJ MAHAL</h5>
                                <p>One of the Seven Wonders of the World, Taj Mahal is indeed, the most important world heritage site in India. The spellbinding magnificence of this monument needs no explanation.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/delhi'>
                            <img src="https://images.hindustantimes.com/img/2022/05/24/1600x900/128bedb6-bcd6-11ec-9902-472e44f2ebef_1653385228932_1653385247972.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>QUTUB MINAR</h5>
                                <p>Located in the capital city, Qutub Minar is the tall architectural beauty that adorns Delhi with its magnificence. It is the second tallest Minar in the country.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.mapofholiday.com/wp-content/uploads/2021/08/temple-g8425b20ce_1280-min-1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>SUN TEMPLE</h5>
                            <p>Also known as the Black Pagoda, Sun temple is not only a notable architecture but is also one of the most important temples of the South. It belongs to the 13th century and its unique shape of a gigantic chariot accentuates its importance as a heritage site.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to='/khajuraho'>
                            <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1032564361_20200219140243.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>MONUMENTS OF KHAJURAHO</h5>
                                <p>These monuments in the state of Madhya Pradesh are fine denotations of the Chandela Dynasty that existed before the invasion of the Mughals. The sculptural beauty which boldly speaks of the relevance of sensuality makes these monuments a notable piece of the history of India.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/kaziranga'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sambar_Deer_during_Flood_at_Kaziranga_National_Park%2C_North_East_India.jpg/1100px-Sambar_Deer_during_Flood_at_Kaziranga_National_Park%2C_North_East_India.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>KAZIRANGA NATIONAL PARK</h5>
                                <p>Located in the eastern state of Assam, the Kaziranga National Park was deemed as a world heritage site for its exceptional natural environment. It houses around two-thirds of the world’s Great One-horned Rhinoceroses.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HomePage
