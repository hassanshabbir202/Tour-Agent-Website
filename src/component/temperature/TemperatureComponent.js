import React, { useEffect, useState } from "react";
import "./TemperatureComponent.css";

const TemperatureComponent = () => {
  const [karachiLocation, setKarachiLocation] = useState();
  const [karachiCurrent, setKarachiCurrent] = useState();
  const [peshawarLocation, setPeshawarLocation] = useState();
  const [peshawarCurrent, setPeshawarCurrent] = useState();
  const [swatLocation, setSwatLocation] = useState();
  const [swatCurrent, setSwatCurrent] = useState();
  const [hyderabadLocation, setHyderabadLocation] = useState();
  const [hyderabadCurrent, setHyderabadCurrent] = useState();
  const [multanLocation, setMultanLocation] = useState();
  const [multanCurrent, setMultanCurrent] = useState();
  const [skarduLocation, setSkarduLocation] = useState();
  const [skarduCurrent, setSkarduCurrent] = useState();
  const [lahoreLocation, setLahoreLocation] = useState();
  const [lahoreCurrent, setLahoreCurrent] = useState();

  // Karachi Location
  const getKarachiLocation = async () => {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=24.8%2C67.0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "6abc3e377bmshed94351247d23c3p1c25dejsn2558f3655d2e",
        },
      }
    );
    const data = await res.json();
    setKarachiLocation(data.location);
    setKarachiCurrent(data.current);
  };

  // Peshawar Location
  const getPeshawarLocation = async () => {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=34.0%2C71.5",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "6abc3e377bmshed94351247d23c3p1c25dejsn2558f3655d2e",
        },
      }
    );
    const data = await res.json();
    setPeshawarLocation(data.location);
    setPeshawarCurrent(data.current);
  };

  // Swat Location
  const getSwatLocation = async () => {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=35.3%2C72.1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "6abc3e377bmshed94351247d23c3p1c25dejsn2558f3655d2e",
        },
      }
    );
    const data = await res.json();
    setSwatLocation(data.location);
    setSwatCurrent(data.current);
  };

  // Hyderabad Location
  const getHyderabadLocation = async () => {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=25.3%2C68.3",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "6abc3e377bmshed94351247d23c3p1c25dejsn2558f3655d2e",
        },
      }
    );
    const data = await res.json();
    setHyderabadLocation(data.location);
    setHyderabadCurrent(data.current);
  };

  // Multan Location
  const getMultanLocation = async () => {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=30.1%2C71.4",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "6abc3e377bmshed94351247d23c3p1c25dejsn2558f3655d2e",
        },
      }
    );
    const data = await res.json();
    setMultanLocation(data.location);
    setMultanCurrent(data.current);
  };

  // Skardu Location
  const getSkarduLocation = async () => {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=35.2%2C75.6",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "6abc3e377bmshed94351247d23c3p1c25dejsn2558f3655d2e",
        },
      }
    );
    const data = await res.json();
    setSkarduLocation(data.location);
    setSkarduCurrent(data.current);
  };

  // Lahore Location
  const getLahoreLocation = async () => {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=31.5%2C74.3",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "6abc3e377bmshed94351247d23c3p1c25dejsn2558f3655d2e",
        },
      }
    );
    const data = await res.json();
    setLahoreLocation(data.location);
    setLahoreCurrent(data.current);
  };

  useEffect(() => {
    getKarachiLocation();
    getPeshawarLocation();
    getSwatLocation();
    getHyderabadLocation();
    getMultanLocation();
    getSkarduLocation();
    getLahoreLocation();
  }, []);

  return (
    <>
      <div className="container">
       <div style={{margin:'0rem 0rem 4rem 0rem'}}>
       <h3 className="mb-4 text-center">CURRENT TEMPERATURE</h3>
       </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <a href="#">
                  <figure>
                    <img
                      alt="packageImage"
                      className="pckgImage"
                      src="https://miro.medium.com/max/1400/1*z6WgBka38be9qwXhzKaE2A.jpeg"
                    />
                  </figure>
                </a>
              </div>
              <div className="card-profile pt-2">
                <a href="#">
                  <h5 className="pckgName mx-2" style={{ color: "#ffa400" }}>
                    {karachiLocation?.name} / {karachiLocation?.region}
                  </h5>
                </a>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Longitute</b> :{" "}
                  {karachiLocation?.lat} , <b className="font-bold">Latitude</b>{" "}
                  :{karachiLocation?.lon}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Cloud</b> : {karachiCurrent?.cloud} ,{" "}
                  <b className="font-bold">Dew Point-C</b> :{" "}
                  {karachiCurrent?.dewpoint_c} ,{" "}
                  <b className="font-bold">Dew Point-F</b> :{" "}
                  {karachiCurrent?.dewpoint_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">FeelsLike-C</b> :{" "}
                  {karachiCurrent?.feelslike_c} ,{" "}
                  <b className="font-bold"> FeelsLike-F</b> :{" "}
                  {karachiCurrent?.feelslike_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Gust Kph</b> :{" "}
                  {karachiCurrent?.gust_kph} ,{" "}
                  <b className="font-bold"> Gust Mph </b>:{" "}
                  {karachiCurrent?.gust_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Heat Index-C</b> :{" "}
                  {karachiCurrent?.heatindex_c} ,{" "}
                  <b className="font-bold">Heat Index-F</b> :{" "}
                  {karachiCurrent?.heatindex_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Humidity</b> :{" "}
                  {karachiCurrent?.humidity} ,{" "}
                  <b className="font-bold">Is Day</b> : {karachiCurrent?.is_day}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated</b> :{" "}
                  {karachiCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated Epoch</b> :{" "}
                  {karachiCurrent?.last_updated_epoch} ,{" "}
                  <b className="font-bold">Is Day </b>: {karachiCurrent?.is_day}{" "}
                  , <b className="font-bold">Last Updated</b> :{" "}
                  {karachiCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Precip-IN</b> :{" "}
                  {karachiCurrent?.precip_in} ,{" "}
                  <b className="font-bold">Precip-MM </b>:{" "}
                  {karachiCurrent?.precip_mm}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Pressure-IN</b> :{" "}
                  {karachiCurrent?.pressure_in} ,{" "}
                  <b className="font-bold">Pressure-MB</b> :{" "}
                  {karachiCurrent?.pressure_mb}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Temp-C</b> : {karachiCurrent?.temp_c}{" "}
                  , <b className="font-bold">Temp-F</b> :{" "}
                  {karachiCurrent?.temp_f} , <b className="font-bold">UV</b> :{" "}
                  {karachiCurrent?.uv}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Vis-Km </b> :{" "}
                  {karachiCurrent?.vis_km} , <b className="font-bold">Vis-M</b>{" "}
                  : {karachiCurrent?.vis_miles} ,{" "}
                  <b className="font-bold">Wind-D</b> :{" "}
                  {karachiCurrent?.wind_degree}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Wind-D</b> :{" "}
                  {karachiCurrent?.wind_dir} ,{" "}
                  <b className="font-bold">Wind-Kph</b> :{" "}
                  {karachiCurrent?.wind_kph} ,{" "}
                  <b className="font-bold">Wind-Mph</b> :{" "}
                  {karachiCurrent?.wind_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">WindChill-C</b> :{" "}
                  {karachiCurrent?.windchill_c} ,{" "}
                  <b className="font-bold">WindChill-F</b> :{" "}
                  {karachiCurrent?.windchill_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Description</b> :{" "}
                  {karachiCurrent?.condition.text}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <a href="#">
                  <figure>
                    <img
                      alt="packageImage"
                      className="pckgImage"
                      src="https://www.travelgirls.pk/wp-content/uploads/2020/05/Peshawar-Gor-Katri-gate-1024x768.jpg"
                    />
                  </figure>
                </a>
              </div>
              <div className="card-profile pt-2">
                <a href="#">
                  <h5 className="pckgName mx-2" style={{ color: "#ffa400" }}>
                    {peshawarLocation?.name} / {peshawarLocation?.region}
                  </h5>
                </a>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Longitute</b> :{" "}
                  {peshawarLocation?.lat} ,{" "}
                  <b className="font-bold">Latitude</b> :{peshawarLocation?.lon}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Cloud</b> : {peshawarCurrent?.cloud}{" "}
                  , <b className="font-bold">Dew Point-C</b> :{" "}
                  {peshawarCurrent?.dewpoint_c} ,{" "}
                  <b className="font-bold">Dew Point-F</b> :{" "}
                  {peshawarCurrent?.dewpoint_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">FeelsLike-C</b> :{" "}
                  {peshawarCurrent?.feelslike_c} ,{" "}
                  <b className="font-bold"> FeelsLike-F</b> :{" "}
                  {peshawarCurrent?.feelslike_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Gust Kph</b> :{" "}
                  {peshawarCurrent?.gust_kph} ,{" "}
                  <b className="font-bold"> Gust Mph </b>:{" "}
                  {peshawarCurrent?.gust_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Heat Index-C</b> :{" "}
                  {peshawarCurrent?.heatindex_c} ,{" "}
                  <b className="font-bold">Heat Index-F</b> :{" "}
                  {peshawarCurrent?.heatindex_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Humidity</b> :{" "}
                  {peshawarCurrent?.humidity} ,{" "}
                  <b className="font-bold">Is Day</b> :{" "}
                  {peshawarCurrent?.is_day}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated</b> :{" "}
                  {peshawarCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated Epoch</b> :{" "}
                  {peshawarCurrent?.last_updated_epoch} ,{" "}
                  <b className="font-bold">Is Day </b>:{" "}
                  {peshawarCurrent?.is_day} ,{" "}
                  <b className="font-bold">Last Updated</b> :{" "}
                  {peshawarCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Precip-IN</b> :{" "}
                  {peshawarCurrent?.precip_in} ,{" "}
                  <b className="font-bold">Precip-MM </b>:{" "}
                  {peshawarCurrent?.precip_mm}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Pressure-IN</b> :{" "}
                  {peshawarCurrent?.pressure_in} ,{" "}
                  <b className="font-bold">Pressure-MB</b> :{" "}
                  {peshawarCurrent?.pressure_mb}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Temp-C</b> :{" "}
                  {peshawarCurrent?.temp_c} ,{" "}
                  <b className="font-bold">Temp-F</b> :{" "}
                  {peshawarCurrent?.temp_f} , <b className="font-bold">UV</b> :{" "}
                  {peshawarCurrent?.uv}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Vis-Km </b> :{" "}
                  {peshawarCurrent?.vis_km} , <b className="font-bold">Vis-M</b>{" "}
                  : {peshawarCurrent?.vis_miles} ,{" "}
                  <b className="font-bold">Wind-D</b> :{" "}
                  {peshawarCurrent?.wind_degree}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Wind-D</b> :{" "}
                  {peshawarCurrent?.wind_dir} ,{" "}
                  <b className="font-bold">Wind-Kph</b> :{" "}
                  {peshawarCurrent?.wind_kph} ,{" "}
                  <b className="font-bold">Wind-Mph</b> :{" "}
                  {peshawarCurrent?.wind_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">WindChill-C</b> :{" "}
                  {peshawarCurrent?.windchill_c} ,{" "}
                  <b className="font-bold">WindChill-F</b> :{" "}
                  {peshawarCurrent?.windchill_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Description</b> :{" "}
                  {peshawarCurrent?.condition.text}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <a href="#">
                  <figure>
                    <img
                      alt="packageImage"
                      className="pckgImage"
                      src="https://dnd.com.pk/wp-content/uploads/2019/12/Bahrain-Swat-KPK-Pakistan.jpg"
                    />
                  </figure>
                </a>
              </div>
              <div className="card-profile pt-2">
                <a href="#">
                  <h5 className="pckgName mx-2" style={{ color: "#ffa400" }}>
                    {swatLocation?.name} / {swatLocation?.region}
                  </h5>
                </a>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Longitute</b> : {swatLocation?.lat} ,{" "}
                  <b className="font-bold">Latitude</b> :{swatLocation?.lon}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Cloud</b> : {swatCurrent?.cloud} ,{" "}
                  <b className="font-bold">Dew Point-C</b> :{" "}
                  {swatCurrent?.dewpoint_c} ,{" "}
                  <b className="font-bold">Dew Point-F</b> :{" "}
                  {swatCurrent?.dewpoint_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">FeelsLike-C</b> :{" "}
                  {swatCurrent?.feelslike_c} ,{" "}
                  <b className="font-bold"> FeelsLike-F</b> :{" "}
                  {swatCurrent?.feelslike_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Gust Kph</b> :{" "}
                  {swatCurrent?.gust_kph} ,{" "}
                  <b className="font-bold"> Gust Mph </b>:{" "}
                  {swatCurrent?.gust_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Heat Index-C</b> :{" "}
                  {swatCurrent?.heatindex_c} ,{" "}
                  <b className="font-bold">Heat Index-F</b> :{" "}
                  {swatCurrent?.heatindex_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Humidity</b> :{" "}
                  {swatCurrent?.humidity} , <b className="font-bold">Is Day</b>{" "}
                  : {swatCurrent?.is_day}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated</b> :{" "}
                  {swatCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated Epoch</b> :{" "}
                  {swatCurrent?.last_updated_epoch} ,{" "}
                  <b className="font-bold">Is Day </b>: {swatCurrent?.is_day} ,{" "}
                  <b className="font-bold">Last Updated</b> :{" "}
                  {swatCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Precip-IN</b> :{" "}
                  {swatCurrent?.precip_in} ,{" "}
                  <b className="font-bold">Precip-MM </b>:{" "}
                  {swatCurrent?.precip_mm}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Pressure-IN</b> :{" "}
                  {swatCurrent?.pressure_in} ,{" "}
                  <b className="font-bold">Pressure-MB</b> :{" "}
                  {swatCurrent?.pressure_mb}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Temp-C</b> : {swatCurrent?.temp_c} ,{" "}
                  <b className="font-bold">Temp-F</b> : {swatCurrent?.temp_f} ,{" "}
                  <b className="font-bold">UV</b> : {swatCurrent?.uv}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Vis-Km </b> : {swatCurrent?.vis_km} ,{" "}
                  <b className="font-bold">Vis-M</b> : {swatCurrent?.vis_miles}{" "}
                  , <b className="font-bold">Wind-D</b> :{" "}
                  {swatCurrent?.wind_degree}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Wind-D</b> : {swatCurrent?.wind_dir}{" "}
                  , <b className="font-bold">Wind-Kph</b> :{" "}
                  {swatCurrent?.wind_kph} ,{" "}
                  <b className="font-bold">Wind-Mph</b> :{" "}
                  {swatCurrent?.wind_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">WindChill-C</b> :{" "}
                  {swatCurrent?.windchill_c} ,{" "}
                  <b className="font-bold">WindChill-F</b> :{" "}
                  {swatCurrent?.windchill_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Description</b> :{" "}
                  {swatCurrent?.condition.text}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <a href="#">
                  <figure>
                    <img
                      alt="packageImage"
                      className="pckgImage"
                      src="https://voiceofadventure.com/wp-content/uploads/2021/03/Charminar-e1615299322696.jpg"
                    />
                  </figure>
                </a>
              </div>
              <div className="card-profile pt-2">
                <a href="#">
                  <h5 className="pckgName mx-2" style={{ color: "#ffa400" }}>
                    {hyderabadLocation?.name} / {hyderabadLocation?.region}
                  </h5>
                </a>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Longitute</b> :{" "}
                  {hyderabadLocation?.lat} ,{" "}
                  <b className="font-bold">Latitude</b> :
                  {hyderabadLocation?.lon}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Cloud</b> : {hyderabadCurrent?.cloud}{" "}
                  , <b className="font-bold">Dew Point-C</b> :{" "}
                  {hyderabadCurrent?.dewpoint_c} ,{" "}
                  <b className="font-bold">Dew Point-F</b> :{" "}
                  {hyderabadCurrent?.dewpoint_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">FeelsLike-C</b> :{" "}
                  {hyderabadCurrent?.feelslike_c} ,{" "}
                  <b className="font-bold"> FeelsLike-F</b> :{" "}
                  {hyderabadCurrent?.feelslike_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Gust Kph</b> :{" "}
                  {hyderabadCurrent?.gust_kph} ,{" "}
                  <b className="font-bold"> Gust Mph </b>:{" "}
                  {hyderabadCurrent?.gust_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Heat Index-C</b> :{" "}
                  {hyderabadCurrent?.heatindex_c} ,{" "}
                  <b className="font-bold">Heat Index-F</b> :{" "}
                  {hyderabadCurrent?.heatindex_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Humidity</b> :{" "}
                  {hyderabadCurrent?.humidity} ,{" "}
                  <b className="font-bold">Is Day</b> :{" "}
                  {hyderabadCurrent?.is_day}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated</b> :{" "}
                  {hyderabadCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated Epoch</b> :{" "}
                  {hyderabadCurrent?.last_updated_epoch} ,{" "}
                  <b className="font-bold">Is Day </b>:{" "}
                  {hyderabadCurrent?.is_day} ,{" "}
                  <b className="font-bold">Last Updated</b> :{" "}
                  {hyderabadCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Precip-IN</b> :{" "}
                  {hyderabadCurrent?.precip_in} ,{" "}
                  <b className="font-bold">Precip-MM </b>:{" "}
                  {hyderabadCurrent?.precip_mm}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Pressure-IN</b> :{" "}
                  {hyderabadCurrent?.pressure_in} ,{" "}
                  <b className="font-bold">Pressure-MB</b> :{" "}
                  {hyderabadCurrent?.pressure_mb}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Temp-C</b> :{" "}
                  {hyderabadCurrent?.temp_c} ,{" "}
                  <b className="font-bold">Temp-F</b> :{" "}
                  {hyderabadCurrent?.temp_f} , <b className="font-bold">UV</b> :{" "}
                  {hyderabadCurrent?.uv}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Vis-Km </b> :{" "}
                  {hyderabadCurrent?.vis_km} ,{" "}
                  <b className="font-bold">Vis-M</b> :{" "}
                  {hyderabadCurrent?.vis_miles} ,{" "}
                  <b className="font-bold">Wind-D</b> :{" "}
                  {hyderabadCurrent?.wind_degree}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Wind-D</b> :{" "}
                  {hyderabadCurrent?.wind_dir} ,{" "}
                  <b className="font-bold">Wind-Kph</b> :{" "}
                  {hyderabadCurrent?.wind_kph} ,{" "}
                  <b className="font-bold">Wind-Mph</b> :{" "}
                  {hyderabadCurrent?.wind_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">WindChill-C</b> :{" "}
                  {hyderabadCurrent?.windchill_c} ,{" "}
                  <b className="font-bold">WindChill-F</b> :{" "}
                  {hyderabadCurrent?.windchill_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Description</b> :{" "}
                  {hyderabadCurrent?.condition.text}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <a href="#">
                  <figure>
                    <img
                      alt="packageImage"
                      className="pckgImage"
                      src="https://i.redd.it/pemkifnacoz51.jpg"
                    />
                  </figure>
                </a>
              </div>
              <div className="card-profile pt-2">
                <a href="#">
                  <h5 className="pckgName mx-2" style={{ color: "#ffa400" }}>
                    {multanLocation?.name} / {multanLocation?.region}
                  </h5>
                </a>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Longitute</b> : {multanLocation?.lat}{" "}
                  , <b className="font-bold">Latitude</b> :{multanLocation?.lon}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Cloud</b> : {multanCurrent?.cloud} ,{" "}
                  <b className="font-bold">Dew Point-C</b> :{" "}
                  {multanCurrent?.dewpoint_c} ,{" "}
                  <b className="font-bold">Dew Point-F</b> :{" "}
                  {multanCurrent?.dewpoint_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">FeelsLike-C</b> :{" "}
                  {multanCurrent?.feelslike_c} ,{" "}
                  <b className="font-bold"> FeelsLike-F</b> :{" "}
                  {multanCurrent?.feelslike_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Gust Kph</b> :{" "}
                  {multanCurrent?.gust_kph} ,{" "}
                  <b className="font-bold"> Gust Mph </b>:{" "}
                  {multanCurrent?.gust_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Heat Index-C</b> :{" "}
                  {multanCurrent?.heatindex_c} ,{" "}
                  <b className="font-bold">Heat Index-F</b> :{" "}
                  {multanCurrent?.heatindex_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Humidity</b> :{" "}
                  {multanCurrent?.humidity} ,{" "}
                  <b className="font-bold">Is Day</b> : {multanCurrent?.is_day}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated</b> :{" "}
                  {multanCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated Epoch</b> :{" "}
                  {multanCurrent?.last_updated_epoch} ,{" "}
                  <b className="font-bold">Is Day </b>: {multanCurrent?.is_day}{" "}
                  , <b className="font-bold">Last Updated</b> :{" "}
                  {multanCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Precip-IN</b> :{" "}
                  {multanCurrent?.precip_in} ,{" "}
                  <b className="font-bold">Precip-MM </b>:{" "}
                  {multanCurrent?.precip_mm}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Pressure-IN</b> :{" "}
                  {multanCurrent?.pressure_in} ,{" "}
                  <b className="font-bold">Pressure-MB</b> :{" "}
                  {multanCurrent?.pressure_mb}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Temp-C</b> : {multanCurrent?.temp_c}{" "}
                  , <b className="font-bold">Temp-F</b> :{" "}
                  {multanCurrent?.temp_f} , <b className="font-bold">UV</b> :{" "}
                  {multanCurrent?.uv}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Vis-Km </b> : {multanCurrent?.vis_km}{" "}
                  , <b className="font-bold">Vis-M</b> :{" "}
                  {multanCurrent?.vis_miles} ,{" "}
                  <b className="font-bold">Wind-D</b> :{" "}
                  {multanCurrent?.wind_degree}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Wind-D</b> :{" "}
                  {multanCurrent?.wind_dir} ,{" "}
                  <b className="font-bold">Wind-Kph</b> :{" "}
                  {multanCurrent?.wind_kph} ,{" "}
                  <b className="font-bold">Wind-Mph</b> :{" "}
                  {multanCurrent?.wind_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">WindChill-C</b> :{" "}
                  {multanCurrent?.windchill_c} ,{" "}
                  <b className="font-bold">WindChill-F</b> :{" "}
                  {multanCurrent?.windchill_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Description</b> :{" "}
                  {multanCurrent?.condition.text}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <a href="#">
                  <figure>
                    <img
                      alt="packageImage"
                      className="pckgImage"
                      src="http://3.bp.blogspot.com/-r9HjcztUaTo/Tbw1qUltTtI/AAAAAAAAAEA/C7183zuIIiM/s1600/final2.jpg"
                    />
                  </figure>
                </a>
              </div>
              <div className="card-profile pt-2">
                <a href="#">
                  <h5 className="pckgName mx-2" style={{ color: "#ffa400" }}>
                    {skarduLocation?.name} / {skarduLocation?.region}
                  </h5>
                </a>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Longitute</b> : {skarduLocation?.lat}{" "}
                  , <b className="font-bold">Latitude</b> :{skarduLocation?.lon}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Cloud</b> : {skarduCurrent?.cloud} ,{" "}
                  <b className="font-bold">Dew Point-C</b> :{" "}
                  {skarduCurrent?.dewpoint_c} ,{" "}
                  <b className="font-bold">Dew Point-F</b> :{" "}
                  {skarduCurrent?.dewpoint_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">FeelsLike-C</b> :{" "}
                  {skarduCurrent?.feelslike_c} ,{" "}
                  <b className="font-bold"> FeelsLike-F</b> :{" "}
                  {skarduCurrent?.feelslike_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Gust Kph</b> :{" "}
                  {skarduCurrent?.gust_kph} ,{" "}
                  <b className="font-bold"> Gust Mph </b>:{" "}
                  {skarduCurrent?.gust_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Heat Index-C</b> :{" "}
                  {skarduCurrent?.heatindex_c} ,{" "}
                  <b className="font-bold">Heat Index-F</b> :{" "}
                  {skarduCurrent?.heatindex_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Humidity</b> :{" "}
                  {skarduCurrent?.humidity} ,{" "}
                  <b className="font-bold">Is Day</b> : {skarduCurrent?.is_day}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated</b> :{" "}
                  {skarduCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated Epoch</b> :{" "}
                  {skarduCurrent?.last_updated_epoch} ,{" "}
                  <b className="font-bold">Is Day </b>: {skarduCurrent?.is_day}{" "}
                  , <b className="font-bold">Last Updated</b> :{" "}
                  {skarduCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Precip-IN</b> :{" "}
                  {skarduCurrent?.precip_in} ,{" "}
                  <b className="font-bold">Precip-MM </b>:{" "}
                  {skarduCurrent?.precip_mm}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Pressure-IN</b> :{" "}
                  {skarduCurrent?.pressure_in} ,{" "}
                  <b className="font-bold">Pressure-MB</b> :{" "}
                  {skarduCurrent?.pressure_mb}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Temp-C</b> : {skarduCurrent?.temp_c}{" "}
                  , <b className="font-bold">Temp-F</b> :{" "}
                  {skarduCurrent?.temp_f} , <b className="font-bold">UV</b> :{" "}
                  {skarduCurrent?.uv}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Vis-Km </b> : {skarduCurrent?.vis_km}{" "}
                  , <b className="font-bold">Vis-M</b> :{" "}
                  {skarduCurrent?.vis_miles} ,{" "}
                  <b className="font-bold">Wind-D</b> :{" "}
                  {skarduCurrent?.wind_degree}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Wind-D</b> :{" "}
                  {skarduCurrent?.wind_dir} ,{" "}
                  <b className="font-bold">Wind-Kph</b> :{" "}
                  {skarduCurrent?.wind_kph} ,{" "}
                  <b className="font-bold">Wind-Mph</b> :{" "}
                  {skarduCurrent?.wind_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">WindChill-C</b> :{" "}
                  {skarduCurrent?.windchill_c} ,{" "}
                  <b className="font-bold">WindChill-F</b> :{" "}
                  {skarduCurrent?.windchill_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Description</b> :{" "}
                  {skarduCurrent?.condition.text}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <a href="#">
                  <figure>
                    <img
                      alt="packageImage"
                      className="pckgImage"
                      src="https://3.bp.blogspot.com/-3jPoraCF6Uc/UAJLvL6pFwI/AAAAAAAAB1w/6UsrjJOB_XI/s1600/Lahore-Fort-2.jpg"
                    />
                  </figure>
                </a>
              </div>
              <div className="card-profile pt-2">
                <a href="#">
                  <h5 className="pckgName mx-2" style={{ color: "#ffa400" }}>
                    {lahoreLocation?.name} / {lahoreLocation?.region}
                  </h5>
                </a>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Longitute</b> : {lahoreLocation?.lat}{" "}
                  , <b className="font-bold">Latitude</b> :{lahoreLocation?.lon}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Cloud</b> : {lahoreCurrent?.cloud} ,{" "}
                  <b className="font-bold">Dew Point-C</b> :{" "}
                  {lahoreCurrent?.dewpoint_c} ,{" "}
                  <b className="font-bold">Dew Point-F</b> :{" "}
                  {lahoreCurrent?.dewpoint_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">FeelsLike-C</b> :{" "}
                  {lahoreCurrent?.feelslike_c} ,{" "}
                  <b className="font-bold"> FeelsLike-F</b> :{" "}
                  {lahoreCurrent?.feelslike_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Gust Kph</b> :{" "}
                  {lahoreCurrent?.gust_kph} ,{" "}
                  <b className="font-bold"> Gust Mph </b>:{" "}
                  {lahoreCurrent?.gust_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Heat Index-C</b> :{" "}
                  {lahoreCurrent?.heatindex_c} ,{" "}
                  <b className="font-bold">Heat Index-F</b> :{" "}
                  {lahoreCurrent?.heatindex_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Humidity</b> :{" "}
                  {lahoreCurrent?.humidity} ,{" "}
                  <b className="font-bold">Is Day</b> : {lahoreCurrent?.is_day}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated</b> :{" "}
                  {lahoreCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Last Updated Epoch</b> :{" "}
                  {lahoreCurrent?.last_updated_epoch} ,{" "}
                  <b className="font-bold">Is Day </b>: {lahoreCurrent?.is_day}{" "}
                  , <b className="font-bold">Last Updated</b> :{" "}
                  {lahoreCurrent?.last_updated}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Precip-IN</b> :{" "}
                  {lahoreCurrent?.precip_in} ,{" "}
                  <b className="font-bold">Precip-MM </b>:{" "}
                  {lahoreCurrent?.precip_mm}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Pressure-IN</b> :{" "}
                  {lahoreCurrent?.pressure_in} ,{" "}
                  <b className="font-bold">Pressure-MB</b> :{" "}
                  {lahoreCurrent?.pressure_mb}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Temp-C</b> : {lahoreCurrent?.temp_c}{" "}
                  , <b className="font-bold">Temp-F</b> :{" "}
                  {lahoreCurrent?.temp_f} , <b className="font-bold">UV</b> :{" "}
                  {lahoreCurrent?.uv}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Vis-Km </b> : {lahoreCurrent?.vis_km}{" "}
                  , <b className="font-bold">Vis-M</b> :{" "}
                  {lahoreCurrent?.vis_miles} ,{" "}
                  <b className="font-bold">Wind-D</b> :{" "}
                  {lahoreCurrent?.wind_degree}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Wind-D</b> :{" "}
                  {lahoreCurrent?.wind_dir} ,{" "}
                  <b className="font-bold">Wind-Kph</b> :{" "}
                  {lahoreCurrent?.wind_kph} ,{" "}
                  <b className="font-bold">Wind-Mph</b> :{" "}
                  {lahoreCurrent?.wind_mph}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">WindChill-C</b> :{" "}
                  {lahoreCurrent?.windchill_c} ,{" "}
                  <b className="font-bold">WindChill-F</b> :{" "}
                  {lahoreCurrent?.windchill_f}
                </p>
                <p className="font-xs color-text-paragraph-2">
                  <b className="font-bold">Description</b> :{" "}
                  {lahoreCurrent?.condition.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemperatureComponent;
