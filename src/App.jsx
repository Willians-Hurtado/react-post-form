import React, { useState } from 'react';

function App() {

  return (
    <>
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h1 className="d-flex justify-content-center">Blog Post</h1>
        </div>
        <div className="card-body">

          <form>
            <h3>Author</h3>
            <input className="form-control mb-3" type="text" name="author" placeholder="Write the author's name" />

            <h3>Title</h3>
            <input className="form-control mb-3" type="text" name="title" placeholder="Write the title of the post" />

            <h3>Body</h3>
            <textarea className="form-control mb-3" name="body" placeholder="Write the body of the post" />

            <h3>State</h3>
            <select className="form-control mb-3" name="state">
              <option value="public">Public</option>
              <option value="draft">Draft</option>
            </select>

            <button type="submit" className="btn btn-primary" >
              Submit
            </button>

          </form>
        </div>

      </div>
    </>
  )
}

export default App
