import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from '../Chapter'

const input = `
A Higher Order Component (abbreviated to HOC hereafter), is a function that accepts a component as an argument and returns a component.

Below is an example of a HOC. The function takes a \`BaseComponent\` as an argument and simply returns the \`BaseComponent\`. This isn't very useful, but it's the place we need to start. We'll get into slightly more complicated examples further in this chapter.

\`\`\`js
const hoc = BaseComponent => BaseComponent
hoc(<MyComponent>) // <MyComponent>
\`\`\`

Now, a HOC that implements the identity function isn't very useful. So let's build something slightly better. Let's Now, most components in React utilize \`props\` and we can write our identity HOC with a slightly different pattern to represent this.

\`\`\`js
const hoc = (BaseComponent, props) =>
  <BaseComponent {...props} />
\`\`\`

Here, our HOC accepts two arguments, our \`BaseComponent\` and a \`props\` object. It returns our component with the \`props\` spread over it.

We can make this a bit more useful by introducing _currying_ to our function. Currying is when a function is modified to accept its arguments one at a time until all arguments are supplied and a value is returned. We accomplish this by returning functions that expect the next argument. A canonical example using an \`add()\` function is below.

\`\`\`js
// Without currying
function add (x, y) { return x + y }

add(3, 4) // 7

// With currying
function curriedAdd (x) {
  return function (y) {
    return x + y
  }
}

curriedAdd(3)(4) // 7
\`\`\`

Curried functions are even easier to read as arrow functions because of their implicit return (and that an arity of one doesn't require parentheses around its argument). The same \`curriedAdd\` looks like the following as an arrow function.

\`\`\`js
const curriedAdd = x => y => x + y
\`\`\`

Now that we understand currying, we can apply this to our previous HOC passing \`props\` to our \`BaseComponent\`, like so:

\`\`\`js
const hoc = BaseComponent => props =>
  <BaseComponent {...props} />
\`\`\`

Now we have something useful. If you're paying attention and familiar with React and Stateful Functional Components (hereafter abbreviated to SFC), then you might recognize the function signature of our \`hoc\` function as matching that of an SFC. We can take this pattern, and add further curried arguments to make an even more useful HOC.

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

// Then you can use like any other component
<AlwaysSteve name='Kyle' /> // will still be Steve
\`\`\`

Now you have a new Component that no matter what you do will have the name Steve. Again, maybe not very useful (especially if your name is not Steve), but we can begin to see a pattern of where we can accept some arguments and control the mapping of these arguments to the new component we are going to return.

Using these curried patterns, we will soon find out that we can build complex applications by sharing these reusable, composable, partially-applied functions.
`

const Two = () =>
  <Chapter number={2} heading="What is a Higher Order Component?">
    <ReactMarkdown source={input} />
  </Chapter>

export default Two
