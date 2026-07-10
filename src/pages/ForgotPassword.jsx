import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <Link to="/" className="auth-logo">
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-text">Ashlar</span>
        </Link>
        {sent ? (
          <>
            <h1 className="auth-title">Check Your Email</h1>
            <p className="auth-subtitle">We have sent password reset instructions to {email}.</p>
            <Link to="/signin" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--spacing-xl)' }}>Back to Sign In</Link>
          </>
        ) : (
          <>
            <h1 className="auth-title">Reset Password</h1>
            <p className="auth-subtitle">Enter your email and we will send you reset instructions.</p>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="contact-form__field">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Instructions</button>
            </form>
            <p className="auth-footer">
              <Link to="/signin">Back to Sign In</Link>
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default ForgotPassword;
