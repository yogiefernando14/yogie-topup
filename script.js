// ======================
// PROMO SLIDER
// ======================

const promoCards = document.querySelectorAll(".promo-card");

let currentPromo = 0;

function showPromo() {

  promoCards.forEach((card, index) => {

    if(index === currentPromo){

      card.style.transform = "scale(1.03)";
      card.style.borderColor = "#00d9ff";
      card.style.boxShadow =
      "0 0 30px rgba(0,217,255,.25)";

    }else{

      card.style.transform = "scale(1)";
      card.style.borderColor =
      "rgba(255,255,255,.08)";
      card.style.boxShadow = "none";

    }

  });

  currentPromo++;

  if(currentPromo >= promoCards.length){
    currentPromo = 0;
  }

}

showPromo();

setInterval(showPromo,3000);

// ======================
// DIAMOND SELECT
// ======================

const diamondButtons =
document.querySelectorAll(
".diamond-grid button"
);

let selectedDiamond = "";

diamondButtons.forEach(button => {

  button.addEventListener("click", () => {

    diamondButtons.forEach(btn => {

      btn.style.background =
      "#0b1225";

      btn.style.borderColor =
      "rgba(255,255,255,.08)";

    });

    button.style.background =
    "linear-gradient(135deg,#3b82f6,#00d9ff)";

    button.style.borderColor =
    "#00d9ff";

    selectedDiamond =
    button.textContent;

  });

});

// ======================
// TOPUP FORM
// ======================

const purchaseButton =
document.querySelector(
".purchase-btn"
);

purchaseButton.addEventListener(
"click",
() => {

  const playerId =
  document.querySelector(
  "input"
  ).value;

  if(playerId === ""){

    alert(
      "Masukkan Player ID terlebih dahulu."
    );

    return;
  }

  if(selectedDiamond === ""){

    alert(
      "Pilih nominal terlebih dahulu."
    );

    return;
  }

  const invoice =
  "YG" +
  Math.floor(
    100000 + Math.random() * 900000
  );

  alert(

`Pembelian Berhasil

Invoice:
${invoice}

Player ID:
${playerId}

Diamond:
${selectedDiamond}

Status:
Success`

  );

});

// ======================
// FLOATING CARDS
// ======================

const floatingCards =
document.querySelectorAll(
".floating-card"
);

floatingCards.forEach(
(card,index) => {

  let position = 0;

  setInterval(() => {

    position += 0.5;

    card.style.transform =

    `translateY(${
      Math.sin(position/5)
      * 10
    }px)`;

  },30);

});

// ======================
// SCROLL REVEAL
// ======================

const observer =
new IntersectionObserver(

(entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = 1;

      entry.target.style.transform =
      "translateY(0)";

    }

  });

},
{
  threshold:0.2
}

);

const sections =
document.querySelectorAll(
"section"
);

sections.forEach(section=>{

  section.style.opacity = 0;

  section.style.transform =
  "translateY(50px)";

  section.style.transition =
  ".7s ease";

  observer.observe(section);

});
