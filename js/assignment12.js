const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

const endPoint = 'https://free-quotes-api.herokuapp.com/';

async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.quote);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function buttonClicked() {
  document.getElementById('button-1').classList.toggle('is-pink');
}

function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

window.onload = windowLoaded;
