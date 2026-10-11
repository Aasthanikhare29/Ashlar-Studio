import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import './Auth.css';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="page-wrapper">
      <section className="auth-hero">
        <div className="container">
          <SectionTitle title={isLogin ? 'Welcome Back' : 'Create Account'} description={isLogin ? 'Sign in to access your projects, consultations, and saved designs.' : 'Join Ashlar Studio to manage your projects and consultations.'} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="auth-form-wrap">
            <div className="auth-tabs">
              <button className={`auth-tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Sign In</button>
              <button className={`auth-tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" required placeholder="Your full name" />
                  </div>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="authEmail">Email Address</label>
                <input type="email" id="authEmail" required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="authPassword">Password</label>
                <input type="password" id="authPassword" required placeholder="Enter your password" />
              </div>
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="authConfirm">Confirm Password</label>
                  <input type="password" id="authConfirm" required placeholder="Confirm your password" />
                </div>
              )}
              {isLogin && (
                <div className="auth-forgot">
                  <Link to="/contact">Forgot Password?</Link>
                </div>
              )}
              <button type="submit" className="btn btn-primary btn-lg">{isLogin ? 'Sign In' : 'Create Account'}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
