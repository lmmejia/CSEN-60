// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions

/**
 * allows you to search 
 */
function initializeSearch(newParentElement) {
  console.log("InitiliazeSearch");
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}

/**
 * will show all articles that have the tag you are looking for, and hides ones without the tag
 * if there are no tags, it will remove hidden tag from all the other articles to show them all again
 */

function hideArticles() {
  console.log("hideArticles");
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }

  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here
  for (const article of document.querySelectorAll("article")) {
    if (!articlesWithTags.includes(article)) {
      article.classList.add("hidden");
    }
    else {
      article.classList.remove("hidden");
    }
  }
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */
function createTag(text) {
  console.log("CreateTag");
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  const button = document.createElement("button");
  button.classList.add("tag");
  button.textContent = text;

/**
 * removes button and checks the index of the tag
 * if the tag exists (!=-1) then it removes it from the array 
 * calls hideArticles
 */
  function remove() {
    console.log("remove");
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener("click", remove)
  return button;
}

/**
 * converts your search to lowercase letters for simplicity
 * searches through array of articles and shows the articles that match your search
 */
function findArticlesWithTag(phrase) {
  console.log("findArticlesWithTag");
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}

/**
 * creates tag based off your input
 */
function addSearchTerm(text) {
  console.log("addSearchTerm");
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers
/**
 * when you press the enter key, sends your text to addsearchterm and resets input value
 */
function onSearch(event) {
  console.log("onSearch");
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if(event.key == "Enter") {
    addSearchTerm(input.value);
    input.value = " ";
  }
}

// Main function
/**
 * allows you to search when you press a key, activates onSearch
 */
function main() {
  console.log("main");
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event:
 * Pressing Enter:  main -> InitliazeSearch -> onSearch -> addSearchTerm -> CreateTag -> hdieArticles -> findArticlesWithTag
 * Clicking to Remove a Tag: main -> InitliazeSearch -> onSearch -> addSearchTerm -> CreateTag -> hdieArticles -> findArticlesWithTag -> remove -> hideArticles
 * Loading the Page:  main -> InitlializeSearch -> addSearchTerm -> CreateTag -> hideArticles ->findArticlesWithTag
 */