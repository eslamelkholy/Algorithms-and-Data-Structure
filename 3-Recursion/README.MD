# Recursion

Every Recursion Function Has Two Parts [The Base Case , The Recursive Case] <br/>

1- Base Case is When The Function Doesn't Call it Self Again <br/>
2- Recursive Case is When the function call it Selft Again <br/>

For Example Simple Count Down Function Using Recursion

```javascript
const countDown = (i) => {
  console.log(`Current Value = ${i}`);
  if (i <= 0) return; // Base Case When Doesn't Call it Self Again
  countDown(i - 1); // Recursive Case when Function call it Self Again
};
```

### Stack

Stack on of the Most Common Data Structure you've been using Whole Time Without Realizing it
Like **Call Stack** <br/>
Stack is simple Data Structure When Contains of Two Actions

- Push: add New Item to The Top
- Pop: Remove the Topmost item and Read it

##### Call Stack With Recursion

Recursive Functions use The Call Stack E.G Factorial

```javascript
const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
```
