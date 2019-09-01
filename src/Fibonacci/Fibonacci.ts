const Fibonacci = (position: number): number => {
  if (position < 3) return 1;
  return Fibonacci(position - 1) + Fibonacci(position - 2);
};

export default Fibonacci;
