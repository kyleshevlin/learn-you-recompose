export default {
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
}
