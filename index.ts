// Implementation of a rotation class for arrays
export class Rotation<T> {
 
  // Private member to hold the array value
  private _value?: T[]

  // Public read-only getter for the value property
  get value(): T[] | undefined {
    return this._value;
  }

  // Private member to keep track of the current index
  private currentIndex: number = 0

  // Constructor to initialize the rotation with a value
  constructor(value: T[] | T) {
    // Ensure value is set properly
    if (value) this._value = Array.isArray(value) ? value : [value]    
  }

  // Private method to ensure value exists
  private ensureValue() {
    // If value is not set, initialize it as an empty array
    if (!this._value) this._value = []    
  }

  // Method to get the next element in rotation
  next(): T | undefined {
    // If value is not set or array is empty, return undefined
    if (!this._value || this._value.length === 0) return undefined
    // Ensure value exists
    this.ensureValue()
    // Get the next element
    const nextElement = this._value[this.currentIndex]
    // Update current index for the next iteration
    this.currentIndex = (this.currentIndex + 1) % this._value.length
    // Return the next element
    return nextElement
  }

  // Method to get the previous element in rotation
  previous(): T | undefined {
    // If value is not set or array is empty, return undefined
    if (!this._value || this._value.length === 0) return undefined
    // Ensure value exists
    this.ensureValue()
    // Update current index to get the previous element
    this.currentIndex = (this.currentIndex - 1 + this._value.length) % this._value.length
    // Return the previous element
    return this._value[this.currentIndex]
  }

  // Method to get the first element in rotation
  first(): T | undefined {
    // If value is not set or array is empty, return undefined
    if (!this._value || this._value.length === 0) return undefined
    // Ensure value exists
    this.ensureValue()
    // Set current index to the beginning of the array
    this.currentIndex = 0
    // Return the first element
    return this._value[this.currentIndex]
  }

  // Method to get the last element in rotation
  last(): T | undefined {
    // If value is not set or array is empty, return undefined
    if (!this._value || this._value.length === 0) return undefined
    // Ensure value exists
    this.ensureValue()
    // Set current index to the end of the array
    this.currentIndex = this._value.length - 1
    // Return the last element
    return this._value[this.currentIndex]
  }

  // Method to get the element at a specific index in rotation
  get(index?: number): T | undefined {
    // If value is not set or array is empty, return undefined
    if (!this._value || this._value.length === 0) return undefined;
    // Ensure value exists
    this.ensureValue()
    // If index is not provided, return the current element
    if (index === undefined) return this._value[this.currentIndex];
    // If index is out of range, return undefined
    if (index < 0 || index >= this._value.length) return undefined;
    // Update current index to the specified index
    this.currentIndex = index;
    // Return the element at the specified index
    return this._value[this.currentIndex];
  }

  // Method to peek at an element in rotation without changing the current index
  peek(index?: number): T | undefined {
    // If value is not set or array is empty, return undefined
    if (!this._value || this._value.length === 0) return undefined
    // If index is provided and within range, return the element at that index
    if (index !== undefined && index >= 0 && index < this._value.length) return this._value[index]
    // Otherwise, return the current element
    return this._value[this.currentIndex]
  }
}