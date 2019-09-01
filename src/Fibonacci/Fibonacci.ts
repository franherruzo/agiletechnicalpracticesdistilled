const Fibonacci = (position: number): number =>
  position < 3 ? 1 : Fibonacci(position - 1) + Fibonacci(position - 2);

export default Fibonacci;
