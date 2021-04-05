import { ToastService } from './services/toast.service';

class App {
  styleElementRef: HTMLElement;
  defaultStyleSheet = 'Style/fullwidth.css';
  smallerStyleSheet = 'Style/reducedwidth.css';

  toastService = new ToastService();

  constructor() {
    this.styleElementRef = document.getElementById('hotbarStyle'); //ref to hotbar style

    window.addEventListener('resize', (e: Event) => this.onResize()); //resizing event

    let addBtn = document.getElementById('addItemButton'); //adding event to button
    addBtn.addEventListener('click', (e: Event) => this.toastService.addItem());

    let rmvBtn = document.getElementById('removeItemButton'); //adding event to button
    rmvBtn.addEventListener('click', (e: Event) =>
      this.toastService.removeItem(),
    );

    this.onResize();
  }

  onResize() {
    const styleId = 'hotbarStyle';

    if (window.innerWidth < 1200) {
      document
        .getElementById(styleId)
        .setAttribute('href', this.smallerStyleSheet);
    } else {
      document
        .getElementById(styleId)
        .setAttribute('href', this.defaultStyleSheet);
    }
  }
}

new App();
