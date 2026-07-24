# Speaker Notes: Leveraging Generative AI for Faster, Smarter Design

**Presenter:** Brian Pope, Director of Delivery & Design, DevObsessed
**Conference:** Nebraska.Code() 2026
**Duration:** 50 minutes (45 min presentation + 5 min Q&A)

**Prep Checklist:**
- [ ] Pre-recorded screencasts loaded and tested
- [ ] Claude open in browser tab as backup for live demos during Q&A
- [ ] Clicker/presenter remote tested
- [ ] Speaker notes visible on presenter screen (press `S` in reveal.js)
- [ ] Water nearby — you talk for 45 minutes straight

---

## TITLE SLIDE

**Script:**

"Good morning/afternoon, everyone. I'm Brian Pope, Director of Delivery and Design at DevObsessed. I spend my days at the intersection of building products and designing the experiences around them — shipping things that look good AND work well.

Today I want to talk about something that has genuinely changed how I work. Not in a buzzy, hype-cycle way, but in a 'I actually prototype faster now' way. We're going to talk about using generative AI — specifically large language models — to speed up the design process.

But before we dive in, I want to set one expectation right up front."

---

## Section 1: Opening & Hook (5 min)

### Slide: "Before We Start"

**Script:**

"I want you to hold onto this idea for the whole talk: AI is a power tool, not an autopilot. A table saw doesn't design furniture — a woodworker does. The saw just makes them faster.

Every single example I'm going to show you today has a human — me — making the creative decisions. AI generated options. I chose. I refined. I rejected things that didn't work. That's the model.

If you take nothing else from this talk, take that. Now let me show you WHY this matters."

### Slide: "The Before & After"

**Script:**

"Here's the before and after. On the left — the way most of us have worked. You open Figma, you stare at the blank canvas, you sketch a couple wireframes, you write lorem ipsum everywhere, you build one prototype, and then you iterate slowly because every change takes effort.

On the right — what it looks like when you bring AI into the loop. You describe what you want in plain English. You get five or six concepts back instead of two. Real copy, not lorem ipsum. Multiple directions to evaluate. And you can explore rapidly because generating a new variation costs you a prompt, not an hour.

I want to be clear: the RIGHT side doesn't replace the thinking. It replaces the busywork. You still make every decision. You just make them faster because AI handled the mechanical parts."

**Demo Note:** If you have a pre-recorded before/after screencast, play it here. If not, the two-column slide carries the point on its own.

### Slide: "What This Talk Is"

**Script:**

"One more note before we get into it. I'm going to be using Claude for my demos today, but this talk is NOT a Claude commercial. Everything I show you — every technique, every prompting pattern — works across ChatGPT, Gemini, Copilot, whatever you prefer.

The skill is in HOW you prompt, not WHICH tool you use. I'm teaching you a workflow, not a product. The goal is that you walk out of here with techniques you can try this week with whatever AI tool you already have access to.

OK. Let's talk about why we need this in the first place."

**Transition:** Move naturally into the prototyping bottleneck.

---

## Section 2: The Prototyping Bottleneck (5 min)

### Slide: "The Prototyping Bottleneck" (Pipeline)

**Script:**

"This is the prototyping cycle we all know. Ideation, wireframes, mockups, iteration, testing, repeat. It works. It's how good products get built.

But here's the thing — not every step in this cycle requires the same kind of thinking. Some of these steps are deeply creative. Deciding what problem to solve, choosing which layout best serves the user, interpreting test results. That's where your expertise lives.

But other steps? They're just... labor. And that's where AI comes in. Let me show you what I mean."

### Slide: "Where Time Gets Burned"

**Script:**

"Four places where time disappears.

Blank-canvas syndrome — how many of you have opened a new file and just... stared at it for twenty minutes before placing the first element? I see some hands. Me too. Every time.

Repetitive variations — your stakeholder says 'can I see three more options?' and your heart sinks because each one takes an hour. You're not making creative decisions on version four. You're doing production work.

Placeholder content — lorem ipsum everywhere. Fake names, fake addresses, fake everything. You know what's better than placeholder content? Actual content. But writing it takes time.

