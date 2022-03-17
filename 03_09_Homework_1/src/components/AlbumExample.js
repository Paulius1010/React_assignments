import React from 'react'
import Box from './Box'
import { v4 as uuidv4 } from 'uuid';



export default function AlbumExample() {


    let data = [
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        },
        {
            image: "https://cherishsvgfile.com/wp-content/uploads/2022/03/I-Stand-With-Ukraine-svg-SVG030322001.png",
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            minutes: "9 mins"
        }
    ];

    let list = data.map(item => {
        return <Box key={uuidv4()} image={item.image} text={item.text} minutes={item.minutes} />
    });
    return (
        <body class="container-fluid">
            <header >
                <div className="container-flex collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4" >
                        <div className="container" >
                            <div className="row">
                                <div className="col-sm-8 col-md-7 py-4">
                                    <h4 className="text-white">About</h4>
                                    <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                                </div>
                                <div className="col-sm-4 offset-md-1 py-4">
                                    <h4 className="text-white">Contact</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                        <li><a href="#" className="text-white">Like on Facebook</a></li>
                                        <li><a href="#" className="text-white">Email me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div class="container text-color">
                            <div className="navbar-nav me-auto">
                                <h1 className="nav-link active">Album</h1>
                            </div>
                        </div>
                        <div className="navbar-nav me-auto">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>

            </header>
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Album example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                        <p>
                            <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {list}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Visit the homepage</a> or read our <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
        </body>
    )
}
