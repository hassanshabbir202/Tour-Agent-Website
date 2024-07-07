import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./PackagesComponent.css";

const PackagesComponent = () => {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [startPointFilter, setStartPointFilter] = useState("");
  const navigate = useNavigate();

  const fetchPackages = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/packages");
      const data = await response.json();
      if (response.ok) {
        setPackages(data.packages);
        setFilteredPackages(data.packages);
      } else {
        console.error("Error fetching packages:", data.message);
      }
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    filterPackages();
  }, [searchTerm, priceFilter, startPointFilter]);

  const filterPackages = () => {
    let filtered = packages;

    if (searchTerm) {
      filtered = filtered.filter((pkg) =>
        pkg.packageName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceFilter) {
      filtered = filtered.filter((pkg) => pkg.price == parseFloat(priceFilter));
    }

    if (startPointFilter) {
      filtered = filtered.filter((pkg) =>
        pkg.startPoint.toLowerCase().includes(startPointFilter.toLowerCase())
      );
    }

    setFilteredPackages(filtered);
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handlePriceFilterChange = (e) => setPriceFilter(e.target.value);
  const handleStartPointFilterChange = (e) =>
    setStartPointFilter(e.target.value);

  const viewDetails = (id) => {
    navigate(`/view-details/${id}`);
  };

  return (
    <div className="pc-main">
      <div className="box-content">
        <div className="row parent-c-pkg">
       
          <div className="col-lg-12">
            
            <div className="section-box">



              <div className="container">
                <div>
                <div className="container" >
            <div
              className="box-heading"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap:'wrap',
                marginBottom: ".5rem",
                marginTop:'2rem'
              }}
            >
              <div className="box-title">
                <h3 className="mb-15 mx-2">Packages</h3>
              </div>
              <div className="box-filters" style={{display:'flex'}}>
                <input
                  type="text"
                  placeholder="Search by title"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <input
                  type="text"
                  placeholder="Max Price"
                  value={priceFilter}
                  onChange={handlePriceFilterChange}
                  className="filterByPrice"
                />
                <select
                  value={startPointFilter}
                  onChange={handleStartPointFilterChange}
                  className="filterByStartPoint"
                  style={{border:'1px solid #e0e6f7'}}
                >
                  <option value="">Filter by start point</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Multan">Multan</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Sukkur">Sukkur</option>
                  <option value="Mardan">Mardan</option>
                  <option value="Swat">Swat</option>
                </select>
              </div>
            </div>
          </div>
                </div>
                <div
                  className="panel-white mb-30"
                  style={{ padding: "1rem 1rem" }}
                >
                  {filteredPackages.length > 0 ? (
                    <div className="row">
                      {filteredPackages.map((pkg) => (
                        <div
                          key={pkg._id}
                          className="col-xl-3 col-lg-4 col-md-6"
                        >
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <a href="#">
                                <figure>
                                  <img
                                    alt="packageImage"
                                    className="pckgImage"
                                    src={`data:image/jpeg;base64${pkg.packageImage}`}
                                  />
                                </figure>
                              </a>
                            </div>
                            <div className="card-profile pt-2">
                              <a href="#">
                                <h5 className="pckgName mx-2">
                                  {pkg.packageName}
                                </h5>
                              </a>
                            </div>
                            <div className="card-block-info">
                              <p className="font-xs color-text-paragraph-2">
                                {pkg.packageDescription}
                              </p>
                              <div className="card-2-bottom card-2-bottom-candidate mt-10">
                                <div className="text-start">
                                  {pkg.amenities.map((amenity, index) => (
                                    <a
                                      key={index}
                                      className="btn btn-tags-sm mb-10 mr-5"
                                      href="#"
                                    >
                                      {amenity}
                                    </a>
                                  ))}
                                </div>
                              </div>
                              <div className="employers-info align-items-center justify-content-center mt-15">
                                <div className="row">
                                  <div className="col-6">
                                    <span className="d-flex justify-content-start align-items-center">
                                      <i className="fi-rr-marker mr-5 ml-0"></i>
                                      <span className="font-sm color-text-muted mr-3">
                                        {pkg.startPoint}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="col-6">
                                    <span className="d-flex justify-content-end align-items-center">
                                      <span className="font-sm color-text-muted mr-3">
                                        PKR {pkg.price}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="col-12">
                                    <span className="main-btn-c">
                                      <div>
                                        <span className="font-sm color-brand-1 my-2" style={{textAlign:'right'}}>
                                          <p
                                            className="viewDetailsBtn"
                                            onClick={() => viewDetails(pkg._id)}
                                            style={{color:'#ffa400'}}
                                          >
                                            View Details
                                          </p>
                                        </span>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <h4 className="text-center">No Package Found</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PackagesComponent;
