# TypeScript bank account simulator

Object-oriented programming exercise with account types and rules for deposits, withdrawals and loans.

## Features

- Base account class with Admin, Company and Premium specializations.
- Operations that depend on account state and type.
- Demonstration scenarios executed in the terminal.

## Technologies

Node.js, TypeScript and tsx.

## Run locally

```bash
git clone https://github.com/chruscinskiDiego/ts-poo-bank-simulator.git
cd ts-poo-bank-simulator
npm ci
npm start
```

## Structure

Classes are in `src/class/`; `src/app.ts` contains usage scenarios.

## Scope and limitations

A teaching simulation with in-memory data. Terminal scenarios are not an automated test suite and do not represent real banking operations.
