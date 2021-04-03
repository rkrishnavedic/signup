import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import axios from 'axios';

function App() {


  const [postForm, setpostForm] = useState({
    fullName:'',
    userName:'',
    email:'',
    password:'',
  }) 

  function handleSubmit(){
    console.log(postForm);
    axios.post('http://localhost:4000/app/signup', postForm)
        .then(response=>{
          console.log(response)
        }).catch(error=>{
          console.log(error);
        })

        

  }

  return (
    <div >
          <div style={{display:'flex', flexDirection:'column', width:'30rem', margin:'auto', padding:'3rem'}} id="signupform">

            <input 
            type='text' 
            style={{padding:'0.3rem', margin:'0.3rem'}}
            placeholder="Full Name"
            onChange={(event)=>{
              setpostForm({...postForm, fullName:event.target.value})
            }}
            />

            <input 
            type='text' 
            style={{padding:'0.3rem', margin:'0.3rem'}}
            placeholder="User Name"
            onChange={(event)=>{
              setpostForm({...postForm, userName:event.target.value})
            }}
            />

            <input 
            type='text' 
            style={{padding:'0.3rem', margin:'0.3rem'}}
            placeholder="E-mail"
            onChange={(event)=>{
              setpostForm({...postForm, email:event.target.value})
            }}
            />

            <input 
            type='password' 
            style={{padding:'0.3rem', margin:'0.3rem'}}
            placeholder="Password"
            onChange={(event)=>{
              setpostForm({...postForm, password:event.target.value})
            }}
            />


            <button
            type="submit"
            style={{padding:'0.3rem', margin:'0.3rem'}}
            onClick={handleSubmit}
            >
              Submit
            </button>

          </div>
    </div>
  );
}

export default App;
