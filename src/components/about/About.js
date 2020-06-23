import React from "react";
import { Link } from "react-router-dom";

import aboutImg from "../../assets/img.jpeg";

import "./about.style.css";

const About = () => {
  return (
    <div className="container">
      <h2>About</h2>
      <div className="about-section">
        <img className="about-img" src={aboutImg} alt="" />
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quis
          quasi incidunt sapiente, quo harum temporibus. A quisquam accusamus
          quasi soluta provident. Eum, neque? Sunt sequi voluptate libero rerum
          natus impedit quasi veniam quam laborum? Porro laudantium ipsum
          veritatis asperiores harum. Fugiat non aperiam, praesentium fuga
          recusandae illum nemo voluptatum pariatur atque consequuntur numquam
          odio ex eligendi quasi autem obcaecati. Corporis officia facilis
          consectetur autem debitis recusandae voluptas, accusantium consequatur
          itaque excepturi dignissimos, minus pariatur laboriosam ut natus
          quaerat. Ipsum ipsa quaerat tempora officiis soluta, libero esse
          adipisci cupiditate iste ab itaque beatae rerum hic perferendis
          perspiciatis quisquam maxime earum corporis corrupti aliquid aut
          nesciunt? Laborum deserunt itaque ducimus nisi? Magni, rem tenetur
          voluptate totam ducimus veritatis culpa distinctio modi vel architecto
          possimus iste? Atque eos fugiat modi labore? Deleniti eligendi unde
          tempore eum ad excepturi quae aperiam at aut iste illo, corrupti
          dolores. Quas odit adipisci quae, maxime corrupti doloremque
          aspernatur, ut iste nemo magni numquam placeat mollitia voluptates
          amet molestias nostrum corporis obcaecati repellendus fugiat in nobis
          delectus. Odit, dolor provident quisquam eius cumque fugiat? Quod,
          illo quaerat! Non esse nisi eveniet laboriosam cumque soluta ducimus
          asperiores recusandae, dignissimos culpa, odio, a consequatur
          aspernatur? Labore maxime porro ex nulla exercitationem, alias iste
          vero eaque cum quaerat consectetur necessitatibus nemo voluptate
          assumenda similique aliquid. Unde rerum eaque explicabo praesentium
          assumenda veritatis consequatur veniam quasi eum? Nemo blanditiis
          quis.
        </p>
        <p className="text bottom">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit.
        </p>
        <Link to="/">
          {" "}
          <button className="btn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
