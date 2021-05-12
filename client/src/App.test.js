import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing MN-Bus App", () => {
  test("Renders app Home page component", () => {
    render(<App />);
    //screen.debug();
    const headerElement = screen.getByText(/Welcome to MN Bus!/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("Fetch all routes from API in Home page component", async () => {
    render(<App />);
    expect(screen.queryByText(/METRO Blue Line/)).toBeNull();
    expect(await screen.findByText(/METRO Blue Line/)).toBeInTheDocument();
  });
});
