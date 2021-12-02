import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers=getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id=pet--${pet.id}>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

// first get a document event listiner
//made a function with a paramater
//found the target.id now we need to show that it was clicked 
//not getting the ids of the walking 
//had to add the ids of the walker id to the walkers.js
//now have to narrow down the click event

document.addEventListener("click", eventButton=>{
// use a if statment
//we got the id to show but we still not narrowing down the if statment to just the pets
//got the if statment to narrow to just the pet box
//now we are going to get the id itself
// got the number of the id now need to convert the string to a int

//now we need to match the pet id with the name of the pet
//get the id of the walker and the name using a .find 
//had to use the .find to compare the walker id to the pet id.
    const webClicked=eventButton.target.id

    if(webClicked.startsWith("pet--")){
const [,idNumber]=webClicked.split("--")
const convert=parseInt(idNumber)
      for (const pet of pets){
        if(pet.id===convert){
           
            
            
            
            const compair=walkers.find((walker)=>pet.id===walker.id)
            window.alert(`${compair.name} walked ${pet.name}`)
            

        }



      }

}
    
    

    

})