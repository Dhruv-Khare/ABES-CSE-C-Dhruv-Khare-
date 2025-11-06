import React from 'react'

function Register() {
  return (
    <div> <h3>Register to Access My Books</h3>
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br />
            <label>
                DOB:
                <input type="date" name="dob" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" />
            </label>
            <br />
            <input type="submit" value="Register" />
        </form></div>
  )
}

export default Register