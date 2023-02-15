const ratingCard = document.querySelector(".ratings-card");
const thanksCard = document.querySelector(".thanks-card");
const ratings = document.querySelectorAll(".ratings-section span");
const submitBtn = document.querySelector(".submit-btn");
const rateResult = document.getElementById("rating");
let result;

ratings.forEach((rating) => {
	rating.addEventListener("click", (e) => {
		const clicked = document.querySelector(".checked");
		if (clicked) {
			clicked.classList.remove("checked");
		}
		console.log(clicked);
		const chosen = e.target;
		chosen.classList.add("checked");
		result = e.target.innerText;
	});
});

submitBtn.addEventListener("click", () => {
	if (result) {
		rateResult.innerText = result;
		thanksCard.classList.remove("hidden");
		ratingCard.classList.add("hidden");
	} else {
		alert("Please choose a rating for our service before submiting");
	}
});
