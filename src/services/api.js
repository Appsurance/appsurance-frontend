/**
 * API Service
 * Handles all API calls to the backend
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.appsurance.in/';

class ApiService {
  /**
   * Submit contact form
   * @param {Object} formData - Contact form data
   * @returns {Promise} Response from server
   */
  static async submitContactForm(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Add more API methods here as needed
  // static async getServices() { ... }
  // static async subscribe(email) { ... }
}

export default ApiService;
