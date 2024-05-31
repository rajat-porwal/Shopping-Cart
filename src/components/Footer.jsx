import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#2c3e50',
            color: '#ffffff',
            padding: '20px',
            textAlign: 'center',
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease'
        }}>
            <p>
                Built by {' '}
                <a href='https://github.com/rajat-porwal' style={{ color: '#3498db', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                    Rajat Porwal
                </a>
                {' | '}
                <a href='https://www.linkedin.com/in/rajatporwal/' style={{ color: '#3498db', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}

export default Footer;
