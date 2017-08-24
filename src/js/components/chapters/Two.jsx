import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from '../Chapter'

const input = `
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

const Two = () =>
  <Chapter number={2} heading="What is a Higher Order Component?">
    <ReactMarkdown source={input} />
  </Chapter>

export default Two
