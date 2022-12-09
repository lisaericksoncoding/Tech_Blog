const loginFormHandler = async (event) => {
    event.preventDefault();

    const userEmail = document.querySelector('#email-login').value.trim();
    const userPassword = document.querySelector('#password-login').value.trim();

    if (userEmail && userPassword) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                userEmail,
                userPassword
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {

            document.location.replace('/profile');
        }
        else {
            console.error("Something went wrong. Please try again.");

        }
    }
}

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);