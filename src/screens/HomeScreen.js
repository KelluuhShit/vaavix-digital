import React from "react";
import Header from "../components/Header";
import coverImage from "../assets/signinbg.jpeg"; // Import the cover image
import "../styles/HomeScreen.css";

const services = [
  { title: "Development Services", description: "We deliver cutting-edge software solutions tailored to your business needs, empowering you to innovate, scale, and stay ahead in a competitive digital landscape.", image: "path/to/image1.jpg" },
  { title: "Cloud & IT Solutions", description: " Empower your business with secure, scalable, and efficient cloud and IT solutions designed to optimize performance and drive innovation.", image: "path/to/image2.jpg" },
  { title: "Digital Marketing", description: "Empower your business with secure, scalable, and efficient cloud and IT solutions designed to optimize performance and drive innovation.", image: "path/to/image3.jpg" },
  { title: "Branding & Design", description: "Craft a memorable brand identity and user centric designs that resonate with your audience and elevate your digital presence.", image: "path/to/image5.jpg" },
  { title: "Content Creation", description: " Transform your ideas into captivating content that engages your audience and drives results. From immersive AR/VR experiences to compelling video marketing, we bring your vision to life.", image: "path/to/image6.jpg" },
  { title: "Automation Services", description: "Streamline your operations and enhance efficiency with our cutting-edge automation solutions. From AI-powered chatbots to seamless employee onboarding, we simplify complex processes for your business.", image: "path/to/image7.jpg" },
  { title: "Online Courses", description: "Upskill and stay ahead in your career with our industry-recognized online courses. Gain hands-on experience and earn certifications to validate your expertise.", image: "path/to/image8.jpg" },
  { title: "Social Media Influencer", description: "Streamline your influencer marketing campaigns with our end-to-end platform. Find the right influencers, manage campaigns, and track performance with ease.", image: "path/to/image9.jpg" },
  { title: "Social Media Manager", description: "Elevate your brand’s social media presence with our comprehensive management services. From strategy to execution, we handle it all to drive engagement and growth.", image: "path/to/image10.jpg" },
  { title: "Hosting And Domains", description: "Reliable, secure, and scalable hosting and domain solutions to power your online presence. From registration to migration, we’ve got you covered.", image: "path/to/image4.jpg" },
];

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="cover-image-container">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="cover-content">
          <h1> Innovate, Engage, 
          Succeed</h1>
          <p>We deliver cutting-edge software solutions tailored to your 
          business needs.</p>
          <button className="explore-services">
            Explore Our Services
          </button>
        </div>
      </div>
      <div className="serviceConatiner">
        <div className="services-section">
          <h2>Our Services</h2>
          <h3>List Of Services We Offer</h3>
          <p>We deliver cutting-edge software solutions tailored
             to your business needs, empowering you to innovate, 
             scale, and stay ahead in a competitive digital landscape.
              From concept to deployment, our expertise ensures seamless,
               future-ready solutions that drive growth and efficiency.</p>
        </div>
      </div>

      <div className="services-cards">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt={service.title} className="service-image" />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <button className="explore-service-btn">Explore Service →</button>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Home;