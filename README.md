# MeteorAutoform

This repository is used to demonstrate a problem with the aldeed:autoform package when using autosaveOnKeyup on a form.

Steps to reproduce:
1. clone this repository
2. `cd MeteorAutoform`
3. `meteor npm install --save simpl-schema`
4. `meteor run`
5. add a person
6. edit person

As you can see the input field looses focus while typing.
