const quotes = [
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "There is nothing impossible to they who will try.",
        author: "Alexander the Great"
    },
    {
        quote: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshuler"
    },
    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quote: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        author: "Amal Clooney"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "Malala Yousafzai"
    },
    {
        quote: "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
        author: "Carrie Ann Moss"
    },
    {
        quote: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
        author: "Lady Gaga"
    },
    {
        quote: "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
        author: "Mandy Hale"
    },
    {
        quote: "No matter what people tell you, words and ideas can change the world.",
        author: "Robin Williams"
    }
];

const generateQuote = () => quotes[Math.floor(Math.random()*quotes.length)];