import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.module.css';
import Grid from '@mui/material/Grid';

const Navbar: React.FC = () => {
  const tabs = [
    { title: 'Home', link: '/HealthcareAccessWebsite' },
    { title: 'Results', link: '/about' },
    { title: 'Lit Review', link: '/contact' },
  ];

  return (
    <nav className={'navbar'}>
      <Grid container spacing={2} style={{ padding: '16px' }}>
        {tabs.map((tab) => (
          <Grid item xs={12 / tabs.length} key={tab.title}>
            <Link
              to={tab.link}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textDecoration: 'none',
              }}
            >
              <button
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 100%)', // Muted gradient background
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  transition: 'transform 0.2s, background 0.2s', // Smooth transition
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #e9e4f0 0%, #d3cce3 100%)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #d3cce3 0%, #e9e4f0 100%)';
                }}
              >
                <span style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#333' }}>
                  {tab.title}
                </span>
              </button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </nav>
  );
};

export default Navbar;
