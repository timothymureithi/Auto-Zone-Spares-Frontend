const BASE_URL = 'http://localhost:3001/api/v1';

export const createOrder = order => dispatch => {
    fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }),
    })
      .then(res => res.json())
      .then(order => dispatch({ type: 'CREATE_ORDER', payload: order, success: true }));
  };

  