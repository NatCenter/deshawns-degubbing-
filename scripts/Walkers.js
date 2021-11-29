import { getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // it is trying to find the id that starts with walker
        if (itemClicked.id.startsWith("walker")) {
            //this split the -- and stores whatever number the id as in the array 
            const [,walkerId] = itemClicked.id.split("--")
            // this for loop  it looks through all the walkers and displays the name and the city in a alert after you click on it in the web browser.
            for (const walker of walkers) {
                // it matches the walker.id number with the walkerod in the database.js
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)





const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {

        //it is getting the walker id from the database.js
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`

    }

    walkerHTML += "</ul>"
    return walkerHTML

}
