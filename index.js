const textArea = document.getElementById("textArea")
const wordCounter = document.getElementById("wordCount")
const characters = document.getElementById("characters")


textArea.oninput = () => {
let allChars = textArea.value
characters.textContent = allChars.replace(/\s/g, '').length;

let wordCt = textArea.value.split(' ').filter((items)=> {
 return items != ''
})

wordCounter.textContent = wordCt.length;

}
