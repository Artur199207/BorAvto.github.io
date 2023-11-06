let menu_select = document.querySelectorAll(".nav_top__select");
menu_select.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("nav_select_active");
    }
    el.onblur = () => {
        el.classList.remove("nav_select_active");
    }
})

let menu_account_select = document.querySelector(".nav_top__contact_account_settings");
menu_account_select.onclick = () => {
    menu_account_select.classList.toggle("menu_account_select_active");
}
menu_account_select.onblur = () => {
    menu_account_select.classList.remove("menu_account_select_active");
}

let main__title_filter = document.querySelector(".sec-main__title_filter_first > p");


main__title_filter.onclick = () => {
    main__title_filter.parentElement.classList.toggle("sec-main__title_filter_active");
}
main__title_filter.parentElement.onblur = (ev) => {

    main__title_filter.parentElement.classList.remove("sec-main__title_filter_active");
    main__title_filter.children[1].textContent = document.querySelector(".sec-main__title_filter_first_text-active").textContent

}
let main__title_filter_texts = document.querySelectorAll(".sec-main__title_filter_first>ul>li");
main__title_filter_texts.forEach((el) => {
    el.onclick = () => {
        document.querySelector(".sec-main__title_filter_first_text-active").classList.remove("sec-main__title_filter_first_text-active")
        el.classList.add("sec-main__title_filter_first_text-active");
    }
})



let main__title_filter_second = document.querySelector(".sec-main__title_filter_second > p");
main__title_filter_second.onclick = () => {
    main__title_filter_second.parentElement.classList.toggle("sec-main__title_filter_active");
}
main__title_filter_second.parentElement.onblur = () => {
    main__title_filter_second.parentElement.classList.remove("sec-main__title_filter_active");
    main__title_filter_second.children[1].textContent = document.querySelector(".sec-main__title_filter_second_text-active").textContent

}
let main__title_filter_second_texts = document.querySelectorAll(".sec-main__title_filter_second>ul>li");
main__title_filter_second_texts.forEach((el) => {
    el.onclick = () => {
        document.querySelector(".sec-main__title_filter_second_text-active").classList.remove("sec-main__title_filter_second_text-active")
        el.classList.add("sec-main__title_filter_second_text-active");
    }
})

let filter_drop = document.querySelectorAll(".sec-filter__filter_dropdown > p");
filter_drop.forEach((el) => {
    el.onclick = () => {
        el.parentElement.classList.toggle("sec-filter__filter_dropdown-active")
    }
    el.parentElement.onblur = (ev) => {
        console.log(ev.relatedTarget);
        if (ev.relatedTarget === null|| ev.relatedTarget.classList.contains("sec-main__title_filter") || ev.relatedTarget.classList.contains("sec-filter__filter_dropdown") || ev.relatedTarget.classList.contains("sec-main__title_filter")) {
            el.parentElement.classList.remove("sec-filter__filter_dropdown-active");
        }
    }
})

// Model
let filter_model = document.querySelectorAll(".sec-filter__filter_drop_model_second_cont > div > p");
filter_model.forEach((el) => {
    el.onclick = () => {
        el.parentElement.classList.toggle("sec-filter__filter_drop_second_model-active");
    }
})

let all_models = document.querySelectorAll(".sec-filter__filter_drop_model_second_cont span");
all_models.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("sec-filter__filter_active-mark");
    }
})

let drop_model = document.querySelectorAll(".sec-filter__filter_drop_model_second_cont > div span");

let mark_block = document.querySelector(".sec-filter__filter_drop_model_first");
let model_block = document.querySelector(".sec-filter__filter_drop_model_second");

let model_title = document.querySelector(".sec-filter__filter_drop_model_second h3");
let mark_back_but = document.querySelector(".sec-filter__filter_drop_model_second_back");
let all_marks = document.querySelectorAll(".sec-filter__filter_drop_model_first span");

let modal_input = document.querySelector(".sec-filter__filter_drop_model>input")

modal_input.onblur = (ev)=>{
    if(ev.relatedTarget === null || ev.relatedTarget.classList.contains("sec-main__title_filter") || ev.relatedTarget.classList.contains("sec-filter__filter_dropdown") && !ev.relatedTarget.classList.contains("sec-filter__filter_dropdown-active") ){
        document.getElementsByClassName("sec-filter__filter_dropdown-active")[0].classList.remove("sec-filter__filter_dropdown-active");
    }
}

mark_back_but.onclick = () => {
    mark_block.style.display = "flex";
    model_block.style.display = "none";
}

