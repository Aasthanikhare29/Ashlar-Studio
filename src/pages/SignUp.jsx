import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  return (
    <main className="auth-page">
      <div className="auth-container">
        <Link to="/" className="auth-logo">
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-text">Ashlar</span>
        </Link>
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join the Ashlar Studio community.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="contact-form__field">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Your email" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required value={form.password} onChange={handleChange} placeholder="Create a password" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="confirm">Confirm Password</label>
            <input id="confirm" name="confirm" type="password" required value={form.confirm} onChange={handleChange} placeholder="Confirm password" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Create Account</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
