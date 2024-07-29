---
title: 'FAQ: JavaScript'
publishDate: 2020-02-03
image:
  src: ./javascript.jpg
  alt: A laptop screen with JavaScript code on it
---

## Who created JavaScript?

JavaScript was created in 1995 by Brendan Eich. I’m sure at some point you’ve heard it was created in only 10 days, but that’s not exactly true. JavaScript was originally named Mocha, and it was Mocha that Eich developed in 10 days (still an impressive feat, no doubt). Mocha was quickly renamed LiveScript and then again to JavaScript. The language as we know it today has benefited from over 20 years of improvement.

## Why is it called JavaScript?

Aside from being syntactically similar to Java, the idea - accordion to Brendan Eich - was to make it a complementary scripting language to go with Java. For this reason, in addition to making the langauge attractive to Java developers, it made sense to include 'Java' in the name. That said, don't let the names mislead you - Java and JavaScript are still entirely different languages.

You may also see ECMAScript used interchangably with JavaScript. While there isn't really any harm in doing so, keep in mind that EMCAScript is a language specification while JavaScript is an implementation of that specification.

## What is JavaScript?

If HTML is the noun and CSS is the adjective, JavaScript is the verb. In other words, JavaScript allows for interactivity. Without it, websites would be boring, static pages of information. Put simply, JavaScript brings the web to life.

Now for the more technical definition: JavaScript is a dynamically typed, single threaded, scripting language.

Um, what?

Let’s break that down:

- **Dynamically typed:** variables are not bound to a data type. For example, a variable originally set to a string can later be changed to a number. That is because typing is associated with the value the variable assumes rather than the variable itself.

- **Single threaded:** code is executed in order and cannot move on to the next piece of code before the current code is finished. This has more to do with the environment/runtime (ex. a browser) than the language itself.

- **Scripting language:** there’s no compilation step in the execution of code. The JS engine reads, interprets, and runs your code on the fly. If you care to learn more about compiled vs. interpreted languages, I wrote about it [here](#).

## Is everything really an object in JavaScript?

No! This gets thrown around all the time but it simply isn’t true. In total, JavaScript has nine separate types: `String, Boolean, Number, Null, Undefined, BigInt, Symbol, Object, Function`. These nine can be broken up into two categories: Primitives and Objects. In the object category, we have objects (obviously), functions, and arrays. Primitives are everything else. Clearly, if everything was an object there would be no need for the primitives category.

Perhaps part of what perpetuates this misconception are JavaScript's primitive wrappers. With the exception of null and undefined, all primitive values have object equivalents that wrap around the primitive values. Take the following code, for example:

```javascript
'javascript'.length; // 10
'javascript'.toUpperCase(); // "JAVASCRIPT"
```

It's a little strange that these work. If strings aren't objects, where are the `length` and `toUpperCase` methods coming from? Without going into too much detail, essentially the JavaScript engine automatically wraps up the primitive (in this case, the string) in its object for us so we can have access to it's prototype. This wrapper, however, is only temporary. As soon as a value is returned, the wrapper is disposed.

## What is a JavaScript engine?

It may not seem like it, but computers are dumb. They understand 1s and 0s (binary), and that’s it. Every programming language that exists today is just an abstraction of the lower level machine language that computers understand.

With that in mind, the JavaScript engine is a program that parses (reads) our code and compiles (converts) it to machine language.

Common JavaScript engines include Google’s V8, which is used by Chrome, Opera and Node, and SpiderMonkey, which is used by FireFox.

<div class="callout warn">
  If you evaluate <code>typeof null</code> in the console, you’ll get object. As we just learned, null is a primitive, not an object – so what’s going on? This is simply a bug in the language and it’s too late now to fix it.
</div>

\*be sure to check back on this post from time to time as I'll continue to add to it