And the idea-to-artifact gap — you know EXACTLY what you want in your head. The bottleneck is translating it into pixels. That translation step is mechanical, not creative.

These are all low-creativity, high-effort tasks. And that's exactly where AI fits."

### Slide: "The Opportunity"

**Script:**

"So here's the thesis of this entire talk. AI compresses the low-creativity, high-effort parts of the prototyping cycle — so you can spend MORE time on the high-creativity decisions that actually matter.

AI doesn't replace your creativity. It removes the busywork so you can focus on it. That's the pitch. Now let me prove it.

I'm going to walk through three stages: ideation and wireframing, generating UI elements, and rapid iteration for testing. Each one with real demos. Let's start at the beginning — ideation."

**Timing Check:** You should be about 10 minutes in.

---

## Section 3: AI-Assisted Ideation & Wireframing (8 min)

### Slide: Section Title

**Script:**

"The earliest stage of design is often the hardest. You have a vague idea — maybe from a stakeholder, maybe from user research — and you need to turn it into something structured. A layout. An information architecture. A wireframe.

This is where AI shines, because it's incredibly good at generating structure from ambiguity. Let me show you."

### Slide: "Demo: Idea → Wireframe Concepts"

**Script:**

"Here's the prompt I used. Notice what I gave it: context about the app — it's a mobile fitness tracker. Who the users are — busy professionals, twenty-five to forty. What needs to be on screen — daily progress, weekly trends, quick-add buttons. And I asked for three different layouts.

Here's what came back.

Layout A is a glanceable dashboard — progress ring up top, sparkline in the middle, floating action button at the bottom. Minimal, scannable, perfect for someone checking their phone between meetings.

Layout B is data-rich. Stat cards across the top, full bar chart for the week, scrollable activity feed. This is for the user who wants to see everything at a glance.

Layout C takes a coaching angle. Motivational banner, checklist-style daily tasks, gamified elements. Different vibe entirely.

Now, did I use all three? No. But in about thirty seconds, I had three structurally different concepts to evaluate. Without AI, I would have sketched maybe one of these and spent an hour on it. Instead, I got three starting points and could immediately think about which direction best serves the user."

### Slide: "What AI Generated" (Wireframe Layouts)

**Script:**

"And here's what those three wireframe concepts look like as actual screen mockups.

Layout A — the glanceable dashboard. One big progress ring front and center, a sparkline trend below, and a floating action button for quick adds. Minimal, scannable, perfect for checking between meetings.

Layout B — data-rich. Three stat cards at the top, a full bar chart for the week, and an activity feed below. Everything at a glance for the user who wants detail.

Layout C — the coach. A motivational goal banner, a checklist of daily tasks with completion states, and a simple trend line. Gamified and encouraging.

Three structurally different approaches from a single prompt. I didn't use all three — I picked the direction that best served the user and iterated from there."

### Slide: "Key Technique: Conversational Iteration"

**Script:**

"Here's where it gets powerful. I didn't stop at the first output. I iterated.

First, I told it to make Layout A mobile-first — single column, thumb-friendly targets. It restructured the layout.

Then I said move the quick-add to the bottom nav and prioritize the weekly trend. It shuffled the hierarchy.

Then I said reduce cognitive load — collapse the stat cards into a summary line. It simplified.

Each follow-up took me about five seconds to type. Each one would have taken me ten to fifteen minutes to re-draw manually.

And here's the key point: I'm making every decision. I decided Layout A was the right direction. I decided to move the quick-add button. I decided the stat cards were too busy. AI didn't make those calls — I did. AI just made executing them fast."

### Slide: "What AI Generated" (Iterated Layout)

**Script:**

"Here's what Layout A looks like after those three rounds of iteration. It's now single-column and mobile-first. The weekly trend moved to the top because that's what users check most. The three stat cards collapsed into one summary line — less noise, same information. And the quick-add button moved from a floating action button to the bottom nav where your thumb naturally rests.

Three prompts. About fifteen seconds of typing. Three structural changes that would have each taken me ten to fifteen minutes to redraw manually. And every single change was MY decision — AI just executed it fast."

