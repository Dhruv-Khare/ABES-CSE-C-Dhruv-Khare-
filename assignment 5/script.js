const data = [
  {
    image: "../assets/community1.jpg",
    price: "18$",
  },
  {
    image: "../assets/community1.jpg",
    price: "22$",
  },
  {
    image: "../assets/community1.jpg",
    price: "200$",
  },
];

const cardBody = document.querySelector(".cardBody"); // ✅ FIXED

data.forEach((d) => {
  const card = document.createElement("div"); // ✅ FIXED
  card.classList.add("card"); // optional styling
  
  card.innerHTML = `
    <img src="${d.image}" alt="image1">
    <div class="prod-price">
      <span>${d.price}</span>
      <button>Click to Open</button>
    </div>
  `;

  cardBody.appendChild(card); // ✅ FIXED
});
