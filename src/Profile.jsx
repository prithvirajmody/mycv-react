// components/Profile.js
import React from 'react';
import selfImage from './assets/self_image.jpg'; // Importing the image

function Profile() {
  return (
    <section>
      <h2>Personal Profile</h2>
      <img src={selfImage} alt="Profile" className="img1" />
      <p>
        I am currently studying computer science at an undergraduate level at UC Davis.
        I am deeply interested in Physics and Computer Science. I love coding
        and have learned several programming languages such as Python, Java, and C++.
        I am also familiar with AI algorithms, advanced data structures, and Kali Linux.
        Additionally, I lead my school's coding club.
      </p>
    </section>
  );
}

export default Profile;
