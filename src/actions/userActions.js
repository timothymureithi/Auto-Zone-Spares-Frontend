const BASE_URL = 'http://localhost:3001/api/v1';

export const signin = (email, password) => dispatch => {
    fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(user => dispatch({ type: 'LOGIN_USER', payload: user }));
  };

  