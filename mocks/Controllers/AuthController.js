import Users from '../Database/users.json';

class AuthController {

    login(credentials) {
        return new Promise(function(resolve, reject) {
            const MS_SIMULATION_REQUEST = 1000;
            
            setTimeout(() => {
                const { email, password } = credentials;
                const result = Users.filter(user => user.email == email && user.password == password);
                const USER_NOT_FOUND = result.length === 0;

                if (USER_NOT_FOUND) reject('Email or Password incorrect.');

                resolve({
                    'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                    'data': result[0]
                });
            }, MS_SIMULATION_REQUEST);
        })
    }

}

export default AuthController;