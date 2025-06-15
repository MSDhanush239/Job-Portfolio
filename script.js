document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const bloodGroup = document.getElementById('bloodgroup').value;

        if (!name || !phone || !bloodGroup) {
            alert('Please fill in all fields.');
            return;
        }

        alert(
            `Name: ${name}\nPhone: ${phone}\nBlood Group: ${bloodGroup}`
        );

        // Optionally, you can reset the form after submission
        form.reset();
    });
});