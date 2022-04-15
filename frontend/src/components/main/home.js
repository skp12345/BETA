import React from 'react'

const Mainhome = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://vistapointe.net/images/beta-test-6.jpg" className="d-block w-100" style={{ height: "70vh" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://t4.ftcdn.net/jpg/03/74/01/47/360_F_374014704_K3DdhvUigx1d6ih00GyhO9VJDfkpWtOg.jpg" className="d-block w-100" style={{ height: "70vh" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://artoftesting.com/wp-content/uploads/2019/12/Beta-Testing-1280x720.jpg" className="d-block w-100" style={{ height: "70vh" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* about */}

      <div className="row mt-2" style={{ padding: "5vh", justifyContent: "center" }}>
        <div className='col-md-7'>
          <div>
            <h2 className='card-tittle' style={{ textAlign: "center" }}>Get Paid Or Free to Perform Beta Testing</h2>
            <p style={{ textAlign: "center", fontSize: "1.3rem" }} className="card-text" >
              Beta testing answers the important question: Will users accept this software? In order to learn the answer to this question, software developers, app developers, and designers need real people to test their new products before they launch and as they introduce new features and iterations.
            </p>
            <div className='my-button' style={{ textAlign: "center" }}><a href='#' className='btn btn-primary ' style={{ fontSize: "1.3rem" }}>Read More</a></div>
          </div>
        </div>

      </div>

      <div className='container mt-5'>
        <div className='section-tittle text-center'>
          <h2 className='' style={{ color: "blue", marginBottom: "3vh" }}>Why β-Testing?</h2>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <h3 style={{textAlign:"center"}}>Free Testing</h3>
            <p className='text-muted' style={{textAlign:"center"}} >
              Provide softwares, games, operating system free given by company or industry.
            </p>
          </div>
          <div className='col-md-6 col-lg-4'>
            <h3 style={{textAlign:"center"}}>Free Testing</h3>
            <p className='text-muted'style={{textAlign:"center"}} >
              Provide softwares, games, operating system free given by company or industry.
            </p>
          </div>
          <div className='col-md-6 col-lg-4'>
            <h3 style={{textAlign:"center"}}>Free Testing</h3>
            <p className='text-muted' style={{textAlign:"center"}} >
              Provide softwares, games, operating system free given by company or industry.
            </p>
          </div>

        </div>

      </div>
    </div>


  )
}

export default Mainhome;