// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль 
// текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


const category = document.querySelectorAll(".item");

console.log(`Number of categories: ${category.length}`)


category.forEach(cat => {
    const title = cat.querySelector("h2"); 
    console.log(`Category: ${title.textContent}`);

    const items = cat.querySelectorAll("li"); 
    console.log(`Elements: ${items.length}`);

    // items.forEach(item => {
    //     console.log(` - ${item.textContent}`);
    // });
});

