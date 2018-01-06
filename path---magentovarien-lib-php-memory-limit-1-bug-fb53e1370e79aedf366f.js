webpackJsonp([0xb6bc5ccf5cd1],{"./node_modules/json-loader/index.js!./.cache/json/magentovarien-lib-php-memory-limit-1-bug.json":function(a,n){a.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>Last week an unusual bug really got me some time until i figured out.</p>\n<p>Common symptoms are Magento not creating your product\'s images cache without a reason or when trying to upload product\'s image and an error says \'Memory limit reached\'.</p>\n<p>A lot of resources on the Internet says that you have to increase your PHP\'s memory limit. But when i checked my PHP\'s configuration i noticed that memory limit was to -1, which means that a s<a title="PHP Docs : Memory Limit" href="http://php.net/manual/en/ini.core.php#ini.memory-limit" target="_blank">cript is allowed to allocate all your available memory</a>. Hmm, that\'s interesting. Hmmm, that\'s interesting.</p>\n<p>I followed the stacktrace and i found this (lib/Varien/Image/Adapter/Gd2.php):</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">_isMemoryLimitReached</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token variable">$limit</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token function">_convertToByte</span><span class="token punctuation">(</span><span class="token function">ini_get</span><span class="token punctuation">(</span><span class="token string">\'memory_limit\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token variable">$size</span> <span class="token operator">=</span> <span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>_fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token variable">$requiredMemory</span> <span class="token operator">=</span> <span class="token variable">$size</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token variable">$size</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">memory_get_usage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token variable">$requiredMemory</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token variable">$limit</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>\n\n<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">_convertToByte</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">stripos</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">,</span> <span class="token string">\'M\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token function">stripos</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">,</span> <span class="token string">\'KB\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>There you have it. The author here doesn\'t check for when memory_limit is set to -1. Instead he assumes that it will be always set to form of XXM or XXKB.</p>\n<p>So in case you have bumped into the above symptoms check out that your PHP\'s memory limit is not set to infinite.</p>',excerpt:"Last week an unusual bug really got me some time until i figured out. Common symptoms are Magento not creating your product's images cache…",frontmatter:{date:"August 30, 2014",path:"/magentovarien-lib-php-memory_limit-1-bug/",tags:"magento",title:"Magento(Varien lib) & PHP memory_limit -1 bug",draft:null}}},pathContext:{prev:{excerpt:"https://github.com/vlucas/phpdotenv For a while now, i've been using  Symfony's YAML  to add a configuration file on my PHP projects. Today, i stumbled upon  Vance Lucas's  PHPDotEnv which is a great PHP package that will transfer the contents of a…",html:'<p><a href="https://github.com/vlucas/phpdotenv" target="_blank">https://github.com/vlucas/phpdotenv</a></p>\n<p>For a while now, i\'ve been using <a title="Symfony\'s YAML Component" href="http://symfony.com/doc/current/components/yaml/introduction.html" target="_blank">Symfony\'s YAML</a> to add a configuration file on my PHP projects.</p>\n<p>Today, i stumbled upon <a title="Vance Lucas" href="http://vancelucas.com/" target="_blank">Vance Lucas\'s</a> PHPDotEnv which is a great PHP package that will transfer the contents of a .env file right inside your PHP\'s $<em>ENV variable. Available through &#x3C;a title="PHP Composer" href="<a href="http://getcomposer.org">http://getcomposer.org</a>" target="</em>blank">Composer</a> too.</p>\n<p>Easiest method to add configuration files to your PHP projects ever!</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/add-configuration-file-to-your-php-projects/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-31T10:01:38.000Z",path:"/add-configuration-file-to-your-php-projects/",tags:"php",title:"Add configuration file to your PHP Projects",draft:null}},next:{excerpt:"Programming is like my life. Being in the game since i was a little kid, it's like programming languages are my native languages. Writing good code matters a lot to me. Being able to write clean code may not seem so important but hazardous situations…",html:'<p>Programming is like my life. Being in the game since i was a little kid, it\'s like programming languages are my native languages. Writing good code matters a lot to me.</p>\n<p>Being able to write clean code may not seem so important but hazardous situations will occur if you don\'t. In the long run, smelly code will make your project maintenance slow. At the end, it is possible, that you abandon it and start over. That is a disaster. And you should not allowed it.</p>\n<p>I read a <a title="Clean Code Handbook" href="http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank">book </a>past week. Reading this book, it was something i had to do loooong time before. Written at 2008, by the father of Good Code, <a title="Martin Fowler Personal Page" href="martinfowler.com" target="_blank">Martin Fowler</a>, it opened my eyes for sure. So many principles i haven\'t even thought about it.</p>\n<p>[caption id="attachment_287" align="alignleft" width="225"]<a href="http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"><img class="wp-image-287 size-medium" src="https://kbariotis.files.wordpress.com/2014/08/showcover.jpg?w=225" alt="Clean Code by Martin Fowler" width="225" height="300" /></a> Clean Code by Martin Fowler[/caption]</p>\n<p>Here\'s an example. All this time, i have been writing code, almost 50% of it were comments. I thought this is the way other programmers will understand me.  <a title="Martin Fowler Personal Page" href="martinfowler.com" target="_blank">Martin Fowler</a> flipped it over. "The proper use of comments is to compensate our self\'s for our failure to express our self\'s." he said.</p>\n<p>Now, i am not going to write a book review. It\'s not something i am good at. I will put some of my favorites notes i kept from the book while reading it.</p>\n<p>Take a look.</p>\n<h2>About Clean Code.</h2>\n<blockquote>Spending time keeping your code clean, is not just cost effective. It\'s a matter of survival"</blockquote>\n&nbsp;\n<blockquote>"The only way to make the deadline, the only way to go fast is to keep the code as clean as possible."</blockquote>\n<h2> About Functions:</h2>\n<blockquote>Functions should be small. Even smaller than that. And do only one thing.</blockquote>\n&nbsp;\n<blockquote>One level per abstraction in each function.</blockquote>\n&nbsp;\n<blockquote>Always prefer exceptions than error codes.</blockquote>\n&nbsp;\n<blockquote>Duplication may be the root all evil in software.</blockquote>\n<h2>About Comments</h2>\n<blockquote>Comments are bad.</blockquote>\n&nbsp;\n<blockquote>The proper use of comments is to compensate our self\'s for our failure to express our self\'s.</blockquote>\n&nbsp;\n<blockquote>Comments are not maintainable.</blockquote>\n&nbsp;\n<blockquote>Think twice before you write them.</blockquote>\n<h2>About Code Formatting</h2>\n<blockquote>Think of a well written newspaper article. You read it vertically. At the top you expect a headline to tell you what the story is all about and allows you to decide whether is something you want to read. The first paragraph is a synopsis of the whole story. As you continue downwards, the details increase until you have all the dates, the names, etc. We would like source code to be like that.\n<p> </blockquote>\nNow this is not just it. This book is a treasure for every programmer. If i got your attention give it a try.</p>\n<p>What\'s your favorite notes and rules about writing clean code?</p>\n<p> </p>\n<h3>If you like this article, take a look on a <a title="How to write clean and efficient code" href="https://medium.com/@kbariotis/how-to-write-clean-efficient-code-f53fd67131f9" target="_blank">similar </a>i have wrote on @medium and follow me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">twitter</a>.</h3>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/does-your-code-smells/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-08-25T04:00:57.000Z",path:"/does-your-code-smells/",tags:null,title:"Does your code smells?",draft:null}}}}}});
//# sourceMappingURL=path---magentovarien-lib-php-memory-limit-1-bug-fb53e1370e79aedf366f.js.map