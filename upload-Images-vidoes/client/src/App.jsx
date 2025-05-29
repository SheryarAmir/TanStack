import React from 'react';

const App = () => {
  return (
    <div>
      <form action="http://localhost:7000/v1/health" method="POST" encType="multipart/form-data">
        <input type="file" name="profileImage" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
