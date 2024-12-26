import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const ResetPassword = () => {
    const { randomString } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (!randomString) {
           
        }
    }, [randomString]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError(false);

        try {
        //     const response = await axios.post(`https://password-reset-4t87.onrender.com/reset-password/${randomString}`, {
        //         newPassword
        //     },
 
        // );
        console.log("hello")
            // if (response.status === 200) {
            //     setMessage('Password successfully reset!');
            // }
        } catch (err) {
            setError(true);
            setMessage('Invalid or expired link. Please try requesting a new reset.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Reset Your Password</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="newPassword">
                    <Form.Label>Enter New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Resetting...' : 'Reset Password'}
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

export default ResetPassword;
