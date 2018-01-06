webpackJsonp([95149166780622],{"./node_modules/json-loader/index.js!./.cache/json/tag-aws.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"This post will be an attempt for me to start talking about the, all heard about it, serverless thing. I have been working with a serverless architecture on top of AWS for the last few months and I am feeling like I have a complete picture about it…",html:'<p>This post will be an attempt for me to start talking about the, all heard about it, serverless thing. I have been working with a serverless architecture on top of AWS for the last few months and I am feeling like I have a complete picture about it and a lot to share.</p>\n<p>I have gathered quite a few subjects I would like to write about but this post will be just an introduction and my point of view on serverless.</p>\n<h2 id="serverless-as-in-without-servers"><a href="#serverless-as-in-without-servers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>"Serverless"? as in "without servers"?</h2>\n<p>Let us please start with the elephant in the room.</p>\n<blockquote>\n<p><em>Serverless doesn\'t mean no servers.</em></p>\n</blockquote>\n<iframe src="https://giphy.com/embed/j2nATOAdRgYZq" width="374" height="380" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>\n<p>It simply means that the underlying servers are being hidden from the developer. Like when you are talking with the GitHub API, the underlying infrastructure is completely hidden from you and you don\'t have to worry about it.</p>\n<p>It is a rather confusing term, but don\'t let it fool you. You will still have to manage some kind of an infrastructure.</p>\n<h2 id="what-is-serverless"><a href="#what-is-serverless" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is serverless</h2>\n<p>From setting up a load balancer, ensuring that your platform can perform good at scale and setting up the build server for your CI/CD process, the infrastructure part of software development is one big chapter.</p>\n<p>Serverless is the state where all of the above are abstracted away and hidden behind APIs that you can manage them through.</p>\n<p>The diagram below illustrates how serverless is the evolution of Platform as a Service providers such as Heroku.</p>\n<p>\n          <a\n            class="gatsby-resp-image-link"\n            href="undefined"\n            style="display: block"\n            target="_blank"\n            rel="noopener"\n          >\n            <span\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; display: block; "\n            >\n              <span\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 94.82470784641067%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQ4y32U6arCMBCF+/5P5w9FxAUVF+quuNStc/kGTpnW9AZCksnMyZktmbWMz+djj8fDiqKoTcnKskzaZU3B9/t1o9fr5efVamXD4dD6/b4NBgO73W4Ohs7z+fwfUKzi/n6/+3q9XmsMpcN9ElDMGBjwOky63a7NZjNnNx6PnTFygN7vd7X/AZQQMF5mYNCMI2fFjzM66Mt9B+SAkLgpdihrv91urdPp1BjpURGRd1k8aAUIY8nEMiYCIMCZ3BEy7rLophgJWEbz+dyzLBcF2iTCfSbkmDmAJWdQNr1ez/b7fStQBagijcK4Xi4XO5/P1VT5pHQdUIwkhBXsony5XNput7PD4dDKrAKMGVXmYgyJ2fF4dDDYoiOAZAxTF6o1mAKqLMYuaVaC2rFiiIHiyVTPkpDJZOKdslgsbLPZOFAMkdoU/Z9O0aoX1+u1u8yeFbdVXnJfurXWU32pE+L3NBqNbDqdOmDUF8tkLysusWiZsIDV6XSq2Ol7i6Fp/Q/1IRBTFPld8jz3LLMCrMebniQBNWAKI5JCHZIYJl+ZmKfGHyf+zWET9CrmAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt="Serverless diagram"\n                  title=""\n                  src="/static/8d37a2362437d7e5405b7888683c7f97-d6136.png"\n                  srcset="/static/8d37a2362437d7e5405b7888683c7f97-64b4f.png 188w,\n/static/8d37a2362437d7e5405b7888683c7f97-bff5d.png 375w,\n/static/8d37a2362437d7e5405b7888683c7f97-d6136.png 750w,\n/static/8d37a2362437d7e5405b7888683c7f97-107db.png 1125w,\n/static/8d37a2362437d7e5405b7888683c7f97-71990.png 1198w"\n                  sizes="(max-width: 599px) 100vw, 599px"\n                />\n              </span>\n            </span>\n          </a>\n          </p>\n<p>The Function as a Service that we are hearing a lot, and usually comes in conjuction with the serverless term, is just a language runtime hidden behind an API. With AWS Lambda, e.g. what I can do is to make a POST request on their API with some Node.js source code and it will return me a UID that I can use on another POST request to run it. That\'s it. No cluster setup, no ports binding. It\'s just takes my code and runs it.</p>\n<p>Serverless hides its roots in the microservices architectures were bigger and complex systems are being broken out in multiple isolated services. The goal is to abstract away complex parts of our codebase from the other developers and let them interact with those through an API.</p>\n<p>And like a monolith that you decided to break it down in smaller services, is something that you can progresivelly fade in. You don\'t have to go one hundred percent serverless.</p>\n<h2 id="functionsdatabaserouteretc-as-a-service"><a href="#functionsdatabaserouteretc-as-a-service" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Functions/Database/Router/etc... as a Service</h2>\n<p>Think of a simple CRUD REST API. We need a database, a runtime to run our code and an HTTP proxy/router. Each of these has its own caveats and things that we have to take actions for. Database needs indexing and backups operations, our runtime needs a scaling protocol and the proxy needs an authentication mechanism.</p>\n<blockquote>\n<p><em>Anything that can be abstracted away, will be abstracted away.</em></p>\n</blockquote>\n<p>By putting all of the above, behind an API(one API for each service, remember the bounded context?) and let them take handle of their own issues, the only thing we left with is "our code".</p>\n<p>It\'s a form of outsourcing really, with a more simplified communication process.</p>\n<p><a href="https://plus.google.com/+RipRowan/posts/eVeouesvaVX">Jeff Bezos once</a> instructed every team inside Amazon to have a developer that will create an API for that team and let all teams communicate only through these APIs. Thus AWS was born. Serverless is that particular mindset in scale.</p>\n<h2 id="not-simpler"><a href="#not-simpler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Not simpler</h2>\n<blockquote>\n<p><em>Now you are able to focus on writing your code...</em></p>\n</blockquote>\n<p>I know. Such a cliche.</p>\n<p>In reality, it\'s not that simple. And while I am feeling like we are getting there, it\'s still not possible.</p>\n<p>While serverless and the current state can boost development, it\'s still not that simple. You still need to have a knowledge of how servers works, basic understanding of distributed systems and security.</p>\n<p>On top of that, each external API has each own caveats and terminology you will need to get familiar with.</p>\n<p>There are also cons that you will have take in consideration, such as the vendor lock in. Out sourcing your work means that you are bringing in partners. You need to think about each and every one of them.</p>\n<p>The development tools around a serverless architecture is also still a blurry place to be. A local development will be hard, often times impossible to setup. Consider that early in your architecture design in order to avoid surprises later on.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>Serverless is an amazing technology, or a mindset if you will. Major providers such as AWS and Google Cloud brought it to the next level and if you haven\'t played with them even for a while, I am suggesting you to do so. Just to take a look.</p>\n<p>I\'am not sure if it will transform the way we structure and develop our architectures, but it\'s certainly a very interesting field to explore.</p>\n<p>I will continue writing about various serverless topics that I have found interesting and challenging on my journey.</p>\n<p>Leave me a comment about the part about serverless that confuses the most.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/serverless-demystified/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-11-11T18:51:34.000Z",path:"/serverless-demystified/",tags:"Serverless, AWS",title:"Serverless Demystified",draft:null}},{excerpt:"We started adopting a Queue-Centric workflow recently at  Goodvidio , although it's still too early to talk whether it served us well and what the benefits were. In this article I would like to talk about the mindset of adopting such an…",html:'<p>We started adopting a Queue-Centric workflow recently at <a href="http://goodvid.io">Goodvidio</a>, although it\'s still too early to talk whether it served us well and what the benefits were. In this article I would like to talk about the mindset of adopting such an infrastructure and some key concepts you must keep in mind, especially when using <a href="https://aws.amazon.com/sqs/">AWS\'s SQS</a>, a cloud hosted Messaging System.</p>\n<p>Besides SQS, there is also, <a href="https://azure.microsoft.com/en-us/services/storage/">Azure\'s Storage</a> and I am sure there are others as well. There are also <a href="http://queues.io/">open source implementations</a> that you can host on your machines.</p>\n<h2 id="whats-a-qcw"><a href="#whats-a-qcw" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s a QCW</h2>\n<p>A QCW is purely described by the separation of the Web Tier that generates requests and the Service Tier that processes them and it\'s a subset of the <a href="http://martinfowler.com/bliki/CQRS.html">CQRS pattern</a>. Thus, loose coupling of the dependent services can be achieved.</p>\n<p>The essential part here is that we are going from a <em>direct response of the Server</em> model to a <em>I will process that later, continue with what you\'re doing</em> model, moving towards a Tasks Based workflow. It\'s a great candidate for time consuming processes or when the possibility of a system to be down is high and won\'t be able to service requests immediately. The <em>at-least-once delivery</em> of requests can be guaranteed.</p>\n<p>By Queue we are referring to a service that implements the standard data structure Queue and sits between a Producer and a Consumer. The Producers generates requests and puts them in the Queue via an <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/MakingRequestsArticle.html">API</a>. The Consumer then reads the Queue and processes them. The communication is asynchronous which mean that the Producers won\'t get an immediate response from the requests that sends.  Instead the Consumer may then choose to somehow inform the Producer about the results. Either by sending an email to the admin or by sending a message through a WebSocket that can then be displayed directly to the user.</p>\n<h2 id="why-to-use-it"><a href="#why-to-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why to use it</h2>\n<p>While there are a lot of problems such a workflow can solve, the most common one is that the processing part of our application can\'t handle eager clients that are sending requests too fast or send requests that will take too long to process.</p>\n<p>The Producers can send requests to the Consumer, through the Queue, as aggressively as he wants, but the Consumer will process them based on the current workload.</p>\n<p>By keeping Requests to a separate place we can also not worry about losing requests since the Consumer can go off and back online again and start processing requests from the point where he left them.</p>\n<p>There are many more gains but we found those to be the most essential problems we need to solve.</p>\n<h2 id="consuming-the-queue"><a href="#consuming-the-queue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Consuming the Queue</h2>\n<p>A complex thing about consuming a Queue is that of the Consumer and the policy he follows for reading and processing messages. In general, the flow goes like this:</p>\n<ol>\n<li>Get the next available message from the top of the Queue</li>\n<li>Process the message</li>\n<li>Delete the message</li>\n</ol>\n<p>It\'s essential to note that you need the message that is in the the top of the queue. Otherwise, you can\'t guarantee that all messages will be processed in the same time period. You need the <strong><a href="https://en.wikipedia.org/wiki/FIFO">FIFO</a></strong> policy. Unfortunately, AWS SQS can\'t guarantee that for you, because of their distributed nature and you have to implement such functionality by your self.</p>\n<h3 id="long-polling"><a href="#long-polling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Long Polling</h3>\n<p>In order to get new messages, you have to ask the Queue once in a while if it has any messages. That\'s <a href="http://stackoverflow.com/a/12855533/1955940">Polling</a>. Several implementation provides some sort of Pushing mechanism that will directly notify a Consumer that there are pending messages to be processed. SQS doesn\'t support that, but they support <strong><a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Long Polling</a></strong> which is actually when we ask the Queue for new messages and if there are none, the connection is being kept alive until there is one or till the connection times out. SQS supports up to 20 seconds of Long Polling. After that, we must re ask the Queue and wait another 20 seconds.</p>\n<h3 id="visibility-timeout"><a href="#visibility-timeout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Visibility Timeout</h3>\n<p>While processing a message, a lot of things can go wrong that will make the process to fail. In such case, the message can\'t be deleted and must remain in the Queue in order to reprocess it. But if we leave it there, it\'s going to be returned over and over again and we can\'t be sure that is going to succeed the next time. Instead of deleting the message, the Queue can hide it for a specific period of time, so we can continue processing other messages and reprocess that message at some point in the future again. This is a <strong><a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html">Queue\'s Visibility Timeout</a></strong>.</p>\n<h3 id="poisoned-messages"><a href="#poisoned-messages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Poisoned Messages</h3>\n<p>Still, this won\'t guarantee that the message will be processed successfully at any time. The message may be poisoned, that means that it failed passing our domain\'s model requirements and that it won\'t be processed unless we change our logic. Those are called <strong>Poison Messages</strong> and a policy must be specified that will take care of those. For example, a counter may be kept for each poisoned message and after the third time that it failed to be processed it must be deleted.</p>\n<h3 id="dead-letter-queues"><a href="#dead-letter-queues" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dead Letter Queues</h3>\n<p>In case of such a failure, you don\'t want to bypass that without investigating the cause. You\'ll need to know what was the reason that marked the message as poisoned. Hopefully, instead of deleting it after the third attempt, you can store it in a <strong><a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html">Dead Letter Queue</a></strong>. A Dead Letter Queue is simply another Queue that holds only the failed messages. Those can be messages that couldn\'t be processed or messages that couldn\'t be pushed in the Queue cause it\'s full or non responding. After you store them there, you can go back at any time and examine those messages and see what you have done wrong in the first place.</p>\n<h2 id="finally"><a href="#finally" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Finally</h2>\n<p>So we talked about what a QCW is, how it can be used and also for some key concepts of SQS such as Queue\'s Visibility Timeout, Polling, Poison Messages and Dead Letter Queues. AWS has a great <a href="https://aws.amazon.com/documentation/sqs/">documentation on SQS</a>.</p>\n<p>Also, <a href="http://www.bennadel.com/index.cfm">Ben Addel</a> has a nice implementation of a <a href="http://www.bennadel.com/blog/2792-shedding-the-monolithic-application-with-aws-simple-queue-service-sqs-and-node-js.htm">Nodejs SQS Consumer</a> that uses Promises to do Long Polling. It is basic, without handling Poison Messages or using Dead Letter Queues and it\'s a great starting point.</p>\n<p>I\'ve also found the Queue Centric Workflow chapter of the <a href="http://www.amazon.com/Cloud-Architecture-Patterns-Using-Microsoft/dp/1449319777">Cloud Architecture Patterns</a> books to have some excellent resources.</p>\n<p>If you have any previous experience in any of the subjects talked above, please share it in the comments. Thank you!</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/queue-centric-workflow/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2015-12-06T13:33:15.000Z",path:"/queue-centric-workflow/",tags:"Microservices, node.js, AWS, QCW",title:"Queue-Centric Workflow",draft:null}}],tag:"AWS",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-aws-bcf92e54df1538c32db9.js.map