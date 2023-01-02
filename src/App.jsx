import logo from './logo.svg';

function App() {
  return (
    <div className='whole'>
    
    <div className='left'>
      <img src={logo} className="logo" alt="logo" />
      <p>Connect with friends and the world <br />around you on Facebook</p>
    </div>

    <div class="card">
      <div class="container">
        <input type="text" name="EmailOrNumber" id="EmailOrNumber" placeholder='Email or Phone number' />
        <input type="password" name="password" id="password" placeholder='Password' />
        <input type="submit" value="Log In" className='submit'/>

        <a href="#" className='forgot'>Forgot password?</a>
        <hr />
        <input type="button" value="Create new account" id='new'/>
      </div>

    </div> 
    
    
    </div>
  );
}

export default App;
