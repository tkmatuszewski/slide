import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Brand = () => {
    return (
      <section className="brand">
        <StaticImage
          src="../../images/brand__hero.jpg"
          alt="Surfer jumping on big wave"
        />
        <span className="brand__slogan">
          Since the very beggining of our journey we are on the quest for
          improvement and spreading our love for the ocean.
        </span>
        <div className="brand__cnt">
          <div className="brand__box" id="idea">
            <strong className="brand__strong">The idea.</strong>
            <p className="brand__p">
              We started us kids fascinated by the ocean and we keep it that
              way. The Slide was born to exchange impressions about sessions,
              motivate each other and push even harder on the waves.
            </p>
          </div>
          <div className="brand__box" id="road">
            <strong className="brand__strong">Our road.</strong>
            <p className="brand__p">
              Some surf just for fun. And so we did... until it wasn't enough
              for us. We checked it all from amateur competitions to world cup
              events where we slowly graduated to the pro ranks. Today we find
              the most satisfying watching surfers improvement and deep diving
              into the surf lifestyle.
            </p>
          </div>
          <div className="brand__head">We are mad about waves</div>
          <div className="brand__box" id="mission">
            <strong className="brand__strong">Our Mission.</strong>
            <p className="brand__p">
              Our ambition is to introduce the begginers to our world. To show
              the world our beloved beach lifestyle and welcome you to comunity
              of surfers. For the more experienced ones we do what we do best-
              We pass our experiance to enhance your technique all the way to
              pro level.
            </p>
          </div>
          <StaticImage src="../../images/begginer.jpg" alt="" className='brand__img'/>
          <div className="brand__box" id="team">
            <strong className="brand__strong">Team.</strong>
            <p className="brand__p">
              Thanks to our experiance we are able to work with so many diffrent
              people. Do you want to introduce your kids to surfing or take your
              father for a lesson? We've got you covered! Get to know our{" "}
              <Link to="/team">crew</Link> better even before we meet on the
              beach.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Brand;