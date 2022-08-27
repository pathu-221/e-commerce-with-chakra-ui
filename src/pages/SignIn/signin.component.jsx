import React from "react";
import { Link } from "react-router-dom";
import { signInwithEmail } from "../../firebase/firebase.utils";
import {
  Avatar,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

import { signInwithGoogle } from "../../firebase/firebase.utils";

import { FaUserAlt, FaLock } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc';

import './signin.styles.scss';
import { useState } from "react";

const SignIn = () => {

  const [state, setState] = useState({
    email: '',
    password: '',
    show: false,
  })


  const handleChange = e => {
    e.preventDefault();
    const { value, name} = e.target;
    setState({
      ...state,
      [name]: value,
    });
   // console.log(state);
  }

  const handleSubmit = e => {
    e.preventDefault();
    signInwithEmail(state.email, state.password);
  }
  
  return (
    <div className="signin-page">
     <form onSubmit={handleSubmit}>
     <div className="form-container">
        <div className="avatar-group">
          <Avatar />
          <Heading as={'h2'} size='lg' marginTop={3} color='teal'>Login</Heading>
        </div>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaUserAlt color="gray" />}
          />
          <Input type="email" placeholder="email address" name='email' onChange={handleChange}/>
        </InputGroup>
        <InputGroup m={5}>

          <InputLeftElement
            pointerEvents="none"
            children={<FaLock color="gray" />}
          />

          <Input
          onChange={handleChange}
          name ='password'
            type={state.show ? 'text' : 'password'}
            placeholder='Enter password'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={() => setState({show: !state.show})}>
              {state.show ? 'hide' : 'show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          w={'100%'}
          type='submit'
          colorScheme="teal">Login</Button>
        <Button
          leftIcon={<FcGoogle />}
          marginTop={3}
          w={'100%'}
          colorScheme="white" variant={'outline'} onClick={signInwithGoogle}>Sign in with google</Button>
        <div className="bottom-text">
          <p>Dont have an account?
            <Link to='/signup' className="signup">
                SignUp
            </Link>
          </p>

        </div>
      </div>
     </form>

    </div>
  )
};

export default SignIn;
