import React from 'react'
import './team.css'
import lozad from 'lozad'

function MeetTheTeam() {
    const observer = lozad();
    observer.observe();
    return (
        <div className="team-container lozad">
            <h2>Meet The Team</h2>
            <div className="team-cards">
                <div className="team-botshelo team-card">
                    <div className="pic lozad"></div>
                    <h3>Botshelo Ramela</h3>
                    <h4>Founder & CEO</h4>
                    <h4>Software Engineer</h4>
                    <h4>Web & App Developer</h4>
                    <h4>UI/UX Designer</h4>
                </div>
                <div className="team-aaqil team-card">
                    <div className="pic lozad"></div>
                    <h3>Mohamed Aaqil Khan</h3>
                    <h4>Marketing</h4>
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam
