export default {
  chapters: [
    {
      title: 'What is Recompose?',
      content: `
Recompose is a utility library for React that takes advantage of the Higher Order Component (hereafter abbreviated to HOC) pattern. It allows you to build your application entirely out of stateless functional components (hereafter abbreviated to SFC) and add functionality like state, lifecycle methods, and more through HOCs. Now, I realize I just threw a couple terms at you that might be unfamiliar with. So let's define them, starting with SFCs.
`
    },
    {
      title: 'What is a Stateless Functional Component?',
      content: `
For those who read this who might be new to React and unfamiliar with SFCs, allow me to give you a brief introduction. A SFC is a pure function that returns DOM (or rather VDOM to be specific) derived solely from its arguments. Let's look at a simple example. Perhaps I need a component that displays a name and an image, like so:

\`\`\`js
const PersonCard = props =>
  <div>
    <img src={props.src} />
    <div>{props.name}</div>
  </div>
\`\`\`

Examining the function signature, we see that a SFC takes a \`props\` object and returns our DOM markup with the correct values. Keep this signuature in mind. It will play an important role in the next chapter.

As I said previously, a SFC is a pure function. This means that given the same inputs, this function will always return the same output _without any side effects_ (also, very important). This means SFCs are easy to test and more important, really easy to reason about about. SFCs are used extensively in partnership with Recompose.

Now, before we learn about the Recompose API which is full of HOCs, we should learn how to write our own.
`
    },
    {
      title: 'What is a Higher Order Component?',
      content: `
A HOC is a function that accepts a component as an argument and returns a new component. Let's start with the simplest example.

\`\`\`js
const hoc = BaseComponent => props => <BaseComponent {...props} />
hoc(<MyComponent>) // <MyComponent>
\`\`\`

Our function \`hoc()\` takes a \`BaseComponent\` as an argument, and returns a function that expects \`props\` and then simply returns a new component instance of the \`BaseComponent\` with the props spread onto the component. We could call this HOC an identity HOC.

Now, if you're paying attention, the function returned after passing the \`BaseComponent\` has the same function signature as a SFC, which is why we can pass an SFC as our \`BaseComponent\` and immediately get our new component.

Creating a HOC that returns a new, but otherwise identical, component isn't very useful. Let's make a more useful HOC.

Let's imagine we have a SFC that displays a person's name. Let's call it \`Profile\` and keep it very basic. It might look like this:

\`\`\`js
const Profile = ({ name }) =>
  <div className='profile'>
    Name: {name}
  </div>
\`\`\`

Now typically, a component like this will simply pass along the props. But maybe you'd like to override the name prop (or any other props). You might make a HOC that accepts an object of \`overrideProps\` to pass to the component like so:

\`\`\`js
const withName = overrideProps => BaseComponent => props =>
  <BaseComponent {...props} {...overrideProps} />
\`\`\`

Now we can create a new \`Profile\` component with a \`name\` value that can't be overridden. Perhaps you have a lot of Steves in your app. You might write something like this:

\`\`\`js
const AlwaysSteve = withName({ name: 'Steve' })(Profile)

// Then you can use it like any other component
<AlwaysSteve name='Kyle' /> // will still be Steve
\`\`\`

Now you have a new Component that no matter what you do will have the name Steve. Again, maybe not very useful (especially if your name is not Steve), but we can begin to see a pattern of where we can accept some arguments and control the mapping of these arguments to the new component we are going to return.

Using these curried patterns, we will soon find out that we can build complex applications by sharing these reusable, composable, partially-applied functions.
`
    },
    {
      title: 'A Brief Intro to Functional Programming',
      content: `
You might be wondering why we're going through all this trouble wrapping our components with functions to return components. I admit at first, it seems like overkill and superfluous JavaScript, but it has a point and a great payoff.

### Compose

Composition is one of the most important parts of functional programming. Let's say we have a set of data that we need to do several operations on:

\`\`\`js
const data = [1, 2, 3]

const result =
  data
    .map(datum => datum * 2)
    .map(double => double ** 3) // ES7 exponentiation operator
\`\`\`

Now, to improve this a bit, let's pull the callback function out and pass it in.

\`\`\`js
const data = [1, 2, 3]
const double = x => x * 2
const cube = x => x ** 3

const result = data.map(double).map(cube)
\`\`\`

Ok, here's another way to accomplish this:

\`\`\`js
const data = [1, 2, 3]
const double = xs => xs.map(x => x * 2)
const cube = xs => xs.map(x => x ** 3)

const result = cube(double(data))
\`\`\`

Now instead of mapping over data explicitly, we pass the detail off to the function, and then pass the result of one function to the next through composition. Let's do this one more time, but this time, with a \`compose\` helper (we'll explore what compose is in a second).

\`\`\`js
const data = [1, 2, 3]
const double = xs => xs.map(x => x * 2)
const cube = xs => xs.map(x => x ** 3)

const doubleThenCube = compose(
  cube,
  double
) // compose reads right-to-left, we'll see why in a second

const result = doubleThenCube(data)
\`\`\`

In each of these scenarios, we acheive the same result, but in the final one, we see our ability to build custom function by composing functions with the same signature.

If you recall high school math, a function was generally represented \`f(x)\`. If we had a second function, it might have been represented as \`g(x)\`. Composition is when we do \`f(g(x))\`, passing the result of one function as the input to the next function. We are doing the same here. We pass the result of \`double\` into \`cube\` and get our end result, all without having to make any interim variables.

We'll see this pattern as we explore Recompose. We will build up resuable enhancer functions through the composition of HOCs.
`
    },
    {
      title: "Let's Explore the Recompose API",
      content: `
The previous chapter explains what a HOC is and how we might use some basic HOCs in our app. Admittedly, the example used was a bit ridiculous. So let's dig into Recompose's API and find some HOCs that are actually useful.

If you would like to explore the Recompose API yourself, [here's the link](https://github.com/acdlite/recompose/blob/master/docs/API.md).
`
    }
  ]
}
