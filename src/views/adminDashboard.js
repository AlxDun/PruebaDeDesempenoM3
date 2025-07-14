export function showAdmin() {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    const user = JSON.parse(loggedInUserString);
    return `
    <main id="admin-container">
        <h1>Holaaaaa ${user.name}</h1>
        <div>
            <button type="button" id="logout-button">Salir</button>
        </div>
        <table id="eventsTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capacity</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <form id="edit-form">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
            <label for="capacity">Capacity</label>
            <input type="capacity" name="text" id="capacity" required>
            <label for="date">Date</label>
            <input type="date" name="date" id="date" required>
            <button id="button-create">Crear</button>
        </form>
    </main>
    `
}

export async function settingsAdmin() {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem("loggedInUser");
        window.location.href = "/login";
    });

    const buttonCreate = document.getElementById("button-create");
    const inputName = document.getElementById("name");
    const inputCapacity = document.getElementById("capacity");
    const inputDate = document.getElementById("date");

    buttonCreate.addEventListener("click", async (event) => {
        event.preventDefault();

        const name = inputName.value;
        const capacity = inputCapacity.value;
        const date = inputDate.value;

        const newEvent = {
            name: name,
            capacity: capacity,
            date: date
        };

        const checkResponse = await fetch(`http://localhost:3000/events?name=${name}`);
        const existingEvents = await checkResponse.json();
        if (existingEvents.length > 0) {
            alert("Este evento ya existe.");
            return;
        }

        const response = await fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        });

        const registeredEvent = await response.json();
        alert(`Evento ${registeredEvent.name}, creado exitosamente!`);
        renderEventsTable();
    });

    renderEventsTable();
}

async function renderEventsTable() {
    const tbody = document.querySelector("#eventsTable tbody");
    tbody.innerHTML = ""; 

    const response = await fetch("http://localhost:3000/events");
    const events = await response.json();

    events.forEach(event => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${event.name}</td>
            <td>${event.capacity}</td>
            <td>${event.date}</td>
        `;
        tbody.appendChild(row); // Append the row to the tbody
    });
}




