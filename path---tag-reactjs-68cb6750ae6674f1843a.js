webpackJsonp([0xa820bbfd9e29],{"./node_modules/json-loader/index.js!./.cache/json/tag-reactjs.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"In this post, I will talk about static site generators. How they have evolved and why I switched from a  Ghost  powered site to  Gatsby.js , a modern static site generator. Static site generators as we know them Jekyll ,  Hexo ,  Hugo . They do one…",html:'<p>In this post, I will talk about static site generators. How they have evolved and why I switched from a <a href="https://ghost.org">Ghost</a> powered site to <a href="https://gatsbyjs.org">Gatsby.js</a>, a modern static site generator.</p>\n<h2 id="static-site-generators-as-we-know-them"><a href="#static-site-generators-as-we-know-them" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Static site generators as we know them</h2>\n<p><a href="http://jekyllrb.com">Jekyll</a>, <a href="https://hexo.io">Hexo</a>, <a href="https://gohugo.io/">Hugo</a>. They do one thing and they do it well. I\'ve built a ton of sites using Jekyll hosted either on GitHub either somewhere else. They all work pretty much the same way:</p>\n<ul>\n<li>You describe your content in some common templating language (<a href="pugjs.org">Pug</a>, <a href="http://handlebarsjs.com">Handlebars</a>, etc)</li>\n<li>While in development, start a local web server and add file "watchers" that will listen for content changes and re-render the site</li>\n<li>Finally, you render the whole site in static HTML and deploy. The generator will combine your files and produce a well formed HTML content.</li>\n</ul>\n<p>A caveat here is that you have to keep the client side logic separated from the backend. Much like in an architecture where Wordpress is involved. So, pretty much nothing is changing. The difference from having a cached version of Wordpress and content generated with Jekyll is none.</p>\n<h2 id="enter-the-new-world-order"><a href="#enter-the-new-world-order" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enter the new world order</h2>\n<p><a href="https://facebook.github.io/react/">React.js</a>! Awww yeah! We\'ve heard about it! It\'s dominating the Web, but for a reason. There are so many reasons React.js have gained such a hype. Many of the techniques we will discuss here can be easily applied to other frameworks and libraries but React.js can play so nicely with them.</p>\n<p>There is this function called <a href="https://facebook.github.io/react/docs/react-dom-server.html">Server Side Rendering</a> where you can produce static HTML content directly from a tree of React.js components. That HTML content will contain the required React.js specific annotations so when the same tree will be loaded on the client, on top of the previously produced content, will know exactly what has to be rendered and what not to. From there, the client side logic can take the lead. Once the user visits a site, the server will respond with the static HTML. Once it\'s loaded in the user\'s browser and the user navigates in another route, the client side logic will respond and will render the new page, instead of contacting the server again. The same codebase will be used for the backend as also for the frontend. And that\'s a game changer.</p>\n<p>So let\'s see the new list:</p>\n<ul>\n<li>Describe your content in React.js Components</li>\n<li>On development time, write code like a boss (hot reloading, modularized code, webpack plugins, etc...)</li>\n<li>Use React.js SSR API to produce the static content to be served on the backend, as well as the frontend side assets to be used on the visitor\'s browser</li>\n</ul>\n<h2 id="wait-what-like-that"><a href="#wait-what-like-that" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wait, what? Like that?</h2>\n<p>Yeah, I know. I made it look so easy. It\'s not. There is the need for a strong abstraction that will track your links across your components, parse content written in another format, like blog posts written in Markdown, generate code that will not bloat the client and will efficiently serve the content to the user.</p>\n<p>Thankfully, there are a few projects that took the initiative and they are doing a great job so far. At the time of reading this, this site will already be served by GitHub pages and the content you will see once you view the source it\'s been generated by <a href="https://gatsbyjs.org">Gatsby.js</a>.</p>\n<p>I have been following those projects for quite a while. Here\'s my list:</p>\n<ul>\n<li><a href="https://gatsbyjs.org">Gatsby.js</a></li>\n<li><a href="https://phenomic.io">Phenomic</a></li>\n<li><a href="https://nextein.now.sh">nextein</a></li>\n</ul>\n<p>At the time that I started following them, all of them were in a very early stage and none of them could generate my site\'s content the way I wanted and in the same way as my previous one so to not lose paths and certain functionalities. I wanted to make the generated site, exactly like the old one in terms of the user experience. Once Gatsby.js hit major version 1, I started using it and the result..., you are looking at it!</p>\n<h2 id="what-exactly-am-i-looking-at"><a href="#what-exactly-am-i-looking-at" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What exactly am I looking at?</h2>\n<p>First, if you navigate around my site, you will notice that the browser doesn\'t fully re-renders the site. Gatsby will generate a JSON file for each route, so the browser can request only that file and React.js will render only the appropriate components. (Previously, I was using a technique called <a href="https://github.com/kbariotis/kostasbariotis.com__ghost-theme/blob/master/src/js/app.js#L11">pjax</a> to create the same effect. While it looked the same, it was more hack-ish.)</p>\n<p>Second, you can take a look at the <a href="https://github.com/kbariotis/kostasbariotis.com">source code</a>. While you need some knowledge of how Gatsby works, let me give you a sense of how this site is being generated. You can find all my blog posts and the main pages(<code>/</code>, <code>/about</code>, <code>/drafts</code>) of this site at <a href="https://github.com/kbariotis/kostasbariotis.com/tree/master/src/pages"><code>/src/pages</code></a>. Common components can be found at <a href="https://github.com/kbariotis/kostasbariotis.com/tree/master/src/components"><code>/src/components</code></a>. At <a href="https://github.com/kbariotis/kostasbariotis.com/tree/master/gatsby-node.js"><code>/gatsby-node.js</code></a> you can find the route it takes in order to render the site. First, it loads all posts using the GraphQL api which queries all <code>.md</code> files. Then it creates a page for each one, using the <a href="https://github.com/kbariotis/kostasbariotis.com/tree/master/src/templates/blog-post.js"><code>/src/templates/blog-post.js</code></a> template and before that it creates a page, with pagination, for all posts and tags again using the appropriate template file.</p>\n<p>On development, Gatsby will generate all of these in memory and fire up a development server that I can use to preview my site.</p>\n<p>You can try it your self by cloning the <a href="https://github.com/kbariotis/kostasbariotis.com">source code</a> and after installing dependencies, hit:</p>\n<ul>\n<li><code>npm run develop</code> to fire up the development server</li>\n<li><code>npm run build</code> to build the site (check the <code>/public</code> folder after its done)</li>\n</ul>\n<h2 id="an-alternative-to-html-caching"><a href="#an-alternative-to-html-caching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>An alternative to HTML caching</h2>\n<p>Static site generation can be seen as another form of caching your content. Think of when you are caching the home page of a Wordpress powered site and you are serving the cached content to every visitor. The thing though is that in many cases, there is no need for a system like Wordpress at all.</p>\n<p>My personal site contains a list of blog posts and static information about me that I am updating it once in a while. Comments are being hosted on <a href="https://disqus.com">Disqus</a>. There is absolutely no need for a system like Wordpress or even a system like <a href="https://ghost.org">Ghost</a> which I have been using for the last 3 years. While it served me well all this time, I really got tired of updating it, ssh-ing to the server, doing migrations and doing other ops required by such a stack. While there are also options for hosting in the cloud, pretty much they will be paid and fairly enough, they deserve it for doing such a job.</p>\n<p>But do I need a system like that? Not at all. And while we all know how much important that Wordpress\' Admin UI is to maintain our content, I would argue that we can separate the backend from the frontend and have lots of new features built in automatically. Imagine that instead of having <a href="https://memcached.org/">memcached</a> caching your HTML in front of your WordPress site, you trigger a hook each time your database changes that will re-generate the frontend using <a href="https://www.gatsbyjs.org/packages/gatsby-source-wordpress/">Gatsby</a>. Yes, Gatsby supports multiple backend sources to load your content. Instead of storing them inside your VCS like me, you can as well load them from your Wordpress\'s MySQL database.</p>\n<p>To conclude, modern static generators will allow us to:</p>\n<ul>\n<li>serve static content without maintaining complex stacks</li>\n<li>keep a clear separation between the backend and the frontend</li>\n<li>have cool features like client side routing and hot reload on development, out of the box</li>\n<li>reuse the same code that is being used to generate the backend content at our visitors\' browsers</li>\n</ul>\n<p>Hope that you will experiment with Gatsby and you will let me know what you think.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/modern-static-site-generation/index.md absPath of file >>> MarkdownRemark",timeToRead:6,frontmatter:{date:"2017-08-18T00:00:00.000Z",path:"/modern-static-site-generation/",tags:"node.js, reactjs, javascript",title:"Modern static site generation",draft:null}},{excerpt:"I haven't really gotten into  React.js  yet, even though I have heard about it about a year ago. It was this video,  about react-native  and how you can build native iOS apps  with Javascript, that really got me thinking. So, I started searching…",html:'<p>I haven\'t really gotten into <a href="https://facebook.github.io/react/">React.js</a> yet, even though I have heard about it about a year ago. It was this video, <a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4">about react-native</a> and how you can build native iOS apps  with Javascript, that really got me thinking.</p>\n<p>So, I started searching around, reading the <a href="https://facebook.github.io/react/docs/getting-started.html">docs</a>, reading what others <a href="http://blog.reverberate.org/2014/02/react-demystified.html">think</a> <a href="http://blog.andrewray.me/reactjs-for-stupid-people/">of it</a> and playing with this <a href="https://github.com/RickWong/react-isomorphic-starterkit">amazing piece of code</a>. But before you go too deep, let me straighten out some facts for you.</p>\n<h2 id="what-react-isnt"><a href="#what-react-isnt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What React isn\'t</h2>\n<p>React is not a complete framework, kit or anything else. From the homepage:</p>\n<blockquote>\n<p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>\n</blockquote>\n<p>You won\'t be able to use it on it\'s own. React is a library. People refer to it as the <a href="http://blog.codinghorror.com/understanding-model-view-controller/"><strong>V</strong></a> from the <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"><strong>MVC</strong></a>. But even as is, it does a hell of amazing job. Here\'s why.</p>\n<h2 id="react-components"><a href="#react-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Components</h2>\n<p>React consists of components. You may have already heard about <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> that  allow us to create custom HTML tags and include them anywhere on the outside world as easile as we include an <code>H1</code> tag. React components work just like this but can only be used inside the React ecosystem.</p>\n<p>Furthermore, Facebook implemented a <a href="http://facebook.github.io/jsx/">new syntax language</a> based on XML in order to compile their new XML based Components into vanilla Javascript. By doing this, we are able to write HTML inside Javascript and not being worry about it.</p>\n<p>What? Did I just say HTML inside Javascript? Isn\'t that against the whole MVC movement? Well sort of... But React\'s team thinks this wa,y we will be able to maintain our code more easily since it exists on fewer files. Newcomers will get their hands on our code more quickly.The new language JSX looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lets talk a little bit more about the components. A component is basically a Javascript class that only knows how to render itself. A component can also contain child components it communicates with. This can help us write more modular code.</p>\n<p>Think of a <code>List</code> element. We will write a List component that will contain a <code>ListItem</code> component. Every time we need to display it, the <code>List</code> component will render a <code>&#x3C;ul/></code> tag with a bunch of <code>ListItem</code> components,, and each of these <code>ListItem</code>s will render <code>&#x3C;li/></code>, each with their information.</p>\n<p>But wait? Did you said... render... every time? Like every time someone adds something in the list we will rerender it?</p>\n<h2 id="reconciliation"><a href="#reconciliation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reconciliation</h2>\n<p>Enter the <a href="https://facebook.github.io/react/docs/reconciliation.html">Virtual DOM magic, or in React\'s terms, the Reconciliation</a>. The essence of React. React will not render directly to the DOM every time something changes. Instead, it will render to its own internal DOM (the Virtual DOM) and then  compute diffs on the real DOM. React makes only the appropriate changes to the DOM to reflect the new changes. We never have to interact with the DOM again. We may never even have to write external stylesheets. React <a href="http://facebook.github.io/react/tips/inline-styles.html">has you covered</a>.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>I would suggest getting your hands on the React\'s documentation as fast as possible. There are a lot of concepts you need to understand in order to grasp its full potential.</p>\n<p>As I said, in the beginning, it was <a href="https://github.com/facebook/react-native">react-native</a> that forced me to play with React. But there are a <a href="http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/">lot</a> <a href="https://facebook.github.io/flux/">more</a> goodies to explore and I haven\'t play with all of them yet.\nUntil next time, take care!</p>\n<p><em>Please let me know if I missed or misunderstood something, since it\'s my second day using React. If you liked my article please share it. :)</em></p>\n<p><em>I have to thank <a href="http://mplewis.com/">Matthew Lewis</a> for reviewing this article. Thank you Matt.</em></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/hands-on-react-js/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-03-29T17:25:06.000Z",path:"/hands-on-react-js/",tags:"reactjs, javascript, node.js",title:"Hands on React.js",draft:null}}],tag:"reactjs",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-reactjs-68cb6750ae6674f1843a.js.map