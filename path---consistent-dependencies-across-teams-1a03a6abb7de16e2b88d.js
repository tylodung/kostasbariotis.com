webpackJsonp([19132527674330],{"./node_modules/json-loader/index.js!./.cache/json/consistent-dependencies-across-teams.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>A common pitfall when comes to development teams is the inconsistent software and library versions across developers.</p>\n<p>The first time you install a Node.js dependency by <code>npm install --save</code>, the latest version of that package, will be installed along with the npm\'s default <a href="https://docs.npmjs.com/misc/config#save-prefix">save prefix (^)</a>. The \'^\' allows npm to auto install minor upgrades for this package, according to the <a href="http://semver.org/">semver schema</a>.</p>\n<p>Because of that, it\'s hard to guarantee that every developer in the team will have the same version and this creates problems. It can really save your day, when two different people on the same codebase gets different results on an predefined procedure and the cause is a breaking change on a package that got updated.</p>\n<p>So what we do? There are a few ways you can pass this:</p>\n<h3 id="reset-the-default---save-prefix"><a href="#reset-the-default---save-prefix" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reset the default <code>--save-prefix</code>.</h3>\n<p>By running <code>npm config set save-prefix=\'\'</code> you\'re overriding npm\'s default <a href="https://docs.npmjs.com/misc/config#save-prefix">save-prefix</a> value which is <code>^</code>. Now every package you install will be locked on it\'s current version and every person that runs <code>npm install</code> will get that version.</p>\n<p>This can also introduce outdated packages, so make sure that you keep an eye on your dependencies for critical updates that you don\'t want to miss. You can also take advantage of the npm\'s <a href="https://docs.npmjs.com/cli/outdated">outdated command</a> that will check every package and report back for outdated packages.</p>\n<p>Consider also keeping this setting in your <a href="https://docs.npmjs.com/files/npmrc"><code>.npmrc</code></a> file, to not force every developer to set it explicitly on his/her machine.</p>\n<h3 id="shrinkwrap"><a href="#shrinkwrap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>shrinkwrap</h3>\n<p>npm\'s <a href="https://docs.npmjs.com/cli/shrinkwrap">shrinkwrap</a> is also a handy way to lock your versions across your team. By running <code>npm shrinkwrap</code>, a <code>shrinkwrap.json</code> file will be created at the root of your repo with the current versions  of your dependencies that are install at the moment and their dependencies.</p>\n<p>With <code>shrinkwrap</code> you get the exact same dependencies tree across and not worry about breaking updates. <code>npm install</code> will respect a <code>shrinkwrap.json</code> file if it finds but it must also agrees with the current <code>package.json</code> file, so expect errors if those two files are not align.</p>\n<p><code>shinkwrap</code> is the most safe way of locking your dependencies versions and still keeping them out of your repo, which brings me to the third and final option.</p>\n<h3 id="keep-your-dependencies-under-version-control"><a href="#keep-your-dependencies-under-version-control" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Keep Your Dependencies Under Version Control</h3>\n<p>This method is widely used, especially when maximum security is required. It\'s a proven method that keeps not only locked versions but code content too, so you don\'t worry if a malicious piece of code find it\'s way inside your favorite open source dependencies.</p>\n<p>Be careful though, cause your repo will increase in size really quick. In case of a dependency that needs to be compiled (e.g. by <a href="https://github.com/TooTallNate/node-gyp">node-gyp</a>) the source code is usually really big, so be careful on that.</p>\n<p>The npm guys have also a <a href="https://docs.npmjs.com/cli/shrinkwrap#caveats">few words</a> on this.</p>\n<h2 id="not-a-nodejs-fan"><a href="#not-a-nodejs-fan" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Not a Node.js Fan</h2>\n<p>In case that you aren\'t really into Node.js but you still reading this piece (big ups man!!), I shall inform you that these techniques aren\'t new either have been introduced by the Node.js community for the first time.</p>\n<p>PHP\'s Composer keeps a <a href="https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file">composer.lock</a> file that locks the current installed versions and Ruby\'s Bundler has a Gemfile.lock file. Same goes for other systems.</p>\n<p>So, do your homework and find your PM\'s way of handling this kind of life saver functionality.</p>\n<h2 id="a-final-word"><a href="#a-final-word" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Final Word</h2>\n<p>Dependencies of a codebase is an every day process and can easily lead to few hours of bug hunting. Make sure to save those hours.</p>\n<p>But, sooner or later, your team\'s inner policies will fail and this is ok, as soon as you understand the causes, you fix them and move. Move faster every time. Like a <a href="http://www.c25k.com/">c25k</a> training. ;)</p>\n<p>What\'s your preferred way of handling dependencies versions?</p>',excerpt:"A common pitfall when comes to development teams is the inconsistent software and library versions across developers. The first time you…",frontmatter:{date:"June 26, 2015",path:"/consistent-dependencies-across-teams/",tags:"npm, shrinkwrap, team, node.js",title:"Consistent dependencies across teams",draft:null}}},pathContext:{prev:{excerpt:"First, become the best in the room. Then find a room where everyone is better than you. Repeat. I know this piece is like 20 words long but could it be a spark for a great conversation? Leave your comment...",html:"<ul>\n<li>First, become the best in the room.</li>\n<li>Then find a room where everyone is better than you.</li>\n<li>Repeat.</li>\n</ul>\n<p>I know this piece is like 20 words long but could it be a spark for a great conversation?</p>\n<p>Leave your comment...</p>",id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/are-you-the-best-in-the-room/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-07-11T15:07:57.000Z",path:"/are-you-the-best-in-the-room/",tags:null,title:"Are you the best in the room?",draft:null}},next:{excerpt:"A few days ago I stumbled upon this wonderful  story . I love those short stories. They are real, inspirational and educational stories. I've also have two stories on my head that I kept saying when I am among fellows but I never wrote them somewhere…",html:"<p>A few days ago I stumbled upon this wonderful <a href=\"http://cs.txstate.edu/~br02/cs1428/ShortStoryForEngineers.htm\">story</a>. I love those short stories. They are real, inspirational and educational stories.</p>\n<p>I've also have two stories on my head that I kept saying when I am among fellows but I never wrote them somewhere. Here's my chance. Those stories are not mine but I have them in my mind for so long that I can't even remember where I read them. If you have any clue please share with me, in order to give credits to the original authors.</p>\n<p>Here's the first one.</p>\n<blockquote>\n<p>A train's engine got broken while in the road. It was recently purchaced and it was it's first trip and the president of the transportation company was on it. It happen also to be on, an engineer that was specialized on those kinds of engines. So the president headed to him and asked for help. He was desparate, afraid of the passengers to not left pleased. The engineer agreed to fix the engine and asked for 10.000$. The president took the deal even though the price was insane. The engineer headed to the front of the train. Picked up a hammer that was nearby and started looking at the engine. Everyone was waiting and suddenly he makes three hits to three different spots. Big hits. He yield to the driver to turn on the engine and for everyone's surprise the engine was running again. He fixed it. But the president was mad. He turned to the enginneer and said \"You charded me 10.000$ just to take three hits with the hammer? I would done it my self!\". And the engineer responded \"I didn't charged you for the hitting. I charged you because I knew... where to hit.\"</p>\n</blockquote>\n<p>Amazing. I am always carrying this story in my head. In fact, this story drove me where I am today, always trying to learn things that few people only know. I hope it inspires you too.</p>\n<p>And here's the second.</p>\n<blockquote>\n<p>A young junior employee on an private investements company did a serious, very critical mistake, that cost the company 1.000.000$. The man very sad, the next day went to his manager office and he handed his resignation. He said to him \"I know you probably going to fire me for the mistake I've done so I am quiting.\". And the manager said: \"Are you being serious? I just spend a million on your training. You aren't going anywhere!\".</p>\n</blockquote>\n<p>Loved this story too. Experience is so important. It's  what defines you as a professional. But in order to gain it you need to act. Without fear.</p>\n<p>And again, these stories are not mine and if you happen to know the original authors please share them with me.</p>\n<p>Do you know any good stories?</p>",id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/the-stories-in-my-head/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-06-13T13:46:56.000Z",path:"/the-stories-in-my-head/",tags:"engineers, experience, stories",title:"The stories in my head",draft:null}}}}}});
//# sourceMappingURL=path---consistent-dependencies-across-teams-1a03a6abb7de16e2b88d.js.map