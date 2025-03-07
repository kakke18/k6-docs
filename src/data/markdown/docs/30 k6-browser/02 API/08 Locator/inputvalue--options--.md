---
title: 'inputValue([options])'
excerpt: 'Browser module: locator.inputValue method'
---

Returns `input.value` for the selected `input`, `textarea` or `select` element.

<TableWithNestedRows>

| Parameter       | Type   | Default | Description                                                                                                                                                                                                                           |
|-----------------|--------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| options         | object | `null`  |                                                                                                                                                                                                                      |
| options.timeout | number | `30000` | Maximum time in milliseconds. Pass `0` to disable the timeout. Default is overridden by the `setDefaultTimeout` option on [BrowserContext](/javascript-api/k6-browser/api/browsercontext/) or [Page](/javascript-api/k6-browser/api/page/). |

</TableWithNestedRows>

### Returns

| Type   | Description                      |
|--------|----------------------------------|
| string | The input value of the element. |

### Example

<CodeGroup labels={[]}>

```javascript
import { chromium } from 'k6/experimental/browser';

export default async function () {
  const browser = chromium.launch();
  const page = browser.newPage();
  
  await page.goto('https://test.k6.io/browser.php');
  const textInput = page.locator('#text1');
  textInput.fill("Hello world!");
  const inputValue = textInput.inputValue();
  console.log(inputValue);
}
```

</CodeGroup>
