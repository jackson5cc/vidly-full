import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const mockMovies = [
  { _id: 1, title: "Movie 1" },
  { _id: 2, title: "Movie 2" },
  { _id: 3, title: "Movie 3" },
];

const server = setupServer(
  rest.get("http://localhost:3001/movies", (req, res, ctx) => {
    return res(ctx.json(mockMovies));
  })
);

describe("App component", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  test("renders the list of movies", async () => {
    render(<App />);

    await waitFor(() => screen.getAllByRole("listitem"));

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItems.length).toEqual(mockMovies.length);
  });
});
