// Home.js
import React from 'react';

function Home() {
  return (

    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Home Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis repellendus aliquam rerum perspiciatis quod eligendi debitis ad illo soluta.</p>
    </div>
    
  );
}

const styles = {
  container: {
    border: '2px solid green',
    margin: '20px',
    padding: '10px',
  },
};

export default Home;