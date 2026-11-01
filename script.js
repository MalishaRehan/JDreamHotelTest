document.getElementById('inquiryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('guestName').value.trim();
  const room = document.getElementById('roomType').value;
  const checkIn = document.getElementById('checkIn').value;
  const checkOut = document.getElementById('checkOut').value;
  const statusMsg = document.getElementById('formStatus');

  if (new Date(checkIn) >= new Date(checkOut)) {
    statusMsg.style.color = '#c62828';
    statusMsg.textContent = 'Check-out date must be after check-in date.';
    return;
  }

  // Construct booking text
  const message = `Hello J Dreams Hotel, I would like to inquire about booking the ${room} from ${checkIn} to ${checkOut} under the name ${name}.`;

  statusMsg.style.color = '#2e7d32';
  statusMsg.textContent = 'Inquiry generated successfully! Redirecting...';

  // Demo: Opens WhatsApp with the pre-filled inquiry
  setTimeout(() => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/94776545333?text=${encodedMessage}`, '_blank');
  }, 1000);
});