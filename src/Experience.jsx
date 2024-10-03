// components/Experience.js
import React from 'react';

function Experience() {
  return (
    <section>
      <h2>Past Experiences</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Experience</th>
            <th>Date (Year)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coding Internship at Axis Bank</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Coding Internship at Cyware Labs</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Coding Internship at Rubik's Data Science</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>Participated in FRC tournament</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>Built several coding projects</td>
            <td>2020 onwards</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Experience;
