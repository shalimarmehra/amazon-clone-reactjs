import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home___container"></div>
      <img
        id="12345678"
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="78451845"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={989.99}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          rating={5}
        />
        <Product
          id="85947562"
          title="Sandisk Cruzer Blade CZ50 USB 2.0 Pendrive (16 GB) - Pack of 5"
          price={999}
          image="https://images-na.ssl-images-amazon.com/images/I/41r9HAJFJaL.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="15478945"
          title="Pigeon by Stovekraft Kessel 1.2-Litre Multi-Purpose Kettle (Silver) 600W, Black"
          price={799}
          image="https://images-na.ssl-images-amazon.com/images/I/51Y21By5TzL._SL1000_.jpg"
          rating={3}
        />
        <Product
          id="98574623"
          title="Mediweave KN95 (Equivalent to N95) Mask/Respirator,CE certified, Pack of 5"
          price={199.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71grDnU5aQL._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="54789547"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={59811.99}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="19457384"
          title="OPPO F19 Pro (Crystal Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={59844.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71KlQWpei4L._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
