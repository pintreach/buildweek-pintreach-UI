class TabLink {
  constructor(element, index) {
    this.element = element;
    this.data = element.dataset.tab;
    this.itemElement = document.querySelectorAll(".tabs-item")[index];
    this.tabElement = document.querySelector(`div[data-tab="${this.data}"`);
    this.newItem = new TabItem(this.itemElement);
    this.tabElement.addEventListener("click", () => {
      this.newItem.select();
      this.select();
    });
  }

  select() {
    const links = document.querySelectorAll(".tabs-link");
    Array.from(links).forEach(link =>
      link.classList.remove("tabs-link-selected")
    );
    this.element.classList.toggle("tabs-link-selected");
    this.itemElement.classList.toggle("tabs-link-selected");
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tabs-item");
    items.forEach(element => {
      element.classList.remove("tabs-item-selected");
    });
    this.element.classList.toggle("tabs-item-selected");
  }
}
//gather links and create new objects
links = document.querySelectorAll(".tabs-link");
links.forEach((link, index) => new TabLink(link, index));
