# JavaScript.md

## Justification for Using Svelte

If you see commits, firstly i developed it on Vue.js, but decided to redo it fully on svelte. The reasons are:

- It setups automatically testing packages, linting and other stuff
- It still allows to use DRY principle in html - you can have templates and reuse them like in Vue
- We actually studied it in Innopolis in Frontend elective course
- THE TESTS WORK. FINALLY. Installing test and setuping other frameworks are so painful. I spend 3 hours integrating tests, as it just didn't work with Vue. Node Js and React were much harder to setup. Svelte took only half an hour.

## Implementation of Best Practices and Coding Standards

- **Gitignore**: The same: I've added a gitignore file to ignore the virtual environment and the cache. Used default Vue gitignore for it.
- **Tests**: Created some unit tests so you could check if application works.
- **Linter**: Checked the quality of code by `eslint` linter and markdown linter for vscode.
- **Code**: added types for some variables, as js can be unpredictable without them

## Testing

To run unit testing, run the following command:

> `npm run test`

They test availability of site, and if the displayed time is correct.

- **Coverage**: Tests cover all functions of the application - they test both time and availability of the page.
- **Assertive Testing**: Tests use assertions to ensure that the responses from the API are as expected. This includes checking the status of page if it is rendered and the content of the page.
- **Test Separation**: Keeping tests separate from application code.
- **Arrange-Act-Assert pattern**: Each test uses AAA pattern: Arrange (set up the test environment), Act (perform the action being tested), and Assert (verify the expected outcome).