# 📘 DOM (Document Object Model) – Complete Revision Notes

## 🌐 What is the DOM?
- The **DOM** is a programming interface for web documents.
- It represents the page so that programs can change the document structure, style, and content.
- The DOM represents the document as a **tree of nodes**.

---

## ⚙️ How DOM Manipulation Works
### DOM manipulation involves 2 main steps:
1. **Select the element** from the DOM.
2. **Manipulate** it using JavaScript.

---

## 🔍 Selecting Elements

### ✅ 1. `getElementById()`
- Returns a single element by its `id`.
- If not found, returns `null`.
```js
const el = document.getElementById("myId");
```

### ✅ 2. `getElementsByClassName()`
- Returns an **HTMLCollection** of elements with the given class name.
- Not a true array (use `for...of`, not `forEach` directly).
```js
const items = document.getElementsByClassName("item");
```

### ✅ 3. `getElementsByTagName()`
- Returns an **HTMLCollection** of elements with the given tag name.
```js
const paragraphs = document.getElementsByTagName("p");
```

### ✅ 4. `querySelector()`
- Returns the **first** matching element using **CSS selector**.
```js
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("div > p");
```

### ✅ 5. `querySelectorAll()`
- Returns a **NodeList** (can use `forEach`) of **all** elements that match.
```js
const allPs = document.querySelectorAll("p");
```

---

## 🛠 Manipulating Elements

### 🔤 Text Content
- `innerText`: Visible text only.
- `textContent`: All text including hidden.
- `innerHTML`: Entire HTML content (includes tags).
```js
el.innerText = "Hello";
el.textContent = "Hello";
el.innerHTML = "<strong>Hello</strong>";
```

### 🏷️ Attributes
- `getAttribute(attr)`: Get an attribute value.
- `setAttribute(attr, value)`: Set or update an attribute.
```js
a.getAttribute("href");
a.setAttribute("href", "https://google.com");
```

---

## 🎨 Styling Elements

### 🔘 Inline Styling
```js
el.style.color = "blue";
el.style.backgroundColor = "yellow";
```

### 🎯 `classList` API (Recommended)
```js
el.classList.add("highlight");
el.classList.remove("highlight");
el.classList.toggle("dark-theme");
el.classList.contains("active");
```
- Prefer `classList` over `setAttribute("class", ...)` as it allows multiple class operations.

---

## 🔄 DOM Navigation

```js
el.parentElement            // Get parent element
el.children                 // Get all child elements
el.childElementCount        // Get number of children
el.previousElementSibling   // Get previous sibling
el.nextElementSibling       // Get next sibling
```

---

## ➕ Adding Elements

### Create & Insert
```js
const newEl = document.createElement("p");
newEl.innerText = "I am new!";
```

### Append & Prepend
```js
parent.appendChild(newEl);      // Adds at end
parent.append("text", newEl);   // Supports string too
parent.prepend(newEl);          // Adds at beginning
```

### Insert at Custom Position
```js
parent.insertAdjacentElement("beforebegin", newEl);
// Options: beforebegin, afterbegin, beforeend, afterend
```

---

## 🗑️ Removing Elements

### Remove via Parent
```js
parent.removeChild(child);
```

### Modern Remove (no parent needed)
```js
element.remove();
```

---

## ✅ Summary Table

| Selector Type         | Method                     | Returns           | Notes                          |
|----------------------|----------------------------|-------------------|---------------------------------|
| By ID                | `getElementById()`         | Element / null    | Fastest, unique ID only        |
| By Class Name        | `getElementsByClassName()` | HTMLCollection    | Array-like                     |
| By Tag Name          | `getElementsByTagName()`   | HTMLCollection    | Array-like                     |
| CSS Selector (First) | `querySelector()`          | Element / null    | Very flexible                  |
| CSS Selector (All)   | `querySelectorAll()`       | NodeList          | Supports `forEach()`           |

---

## 🧠 Tips for DOM Practice
- Use browser DevTools Console to test selectors live.
- Build mini projects: Todo List, Light/Dark Mode, Form Validation.
- Combine DOM with Events (`addEventListener`) for interactive UIs.

---

Happy DOM-ing! 🚀
