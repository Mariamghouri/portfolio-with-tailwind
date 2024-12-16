import Footer from "@/components/footer";
import { FC } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaGoogle, FaYoutube, FaApple } from "react-icons/fa";


const Home: FC = () => {
  const skills = [
    { name: "Git", icon: "/images/icon-git.png", bg: "bg-white" },
    { name: "Javascript", icon: "/images/icon-javscript.png", bg: "bg-black text-white" },
    { name: "Sass/Scss", icon: "/images/icon-sass.png", bg: "bg-white" },
    { name: "Nest.Js", icon: "/images/icon-nest.png", bg: "bg-white" },
    { name: "Storybook", icon: "/images/icon-story.png", bg: "bg-white" },
    { name: "Nest.Js", icon: "/images/icon-nest.png", bg: "bg-white" },
    { name: "Git", icon: "/images/icon-git.png", bg: "bg-white" },
    { name: "Storybook", icon: "/images/icon-story.png", bg: "bg-white" },
    { name: "Socket.IO", icon: "/images/icon-socket.png", bg: "bg-white" },
    { name: "Sass/Scss", icon: "/images/icon-sass.png", bg: "bg-white" },
  ];

  const experiences = [
    {
      title: "Lead Software Engineer at Google",
      icon: <FaGoogle className="text-red-500" />,
      date: "Nov 2019 – Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms.",
    },
    {
      title: "Software Engineer at Youtube",
      icon: <FaYoutube className="text-red-600" />,
      date: "Jan 2017 – Oct 2019",
      description:
        "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's platform.",
    },
    {
      title: "Junior Software Engineer at Apple",
      icon: <FaApple className="text-gray-300" />,
      date: "Jan 2016 – Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, shaping mission-critical software projects.",
    },
  ];

  const projects = [
    {
      id: "01",
      title: "Crypto Screener Application",
      description:
        "A powerful application for analyzing and visualizing cryptocurrency trends, enabling users to make informed decisions in real-time.",
      image: "/images/image.png",
    },
    {
      id: "02",
      image: "/images/image2.png",
      title: "Euphoria - Ecommerce Website Template",
      description:
        "A modern and stylish ecommerce template designed for online apparel stores, offering seamless user experiences and responsive designs.",
    },
    {
      id: "03",
      title: "Blog Website Template",
      description:
        "A clean and responsive blog template ideal for content creators, providing optimized layouts and customizable themes.",
      image: "/images/image3.png",
    },
  ];

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="container mx-auto flex items-center justify-between px-6 py-16">
          <div className="max-w-lg">
            <h1 className="text-4xl leading-snug">
            <span className="sora-regular-48 ">Hello I&#39;m </span><span className="font-black text-black sora-extrabold-900">Mariam.</span>
              <br />
              <span className="font-black text-black sora-extrabold-900 ">Frontend</span>
              <span className="sora-regular text-black">Developer</span>
              <br />
              <span>Based In</span>{" "}
              <span className="sora-extrabold text-black font-black">Pakistan.</span>
            </h1>
            <p className="mt-4 text-gray-600">
              I&#39;m Flora Sheen Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300">
                <FaFacebook />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300">
                <FaGithub />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/images/Capture3.jpg" alt="Illustration" className="w-96" />
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-6 py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">
            My <span className="text-black">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className={`flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg hover:shadow-lg transition ${skill.bg}`}>
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                <span className="text-center font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-black text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10">
              My <span className="text-indigo-500">Experience</span>
            </h2>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start justify-between gap-6 p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{experience.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="mt-2 text-gray-400">{experience.description}</p>
                    </div>
                  </div>
                  <div className="text-gray-500 md:text-right">{experience.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            <div className="flex justify-center">
              <div className="rounded-lg p-4">
                <img
                  src="/images/Capture2.png"
                  alt="About Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-black">Me</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I&#39;m a passionate, self-proclaimed designer who specializes in full-stack
                development (React.js & Node.js). I am very enthusiastic about bringing
                the technical and visual aspects of digital products to life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I began my journey as a web developer in 2015, and since then, I&#39;ve
                continued to grow and evolve as a developer, taking on new challenges and
                learning the latest technologies along the way.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I&#39;m not in full-on developer mode, you can find me on Twitter or GitHub,
                sharing tech-related updates and building projects in public.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-black text-white py-10">
          <div className="max-w-6xl mx-auto px-4 bg-black">
            <h2 className="text-3xl font-bold text-center mb-8">My <span className="text-indigo-400">Projects</span></h2>

            {projects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} mb-8 gap-6 items-center`}>
                <img src={project.image} alt={project.title} className="w-full md:w-1/2 rounded-lg" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.id}. {project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              My <span className="text-black">Testimonial</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="p-8 bg-gray-100 rounded-lg text-center shadow hover:shadow-lg transition">
                <img
                  src="/images/shah.png"
                  alt="Evren Shah"
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">
                  I recently had to jump on 10+ different calls across eight different countries to find the right owner.
                </p>
                <h4 className="text-lg font-bold">Evren Shah</h4>
                <p className="text-gray-500">Designer</p>
              </div>

              {/* Testimonial 2 */}
              <div className="p-6 bg-black text-white rounded-lg text-center shadow hover:shadow-lg transition">
                <img
                  src="/images/girl.png"
                  alt="Flora Sheen"
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <p className="mb-4">
                  I recently had to jump on 10+ different calls across eight different countries to find the right owner.
                </p>
                <h4 className="text-lg font-bold">Flora Sheen</h4>
                <p>Designer</p>
              </div>

              {/* Testimonial 3 */}
              <div className="p-6 bg-gray-100 rounded-lg text-center shadow hover:shadow-lg transition">
                <img
                  src="/images/shah.png"
                  alt="Evren Shah"
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">
                  I recently had to jump on 10+ different calls across eight different countries to find the right owner.
                </p>
                <h4 className="text-lg font-bold">Evren Shah</h4>
                <p className="text-gray-500">Designer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Your website (if exists)"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder="How can I help?"
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                ></textarea>
                <button className="w-60 bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition">
                  Get In Touch
                </button>
              </form>
              <div className="flex mt-6 space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <img
                    src="/images/fb.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <img
                    src="/images/Social icon.png"
                    alt="social"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <img
                    src="/images/twitter.png"
                    alt="twitter"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <img
                    src="/images/dis.png"
                    alt="discord"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Let&#39;s <span className="text-black">talk</span> for <br />
                Something special
              </h3>
              <p className="text-gray-600 mb-4">
                I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
              </p>
              <p className="text-black font-bold mb-2">Youremail@gmail.com</p>
              <p className="text-black font-bold">1234567890</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
