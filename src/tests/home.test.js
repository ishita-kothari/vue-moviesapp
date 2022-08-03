import { render, screen } from "@testing-library/vue";
import App from "../App.vue";
import MovieView from "../views/MovieView.vue";

test("renders app component", () => {
  render(<App />);
  const linkElement = screen.getByText("Movie Land");
  expect(linkElement).toBeInTheDocument();
});

test("initial state for search input", () => {
  render(<MovieView />);
  const searchInput = screen.getByTestId("test-search-input");
  const searchButton = screen.getByTestId("test-search-button");
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(searchInput.value).toBe("");
});

test("search for a movie", () => {
  render(<MovieView />);

  const list = [
    {
      id: 51609,
      name: "Hello!",
      type: "Scripted",
      language: "Bengali",
      genres: ["Drama", "Thriller"],
    },
    {
      id: 192,
      url: "https://www.tvmaze.com/shows/192/hello-ladies",
      name: "Hello Ladies",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
    },
    {
      id: 1,
      url: "https://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Science-Fiction", "Thriller"],
    },
  ];
  const searchInput = screen.getByTestId("test-search-input");
  const searchButton = screen.getByTestId("test-search-button");

  fireEvent.change(searchInput, {
    target: { value: "Hello" },
  });
  fireEvent.click(searchButton);
  expect(list).toEqual([
    {
      id: 51609,
      name: "Hello!",
      type: "Scripted",
      language: "Bengali",
      genres: ["Drama", "Thriller"],
    },
    {
      id: 192,
      url: "https://www.tvmaze.com/shows/192/hello-ladies",
      name: "Hello Ladies",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
    },
  ]);
});
