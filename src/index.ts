// Task-1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// console.log(formatString("Hello", false));
// Task-2

type RatingType = { title: string; rating: number };

function filterByRating(items: RatingType[]): RatingType[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

// Task-3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, current) => [...acc, ...current], []);
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// Task-4
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getModel());

// Task-5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(processValue("hello"));
// console.log(processValue(10));

// Task-6
// Define the Product interface
interface Product {
  name: string;
  price: number;
}

// Function to get the product with the highest price
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((max, current) =>
    current.price > max.price ? current : max
  );
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));

// Task-7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}
// console.log(getDayType(Day.Sunday));

// Task-8
async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject(new Error("Negative number not allowed"));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000); 
  });
}

squareAsync(4).then(console.log); 
