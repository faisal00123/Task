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
            <h1 className="page-title" style={{ fontSize: "27px", fontWeight: "bold", margin: "0px 10px", padding: 0, textTransform: "uppercase" }}>Rent a Car in Sectors E-12, E-13 Islamabad – Spacious Rentals<span></span></h1>
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
                            <h2>Rent a Car in Sectors E-12, E-13 Islamabad – Spacious Rentals</h2>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Discover the convenience of spacious and comfortable car rentals in <b>Sectors E-12 and E-13 Islamabad</b>. Our large-capacity vehicles are perfect for families, groups, and anyone who values extra room during their travels. Experience the freedom of ample legroom and luggage space with our premium rental service.
                            </p>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Whether you are planning a family outing, group excursion, airport transfer with multiple passengers, or simply prefer a larger vehicle for comfort, our spacious rental cars in E-12 and E-13 sectors provide the ideal solution. Our fleet includes SUVs, vans, and executive sedans designed to accommodate your needs.
                            </p>

                            <ul style={{ color: "black", fontWeight: 400 }}>
                              <li><b>Spacious Vehicles:</b> Large SUVs, vans, and roomy sedans for comfortable group travel.</li>
                              <li><b>Ample Luggage Space:</b> Perfect for airport transfers and trips requiring extra storage.</li>
                              <li><b>Family-Friendly:</b> Child-safe vehicles with comfortable seating for everyone.</li>
                              <li><b>Group Accommodations:</b> Vehicles suitable for corporate teams and tourist groups.</li>
                              <li><b>Professional Drivers:</b> Courteous chauffeurs experienced in handling larger vehicles.</li>
                            </ul>

                            <p style={{ color: "black", fontWeight: 400 }}>
                              Book your spacious car rental in Sectors E-12 and E-13 Islamabad today and enjoy the comfort of extra room for passengers and luggage. Perfect for families, groups, and travelers who refuse to compromise on comfort and convenience.
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