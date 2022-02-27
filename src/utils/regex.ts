/* eslint-disable max-len, no-control-regex */

// RFC 5322
export const emailExplanation = 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.'
export const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const loginExplanation = 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
export const loginRegex = /^(?=.*[A-Za-z])[-_A-Za-z\d]{3,20}$/;
export const passwordExplanation = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.'
export const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
export const phoneExplanation = 'От 10 до 15 символов, состоит из цифр, может начинается с плюса.'
export const phoneRegex = /^\+?[0-9]{10,15}$/;
export const nameExplanation = 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).'
export const nameRegex = /(^[A-Z][a-z-]*[a-z]$)|(^[А-ЯЁ][а-яё-]*[а-яё]$)/;
