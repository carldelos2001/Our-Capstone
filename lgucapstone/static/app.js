document.getElementById('send-otp-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/send-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  });

  const data = await response.json();
  if (data.success) {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('otp-form').style.display = 'block';
  } else {
    alert('Failed to send OTP');
  }
});

document.getElementById('verify-otp-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const otp = document.getElementById('otp').value;

  const response = await fetch('/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ otp })
  });

  const data = await response.json();
  if (data.success) {
    alert('OTP verified successfully!');
    // Redirect or handle successful verification
  } else {
    alert('Invalid OTP');
  }
});
