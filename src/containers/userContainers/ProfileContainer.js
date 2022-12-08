import React, { useState, useEffect } from 'react';
import { logout, update } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { listMyOrders } from '../../actions/orderActions';
import { Link } from 'react-router-dom';
import formatCurrency from '../../util';


const ProfileContainer = props => {
    
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConformation] = useState('');
    const { userInfo } = useSelector(state => state.user);
    const { success, myOrders } = useSelector(state => state.orders);
    const myNewOrders = myOrders
    .filter(order => order.user.id === userInfo.user.id)
    .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    

  
  const submitHandler = e => {
    e.preventDefault();
    dispatch(update(userInfo.user.id, firstName, lastName, email, password, passwordConfirmation));
  };

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.user.email);
      setFirstName(userInfo.user.first_name);
      setLastName(userInfo.user.last_name);
    }
    dispatch(listMyOrders(userInfo.user));

    // }
    return () => {};
  }, [dispatch, userInfo]);

  return (
    <div className='profile'>
    <div className='profile-info'>
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <li>
            <h2>User Profile</h2>
          </li>
          <li>
              <label htmlFor='first_name'>First Name</label>
              <input
                value={firstName}
                required
                type='text'
                name='first_name'
                id='first_name'
                onChange={e => setFirstName(e.target.value)}
              />
               </li></ul></div></div>
               
          

  )



};

export default ProfileContainer;
