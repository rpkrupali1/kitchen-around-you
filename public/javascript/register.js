async function registerFormHandler(event) {
  event.preventDefault();
  const program_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(program_id);
  const response = await fetch("/api/registrations", {
    method: "POST",
    body: JSON.stringify({
      program_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".register-btn")
  .addEventListener("click", registerFormHandler);
