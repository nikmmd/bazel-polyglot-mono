import { render, screen } from "@testing-library/svelte";
import App from "./App.svelte";
import {describe, test, expect } from 'vitest';


describe("App", () => {
  test("shows the vite", () => {
    render(App);
    expect(screen.getByText("Vite + Svelte")).toBeTruthy();
  });
});