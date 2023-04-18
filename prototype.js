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

  this.setValue = function (znachenie) {
    input.value = znachenie;
  };

  this.getValue = function () {
    return input.value;
  };

  input.onclick = () => {
    if (typeof this.onChange === "function") {
      this.onChange(input.value);
    }
  };
  button.onclick = () => {
    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }
  };

  this.setOpen = function (drugoeznachenie) {
    if (open !== drugoeznachenie && typeof this.onOpenChange === "function") {
      this.onOpenChange(drugoeznachenie);
    }

    open = drugoeznachenie;
    input.type = open ? "text" : "password";
    button.innerText = open ? "скрыть" : "показать";
  };
  this.getOpen = function () {
    return open;
  };

  this.setStyle = function (style) {
    input.style = style;
  };
}

let p = new Password(document.body, true);

p.onChange = (data) => console.log(data);
p.onOpenChange = (open) => console.log(open);

p.setValue("qwerty");
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());



// 4. не активируется кнопка вход


const form = document.createElement('form');

document.body.append(form);

const inputLogin = new Password (form, true);
const inputPassword = new Password (form, true);
const button = document.createElement('button');
button.innerText='ВХОД';
button.disabled = true;
form.append(button);

function checkForm (){
   
     if(inputLogin.getValue()===''&&inputPassword.getValue()==='') {button.disabled = true}
     else  {button.disabled = false};
}
inputLogin.oninput = function() {
  checkForm();
};

inputPassword.oninput = function() {
  checkForm();
};

inputLogin.setValue('qwerty')
console.log(inputLogin.getValue())

inputPassword.setValue('qwerty')
console.log(inputPassword.getValue())
