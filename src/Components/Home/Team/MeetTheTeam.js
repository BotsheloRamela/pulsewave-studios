import React from 'react'
import './team.css'

function MeetTheTeam() {
    return (
        <div className="team-container">
            <h2>Meet The Team</h2>
            <div className="team-cards">
                <div className="team-botshelo team-card">
                    <div className="pic"></div>
                    <h3>Botshelo Ramela</h3>
                    <h4>Founder & CEO</h4>
                    <h4>App Designer & Developer</h4>
                    <h4>Web Designer & Developer</h4>
                    <h4>UI/UX Designer</h4>
                </div>
                <div className="team-aaqil team-card">
                    <div className="pic"></div>
                    <h3>Mohamed Aaqil Khan</h3>
                    <h4>COO</h4>
                    <h4>Head of Marketing</h4>
                    <h4>UI/UX Designer</h4>
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam
