import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
import Cita from "./Cita";
import { render } from "../../test-utils";

const server = setupServer(
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
    const author = req.url.searchParams.get("character") || "random";
    const data = { quote: "test quote", character: author };
    return res(ctx.json([data]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the component with the input and button", () => {
  render(<Cita />);
  const input = screen.getByLabelText("Author Cita");
  const button = screen.getByLabelText("Obtener cita aleatoria");
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("shows a random quote when the button is clicked without an input", async () => {
  render(<Cita />);
  const button = screen.getByLabelText("Obtener cita aleatoria");
  fireEvent.click(button);
  const quote = await screen.findByText(/test quote/i);
  expect(quote).toBeInTheDocument();
});


test("shows a quote from the author input when the button is clicked", async () => {
  const author = "test author";
  render(<Cita />);
  const input = screen.getByLabelText(/author cita/i);
  fireEvent.change(input, { target: { value: author } });
  fireEvent.click(screen.getByText(/Obtener Cita/i));
  await screen.findByText(author);
});

test("clears the quote and author when the button Borrar is clicked", async () => {
  render(<Cita />);
  const input = screen.getByLabelText("Author Cita");
  const button = screen.getByLabelText("Obtener cita aleatoria");
  fireEvent.change(input, { target: { value: "test author" } });
  fireEvent.click(button);
  const quote = await screen.findByText(/test quote/i);
  const author = await screen.findByText(/test author/i);
  expect(quote).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  const clearButton = screen.getByLabelText("Borrar");
  fireEvent.click(clearButton);
  const emptyQuote = screen.queryByText(/test quote/i);
  const emptyAuthor = screen.queryByText(/test author/i);
  expect(emptyQuote).not.toBeInTheDocument();
  expect(emptyAuthor).not.toBeInTheDocument();
});