import { show404 } from "./views/404.js";
import { showAdmin, settingsAdmin } from "./views/adminDashboard.js";
import { showLogin, settingsLogin } from "./views/login.js";
import { showRegister, settingsRegister } from "./views/register.js";

const routes = {
    "/": {
        showView: showLogin,
        afterRender: settingsLogin,
        private: false,
        loggedIn: true
    },
    "/login": {
        showView: showLogin,
        afterRender: settingsLogin,
        private: false,
        loggedIn: true
    },
    "/register": {
        showView: showRegister,
        afterRender: settingsRegister,
        private: false,
        loggedIn: true
    },
    "/homeAdmin": {
        showView: showAdmin,
        afterRender: settingsAdmin,
        private: true,
        loggedIn: false
    },
}

export function router() {
    const path = window.location.pathname || "/"
    const app = document.getElementById("app")
    const route = routes[path]

    if (route) {
        if (route.private && !localStorage.loggedInUser) {
            alert("no tienes permitido ver esto.");
            window.location.href = "/login";
            return;
        } else if (route.loggedIn && localStorage.loggedInUser) {
            alert("ya estas loggeado")
            window.location.href = "/homeAdmin"
            return;
        }
        app.innerHTML = route.showView();
        if (route.afterRender) {
            route.afterRender();
        }

    } else { app.innerHTML = show404() }
}