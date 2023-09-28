const getting = document.querySelector('#gett') as HTMLInputElement;
const forms = document.querySelector('#forms');

if (forms)
  forms.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/page2', {
      method: 'post',
      body: JSON.stringify({ getting: getting.value }),
      headers: { 'Content-Type': 'application/json' },
    });
  });
