export function showHome() {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    const user = JSON.parse(loggedInUserString);
    return `
    <main class="home-container">
        <h1>Holaaaaa ${user.name}</h1>
        <div>
            <a href="/register" data-link>Registrate</a>
            <a href="/login" data-link>Inicia sesion</a>
            <button id="logout-button">Salir</button>
        </div>
    </main>
    `
}

export function settingsHome() {
    const logoutButton = document.getElementById("logout-button")

    logoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem("loggedInUser")
    })
    
}