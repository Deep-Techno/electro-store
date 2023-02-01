import React, { useState, useEffect } from 'react';


const Mainpage=()=>
{


    const [info, setinfo] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8080/api/product/productDetails')
        .then(response => response.json())
        .then(data => setinfo(data.productDetails));
    }, []);
    console.log('data from ssssssss', info)
    // console.log('imageeeeeeeeeeeeeeeee', info.productDetails[0]._id)





  return (
    <div>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html"><img width={250} src="images/logo.png" alt="#" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Pages <span className="caret" /></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="about.html">About</a></li>
                      <li><a href="testimonial.html">Testimonial</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="product.html">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog_list.html">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
                        <g>
                          <g>
                            <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                        c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                        C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                        c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                        C457.728,97.71,450.56,86.958,439.296,84.91z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                        c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                          </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section ">
          <div className="slider_bg_box">
            <img src="images/slider-bg.jpg" alt="" />
          </div>
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>
                          <span>
                            Sale 20% Off
                          </span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href className="btn1">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>
                          <span>
                            Sale 20% Off
                          </span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href className="btn1">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>
                          <span>
                            Sale 40% Off
                          </span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href className="btn1">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                <li data-target="#customCarousel1" data-slide-to={1} />
                <li data-target="#customCarousel1" data-slide-to={2} />
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* why section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Shop With Us
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                    <g>
                      <g>
                        
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                                  c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                                  c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96
                                  c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614
                                  c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M278.771,173.37c-3.13-3.13-8.207-3.13-11.337,0.001l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0
                                  c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348l76.96-76.96
                                  C281.901,181.576,281.901,176.501,278.771,173.37z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>
                </div>
                <div className="detail-box">
                  <h5>
                    Fast Delivery
                  </h5>
                  <p>
                    variations of passages of Lorem Ipsum available
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.667 490.667" style={{enableBackground: 'new 0 0 490.667 490.667'}} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M138.667,192H96c-5.888,0-10.667,4.779-10.667,10.667V288c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
                                  v-74.667h32c5.888,0,10.667-4.779,10.667-10.667S144.555,192,138.667,192z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M117.333,234.667H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,256,96,256h21.333c5.888,0,10.667-4.779,10.667-10.667
                                  S123.221,234.667,117.333,234.667z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333
                                  S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224
                                  S368.853,469.333,245.333,469.333z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M386.752,131.989C352.085,88.789,300.544,64,245.333,64s-106.752,24.789-141.419,67.989
                                  c-3.691,4.587-2.965,11.307,1.643,14.997c4.587,3.691,11.307,2.965,14.976-1.643c30.613-38.144,76.096-60.011,124.8-60.011
                                  s94.187,21.867,124.779,60.011c2.112,2.624,5.205,3.989,8.32,3.989c2.368,0,4.715-0.768,6.677-2.347
                                  C389.717,143.296,390.443,136.576,386.752,131.989z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M376.405,354.923c-4.224-4.032-11.008-3.861-15.061,0.405c-30.613,32.235-71.808,50.005-116.011,50.005
                                  s-85.397-17.771-115.989-50.005c-4.032-4.309-10.816-4.437-15.061-0.405c-4.309,4.053-4.459,10.816-0.405,15.083
                                  c34.667,36.544,81.344,56.661,131.456,56.661s96.789-20.117,131.477-56.661C380.864,365.739,380.693,358.976,376.405,354.923z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M206.805,255.723c15.701-2.027,27.861-15.488,27.861-31.723c0-17.643-14.357-32-32-32h-21.333
                                  c-5.888,0-10.667,4.779-10.667,10.667v42.581c0,0.043,0,0.107,0,0.149V288c0,5.888,4.779,10.667,10.667,10.667
                                  S192,293.888,192,288v-16.917l24.448,24.469c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.136
                                  c4.16-4.16,4.16-10.923,0-15.083L206.805,255.723z M192,234.667v-21.333h10.667c5.867,0,10.667,4.779,10.667,10.667
                                  s-4.8,10.667-10.667,10.667H192z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M309.333,277.333h-32v-64h32c5.888,0,10.667-4.779,10.667-10.667S315.221,192,309.333,192h-42.667
                                  c-5.888,0-10.667,4.779-10.667,10.667V288c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667
                                  S315.221,277.333,309.333,277.333z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M288,234.667h-21.333c-5.888,0-10.667,4.779-10.667,10.667S260.779,256,266.667,256H288
                                  c5.888,0,10.667-4.779,10.667-10.667S293.888,234.667,288,234.667z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M394.667,277.333h-32v-64h32c5.888,0,10.667-4.779,10.667-10.667S400.555,192,394.667,192H352
                                  c-5.888,0-10.667,4.779-10.667,10.667V288c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667
                                  S400.555,277.333,394.667,277.333z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M373.333,234.667H352c-5.888,0-10.667,4.779-10.667,10.667S346.112,256,352,256h21.333
                                  c5.888,0,10.667-4.779,10.667-10.667S379.221,234.667,373.333,234.667z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>
                </div>
                <div className="detail-box">
                  <h5>
                    Free Shiping
                  </h5>
                  <p>
                    variations of passages of Lorem Ipsum available
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <svg id="_30_Premium" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg" data-name="30_Premium">
                    <g id="filled">
                      <path d="m252.92 300h3.08a124.245 124.245 0 1 0 -4.49-.09c.075.009.15.023.226.03.394.039.789.06 1.184.06zm-96.92-124a100 100 0 1 1 100 100 100.113 100.113 0 0 1 -100-100z" />
                      <path d="m447.445 387.635-80.4-80.4a171.682 171.682 0 0 0 60.955-131.235c0-94.841-77.159-172-172-172s-172 77.159-172 172c0 73.747 46.657 136.794 112 161.2v158.8c-.3 9.289 11.094 15.384 18.656 9.984l41.344-27.562 41.344 27.562c7.574 5.4 18.949-.7 18.656-9.984v-70.109l46.6 46.594c6.395 6.789 18.712 3.025 20.253-6.132l9.74-48.724 48.725-9.742c9.163-1.531 12.904-13.893 6.127-20.252zm-339.445-211.635c0-81.607 66.393-148 148-148s148 66.393 148 148-66.393 148-148 148-148-66.393-148-148zm154.656 278.016a12 12 0 0 0 -13.312 0l-29.344 19.562v-129.378a172.338 172.338 0 0 0 72 0v129.38zm117.381-58.353a12 12 0 0 0 -9.415 9.415l-6.913 34.58-47.709-47.709v-54.749a171.469 171.469 0 0 0 31.467-15.6l67.151 67.152z" />
                      <path d="m287.62 236.985c8.349 4.694 19.251-3.212 17.367-12.618l-5.841-35.145 25.384-25c7.049-6.5 2.89-19.3-6.634-20.415l-35.23-5.306-15.933-31.867c-4.009-8.713-17.457-8.711-21.466 0l-15.933 31.866-35.23 5.306c-9.526 1.119-13.681 13.911-6.634 20.415l25.384 25-5.841 35.145c-1.879 9.406 9 17.31 17.367 12.618l31.62-16.414zm-53-32.359 2.928-17.615a12 12 0 0 0 -3.417-10.516l-12.721-12.531 17.658-2.66a12 12 0 0 0 8.947-6.5l7.985-15.971 7.985 15.972a12 12 0 0 0 8.947 6.5l17.658 2.66-12.723 12.535a12 12 0 0 0 -3.417 10.516l2.928 17.615-15.849-8.231a12 12 0 0 0 -11.058 0z" />
                    </g>
                  </svg>
                </div>
                <div className="detail-box">
                  <h5>
                    Best Quality
                  </h5>
                  <p>
                    variations of passages of Lorem Ipsum available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why section */}
      {/* arrival section */}
      <section className="arrival_section">
        <div className="container">
          <div className="box">
            <div className="arrival_bg_box">
              <img src="images/arrival-bg.png" alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="heading_container remove_line_bt">
                  <h2>
                    #NewArrivals
                  </h2>
                </div>
                <p style={{marginTop: '20px', marginBottom: '30px'}}>
                  Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                </p>
                <a href>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end arrival section */}
      {/* product section */}
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            {info.map((info,index)=>(
                <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href={info._id} className="option1">
                     details
                    </a>
                    <a href="kkkk" className="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img  src={`http://localhost:8080/public/images/${info.image}`} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                  {info.productName}
                  </h5>
                  <h5>
                    {info.productPrice}
                  </h5>
                </div>
              </div>
            </div>
            
            ))}
         
            
          </div>
          <div className="btn-box">
            <a href>
              View All products
            </a>
          </div>
        </div>
      </section>
      {/* end product section */}
      {/* subscribe section */}
      <section className="subscribe_section">
        <div className="container-fuild">
          <div className="box">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="subscribe_form ">
                  <div className="heading_container heading_center">
                    <h3>Subscribe To Get Discount Offers</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <form action>
                    <input type="email" placeholder="Enter your email" />
                    <button>
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end subscribe section */}
      {/* client section */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Customer's Testimonial
            </h2>
          </div>
          <div id="carouselExample3Controls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/client.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Anna Trevor
                    </h5>
                    <h6>
                      Customer
                    </h6>
                    <p>
                      Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/client.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Anna Trevor
                    </h5>
                    <h6>
                      Customer
                    </h6>
                    <p>
                      Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/client.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Anna Trevor
                    </h5>
                    <h6>
                      Customer
                    </h6>
                    <p>
                      Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn_box">
              <a className="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* footer start */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="#"><img width={210} src="images/logo.png" alt="#" /></a>
                </div>
                <div className="information_f">
                  <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                  <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                  <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Testimonial</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li><a href="#">Account</a></li>
                          <li><a href="#">Checkout</a></li>
                          <li><a href="#">Login</a></li>
                          <li><a href="#">Register</a></li>
                          <li><a href="#">Shopping</a></li>
                          <li><a href="#">Widget</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>     
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>Subscribe by our newsletter and get update protidin.</p>
                    </div>
                    <div className="form_sub">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input type="email" placeholder="Enter Your Mail" name="email" />
                            <input type="submit" defaultValue="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
      <div className="cpy_">
        <p className="mx-auto">© 2021 All Rights Reserved By <a href="https://html.design/">Free Html Templates</a><br />
          Distributed By <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
        </p>
      </div>
      {/* jQery */}
      {/* popper js */}
      {/* bootstrap js */}
      {/* custom js */}
    </div>
  );
}
    
  export default Mainpage;