### Slide: "The Prompt Feedback Loop"

**Script:**

"This is the core mental model I want you to take away from this section. Prompting isn't a one-shot thing — it's a feedback loop.

Step one: start broad. Don't try to specify everything up front. Just describe the general direction — 'design a dashboard for a fitness app.' See what comes back.

Step two: evaluate and react. Don't just accept or reject the whole output. Be specific about what's working and what's not. 'The layout is right but the hierarchy is flat' gives the AI something actionable.

Step three: add constraints. This is where the magic happens. Each constraint you add — 'use our 8px grid,' 'make the CTA more prominent,' 'reduce to three colors' — sharpens the output. Constraints don't limit AI, they focus it.

Step four: converge. After two or three loops, you've got something worth building on. You didn't start from a blank canvas. You started from a conversation.

The key insight is that your prompting skill improves with every loop. You learn what language produces better results. You learn how to give feedback that the AI can act on. It's a skill, and like any skill, it gets better with practice."

### Slide: "This Works Across Models"

**Script:**

"Quick note — everything I just showed you? The pattern of giving context, asking for options, iterating with constraints? That works exactly the same in ChatGPT, Gemini, or any other LLM.

The formula is simple: context plus constraints plus iteration equals better outputs. That's model-agnostic. If you're already using a different tool, great — use these same techniques there.

OK, let's get more specific. We've got wireframe concepts. Now let's generate actual UI elements."

**Timing Check:** You should be about 18 minutes in.

---

## Section 4: Generating & Iterating on UI Elements (10 min)

### Slide: Section Title

**Script:**

"This is the meatiest section. I've got three demos to show you — component variations, microcopy, and accessibility-driven design. Each one shows a different angle on how AI can speed up the detail work of UI design."

### Slide: "Demo 1: Component Variations"

**Script:**

"Four card variations from one prompt. Let me walk through them.

Horizontal card — photo on the left, text on the right. Compact, works great in a list view. You'd use this for search results.

Vertical card — photo on top, info below. The standard card pattern you see everywhere. Works well in a grid layout for browsing.

Minimal card — photo as the background with a gradient overlay and white text. Very visual, very Instagram. Striking but you lose some information.

Detailed card — everything. Photo, title, description, cook time, difficulty, rating, save button. Information-dense. For users who want to evaluate before clicking.

In the time it would take me to design ONE of these from scratch, I had four distinct options to evaluate. I'm not using all four — I'm picking the best starting point for my use case and refining from there."

### Slide: "Demo 2: Microcopy Iteration"

**Script:**

"Demo two — microcopy. This is one of the most tedious parts of UI design: writing error messages, onboarding text, button labels, empty states. It's not glamorous, but it matters.

I asked Claude for five payment error messages. Friendly but clear, no jargon, no blaming the user. Here are the five it gave me.

Now watch what happens when I iterate. I said 'make number two shorter' — it tightened it up. I said 'make number five less casual' — it adjusted the tone.

In sixty seconds I had five options AND refined versions. Writing microcopy used to be something I'd put off because it was tedious. Now I do it in real-time while I'm designing the screen.

But — and this is important — I still choose. I know my brand's voice. I know whether 'oops' fits our tone or not. AI generated the options. I made the call."

### Slide: "Demo 3: Accessibility-Driven Design"

**Script:**

"Demo three — using AI as an accessibility consultant.

I asked Claude to suggest a color palette for a health app with specific requirements: WCAG AA contrast ratios, distinguishable under red-green color blindness, and usable for data visualization with five categories.

It came back with five colors, each with its contrast ratio. Blue at 7.2 to 1, amber at 4.8, purple at 6.1, cyan at 4.6, rose at 5.3. All passing WCAG AA. And it confirmed they remain distinct under deuteranopia simulation.

This is a perfect example of the human-plus-AI partnership. AI handles the analytical work — contrast math, WCAG rules, color-blind simulation. I make the aesthetic decision — does this palette feel right for a health brand? Maybe I swap the rose for something warmer. But I'm starting from a technically correct foundation instead of guessing and checking."