all_marks.forEach((el) => {
    el.onclick = () => {
        mark_block.style.display = "none";
        model_block.style.display = "flex";
        model_title.textContent = el.textContent
    }
})


// Carcase

let carcases = document.querySelectorAll(".sec-filter__filter_carcase_item");

carcases.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("sec-filter__filter_carcase_item-active")
    }
})

// Transmission

let transmissions = document.querySelectorAll(".sec-filter__filter_drop_transmission > p");

transmissions.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("sec-filter__filter_transmission-active")
    }
})


// Engine

let engines = document.querySelectorAll(".sec-filter__filter_drop_engine p");

engines.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("sec-filter__filter_engine-active")
    }
})


// Drive Unit

let driveUnits = document.querySelectorAll(".sec-filter__filter_drop_driveUnit > p");

driveUnits.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("sec-filter__filter_driveUnit-active")
    }
})


// Color

let colors = document.querySelectorAll(".sec-filter__filter_drop_color_item");

colors.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("sec-filter__filter_color-active")
    }
})

// Capacity

let capacityes = document.querySelectorAll(".sec-filter__filter_drop_capacity p");

capacityes.forEach((el) => {
    el.onclick = () => {
        el.classList.toggle("sec-filter__filter_capacity-active")
    }
})


// Date 

let rangeMin = 2;
const range = document.querySelectorAll(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input, index) => {
    input.onblur = (ev)=>{
        if(ev.relatedTarget === null|| ev.relatedTarget.classList.contains("sec-main__title_filter") || ev.relatedTarget.classList.contains("sec-filter__filter_dropdown") && !ev.relatedTarget.classList.contains("sec-filter__filter_dropdown-active") ){
            document.getElementsByClassName("sec-filter__filter_dropdown-active")[0].classList.remove("sec-filter__filter_dropdown-active");
        }
    }
    input.addEventListener("input", (e) => {
        if (index % 2) {
            let minRange = parseInt(rangeInput[index - 1].value);
            let maxRange = parseInt(rangeInput[index].value);
            if (maxRange - minRange < rangeMin) {
                if (e.target.className === "min") {
                    rangeInput[index - 1].value = maxRange - rangeMin;
                } else {
                    rangeInput[index].value = minRange + rangeMin;
                }
            } else {
                rangePrice[index - 1].value = minRange;
                rangePrice[index].value = maxRange;

                range[(index - 1) / 2].style.left = (minRange - rangeInput[index - 1].min) / (rangeInput[index - 1].max - rangeInput[index - 1].min) * 100 + "%";
                range[(index - 1) / 2].style.right = 100 - (maxRange - rangeInput[index - 1].min) / (rangeInput[index].max - rangeInput[index].min) * 100 + "%";
            }
        } else {

            let minRange = parseInt(rangeInput[index].value);
            let maxRange = parseInt(rangeInput[index + 1].value);
            if (maxRange - minRange < rangeMin) {
                if (e.target.className === "min") {
                    rangeInput[index].value = maxRange - rangeMin;
                } else {
                    rangeInput[index + 1].value = minRange + rangeMin;
                }
            } else {
                rangePrice[index].value = minRange;
                rangePrice[index + 1].value = maxRange;

                range[index / 2].style.left = (minRange - rangeInput[index].min) / (rangeInput[index].max - rangeInput[index].min) * 100 + "%";
                range[index / 2].style.right = 100 - (maxRange - rangeInput[index].min) / (rangeInput[index + 1].max - rangeInput[index + 1].min) * 100 + "%";
            }
        }

    });
});
rangePrice.forEach((input, index) => {
    input.onblur = (ev)=>{
        if(ev.relatedTarget === null|| ev.relatedTarget.classList.contains("sec-main__title_filter") || ev.relatedTarget.classList.contains("sec-filter__filter_dropdown") && !ev.relatedTarget.classList.contains("sec-filter__filter_dropdown-active") ){
            console.log(document.getElementsByClassName("sec-filter__filter_dropdown-active")[0]);
            document.getElementsByClassName("sec-filter__filter_dropdown-active")[0].classList.remove("sec-filter__filter_dropdown-active");
        }
    }
    input.addEventListener("input", (e) => {
        if (index % 2) {
            let minPrice = rangePrice[index - 1].value;
            let maxPrice = rangePrice[index].value;
            if (maxPrice - minPrice >= rangeMin && +maxPrice <= +rangeInput[index].max && +minPrice > +rangeInput[index].min) {
                if (e.target.className === "min") {

                    rangeInput[index - 1].value = minPrice;
                    range[(index - 1) / 2].style.left = (minPrice - rangeInput[index - 1].min) / (rangeInput[index - 1].max - rangeInput[index - 1].min) * 100 + "%";

                    //   range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                } else {
                    rangeInput[index].value = maxPrice;
                    range[(index - 1) / 2].style.right = 100 - (maxPrice - rangeInput[index - 1].min) / (rangeInput[index].max - rangeInput[index].min) * 100 + "%";
                }
            }
        } else {
            let minPrice = rangePrice[index].value;
            let maxPrice = rangePrice[index + 1].value;
            if (maxPrice - minPrice >= rangeMin && +maxPrice <= +rangeInput[index + 1].max && +minPrice > +rangeInput[index + 1].min) {
                if (e.target.className === "min") {

                    rangeInput[index].value = minPrice;
                    range[index / 2].style.left = (minPrice - rangeInput[index].min) / (rangeInput[index].max - rangeInput[index].min) * 100 + "%";

                    //   range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                } else {
                    rangeInput[index + 1].value = maxPrice;
                    range[index / 2].style.right = 100 - (maxPrice - rangeInput[index].min) / (rangeInput[index + 1].max - rangeInput[index + 1].min) * 100 + "%";
                }
            }
        }
    });
});


