async function registerFormHandler(event) {
    event.preventDefault();
    

    // this is hardcoded user_id will come from the session
    const user_id = 1;
    
    const program_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(program_id);

        const response = await fetch('/api/registrations', {
            method: 'POST',
            body: JSON.stringify({
                user_id,
                program_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard/1');
        } else{
            alert(response.statusText);
        }
}

document.querySelector('.register-btn').addEventListener('click', registerFormHandler);