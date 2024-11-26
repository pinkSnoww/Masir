import axios from 'axios';

// Create an axios instance with a longer timeout
const api = axios.create({
  timeout: 30000, // 30 seconds
  validateStatus: status => status < 500 // Don't reject if status is less than 500
});

export default async function handler(req, res) {
  try {
    // Get CSRF token
    const csrfResponse = await api.get('http://171.22.25.164/api/admin/login/');
    const csrfMatch = csrfResponse.data.match(/name="csrfmiddlewaretoken" value="([^"]+)"/);
    const csrfToken = csrfMatch ? csrfMatch[1] : null;

    if (!csrfToken) {
      throw new Error('Could not get CSRF token');
    }

    // Login with CSRF token
    const loginResponse = await api.post('http://171.22.25.164/api/admin/login/',
      new URLSearchParams({
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
        csrfmiddlewaretoken: csrfToken
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': csrfResponse.headers['set-cookie']?.join('; '),
          'Referer': 'http://171.22.25.164/api/admin/login/'
        }
      }
    );

    // Get podcasts with auth cookies
    const podcastsResponse = await api.get('http://171.22.25.164/api/podcasts/episode/', {
      headers: {
        'Cookie': loginResponse.headers['set-cookie']?.join('; '),
        'Accept': 'application/json'
      }
    });

    return res.status(200).json(podcastsResponse.data);
  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });

    // Return a more specific error message
    return res.status(error.response?.status || 500).json({
      error: 'Failed to fetch podcasts',
      details: error.message,
      status: error.response?.status
    });
  }
} 