https://medium.com/@rogerdudler/front-end-technology-stack-survey-2014-809f7a8c92f3

https://hackernoon.com/i-finally-understand-static-vs-dynamic-typing-and-you-will-too-ad0c2bd0acc7

Constructor : https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420

in the above link checkout for links to prototype and inheritance explaination.



Simply put it this way: in a statically typed language variables' types are static, meaning once you set a variable to a type, you cannot change it. That is because typing is associated with the variable rather than the value it refers to.

For example in Java:

String str = "Hello";  //variable str statically typed as string
str = 5;               //would throw an error since str is supposed to be a string only
Where on the other hand: in a dynamically typed language variables' types are dynamic, meaning after you set a variable to a type, you CAN change it. That is because typing is associated with the value it assumes rather than the variable itself.

For example in Python:

str = "Hello" # variable str is linked to a string value
str = 5       # now it is linked to an integer value; perfectly OK
So, it is best to think of variables in dynamically typed languages as just generic pointers to typed values.

To sum up, type describes (or should have described) the variables in the language rather than the language itself. It could have been better used as a language with statically typed variables versus a language with dynamically typed variables IMHO.

Statically typed languages are generally compiled languages, thus, the compilers check the types (make perfect sense right? as types are not allowed to be changed later on at run time).

Dynamically typed languages are generally interpreted, thus type checking (if any) happens at run time when they are used. This of course brings some performance cost, and is one of the reasons dynamic languages (e.g., python, ruby, php) do not scale as good as the typed ones (java, c#, etc.). From another perspective, statically typed languages have more of a start-up cost: makes you usually write more code, harder code. But that pays later off.

The good thing is both sides are borrowing features from the other side. Typed languages are incorporating more dynamic features, e.g., generics and dynamic libraries in c#, and dynamic languages are including more type checking, e.g., type annotations in python, or HACK variant of PHP, which are usually not core to the language and usable on demand.

When it comes to technology selection, neither side has an intrinsic superiority over the other. It is just a matter of preference whether you want more control to begin with or flexibility. just pick the right tool for the job, and make sure to check what is available in terms of the opposite before considering a switch.

shareimprove this answer
edited May 5 '17 at 14:10
answered Nov 30 '15 at 17:28

mehmet
3,41821833
7
This makes a lot of sense. I think it explains at least the reasoning behind the names much better than other answers here. – JamEngulfer Feb 24 '16 at 11:37 
According to this reference Python is both a statically typed and dynamically typed language: wiki.python.org/moin/… Does anyone know why? – modulitos Apr 25 '16 at 5:12
1
Lucas, To the contrary the document keeps iterating that Python is both strongly and dynamically typed. Where did you see that? Can you quote? – mehmet Apr 26 '16 at 20:00
2
I think this answer best communicates the the concept in the simplest fashion. A lot of other answers try to abstractly describe the concept, but fail at some detail. I would rather see this answer at the top of the list. – Hawkeye Feb 28 '17 at 23:39
3
Most other answers created more questions in my mind. This one cleared all of them. This answer really should be at the top IMHO – Hami Torun Apr 29 '17 at 8:05
