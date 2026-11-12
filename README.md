# Simulador bancário com TypeScript

Projeto de estudo de orientação a objetos com diferentes tipos de conta e regras de depósito, saque e empréstimo.

## Funcionalidades

- Classe base de conta e especializações Admin, Company e Premium.
- Operações condicionadas ao estado e ao tipo da conta.
- Cenários de demonstração executados no terminal.

## Tecnologias

Node.js, TypeScript e tsx.

## Executar localmente

```bash
git clone https://github.com/chruscinskiDiego/ts-poo-bank-simulator.git
cd ts-poo-bank-simulator
npm ci
npm start
```

## Organização

As classes estão em `src/class/`; `src/app.ts` reúne os cenários de uso.

## Escopo e limitações

Simulação didática, com dados em memória. Os cenários do terminal não substituem uma suíte de testes automatizados e não representam operações bancárias reais.

