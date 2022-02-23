const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
})