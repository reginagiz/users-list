import { render, screen, waitFor } from "@testing-library/react";
import SortComponent from "./SortComponent";
import userEvent from "@testing-library/user-event";

const setSelectedOption = jest.fn();

describe("Sort component", () => {
  beforeEach(() => {
    render(
      <SortComponent
        selectedOption={"asc"}
        setSelectedOption={setSelectedOption}
      />
    );
  });
  afterEach(() => {
    return setSelectedOption.mockClear();
  });

  it("should render Sort component correctly", () => {
    const radioButtonAsc = screen.getByLabelText("ascending");
    const radioButtonDesc = screen.getByLabelText("descending");
    const headerText = screen.getByText(/Sort by number of repositories/i);

    expect(radioButtonAsc).toBeInTheDocument();
    expect(radioButtonDesc).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });

  it("should call setSelectedOption", async () => {
    const radioButtonAsc = screen.getByLabelText("ascending");
    const radioButtonDesc = screen.getByLabelText("descending");

    expect(radioButtonDesc).not.toBeChecked();
    expect(radioButtonAsc).toBeChecked();

    userEvent.click(radioButtonDesc);
    await waitFor(() => {
      expect(setSelectedOption).toHaveBeenCalledWith("desc");
    });
  });
});
