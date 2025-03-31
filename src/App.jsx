import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    state: ''
  });

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    console.log(`[${e.target.name}]: ${e.target.value}`);

  }


  return (
    <>
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h1 className="d-flex justify-content-center">Blog Post</h1>
        </div>
        <div className="card-body">

          <form>
            <h3>Author</h3>
            <input className="form-control mb-3" type="text" name="author" placeholder="Write the author's name" value={formData.author} onChange={handleFormData} />

            <h3>Title</h3>
            <input className="form-control mb-3" type="text" name="title" placeholder="Write the title of the post" value={formData.title} onChange={handleFormData} />

            <h3>Body</h3>
            <textarea className="form-control mb-3" name="body" placeholder="Write the body of the post" value={formData.body} onChange={handleFormData} />

            <h3>State</h3>
            <select className="form-control mb-3" name="state" value={formData.state} onChange={handleFormData}>
              <option value="public">Public</option>
              <option value="draft">Draft</option>
            </select>

            <button type="submit" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              })
                .then(response => response.json())
                .then(data => console.log(data))
            }}>
              Submit
            </button>

          </form>
        </div>

      </div>
    </>
  )
}

export default App
