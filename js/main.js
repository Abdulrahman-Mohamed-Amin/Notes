let add_note = document.querySelector(".add_note")
let notes_cont = document.querySelector(".notes_cont")

const arrNote = JSON.parse(localStorage.getItem("arrNote"))
if(arrNote){
    arrNote.forEach(note =>{
        if(note !== ""){
            addNoteFun(note)
        }
    })
}


add_note.addEventListener("click" , (e) =>{
    addNoteFun()
    // checkForEmptyNote()
})


function addNoteFun (ele) {

   let divNote = document.createElement("div")
   divNote.className = `note`

   let headNote = document.createElement("div")
   headNote.className = "head"

   let write_note = document.createElement("i")
   write_note.className = "fa-solid fa-file-pen write_note"

   let delete_note = document.createElement("i")
   delete_note.className = "fa-solid fa-trash delete_note"
   headNote.appendChild(write_note)
   headNote.appendChild(delete_note)

   
   let bodyNote = document.createElement("div")
   bodyNote.className = "body"
   
   let textNote = document.createElement("textarea")
   textNote.className = "text_note"
   if(ele){
    textNote.appendChild(document.createTextNode(ele))
   }
   bodyNote.appendChild(textNote)
   
   divNote.appendChild(headNote)
   divNote.appendChild(bodyNote)

   notes_cont.appendChild(divNote)

   //delete
   delete_note.addEventListener("click" , (e) =>{
    divNote.remove()
    updateLS()
   } )
   //read or write 
   write_note.addEventListener("click" , (e) => {
    readOnly(textNote)
   })

   textNote.addEventListener("input" , (e) =>{
    const {value} = e.target 

    updateLS()
   })
}

function readOnly (text) {
    if(!text.hasAttribute("readonly")){
        text.setAttribute("readonly" , "")
        text.style.height = "300px"
    }else{
        text.removeAttribute("readonly")
        text.style.height = "350px"
        
    }
}

function updateLS () {
 let textArea = document.querySelectorAll(".notes textarea")

 const arrNote = []

 textArea.forEach(area => {
    arrNote.push(area.value)
 })

 localStorage.setItem("arrNote" , JSON.stringify(arrNote))

}

