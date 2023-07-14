import React,{useState,useEffect} from 'react'
import { Form ,Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/userActions';

function login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showError,setShowError] = useState(false);

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);
  const { registeredUsers } = useSelector((state) => state.user);
const state = useSelector(state => state.user)
console.log('errro------------',error)

useEffect(() => {if(error) {setShowError(error)}},[error])
  useEffect(() => {
    const storedUsername = localStorage.getItem('rememberedUsername');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe');
    

    if (storedRememberMe === 'true' && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userExists = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

  
   dispatch(loginUser({username: userExists?.username, email: userExists?.email, birthdate: userExists?.birthdate}, rememberMe));
  console.log(state)
    
    // else {
    //   setError('Invalid username or password');
    // }
    if(userExists) Navigate('/')
  };

  return (
    <div className='SignupForm'>
    <div className="justify-content-center">
          <div className="card">
            <div className="card-body">
            <h4 className="card-title text-center">Login</h4>
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter usernamre"
        value={username}
        onChange={handleUsernameChange}
      />
    
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Remember me"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
      </Form.Group>
    <Button variant="primary" type="submit" disabled={isLoading}>
    Login
    </Button>
    {showError && <div className="errormsg">{showError}</div>}
    <p>If you have no account Kindly Register <Link to='/signup'>Signup</Link> </p>
  </Form>
  </div>
  </div>
  </div>
  </div>
  )
}

export default login