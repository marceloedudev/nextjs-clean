# NextJS Clean Architecture

> ### 📚 Requirements

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/) (optional)
- [Docker-compose](https://docs.docker.com/compose/) (optional)

> ### ⚙️ Technologies

- NextJS
- TypeScript
- Docker
- Docker Compose
- Jest
- Cypress
- Eslint
- Husky

> ### 🚀 Features

- TDD / BDD
- React Hooks
- Lint Staged
- Emotion.js
- Unit Tests
- E2E Tests
- Contract Tests
- Clean Architecture / Design Patterns

> ### 💻 Install packages

```bash
# Install
$ pnpm i
```

> ### 💻 Running without docker

```bash
# Running in http services
$ pnpm dev

# Running in memory services
$ pnpm dev:memory
```

> ### 💻 Running with docker

```bash
# Running
$ docker compose up -d --build

# Running tests
$ docker compose exec storefront sh
```

Address: http://localhost:3000

> ### 💻 Tests commands

```bash
# Unit tests
$ pnpm test:unit

# Watch unit tests
$ pnpm test:unit:watch

# Unit tests with coverage
$ pnpm test:coverage

# E2E Tests
$ pnpm test:cypress:ci

# Contract tests
$ pnpm test:contract

```

> ### Author

<table>
  <tr>
    <td align="left">
      <a href="https://github.com/marceloedudev">
        <img src="https://avatars.githubusercontent.com/u/20103762" width="100px" /><br>
        <sub>
          <b>Marcelo Eduardo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/marcelo-edu/)](https://www.linkedin.com/in/marcelo-edu/)
