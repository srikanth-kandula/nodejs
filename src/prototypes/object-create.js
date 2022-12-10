/**
 * Setting protype using Object.create()
 */

let editor = {
  name: 'editorName',
  version: 14,
  theme: 'editorTheme'
}

let visualStudioCode = Object.create(editor); //visualStudioCode has prototype set to editor and all its properties are available to visualStudioCode
visualStudioCode.name = 'Visual Studio'; //create a new property 'name' on the object.
visualStudioCode.theme = 'dark';
console.log(visualStudioCode.__proto__)
console.log(visualStudioCode.name); //the property present on the object take more priority than the one on the prototype. So output = 'Visual Studio' but not 'editorName'

let notepad = Object.create(editor);
notepad.name = 'notepad++';

console.log(notepad.__proto__);// logs the object literal of the 'editor'
