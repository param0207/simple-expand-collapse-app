const expandBtn = document.querySelectorAll(".expand-btn");

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
