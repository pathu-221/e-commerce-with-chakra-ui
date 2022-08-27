import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.styles.scss';

import { signUpwithEmailandPassword } from '../../firebase/firebase.utils';

import {
    FormControl,
    FormLabel,
    Heading,
    Input,
    Avatar,
    Button,
} from '@chakra-ui/react'

function SignUp() {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.password !== state.confirmPassword) {
            alert('password do not match');
            return;
        }
        signUpwithEmailandPassword(state.email, state.password, state.displayName);
    }

    return (
        <div className="signup-page">
            <form onSubmit={handleSubmit}>
                <div className='form-container'>

                    <div className="avatar-group">
                        <Avatar />
                        <Heading as={'h2'} size='lg' marginTop={3} color='teal'>Create Account</Heading>
                    </div>

                    <FormControl isRequired>
                        <FormLabel>Display Name</FormLabel>
                        <Input
                            type='text'
                            onChange={handleChange}
                            name='displayName' />
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type='email'
                            onChange={handleChange}
                            name='email' />
                        <FormLabel>Password</FormLabel>
                        <Input
                            type='password'
                            onChange={handleChange}
                            name='password' />
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            type='password'
                            onChange={handleChange}
                            name='confirmPassword' />
                    </FormControl>
                    <Button
                        type='submit'
                        m={3}
                        w={'100%'}
                        colorScheme="teal">Create Account</Button>
                    <div className="bottom-text">
                        <p>Already have an account?
                            <Link to='/signin' className="signin">
                                SignIN
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp