export default {
    get(keyName, jsonParse = false) {
        const data = localStorage.getItem(keyName);
        const dataJsonParse = JSON.parse(data);

        return jsonParse ? dataJsonParse : data;
    },

    set(keyName, data, jsonStringify = false) {
        const payload = jsonStringify ? JSON.stringify(data) : data;

        localStorage.setItem(keyName, payload);
    },

    destroy(keyName) {
        localStorage.removeItem(keyName);
    }
}