import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
    await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(user_seq, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/user/info/${user_seq}`).then(success).catch(fail);
}

// function logout(success, fail)

export { login, findById };
