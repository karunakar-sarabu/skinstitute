import React from 'react';
import './Home.css'; // Import custom CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to S.K. Institute</h1>
        <p>Your gateway to knowledge and skill development</p>
      </header>
      <section className="home-about">
        <h2>About Us</h2>
        <p>
          At S.K. Institute, we offer a range of courses designed to help you
          excel in the modern world. Whether you are looking to enhance your
          skills in technology, business, or other fields, we have the
          resources to help you succeed.
        </p>
      </section>
      <section className="home-services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Python & Machine Learning</h3>
          <p>Learn the fundamentals of Python and explore the exciting world of Machine Learning.</p>
        </div>
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Master the art of creating responsive and dynamic websites with our comprehensive web development courses.</p>
        </div>
        <div className="service-card">
          <h3>Data Science</h3>
          <p>Gain valuable insights into data analysis, visualization, and predictive modeling.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 S.K. Institute. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Home;