### Slide: "Practical Tip: Prompt Templates"

**Script:**

"Here's a practical tip. Don't write prompts from scratch every time. Build skills.

A skill is a named, reusable prompt that encodes your team's context. This one is called generate-ui-component. It locks in the brand — Threadline, a fashion e-commerce company — the design system, the voice, the platform, and the color palette.

Now when anyone on my team needs a component, they invoke this skill and fill in two blanks: what component and what use case. Everything else is pre-loaded. A product card for new arrivals. A cart drawer for checkout. A size selector for product pages.

The key is: name it, save it, share it. When everyone uses the same skill, the AI outputs stay aligned with your brand. It's a design system for your prompts."

### Slide: "AI Gets You a Starting Point"

**Script:**

"Let's be honest. AI output is never the deliverable. It's always the starting point.

Here's what I actually changed from AI output on a recent project. The spacing was 10 pixels — I adjusted it to our 8-pixel grid. The CTA said 'Submit' — generic. I changed it to 'Start My Plan' because that's our brand voice. Card radius was 12 pixels — I brought it down to 8 to match our design system. And the AI completely missed the empty state — I had to add that myself.

None of these changes are huge. But they're the difference between something that looks generic and something that feels like YOUR product. AI handles the heavy lifting. You add the craft. That's the partnership."

**Timing Check:** You should be about 28 minutes in.

---

## Section 5: Rapid Iteration & Testing Concepts (8 min)

### Slide: "Diverge with AI, converge with judgment"

**Script:**

"Here's the strategy I want you to remember: diverge with AI, converge with judgment.

In traditional design, you might explore two or three options because that's all you have time for. With AI, you can explore six, eight, ten options in the same timeframe. More options explored means better decisions made. You're not settling for the first decent idea — you're choosing the best one from a wider field.

Let me show you what this looks like in practice."

### Slide: "AI for User Testing Prep"

**Script:**

"AI is also great at generating test artifacts. Here's a usability test script I generated for a food delivery checkout flow. Five tasks, think-aloud protocol, complete with intro script and follow-up questions.

Look at Task 2 — it gives a specific scenario: 'You've added a burrito bowl to your cart. Complete checkout with the saved credit card.' That's a well-structured task. Specific, achievable, testable.

Task 4 is an edge case: 'Change the delivery address after placing the order.' That's the kind of task that reveals friction in your flow.

Now, could I have written this myself? Of course. But it would have taken me twenty to thirty minutes. Claude generated it in seconds.

But here's the human part: AI can write the test script, but INTERPRETING what happens during the test — reading the participant's body language, noticing where they hesitate, understanding the gap between what they say and what they do — that's deeply human work. AI is the research assistant. You're the researcher."

### Slide: "Iterate After Testing"

**Script:**

"Here's where it comes full circle. You ran the user test — you watched real people struggle. Now you feed those findings back to AI.

Three issues from our checkout test: users missed the coupon field, the address form had too many fields, and nobody saw the delivery estimate until after ordering.

I gave those findings to Claude and asked for UI fixes. Move the coupon field up and make it a collapsible link. Reduce the address form to three required fields and auto-fill from zip code. Add a delivery estimate badge right next to the buy button.

Notice the loop: AI helped me write the test script, I ran the test and observed real users, then AI helped me generate fixes based on what I observed. But at every step, I'm the one interpreting behavior and deciding what to ship. AI is the accelerator. You're the driver."

### Slide: "The Strategy"

**Script:**

"So here's the framework — and you can see it on screen. On the left, one idea. One starting point. You feed it to AI and it fans out — five options, five different directions. That's divergence. The green lines spreading outward.

Then on the right, those five options converge back to a single point — your decision. The white lines coming together. You apply your expertise, your knowledge of the user, your design sensibility, and you pick the best path.

More options explored leads to better decisions, which leads to higher-quality outcomes. It's simple, and it works.

If you remember one framework from this talk, make it this one. Diverge with AI, converge with judgment.

OK — we've covered ideation, UI elements, and iteration. Let me give you some practical advice on actually integrating this into your workflow."

