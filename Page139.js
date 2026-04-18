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
            <h1 className="page-title" style={{ fontSize: "27px", fontWeight: "bold", margin: "0px 10px", padding: 0, textTransform: "uppercase" }}>Rent a Car in Sector F-4 Islamabad – Convenient, Affordable Rides<span></span></h1>
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
                            <h2>Rent a Car in Sector F-4 Islamabad – Convenient, Affordable Rides</h2>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Experience the perfect combination of convenience and affordability with our car rental service in <b>Sector F-4 Islamabad</b>. We believe that quality transportation should be accessible to everyone, which is why we offer well-maintained vehicles at prices that would not break your budget.
                            </p>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Sector F-4 residents enjoy easy access to our dependable fleet of vehicles perfect for daily commutes, weekend outings, or special occasions. Our service eliminates the hassles of car ownership while providing the freedom to travel whenever and wherever you need, all at remarkably affordable rates.
                            </p>

                            <ul style={{ color: "black", fontWeight: 400 }}>
                              <li><b>Budget-Friendly Rates:</b> Competitive pricing designed to fit every wallet.</li>
                              <li><b>Doorstep Convenience:</b> We pick you up and drop you off at your preferred location in F-4.</li>
                              <li><b>Reliable Fleet:</b> Clean, comfortable, and regularly serviced vehicles.</li>
                              <li><b>Flexible Hours:</b> Book for a few hours or the entire day based on your needs.</li>
                              <li><b>Experienced Drivers:</b> Professional chauffeurs who know Islamabad roads thoroughly.</li>
                            </ul>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Book your convenient and affordable car rental in Sector F-4 Islamabad today. Enjoy stress-free travel with a service that prioritizes your comfort, time, and budget. Your ride is just a call away!
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