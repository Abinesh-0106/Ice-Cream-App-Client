import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <article className="about-content">
        <p>
          Certainly! Let’s delve into the delightful world of
          <b> AA Ice Cream and Cakes.</b>
          🍰🍨
        </p>
        <p>
          <b>AA Ice Cream and Cakes</b>
          is a place where
          <b> sweet dreams come true</b>. Our passion lies in creating exquisite
          desserts and cakes that not only tantalize your taste buds but also
          bring joy to your heart. Here’s a glimpse into our story:
        </p>
        <h2>About Us</h2>
        <p>
          At <b>Our Shop</b>, we believe in <b>“Quality on our Edge”</b>. From
          meticulously selecting the finest ingredients sourced from various
          corners of India to the final creation that{" "}
          <b>“Brings you smiles for sure”</b>, we pour our heart and soul into
          every cake and dessert we make. Our creations receive a shower of
          compliments and are accompanied by an array of exclusive desserts.
        </p>
        <h3>What Sets Us Apart?</h3>
        <ol>
          <li>
            <b>Theme-Based Creative Cakes:</b> Whether it’s a birthday,
            anniversary, or any special occasion, our theme-based cakes add a
            touch of magic. From whimsical unicorns to elegant floral designs,
            we craft cakes that make your celebration unique and unforgettable.
          </li>
          <li>
            <b>Cake Pops and Cupcakes:</b> Our cake pops and cupcakes are
            bite-sized bursts of happiness. Perfect for parties, they come in a
            variety of flavours and designs, making your event even more
            special.
          </li>
          <li>
            <b>Personalization:</b> We take the time to understand our
            customers’ expectations. Whether it’s a custom flavour, dietary
            preference, or a specific design, we personalize our desserts to
            meet your needs.
          </li>
        </ol>
        <h3>Join Our Sweet Journey</h3>
        <p>
          We invite you to be a part of our sweet journey. Visit us at{" "}
          <Link to="/"
          style={{color:"white",textDecoration:"underline"}}
          >
            <b>AA Ice Cream and Cakes</b>
          </Link>{" "}
          and experience the magic firsthand. Let our desserts create moments
          that linger on your taste buds and warm your heart. 🎂🍮
        </p>
        <h5>Remember, life is short—eat dessert first! 🍰</h5>
      </article>
    </div>
  );
}

export default About;
