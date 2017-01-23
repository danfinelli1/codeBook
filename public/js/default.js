$(document).ready(function(){
  var content = $(".codemirror-textarea")[0];
  var editor = CodeMirror.fromTextArea(content, {
    lineNumbers : true,
    matchBrackets: true,
    mode: "text/x-csrc"
  });
  function showCode()
  {
      var text = editor.getValue();
      console.log(text);
  }
});


//do on form submit
//var on submit to get code
// alert(editor.getValue());
