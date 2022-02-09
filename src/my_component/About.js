import React from "react";

export const About = () => {
  let aboutStyle = {
    marginTop: "1rem",
  };

  return (
    <div className="container" style={aboutStyle}>
      <h5>This is an About Component</h5>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex optio quod
        alias architecto, ea maiores voluptate dignissimos eaque consequatur,
        voluptates corrupti delectus voluptatem natus voluptatum? Quibusdam et
        delectus nobis illum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam
        adipisci illum, expedita voluptatum deserunt reprehenderit
        necessitatibus quasi ipsum iusto quisquam autem culpa non ad rem
        molestias placeat eius assumenda.
      </p>
    </div>
  );
};
