$(".carousel").carousel({
  interval: 2000,
});

let control_box = document.querySelector(".control-box");
let geer = document.querySelector(".control-box i");

geer.onclick = function () {
  control_box.classList.toggle("show");
};

let colors = document.querySelectorAll(".control-box .box ul li");

colors.forEach((value) => {
  value.style.backgroundColor = value.getAttribute("color");
});

colors.forEach((ele) => {
  ele.onclick = function () {
    document.documentElement.style.setProperty(
      "--main_color",
      ele.getAttribute("color")
    );
  };
});

let scroll_top = document.querySelector(".scroll-top");

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    scroll_top.classList.add("show");
  } else {
    scroll_top.classList.remove("show");
  }
};

scroll_top.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
