// Base API URL
const API_URL = 'http://localhost:5000/api';

// Helper to get auth header
const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return {
            'Authorization': `Bearer ${token}`
        };
    }
    return {};
};

// Check if user is logged in
const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

// Logout
const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/pages/login.html';
};

// Expose globally
window.apiHelpers = {
    API_URL,
    getAuthHeader,
    isLoggedIn,
    logout
};
