import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    state: 'public'
  });

  const [isError, setIsError] = useState(false);
  const [isSuccsess, setIsSuccess] = useState(false);

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setIsError('')
    console.log(`[${e.target.name}]: ${e.target.value}`);

  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.author === '' || formData.title === '' || formData.body === '' || formData.state === '') {
      setIsError('Please fill in all fields');
      return;
    } else {
      setIsSuccess('Form submitted successfully');
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again.' + error.message);
      })


  }


  return (
    <>
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h1 className="d-flex justify-content-center">Blog Post</h1>
        </div>
        <div className="card-body">

          <form onSubmit={handleSubmit}>
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

            {isError && <div className="alert alert-danger">{isError}</div>}
            {isSuccsess && <div className="alert alert-success">{isSuccsess}</div>}

            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
              Submit
            </button>

          </form>
        </div>

      </div>
    </>
  )
}

export default App
