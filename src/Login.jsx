import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: '1rem', textAlign: 'left' }}>
        <p><strong>Current Username:</strong> {formData.username || '(empty)'}</p>
        <p><strong>Current Password:</strong> {formData.password ? '•'.repeat(formData.password.length) : '(empty)'}</p>
      </div>
    </div>
  );
}

export default Login;
