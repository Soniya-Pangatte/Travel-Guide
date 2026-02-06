// Simple interaction example
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert("More details coming soon!");
        });
    });
});
  const form = document.querySelector('.contact form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }

    // Here you can send form data to server using fetch() if needed
    console.log('Form submitted:', { name, email, message });

    // Show success message
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset the form
    form.reset();
  });


