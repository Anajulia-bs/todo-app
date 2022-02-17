/* eslint-disable no-undef */
/// <reference types="cypress" />

it("add, delete, and update todos", () => {
  cy.visit("http://localhost:3001/");
  cy.get("[data-testid=todo-input]").click();
  cy.get("[data-testid=todo-input]").type("Clean the house");
  cy.get("[data-testid=add-todo-btn]").click();
  cy.get("[data-testid=todo-input]").click();
  cy.get("[data-testid=todo-input]").type("Study jest");
  cy.get("[data-testid=add-todo-btn]").click();
  cy.get("[data-testid=todo-input]").click();
  cy.get("[data-testid=todo-input]").type("Study Clean Arch");
  cy.get("[data-testid=add-todo-btn]").click();
  cy.get("[data-testid='status-Clean the house']").click();
  cy.get("[data-testid='status-Clean the house']").click();
  cy.get("[data-testid='delete-Study jest']").click();
  cy.get("[data-testid='status-Study Clean Arch']").click();
  cy.get("[data-testid=add-todo-btn]").click();
  cy.get("[data-testid='status-Study jest']").click();
  cy.get("[data-testid='todo-Study jest']").click();
  cy.get("[data-testid='status-Study jest']").click();
  cy.get("[data-testid='delete-Study Clean Arch']").click();
  cy.get("[data-testid='status-Study Clean Arch']").click();
  cy.get("[data-testid='delete-Study Clean Arch']").click();
});
