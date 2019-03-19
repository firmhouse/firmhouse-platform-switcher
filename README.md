# firmhouse-platform-switcher

## Local Usage

install

```bash
npm i
```

dev

```bash
npm run start
```

build

```bash
npm run build
```

## Usage through NPM/Yarn in other projects

Yarn install

```bash
yarn add ssh://git@github.com:firmhouse/firmhouse-platform-switcher.git
```

NPM install

```bash
npm i git@github.com:firmhouse/firmhouse-platform-switcher.git
```

Using in JS code

```js
import React from "react";
import PlatformSwitcher from "firmhouse-platform-switcher";

const ProductSwitcher = props => <PlatformSwitcher {...props} />;

export default ProductSwitcher;
```

After that you can include this to the Rails with `react_component` method by [react-rails](https://github.com/reactjs/react-rails).

```ruby
react_component "ProductSwitcher", root_url: <Root URL>, items: <Switcher Items>, product: <Product Name>
```

## Properties

### Switcher required properties for proper work

* `root_url` (String) is a path which will be used for main link on Firmhouse Icon.

Examples:
`/my-relative-path` or `https://my-absolute-path.com/index.html`

* `items` (Array) is array of objects for items which will be used for dropdown list items. Available options for objects below
  * `title` (Optional) - Main title for item
  * `proposition` - Smaller description of item
  * `subtitle` (Optional) - Additional subtitle for URL on specific instances
  * `url` - link for the item
  * `active` (Optional) - if item is active it will be marked by check icon

Examples:

```ruby
[
    { title: "GoMonthly", proposition: "Subscription management", url: ENV["GOMONTHLY_URL"] },
    { title: "Dispatch", proposition: "Track your business's progress", url: "/", active: true },
    { proposition: "Dispatch is part of the Firmhouse platform", url: "https://firmhouse.com/" }
]
```

* `product` (String) is string with lowercase name of current product. Use for correct product icon.

Examples:
`dispatch` or `gomonthly`