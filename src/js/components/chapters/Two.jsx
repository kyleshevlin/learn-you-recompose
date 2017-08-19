import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from '../Chapter'

const input = `
A Higher Order Component (abbreviated to HOC hereafter), is a function that accepts a component as an argument and returns a component. At its core, a HOC is that simple.

Below is an example of a HOC. The function takes a BaseComponent as an argument and simply returns the BaseComponent. This isn't very useful, but it's the place we need to start. We'll get into slightly more complicated examples further in this chapter.

\`\`\`js
const hoc = BaseComponent => BaseComponent
hoc(<MyComponent>) // <MyComponent>
\`\`\`

Now, a HOC that implements the identity function isn't very useful. So let's build something slightly better. Now, most components in React utilize \`props\` and we can write our identity HOC with a slightly different pattern to represent this.

\`\`\`js
const hoc = BaseComponent => props =>
  <BaseComponent {...props} />
\`\`\`

Here we take a a component as an argument and return a function that expects props as an argument, which then returns our \`BaseComponent\` with the \`props\` spread over it. This is the typical pattern for most HOCs.

Taking this a step further, let's imagine we have a component that displays a person's name. Very basic. It might look like this.

\`\`\`js
const Profile = ({ name }) =>
  <div className='profile'>
    Name: {name}
  </div>
\`\`\`

Now typically, a component like this will simply pass along the props. But maybe you'd like to override the name prop. You might make a HOC that accepts a name to pass to the component like so:

\`\`\`js
const withName = name => BaseComponent => props =>
  <BaseComponent {...props} name={name} />
\`\`\`

Now we can create a new \`Profile\` component with a name value that can't be overridden. Perhaps you have a lot of Steves in your app. You might write something like this:

\`\`\`js
const AlwaysSteve = withName('Steve')(Profile)

// Then you can use like any other component
<AlwaysSteve name='Kyle' /> // will still be Steve
\`\`\`

Now you have a new Component that no matter what you do will have the name Steve. Again, maybe not very useful (especially if your name is not Steve), but we can begin to see a pattern of where we can accept some arguments and control the mapping of these arguments to the new component we are going to return.
`

const Two = () =>
  <Chapter number={2} heading="What is a Higher Order Component?">
    <ReactMarkdown source={input} />
  </Chapter>

export default Two
