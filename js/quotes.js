const qoutes = [
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "That it will never come again is what makes life so sweet.",
        author: "Emily Dickinson"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishmen.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami"
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = qoutes[Math.floor(Math.random() * qoutes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;