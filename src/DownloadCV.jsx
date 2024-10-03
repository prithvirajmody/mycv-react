import React from 'react';
import DownloadLogo from './assets/download_icon.jpg'
import './DownloadCV.css'; // Ensure to create a corresponding CSS file

const DownloadCV = () => {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = 'assets/Resume_Prithviraj_Mody.pdf';  
        link.download = 'Resume_Prithviraj_Mody.pdf';      
        link.click();                      
    };

    return (
        <div className="download-cv-page">
            <header>
                <h1>Download my CV/Resume</h1>
            </header>

            <main>
                <div className="container">
                    <div className="vertical-center">
                        <button className="download" onClick={downloadFile}>
                            <img src={DownloadLogo} alt="Download CV" />
                        </button>
                    </div>
                </div>
                <section>
                    <a href="/">Back to Homepage</a>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Prithviraj Mody. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DownloadCV;
