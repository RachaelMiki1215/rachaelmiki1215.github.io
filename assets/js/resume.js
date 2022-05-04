const skillDictDivList = Array.from(document.getElementsByClassName('skillDict'));

skillDictDivList.forEach(dict => {
    let dictItems = Array.from(dict.getElementsByTagName('li'));
    //console.log(dictItems);
    dictItems.forEach(item => {
        let itemLevel = Array.from(item.getElementsByClassName('skillLevel'))[0];
        //console.log(itemLevel.innerHTML);
        item.style.width = (100 * itemLevel.innerHTML / 5) + "%";
    });
});

const collapsibleList = Array.from(document.getElementsByClassName("collapseTitle"));

collapsibleList.forEach(col => {
    col.addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (this.classList.contains("collapsed")) {
            content.style.display = "block";
            this.classList.remove("collapsed");
        }
        else {
            content.style.display = "none";
            this.classList.toggle("collapsed");
        }
    })
});