webpackJsonp([0xa358ebf75cb2],{"./node_modules/json-loader/index.js!./.cache/json/tag-serverless.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"This post will be an attempt for me to start talking about the, all heard about it, serverless thing. I have been working with a serverless architecture on top of AWS for the last few months and I am feeling like I have a complete picture about it…",html:'<p>This post will be an attempt for me to start talking about the, all heard about it, serverless thing. I have been working with a serverless architecture on top of AWS for the last few months and I am feeling like I have a complete picture about it and a lot to share.</p>\n<p>I have gathered quite a few subjects I would like to write about but this post will be just an introduction and my point of view on serverless.</p>\n<h2 id="serverless-as-in-without-servers"><a href="#serverless-as-in-without-servers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>"Serverless"? as in "without servers"?</h2>\n<p>Let us please start with the elephant in the room.</p>\n<blockquote>\n<p><em>Serverless doesn\'t mean no servers.</em></p>\n</blockquote>\n<iframe src="https://giphy.com/embed/j2nATOAdRgYZq" width="374" height="380" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>\n<p>It simply means that the underlying servers are being hidden from the developer. Like when you are talking with the GitHub API, the underlying infrastructure is completely hidden from you and you don\'t have to worry about it.</p>\n<p>It is a rather confusing term, but don\'t let it fool you. You will still have to manage some kind of an infrastructure.</p>\n<h2 id="what-is-serverless"><a href="#what-is-serverless" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is serverless</h2>\n<p>From setting up a load balancer, ensuring that your platform can perform good at scale and setting up the build server for your CI/CD process, the infrastructure part of software development is one big chapter.</p>\n<p>Serverless is the state where all of the above are abstracted away and hidden behind APIs that you can manage them through.</p>\n<p>The diagram below illustrates how serverless is the evolution of Platform as a Service providers such as Heroku.</p>\n<p>\n          <a\n            class="gatsby-resp-image-link"\n            href="undefined"\n            style="display: block"\n            target="_blank"\n            rel="noopener"\n          >\n            <span\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; display: block; "\n            >\n              <span\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 94.82470784641067%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQ4y32U6arCMBCF+/5P5w9FxAUVF+quuNStc/kGTpnW9AZCksnMyZktmbWMz+djj8fDiqKoTcnKskzaZU3B9/t1o9fr5efVamXD4dD6/b4NBgO73W4Ohs7z+fwfUKzi/n6/+3q9XmsMpcN9ElDMGBjwOky63a7NZjNnNx6PnTFygN7vd7X/AZQQMF5mYNCMI2fFjzM66Mt9B+SAkLgpdihrv91urdPp1BjpURGRd1k8aAUIY8nEMiYCIMCZ3BEy7rLophgJWEbz+dyzLBcF2iTCfSbkmDmAJWdQNr1ez/b7fStQBagijcK4Xi4XO5/P1VT5pHQdUIwkhBXsony5XNput7PD4dDKrAKMGVXmYgyJ2fF4dDDYoiOAZAxTF6o1mAKqLMYuaVaC2rFiiIHiyVTPkpDJZOKdslgsbLPZOFAMkdoU/Z9O0aoX1+u1u8yeFbdVXnJfurXWU32pE+L3NBqNbDqdOmDUF8tkLysusWiZsIDV6XSq2Ol7i6Fp/Q/1IRBTFPld8jz3LLMCrMebniQBNWAKI5JCHZIYJl+ZmKfGHyf+zWET9CrmAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt="Serverless diagram"\n                  title=""\n                  src="/static/8d37a2362437d7e5405b7888683c7f97-d6136.png"\n                  srcset="/static/8d37a2362437d7e5405b7888683c7f97-64b4f.png 188w,\n/static/8d37a2362437d7e5405b7888683c7f97-bff5d.png 375w,\n/static/8d37a2362437d7e5405b7888683c7f97-d6136.png 750w,\n/static/8d37a2362437d7e5405b7888683c7f97-107db.png 1125w,\n/static/8d37a2362437d7e5405b7888683c7f97-71990.png 1198w"\n                  sizes="(max-width: 599px) 100vw, 599px"\n                />\n              </span>\n            </span>\n          </a>\n          </p>\n<p>The Function as a Service that we are hearing a lot, and usually comes in conjuction with the serverless term, is just a language runtime hidden behind an API. With AWS Lambda, e.g. what I can do is to make a POST request on their API with some Node.js source code and it will return me a UID that I can use on another POST request to run it. That\'s it. No cluster setup, no ports binding. It\'s just takes my code and runs it.</p>\n<p>Serverless hides its roots in the microservices architectures were bigger and complex systems are being broken out in multiple isolated services. The goal is to abstract away complex parts of our codebase from the other developers and let them interact with those through an API.</p>\n<p>And like a monolith that you decided to break it down in smaller services, is something that you can progresivelly fade in. You don\'t have to go one hundred percent serverless.</p>\n<h2 id="functionsdatabaserouteretc-as-a-service"><a href="#functionsdatabaserouteretc-as-a-service" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Functions/Database/Router/etc... as a Service</h2>\n<p>Think of a simple CRUD REST API. We need a database, a runtime to run our code and an HTTP proxy/router. Each of these has its own caveats and things that we have to take actions for. Database needs indexing and backups operations, our runtime needs a scaling protocol and the proxy needs an authentication mechanism.</p>\n<blockquote>\n<p><em>Anything that can be abstracted away, will be abstracted away.</em></p>\n</blockquote>\n<p>By putting all of the above, behind an API(one API for each service, remember the bounded context?) and let them take handle of their own issues, the only thing we left with is "our code".</p>\n<p>It\'s a form of outsourcing really, with a more simplified communication process.</p>\n<p><a href="https://plus.google.com/+RipRowan/posts/eVeouesvaVX">Jeff Bezos once</a> instructed every team inside Amazon to have a developer that will create an API for that team and let all teams communicate only through these APIs. Thus AWS was born. Serverless is that particular mindset in scale.</p>\n<h2 id="not-simpler"><a href="#not-simpler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Not simpler</h2>\n<blockquote>\n<p><em>Now you are able to focus on writing your code...</em></p>\n</blockquote>\n<p>I know. Such a cliche.</p>\n<p>In reality, it\'s not that simple. And while I am feeling like we are getting there, it\'s still not possible.</p>\n<p>While serverless and the current state can boost development, it\'s still not that simple. You still need to have a knowledge of how servers works, basic understanding of distributed systems and security.</p>\n<p>On top of that, each external API has each own caveats and terminology you will need to get familiar with.</p>\n<p>There are also cons that you will have take in consideration, such as the vendor lock in. Out sourcing your work means that you are bringing in partners. You need to think about each and every one of them.</p>\n<p>The development tools around a serverless architecture is also still a blurry place to be. A local development will be hard, often times impossible to setup. Consider that early in your architecture design in order to avoid surprises later on.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>Serverless is an amazing technology, or a mindset if you will. Major providers such as AWS and Google Cloud brought it to the next level and if you haven\'t played with them even for a while, I am suggesting you to do so. Just to take a look.</p>\n<p>I\'am not sure if it will transform the way we structure and develop our architectures, but it\'s certainly a very interesting field to explore.</p>\n<p>I will continue writing about various serverless topics that I have found interesting and challenging on my journey.</p>\n<p>Leave me a comment about the part about serverless that confuses the most.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/serverless-demystified/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-11-11T18:51:34.000Z",path:"/serverless-demystified/",tags:"Serverless, AWS",title:"Serverless Demystified",draft:null}}],tag:"Serverless",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-serverless-1d0420ea93746290cb39.js.map