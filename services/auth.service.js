import HttpClient from "./http.service";
import StorageService from "./storage.service";

class AuthService {
    keyName = 'user';

    async login(credentials) {
        const response = await HttpClient.post('/login', credentials);

        if (response.accessToken) {
            StorageService.set(this.keyName, response, true);
        }

        return response;
    }

    logout() {
        StorageService.destroy(this.keyName);
    }
}

export default new AuthService();