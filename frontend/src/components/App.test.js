import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const mockMovies = [
  { _id: 1, title: "Movie 1" },
  { _id: 2, title: "Movie 2" },
  { _id: 3, title: "Movie 3" },
];

const apiEndpoint = "http://localhost:3001/movies";

const server = setupServer(
  rest.get(apiEndpoint, (req, res, ctx) => {
    return res(ctx.json(mockMovies));
  })
);

describe("App component", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  test("renders the list of movies", async () => {
    render(<App />);

    await waitFor(() => screen.getAllByRole("listitem"));

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toEqual(mockMovies.length);
  });

  test("displays an error if movies cannot be fetched", async () => {
    server.use(rest.get(apiEndpoint, (req, res, ctx) => res(ctx.status(500))));

    render(<App />);
    await waitFor(() => screen.getByRole("alert"));

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
