"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotation = void 0;
// Implementation of a rotation class for arrays
var Rotation = /** @class */ (function () {
    // Constructor to initialize the rotation with a value
    function Rotation(value) {
        // Private member to keep track of the current index
        this.currentIndex = 0;
        // Ensure value is set properly
        if (value)
            this._value = Array.isArray(value) ? value : [value];
    }
    Object.defineProperty(Rotation.prototype, "value", {
        // Public read-only getter for the value property
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    // Private method to ensure value exists
    Rotation.prototype.ensureValue = function () {
        // If value is not set, initialize it as an empty array
        if (!this._value)
            this._value = [];
    };
    // Method to get the next element in rotation
    Rotation.prototype.next = function () {
        // If value is not set or array is empty, return undefined
        if (!this._value || this._value.length === 0)
            return undefined;
        // Ensure value exists
        this.ensureValue();
        // Get the next element
        var nextElement = this._value[this.currentIndex];
        // Update current index for the next iteration
        this.currentIndex = (this.currentIndex + 1) % this._value.length;
        // Return the next element
        return nextElement;
    };
    // Method to get the previous element in rotation
    Rotation.prototype.previous = function () {
        // If value is not set or array is empty, return undefined
        if (!this._value || this._value.length === 0)
            return undefined;
        // Ensure value exists
        this.ensureValue();
        // Update current index to get the previous element
        this.currentIndex = (this.currentIndex - 1 + this._value.length) % this._value.length;
        // Return the previous element
        return this._value[this.currentIndex];
    };
    // Method to get the first element in rotation
    Rotation.prototype.first = function () {
        // If value is not set or array is empty, return undefined
        if (!this._value || this._value.length === 0)
            return undefined;
        // Ensure value exists
        this.ensureValue();
        // Set current index to the beginning of the array
        this.currentIndex = 0;
        // Return the first element
        return this._value[this.currentIndex];
    };
    // Method to get the last element in rotation
    Rotation.prototype.last = function () {
        // If value is not set or array is empty, return undefined
        if (!this._value || this._value.length === 0)
            return undefined;
        // Ensure value exists
        this.ensureValue();
        // Set current index to the end of the array
        this.currentIndex = this._value.length - 1;
        // Return the last element
        return this._value[this.currentIndex];
    };
    // Method to get the element at a specific index in rotation
    Rotation.prototype.get = function (index) {
        // If value is not set or array is empty, return undefined
        if (!this._value || this._value.length === 0)
            return undefined;
        // Ensure value exists
        this.ensureValue();
        // If index is not provided, return the current element
        if (index === undefined)
            return this._value[this.currentIndex];
        // If index is out of range, return undefined
        if (index < 0 || index >= this._value.length)
            return undefined;
        // Update current index to the specified index
        this.currentIndex = index;
        // Return the element at the specified index
        return this._value[this.currentIndex];
    };
    // Method to peek at an element in rotation without changing the current index
    Rotation.prototype.peek = function (index) {
        // If value is not set or array is empty, return undefined
        if (!this._value || this._value.length === 0)
            return undefined;
        // If index is provided and within range, return the element at that index
        if (index !== undefined && index >= 0 && index < this._value.length)
            return this._value[index];
        // Otherwise, return the current element
        return this._value[this.currentIndex];
    };
    return Rotation;
}());
exports.Rotation = Rotation;
