//import myPhoto from './pages/my-photo.jpg'; // Adjust the path accordingly

import React from 'react';
import './Faculty.css'; // Import custom CSS for styling

const facultyMembers = [
  {
    name: 'Karunakar Sarabu',
    position: 'Lecturer of Computer Science',
    image: '/my-photo.jpg', // Placeholder image
    bio: 'Karunakar has over 20 years of experience in computer science.',
  },
  {
    name: 'Prof. Suresh',
    position: 'Associate Professor of ECE',
    image: 'https://via.placeholder.com/150', // Placeholder image
    bio: 'Suresh specializes in Electronics and communication Engineering.',
  },
  {
    name: 'Dr. B.V.Reddy',
    position: 'Assistant Professor of Mechanical Engineering',
    image: 'https://via.placeholder.com/150', // Placeholder image
    bio: 'Dr. B.V.Reddy focuses on software development methodologies and agile practices.',
  },
  // Add more faculty members as needed
];

const Faculty = () => {
  return (
    <div className="faculty-container">
      <h1>Meet Our Faculty</h1>
      <div className="faculty-cards">
         {facultyMembers.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <img src={faculty.image} alt={faculty.name} className="faculty-image" />
            <div className="faculty-info">
              <h2 className="faculty-name">{faculty.name}</h2>
              <h3 className="faculty-position">{faculty.position}</h3>
              <p className="faculty-bio">{faculty.bio}</p>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Faculty;
