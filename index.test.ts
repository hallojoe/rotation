import { Rotation } from "./index"

describe("Rotation", () => {
  let rotation: Rotation<number>

  beforeEach(() => {
    rotation = new Rotation([1, 2, 3, 4, 5])
  })

  it("should initialize with provided value array", () => {
    expect(rotation.value).toEqual([1, 2, 3, 4, 5])
  })

  it("should initialize currentIndex to 0", () => {
    expect(rotation["currentIndex"]).toBe(0)
  })

  describe("next()", () => {
    it("should return the next element in rotation", () => {
      expect(rotation.next()).toBe(1)
      expect(rotation.next()).toBe(2)
      expect(rotation.next()).toBe(3)
      expect(rotation.next()).toBe(4)
      expect(rotation.next()).toBe(5)
      // Rotates back to the beginning
      expect(rotation.next()).toBe(1)
    })

    it("should return undefined when rotation is empty", () => {
      const emptyRotation = new Rotation<number>([])
      expect(emptyRotation.next()).toBeUndefined()
    })
  })

  describe("previous()", () => {
    it("should return the previous element in rotation", () => {
      expect(rotation.previous()).toBe(5)
      expect(rotation.previous()).toBe(4)
      expect(rotation.previous()).toBe(3)
      expect(rotation.previous()).toBe(2)
      expect(rotation.previous()).toBe(1)
      // Rotates back to the end
      expect(rotation.previous()).toBe(5)
    })

    it("should return undefined when rotation is empty", () => {
      const emptyRotation = new Rotation<number>([])
      expect(emptyRotation.previous()).toBeUndefined()
    })
  })

  describe("first()", () => {
    it("should return the first element in rotation", () => {
      expect(rotation.first()).toBe(1)
    })

    it("should return undefined when rotation is empty", () => {
      const emptyRotation = new Rotation<number>([])
      expect(emptyRotation.first()).toBeUndefined()
    })
  })

  describe("last()", () => {
    it("should return the last element in rotation", () => {
      expect(rotation.last()).toBe(5)
    })

    it("should return undefined when rotation is empty", () => {
      const emptyRotation = new Rotation<number>([])
      expect(emptyRotation.last()).toBeUndefined()
    })
  })

  describe("get()", () => {
    it("should return the element at the specified index", () => {
      expect(rotation.get(2)).toBe(3)
      expect(rotation.get(4)).toBe(5)
    })

    it("should return the current element if index is not provided", () => {
      expect(rotation.get()).toBe(1)
      rotation.next()
      expect(rotation.get()).toBe(2)
    })

    it("should return undefined if index is out of range", () => {
      expect(rotation.get(10)).toBeUndefined()
      expect(rotation.get(-1)).toBeUndefined()
    })

    it("should update currentIndex when index is provided", () => {
      rotation.get(3)
      expect(rotation["currentIndex"]).toBe(3)
    })
  })

  describe("peek()", () => {
    it("should return the element at the specified index without changing currentIndex", () => {
      expect(rotation.peek(2)).toBe(3)
      expect(rotation.peek()).toBe(1)
      // currentIndex should remain unchanged
      expect(rotation["currentIndex"]).toBe(0)
    })

    it("should return undefined if index is out of range", () => {
      expect(rotation.peek(10)).toBeUndefined()
      expect(rotation.peek(-1)).toBeUndefined()
    })

    it("should return the current element if index is not provided", () => {
      rotation.next()
      expect(rotation.peek()).toBe(2)
      // currentIndex should remain unchanged
      expect(rotation["currentIndex"]).toBe(1)
    })
  })
})
