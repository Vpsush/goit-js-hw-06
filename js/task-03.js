const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryItems = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 300 height = auto></li>`;
const galleryList = images.reduce((acc, item) => acc + galleryItems(item), []);
const imgList = document.querySelector(".gallery");
imgList.style.display = "flex";
imgList.style.flexDirection = "column";
imgList.style.gap = "72px";
// imgList.style.list-style = "none";
imgList.insertAdjacentHTML("beforeBegin", galleryList);
console.log(galleryList);
