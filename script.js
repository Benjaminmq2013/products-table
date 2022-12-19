// JS Code here...

const table_body = document.querySelector(".table-body")
const add_button = document.getElementById("add-button")

add_button.addEventListener( "click", (e) => buildElement(e) )

const buildElement = (e) => {
    e.preventDefault()
    
    const newElement = document.createElement("tr")
    
    

    let tableElement = `
    
    <td>468</td>
    <td>Monitor</td>
    <td>$100.00</td>
    <td>21%</td>
    <td>$121.00</td>
    <td>12/13/2022</td>
    <td>
        <button class="btn btn-delete">Delete</button>
    </td>`

    newElement.innerHTML = tableElement

    table_body.appendChild(newElement)
}

console.log(table_body)