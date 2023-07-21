# Blaze Text Editor
Blaze is fast, light-weight and easy-to-setup text editor with pattern highlighting.

## Installing
```npm i blaze-editor```

## Example
```js
import Editor from 'blaze-editor'

const editor = new Editor('#editor', {
    placeholder: "Write here...",
    tabSize: 4,
    languages: [
        {
            name: 'JavaScript',
            patterns: [
                {
                    patterns: [/(var|let|const|class|function|constructor|if|for|while|from|do|in|new|try|catch|case|else|enum|eval|this|void|with|await|break|super|throw|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|arguments|interface|protected|implements|instanceof)/g],
                    color: "#0077dd"
                },
                {
                    patterns: [/\/\/.+/g, new RegExp("\\/\\*[\\S\\s]*?\\*\\/", "g")],
                    color: "#999999",
                },
                {
                    patterns: [new RegExp("\{[\\S\\s]*?\}", "g")],
                    color: "#c9c9c7",
                },
                {
                    patterns: [new RegExp("\"[\\S\\s]*?\"", "g"), new RegExp("'[\\S\\s]*?'", "g"), new RegExp("`[\\S\\s]*?`", "g")],
                    color: "#1fff62"
                },
                {
                    patterns: [/true/g, /false/g, /null/g, /undefined/g],
                    color: "#0077dd"
                },
                {
                    patterns: [new RegExp("\\b[a-zA-Z_][\\w-]+?(?= *\\()", "g")],
                    color: "red"
                }
            ]
        }
    ]
})
```
