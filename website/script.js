const badges = [
    {
        "name": "GitHub",
        "logo": "github",
        "color": "000000",
        "text": "ffffff"
    }
];
document.addEventListener("DOMContentLoaded", function () {


    badges.forEach((item, index) => {
        let badge = document.createElement("img");
        badge.className = "badge"
        badge.id = index
        badge.addEventListener("click", function() {
            console.log(`added ${badges[index].name}`)
        })
        badge.src = `https://img.shields.io/badge/${item.name}-${item.color}.svg?style=for-the-badge&logo=${item.logo}&logoColor=white`;
        document.getElementById("badges").appendChild(badge);
    })
});
