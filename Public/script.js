document.getElementById('form').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const name = e.target.name.value;
  const email = e.target.email.value;

  const res = await fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });

  const result = await res.json();
  alert(result.message);
});
