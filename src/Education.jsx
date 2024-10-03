// components/Education.js
import React from 'react';

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Place</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Cathedral and John Connon School, Mumbai</td>
            <td>2011 - 2022</td>
          </tr>
          <tr>
            <td>Dhirubai Ambani International School, Mumbai</td>
            <td>2022 - 2024</td>
          </tr>
          <tr>
            <td>University of California, Davis</td>
            <td>2024 - 2028</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;
