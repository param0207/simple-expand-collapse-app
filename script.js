const expandBtn = document.querySelectorAll(".expand-btn");
const expandAll = document.querySelector(".expand-all");

expandBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btn = e.target;
    const parent = btn.closest(".card");

    const cardBody = parent.querySelector(".card-body");
    if (!cardBody.classList.contains("show")) {
      btn.innerText = "Collapse";
      cardBody.classList.add("show");
    } else {
      btn.innerText = "Expand";
      cardBody.classList.remove("show");
    }
  });
});

// add eventlistener on expand all btn
expandAll.addEventListener("click", (e) => {
  const target = e.target;

  expandBtn.forEach((btn) => {
    const parent = btn.closest(".card");

    const cardBody = parent.querySelector(".card-body");
    if (target.innerText === "Expand All") {
      btn.innerText = "Collapse";
      cardBody.classList.add("show");
    } else {
      btn.innerText = "Expand";
      cardBody.classList.remove("show");
    }
  });
  if (target.innerText === "Expand All") {
    target.innerText = "Collapse All";
  } else {
    target.innerText = "Expand All";
  }
});
