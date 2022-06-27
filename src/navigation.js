function goHome() {
  location.hash = "#home";
}

optionNavbar1.addEventListener("click", () => {
  location.hash = "#home";
});

searchFormButton.addEventListener("click", () => {
  location.hash = "#search=" + searchFormInput.value;
});

arrowHeaderBtn.addEventListener("click", () => {
  history.back();
});

trendingPreviewBtn.addEventListener("click", () => {
  location.hash = "#trends";
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailPage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function homePage() {
  headerSection.style.background = "";
  headerSection.classList.remove("header-container--long");

  headerSection.classList.remove("inactive");
  arrowHeaderBtn.classList.remove("arrow-header-btn");
  arrowHeaderBtn.classList.add("inactive");
  headerTitle.classList.remove("inactive");
  headerTitleCategoryView.classList.add("inactive");
  headerFormContainer.classList.remove("inactive");
  searchFormInput.classList.remove("inactive");
  searchFormButton.classList.remove("inactive");
  sectionTrendingContainer.classList.remove("inactive");
  sectionCategoriesContainer.classList.remove("inactive");
  sectionGenericListContainer.classList.add("inactive");
  sectionGenericListContainer.classList.remove("genericList-container");
  sectionMovieDetailContainer.classList.add("inactive");
  sectionFooter.classList.remove("inactive");

  getMoviesTrendingScroll();
  getCategoriesMoviesScroll();
}

function categoriesPage() {
  headerSection.classList.remove("inactive");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowHeaderBtn.classList.remove("inactive");
  arrowHeaderBtn.classList.add("arrow-header-btn");
  headerTitle.classList.add("inactive");
  headerFormContainer.classList.remove("inactive");
  searchFormInput.classList.remove("inactive");
  searchFormButton.classList.remove("inactive");
  sectionTrendingContainer.classList.add("inactive");
  sectionCategoriesContainer.classList.add("inactive");
  sectionGenericListContainer.classList.remove("inactive");
  sectionGenericListContainer.classList.add("genericList-container");
  sectionMovieDetailContainer.classList.add("inactive");
  headerTitleCategoryView.classList.remove("inactive");

  const [_, categorie] = location.hash.split("=");
  const [categorieID, categorieName] = categorie.split("-");

  headerTitleCategoryView.innerHTML = categorieName;

  getMoviesByCategory(categorieID);
}

function movieDetailPage() {
  headerSection.classList.add("header-container--long");
  arrowHeaderBtn.classList.remove("inactive");
  arrowHeaderBtn.classList.add("arrow-header-btn");
  headerTitle.classList.add("inactive");
  headerTitleCategoryView.classList.add("inactive");
  headerFormContainer.classList.add("inactive");
  searchFormInput.classList.add("inactive");
  searchFormButton.classList.add("inactive");

  sectionTrendingContainer.classList.add("inactive");
  sectionCategoriesContainer.classList.add("inactive");
  sectionGenericListContainer.classList.add("inactive");
  sectionGenericListContainer.classList.remove("genericList-container");
  sectionMovieDetailContainer.classList.remove("inactive");

  const [_, movieId] = location.hash.split("=");
  getMovieById(movieId);
}

function searchPage() {
  headerSection.classList.remove("inactive");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";

  arrowHeaderBtn.classList.remove("inactive");
  arrowHeaderBtn.classList.add("arrow-header-btn");
  headerTitle.classList.add("inactive");
  headerTitleCategoryView.classList.add("inactive");
  sectionTrendingContainer.classList.add("inactive");
  sectionCategoriesContainer.classList.add("inactive");
  sectionGenericListContainer.classList.remove("inactive");
  sectionGenericListContainer.classList.add("genericList-container");
  sectionMovieDetailContainer.classList.add("inactive");

  const [_, query] = location.hash.split("=");
  getMoviesBySearch(query);
}

function trendsPage() {
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  headerSection.classList.remove("inactive");
  headerTitle.classList.add("inactive");

  arrowHeaderBtn.classList.remove("inactive");
  arrowHeaderBtn.classList.add("arrow-header-btn");
  sectionTrendingContainer.classList.add("inactive");
  sectionCategoriesContainer.classList.add("inactive");
  sectionGenericListContainer.classList.remove("inactive");
  sectionGenericListContainer.classList.add("genericList-container");

  sectionMovieDetailContainer.classList.add("inactive");

  headerTitleCategoryView.innerHTML = "Tendencias";
  headerTitleCategoryView.classList.remove("inactive");
  getMoviesLongList();
}
