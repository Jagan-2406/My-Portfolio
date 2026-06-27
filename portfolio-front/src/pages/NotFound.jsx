import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: 'var(--space-xl)',
      background: 'var(--gradient-soft)'
    }}>
      <div className="glass" style={{ padding: 'var(--space-2xl)', maxWidth: '480px' }}>
        <h1 style={{ font: '700 64px var(--font-display)', color: 'var(--color-blue)', marginBottom: 'var(--space-md)' }}>404</h1>
        <h2 style={{ font: '600 24px var(--font-display)', color: 'var(--color-text)', marginBottom: 'var(--space-sm)' }}>Page Not Found</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)', fontSize: '15px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
