export function showRegister() {
    return `
    <main class="register-container">
        <h1>Register</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
            <button type="submit" id="register-button">Entrar</button>
        </form>
        <div>
            <a href="/login" data-link>Inicia sesion</a>
        </div>
    </main>
    `
}

export function settingsRegister() {
    const registerButton = document.getElementById("register-button");
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");

    registerButton.addEventListener("click", async (event) => {
        event.preventDefault();

        const name = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        const newUser = {
            name: name,
            email: email,
            password: password,
            admin: false
        };

        const checkResponse = await fetch(`http://localhost:3000/users?email=${email}`);
        const existingUsers = await checkResponse.json();
        if (existingUsers.length > 0) {
            alert("Este email ya está registrado. Por favor, usa otro o inicia sesión.");
            return;
        }

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        const registeredUser = await response.json();
        alert(`Registro exitoso para ${registeredUser.name}! Ahora puedes iniciar sesión.`);

        window.location.href = "/login";
    });

}