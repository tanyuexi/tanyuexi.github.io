---
layout: post
title:  "Geoffrey Hinton: \"Ask Me Anything\" on Reddit"
author: Yuexi Tan
date:   2016-04-13 15:00:00 +0800
tags:  Machine-Learning
---

<img src="{{ "/images/20160413-RedditML-155x70.png" | prepend: site.baseurl }}">

## Highlights

+ These are [Geoffrey Hinton](http://www.cs.toronto.edu/~hinton/)'s answers to questions asked by people online one or two years ago, which I found quite inspiring
+ For the original webpage on Reddit, go [here](https://www.reddit.com/r/MachineLearning/comments/2lmo0l/ama_geoffrey_hinton)

## Hinton's self introduction

I design learning algorithms for neural networks. My aim is to discover a learning procedure that is efficient at finding complex structure in large, high-dimensional datasets and to show that this is how the brain learns to see. I was one of the researchers who introduced the back-propagation algorithm that has been widely used for practical applications. My other contributions to neural network research include Boltzmann machines, distributed representations, time-delay neural nets, mixtures of experts, variational learning, contrastive divergence learning, dropout, and deep belief nets. My students have changed the way in which speech recognition and object recognition are done.

I now work part-time at Google and part-time at the University of Toronto.

## The big ideas

### Are we any closer to understanding biological models of computation?

I think the success of deep learning gives a lot of credibility to the idea that we learn multiple layers of distributed representations using stochastic gradient descent. However, I think we are probably a long way from understanding how the brain does this.

Evolution must have found an efficient way to adapt features that are early in a sensory pathway so that they are more helpful to features that are several stages later in the pathway. I now think there is a small chance that the cortex really is doing backpropagation through multiple layers of representation. The only way I can see for this to work is for a neuron to use the temporal derivative of the underlying Poisson rate of its output to represent the derivative of the error with respect to its input. Using this representation in a stack of autoencoders makes the idea that cortex does multi-layer backprop not totally crazy, though there are still lots of other issues to solve before this would be a plausible theory, especially the issue of how we could do backprop through time. Interestingly, the idea of using temporal derivatives to represent error derivatives predicts one type of spike-time dependent plasticity for bottom-up connections and a different type for top-down connections. I talked about this at the first deep learning workshop in 2007 and the slides have been on the web for 7 years with zero comments. I moved them to my web page recently (left-hand column) and also updated them.

I think that the way we currently use an unstructured "layer" of artificial neurons to model a cortical area is utterly crazy. Its just the first thing to try because its easy to program and its turned out to be amazingly successful. But I want to replace unstructured layers with groups of neurons that I call "capsules" that are a lot more like cortical columns. There is a lot of highly structured computation going on in a cortical column and I suspect we will not understand it until we have a theory of what its for. My current favorite theory is that its for finding sharp agreements between multi-dimensional predictions. This is a very different computation from simply adding up evidence in favor of a binary hypothesis or combining weighted inputs to compute some scalar property of the world. Its much more robust to noise, much better for dealing with viewpoint changes and much better at performing segmentation (by grouping together multi-dimensional predictions that agree).

### What is your most controversial opinion in machine learning?

The pooling operation used in convolutional neural networks is a big mistake and the fact that it works so well is a disaster.

If the pools do not overlap, pooling loses valuable information about where things are. We need this information to detect precise relationships between the parts of an object. Its true that if the pools overlap enough, the positions of features will be accurately preserved by "coarse coding" (see my paper on "distributed representations" in 1986 for an explanation of this effect). But I no longer believe that coarse coding is the best way to represent the poses of objects relative to the viewer (by pose I mean position, orientation, and scale).

I think it makes much more sense to represent a pose as a small matrix that converts a vector of positional coordinates relative to the viewer into positional coordinates relative to the shape itself. This is what they do in computer graphics and it makes it easy to capture the effect of a change in viewpoint. It also explains why you cannot see a shape without imposing a rectangular coordinate frame on it, and if you impose a different frame, you cannot even recognize it as the same shape. Convolutional neural nets have no explanation for that, or at least none that I can think of.

### Hinton: some of my beliefs about the brain that have made a big difference to the kinds of machine learning I have done

The cortex is pretty much the same all over and if parts are lost early, other parts can take on the functions they would have implemented. This suggests its really worth taking a bet on there being a general purpose learning procedure.

The brain is clearly using distributed representations.

The brain does complex tasks like object recognition and sentence understanding with surprisingly little serial depth to the computation. So artificial neural nets should do the same.

The brain has about 1014 synapses and we only live for about 109 seconds. So we have a lot more parameters than data. This motivates the idea that we must do a lot of unsupervised learning since the perceptual input (including proprioception) is the only place we can get 105 dimensions of constraint per second.

Roughly speaking, spikes are noisy samples from an underlying Poisson rate. Over the short time periods involved in perception, this is an incredibly noisy code. One of the motivations for the idea of dropout was that very noisy spikes are a good way to get a very strong regularizer that can help the brain deal with the fact that it has thousands of times more parameters than experiences.

Over a short time period, a neuron really is a binary all-or-none device (so far as other neurons are concerned). This was one of the motivations behind Boltzmann machines. Another was the paper by Crick and Mitchison suggesting that we do unlearning during sleep. There now seems to be quite a lot of evidence for this.

### How did you get the idea for the Boltzmann machine?

Terry Sejnowski had the idea of combining simulated annealing with Hopfield nets. We then figured out that the neurons would have to use the logistic function to make this work. Initially we thought of these stochastic Hopfield nets as just a way of doing search, but about six months later we started working on unsupervised learning for these nets. I had to give my first research seminar at CMU and I was terrified that I wouldn't have anything good to say. So I worked very hard. Terry always works very hard anyway. I guessed that we should be minimizing the KL divergence between the distribution we wanted to model and the distribution exhibited by the network when it was at thermal equilibrium at a temperature of 1. Terry did the math. This led to such nice derivatives that we knew we were onto something. Also it justified Crick and Mitchison's theory of sleep as unlearning.

A few years later, Peter Brown pointed out that our learning algorithm was actually doing maximum likelihood and I said "What's maximum likelihood?".

PS: Paul Smolensky and I (working with Dave Rumelhart) had implemented backpropagation for multiple layers of deterministic logistic units in early 1982. This was important because it convinced me that you didn't have to find the global optimum. Using gradient descent to find a local optimum was less intellectually satisfying, but it worked surprisingly well. So I knew that we just needed to find the gradient of a sensible function in order to do learning in Boltzmann machines.

### Have you seen relevant work trying to enhance interpretability of "obfuscated" machine learning system ?

I suspect that in the end, understanding how big artificial neural networks work after they have learned will be quite like trying to understand how the brain works but with some very important differences:

1. We know exactly what each neuron computes.
2. We know the learning algorithm they are using.
3. We know exactly how they are connected.
4. We can control the input and observe the behaviour of any subset of the neurons for as long as we like.
5. We can interfere in all sorts of ways without filling in forms.

### Did you come up with the term "dark knowledge"? If so, how do you come up with such awesome names for your models?

Yes, I invented the term "Dark Knowledge". Its inspired by the idea that most of the knowledge is in the ratios of tiny probabilities that have virtually no influence on the cost function used for training or on the test performance. So the normal things we look at miss out on most of the knowledge, just like physicists miss out on most of the matter and energy.

The term I'm most pleased with is "hidden units". As soon as Peter Brown explained Hideen Markov Models to me I realized that "hidden" was a great name so I just stole it.

## The back-stories and personal life

### What are greatest influences on your thinking?

My father was a Stalinist and sent me to a private Christian school where we had to pray every morning. From a very young age I was convinced that many of the things that the teachers and other kids believed were just obvious nonsense. That's great training for a scientist and it transferred very well to artificial intelligence. But it was a nasty shock when I found out what Stalin actually did.

### How do you see mathematics, and how do you think it fits in machine learning?

Some people (like Peter Dayan or David MacKay or Radford Neal) can actually crank a mathematical handle to arrive at new insights. I cannot do that. I use mathematics to justify a conclusion after I have figured out what is going on by using physical intuition. A good example is variational bounds. I arrived at them by realizing that the non-equilibrium free energy was always higher than the equilibrium free energy and if you could change latent variables or parameters to lower the non-equilibrium free energy you would at least doing something that couldn't go round in circles. I then constructed an elaborate argument (called the bits back argument) to show that the entropy term in a free energy could be interpreted within the minimum description length framework if you have several different ways of encoding the same message. If you read my 1993 paper that introduces variational Bayes, its phrased in terms of all this physics stuff.

After you have understood what is going on, you can throw away all the physical insight and just derive things mathematically. But I find that totally opaque.

### Do you see more and more breakthroughs coming from industrial labs rather than Universities?

I think that Google, Facebook, Microsoft Research, and a few other labs are the new Bell Labs. I don't think it was a big problem that a lot of the most important research half a century ago was done at Bell labs. We got transistors, unix and a lot of other good stuff.

### What are your thoughts about abuses (and uses) of machine learning and machine intelligence?

Technology is not itself inherently good or bad—the key is ethical deployment. So far as I can tell, Google really cares about ensuring technology is deployed responsibly. That's why I am happy to work for them but not happy to take money from the "defense" department.

### Since you joined Google lately, will your research there be proprietary?

Actually, Google encourages us to publish. The main thing I have been working on is my capsules theory and I haven't published because I haven't got it to work to my satisfaction yet.

### Are there any topics you would add to that course if you re-did it today?

Another question: Are you going to write a paper for RMSProp someday? Or should we just keep citing your Coursera slides? :)

Just keep citing the slides :-)

