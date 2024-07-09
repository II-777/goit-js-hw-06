class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(newValue) {
    this.#value = newValue.concat(this.#value);
    return this.#value;
  }

  padEnd(newValue) {
    this.#value = this.#value.concat(newValue);
    return this.#value;
  }

  padBoth(newValue) {
    this.#value = newValue + this.#value + newValue;
    return this.#value;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="