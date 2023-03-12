const registrationForm = document.querySelector('#registrationForm');
const outputDiv = document.querySelector('#output');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);

  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');

  outputDiv.innerHTML = `
    <h2>Registration Details:</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
  `;
});
