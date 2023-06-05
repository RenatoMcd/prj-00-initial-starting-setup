class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  form: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.form = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.form);
  }
}

const prjInput = new ProjectInput();
