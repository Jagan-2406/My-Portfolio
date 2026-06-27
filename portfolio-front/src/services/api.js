const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Fetch all projects from the backend API.
 */
export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects`);
    if (!res.ok) {
      throw new Error(`Failed to fetch projects. Server status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.warn('Backend API request failed, using static fallback data.', error);
    throw error;
  }
}

/**
 * Send contact form message to the backend API.
 */
export async function sendContactMessage(contactData) {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || 'Failed to send message.');
  }

  return await res.json();
}
