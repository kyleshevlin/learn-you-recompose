export default {
  title: 'What is Recompose?',
  content: `
Recompose is a utility library for React that takes advantage of the Higher Order Component (hereafter abbreviated to HOC) pattern. It allows you to build your application entirely of stateless functional components (hereafter abbreviated to SFC) and add functionality like state, lifecycle methods, and more through HOCs.

For those who read this who might be new to React and unfamiliar with SFCs, allow me to give you a brief introduction. A SFC is a pure function that returns DOM (or rather VDOM to be specific) derived solely from its arguments. Let's look at a simple example. Perhaps I need a component that displays a name and an image, like so:

\`\`\`js
const PersonCard = props =>
  <div>
    <img src={props.src} />
    <div>{props.name}</div>
  </div>
\`\`\`

Examining the function signature, we see that an SFC takes a \`props\` object and returns our DOM markup with the correct values. Keep this signuature in mind. It will play an important role in the next chapter.

As I said previously, a SFC is a pure function. This means that given the same inputs, this function will always return the same output _without any side effects_ (also, very important). This means SFCs are easy to test and more important, really easy to reason about about. SFCs are used extensively in partnership with Recompose.

Now, before we learn about the Recompose API which is full of HOCs, we should learn how to write our own.
`
}
