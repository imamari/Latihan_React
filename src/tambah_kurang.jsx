import React, { useState } from 'react';

function TambahKurang() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Penambahan dan Pengurangan</h2>
      <h3>Hasil Hitungan: {count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '5px' }}>Kurang</button>
      </div>
      
      <hr style={{ border: 'none', borderTop: '1px solid black', width: '50%', textAlign: 'left', marginLeft: '0', marginTop: '15px' }} />
      <div style={{ height: '3px' }}></div>
      <hr style={{ border: 'none', borderTop: '1px solid black', width: '50%', textAlign: 'left', marginLeft: '0', marginBottom: '25px' }} />
    </div>
  );
}

export default TambahKurang;