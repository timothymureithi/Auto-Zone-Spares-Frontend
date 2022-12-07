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

  export const register = (first_name, last_name, email, password, password_confirmation) => dispatch => {
    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password: password,
        password_confirmation: password_confirmation,
      }),
    })
      .then(res => res.json())
      .then(user => dispatch({ type: 'REGISTER_USER', payload: user }));
  };

  