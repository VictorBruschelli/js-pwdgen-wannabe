'use strict';

const valoreDaAggiungere = '21';
const nomeUtente = prompt('Inserisci il tuo nome');
const cognomeUtente = prompt('Inserisci il tuo cognome');
const colorePreferitoUtente = prompt('Inserisci il tuo colore preferito');

const password =
  nomeUtente + cognomeUtente + colorePreferitoUtente + valoreDaAggiungere;

const passwordTemplateLiteral = `La tua password è ${password}`;

console.log(passwordTemplateLiteral);