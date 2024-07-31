import React from 'react';
import './ConferenceDetails.css';

const ConferenceDetails = () => {
  return (
    <section id="details" className="details">
      <h2>Conference Details</h2>
      <p><b>Date: 22-23 January, 2025</b></p>
      <p><b>City, Country: Manila, Philippines</b></p>
      <p>Organized by: <b>Confworld Educational Research and Development Association</b></p>

      <h2>Conference Theme</h2>
      <p>The theme of the conference is <b>&quot;Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching &amp; Education, Engineering and Technology&quot;</b>. We aim to explore the latest advancements, challenges and future directions in these diverse fields, emphasizing the role of interdisciplinary approaches in addressing global challenges.</p>

      <h2>Key Highlights</h2>
      <ul>
        <ul><b>Interdisciplinary Sessions</b>: Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.</ul>
        <ul><b>Expert Keynote Speakers</b>: Learn from renowned experts who will share their insights and experiences.</ul>
        <ul><b>Paper Presentations</b>: Present your research findings and contribute to discussions on a wide range of topics.</ul>
        <ul><b>Networking Opportunities</b>: Connect with peers, researchers and industry professionals to build collaborations and partnerships.</ul>
        <ul><b>Publication Opportunities</b>: Selected papers will have the opportunity to be published in a Scopus indexed journals.</ul>
      </ul>
    </section>
  );
};

export default ConferenceDetails;
