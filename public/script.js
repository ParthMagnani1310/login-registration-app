
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Registration
registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {
            registerForm.reset();
        }
    } catch (error) {
        alert("Registration failed. Please try again.");
    }
});

// Login
loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {
            loginForm.reset();
        }
    } catch (error) {
        alert("Login failed. Please try again.");
    }
});
