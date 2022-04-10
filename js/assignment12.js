const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

const author = document.querySelector('#author');

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
    displayAuthor(json.author);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;

function displayAuthor(author) {
  const author = document.querySelector('#author');
  author.textContent = author;
}
}
