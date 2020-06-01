/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error("Передан пустой элемент!");
    }
    this.element = element;
    this.registerEvents();
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const allModalButtons = Array.from(this.element.querySelectorAll('[data-dismiss="modal"]'));
    
    allModalButtons.forEach(element => {
      element.addEventListener("click", event => {
        this.onClose(event);
      });
    });

  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose( e ) {
    e.preventDefault();
    this.close();
  }

  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {
    const allModalButtons = Array.from(this.element.querySelectorAll('[data-dismiss="modal"]'));

    allModalButtons.forEach((element) => {
      element.removeEventListener("click", event => {
        this.onClose(event);
      });
    });

  }

  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = "block";
  }

  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.removeProperty("display");
  }

}
