describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:1234");
  });
  it("Should find Heading", () => {
    cy.visit("http://localhost:1234");
    cy.get("h2").contains("Välkommen");
  });
  it("Should make new todo", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("Koda");
    cy.get("button:first").click();
    cy.get("ul > li").should("have.length", 1);
    cy.get("ul > li:first").contains("Koda");
  });
  it("Should toggle todo", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("Koda");
    cy.get("button:first").click();
    cy.get("ul > li").should("have.length", 1);
    cy.get("ul > li:first").contains("Koda");
    cy.get("ul > li:first").should("have.class", "todo__text");
    cy.get("ul > li:first").click();
    cy.get("ul > li:first").should("have.class", "todo__text--done");
  });
  it("Should clear todo list", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("Koda");
    cy.get("button:first").click();
    cy.get("#clearTodos").click();
    cy.get("ul > li").should("have.length", 0);
  });

  it("Should do best stuff", () => {
    let todos = [{ text: "hejhej", done: false }];
    localStorage.setItem("todos", JSON.stringify(todos));
    cy.visit("http://localhost:1234");
    cy.get("ul > li").contains("hejhej");
  });
});
