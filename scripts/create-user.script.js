const createUserRequest = async () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const result = await fetch('http://localhost:3001/create-user',
    {
      method: 'POST',
      body: JSON.stringify({ name, email }),
    });
};
