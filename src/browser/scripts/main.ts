const getting = document.querySelector('#getting') as HTMLInputElement;
const forms = document.querySelector('#forms');

if (forms)
  forms.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/page', {
      method: 'post',
      body: JSON.stringify({ getting: getting.value }),
      headers: { 'Content-Type': 'application/json' },
    });
  });
