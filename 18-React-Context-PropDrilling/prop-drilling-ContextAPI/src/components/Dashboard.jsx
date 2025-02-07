import React from 'react';

function Dashboard() {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '20px'
    }}>
      <h1 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        User Dashboard
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        <div style={cardStyle}>
          <h3>Profile Information</h3>
          <p>Username: JohnDoe</p>
          <p>Email: john@example.com</p>
        </div>
        
        <div style={cardStyle}>
          <h3>Statistics</h3>
          <p>Total Posts: 42</p>
          <p>Followers: 1.2K</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '6px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
};

export default Dashboard;