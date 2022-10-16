import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">
      <h2>About Us</h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        voluptatibus reiciendis ullam facere iste non ab impedit dolorum
        deleniti, libero sapiente aut nisi! Harum magni ad excepturi illo
        necessitatibus ea enim maiores quasi nobis, voluptate a facere
        cupiditate odit cumque laborum quaerat aliquam dolor molestias
        voluptatem totam voluptates facilis possimus!
      </p>

      <ul className="socials flex">
        <li>
          <Link>
            <i className="fa-brands fa-square-facebook"></i>
          </Link>
        </li>
        <li>
          <Link>
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default About;
