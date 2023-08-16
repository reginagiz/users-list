import { render, screen, waitFor } from "@testing-library/react";
import ItemsPerPage from "./ItemsPerPage";
import userEvent from "@testing-library/user-event";

const setItemsPerPage = jest.fn();

describe("ItemsPerPage component", () => {
  beforeEach(() => {
    render(<ItemsPerPage itemsPerPage={5} setItemsPerPage={setItemsPerPage} />);
  });
  afterEach(() => {
    return setItemsPerPage.mockClear();
  });

  it("should render ItemsPerPage component correctly", () => {
    const radioButtonFive = screen.getByLabelText(5);
    const radioButtonTen = screen.getByLabelText(10);
    const radioButtonFifteen = screen.getByLabelText(15);
    const headerText = screen.getByText(/Number of users per page/i);

    expect(radioButtonFive).toBeInTheDocument();
    expect(radioButtonTen).toBeInTheDocument();
    expect(radioButtonFifteen).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });

  it("should call setSelectedOption", async () => {
    const radioButtonFive = screen.getByLabelText(5);
    const radioButtonTen = screen.getByLabelText(10);
    const radioButtonFifteen = screen.getByLabelText(15);

    expect(radioButtonTen).not.toBeChecked();
    expect(radioButtonFifteen).not.toBeChecked();
    expect(radioButtonFive).toBeChecked();

    userEvent.click(radioButtonTen);
    await waitFor(() => {
      expect(setItemsPerPage).toHaveBeenCalledWith(10);
    });

    userEvent.click(radioButtonFifteen);
    await waitFor(() => {
      expect(setItemsPerPage).toHaveBeenCalledWith(15);
    });
  });
});
