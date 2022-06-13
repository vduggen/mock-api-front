import AuthController from "./Controllers/AuthController";

class Http {
    async post(path, payload) {
        switch (path) {
            case '/login':
                {
                    const auth = new AuthController();

                    return await auth.login(payload);
                }
        }
    }
}

export default Http;