webpackJsonp([0xfe5015016e4b],{"./node_modules/json-loader/index.js!./.cache/json/writing-a-custom-css-framework.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>Writing CSS is hard! Especially cross browser testing, this is like the least fun game ever. But still, it\'s a big deal in our day to day life and you always feel good by the outcome.</p>\n<p>Personally, I am reusing whatever I can get off the internet and the open source community. <a href="http://getbootstrap.com">Bootstrap</a> is an example of this. Bootstrap is a fine set of reusable components you can just plug into your website. The thing is that it\'s quite big and usually you won\'t be needing all of the <a href="http://getbootstrap.com/components/">components</a> it offers.</p>\n<p>Furthermore, the latest version of Bootstrap still requires jQuery which I am trying to avoid. Especially for smaller projects that have a few click events and a contact form, it\'s really not that necessary.</p>\n<p>So, like a true hacker, I am using SASS to build my CSS files and my main file looks like this at first:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$bootstrap-sass-asset-helper</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/variables"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/mixins"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/normalize"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/print"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/glyphicons"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/scaffolding"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/type"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/grid"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/forms"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/buttons"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/utilities"</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">"~bootstrap-sa../static/stylesheets/bootstrap/responsive-utilities"</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I am using <a href="https://webpack.js.org">webpack</a> to parse the files. Here\'s an example configuration of <a href="https://github.com/kbariotis/webpack-patterns">webpack along with Bootstrap</a>.</p>\n<p>The end file will contain only the essentials components I am going to need. You may have already spotted that I don\'t include any <a href="http://getbootstrap.com/javascript/">components that require Javascript</a> thus jQuery. I am not going to include Bootstrap\'s Javascript files either.</p>\n<p>Great, now let\'s write some HTML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container posts-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row posts-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6 col-md-3 posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Post title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6 col-md-3 posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another blog post<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Ok it works. But, there is a strong coupling with Bootstrap\'s grid system and our HTML code. Since Bootstrap is a CSS framework, only our CSS code should be dealing with it. This way I could remove Bootstrap in the future and only have to change my CSS code, not the HTML too.</p>\n<p>Let\'s rewrite:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Post title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>posts-row__post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another blog post<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Yeap, much cleaner, readable and domain oriented. Now let\'s tie this together with Bootstrap:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token selector">.posts-container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@extend</span> .container<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.posts-row </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">make-row</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.posts-row__post </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">make-sm-column</span><span class="token punctuation">(</span>6<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> <span class="token function">make-md-column</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We either extend a Bootstrap\'s class or using it\'s <a href="https://github.com/twbs/bootstrap-sass/blob/mast../static/stylesheets/bootstrap/mixins/_grid.scss">mixins</a>.</p>\n<p>Now only our CSS knows about Bootstrap. HTML doesn\'t care. Bootstrap can be anyone of your favorite CSS frameworks.</p>\n<p>If I was about to switch to Flexbox for example, I would go like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token selector">.posts-row </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.posts-row__post </span><span class="token punctuation">{</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 1 0 200px<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This is how I always start a CSS codebase for a project. It helps me to create prototypes quickly and once the project hits a more mature stage, I could start rewriting and throwing away dependencies.</p>\n<p>To conclude, try to keep your codebase clean and not mixed-up. Have a vision in your mind of how it is going to evolve in the future. Once you have that, you can start thinking of you can ease the process in the future.</p>\n<p>Leave me a comment if you liked my approach on starting a new custom CSS framework.</p>',excerpt:"Writing CSS is hard! Especially cross browser testing, this is like the least fun game ever. But still, it's a big deal in our day to day…",frontmatter:{date:"April 04, 2017",path:"/writing-a-custom-css-framework/",tags:"CSS, Bootstrap",title:"Writing a custom CSS framework",draft:null}}},pathContext:{prev:{excerpt:"I am using webpack a lot. A common pattern I am constantly using is how to manage the application specific configuration between different environments. I want to be able to set different API URLs, access codes, feature flags for every environment of…",html:'<p>I am using webpack a lot. A common pattern I am constantly using is how to manage the application specific configuration between different environments. I want to be able to set different API URLs, access codes, feature flags for every environment of my team\'s workflow.</p>\n<p>In this post, I will try to explain why we need application specific configuration and I am using it. Then I will show you two common techniques and why I chose the second one. It\'s fairly small as the horizontal scrollbar on right says.</p>\n<h2 id="an-example"><a href="#an-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>An example</h2>\n<p>Let\'s start with a simple app. Of course, it does absolutely nothing. It\'s just a theoretical fully working application:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> ApolloClient<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNetworkInterface <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-client\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> gql <span class="token keyword">from</span> <span class="token string">\'graphql-tag\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  networkInterface<span class="token punctuation">:</span> <span class="token function">createNetworkInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    uri<span class="token punctuation">:</span> <span class="token string">\'https://graphql.example.com\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nRaven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">\'https://4a426bd18cd86e90b186dcbfa3ce1b0d@sentry.io/321321\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nclient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  query<span class="token punctuation">:</span> gql<span class="token template-string"><span class="token string">`\n    query TodoApp {\n      todos {\n        id\n        text\n        completed\n      }\n    }\n  `</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=></span> Raven<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Notice the various constants across this simple snippet. We have our GraphQL\'s API Url and the Sentry\'s access code. We want to build the above snippet for two different environments, the production one, and the staging. But we want the production environment to talk to our production GraphQL API while the staging to talk to the staging one. The same goes for the Sentry access code, different for every environment (Sentry supports error tags though, that\'s just an example.)</p>\n<p>Great so let\'s rewrite:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> ApolloClient<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNetworkInterface <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-client\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> gql <span class="token keyword">from</span> <span class="token string">\'graphql-tag\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  networkInterface<span class="token punctuation">:</span> <span class="token function">createNetworkInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    uri<span class="token punctuation">:</span> __CONFIG__<span class="token punctuation">.</span>graphql<span class="token punctuation">.</span>endpoint<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nRaven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nclient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  query<span class="token punctuation">:</span> gql<span class="token template-string"><span class="token string">`\n    query TodoApp {\n      todos {\n        id\n        text\n        completed\n      }\n    }\n  `</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=></span> Raven<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Great! Notice the constants I have put in. Now we need to properly assign those constants depending on the environment.</p>\n<p>Before we do that, let\'s take it a step further. I want Sentry to be enabled only on the production environment. I need a toggle switch.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> ApolloClient<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNetworkInterface <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-client\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> gql <span class="token keyword">from</span> <span class="token string">\'graphql-tag\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  networkInterface<span class="token punctuation">:</span> <span class="token function">createNetworkInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    uri<span class="token punctuation">:</span> __CONFIG__<span class="token punctuation">.</span>graphql<span class="token punctuation">.</span>endpoint<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>is_enabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n  Raven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Raven<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Raven<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nclient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  query<span class="token punctuation">:</span> gql<span class="token template-string"><span class="token string">`\n    query TodoApp {\n      todos {\n        id\n        text\n        completed\n      }\n    }\n  `</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=></span> <span class="token function">logger</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Again, <code>__CONFIG__.sentry.is_enabled</code> will only be true on the production environment. When it\'s false, will never initialize it.</p>\n<h2 id="searching-for-a-solution"><a href="#searching-for-a-solution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Searching for a solution</h2>\n<p>Let\'s see now how we can actually achieve this. First, we need the configuration management. <a href="https://github.com/lorenwest/node-config">node-config</a> would be great for this. Just install it, write some configuration files and load it in your webpack configuration like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>const config = require(\'node-config\');</code></pre>\n      </div>\n<p><code>config</code> here will be the environment specific configuration you have defined. Now we need to inject that into our application entry file.</p>\n<p>One way would be to create a module alias. Then you can just import from every file you are going to need it. Although you may need to adjust it a bit to use it with <code>node-config</code>, it\'s fairly simple and works in most cases.</p>\n<p>One caveat here is that the configuration is being imported into your application and just sits there, whether you are using it or not. Configuration values that are not being used are still there, which may even be considered as a security flaw. We don\'t want that.</p>\n<p>A better solution would be webpack\'s <a href="https://webpack.js.org/plugins/define-plugin/">DefinePlugin</a>. DefinePlugin will replace every occurrence of a key you are passing it with its respective value on compile time.</p>\n<p>So this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>is_enabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n  Raven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>will become</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n  Raven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>on the staging environment. What\'s even greater about that, is that webpack will pass it (using UglifyJS) and completely remove it since it\'s never going to be used.</p>\n<p>Heads up though!</p>\n<blockquote>\n<p>Note that because the plugin does a direct text replacement, the value given to it must include actual quotes inside of the string itself. Typically, this is done either with either alternate quotes, such as \'"production"\', or by using JSON.stringify(\'production\').</p>\n</blockquote>\n<p>You need to write your configuration respectively because of that.</p>\n<p>The webpack configuration will look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'config\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./index.js\'</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      __CONFIG__<span class="token punctuation">:</span> <span class="token function">packinize</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'app.bundle.js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> <span class="token string">"/path.join(__dirname, \'dist\')/"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We pass <code>node-config</code> into <code>packinize</code> which will pass every value and stringify it. Then we feed the result into DefinePlugin.</p>\n<h2 id="to-conclude"><a href="#to-conclude" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>To conclude</h2>\n<p>I am using configuration files as much as possible. For constants that are being varied based on the environments, API URLs, access codes, feature flags, toggle switches. Being able to manipulate the end code based on those values is just awesome!</p>\n<p>I have added an example to my <a href="http://github.com/kbariotis/webpack-patterns">webpack-patterns collection</a>. Take a look and let me know what you think.</p>\n<p>How are you using your application specific configuration when you use webpack? Or any other bundler?</p>',
id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/environment-based-application-configuration-using-webpack/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-05-14T09:47:37.000Z",path:"/environment-based-application-configuration-using-webpack/",tags:"webpack",title:"Environment based application configuration using Webpack",draft:null}},next:{excerpt:"",html:"",id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/microservices-lets-talk-about-boundaries/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-03-10T00:00:00.000Z",path:"/drafts/microservices-lets-talk-about-boundaries/",tags:"MicroServices",title:"Microservices: lets talk about boundaries",draft:!0}}}}}});
//# sourceMappingURL=path---writing-a-custom-css-framework-d4f11d71cad088255b27.js.map