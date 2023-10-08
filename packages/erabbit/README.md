<p align="center">
  <img width="200px" src="https://erabbit-dev.github.io/erabbit-ui/logo.png">
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/erabbit">
    <img src="https://img.shields.io/npm/v/erabbit.svg" />
  </a>
  <a href="https://github.com/erabbit-dev/erabbit">
    <img src="https://img.shields.io/badge/node-%20%3E%3D%2016-47c219" />
  </a>
  <a href="https://npmcharts.com/compare/erabbit?minimal=true">
    <img src="https://img.shields.io/npm/dm/erabbit.svg" />
  </a>
  <a href="https://codecov.io/gh/erabbit-dev/erabbit-ui">
    <img src="https://codecov.io/gh/erabbit-dev/erabbit-ui/branch/main/graph/badge.svg?token=BKSBO2GLZI"/>
  </a>
  <br>
</p>

## Erabbit UI

A Vue 3 based component library for erabbit web applications

## Components List

| Name              | Completed | Description               |
| ----------------- | --------- | ------------------------- |
| `Area`            | ✅        | Area Component            |
| `Button`          | ✅        | Button Component          |
| `Breadcrumb`      | ✅        | Breadcrumb Component      |
| `Carousel`        | ✅        | Carousel Component        |
| `Checkbox`        | ✅        | Checkbox Component        |
| `Confirm`         | ✅        | Confirm Component         |
| `showConfirm`     | ✅        | showConfirm Function      |
| `Dialog`          | ❎        | Dialog Component          |
| `showDialog`      | ❎        | showDialog Function       |
| `Icon`            | ✅        | Icon Component            |
| `Message`         | ❎        | Message Component         |
| `showMessage`     | ❎        | showMessage Function      |
| `ImageView`       | ❎        | ImageView Component       |
| `InfiniteLoading` | ❎        | InfiniteLoading Component |
| `More`            | ❎        | More Component            |
| `NumberBox`       | ❎        | NumberBox Component       |
| `Pagination`      | ❎        | Pagination Component      |
| `Skeleton`        | ❎        | Skeleton Component        |
| `Sku`             | ❎        | Sku Component             |
| `Step`            | ✅        | Step Component            |
| `Tab`             | ❎        | Tab Component             |

## All Contributors

Thanks to the following friends for their contributions to ErabbitUI:

<a href="https://github.com/erabbit-dev/erabbit-ui/graphs/contributors">
  <img src="https://opencollective.com/erabbit/contributors.svg?width=890&button=false" alt="contributors">
</a>

## All Contributors

Thanks to the following friends for their contributions to ErabbitUI:

<a href="https://github.com/erabbit-dev/erabbit-ui/graphs/contributors">
  <img src="https://opencollective.com/erabbit/contributors.svg?width=890&button=false" alt="contributors">
</a>

## Contribution Guide

- Fork the main repository. If you have already forked, please synchronize the latest code from the main repository.

- Follow the steps below to develop ErabbitUI components locally.

```sh
# Clone repository
git clone git@github.com:you-repo-name/erabbit-ui.git

# Install dependencies
pnpm i

# Build builtin dependencies
pnpm build-all

# Start development
pnpm dev
```

## Directory Structure

```
root
└─ packages
   ├─ erabbit                  # Component library
   ├─ erabbit-cli              # Scaffolding
   ├─ erabbit-icons            # Icon library
   ├─ erabbit-auto-import      # Composition API
   ├─ erabbit-eslint-config    # Eslint
   ├─ playground               # Play Demo
   └─ docs                     # Document

```
