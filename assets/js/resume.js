const skillDictDivList = Array.from(document.getElementsByClassName('skillDict'));

//console.log(skillDictDivList);

skillDictDivList.forEach(dict => {
    let dictItems = Array.from(dict.getElementsByTagName('li'));
    //console.log(dictItems);
    dictItems.forEach(item => {
        let itemLevel = Array.from(item.getElementsByClassName('skillLevel'))[0];
        //console.log(itemLevel.innerHTML);
        item.style.width = (100 * itemLevel.innerHTML / 5) + "%";
    });
});