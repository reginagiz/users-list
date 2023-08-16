import { render, screen, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

const setCurrentPage = jest.fn();
const displayArray = [1, 2, 3, 4, 5];

describe("Pagination component", () => {
  beforeEach(() => {
    render(
      <Pagination
        totalCount={1}
        itemsPerPage={5}
        setCurrentPage={setCurrentPage}
      />
    );
  });
  afterEach(() => {
    return setCurrentPage.mockClear();
  });

  it("should render Pagination component correctly", () => {
    const buttonElementPrev = screen.getByRole("button", { name: /Prev/i });
    const buttonElementNext = screen.getByRole("button", { name: /Next/i });

    expect(buttonElementPrev).toBeInTheDocument();
    expect(buttonElementNext).toBeInTheDocument();
  });

  it("should call on button click", async () => {
    const buttonElementPrev = screen.getByRole("button", { name: /Prev/i });
    const buttonElementNext = screen.getByRole("button", { name: /Next/i });

    userEvent.click(buttonElementPrev);
    userEvent.click(buttonElementNext);

    expect(buttonElementPrev).toHaveBeenCalled;
    expect(buttonElementNext).toHaveBeenCalled;
  });

  it("should render and interact with page buttons", () => {
    const pageButtons = screen.getAllByRole("button");

    pageButtons.forEach((button, index) => {
      userEvent.click(button);
      waitFor(() => {
        expect(setCurrentPage).toHaveBeenCalledWith(displayArray[index]);
      });
    });
  });
});
