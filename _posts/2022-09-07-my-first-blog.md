---
layout: post
site: blog
title:  "Why did I create a programing language?"
date:   2022-09-07 20:27:24 +0200
categories: kochanowski projects
permalink: "/blog/kochanowski/"
---

Hello everyone, this is my first blog post ever made. I don't know how to do that, so...

## What is Kochanowski

Kochanowski is a fun project that is somewhat different from normal programming languages: The syntax is based on the Polish language. Also to make it even harder you need to follow some rules:

* You need to begin a sentence with an upper letter and end it with a dot.
* Variables need to start from the upper case.
* You can't use symbols like `+`, `*` or `/`. You need to define it by words e.g. `2 plus 4`.

The syntax is just translated JavaScript, which also supports `import` and `export`. That means that you can make a functioning Express.js website, or even a discord bot using Kochanowski.

---

Example Kochanowski Express.js application

<!-- Idk why but "py" looks the best -->
```py
Załącz express z biblioteki "express".
Stałej App przypisz wartość express().
Stałej Port przypisz wartość 3000.

App z upchniętym get("/" oraz (Req oraz Res) => {
  Res z upchniętym  send("Express + Kochanowski").
}).

App z upchniętym  listen(Port oraz () => {
  Drukuj(`Przykładowa aplikacja słucha na porcie ${Port}`).
}).
```

---

The name Kochanowski comes from a Polish poet named "Jan Kochanowski"[^0], the only reason I know about his existence is school.

## Why did I make it

There are several reasons why I created a meme programming language. The main reason is to make fun of Matura Exams[^1], where you can only choose 4 programming languages[^2]:

* Python
* C++
* Java
* Pascal[^3]

Other reasons are just memes (e.g. having fun in CS classes). Now you can write **Polish** code, instead of En*lish (🤮).

---

### Footnotes

[^0]: [More information about Kochanowski (the poet)](https://en.wikipedia.org/wiki/Jan_Kochanowski)
[^1]: Matura exam (Exam of maturity) is a final exam that you take at the end of "Liceum" and "Technikum" (around 19yo).
[^2]: [Announcement about CS Matura Exam](https://cke.gov.pl/images/_KOMUNIKATY/20220819%20EM%202023%20Komunikat%20o%20egzaminie%20z%20informatyki.pdf)
[^3]: After 2024 Pascal won't be available on Matura exam