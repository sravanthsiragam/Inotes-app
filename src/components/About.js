import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="card border-secondary mb-3">
        <div className="card-header bg-secondary text-white">
          About iNotebook
        </div>
        <div className="card-body text-secondary">
          <h5 className="card-title">Welcome to iNotebook</h5>
          <p className="card-text">
            iNotebook is a powerful and intuitive application designed to help
            you manage your notes efficiently. Whether you're jotting down
            ideas, organizing tasks, or keeping track of important information,
            iNotebook offers a seamless and user-friendly experience.
          </p>
          <p className="card-text">
            <strong>Key Features:</strong>
          </p>
          <ul className="card-text">
            <li>
              <strong>Create:</strong> Easily create new notes with just a few
              clicks. Add titles, descriptions, and any additional information
              you need.
            </li>
            <li>
              <strong>Read:</strong> Access all your notes in one place. View
              the content of each note, organized in a clean and readable
              format.
            </li>
            <li>
              <strong>Update:</strong> Edit your existing notes to keep them
              up-to-date. Modify titles, update content, and ensure all your
              information is current.
            </li>
            <li>
              <strong>Delete:</strong> Remove notes that you no longer need.
              Keep your notebook clutter-free and well-organized.
            </li>
          </ul>
          <p className="card-text">
            iNotebook is built with the MERN stack (MongoDB, Express.js,
            React.js, Node.js), providing a robust and scalable solution for all
            your note-taking needs. Experience the convenience of a digital
            notebook that is always accessible and easy to use.
          </p>
        </div>
        <div className="card-footer bg-secondary text-white">
          iNotebook - Your digital notebook for every idea.
        </div>
      </div>
    </div>
  );
};

export default About;
