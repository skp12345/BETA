import React from 'react'

function Betalisting() {
    return (
        <div >
            <div>
                <div style={{ width: "100%", height: "7rem", background: "red" }} className='row'>
                    <h1 style={{textAlign:"center",display:"block",flexDirection:"column", margin:"auto"}}>Beta Listing</h1>
                </div>
                <div style={{ width: "100%", height: "30rem" }} className='row'>
                    <div className='col-sm-3 col-xm-3 col-md-3  bg-primary' style={{ height: "33rem" }}>
                    </div>
                    <div className='col-sm-9 col-xm-9 col-md-9  bg-success' style={{ height: "33rem" }}>
                        <div className='row bg-white mt-5 mx-5' style={{ height: "12rem" }}>
                            <img style={{ width: "30vh", marginLeft: "-12px" }} src='https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg'></img>
                        </div>
                        <div className='row bg-white mt-5 mx-5' style={{ height: "12rem" }}>
                            <img style={{ width: "30vh", marginLeft: "-12px" }} src='https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg'></img>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Betalisting;