const $ = (id) => document.querySelector(id);

//sections
const headerSection = $("#header");
const sectionTrendingContainer = $("#section-trending-container");
const sectionCategoriesContainer = $("#section-categories-container");
const sectionGenericListContainer = $("#section-genericList-container");
const sectionMovieDetailContainer = $("#section-movieDetail-container");
const sectionFooter = $("#footer");

//containers
const headerNavbar = $(".header-navbar");
const headerFormContainer = $(".header-form-container");
const trendingPreviewHeader = $(".trendingPreview-header");
const trendingPreviewScroll = $(".trending-preview-scroll");
const categoriesPreviewScroll = $(".categories-preview-scroll");
const categoriesList = $(".categories-list");
const relatedMoviesContainer = $(".relatedMovies-container");
const relatedMoviesScrollContainer = $(".relatedMovies-scrollContainer");

//elements
const arrowHeaderBtn = $(".arrow-header-btn");
const headerTitle = $(".header-title");
const headerTitleCategoryView = $(".header-title--categoryView");
const movieDetailTitle = $(".movieDetail-title");
const movieDetailScore = $(".movieDetail-score");
const movieDetailDescription = $(".movieDetail-description");
const trendingPreviewBtn = $(".trendingPreview-btn");
const searchFormInput = $("#search-form-input");
const searchFormButton = $("#search-form-button");
const optionNavbar1 = $(".option-navbar-1");
