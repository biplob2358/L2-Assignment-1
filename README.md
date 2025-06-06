﻿#  🔍 What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Enums in TypeScript are a feature that lets you define a set of named constants—making your code more readable and maintainable by giving meaningful names to numeric or string values.
## Uses of Enums

- Represent a fixed set of related values.
- Improve code clarity, type safety, and autocompletion in IDEs.
- Prevent magic strings or unnamed constants scattered in your code.

### 📌 Example: Example of a numeric enum

```typescript
enum Direction {
  Up,  
  Down,  
  Left,  
  Right   
}

console.log(Direction.Up);   
console.log(Direction[2]);  
```
### 📌 Example: Example of a string enum

```typescript
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

console.log(UserRole.Admin);
```

## 🔍 Differences Between `type` and `interface` in TypeScript

### Declaration Merging:

- **Interfaces** support declaration merging, allowing multiple declarations with the same name to be merged into one.
- **Types** do **not** support declaration merging.

```typescript
interface A {
  x: string;
}
interface A {
  y: string;
}

const j: A = {
  x: 'xx',
  y: 'yy',
};
```

### Extensibility:
- **Interfaces** Can be extended using the extends keyword.
```typescript
  interface Employee extends Person {
      employeeId: number;
  }
```
- **Types** Can be combined using intersections (&).
```typescript
  type Employee = Person & {
      employeeId: number;
  };
```
### Merging Declarations:
- **Interfaces**  Supports declaration merging. You can define the same interface multiple times, and TypeScript will merge them.
```typescript
   interface Person {
      name: string;
  }

  interface Person {
      age: number;
  }

       interface Person {
       name: string;
       age: number;
   }
  
```
- **Types** Does not support declaration merging. Defining the same type alias multiple times will result in an error..
```typescript
   type Person = {
      name: string;
  };

  type Person = {
      age: number;
  };
  
```
###  Use Cases:
- **Interfaces**  Generally preferred for defining the shape of objects.
```typescript
  interface Point {
      x: number;
      y: number;
  }
```
- **Types**  can define unions, tuples, and other complex types.
```typescript
  type Point = [number, number];
```

###  Implementation:
- **Interfaces** Can be implemented by classes.
```typescript
   interface Shape {
      area(): number;
  }

  class Circle implements Shape {
      constructor(public radius: number) {}
      area() {
          return Math.PI * this.radius ** 2;
      }
  }
  
```
- **Types**  Cannot be implemented by classes.
```typescript
   type Shape = {
      area(): number;
  };
