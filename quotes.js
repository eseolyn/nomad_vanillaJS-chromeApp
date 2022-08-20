const quotes = [
  {
    quote:
      "Maturity consists in having rediscovered the seriousness one had as a child at play.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Dream as if you'll live forever. Live as if you'll die today.",
    author: "James Dean",
  },
  {
    quote: "Much learning does not teach understanding.",
    author: "Heraclitus",
  },
  {
    quote:
      "Liberty without learning is always in peril; learning without liberty is always in vain.",
    author: "John F. Kennedy",
  },
  {
    quote:
      "Next in importance to freedom and justice is popular education, without which neither freedom nor justice can be permanently maintained.",
    author: "James A. Garfield",
  },
  {
    quote:
      "Education is the ability to listen to almost anything without losing your temper or your self-confidence.",
    author: "Robert Frost",
  },
  {
    quote: "You always pass failure on the way to success.",
    author: "Mickey Rooney",
  },
  {
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote:
      "Creativity represents a miraculous coming together of the uninhibited energy of the child with its apparent opposite and enemy, the sense of order imposed on the disciplined adult intelligence.",
    author: "Norman Podhoretz",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "The best victory is when the opponent surrenders of its own accord before there are any actual hostilities...It is best to win without fighting.",
    author: "Sun-tzu",
  },
  {
    quote:
      "Nothing changes your opinion of a friend so surely as success - yours or his.",
    author: "Franklin P. Jones",
  },
  {
    quote:
      "In prosperity our friends know us; in adversity we know our friends.",
    author: "John Churton Collins",
  },
  {
    quote:
      "There is no mistaking a real book when one meets it. It is like falling in love.",
    author: "Christopher Morley",
  },
  {
    quote:
      "There is a great deal of difference between an eager man who wants to read a book and the tired man who wants a book to read.",
    author: "G. K. Chesterton",
  },
  {
    quote:
      "When I am attacked by gloomy thoughts, nothing helps me so much as running to my books. They quickly absorb me and banish the clouds from my mind.",
    author: "Michel de Montaigne",
  },
  {
    quote: "Never read a book through merely because you have begun it.",
    author: "John Witherspoon",
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "People like us, who believe in physics, know that the distinction between past, present, and future is only a stubbornly persistent illusion.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.",
    author: "Jim Bishop",
  },
  {
    quote: "Study the past if you would define the future.",
    author: "Confucius",
  },
  {
    quote:
      "Judge thyself with the judgment of sincerity, and thou will judge others with the judgment of charity.",
    author: "John Mitchell Mason",
  },
  {
    quote:
      "If you want the present to be different from the past, study the past.",
    author: "Baruch Spinoza",
  },
  {
    quote: "It is a bad plan that admits of no modification.",
    author: "Publilius Syrus",
  },
  {
    quote:
      "Improvements are invented only by those who can feel that something is not good.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "What is written without effort is in general read without pleasure.",
    author: "Samuel Johnson",
  },
  {
    quote: "That indolent but agreeable condition of doing nothing.",
    author: "Pliny the Younger",
  },
  {
    quote: "We cannot really love anybody with whom we never laugh.",
    author: "Agnes Repplier",
  },
  {
    quote: "Nothing shows a man's character more than what he laughs at.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "When the habitually even-tempered suddenly fly into a passion, that explosion is apt to be more impressive than the outburst of the most violent amongst us.",
    author: "Margery Allingham",
  },
  {
    quote: "Take calculated risks. That is quite different from being rash.",
    author: "George S. Patton",
  },
  {
    quote: "Convictions are more dangerous enemies of truth than lies.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Lord, grant that I may always desire more than I accomplish.",
    author: "Michelangelo",
  },
  {
    quote: "Self-respect is the cornerstone of all virtue.",
    author: "John Herschel",
  },
  {
    quote: "I'd rather be hated for who I am than be loved for who I'm not.",
    author: "Kurt Cobain",
  },
  {
    quote: "The less their ability, the more their conceit.",
    author: "Ahad HaAm",
  },
];
//{
//  quote:"",
//  author:"",
//}

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
