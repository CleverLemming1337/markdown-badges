// MD code for user to copy
let mdCode = {}

// execute code when DOMContent was loaded
document.addEventListener("DOMContentLoaded", main);

// main code
function main() {
    // add category sections to html
    categories.forEach((item, index) => {
        let category = document.createElement("div")

        // add header
        let header = document.createElement("h2")
        header.innerText = item.name
        category.appendChild(header)

        // add section for badges
        let badgeSection = document.createElement("div")
        badgeSection.id = `badges_${item.shortName}`
        badgeSection.classList.add("section")
        category.appendChild(badgeSection)

        // add whole section
        document.getElementById("badges").appendChild(category)
    })

    // add badges to categories
    badges.forEach((item, index) => {
        let badge = document.createElement("img");
        badge.className = "badge"
        badge.id = index
        badge.src = `https://img.shields.io/badge/${item.name}-${item.color}.svg?style=for-the-badge&logo=${item.logo}&logoColor=white`;
        
        // function for adding badge on click
        badge.addEventListener("click", function () {
            console.log(`added ${item.name}`)
            mdCode[index] = item.name
            document.getElementById("md-code").innerText = Object.values(mdCode).join("")
            document.getElementById(index).remove()
            document.getElementById("added").appendChild(badge)
        })

        document.getElementById(`badges_${categories[item.category].shortName}`).appendChild(badge);
    })
}