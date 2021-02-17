import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const movies = [
  { _id: 1, title: "Movie 1" },
  { _id: 2, title: "Movie 2" },
  { _id: 3, title: "Movie 3" },
];

const newMovie = { _id: 4, title: "New Movie" };

const apiEndpoint = "http://localhost:3001/movies";

const server = setupServer(
  rest.get(apiEndpoint, (req, res, ctx) => res(ctx.json(movies))),
  rest.post(apiEndpoint, (req, res, ctx) => res(ctx.json(newMovie)))
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("App component", () => {
  test("renders the list of movies", async () => {
    render(<App />);

    await waitFor(listItems);

    expect(listItems().length).toEqual(movies.length);
  });

  test("displays an error if movies cannot be fetched", async () => {
    server.use(rest.get(apiEndpoint, (req, res, ctx) => res(ctx.status(500))));

    render(<App />);
    await waitFor(error);

    expect(error()).toBeInTheDocument();
  });

  test("clears the input field when a new movie is added", async () => {
    await setMovieTitle();

    submitForm();

    expect(inputField()).toHaveValue("");
  });

  test("adds the new movie to the list when form submitted", async () => {
    await setMovieTitle();

    submitForm();

    expect(listItems().length).toEqual(movies.length + 1);
  });

  test("removes the new movie from the list if it cannot be saved", async () => {
    server.use(rest.post(apiEndpoint, (req, res, ctx) => res(ctx.status(500))));
    await setMovieTitle();

    submitForm();
    await waitForElementToBeRemoved(() => screen.queryByText(newMovie.title));

    expect(listItems().length).toEqual(movies.length);
  });
});

const setMovieTitle = async () => {
  render(<App />);
  await waitFor(listItems);

  fireEvent.change(inputField(), {
    target: { value: newMovie.title },
  });
};

const submitForm = () => {
  fireEvent.submit(inputField());
};

// Query functions
const inputField = () => screen.getByLabelText("New Movie");
const listItems = () => screen.getAllByRole("listitem");
const error = () => screen.getByRole("alert");
