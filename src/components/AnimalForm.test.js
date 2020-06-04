import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("AnimalForm adds new animal to the list", () => {
  render(<AnimalForm />);

  // query for all inputs
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // events
  fireEvent.change(speciesInput, { target: { value: "Monkey" } });
  fireEvent.change(ageInput, { target: { value: 15 } });
  fireEvent.change(notesInput, { target: { value: "crazy" } });

  // click submit
  const submitBtn = screen.getByText(/submit!/i);
  fireEvent.click(submitBtn);

  const newAnimal = screen.getByText(/monkey/i);
  expect(newAnimal).toBeInTheDocument();
});

// type into all 3 inputs
// click submit button
// assert new animal is in list