I am glad I did the Coursera course, but it took a lot more time than I expected. Its not like normal lectures where its OK to make mistakes. Its more like writing a textbook where you have to deliver a new camera-ready chapter every week. If I did the course again I would split it into a basic course and an advanced course. While I was doing it, I was torn between people who wanted me to teach them the basics and a smaller number of very knowledgeable people who wanted to know about advanced topics. I handled this by adding some advanced material with warnings that it was advanced, but this seemed very awkward.

In the advanced course I would put a lot more about RNN's especially for things like machine translation and I would also cover some of the very exciting work at Deepmind on a single system that can learn to play any one of a whole suite of different Atari video games when the only input the system gets is the video screen and the changes in score. I completely omitted reinforcement learning from the course, but now it is working so well that it has to be included.

### Do you ever foresee taking on PhD students again?

Probably not. Its a long-term committment. But I might well co-advise students with other profs at U of T.

### What direction do you recommend for a PhD thesis?

All good researchers will tell you that the most promising direction is the one they are currently pursuing. If they thought something else was more promising, they would be doing that instead.

I think the long-term future is quite likely to be something that most researchers currently regard as utterly ridiculous and would certainly reject as a NIPS paper. But this isn't much help!

### What is your philosophy when it comes to dealing the people in your life?

Here is a really valuable fact of life: If some people collaborate on a paper and you get each of them to estimate honestly what fraction the credit they deserve it usually adds up to a lot more than 1. That's just how people are. They notice the bits they did much more than they notice the bits other people did.

Once you accept this, you realize that the only way to avoid credit squabbles is to act in a way that you think is generous and encourage your co-authors to do the same. If everyone insists on getting the credit that they think is rightfully theirs you are likely to get a nasty squabble.

### You have frequently shown that you have a delightful sense of humour. What sort of entertainment do you enjoy? 

Fry and Laurie.