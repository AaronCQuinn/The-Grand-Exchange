import * as React from 'react'
import axios from 'axios'
import './Header.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Header = () => {
    const [loginModalOpen, setLoginModalOpen] = React.useState(false);
    const [registrationModalOpen, setRegistrationModalOpen] = React.useState(false);
    const [regEmail, setRegEmail] = React.useState('');
    const [regUsername, setRegUsername] = React.useState('');
    const [regPassword, setRegPassword] = React.useState('');
    const [loginUsername, setLoginUsername] = React.useState('');
    const [loginPassword, setLoginPassword] = React.useState('');


    const handleClickOpen = (modal) => {
        if (modal === 'login' ? setLoginModalOpen(true) : setRegistrationModalOpen(true));
    };
  
    const handleModalClose = (modal) => {
        if (modal === 'login' ? setLoginModalOpen(false) : setRegistrationModalOpen(false));
    };

    return (
        <header className="tge-header">
            <div className='tge-header-container'>
                <a href='/' className='tge-header-title'>The Grand Exchange</a>
                <ul className='tge-header-links'>
                    <li><Button variant="contained" color="warning" onClick={() => handleClickOpen('login')}>Login / Register</Button></li>
                    <li><Button variant="contained" color="warning">About</Button></li>
                </ul>
            </div>

            {/* Login Modal */}
            <div> 
                <Dialog open={loginModalOpen} onClose={() => handleModalClose('login')}>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Login to access content such as personalized indexes and watchlists.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setLoginUsername(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {handleModalClose('login'); handleClickOpen('registration')}}>Register here</Button>
                        <Button onClick={() => handleModalClose('login')}>Cancel</Button>
                        <Button onClick={() => {
                            try {
                                axios.post('http://localhost:5000/api/login',
                                {
                                    "username": loginUsername,
                                    "password": loginPassword
                                })
                            } catch(e) {
                                console.error(e);
                            }
                        }}>Login</Button>
                    </DialogActions>
                </Dialog>
                {console.log(loginPassword, loginUsername)}
            </div>

            {/* Registration Modal */}
            <div> 
                <Dialog open={registrationModalOpen} onClose={() => handleModalClose('registration')}>
                    <DialogTitle>Register</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Registration provides access to personalized content such as indexes and watchlists.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setRegEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setRegUsername(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setRegPassword(e.target.value)}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => handleModalClose('registration')}>Cancel</Button>
                    <Button onClick={() => {
                        try {
                            axios.post('http://localhost:5000/api/register', {
                                "username": regUsername,
                                "email": regEmail,
                                "password": regPassword
                            })
                        } catch (e) {
                            console.error(e);
                        }
                    }}>Register</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </header>
    )
}

export default Header