const countCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategory.length}`);

const categories = [...countCategory]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categories);
