const listArray = [
	{
		img: "url",
		text: "1",
	},
	{
		img: "url",
		text: "2",
	},
	{
		img: "url",
		text: "3",
	},
	{
		img: "url",
		text: "4",
	},
];

const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");

const dotsMenu = document.querySelector(".slider__bottom");
const sliderMenu = document.querySelector(".slider__top");

listArray.forEach((list, i) => {
	const sliderItem = document.createElement("div");
	const dotElement = document.createElement("span");

	sliderItem.classList.add("slider__item", `item-${i + 1}`);
	sliderItem.innerText = list.text;

	dotElement.innerText = ".";
	dotElement.className = `dotItem dotItem-${i + 1}`;

	sliderMenu.append(sliderItem);

	dotsMenu.append(dotElement);
});

const dotElements = document.querySelectorAll(".dotItem");
const sliderItems = document.querySelectorAll(".slider__item");

sliderItems[0].classList.add("active");
dotElements[0].classList.add("selected");

const onClickLeft = () => {
	const itemSelected = document.querySelector(".active");
	const indexOfSelected = listArray.find((el) => {
		return el.text === itemSelected.innerText;
	});

	const realIndex = listArray.indexOf(indexOfSelected);

	if (realIndex) {
		sliderItems[realIndex - 1].classList.add("active");
		sliderItems[realIndex - 1].style.display = "block";
		dotElements[realIndex - 1].classList.add("selected");
		dotElements[realIndex].classList.remove("selected");
		itemSelected.classList.remove("active");
		itemSelected.style.display = "none";
	} else {
		sliderItems[sliderItems.length - 1].classList.add("active");
		sliderItems[sliderItems.length - 1].style.display = "block";
		sliderItems[realIndex].classList.remove("active");
		sliderItems[realIndex].style.display = "none";
		dotElements[realIndex].classList.remove("selected");
		dotElements[dotElements.length - 1].classList.add("selected");
	}
};

const onClickRight = () => {
	const itemSelected = document.querySelector(".active");
	const indexOfSelected = listArray.find((el) => {
		return el.text === itemSelected.innerText;
	});

	const realIndex = listArray.indexOf(indexOfSelected);

	if (realIndex < sliderItems.length - 1) {
		sliderItems[realIndex + 1].classList.add("active");
		sliderItems[realIndex + 1].style.display = "block";
		dotElements[realIndex + 1].classList.add("selected");
		dotElements[realIndex].classList.remove("selected");
		itemSelected.classList.remove("active");
		itemSelected.style.display = "none";
	} else {
		sliderItems[0].classList.add("active");
		sliderItems[0].style.display = "block";
		sliderItems[realIndex].classList.remove("active");
		sliderItems[realIndex].style.display = "none";
		dotElements[realIndex].classList.remove("selected");
		dotElements[0].classList.add("selected");
	}
};

buttonLeft.addEventListener("click", onClickLeft);
buttonRight.addEventListener("click", onClickRight);

const isActive = (e) => {
	const arr = Array.from(sliderMenu.children).filter((el) => {
		return el.nodeName === "DIV";
	});

	for (let i = 0; i < dotElements.length; i++) {
		dotElements[i].classList.remove("selected");
		sliderItems[i].classList.remove("active");

		sliderItems[i].style.display = "none";

		if (
			e.target.classList[1].split("-").at(-1) ===
			sliderItems[i].classList[1].split("-").at(-1)
		) {
			sliderItems[i].style.display = "block";
			dotElements[i].classList.add("selected");
			sliderItems[i].classList.add("active");
		}
	}
};

dotElements.forEach((element) => {
	element.addEventListener("click", isActive);
});
