
// targeting id and class code start here
let editorText = document.getElementsByClassName('ProseMirror')[0];
editorText.id = "stackEditor";

let stackEditor = document.getElementById('stackEditor');
let preview = document.getElementById('preview');
// targeting id and class code start end



// remove 'plainText' text inside code starting
stackEditor.addEventListener('input', (e) => {
    let languageEditorText = document.getElementsByClassName('js-language-indicator')[0];
    if (languageEditorText != null) {
        languageEditorText.id = "languageText";
        let languageText = document.getElementById('languageText');
        languageText.innerText = "";
    }
});
// remove 'plainText' text inside code ending


// function for parseHTML to string code start
function parseHTML() {
    console.log(stackEditor.innerText)
    preview.innerText = "";
    var $preview = $("#preview"),
        str = stackEditor.innerHTML,
        html = $.parseHTML(str),
        nodeNames = [];

    // Append the parsed HTML
    $preview.append(html);
    // console.log(stackEditor.innerHTML.length);
    stackEditor.innerText = "";
}
// function for parseHTML to string code end