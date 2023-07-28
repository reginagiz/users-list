## About The App

Необходимо реализовать интерфейс поиска пользователей.
Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} (документация https://developer.github.com/v3/search/#search-users)

Требования:

- Поиск: по логину.
- Сортировка: по кол-ву репозиториев (возрастанию/убыванию)
- Использовать React.
- Пагинация.
- При клике на элемент - открываются подробности (как и какие на усмотрение разработчика).
- Реализовать 3 юнит-теста на функционал.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
