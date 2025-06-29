
//button load in API
const loadPetsButton = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await res.json();
    const buttonContainer = document.getElementById("button-container");
    data.categories.forEach((category) => {
        const div = document.createElement("div");
        div.classList = "";
        div.innerHTML = `
        <button class="border border-gray-200 flex items-center gap-3 px-10 py-3 rounded-lg ">
            <img class="w-10 h-10" src="${category.category_icon}" alt="">
            <p>${category.category}</p>
        </button>
        `;
        buttonContainer.appendChild(div);

    })
}

loadPetsButton();