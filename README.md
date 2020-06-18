# Grozinger Partner

*Static single page website for law office, written in react + typescript*

<img height="200" src="title.svg?sanitize=true">

[![Build status](https://github.com/qdm12/grozinger-partner/workflows/Buildx%20latest/badge.svg)](https://github.com/qdm12/grozinger-partner/actions?query=workflow%3A%22Buildx+latest%22)

[![GitHub last commit](https://img.shields.io/github/last-commit/qdm12/grozinger-partner.svg)](https://github.com/qdm12/grozinger-partner/issues)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/y/qdm12/grozinger-partner.svg)](https://github.com/qdm12/grozinger-partner/issues)
[![GitHub issues](https://img.shields.io/github/issues/qdm12/grozinger-partner.svg)](https://github.com/qdm12/grozinger-partner/issues)

## Features

- Fancy pencil drawings with nice opacity transitions
- Translations in english, french and german

## Setup

1. Use the following command:

    ```sh
    docker run -d -p 8080:8080/tcp qmcgaw/grozinger-partner
    ```

    You can also use [docker-compose.yml](https://github.com/qdm12/grozinger-partner/blob/master/docker-compose.yml) with:

    ```sh
    docker-compose up -d
    ```

### Environment variables

| Environment variable | Default | Possible values | Description |
| --- | --- | --- | --- |
|  |  |  |  |

## Development

1. Setup your environment

    <details><summary>Using VSCode and Docker</summary><p>

    1. Install [Docker](https://docs.docker.com/install/)
       - On Windows, share a drive with Docker Desktop and have the project on that partition
       - On OSX, share your project directory with Docker Desktop
    1. With [Visual Studio Code](https://code.visualstudio.com/download), install the [remote containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
    1. In Visual Studio Code, press on `F1` and select `Remote-Containers: Open Folder in Container...`
    1. Your dev environment is ready to go!... and it's running in a container :+1:

    </p></details>

    <details><summary>Locally</summary><p>

    Install [Nodejs](https://nodejs.org/en/download/) and [Docker](https://www.docker.com/products/docker-desktop), with eventually [yarn](https://classic.yarnpkg.com/en/docs/install/)

    </p></details>

1. Commands available:

    ```sh
    # Starts the development server with ts-node
    yarn start
    # Test the code
    yarn test
    # Lint the code
    yarn lint
    # Build the app for production
    yarn build
    # Build the Docker image
    docker build -t qmcgaw/grozinger-partner .
    ```

## TODOs

- [ ] Smooth scrolling
- [ ] Missing translations
- [ ] Unit tests
