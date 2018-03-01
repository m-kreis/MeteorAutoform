# MeteorAutoform

This repository is used to demonstrate a problem with the aldeed:autoform package when using autosaveOnKeyup on a form.

Steps to reproduce:
l. clone this repository
l. `cd MeteorAutoform`
l. `meteor npm install --save simpl-schema`
l. `meteor run`
l. add a person
l. edit person

As you can see the input field looses focus while typing.
