const createAccountFormHandler = async (event) => {
    event.preventDefault();

    const userEmail = document.querySelector('#email-create').value.trim();
    const userPassword = document.querySelector('#password-create').value.trim();

    if (userEmail && userPassword) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({
                userEmail,
                userPassword
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('Account successfully created!');

            document.location.replace('/login');
        }
        else {
            console.error("Something went wrong. Please try again.");

        }
    }
}

document.querySelector('#createAccountForm').addEventListener('submit', createAccountFormHandler);