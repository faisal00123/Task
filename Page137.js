import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SubCategoriesProduct = (props) => {

  const [allproduct, setallproduct] = useState([])
  const [Subproduct, setSubproduct] = useState([])

  // categoriesName subcategories

  useEffect(() => {

    window.scrollTo(0, 0)

    fetch("https://demo.app/AllProduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res7 => res7.json())
      .then(res8 => {
        setallproduct(res8)
        const NonActive = res8.filter((res9, i) => {
          // console.log(res9.status , res9.Product_Catagories , "Cars"  , res9.Product_Sub_Catagories , Categoriesname.subCate );
          if (res9.status && res9.Product_Catagories === "Cars") {
            return res9
          }
        })

        setSubproduct(NonActive)
        console.log(NonActive)
      })




  }, [])





  return (




    <>
      <main className="main">
        <div className="text-center">
          <div className="container">
            <h1 className="page-title" style={{ fontSize: "27px", fontWeight: "bold", margin: "0px 10px", padding: 0, textTransform: "uppercase" }}>Rent a Car in Sector H-8 Islamabad for Quick and Easy Rentals<span></span></h1>
          </div>{/* End .container */}
        </div>{/* End .page-header */}
        <hr style={{ margin: "0px" }} />
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="toolbox">
                  <div className="toolbox-left" style={{ width: "100%" }}>
                    <div className="toolbox-info" style={{ width: "100%" }}>
                      <div className='dskjffkj' style={{ width: "100%", display: "flex", color: "black" }}>

                        <div>
                          <span style={{ color: "black", fontSize: "18px" }}>{Subproduct.length} <b>Cars</b>  founds</span>
                        </div>
                      </div>

                    </div>{/* End .toolbox-info */}
                  </div>{/* End .toolbox-left */}

                </div>{/* End .toolbox */}
                <div className="container products mb-3">
                  <div className="row justify-content-center">
                    {Subproduct.map((res, i) => {
                      return (
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                          <div className="product product-7 text-center" style={{ height: "auto" }}>
                            <figure className="product-media">
                              <Link>
                                <img src={res.Product_Image_Upload} alt="Product image" className="w-100" style={{ height: "250px" }} />
                              </Link>

                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                              </div>{/* End .product-cat */}
                              <h3 className="product-title" style={{ maxWidth: "100%", maxHeight: "59px", overflow: "hidden", textAlign: "left" }}><Link style={{ color: "black", fontSize: "20px" }}>{res.Product_Name}</Link></h3>{/* End .product-title */}
                              <hr style={{ margin: "0px" }} />


                              <div className="product-action position-relative visible" style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                {res.Product_Price_Discounted ?
                                  <><span className="product-price" style={{ fontSize: "14px", fontWeight: "bold", color: "black" }}>Rs {res.Product_Price_Discounted} <br /> / Day</span></>
                                  :
                                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "black" }}>
                                    Rs {(res.Product_Price)} <br />
                                    / Day
                                  </span>
                                }
                                <span className="shadow-none" style={{ borderRadius: "15px", maxWidth: "150px", color: "white", background: "#0d6efd", padding: "10px 15px", color: "white", fontSize: "12px", fontWeight: "bold" }} ><a href="tel:+923191793992" style={{ color: "white" }}>Call Now</a> </span>
                                <span className="shadow-none" style={{ borderRadius: "15px", maxWidth: "150px", color: "white", background: "#0d6efd", padding: "10px 15px", color: "white", fontSize: "12px", fontWeight: "bold" }} ><a href="https://wa.me/923191793992?text=Hi *Rent a Car*! I need more info about" style={{ color: "white" }}>Book Now </a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                    }
                    <div className='container' style={{ margin: "30px 10px" }}>
                      <div className='row'  >
                        <div className="col-10 col-lg-10  col-sm-12" style={{ margin: "auto" }}>

                          <section>
                            <h2>Rent a Car in Sector H-8 Islamabad for Quick and Easy Rentals</h2>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Need a car in a hurry? Our <b>quick and easy car rental service in Sector H-8 Islamabad</b> is designed for busy individuals who value speed and convenience. We have streamlined our booking process to get you on the road faster than ever before.
                            </p>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Sector H-8 is a bustling area with professionals who cannot afford to waste time on lengthy rental procedures. Our express service offers rapid booking confirmations, instant driver dispatch, and minimal paperwork so you can focus on what matters most. From call to car, we prioritize efficiency.
                            </p>

                            <ul style={{ color: "black", fontWeight: 400 }}>
                              <li><b>Fast Booking:</b> Quick reservation process with minimal paperwork and delays.</li>
                              <li><b>Rapid Dispatch:</b> Vehicles arrive promptly at your specified location in H-8.</li>
                              <li><b>Express Service:</b> Priority booking for urgent transportation needs.</li>
                              <li><b>Simple Process:</b> Straightforward pricing and hassle-free terms.</li>
                              <li><b>24/7 Availability:</b> Round-the-clock service for emergencies and last-minute plans.</li>
                            </ul>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Contact us now for quick and easy car rentals in Sector H-8 Islamabad. Experience the convenience of a rental service that respects your time and gets you moving without unnecessary delays or complications.
                            </p>
                          </section>





                        </div>
                      </div>
                    </div>



                  </div>{/* End .row */}
                </div>{/* End .products */}
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                        <span aria-hidden="true"><i className="icon-long-arrow-left" /></span>Prev
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                    {/* <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item-total">of 6</li> */}
                    <li className="page-item">
                      <a className="page-link page-link-next" href="#" aria-label="Next">
                        Next <span aria-hidden="true"><i className="icon-long-arrow-right" /></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>{/* End .col-lg-9 */}

            </div>{/* End .row */}
          </div>{/* End .container */}
        </div>{/* End .page-content */}
      </main>{/* End .main */}




    </>
  )
}



export default SubCategoriesProduct;