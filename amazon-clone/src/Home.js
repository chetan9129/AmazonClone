import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61WLOpMnNSL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="454146"
            title="Apple iPhone 12 (64GB) - Black"
            price={56990}
            image="https://m.media-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="65895"
            title="Cubelelo QiYi QiCheng A Skewb Black Speedcube (Multicolor) "
            price={490}
            image="https://m.media-amazon.com/images/I/51JWDfqUObL._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="595259"
            title="Operating System Principles by Silberschatz (Author), Galvin (Author), Gagne (Author) "
            price={1100}
            image="https://images-na.ssl-images-amazon.com/images/I/413Nwx4UyML._SX318_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="5485451"
            title="Metamorphosis Paperback - 1 January 2014 by Franz Kafka (Author), David Wyllie (Translator)"
            price={99}
            image="https://images-na.ssl-images-amazon.com/images/I/91h14raE85S.jpg"
            rating={4}
          />
          <Product
            id="54531"
            title="Logitech G Pro Mechanical Gaming Keyboard, 16.8 Million Colors RGB Backlit Keys, Ultra Portable Design, Detachable Micro USB Cable "
            price={70431.91}
            image="https://m.media-amazon.com/images/I/714ehqraXCL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="47895"
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue) "
            price={4999}
            image="https://m.media-amazon.com/images/I/61VMT8H7RvL._SL1000_.jpg"
            rating={4}
          />
          <Product
            id="359411"
            title="Li-Ning Wind Lite Strung Badminton Racquet with Free Full Cover (78 Grams. Powered by Windstorm) "
            price={2989}
            image="https://m.media-amazon.com/images/I/81QJiBlMPZL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="78794"
            title="Butterfly Wakaba Shakehand Table Tennis Racket | Japan Series | Outstanding Control with Reliable Speed and Spin "
            price={3340}
            image="https://m.media-amazon.com/images/I/7124bkCWDzL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="74541"
            title="ASUS ROG Gladius USB Wired Optical 6400 dpi Gaming Mouse 90MP0081-B0UA00 "
            price={65026}
            image="https://m.media-amazon.com/images/I/515qLQgWKaL._SL1002_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product 
            id="66412"
            title="Sony Bravia 195 cm (77 inches) XR series 4K Ultra HD Smart OLED Google TV XR-77A80J (Black) (2021 Model) | with Alexa Compatibility"
            price={522490}
            image="https://m.media-amazon.com/images/I/81ABJMRLcxL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
