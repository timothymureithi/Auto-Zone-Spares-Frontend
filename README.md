# AUTOZONE

This e-commerce site was created with the goal of providing authentic car components to customers and assuring their delivery.
The customer has the option to register for an account, choose the item, and then complete the checkout process. A report will be kept on the user's profile after a successful purchase. The user can also update the specifics of their account information.
The admin has the power to add, edit, and remove goods from the shop. Additionally, the administrator has the ability to remove unfulfilled orders and confirm.

**Technologies Used**
1. Rails 
2. React 
3. PostgreSQL

**USER ACCOUNT DETAILS**
- ADMIN LOGIN 
```
username: tim@autozone.com
password: qwert
```
- USER LOGIN 
```
username: judy@autozone.com
password: asdfg
```

**Sample Code**
- RAILS
```
   def create
        @user = User.find_by(email: session_params[:email])
        if @user && @user.authenticate(session_params[:password])
            login!
            render json: { logged_in: true, user: @user}
        else
            render json: { status: 401, errors: ['No user by that name or id saved!']}
        end
    end

    def is_logged_in?
        if logged_in? && current_user
            render json: { logged_in: true, user: current_user }
            else 
                render json: { logged_in: false, message: 'user not found!'}
             end
    end 
```

- REACT
```
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

```

**IMAGE DEMO**
![](images/Screenshot%20from%202022-09-02%2003-16-11.png)
![](images/Screenshot%20from%202022-09-02%2003-16-54.png)

**LINK**
- COMING SOON

**Future Implementation**
The application still needs some work in order to be presentable. 
- Try and work more on making my applications mobile responsive. 
- Adding a secure payment gateway
- Implementing Material UI

**Developer**
- [Timothy Mureithi](https://github.com/timothymureithi/)

