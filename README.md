# Setup:

```npm i ```


```npx ionic cap run android```

I am running it on my physical USB Android device which by default blocks network traffic
of newly installed apps. This can either be achieved natively or with the app
"NetGuard - no-root firewall".
When you start the app, you can inspect the JS log by using
chrome://inspect in any Chromium-based browser and opening the DevTools
for the main page.

This is then called in 
src/app/tab1/tab1.page.ts
```
try {
  console.log("Purchases.getCustomerInfo() called");
  let { customerInfo } = await Purchases.getCustomerInfo()
  //never reached
  console.log("info");
  console.log(customerInfo);
} catch (e) {
  //never reached
  console.log("error");
  console.log(e);
}
```
  