**Timing Check:** You should be about 36 minutes in.

---

## Section 6: Integrating AI Into Your Existing Workflow (5 min)

### Slide: "Start small. Start this week."

**Script:**

"OK, you've seen the demos. You've seen what's possible. Now the question is: how do you actually start?

My advice is simple. Start small. Start this week. Don't try to overhaul your entire workflow. Pick one thing."

### Slide: "Prompt Engineering Basics"

**Script:**

"Four rules for prompting. These cover ninety percent of what you need.

One — be specific. Don't say 'make me a form.' Say 'design a checkout form for a mobile food delivery app targeting users twenty to thirty-five.' Context makes the output relevant.

Two — provide examples. If you have a component you like, paste it in and say 'give me variations in this style.' The AI works better when it has a reference.

Three — iterate. It's a conversation, not a command. The first output is never perfect. That's fine. Follow up two or three times and it gets dramatically better.

Four — add constraints. 'No more than three colors.' 'Must work at three-twenty pixel width.' 'Follow our eight-pixel grid.' Constraints don't limit the AI — they focus it. You'll get better output with more constraints, not fewer."

### Slide: "Team Adoption"

**Script:**

"For team adoption, keep it low pressure. Pair AI alongside your existing tools — don't replace anything. It's an addition, not a substitution.

Pick one repetitive task. Maybe it's writing error messages. Maybe it's generating placeholder content. Maybe it's coming up with layout alternatives for design reviews. Try AI on that one thing for a week.

If it helps, great — expand. If it doesn't, you've lost nothing.

And share what works. Build a skill library as a team. When someone figures out a great prompt skill for generating settings pages, share it. That institutional knowledge compounds.

Remember — everything I showed today works in Claude, ChatGPT, Gemini, or whatever comes next. You're investing in a skill, not a subscription."

**Timing Check:** You should be about 41 minutes in.

---

## Section 7: Pitfalls & Honest Limitations (4 min)

*If running long, condense this to 2 minutes. Hit "What AI Is Bad At" and skip straight to takeaways.*

### Slide: "Let's be real"

**Script:**

"OK, I've spent most of this talk showing you what AI CAN do. Now let me be honest about what it can't. Because if I only showed you the highlights, I'd be doing you a disservice."

### Slide: "What AI Is Bad At"

**Script:**

"Four things AI is bad at. Full stop.

Original creative vision. AI is a remix engine. It's trained on existing work. It can recombine and vary, but it doesn't have original ideas. If you need a genuinely novel creative direction — something no one has done before — that comes from you.

Nuanced brand identity. AI can follow a style guide, but it doesn't understand the SOUL of your brand. It doesn't know why you chose that shade of blue or why your tone is warm but not cutesy.

Empathy-driven design. AI can generate empathy maps and user personas. But it has never felt frustrated by a confusing checkout flow. Real empathy comes from real observation.

And context you don't provide. This one is on us. AI only knows what you tell it. If you skip context, you get generic output. Garbage in, garbage out."

### Slide: "Common Mistakes"

**Script:**

"Four common mistakes I see.

Over-relying on defaults — accepting whatever AI gives you without adapting it. Every output needs your fingerprint.

Skipping the 'why' — if a stakeholder asks 'why did you choose this layout?' and your answer is 'because the AI suggested it,' that's not good enough. You need to articulate the design rationale.

Copy-paste culture — treating AI output as the final deliverable. It's never the final deliverable. Always a starting point.

And the uncanny valley — you've seen those websites that look polished but feel generic. Like every other AI-generated site. That happens when you don't add your own creative judgment."

### Slide: "Ethics & Attribution"

**Script:**

"Last point — be transparent with your stakeholders about how you're using AI. 'I used AI to generate initial concepts and then refined them.' That's honest and professional.

Understand the IP implications. The legal landscape is evolving.

And always use AI as a starting point, not the final product.

OK — let me leave you with three things."

**Timing Check:** You should be about 45 minutes in.

---

## Section 8: Key Takeaways & Call to Action (3 min)

### Slide: "Three Things to Remember"

