import React from 'react'
import './team.css'
import lozad from 'lozad'

function MeetTheTeam() {
    const observer = lozad();
    observer.observe();
    return (
        <div className="team-container lozad">
            <h2>Meet The Team</h2>
            <div className='scroll'>
                <div className="team-cards">
                    <div className="team-botshelo team-card">
                        <div className="pic lozad"></div>
                        <h3>Botshelo Ramela</h3>
                        <h4>Founder & CEO</h4>
                        <h4>Software Engineer</h4>
                    </div>
                    <div className="team-aaqil team-card">
                        <div className="pic lozad"></div>
                        <h3>Aaqil Khan</h3>
                        <h4>Marketing Director</h4>
                    </div>
                    <div className="team-khethelo team-card">
                        <div className="pic lozad"></div>
                        <h3>Khethelo Nkosi</h3>
                        <h4>Software Developer</h4>
                    </div>
                    <div className="team-sean team-card">
                        <div className="pic lozad"></div>
                        <h3>Siphesihle Thomo</h3>
                        <h4>Software Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam
