const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://my-portfolio-backend-judh.onrender.com';

/**
 * Send conversation message history to the backend chatbot endpoint.
 * @param {Array} messageHistory - The array of messages to send.
 */
export async function sendChatMessage(messageHistory) {
  const res = await fetch(`${API_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages: messageHistory }),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || 'Chat service is unavailable.');
  }

  return await res.json(); // Expected return: { response: '...' }
}