**Script:**

"Three takeaways. I want you to slow down here with me.

Number one. AI accelerates the low-creativity parts of prototyping. The blank canvas, the repetitive variations, the placeholder content. Let AI handle those so you can spend more time on the high-creativity decisions that actually matter — what problem to solve, which direction best serves the user, how to make it feel like YOUR product.

[PAUSE — let it land]

Number two. The skill is in prompting and curation, not the specific tool. Don't worry about which AI to use. Worry about learning how to communicate with AI effectively. Context, constraints, iteration. That skill transfers everywhere.

[PAUSE]

Number three. Start this week. Not next month. Not after you've read five articles about it. This week. Pick your most tedious prototyping task and try AI on it. Write error messages. Generate layout alternatives. Create test scripts. Pick one thing and try it.

This week. One task. Try it."

### Slide: "Human + AI"

**Script:**

"AI is the most powerful design tool we've ever had.

[PAUSE]

But a tool is only as good as the person using it.

[LONG PAUSE — let the silence do the work]

The future is not AI replacing designers. The future is designers who use AI outperforming those who don't. That's not a threat. That's an invitation.

Thank you."

[PAUSE for applause, then advance to resources]

### Slide: "Resources"

**Script:**

"These resources are in the slides — grab a photo if you want them. Claude dot ai to try what I showed today. Anthropic's research page if you want to understand how these models work. Prompting Guide for fundamentals. And Nielsen Norman Group for how AI is changing UX research.

I'll share the slides after the talk. Now let's open it up for questions."

**Timing Check:** You should be about 48 minutes in.

---

## Section 9: Q&A (5 min)

### Slide: "Q&A"

**Script to open:**

"What questions do you have? And if you've got a specific use case — something from your own workflow — I'm happy to pull up Claude and do a quick live demo right now."

**If silence (have these ready):**

"Here's a question I get a lot: what's the biggest mistake you can make when starting with AI for design? And the answer is expecting perfection on the first prompt. It's a conversation. Iterate. Your second or third follow-up is always dramatically better than your first output."

"Another common one: do I use AI for everything now? No. I still sketch on paper. I still whiteboard with my team. AI is one tool in the toolbox — the newest one, and a powerful one, but not the only one."

**If someone asks for a live demo:**
1. Ask them to describe their use case in one sentence
2. Type the prompt live, narrating what you're doing: "I'm giving it context about the audience, adding constraints..."
3. Show the output and discuss: "Here's what we got. What would I change? What would you change?"

**Closing (after Q&A):**

"Thank you all for your time today. Remember — start this week. One task. Try it. I promise you'll be surprised."

---

## Timing Checkpoints

| At this point... | Clock should read... |
|---|---|
| Finishing Section 1 (Hook) | ~5 min |
| Finishing Section 2 (Bottleneck) | ~10 min |
| Finishing Section 3 (Ideation) | ~18 min |
| Finishing Section 4 (UI Elements) | ~28 min |
| Finishing Section 5 (Iteration) | ~36 min |
| Finishing Section 6 (Workflow) | ~41 min |
| Finishing Section 7 (Pitfalls) | ~45 min |
| Starting Q&A | ~48 min |

**If running long:** Trim Section 7 to 2 minutes — just "What AI is bad at" slide, then jump to takeaways. Skip Ethics & Common Mistakes slides.

**If running short:** Expand demos in Sections 3-5 — show more iteration steps, more variations, or do a quick live prompt.

---

## Emergency Backup Plans

**If the projector fails:** You have the speaker notes. Give the talk without slides — it's structured enough to work as pure narrative.

**If Claude is down during Q&A:** "Looks like the demo gods aren't with us today. That's actually a great reminder — this is why I pre-record demos for talks. Let me describe what would happen and you can try it yourself after."

**If you get a hostile question about AI replacing jobs:** "That's a fair concern. My experience is that AI changes WHAT we spend time on, not WHETHER we have work. The demand for good design isn't going down — if anything, AI raises the bar because teams can prototype and test more. The designers who thrive will be the ones who use these tools to do better work, not the ones who refuse to use them."
