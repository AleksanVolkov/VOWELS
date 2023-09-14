const template = ['а', 'у' ,'о' ,'и', 'э' ,'ы', 'я', 'ю' ,'е', 'ё','А', 'У' ,'О' ,'И', 'Э' ,'Ы', 'Я', 'Ю' ,'Е', 'Ё'];
const enter = prompt('введите любую фразу и я посчитаю количество гласных в ней','');

function VOWELS(phrases){
  
let counter={};

for(let w=0;w<template.length;w++){
  const key=template[w]
  counter[key]=0;
  counter.total=0;
}

for(let i=0;i<phrases.length;i++){
  const letter =phrases[i]
  if(letter in counter){
    counter[letter]++;
    counter.total++;
  }
  
  

}


console.log(counter.total)
alert(`в вашей фразе ${counter.total} гласных букв`)
}

VOWELS(enter)