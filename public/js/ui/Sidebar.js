/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const bodyElement = document.querySelector("body");
    const sidebarBtn = document.querySelector(".sidebar-toggle");

    sidebarBtn.addEventListener("click", event => {
      event.preventDefault();
      bodyElement.classList.toggle("sidebar-open");
      bodyElement.classList.toggle("sidebar-collapse");
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const menuItemRegister = Array.from(document.getElementsByClassName("menu-item_register"));
    const menuItemLogin = Array.from(document.getElementsByClassName("menu-item_login"));
    const menuItemLogout = Array.from(document.getElementsByClassName("menu-item_logout"));

    menuItemRegister.forEach(element => {
      element.addEventListener("click", event => {
        event.preventDefault();
        App.getModal("register").open();
      });
    });

    menuItemLogin.forEach(element => {
      element.addEventListener("click", event => {
        event.preventDefault();
        App.getModal("login").open();
      });
    });

    menuItemLogout.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const currentUser = User.current();
        User.logout(currentUser, (err, response) => {
          if (response.success) {
            App.setState("init");
          }
        });
      });
    });

  }

}
