import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import userEvent from "@testing-library/user-event";

const setLogin = jest.fn();
const setInputValue = jest.fn();
const setCurrentPage = jest.fn();

describe("Search component", () => {
  beforeEach(() => {
    render(
      <SearchInput
        inputValue={""}
        setLogin={setLogin}
        setInputValue={setInputValue}
        setCurrentPage={setCurrentPage}
      />
    );
  });
  afterEach(() => {
    return setLogin.mockClear();
  });

  it("should render Search component correctly", () => {
    const buttonElement = screen.getByRole("button");
    const inputElement = screen.getByRole("textbox");
    const placeholderText = screen.queryByPlaceholderText(/Search.../i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
  });

  it("should call setLogin on button click", async () => {
    const buttonElement = screen.getByRole("button");

    await setLogin();
    userEvent.click(buttonElement);
    expect(setLogin).toHaveBeenCalled();
  });
});
