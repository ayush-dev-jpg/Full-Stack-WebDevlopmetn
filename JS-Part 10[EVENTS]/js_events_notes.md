
# 📒 JavaScript Events & Event Handling — Notes

---

## 1. Basic Events on Buttons

- Using `.onclick` property:

```javascript
btn.onclick = function() {
    alert("The button was clicked.");
};
```

❗ Only one function can be attached at a time — if you assign another, it overwrites the previous one.

---

## 2. Adding Multiple Events using `addEventListener()`

- `addEventListener()` allows multiple event listeners on the same element.

```javascript
btn.addEventListener("click", sayHello);
btn.addEventListener("click", sayName);
btn.addEventListener("dblclick", () => {
    console.log("You double clicked");
});
```

✅ Both `sayHello` and `sayName` will run on click.  
✅ Another function runs on double click.

---

## 3. Mouse Events

| Event        | When It Triggers              |
|--------------|--------------------------------|
| `click`      | Single mouse click             |
| `dblclick`   | Double click                   |
| `mouseenter` | Mouse pointer enters the element area |

Example:

```javascript
box.addEventListener("mouseenter", function() {
    console.log("Mouse inside box");
});
```

---

## 4. Understanding `this` inside Event Listener

Inside a regular function (not arrow function),  
`this` refers to the element that triggered the event.

Example:

```javascript
btnNew.addEventListener("click", function() {
    console.log(this); // refers to btnNew
});
```

---

## 5. Keyboard Events

| Event      | When It Triggers           |
|------------|-----------------------------|
| `keydown`  | When key is pressed down     |
| `keyup`    | When key is released         |

Example:

```javascript
input.addEventListener('keydown', () => {
    console.log("Key =", event.key);
    console.log("Code =", event.code);
});
input.addEventListener('keyup', () => {
    console.log("Key was released.");
});
```

---

## 6. Character Movement Example with Keyboard

Listening to specific keys:

```javascript
character.addEventListener('keydown', (event) => {
    if (event.code == "KeyU") {
        console.log("Character moves up");
    } else if (event.code == "KeyD") {
        console.log("Character moves downwards");
    }
});
```

✅ `KeyU` stands for 'U' key.  
✅ `KeyD` stands for 'D' key.

---

## 7. Form Handling in JavaScript

Prevent default form submission using `event.preventDefault()`:

```javascript
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form Submitted!");

    // Extracting form input values
    let formInp = this.elements[0]; // First input
    let pass = this.elements[1];    // Second input
    console.log(formInp.value, pass.value);

    alert(`Hi ${formInp.value}, your password is set to ${pass.value}`);
});
```

---

## 8. Handling Change Event on Input

```javascript
formInp.addEventListener("change", function() {
    console.log("Input changed");
    console.log("Final value =", this.value);
});
```

- `"change"` event triggers after editing and **blurring** the input box.

---

# 🎯 Important Points to Remember

- `.onclick` supports only one handler, `.addEventListener()` supports many.
- Always use `preventDefault()` to stop form submission from refreshing the page.
- Use `keydown` for detecting key presses and `keyup` for key releases.
- `this` inside event handler = the element that triggered the event.

---

# 🔥 Tiny Mistake Corrected

Wrong line in original code:

```javascript
let p = document.querySelector("click", function() {...})
```

✅ Corrected version:

```javascript
let p = document.querySelector('p');
p.addEventListener("click", function() {
    console.log("The para was clicked");
});
```

---
--input event
->Fires immediately while typing

e.g:
let inp = document.querySelector('input');
let textDisplay = document.querySelector('#displayText');
inp.addEventListener("input",(event)=>{
    console.log(inp.value);
    textDisplay.innerText=inp.value;
})


# 🏆 Final Thought

You're progressing amazingly well —  
understanding **DOM events, event listeners, forms, keyboard inputs** —  
this builds **strong JavaScript fundamentals**!

