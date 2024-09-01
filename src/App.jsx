import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    color: '',
    subscribe: false,
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type == 'checkbox' ? checked : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      color: '',
      subscribe: false,
      comments: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div id='form'>
        <h1>Form in React</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Name'
            required
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Email'
            required
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Password'
            required
          />

          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            name='age'
            id='age'
            value={formData.age}
            onChange={handleChange}
            placeholder='Enter Age'
            required
          />

          <label>Gender:</label>
          <div className="input-group">
            <input
              type='radio'
              name='gender'
              id='male'
              value='male'
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            />
            <label htmlFor='male'>Male</label>
          </div>

          <div className="input-group">
            <input
              type='radio'
              name='gender'
              id='female'
              value='female'
              checked={formData.gender === 'female'}
              onChange={handleChange}
              required
            />
            <label htmlFor='female'>Female</label>
          </div>

          <label htmlFor='comments'>Comments:</label>
          <textarea
            name='comments'
            id='comments'
            value={formData.comments}
            onChange={handleChange}
            placeholder='Leave a comment'
          />

          <div className="input-group">
            <input
              type='checkbox'
              name='subscribe'
              id='subscribe'
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor='subscribe'>Subscribe to newsletter</label>
          </div>

          <button type='reset' onClick={() => handleReset()}>Reset</button>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
