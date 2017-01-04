Politely asks about adding descriptions in GraphQL

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yard add dev eslint
```

Next, install `eslint-plugin-graphql-descriptions`:

```
$ yarn add dev eslint-plugin-graphql-descriptions
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-graphql-descriptions` globally.

## Usage

Add `graphql-descriptions` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "graphql-descriptions"
    ]
}
```

## Supported Rules

* Ensure that all `GraphQLObjectType` objects have a description field.

```js
// Fails
const BidderType = new GraphQLObjectType({
  name: 'Bidder',
  fields: () => ({}),
});

// Passes
const BidderType = new GraphQLObjectType({
  name: 'Bidder',
  description: 'A user with bids'
  fields: () => ({}),
});
```
