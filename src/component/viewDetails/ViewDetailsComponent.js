import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewDetailsComponent.css";
import { addToCart } from "../../redux/features/cart/CartSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

const ViewDetailsComponent = () => {
  const [packageData, setPackageData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRole = Cookies.get("role");

  const fetchPackageData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/package/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch package data");
      }
      const data = await response.json();
      setPackageData(data.package);
    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  };

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    navigate(`/cart/${id}`);
  };

  useEffect(() => {
    if (id) {
      fetchPackageData();
    }
  }, [id]);

  const userId = Cookies.get("User_id");

  const addToWishList = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/add-to-wishlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            packageName: data.packageName,
            packageImage: data.packageImage,
            packageDescription: data.packageDescription,
            startPoint: data.startPoint,
            amenities: data.amenities,
            places: data.places,
            price: data.price,
            userId: userId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add package to wishlist");
      }

      const result = await response.json();
      console.log("Package added to wishlist:", result);
      toast.success("Package Added to Wishlist");
      navigate("/wishlists");
      // Optionally, you can navigate or show a message to the user here
    } catch (error) {
      console.error("Error adding package to wishlist:", error);
    }
  };

  const goToChat = async () => {
    if (packageData) {
      try {
        const response = await fetch(
          `http://localhost:4000/api/user/${packageData.userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        console.log("User Data:", userData);
        navigate(`/messages/${packageData.userId}`, {
          state: { user: userData, packageData },
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  return (
    <>
    <div className="box-content new-bx-content">
        <div className="view-details-c-main">
          <div className="container">
            {/* <div className="box-heading">
              <div className="box-title">
                <h3 className="mb-15 mx-4">Package Details</h3>
              </div>
            </div> */}
            <div className="box-content" >
              {packageData && (
                <>
                  <div className="row new-row">
                    <div className="col-lg-8">
                      <div className="section-box" style={{marginTop:'2rem'}}>
                        <div className="container">
                          <div className="panel-white mb-30">
                            <div className="box-padding">
                              <div className="row">
                                <div className="col-lg-12">
                                  <img
                                    src={packageData.packageImage}
                                    alt={packageData.packageName}
                                    className="w-55"
                                    style={{borderRadius:'12px'}}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="section-box"
                        
                        style={{
                          backgroundColor: "#eaf2ff",
                          padding: "2rem .5rem",
                          borderRadius:'12px',
                          marginTop:'2rem'
                        }}
                      >
                        <div className="container">
                          <div className="panel-white" >
                            <div className="panel-head">
                              <h5>Package Details</h5>
                            </div>
                            <div className="panel-body pt-20">
                              <div className="row">
                                <div className="col-lg-12">
                                  <h3>{packageData.packageName}</h3>
                                  <p className="package-Des">
                                    {packageData.packageDescription}
                                  </p>
                                  <p>
                                    <b className="amenitiesTxt">Amenities</b>
                                  </p>
                                  {packageData.amenities.map(
                                    (amenity, index) => (
                                      <a
                                        key={index}
                                        className="btn btn-tags-sm mb-10 mr-5 allAmenities"
                                        href="#"
                                      >
                                        {amenity}
                                      </a>
                                    )
                                  )}
                                  <p>
                                    <b className="placesTxt">Places</b>
                                  </p>
                                  {packageData.places.map((place, index) => (
                                    <a
                                      key={index}
                                      className="btn btn-tags-sm mb-10 mr-5"
                                      href="#"
                                    >
                                      {place}
                                    </a>
                                  ))}

                                  <p>
                                    <b className="placesTxt">Features</b>
                                  </p>
                                  {packageData.interests.map(
                                    (interest, index) => (
                                      <a
                                        key={index}
                                        className="btn btn-tags-sm mb-10 mr-5"
                                        href="#"
                                      >
                                        {interest}
                                      </a>
                                    )
                                  )}

                                  <p className="detail-Price">
                                    <b className="detail-Price-Inner">
                                      Price :{" "}
                                    </b>{" "}
                                    <span className="detail-Price-Inner-Two">
                                      PKR {packageData.price}
                                    </span>
                                  </p>
                                  <p className="start-Point">
                                    <b className="start-Point-Inner">
                                      Start Point :{" "}
                                    </b>{" "}
                                    <span className="start-Point-Inner-Two">
                                      {packageData.startPoint}
                                    </span>
                                  </p>

                                    {/* <div className="my-4">
                                      <button
                                        className="button2 mb-2"
                                        onClick={() =>
                                          handleAddToCart(packageData)
                                        }
                                      >
                                        Add to Cart
                                      </button>
                                      <button
                                        className="button2 mx-1"
                                        onClick={() =>
                                          addToWishList(packageData)
                                        }
                                      >
                                        Add to Wishlist
                                      </button>
                                      <button
                                        className="button2"
                                        onClick={goToChat}
                                      >
                                        Chat
                                      </button>
                                    </div> */}

                                    <a href="#" style={{color:'#ffa400' , fontWeight:'bold'}}>Click this link to logIn, then enabled add to cart, wishlist, and chat.</a>
                             
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ViewDetailsComponent;
