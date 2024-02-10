# For ... in ... looping through object properties
---
[![Build status](https://ci.appveyor.com/api/projects/status/3ku5dfsctfoa3jf4?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-sortforin)

### Описание

Дан объект, например:
```js
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
```

Дан порядок сортировки свойств:
```javascript
["name", "level"]
```

Пример вызова вашей функции:
```js
orderByProps(obj, ["name", "level"])
```

После обработки функцией возвращается объект:
```javascript
[
  {key: "name", value: "мечник"}, // порядок взят из массива с ключами
  {key: "level", value: 2}, // порядок взят из массива с ключами
  {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
  {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
  {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
]

```

Т.е. сначала идёт сортировка по тому, как указано в массиве сортировки, для тех ключей, для которых в массиве сортировки нет записи, сортировка идёт в алфавитном порядке.

---

Обеспечено покрытие тестами.
