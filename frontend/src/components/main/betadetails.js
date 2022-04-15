import React from 'react'

function BetaDetails() {
    return (
        <div>
            <div className='container card' style={{ width: "50rem", borderRadius: "5px", boxShadow: "3px 5px #888888", margin: "20px auto", padding: "2rem", background: "rgb(76 175 80 / 14%)" }}>
                <h1>Beta Test Details</h1>
                <div class="row">
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <img style={{ width: "10rem" }} src='https://play-lh.googleusercontent.com/-nPzGmS93EtADPAZkw9fV5659fKf4LZUOjCsQEQOPdFRdSJb0jQ2m9_dcFc9MZKkW4k' alt=''></img>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <h4>Tittle</h4>
                        <h5>Cotegory</h5>
                    </div>
                </div>
                <div className="row mt-3">
                    <h3>Description</h3>
                    <p>
                        In Asphalt 9: Legends, take the wheel of real cars from high-end renowned legendary car manufacturers, such as Ferrari, Porsche, Lamborghini, and W Motors, among many other international brands. Drive, boost and perform stunts across dynamic real-life locations in single or multiplayer play. Racing adrenaline, brought to you by the creators of Asphalt 8: Airborne.
                    </p>
                    <h3>Requirements</h3>
                    <p>
                    ● OS: Windows 10 version 14393.0 or higher
                    </p>
                    <p>
                    ● CPU: Intel Core i3 3.3GHz or better
                    </p>
                    <p>
                    ● RAM: 4 Gb
                    </p>
                    <p>
                    ● Graphics: Intel HD Graphics 4000
                    </p>
                </div>
                <button type="button" className="btn btn-outline-success">Enroll Now</button>
            </div>
        </div>
    )
}

export default BetaDetails;