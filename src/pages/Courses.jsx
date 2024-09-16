import React from 'react';
import './Courses.css'; // Import the CSS file for styling

const my_courses = [
  {
    title: 'Web Development',
    description: 'Learn the latest web technologies including HTML, CSS, JavaScript, and React.',
  },
  {
    title: 'Java',
    description: 'Master Java programming with hands-on projects and real-world examples.',
  },
  {
    title: '.NET',
    description: 'Get skilled in .NET framework and develop robust applications with C# and ASP.NET.',
  },
  {
    title: 'Python',
    description: 'From basics to advanced Python programming, including data analysis and web development.',
  },
  {
    title: 'AIML',
    description: 'Explore Artificial Intelligence and Machine Learning concepts and applications.',
  },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-list">
         {my_courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Courses;
