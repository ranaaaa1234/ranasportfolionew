import img from "/public/assets/pic.jpeg";

function About() {
  return (
    <section
      id="about"
      className="animate-fade-in xs:p-10 md:p-20 flex lg:flex-row xs:flex-col justify-center gap-10"
    >
      <div className="container mx-auto xs:max-w-3xl lg:max-w-2xl">
        <h2 className="xs:text-3xl md:text-4xl font-light mb-6 text-blue-900">
          About Me
        </h2>
        <p className="xs:text-md md:text-xl lg:text-md xl:text-xl text-blue-900">
          I'm a frontend developer with a strong passion for crafting clean,
          responsive and user-friendly web experiences. I recently graduated in
          June 2025 and since the beginning of my journey in 2023, I've been
          driven by a genuine love for tech, design, and the creative
          problem-solving that comes with building digital products.
        </p>

        <p className="xs:text-md md:text-xl lg:text-md xl:text-xl mt-5 text-blue-900">
          I enjoy turning ideas into interactive, accessible, and visually
          appealing websites. My strengths are not just in writing
          well-structured code but also in thinking like a user, making sure
          every detail feels intuitive and purposeful. I'm a fast learner,
          highly motivated and thrive when collaborating with others or diving
          into new challenges.
        </p>

        <p className="xs:text-md md:text-xl lg:text-md xl:text-xl mt-5 text-blue-900">
          Frontend development allows me to combine logic with creativity, and
          that's what keeps me constantly curious and excited to grow in this
          field.
        </p>
      </div>

      <div className="container mx-auto xs:max-w-sm md:max-w-lg lg:max-w-sm xl:max-w-md p-10">
        <img
          src={img}
          alt="RS"
          className="text-lg text-blue-700 border rounded-lg mx-auto shadow-lg"
        />
      </div>
    </section>
  );
}

export default About;
