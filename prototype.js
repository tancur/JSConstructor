// Домашка по конструкторам

// 1.Перейдіть завдання createPerson на функцію конструктор Person.

function Person(name, surname) {
  this.name = name;

  this.surname = surname;

  this.getFullName = function () {
    return this.fatherName
      ? `${this.name} ${this.fatherName} ${this.surname}`
      : `${this.name}  ${this.surname}`;
  };
}

const a = new Person("Вася", "Пупкін");
const b = new Person("Ганна", "Іванова");
const c = new Person("Єлизавета", "Петрова");

console.log(a.getFullName()); // Василь Пупкін
a.fatherName = "Іванович"; // Василь Іванович Пупкін

console.log(
  b.getFullName()
) // Ганна Іванова
````;

// 2.Person.prototype

function Person(name, surname) {
  this.name = name;

  this.surname = surname;
}

Person.prototype.getFullName = function () {
  return this.fatherName
    ? `${this.name} ${this.fatherName} ${this.surname}`
    : `${this.name}  ${this.surname}`;
};

const a = new Person("Вася", "Пупкін");
const b = new Person("Ганна", "Іванова");
const c = new Person("Єлизавета", "Петрова");

console.log(a.getFullName()); // Василь Пупкін
a.fatherName = "Іванович"; // Василь Іванович Пупкін

console.log(b.getFullName()); // Ганна Іванова

// 3.## Password
function Password(parent, open) {
  const input = document.createElement("input");
  input.type = open ? "text" : "password";
  parent.append(input);

  const button = document.createElement("button");
  button.innerText = open ? "скрыть" : "показать";
  parent.append(button);

  this.setValue = function (value) {
    input.value = value;
  };

  this.getValue = function () {
    return input.value;
  };

  input.oninput = () => {
    if (typeof this.onChange === "function") {
      this.onChange(input.value);
    }
  };

  button.onclick = () => {
    open = !open;
    input.type = open ? "text" : "password";
    button.innerText = open ? "скрыть" : "показать";

    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }
  };

  this.setOpen = function (value) {
    open = value;
    input.type = open ? "text" : "password";
    button.innerText = open ? "скрыть" : "показать";

    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }
  };

  this.getOpen = function () {
    return open;
  };

  this.setStyle = function (style) {
    input.style = style;
  };
  this.input = input;
}

let p = new Password(document.body, true);

p.onChange = (data) => console.log(data);
p.onOpenChange = (open) => console.log(open);

p.setValue("qwerty");
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());

// 4. LoginForm

const form = document.createElement("form");

document.body.append(form);

const inputLogin = new Password(form, true);
const inputPassword = new Password(form, true);
const button = document.createElement("button");
button.innerText = "ВХОД";
button.disabled = true;
form.append(button);

function checkForm() {
  if (inputLogin.getValue() === "" && inputPassword.getValue() === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
inputLogin.onChange = function () {
  checkForm();
};

inputPassword.onChange = function () {
  checkForm();
};

inputLogin.setValue("qwerty");
console.log(inputLogin.getValue());

inputPassword.setValue("qwerty");
console.log(inputPassword.getValue());

// 5
function LoginForm(parent, open) {
  const form = document.createElement("form");
  parent.append(form);

  const inputLogin = document.createElement("input");
  inputLogin.type = open ? "text" : "password";
  parent.append(inputLogin);

  const inputPassword = document.createElement("input");
  inputPassword.type = open ? "text" : "password";
  parent.append(inputPassword);

  this.setInputLogindStyle = function (style) {
    inputLogin.style = style;
  };

  this.setInputPasswordStyle = function (style) {
    inputPassword.style = style;
  };

  const button = document.createElement("button");
  button.innerText = "ВХОД";
  button.disabled = true;
  form.append(button);

  this.getInputLogin = function () {
    return inputLogin.value;
  };

  this.setInputLogin = function (znachenie) {
    inputLogin.value = znachenie;
  };

  this.getInputPassword = function () {
    return inputPassword.value;
  };

  this.setInputPassword = function (znachenie) {
    inputPassword.value = znachenie;
  };

  inputLogin.oninput = () => {
    if (typeof this.onChange === "function") {
      this.onChange(inputLogin.value);
    }
  };

  inputPassword.oninput = () => {
    if (typeof this.onChange === "function") {
      this.onChange(inputPassword.value);
    }
  };

  this.checkForm = function () {
    if (this.getInputLogin() === "" && this.getInputPassword() === "") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  };

  inputLogin.oninput = () => {
    this.checkForm();
  };

  inputPassword.oninput = () => {
    this.checkForm();
  };
}

const nechto = new LoginForm(document.body, true);

// 6. у меня появлется второй инпут когда ввожу данные в первый

function Password(parent, open) {
  const input = document.createElement("input");
  input.type = open ? "text" : "password";
  parent.append(input);

  const button = document.createElement("button");
  button.innerText = open ? "скрыть" : "показать";
  parent.append(button);

  this.setValue = function (value) {
    input.value = value;
  };

  this.getValue = function () {
    return input.value;
  };

  input.oninput = () => {
    if (typeof this.onChange === "function") {
      this.onChange(input.value);
    }
  };

  button.onclick = () => {
    open = !open;
    input.type = open ? "text" : "password";
    button.innerText = open ? "скрыть" : "показать";

    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }
  };

  this.setOpen = function (value) {
    open = value;
    input.type = open ? "text" : "password";
    button.innerText = open ? "скрыть" : "показать";

    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }
  };

  this.getOpen = function () {
    return open;
  };

  this.setStyle = function (style) {
    input.style = style;
  };
  this.input = input;
  this.button = button;
}

const password1 = new Password(document.body, true);
password1.setStyle("margin: 10px");

const password2 = new Password(document.body, true);
password2.setStyle("margin: 10px");

password1.setOpen = (open) => {
  if (open) {
    password2.setStyle("display:none;");
    password2.button.style = "display:none;";
  } else {
    password2.setStyle("margin: 10px");
    password2.button.style = "display:block;";
    password2.input.type = "password";
    password2.button.innerText = !open ? "скрыть" : "показать";
  }
};

password1.input.addEventListener("input", passwordCheck);
password2.input.addEventListener("input", passwordCheck);

function passwordCheck() {
  if (password1.getValue() !== password2.getValue()) {
    password1.setStyle("margin: 10px; border-color: red;");
    password2.setStyle("margin: 10px; border-color: red;");
  } else {
    password1.setStyle("margin: 10px");
    password2.setStyle("margin: 10px");
  }
}

password1.setOpen(true);
password2.setOpen(false);
