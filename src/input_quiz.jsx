import React, { useState } from 'react';

function InputQuiz() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    alamat: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Input Data</h2>
      <div style={{ marginBottom: '8px' }}>
        <span>Nama: </span>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          placeholder="Masukkan Nama ..."
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <span>Email: </span>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan Email ..."
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <span>Alamat: </span>
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          placeholder="Masukkan Alamat ..."
        />
      </div>

      <h3>Hasil Inputan:</h3>
      <p>Nama: {formData.nama}</p>
      <p>Email: {formData.email}</p>
      <p>Alamat: {formData.alamat}</p>
    </div>
  );
}

export default InputQuiz;