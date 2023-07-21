export default (`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

    .blaze-editor {
        width: 100%;
        min-height: 300px;
        padding: 12px;
        background: rgb(24 24 27 / 80%);
        box-shadow: 2px 6px 4px #0008;
        border-radius: 12px;
    }

    .blaze-editor, .blaze-editor *:not(.fas, .far, .fab) {
        font-family: 'Fira Code', monospace;
    }

    .blaze-editor ::-webkit-scrollbar {
        background: rgb(16 16 17);
        width: 5px;
        height: 5px;
    }

    .blaze-editor ::-webkit-scrollbar-thumb {
        background: rgb(252, 51, 51);
    }

    .blaze-toolbar {
        width: 100%;
        height: 40px;
        border-radius: 12px;
        background: #0002;
        box-shadow: 2px 2px 4px #0008;
        margin-bottom: 12px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px;
    }

    .blaze-relative {
        position: relative;
        height: 224px;
    }

    .blaze-textarea {
        width: 100%;
        height: 100%;
        display: block;
        outline: 0;
        background: 0;
        border: 0;
        resize: none;
        
        font-size: 20px;
        color: transparent;
        caret-color: rgb(252, 51, 51);

        padding: 0 12px;
    }

    .blaze-preview {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 20px;
        pointer-events: none;
        width: 100%;
        height: 224px;
        color: #eee;

        overflow-y: auto;

        padding: 0 12px;
    }

    .blaze-action-button {
        width: 28px;
        height: 28px;
        border: 0;
        outline: 0;
        background: rgb(24 24 27 / 80%);
        cursor: pointer;

        margin-left: 8px;
        border-radius: 8px;
        box-shadow: 0 2px 4px 2px #0004;

        color: #aaa;
        transition: .225s;
    }

    .blaze-action-button:hover {
        color: #eee;
    }

    .blaze-action-button em {
        font-size: 20px;
    }

    .blaze-select {
        background: rgb(24 24 27 / 80%);
        border: 0;
        border-radius: 8px;
        outline: 0;
        color: #fff;
        padding: 5px 10px;
        box-shadow: 0 0 4px 2px #0004; 
    }

    .blaze-header {
        color: rgb(252, 51, 51);
    }
`);