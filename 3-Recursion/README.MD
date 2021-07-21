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