// Setting

let settings = document.querySelectorAll(".sec-filter__filter_drop_setting_item > div")

let settings_texts = document.querySelectorAll(".sec-filter__filter_drop_setting_item > ul");
let settings_texts_close = document.querySelectorAll(".sec-filter__filter_drop_setting_item > div > p > img");
let counts = [];
counts.length = settings_texts.length
counts.fill(0)

settings.forEach((el, ind) => {
    el.onclick = () => {
        el.parentElement.classList.toggle("sec-filter__filter_drop_setting_item-active")
    }

    el.parentElement.onblur = (ev) => {
        console.log(ev.relatedTarget);
        if (ev.relatedTarget !== null && (ev.relatedTarget.classList.contains("sec-filter__filter_dropdown-active") || ev.relatedTarget.classList.contains("sec-filter__filter_drop_setting_item"))) {
            el.parentElement.classList.remove("sec-filter__filter_drop_setting_item-active")
        } else if (ev.relatedTarget === null|| ev.relatedTarget.classList.contains("sec-main__title_filter") || ev.relatedTarget.classList.contains("sec-filter__filter_dropdown")) {
            el.parentElement.classList.remove("sec-filter__filter_drop_setting_item-active")
            document.querySelector(".sec-filter__filter_drop_setting").parentElement.classList.remove("sec-filter__filter_dropdown-active")
        }
    }


    for (let index = 0; index < settings_texts[ind].children.length; index++) {
        settings_texts[ind].children[index].onclick = (ev) => {
            if (settings_texts[ind].children[index].classList.contains("sec-filter__filter_drop_setting_text-active")) {
                settings_texts[ind].children[index].classList.remove("sec-filter__filter_drop_setting_text-active")
                counts[ind]--
            } else {
                settings_texts[ind].children[index].classList.add("sec-filter__filter_drop_setting_text-active")
                counts[ind]++
            }
            if (counts[ind] !== 0) {
                document.querySelectorAll(".sec-filter__filter_drop_setting_item code")[ind].textContent = counts[ind];
                document.querySelectorAll(".sec-filter__filter_drop_setting_item code")[ind].style.display = "flex"
                document.querySelectorAll(" .sec-filter__filter_drop_setting_item > div > p > img")[ind].style.display = "block";
            } else {
                document.querySelectorAll(".sec-filter__filter_drop_setting_item code")[ind].textContent = "";
                document.querySelectorAll(".sec-filter__filter_drop_setting_item code")[ind].style.display = "none"
                settings_texts_close[ind].style.display = "none";
            }
        }
    }
})

settings_texts_close.forEach((el, ind) => {
    el.onclick = () => {
        el.style.display = "none";
        settings_texts[ind].querySelectorAll(".sec-filter__filter_drop_setting_text-active").forEach((elem) => {
            elem.classList.remove("sec-filter__filter_drop_setting_text-active");
            counts[ind] = 0;
            document.querySelectorAll(".sec-filter__filter_drop_setting_item code")[ind].style.display = "none"
            document.querySelectorAll(".sec-filter__filter_drop_setting_item code")[ind].textContent = "";

        })
    }
})
