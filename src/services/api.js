/**
 * Common API Service for Digital Elite Services
 * Endpoint: http://localhost:5000/api/enquiry
 */

//export const ENQUIRY_API_URL ='http://localhost:5000/digitaleliteservice/enquiry';
export const ENQUIRY_API_URL ='https://server.plumeriaresort.in/digitaleliteservice/enquiry'

/**
 * Submit lead enquiry form to the common backend API
 * Maintains the exact required input fields: { name, email, phone, message }
 *
 * @param {Object} payload
 * @param {string} payload.name
 * @param {string} payload.email
 * @param {string} payload.phone
 * @param {string} payload.message
 * @returns {Promise<{success: boolean, message: string, data?: any}>}
 */
export async function submitLeadEnquiry({ name, email, phone, message }) {
  const trimmedName = (name || '').trim();
  const trimmedEmail = (email || '').trim();
  const trimmedPhone = (phone || '').trim();
  const trimmedMessage = (message || '').trim();

  // Validate required fields
  if (!trimmedName) {
    throw new Error('Please enter your full name.');
  }
  if (!trimmedEmail) {
    throw new Error('Please enter your email address.');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    throw new Error('Please provide a valid email address.');
  }
  if (!trimmedPhone) {
    throw new Error('Please enter your phone number.');
  }
  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    throw new Error('Please enter a valid phone number (at least 7 to 15 digits).');
  }
  if (!trimmedMessage) {
    throw new Error('Please provide your requirement or message.');
  }

  try {
    const response = await fetch(ENQUIRY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
        message: trimmedMessage,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg =
        data?.message || `Server responded with status ${response.status}`;
      throw new Error(errorMsg);
    }

    return {
      success: true,
      message: data?.message || 'Enquiry submitted successfully!',
      data,
    };
  } catch (error) {
    if (error.name === 'TypeError' && error.message.toLowerCase().includes('fetch')) {
      throw new Error(
        `Unable to reach the enquiry API server at ${ENQUIRY_API_URL}. Please ensure the server is active.`
      );
    }
    throw error;
  }
}
