// Getting table containers

const table_body = document.querySelector(".table-body")
const form_submit = document.querySelector(".product-form")

// Getting Input fields

const product_name = document.getElementById("product")
const product_price = document.getElementById("price")
const product_IVA = document.getElementById("iva")

form_submit.addEventListener( "submit", (e) => buildElement(e) )

const getRandom = () => {
    return Math.floor(Math.abs(Math.random() * (1 - 999) + 1));
}

// Adding Data

const buildElement = (e) => {

    e.preventDefault()

    
    // Generating Data

    const random = getRandom()
    const prod_name = product_name.value;
    const prod_price = product_price.value;
    const prod_IVA = product_IVA.value;

    const ivaPercent = prod_price * Number(`0.${prod_IVA || 21}`) 
    const total = Math.abs(ivaPercent - prod_price) ;   

    const date = new Date().toLocaleDateString()
    
    const newElement = document.createElement("tr")
    newElement.classList.add(`product-${random}`)
    
    

    let tableElement = `
    
    <td>${random}</td>
    <td>${prod_name}</td>
    <td>$${Number(prod_price).toFixed(2)}</td>
    <td>${prod_IVA || 21}%</td>
    <td>$${total.toFixed(2)}</td>
    <td>${date}</td>
    <td>
        <button class="btn btn-delete" onclick="delete_item(${random})" >Delete</button>
    </td>`

    newElement.innerHTML = tableElement

    table_body.appendChild(newElement)
}



// Deleting

const delete_item = (id) => {

    const elem = document.querySelector(`.product-${id}`)

    let confirm = prompt('Para confirmar escribe "Yes", para cancelar escribe: "No" ')

    // Validations

    if(typeof confirm === "object") confirm = ""

    if(confirm.toLowerCase() === "yes") table_body.removeChild(elem)

}