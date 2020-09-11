# Web Components

This is the support repository for my book about Web Components.

## About the Book

If you came across this page by chance and have not heard of the book, I'll give you some info where to get.

> The book is for free available as EPUB, MOBI, PDF, and HTML on LeanPub
> There is a printed version available later in 2020 from Amazon (vie KDP) for the lowest possible pricing

[Get the book here for free](https://leanpub.com/webcomponentsnyaf).

## The Mission

I'm on a mission: **We don't need fat frameworks for frontend development.**

Keep your frontend small. Keep it simple. Keep it fast. Follow the 50+50 rule.

The reason there is still a need to load some code from others is to avoid repetitive tasks. But what you need for an app depends on the requirements. Some parts are always required, some rarely. In the end it's just a bit of library code. I call this "thin libraries". Small and smart helpers. Not more. I would say that a thin library is by definition everything below 50KB compressed code. Everything else is your business code.

Let the tooling be extensive like hell. Use plug-ins and editors and whatever. But when it comes to the final delivery, the final package, the code send to the browser, than keep it small. That's the key to success. Performance is a feature. Whether it's mobile or desktop, progressive web app or Electron on a desktop. The maximum time to load, parse, and show your front page is - zero. At least it should feel like zero. To get this you need a load time of less than 50 msec.

That's the 50+50 rule. 50 KB library code, 50ms load time. Or less. Never more.

## The Library

Just to prove that's possible I have written such a thin library called **@nyaf**. It's available from **npm** and on Github. Feel free to check it out.

* [@nyaf/lib](https://www.npmjs.com/package/@nyaf/lib)
* [@nyaf/forms](https://www.npmjs.com/package/@nyaf/forms)
* [@nyaf/store](https://www.npmjs.com/package/@nyaf/store)

* [@nyaf Github repository (mono repo)](https://github.com/joergkrause/nyaf)

## Article About Thin Libraries

> The full article is available on Medium

Does your web app need a front-end framework?

You’ve likely heard about front-end frameworks. Names like React, Vue, and Angular abound in tutorials and developer debates. I personally know a good bunch of developers who asked me what framework shall they use. I'm giving workshops and teach developers full stack, frontend and backend, using mostly TypeScript/JavaScript and sometimes C#/.NET Core in the backend. Once in while people have a background in desktop environments. Whatever the motivation was to dig into the frontend realm, the questions are almost the same: Which framework. A whole industry is working on these frameworks and frequently the debates are about why this or why not the other, what's the newest kid around the block, and what's next. There is an unbelievable amount of articles available that compares frameworks, titles like "the best 8 frameworks in 2020" (replace 8 with any number and 2020 with any year; you'll find every possible combination for sure) are going into Hundreds. But rarely even skilled developers ask: "So I really need a framework?"

## A Look Back

Let's look into the history of frameworks to understand the implications of this question. In the beginning we had just a few libraries that contained code you needed frequently. The first really successful library was (and still is) [jQuery](https://jquery.com/) (appeared around 2006) and it came with just a handful useful things. A selector library which wasn't originally developed by the famous inventor of jQuery, [John Resig](https://en.wikipedia.org/wiki/John_Resig), called [Sizzle](https://github.com/jquery/sizzle/wiki). An astonishing animation module that made these impressive demos through which the library got well known. And an abstraction layer for common browser features, such as Ajax, that leveled the different APIs the second [browser war](https://en.wikipedia.org/wiki/Browser_wars) produced. That's all we needed.

Then a new app architecture appeared -- the single page application (SPA). The traditional way to work with JavaScript in the browser required a tremendous amount of work to handle all the stuff you need for a proper SPA design. Mostly this consists of router, the dynamic loading of components, the ability to pack several parts of an app in one package. Then application started to grow. Quickly and massive. The raise of web applications started. Instead of a home page with few features and a contact forms whole applications in the browser where feasible. One of the first answers to this demand was AngularJS, around 2010. With the support by Google and and a real need it faced a quick adoption and a built a huge community. It was the first globally used fat framework. The idea was to extend the weak JavaScript with a lot of features almost everybody needs. One of the outstanding features of React -- Facebooks answer to Angular -- was the Shadow DOM. Instead of changes in the DOM that require the browser to render again and again, you could operate on a virtual DOM and replace a fragment of HTML later, in one single step and hence with just one render process. More speed, easier development, shorter life cycles. What a wonderful world. But Facebook is a unbelievable complex application. The need for a more professional architecture was strong. So they developed the Flux architecture. The single source of truth was born and a new library called Redux (in fact, Redux was one of many, but the most successful so far).

But then things got a little decoupled. Soon developers saw that the way Angular works was just one possible style. So others started projects with different architectures, different ways to create, compile, or pack. Another famous framework was born, and another one.

What's not so well known among many developers is that the second browser war ended 2017. Chrome won, whether you like or not. But that's not the point. The point is that the browser war forced the browser manufacturers to implement an amazing number of features, adopt to standards, and push hard for market shares. The real impact on the market is in my option the growth of the HTML 5 API, the development cycle of JavaScript, and the expansion of CSS. All these three key ingredients of a modern browser app are multiple levels above what we had in 2006. And still levels above what we had in 2010.

And we write the year 2020. So I ask again, but now a bit different: "Can you imagine, that the browser's API can replace any framework?"

## Three Things to Learn

Let's look into this step by step.

First, the famous selector library Sizzle can indeed to almost 100% replaced by the native API. Almost, yes, there are still a few exotic functions Sizzle provides but the advantage of getting rid of the whole library and speed of native code is unbeatable. The different AJAX APIs are no longer there, there is just one API all modern browsers understand. And CSS 3 came with such an astonishing number of animations and transitions that the need for an animation library no longer exists. As a result, you don't need jQuery anymore.

Second, let's have a look onto modern fat frameworks. The Shadow DOM that gave aus React and later the next incarnation of Angular is nowadays part of the native browser API. The component model that forms the fundamental pattern of almost all frameworks is available as Web Components natively. It's exactly the same as with jQuery. The browser manufacturers are catching up with the demand and provide fast, easy to use, and modern APIs. Not that it's all perfect and some method signatures look clunky, but the real reason behind some complexity is that they support almost all scenarios and not just the one a framework developer has in mind. Not all apps have 2 billion users to support, haven't they? As a result of this development, I think you need a fat framework anymore, not in 2020.

Third, let's look into how the code works in such frameworks. It's a harder to grasp, though. Apart from what I already explained there are a few features most of you love. The first that I was really missing after throwing Angular away was the ability to use data binding. And the integrated forms validation. And here we don't see any API, directly adaptable, do we?

## Understand your World

Browsers provide actually some API functions that you can perfectly use to replace such features. Very prominent are Proxy classes and the MutationObserver. Proxies supervise objects and report changes. If the object is changed due to incoming data (nativ API: fetch) you can refresh the shadow DOM (native API: web components). The MutationObserver monitors changes in the DOM (virtual or not) and reports that there was a change. All what the frameworks provide on top of this a smart template language with some syntactic gimmicks. But for what price?

All frameworks have a problem due to their complexity. To be maintainable and have a stable life cycle, they must be decoupled from any native API. That leads to an abstraction layer. It's good to see in React, where each HTML element is represented internally as a JavaScript class. It can be seen in Angular, where a complete system that consists of a compiler and a template runtime exists. From the view point of a framework developer it's logical and makes sense. As a business developer I see hundreds or thousands of KiloBytes of library code that I have to deliver, too. I see a set of complex tools, helper apps, and extensions. A lot effort for few valuables.

Now, the one of another React fanboy might be very happy with JSX. One can love it or not, this HTML in JavaScript thing. If I want to use it, do I really need to use React, too? In reality JSX is a feature that's quite common. The implementation is React, though (these guys over there have invented it).

```
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Header</p>
        <p>Content</p>
        <p>Footer</p>
      </div>
    );
  }
}
```

But, you can translate JSX with Babel, TypeScript, and maybe half a Dozen other tools. JSX without React is not an issue for those who really want it. Sure, a few lines of code are necessary to get it running. But it's a lot, really a lot less than the whole React library.

## The Raise of Thin Libraries

Thin Libraries is nothing new, we had few before. The first and well known was jQuery. The reason there is still a need to load some code from others is to avoid repetitive tasks. As long as we work with general purpose languages, such as JavaScript, we need to add infrastructure code. Keywords named 'class' or 'function' have no specific meaning. You need code to explain. What exactly is a class or a function?

Languages that serve a distinct purpose are domain specific. If you create a component, why not writing 'component' as a keyword. How much code you can spare with such a specialized language? Thin libraries take a forseeable future in advance by adding typical helper functions. They minimize the amount of code you have to write. Thin libraries are small and smart helpers. Not more. I would say that a thin library is by definition everything below 50KB compressed code. Everything else is your business code. Let the tooling be extensive like hell. Use plug-ins and editors and whatever. But when it comes to the final delivery, the final package, the code send to the browser, than keep it small. That's the key to success. Performance is a feature. Whether it's mobile or desktop, progressive web app or Electron on a desktop. The maximum time to load, parse, and show your front page is - zero. At least it should feel like zero. To get this you need a load time of less than 50 msec. That's the amount a user feels as close to zero.

That's the 50+50 rule. 50 KB library code, 50ms load time. Or less. Never more.

## Not Yet Another Framework

For using web comnponents I have written such a library and divided into three parts. I really wanted to keep the code below these boundaries.

* Base Library and JSX: 36 KB, 11 KB zipped
* Forms and Validation: 20 KB, 5 KB zipped
* Flux Store: 5 KB , 2 KB zipped

The final package is 34 KB only. And it has everything you need for a single page app. It's a template runtime based on JSX with some nice features to deal with components. It has a router. It has binding and validation. It's type safe. And it has a Flux based store. It's developed in and for TypeScript.

**And there are no dependencies you have to load, absolutely none.**

But how is this possible? I have just read my own "Three tThings to Learn" from the beginning of this article. I use whatever the native API of modern browsers delivers. No abstraction, no additional functions you can only add with huge effort. Modern means here that elder browsers will not work and there are no polyfills, too. What the native API provides is all you can use. I think that a developer in the web world can be expected to learn those APIs. You spare your time learning another syntax and spend a little time on MDN (Mozilla Developer Network) instead.

If you just want to see the outcome of my work have a look at Github or directly on npm. The name **@nyaf** means "Not Yet Another Framework", because we don't want to have fat frameworks anymore nowadays, do we?