export function showLogin() {
    return `
    <main class="login-container">
        <h1>Login</h1>
        <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
            <button type="submit" id="login-button">Entrar</button>
        </form>
        <div>
            <a href="/register" data-link>Registrate</a>
        </div>
    </main>
    `
}

export function settingsLogin() {
    const buttonLogin = document.getElementById("login-button");
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");

    buttonLogin.addEventListener("click", async (event) => {
        event.preventDefault();

        const email = inputEmail.value;
        const password = inputPassword.value;


        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify({ name: user.name }));
            window.location.href = "/home";
        } else {
            alert("Credenciales incorrectas. Usuario o contraseña no válidos.");
        }
    });
}