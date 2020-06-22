# RIVADatabaseOps - Firestore & Storage Rules

The ruleset safeguarding RIVAlumni's sensitive information database.

## Installation

Use [Git](https://git-scm.com/) to download the source code.

```bash
git clone https://github.com/RIVAlumni/RIVADatabaseOps-Rules.git
```

And use [Firebase Tools](https://www.npmjs.com/package/firebase-tools) to initialize the Firestore & Storage emulators.

```bash
npm i -g firebase-tools@latest
firebase init firestore
firebase init storage
```

## Usage

### Development Testing

1. Run `npm run test:watch`
2. Write your tests.
3. Check for any errors.

### Production Testing

1. Run `npm test`
2. Open `ui-report/index.html`
3. Read the entire report and ensure that no tests have failed.

## Support

**Note: This project is intended to only be used by RIVAlumni**

Should you have any difficulties, please create a [new issue](https://github.com/RIVAlumni/RIVADatabaseOps-Rules/issues/new) and describe clearly the issue with reproducible steps.

## Contributing

**Note: Any pull requests that change the `firestore` / `storage` ruleset will be rejected. Should you feel a need to change the ruleset, please create a new issue.**

Pull requests are welcome. For major changes, please [open an issue](https://github.com/RIVAlumni/RIVADatabaseOps-Rules/issues/new) first to discuss what you would like to change.

## Authors

- [Aaron Teo](https://github.com/taronaeo) — RIVAlumni

## License

[MIT](https://choosealicense.com/licenses/mit/)
