export const markdown = `
# Let's write some Markdown!

# This is a H1 (main heading) element.
## This is a H2 (sub-heading) element.
  
\`\`\`This is a block of code\`\`\`
\`\`\`You can use 3 backticks \` or indent four spaces. \`\`\`

    function(x) { 
      return x * y 
    };

But what if you wanted to write inline code? 
Simple, \`wrap your code in single backticks\`.
  
**All good? Great lets move forward**

> Block Quotes!
  
To end the blockquote, just put a blank line before the following
paragraph.

There are two ways to add links - inline or otherwise.

[I'm an inline link, click me](https://www.google.com)

Or just put a link as is - https://www.google.com.

**We have come a long way, let's recap**

- And of course there are lists.
- Some are bulleted.
  - With different indentation levels.
   - That look like this.

1.An there are numbererd lists too.
1. Us just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
