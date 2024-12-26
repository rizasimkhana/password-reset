import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const ForgetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError(false);

        try {
            const response = await axios.post('https://password-reset-4t87.onrender.com/request-password-reset', { email });
            
            if (response.status === 200) {
                setMessage('A reset link has been sent to your email!');
            }
        } catch (err) {
            setError(true);
            setMessage('User not found. Please check your email and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Reset Password</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Enter your email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Request Password Reset'}
                </Button>
            </Form>

            {message && (
                <Alert variant={error ? 'danger' : 'success'} className="mt-3">
                    {message}
                </Alert>
            )}
        </Container>
    );
};

export default ForgetPasswordPage;
