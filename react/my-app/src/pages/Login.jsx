import React from 'react'

function Login() {
  return (
    <div>
        <h3>Login to Access My Books</h3>
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login