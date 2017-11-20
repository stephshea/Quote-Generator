/*global author*/
/*global random*/
/*global quote*/
/*global button*/

var quotes = [
   
    {
        quote:'In the middle of every difficulty lies opportunity.',
        author: 'Albert Einstein',
    },
   
    {
        quote:'A word of encouragement during a failure is worth more than an hour of praise after success.',
        author: 'Unknown'
    },
    
     {
        quote:'In order to succeed, we must first believe that we can.',
        author: 'Nikos Kazantzakis'
    },
   
     {
        quote:'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You\'\re on your own. And you know what you know. And YOU are the one who\'\ll decide where to go...',
        author: 'Dr Suess'
    }
   
    ]

//random quote function
function randomQuote (){
    //get a random number to pick a random quote object
    random = Math.floor(Math.random() * quotes.length);
    //get that random quote's content
    quote.innerHTML = quotes[random].quote;
    //get that random quote's author
    author.innerHTML = '&mdash; ' + quotes[random].author;
}



//Generate a Random Quote
window.onload = randomQuote;
button.addEventListener('click', randomQuote);



function tweet () {
window.open('https://twitter.com/intent/tweet?related=&text=' + document.getElementById("quote").textContent + " " + document.getElementById("author").textContent + ".");
}

function tumblr () {
    window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote=' + encodeURIComponent(quote+ '- ' + author));
      }
      