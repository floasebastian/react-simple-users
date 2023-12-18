import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <div className="p-3">
      <h3>User Form</h3>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>User Data Input</legend>
        <div className="input-group mb-3">
          <span htmlFor="input-name" className="input-group-text col-2">Name</span>
          <input id="input-name" placeholder="e.g: John Smith" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="input-email" className="input-group-text col-2">Email</label>
          <input id="input-email" placeholder="e.g: john.smith@example.com" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary col-2">Add User</button>
        </div>
      </fieldset>
    </form>
    </div>
  );
}

export default UserForm;
