---
title: 'Compiled vs Interpreted Languages'
publishDate: 2020-01-31
image:
  src: ./binary.jpg
  alt: zeros and ones
---

As you may already know, **computers only understand machine language** AKA binary AKA 1’s and 0’s. All programming languages are abstractions of that lower level code that make it easier and faster for us to write programs. Since computers don’t understand Java, or Python, or JavaScript, **our source code needs to be converted to machine code**. That’s where compiling and interpreting comes in. In short, these are two different ways of achieving the same outcome: providing our computer with code it understands.

Let’s say you write a program on your computer that you want me to run on mine. If you write the program in a **compiled language (C, C++, Objective-C)**, your code will be run through a compiler which will convert it to machine code and spit out a separate, “executable” file. Now, you can simply send me that file and I’ll be able to run it on my computer because it’s already in the language my computer understands. (For the sake of simplicity, we've assumed our computers are <a href="https://www.computerworld.com/article/2579386/binary-compatibility.html" target="_blank">binary compatible</a> but this won't always be the case).

If instead you wrote the program in an **interpreted language (PHP, JavaScript)**, there’s no longer a compile step. Instead, you just send me a copy of your source code. Now, in order for me to run your program on my computer, I will need an interpreter. An interpreter will step through your code, line by line, and process it on the fly. You can see this process in action by going to virtually any website. Any JavaScript files returned to you by the server are immediately interpreted by your browser’s JavaScript engine. If not for this crucial step, our computer wouldn’t know what to make of those files.

So which one is better? Neither. As I mentioned before, they’re simply two different ways of achieving the same result. **Here’s a quick summary of their pros and cons:**

## Compiled

<div class="callout success">
<strong>PROS:</strong> ready to run; often faster; source code remains private
</div>

<div class="callout error">
<strong>CONS:</strong> extra step slows dev/testing; not cross-platform (ex: PC-compiled code won’t work on a Mac)
</div>

## Interpreted

<div class="callout success">
<strong>PROS:</strong> cross-platform; faster dev/testing
</div>

<div class="callout error">
<strong>CONS:</strong> interpreter is required; often slower; source code is public
</div>

**But wait, there’s more!**

What if I told you **there’s also a third option**, used by languages like Java, C#, and Python?

If you hadn’t already guessed, this approach is a hybrid of the other two. Essentially, your source code will be compiled to a happy medium. That is, enough to make the interpreter’s job a little easier, but not so far as to prevent it from working across multiple platforms.

## Final Thoughts

If a lot of this was new to you, it’s not surprising. It’s rare and often unadvisable to choose a language solely based on how it gets your source code to machine code. Instead, consider all of this as "nice to know" and continue letting your end goal inform your language choice.
