import React, { useState, useEffect } from 'react';
import Header from './Header';
import Slider from './Slider';
import Shopwithus from './Shopwithus';
import Bestdevices from './Bestdevices';
import Copyright from './Copyright';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const Mainpage=()=>
{


    const [info, setinfo] = useState([]);
    const [query,setquery]=useState('')
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
       <Header></Header>
        {/* end header section */}
        {/* slider section */}
        <Slider></Slider>
        {/* end slider section */}
      </div>
      {/* why section */}
      <Shopwithus></Shopwithus>
      {/* end why section */}
      {/* arrival section */}
      <Bestdevices></Bestdevices>
      {/* end arrival section */}
      {/* search bar */}
      <form class="search" action="">
  <input style={{width:'50%',padding: '20px',fontSize:'x-large',margin:'25px 300px',}} type="search" placeholder="Search here..."  onChange={e=>setquery(e.target.value)}/>
 
</form>
      {/* end search bar  */}
      {/* product section */}
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            {info.filter((info)=>info.productName.toLowerCase().includes(query)).map((info,index)=>(
                <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                  <Link className="option1" to={info._id}>details</Link>
                    <a href="#" className="option2">
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
      <Footer></Footer>
      {/* footer end */}
     <Copyright></Copyright>
      {/* jQery */}
      {/* popper js */}
      {/* bootstrap js */}
      {/* custom js */}
    
    </div>
  );
}
    
  export default Mainpage;


