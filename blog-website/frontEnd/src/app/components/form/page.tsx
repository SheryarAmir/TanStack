'use client';

import React from 'react';

const UserFormData = () => {

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(); // Creates a new FormData object to store the uploaded file in a format that can be sent in an HTTP POST request.
    const fileInput = e.target.profileImage; //  get the image for by the name

    if (!fileInput.files[0]) {  // check if the image is exist or not.
      alert("Please select a file");
      return;
    }

    formData.append("profileImage", fileInput.files[0]); // append the image to the fromData object.

    const res = await fetch('http://localhost:8000/v1/health/Image', {  // sent the data 
      method: 'POST',
      body: formData,   // send the fromData Object in body .
    });

    const data = await res.json();
    alert(data.message);
  }


  return (
    <div>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>  
      {/* encType for the image  */}
        <input type="file" name="profileImage" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserFormData;
