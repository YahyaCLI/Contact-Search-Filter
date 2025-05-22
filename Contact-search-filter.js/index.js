import { contactsArr } from "./contactsData.js";
console.log(contactsArr)


const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener('click', function(){
    contactDisplay.innerHTML = ''
    const input = patternSearchInput.value.toLowerCase().trim()
     console.log('User input', input)
    const result = contactsArr.filter(function(contacts) {
        return contacts.name.toLowerCase().includes(input)
    })
    console.log(result)
    result.forEach(renderContact)
    
})
function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')

    
    const nameEl = document.createElement('p')
    nameEl.textContent = contactObj.name
    contactCard.appendChild(nameEl)

    const emailEl = document.createElement('p')
    emailEl.textContent = contactObj.email
    contactCard.appendChild(emailEl)

    const phoneEl = document.createElement('p')
    phoneEl.textContent = contactObj.phone
    contactCard.appendChild(phoneEl)

    contactDisplay.appendChild(contactCard)
}
