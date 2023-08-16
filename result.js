document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the variable from local storage
    const transferredUserChoice = localStorage.getItem('userChoice');
    const transferredUserChoice1 = localStorage.getItem('userChoice1');
    const transferredUserChoice2 = localStorage.getItem('userChoice2');

    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");

    let name1 = document.getElementById("name1");
    let name2 = document.getElementById("name2");
    let name3 = document.getElementById("name3");
    let name4 = document.getElementById("name4");

    // Now you can use the transferredUserChoice variable in this file
    console.log("result is " + transferredUserChoice);
    console.log("result is " + transferredUserChoice1);
    console.log("result is " + transferredUserChoice2);

    if (transferredUserChoice == "gain") {
        console.log("Gain");
        if (transferredUserChoice1 == "vegan"){
            console.log("vegan")
            if (transferredUserChoice2 == "Yes"){
                console.log("Gluten Free")
                img1.src = "food/tofu.jpg"
                name1.innerHTML = "Tofu"
                img2.src = "food/beans.jpg"
                name2.innerHTML = "Beans"
                img3.src = "food/fruit.jpg"
                name3.innerHTML = "Fruit"
                img4.src = "food/potato.jpg"
                name4.innerHTML = "Potatoes"
            }
            if (transferredUserChoice2 == "No"){
                console.log(" Not Gluten Free")
                img1.src = "food/quinoa.jpg"
                name1.innerHTML = "Quinoa"
                img2.src = "food/chai_seed.jpg"
                name2.innerHTML = "Chai Seeds"
                img3.src = "food/tofu.jpg"
                name3.innerHTML = "Tofu"
                img4.src = "food/pistachios.jpg"
                name4.innerHTML = "Pistachios"
            }
        }
        else if (transferredUserChoice1 == 'notVegan') {
            console.log("not vegan")
            if (transferredUserChoice2 == "Yes"){
                console.log("Gluten Free")
                img1.src = "food/rice.jpg"
                name1.innerHTML = "Rice"
                img2.src = "food/chai_seed.jpg"
                name2.innerHTML = "Chai Seeds"
                img3.src = "food/tofu.jpg"
                name3.innerHTML = "Tofu"
                img4.src = "food/fish.jpg"
                name4.innerHTML = "Fish"
            }
            if (transferredUserChoice2 == "No"){
                console.log(" Not Gluten Free")
                img1.src = "food/fish.jpg"
                name1.innerHTML = "Fish"
                img2.src = "food/eggs.jpg"
                name2.innerHTML = "Eggs"
                img3.src = "food/beans.jpg"
                name3.innerHTML = "Beans"
                img4.src = "food/rice.jpg"
                name4.innerHTML = "Rice"
            }
        }
    }

    if (transferredUserChoice == 'lose') {
        console.log("Loose")
        if (transferredUserChoice1 == "vegan"){
            console.log("vegan")
            if (transferredUserChoice2 == "Yes"){
                console.log("Gluten Free")
                img1.src = "food/quinoa.jpg"
                name1.innerHTML = "Quinoa"
                img2.src = "food/brown_rice.jpg"
                name2.innerHTML = "Brown Rice"
                img3.src = "food/buckwheat.jpg"
                name3.innerHTML = "Buckwheat"
                img4.src = "food/amaranth.jpg"
                name4.innerHTML = "Amaranth"
            }
            if (transferredUserChoice2 == "No"){
                console.log(" Not Gluten Free")
                img1.src = "food/sweet_potato.jpg"
                name1.innerHTML = "Sweet Potatoes"
                img2.src = "food/porridge.jpg"
                name2.innerHTML = "Porridge"
                img3.src = "food/beans.jpg"
                name3.innerHTML = "Beans"
                img4.src = "food/fruit.jpg"
                name4.innerHTML = "Fruit"
            }
        }
        else if (transferredUserChoice1 == 'notVegan') {
            console.log("not vegan")
            if (transferredUserChoice2 == "Yes"){
                console.log("Gluten Free")
                img1.src = "food/rice.jpg"
                name1.innerHTML = "Rice"
                img2.src = "food/oats.jpg"
                name2.innerHTML = "Oats"
                img3.src = "food/eggs.jpg"
                name3.innerHTML = "Eggs"
                img4.src = "food/fish.jpg"
                name4.innerHTML = "Fish"
            }
            if (transferredUserChoice2 == "No"){
                console.log(" Not Gluten Free")
                img1.src = "food/eggs.jpg"
                name1.innerHTML = "Eggs"
                img2.src = "food/avocado.jpg"
                name2.innerHTML = "Avocado"
                img3.src = "food/nuts.jpg"
                name3.innerHTML = "Nuts"
                img4.src = "food/salmon.jpg"
                name4.innerHTML = "Salmon"
            }
           
        }
    }
});