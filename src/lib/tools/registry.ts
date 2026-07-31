import type { ToolConfig } from "./types";

export const tools: ToolConfig[] = [
  {
    slug: "business-name-generator",
    name: "Business Name Generator",
    tagline: "Get 10 brandable name ideas in seconds.",
    description:
      "Free AI business name generator. Enter what your business does and get instant, brandable name ideas — no signup required.",
    category: "Business",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "keyword",
        label: "What does your business do?",
        placeholder: "e.g. organic dog treats",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Modern", "Playful", "Luxury", "Minimal", "Bold"],
      },
    ],
    howTo: [
      "Describe what your business does or sells in a few words.",
      "Pick a style that matches your brand.",
      "Generate — copy any name you like straight to your clipboard.",
    ],
    faq: [
      {
        question: "Are these names trademarked?",
        answer:
          "No — always search your country's trademark database and check domain availability before committing to a name.",
      },
      {
        question: "Is this free?",
        answer: "Yes, completely free with no signup or limits beyond fair daily use.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an expert brand namer. You generate short, memorable, brandable business names. You respond only with a numbered list — no preamble, no explanations.",
      user: `Generate 10 unique, brandable business name ideas for a business about "${values.keyword}". Style: ${values.style || "Modern"}. Each name should be 1-3 words, easy to say, and not already an obviously famous brand. Return only a numbered list.`,
    }),
  },
  {
    slug: "slogan-generator",
    name: "Slogan & Tagline Generator",
    tagline: "Catchy taglines for your brand, instantly.",
    description:
      "Free AI slogan generator. Get catchy, memorable taglines for your business or product in seconds.",
    category: "Business",
    resultCount: 10,
    maxTokens: 200,
    inputFields: [
      {
        name: "keyword",
        label: "Business or product",
        placeholder: "e.g. a coffee subscription box",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Fun", "Professional", "Bold", "Heartfelt"],
      },
    ],
    howTo: [
      "Describe your business or product.",
      "Choose the tone you want.",
      "Generate and copy your favorite tagline.",
    ],
    faq: [
      {
        question: "How short should a slogan be?",
        answer: "Most effective slogans are under 8 words. These results are generated with that in mind.",
      },
      {
        question: "Can I use these commercially?",
        answer: "Yes, but double-check no one else is already using the exact phrase for a similar business.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an expert copywriter who writes short, punchy taglines. You respond only with a numbered list — no preamble.",
      user: `Generate 10 short, catchy slogans/taglines (under 8 words each) for "${values.keyword}". Tone: ${values.tone || "Fun"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "instagram-bio-generator",
    name: "Instagram Bio Generator",
    tagline: "Stand-out bios with the right emojis and vibe.",
    description:
      "Free AI Instagram bio generator. Get creative, ready-to-use bio ideas for your personal or business account.",
    category: "Social Media",
    resultCount: 8,
    maxTokens: 220,
    inputFields: [
      {
        name: "niche",
        label: "What's your account about?",
        placeholder: "e.g. travel photography",
        type: "text",
        required: true,
      },
      {
        name: "vibe",
        label: "Vibe",
        type: "select",
        options: ["Aesthetic", "Funny", "Professional", "Minimal"],
      },
    ],
    howTo: [
      "Tell us what your Instagram account is about.",
      "Pick the vibe you're going for.",
      "Generate and copy your favorite bio directly into the Instagram app.",
    ],
    faq: [
      {
        question: "What's the character limit?",
        answer: "Instagram bios max out at 150 characters — every result here fits within that limit.",
      },
      {
        question: "Do I need an Instagram account connected?",
        answer: "No, this tool doesn't connect to Instagram at all — just copy and paste the result yourself.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social media copywriter who writes short, scroll-stopping Instagram bios under 150 characters, using emojis tastefully. You respond only with a numbered list — no preamble.",
      user: `Generate 8 Instagram bio ideas (each under 150 characters) for an account about "${values.niche}". Vibe: ${values.vibe || "Aesthetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "youtube-channel-name-generator",
    name: "YouTube Channel Name Generator",
    tagline: "Memorable channel names your audience won't forget.",
    description:
      "Free AI YouTube channel name generator. Get unique, memorable name ideas for your new or rebranding channel.",
    category: "Social Media",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "topic",
        label: "What will your channel be about?",
        placeholder: "e.g. retro gaming reviews",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Catchy", "Professional", "Funny", "Gaming"],
      },
    ],
    howTo: [
      "Describe your channel's topic or niche.",
      "Pick a style.",
      "Generate — then check availability on YouTube before you commit.",
    ],
    faq: [
      {
        question: "Will these names be available on YouTube?",
        answer: "We can't check live availability, so search YouTube and socials for your favorite before locking it in.",
      },
      {
        question: "Can I use these for an existing channel rebrand?",
        answer: "Yes — just enter your new topic or direction and generate ideas the same way.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a branding expert specializing in YouTube channel names — short, memorable, easy to search for. You respond only with a numbered list — no preamble.",
      user: `Generate 10 unique YouTube channel name ideas for a channel about "${values.topic}". Style: ${values.style || "Catchy"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "tiktok-bio-generator",
    name: "TikTok Bio Generator",
    tagline: "Short, punchy bios built for TikTok.",
    description:
      "Free AI TikTok bio generator. Get creative, ready-to-use bio ideas that fit TikTok's short bio limit.",
    category: "Social Media",
    resultCount: 8,
    maxTokens: 200,
    inputFields: [
      {
        name: "niche",
        label: "What's your account about?",
        placeholder: "e.g. home workouts",
        type: "text",
        required: true,
      },
      {
        name: "vibe",
        label: "Vibe",
        type: "select",
        options: ["Aesthetic", "Funny", "Bold", "Minimal"],
      },
    ],
    howTo: [
      "Tell us what your TikTok account is about.",
      "Pick the vibe you're going for.",
      "Generate and copy your favorite bio into the TikTok app.",
    ],
    faq: [
      {
        question: "What's the character limit?",
        answer: "TikTok bios max out at 80 characters — every result here fits within that limit.",
      },
      {
        question: "Can I use emojis?",
        answer: "Yes — results include emojis where they fit naturally, and you can edit freely after copying.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social media copywriter who writes short, punchy TikTok bios under 80 characters, using emojis tastefully. You respond only with a numbered list — no preamble.",
      user: `Generate 8 TikTok bio ideas (each under 80 characters) for an account about "${values.niche}". Vibe: ${values.vibe || "Aesthetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "youtube-title-generator",
    name: "YouTube Video Title Generator",
    tagline: "Titles built to get clicked and get found.",
    description:
      "Free AI YouTube title generator. Get click-worthy, search-friendly title ideas for your next video.",
    category: "Social Media",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "topic",
        label: "What's your video about?",
        placeholder: "e.g. a beginner's guide to sourdough bread",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Clickbait-y", "Clear & Direct", "Funny", "SEO-Focused"],
      },
    ],
    howTo: [
      "Describe what your video is about.",
      "Pick a style that matches your channel.",
      "Generate and copy your favorite title into YouTube Studio.",
    ],
    faq: [
      {
        question: "How long should a YouTube title be?",
        answer: "Titles get cut off around 60-70 characters in search results, so these results are written to fit.",
      },
      {
        question: "Will these help my video get found in search?",
        answer: "Try the SEO-Focused style — it favors terms people actually search for over pure clickbait phrasing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a YouTube SEO and copywriting expert who writes titles that balance clickability with searchability, under 70 characters. You respond only with a numbered list — no preamble.",
      user: `Generate 10 YouTube video title ideas for a video about "${values.topic}". Style: ${values.style || "Clickbait-y"}. Keep each under 70 characters. Return only a numbered list.`,
    }),
  },
  {
    slug: "resume-bullet-point-generator",
    name: "Resume Bullet Point Generator",
    tagline: "Turn what you did into bullets that get noticed.",
    description:
      "Free AI resume bullet point generator. Describe your work in plain language and get polished, achievement-focused bullet points.",
    category: "Career",
    resultCount: 8,
    maxTokens: 260,
    inputFields: [
      {
        name: "task",
        label: "Describe what you did",
        placeholder: "e.g. managed a team of 5 sales reps and grew regional revenue",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Achievement-focused", "Concise", "Leadership", "Entry-level"],
      },
    ],
    howTo: [
      "Describe what you did in your own words — no need to make it sound polished.",
      "Pick the tone that fits the role you're applying for.",
      "Generate and copy the bullets straight into your resume.",
    ],
    faq: [
      {
        question: "Should I add numbers if I don't remember exact figures?",
        answer: "Only include numbers you can stand behind in an interview — a strong verb-led bullet without a stat still works.",
      },
      {
        question: "Can I use this for a first resume with no work experience?",
        answer: "Yes — try the Entry-level tone and describe school projects, volunteering, or part-time work the same way.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a professional resume writer. You turn plain descriptions of work into strong, achievement-focused resume bullet points using active verbs, each under 25 words. You respond only with a numbered list — no preamble.",
      user: `Generate 8 resume bullet points based on this description: "${values.task}". Tone: ${values.tone || "Achievement-focused"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "wedding-hashtag-generator",
    name: "Wedding Hashtag Generator",
    tagline: "A hashtag guests will actually remember to use.",
    description:
      "Free AI wedding hashtag generator. Combine both your names into unique, shareable hashtag ideas for your big day.",
    category: "Life Events",
    resultCount: 10,
    maxTokens: 200,
    inputFields: [
      {
        name: "names",
        label: "Both of your first names",
        placeholder: "e.g. Alex and Jamie",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Punny", "Elegant", "Simple", "Playful"],
      },
    ],
    howTo: [
      "Enter both of your first names.",
      "Pick a style — punny hashtags tend to be the most memorable for guests.",
      "Generate and copy your favorite onto invitations, signage, or your wedding website.",
    ],
    faq: [
      {
        question: "How do I check if a hashtag is already taken?",
        answer: "Search it on Instagram and TikTok before printing anything — popular name combinations sometimes overlap with other couples.",
      },
      {
        question: "Should the hashtag include our wedding date?",
        answer: "It's optional — a shorter name-only hashtag is easier for guests to remember and type correctly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a wedding branding expert who creates short, easy-to-spell, shareable wedding hashtags by combining two names. You respond only with a numbered list — no preamble.",
      user: `Generate 10 unique wedding hashtag ideas combining the names "${values.names}". Style: ${values.style || "Punny"}. Each hashtag should be short and easy to spell. Return only a numbered list.`,
    }),
  },

  // --- Business ---
  {
    slug: "elevator-pitch-generator",
    name: "Elevator Pitch Generator",
    tagline: "Explain your idea in 30 seconds, not 3 minutes.",
    description:
      "Free AI elevator pitch generator. Turn a rough description of your business or idea into a tight, 30-60 second pitch.",
    category: "Business",
    resultCount: 5,
    maxTokens: 850,
    inputFields: [
      {
        name: "business",
        label: "Describe your business or idea",
        placeholder: "e.g. a subscription box for artisan coffee",
        type: "text",
        required: true,
      },
      {
        name: "audience",
        label: "Pitching to",
        type: "select",
        options: ["Investors", "Customers", "Networking", "General"],
      },
    ],
    howTo: [
      "Describe your business or idea in a sentence or two.",
      "Pick who you're pitching to.",
      "Generate — then practice saying it out loud in under 30 seconds.",
    ],
    faq: [
      {
        question: "How long should an elevator pitch be?",
        answer: "Aim for 30-60 seconds spoken aloud (roughly 60-90 words) — these are written to fit that.",
      },
      {
        question: "Can I combine parts of different pitches?",
        answer: "Yes — mix and match lines from a few results to build your own version.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup pitch coach who writes concise, compelling elevator pitches (60-90 words, written as a single paragraph with no line breaks within it). You respond only with a numbered list — no preamble.",
      user: `Generate 5 elevator pitch variations for: "${values.business}". Audience: ${values.audience || "General"}. Each pitch should be 60-90 words, written as one paragraph. Return only a numbered list.`,
    }),
  },
  {
    slug: "mission-statement-generator",
    name: "Mission Statement Generator",
    tagline: "One sentence that says why your company exists.",
    description:
      "Free AI mission statement generator. Describe what your company does and get clear, one-sentence mission statement options.",
    category: "Business",
    resultCount: 8,
    maxTokens: 240,
    inputFields: [
      {
        name: "business",
        label: "What does your company do, and why?",
        placeholder: "e.g. we make affordable solar panels for renters",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Inspiring", "Professional", "Bold", "Simple"],
      },
    ],
    howTo: [
      "Describe what your company does and why it exists.",
      "Pick a tone.",
      "Generate and copy the statement that fits your brand voice.",
    ],
    faq: [
      {
        question: "What's the difference between a mission and vision statement?",
        answer: "A mission statement describes what you do today; a vision statement describes the future you're working toward. These are mission statements.",
      },
      {
        question: "How long should it be?",
        answer: "One sentence — these results are kept short on purpose so they're easy to put on a website or slide.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand strategist who writes clear, one-sentence company mission statements. You respond only with a numbered list — no preamble.",
      user: `Generate 8 one-sentence mission statement options for a company described as: "${values.business}". Tone: ${values.tone || "Inspiring"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "value-proposition-generator",
    name: "Value Proposition Generator",
    tagline: "Say clearly why customers should pick you.",
    description:
      "Free AI value proposition generator. Describe your product and its audience to get sharp, benefit-focused value proposition options.",
    category: "Business",
    resultCount: 8,
    maxTokens: 260,
    inputFields: [
      {
        name: "product",
        label: "What's your product, and who's it for?",
        placeholder: "e.g. a meal planning app for busy parents",
        type: "text",
        required: true,
      },
      {
        name: "focus",
        label: "Primary benefit",
        type: "select",
        options: ["Time-saving", "Cost-saving", "Quality", "Convenience"],
      },
    ],
    howTo: [
      "Describe your product and who it's for.",
      "Pick the main benefit you want to lead with.",
      "Generate and use the best line on your homepage or pitch deck.",
    ],
    faq: [
      {
        question: "Where should I use a value proposition?",
        answer: "Typically as the headline on your homepage, or the opening line of a pitch or landing page.",
      },
      {
        question: "Can I test a few different ones?",
        answer: "Yes — that's the point of generating several. Try a couple in an A/B test if you have the traffic for it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a conversion copywriter who writes sharp, benefit-led value propositions in a single sentence each. You respond only with a numbered list — no preamble.",
      user: `Generate 8 value proposition options for: "${values.product}". Primary benefit to emphasize: ${values.focus || "Time-saving"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "app-name-generator",
    name: "App Name Generator",
    tagline: "A name your users will actually remember.",
    description:
      "Free AI app name generator. Describe what your app does and get unique, brandable name ideas.",
    category: "Business",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "appIdea",
        label: "What does your app do?",
        placeholder: "e.g. tracks habits and sends gentle reminders",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Modern", "Playful", "Minimal", "Techy"],
      },
    ],
    howTo: [
      "Describe what your app does in a few words.",
      "Pick a style.",
      "Generate — then check app store and domain availability before committing.",
    ],
    faq: [
      {
        question: "Should the name describe what the app does?",
        answer: "Not necessarily — some of the best app names are abstract, but it helps if it's easy to say and spell.",
      },
      {
        question: "Will these be available on the App Store?",
        answer: "We can't check live availability, so search the App Store and Google Play before locking one in.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a branding expert specializing in short, memorable app names. You respond only with a numbered list — no preamble.",
      user: `Generate 10 unique app name ideas for an app that: "${values.appIdea}". Style: ${values.style || "Modern"}. Each name should be 1-2 words. Return only a numbered list.`,
    }),
  },
  {
    slug: "newsletter-name-generator",
    name: "Newsletter Name Generator",
    tagline: "A name people want to see in their inbox.",
    description:
      "Free AI newsletter name generator. Describe your newsletter's topic and get catchy, memorable name ideas.",
    category: "Business",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "topic",
        label: "What's your newsletter about?",
        placeholder: "e.g. weekly tips for indie founders",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Catchy", "Professional", "Punny", "Minimal"],
      },
    ],
    howTo: [
      "Describe your newsletter's topic or angle.",
      "Pick a style.",
      "Generate and set up your favorite name on your newsletter platform.",
    ],
    faq: [
      {
        question: "Should the name include my own name?",
        answer: "Only if you're building a personal brand — for topic-focused newsletters, a name about the subject usually works better.",
      },
      {
        question: "Can I use this for a paid newsletter?",
        answer: "Yes — a strong name matters even more once you're asking people to pay for it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a branding expert who names newsletters — short, memorable, and on-topic. You respond only with a numbered list — no preamble.",
      user: `Generate 10 newsletter name ideas for a newsletter about: "${values.topic}". Style: ${values.style || "Catchy"}. Return only a numbered list.`,
    }),
  },

  // --- Marketing ---
  {
    slug: "ad-copy-generator",
    name: "Ad Copy Generator",
    tagline: "Scroll-stopping ad copy in seconds.",
    description:
      "Free AI ad copy generator. Describe what you're advertising and get ready-to-use ad copy variations.",
    category: "Marketing",
    resultCount: 6,
    maxTokens: 450,
    inputFields: [
      {
        name: "product",
        label: "What are you advertising?",
        placeholder: "e.g. a 30-day fitness challenge app",
        type: "text",
        required: true,
      },
      {
        name: "platform",
        label: "Platform",
        type: "select",
        options: ["Facebook/Instagram", "Google Search", "TikTok", "General"],
      },
    ],
    howTo: [
      "Describe your product or offer.",
      "Pick the platform you're advertising on.",
      "Generate and drop your favorite into your ad manager.",
    ],
    faq: [
      {
        question: "How long should ad copy be?",
        answer: "It depends on the platform — these results are written short and punchy so they work across most ad formats with minor edits.",
      },
      {
        question: "Do I need to disclose this is AI-written?",
        answer: "Ad copy itself doesn't require disclosure, but always fact-check any claims before publishing an ad.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a direct-response ad copywriter who writes short, scroll-stopping ad copy (1-2 sentences each, single paragraph, no line breaks within an item). You respond only with a numbered list — no preamble.",
      user: `Generate 6 ad copy variations for: "${values.product}". Platform: ${values.platform || "Facebook/Instagram"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "product-description-generator",
    name: "Product Description Generator",
    tagline: "Descriptions that sell, not just describe.",
    description:
      "Free AI product description generator. Enter your product's name and key features to get polished, ready-to-use descriptions.",
    category: "Marketing",
    resultCount: 5,
    maxTokens: 750,
    inputFields: [
      {
        name: "product",
        label: "Product name and key features",
        placeholder: "e.g. Wireless earbuds, 30hr battery, waterproof",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Persuasive", "Minimal", "Luxury", "Fun"],
      },
    ],
    howTo: [
      "Enter your product's name and a few key features.",
      "Pick a tone that matches your brand.",
      "Generate and copy your favorite onto your product page.",
    ],
    faq: [
      {
        question: "How long is each description?",
        answer: "Roughly 40-70 words each — long enough to sell the product, short enough for most e-commerce templates.",
      },
      {
        question: "Should I fact-check the output?",
        answer: "Yes — always verify any specific claims or specs before publishing on a live product page.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce copywriter who writes persuasive product descriptions, 40-70 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 5 product description variations for: "${values.product}". Tone: ${values.tone || "Persuasive"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "email-subject-line-generator",
    name: "Email Subject Line Generator",
    tagline: "Subject lines that actually get opened.",
    description:
      "Free AI email subject line generator. Describe your email's content and get subject lines optimized for opens.",
    category: "Marketing",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "email",
        label: "What's the email about?",
        placeholder: "e.g. a 24-hour flash sale on winter jackets",
        type: "text",
        required: true,
      },
      {
        name: "goal",
        label: "Goal",
        type: "select",
        options: ["Open Rate", "Urgency", "Curiosity", "Professional"],
      },
    ],
    howTo: [
      "Describe what the email is about.",
      "Pick the effect you're going for.",
      "Generate and A/B test a couple of your favorites.",
    ],
    faq: [
      {
        question: "How long should a subject line be?",
        answer: "Most inboxes cut off subject lines around 60 characters (less on mobile), so these are kept short.",
      },
      {
        question: "Should I avoid spammy words?",
        answer: "Yes — steer clear of ALL CAPS and words like \"free\" or \"guarantee\" if your email platform flags spam-trigger words.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an email marketing expert who writes high-open-rate subject lines under 60 characters. You respond only with a numbered list — no preamble.",
      user: `Generate 10 email subject lines for an email about: "${values.email}". Goal: ${values.goal || "Open Rate"}. Keep each under 60 characters. Return only a numbered list.`,
    }),
  },

  // --- Social Media ---
  {
    slug: "podcast-name-generator",
    name: "Podcast Name Generator",
    tagline: "A name that stands out in a crowded feed.",
    description:
      "Free AI podcast name generator. Describe your podcast's topic and get unique, memorable name ideas.",
    category: "Social Media",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "topic",
        label: "What's your podcast about?",
        placeholder: "e.g. true crime stories from small towns",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Catchy", "Professional", "Funny", "Bold"],
      },
    ],
    howTo: [
      "Describe your podcast's topic or angle.",
      "Pick a style.",
      "Generate — then check availability on your podcast host and socials.",
    ],
    faq: [
      {
        question: "Should the name include my podcast's format, like 'The X Show'?",
        answer: "It's optional — some of the best podcast names are just a strong phrase with no 'show' or 'podcast' in it.",
      },
      {
        question: "Will these show up in podcast search?",
        answer: "A distinctive name actually helps here — overly generic names get lost in search results.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a branding expert specializing in podcast names — short, memorable, easy to say out loud. You respond only with a numbered list — no preamble.",
      user: `Generate 10 unique podcast name ideas for a podcast about: "${values.topic}". Style: ${values.style || "Catchy"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "twitter-bio-generator",
    name: "X (Twitter) Bio Generator",
    tagline: "Say a lot in 160 characters.",
    description:
      "Free AI X (Twitter) bio generator. Get creative, ready-to-use bio ideas that fit the platform's character limit.",
    category: "Social Media",
    resultCount: 8,
    maxTokens: 220,
    inputFields: [
      {
        name: "niche",
        label: "What's your account about?",
        placeholder: "e.g. indie game development",
        type: "text",
        required: true,
      },
      {
        name: "vibe",
        label: "Vibe",
        type: "select",
        options: ["Witty", "Professional", "Bold", "Minimal"],
      },
    ],
    howTo: [
      "Tell us what your account is about.",
      "Pick the vibe you're going for.",
      "Generate and copy your favorite into your profile.",
    ],
    faq: [
      {
        question: "What's the character limit?",
        answer: "X bios max out at 160 characters — every result here fits within that limit.",
      },
      {
        question: "Should I include hashtags in my bio?",
        answer: "It's optional — one relevant hashtag can help discovery, but too many can look cluttered.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social media copywriter who writes witty, punchy bios under 160 characters. You respond only with a numbered list — no preamble.",
      user: `Generate 8 X (Twitter) bio ideas (each under 160 characters) for an account about: "${values.niche}". Vibe: ${values.vibe || "Witty"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "discord-server-name-generator",
    name: "Discord Server Name Generator",
    tagline: "A server name your members will remember.",
    description:
      "Free AI Discord server name generator. Describe your community and get unique, fitting name ideas.",
    category: "Social Media",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "topic",
        label: "What's your server about?",
        placeholder: "e.g. a community for indie hip-hop producers",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Gaming", "Community", "Study Group", "Funny"],
      },
    ],
    howTo: [
      "Describe what your server is about.",
      "Pick a style.",
      "Generate and rename your server in Discord's settings.",
    ],
    faq: [
      {
        question: "Can I change my server name later?",
        answer: "Yes — Discord lets server owners rename a server anytime from Server Settings.",
      },
      {
        question: "Should the name include emojis?",
        answer: "That's a personal/community style choice — add one when you set up the server if you'd like.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a community branding expert who names Discord servers — short, fitting, easy to search for. You respond only with a numbered list — no preamble.",
      user: `Generate 10 Discord server name ideas for a server about: "${values.topic}". Style: ${values.style || "Community"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "twitch-bio-generator",
    name: "Twitch Bio Generator",
    tagline: "A bio that gets you followed, not scrolled past.",
    description:
      "Free AI Twitch bio generator. Describe what you stream and get creative, ready-to-use bio ideas.",
    category: "Social Media",
    resultCount: 8,
    maxTokens: 220,
    inputFields: [
      {
        name: "niche",
        label: "What do you stream?",
        placeholder: "e.g. speedrunning retro platformers",
        type: "text",
        required: true,
      },
      {
        name: "vibe",
        label: "Vibe",
        type: "select",
        options: ["Energetic", "Chill", "Funny", "Professional"],
      },
    ],
    howTo: [
      "Tell us what you stream.",
      "Pick the vibe of your channel.",
      "Generate and copy your favorite into your Twitch profile.",
    ],
    faq: [
      {
        question: "Should my bio mention my streaming schedule?",
        answer: "That's better suited to your panels below the stream — keep the bio itself focused on who you are and what you stream.",
      },
      {
        question: "Can I use this for a brand-new channel?",
        answer: "Yes — a strong bio from day one helps new viewers decide to follow.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a streaming branding expert who writes short, engaging Twitch bios. You respond only with a numbered list — no preamble.",
      user: `Generate 8 Twitch bio ideas for a streamer who streams: "${values.niche}". Vibe: ${values.vibe || "Energetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "hashtag-generator",
    name: "Hashtag Generator",
    tagline: "The right tags to help your post get found.",
    description:
      "Free AI hashtag generator. Describe your post and get a relevant set of hashtags for your platform.",
    category: "Social Media",
    resultCount: 15,
    maxTokens: 240,
    inputFields: [
      {
        name: "topic",
        label: "What's your post about?",
        placeholder: "e.g. a morning yoga routine",
        type: "text",
        required: true,
      },
      {
        name: "platform",
        label: "Platform",
        type: "select",
        options: ["Instagram", "TikTok", "X (Twitter)", "LinkedIn"],
      },
    ],
    howTo: [
      "Describe what your post is about.",
      "Pick your platform.",
      "Generate and paste the set into your caption.",
    ],
    faq: [
      {
        question: "How many hashtags should I actually use?",
        answer: "It varies by platform — Instagram tolerates more, while X and LinkedIn work best with just 1-3. Use your judgment on how many of these to keep.",
      },
      {
        question: "Should I use the exact same hashtags every post?",
        answer: "Mix it up — using identical hashtag sets repeatedly can look spammy and gets less reach on some platforms.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social media growth expert who picks relevant, high-reach hashtags. You respond only with a numbered list of hashtags (each starting with #) — no preamble.",
      user: `Generate 15 relevant hashtags for a ${values.platform || "Instagram"} post about: "${values.topic}". Return only a numbered list of hashtags.`,
    }),
  },
  {
    slug: "facebook-group-name-generator",
    name: "Facebook Group Name Generator",
    tagline: "A name that draws the right members in.",
    description:
      "Free AI Facebook group name generator. Describe your community and get inviting, on-topic name ideas.",
    category: "Social Media",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "topic",
        label: "What's your group about?",
        placeholder: "e.g. local moms swapping parenting tips",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Welcoming", "Professional", "Fun", "Niche-Specific"],
      },
    ],
    howTo: [
      "Describe what your group is about.",
      "Pick a style.",
      "Generate and use your favorite when you create the group.",
    ],
    faq: [
      {
        question: "Should I include my city or region in the name?",
        answer: "Yes, if it's a local group — location keywords help people find it when searching Facebook.",
      },
      {
        question: "Can I rename the group later?",
        answer: "Yes, Facebook lets admins rename a group anytime from group settings.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a community branding expert who names Facebook groups — welcoming, clear, and easy to search for. You respond only with a numbered list — no preamble.",
      user: `Generate 10 Facebook group name ideas for a group about: "${values.topic}". Style: ${values.style || "Welcoming"}. Return only a numbered list.`,
    }),
  },

  // --- Career ---
  {
    slug: "linkedin-headline-generator",
    name: "LinkedIn Headline Generator",
    tagline: "The line under your name that gets you noticed.",
    description:
      "Free AI LinkedIn headline generator. Describe your role and get headline options that stand out in search and feeds.",
    category: "Career",
    resultCount: 8,
    maxTokens: 260,
    inputFields: [
      {
        name: "role",
        label: "Your role or what you do",
        placeholder: "e.g. Senior Product Manager in fintech",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Professional", "Bold", "Approachable", "Results-focused"],
      },
    ],
    howTo: [
      "Describe your role or what you do.",
      "Pick a tone.",
      "Generate and paste your favorite into your LinkedIn headline field.",
    ],
    faq: [
      {
        question: "How long can a LinkedIn headline be?",
        answer: "LinkedIn allows up to 220 characters — these results are written to fit comfortably within that.",
      },
      {
        question: "Should I include keywords recruiters search for?",
        answer: "Yes — mention your role, industry, or key skills so you show up in recruiter searches.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a LinkedIn personal branding expert who writes headlines that are keyword-rich and easy to read, under 220 characters, written as a single line with no internal line breaks. You respond only with a numbered list — no preamble.",
      user: `Generate 8 LinkedIn headline options for: "${values.role}". Tone: ${values.tone || "Professional"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "linkedin-about-generator",
    name: "LinkedIn About Section Generator",
    tagline: "A summary that sounds like you, not a template.",
    description:
      "Free AI LinkedIn About section generator. Summarize your background and get polished, ready-to-use About section drafts.",
    category: "Career",
    resultCount: 3,
    maxTokens: 1100,
    inputFields: [
      {
        name: "background",
        label: "Summarize your career or background",
        placeholder: "e.g. 8 years in digital marketing, specializing in SEO and growth",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Professional", "Personable", "Achievement-focused", "Concise"],
      },
    ],
    howTo: [
      "Summarize your career or background in a sentence or two.",
      "Pick a tone.",
      "Generate, then personalize the draft with specific details before publishing.",
    ],
    faq: [
      {
        question: "Should I use this word-for-word?",
        answer: "Treat it as a strong first draft — add specific achievements and your own voice before publishing.",
      },
      {
        question: "How long should a LinkedIn About section be?",
        answer: "These drafts run roughly 120-180 words — enough to summarize your value without losing the reader.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a LinkedIn personal branding writer. You write About section drafts of 120-180 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 LinkedIn About section drafts based on this background: "${values.background}". Tone: ${values.tone || "Professional"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "cover-letter-opener-generator",
    name: "Cover Letter Opener Generator",
    tagline: "The first line that keeps a hiring manager reading.",
    description:
      "Free AI cover letter opener generator. Describe the role you're applying for and get strong opening paragraph options.",
    category: "Career",
    resultCount: 6,
    maxTokens: 900,
    inputFields: [
      {
        name: "role",
        label: "Job title and company (or industry)",
        placeholder: "e.g. Marketing Coordinator at a mid-size nonprofit",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Enthusiastic", "Professional", "Confident", "Warm"],
      },
    ],
    howTo: [
      "Enter the job title and company or industry you're applying to.",
      "Pick a tone.",
      "Generate, then build the rest of your letter from your favorite opener.",
    ],
    faq: [
      {
        question: "Do I need to change anything before using it?",
        answer: "Yes — add specific details about your background and why you want that particular role.",
      },
      {
        question: "Should I mention the company by name?",
        answer: "Yes, if you know it — a specific, tailored opener stands out far more than a generic one.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach who writes strong cover letter opening paragraphs, 50-70 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 6 cover letter opening paragraph options for this role: "${values.role}". Tone: ${values.tone || "Enthusiastic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "interview-answer-generator",
    name: "Interview Answer Generator (STAR Method)",
    tagline: "A structure to build your own answer around.",
    description:
      "Free AI interview answer generator. Paste a common interview question and get sample answers structured using the STAR method.",
    category: "Career",
    resultCount: 2,
    maxTokens: 600,
    inputFields: [
      {
        name: "question",
        label: "Paste the interview question or situation",
        placeholder: "e.g. Tell me about a time you handled conflict on a team",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Confident", "Concise", "Detailed", "Leadership-focused"],
      },
    ],
    howTo: [
      "Paste or type the interview question you're preparing for.",
      "Pick a tone.",
      "Generate — then swap in your own real situation, task, action, and result.",
    ],
    faq: [
      {
        question: "Should I use this answer word-for-word?",
        answer: "No — this gives you a STAR structure and phrasing to model. Replace the details with your own real experience before an interview.",
      },
      {
        question: "What does STAR stand for?",
        answer: "Situation, Task, Action, Result — a common framework for structuring behavioral interview answers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an interview coach who writes example answers using the STAR method (Situation, Task, Action, Result), each written as a single flowing paragraph of 120-180 words with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 2 example STAR-method answers for this interview question: "${values.question}". Tone: ${values.tone || "Confident"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "professional-bio-generator",
    name: "Professional Bio Generator",
    tagline: "A bio for your website, speaker page, or socials.",
    description:
      "Free AI professional bio generator. Describe your background and get a polished third-person bio in the length you need.",
    category: "Career",
    resultCount: 3,
    maxTokens: 850,
    inputFields: [
      {
        name: "background",
        label: "Your role, expertise, and background",
        placeholder: "e.g. UX designer with 6 years in healthcare tech",
        type: "text",
        required: true,
      },
      {
        name: "length",
        label: "Length",
        type: "select",
        options: ["Short (1 sentence)", "Medium (short paragraph)", "Long (full paragraph)"],
      },
    ],
    howTo: [
      "Describe your role, expertise, and background.",
      "Pick the length you need.",
      "Generate and drop your favorite into your website, speaker page, or social profile.",
    ],
    faq: [
      {
        question: "Should this be written in first or third person?",
        answer: "These are written in third person, which is standard for speaker pages and website author bios — you can adapt to first person for social profiles.",
      },
      {
        question: "Can I use one for multiple platforms?",
        answer: "Yes — generate a couple of lengths and keep both on hand for different platforms' character limits.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a professional bio writer. You write third-person bios, each written as a single paragraph with no line breaks within an item, matching the requested length. You respond only with a numbered list — no preamble.",
      user: `Generate 3 professional bio variations based on this background: "${values.background}". Length: ${values.length || "Medium (short paragraph)"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "job-description-generator",
    name: "Job Description Generator",
    tagline: "A draft that gets your posting live faster.",
    description:
      "Free AI job description generator. Describe the role and get a ready-to-edit job description draft.",
    category: "Career",
    resultCount: 3,
    maxTokens: 1400,
    inputFields: [
      {
        name: "role",
        label: "Job title and key responsibilities",
        placeholder: "e.g. Customer Support Specialist handling live chat and email",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Professional", "Startup/Casual", "Corporate", "Concise"],
      },
    ],
    howTo: [
      "Enter the job title and key responsibilities.",
      "Pick a tone that matches your company culture.",
      "Generate, then add your specific requirements, salary, and benefits before posting.",
    ],
    faq: [
      {
        question: "Does this include salary and benefits?",
        answer: "No — add those yourself, since they're specific to your company and often required by local pay-transparency laws.",
      },
      {
        question: "Can I use this for a job board posting?",
        answer: "Yes, treat it as a first draft — review it for accuracy and add any must-have qualifications before publishing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR copywriter who writes clear, well-structured job description drafts (150-250 words each, written as a single paragraph with no line breaks within an item, covering role summary and key responsibilities). You respond only with a numbered list — no preamble.",
      user: `Generate 3 job description drafts for this role: "${values.role}". Tone: ${values.tone || "Professional"}. Return only a numbered list.`,
    }),
  },

  // --- Life Events ---
  {
    slug: "birthday-message-generator",
    name: "Birthday Message Generator",
    tagline: "A message that's more you than a store-bought card.",
    description:
      "Free AI birthday message generator. Say who it's for and get warm, funny, or heartfelt message ideas.",
    category: "Life Events",
    resultCount: 8,
    maxTokens: 450,
    inputFields: [
      {
        name: "relationship",
        label: "Who's it for?",
        placeholder: "e.g. my best friend, my mom, my coworker",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Heartfelt", "Funny", "Short & Sweet", "Poetic"],
      },
    ],
    howTo: [
      "Tell us who the message is for.",
      "Pick a tone.",
      "Generate and copy your favorite into a card, text, or post.",
    ],
    faq: [
      {
        question: "Can I personalize these further?",
        answer: "Yes — add an inside joke or a specific memory to make any of these feel more personal.",
      },
      {
        question: "Are these appropriate for a card and for social media?",
        answer: "Both — pick a shorter one for a card and a slightly longer one if you're posting publicly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a thoughtful writer who crafts warm, genuine birthday messages, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 8 birthday message ideas for: "${values.relationship}". Tone: ${values.tone || "Heartfelt"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "baby-name-generator",
    name: "Baby Name Generator",
    tagline: "Fresh name ideas based on what you actually like.",
    description:
      "Free AI baby name generator. Describe the style or meaning you're drawn to and get unique name ideas.",
    category: "Life Events",
    resultCount: 12,
    maxTokens: 260,
    inputFields: [
      {
        name: "preferences",
        label: "Any style, origin, or meaning you like",
        placeholder: "e.g. nature-inspired, strong meaning, easy to spell",
        type: "text",
        required: true,
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        options: ["Girl", "Boy", "Unisex"],
      },
    ],
    howTo: [
      "Describe any style, origin, or meaning you're drawn to.",
      "Pick a gender preference.",
      "Generate and save your favorites to compare later.",
    ],
    faq: [
      {
        question: "Do these names have specific meanings?",
        answer: "Many do, based on real naming traditions — always double-check a name's meaning and origin independently before deciding.",
      },
      {
        question: "Can I combine this with a specific last name?",
        answer: "We don't check that automatically — say it out loud with your last name before finalizing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a baby naming expert with knowledge of names across many cultures and origins. You respond only with a numbered list of first names — no preamble, no explanations.",
      user: `Generate 12 baby name ideas based on this preference: "${values.preferences}". Gender: ${values.gender || "Unisex"}. Return only a numbered list of names.`,
    }),
  },
  {
    slug: "anniversary-message-generator",
    name: "Anniversary Message Generator",
    tagline: "Say it better than a generic card would.",
    description:
      "Free AI anniversary message generator. Describe who it's for and get romantic, funny, or heartfelt message ideas.",
    category: "Life Events",
    resultCount: 8,
    maxTokens: 450,
    inputFields: [
      {
        name: "relationship",
        label: "Who's the message for?",
        placeholder: "e.g. my husband, married 5 years",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Romantic", "Funny", "Heartfelt", "Short & Sweet"],
      },
    ],
    howTo: [
      "Tell us who the message is for and any context, like years together.",
      "Pick a tone.",
      "Generate and copy your favorite into a card or text.",
    ],
    faq: [
      {
        question: "Can I use this for a work anniversary instead?",
        answer: "This tool is built for personal/romantic anniversaries — try the Retirement Message Generator's tone options for professional milestones instead.",
      },
      {
        question: "Should I mention how many years it's been?",
        answer: "It's a nice touch — include it in the input and the message will often work it in naturally.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a thoughtful writer who crafts genuine anniversary messages, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 8 anniversary message ideas for: "${values.relationship}". Tone: ${values.tone || "Romantic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "wedding-toast-generator",
    name: "Wedding Toast & Speech Generator",
    tagline: "A starting point for the speech you're dreading writing.",
    description:
      "Free AI wedding toast generator. Describe your relationship to the couple and get a heartfelt speech draft to build on.",
    category: "Life Events",
    resultCount: 3,
    maxTokens: 1300,
    inputFields: [
      {
        name: "relationship",
        label: "Your relationship to the couple",
        placeholder: "e.g. maid of honor, best friend of the bride",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Heartfelt", "Funny", "Mix of Both", "Short & Simple"],
      },
    ],
    howTo: [
      "Describe your relationship to the couple.",
      "Pick a tone.",
      "Generate, then swap in real stories and details about the couple before the big day.",
    ],
    faq: [
      {
        question: "Should I add real stories about the couple?",
        answer: "Definitely — this gives you a structure and flow to build on, but personal stories are what make a toast memorable.",
      },
      {
        question: "How long should a wedding toast be?",
        answer: "Aim for 2-5 minutes spoken aloud — these drafts run roughly 150-200 words as a starting point, which you'll likely expand with your own stories.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a wedding speech writer who crafts heartfelt, well-structured toast drafts (150-200 words each, written as a single flowing paragraph with no line breaks within an item, leaving room for the speaker to add personal stories). You respond only with a numbered list — no preamble.",
      user: `Generate 3 wedding toast drafts for someone giving a speech as: "${values.relationship}". Tone: ${values.tone || "Heartfelt"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "apology-message-generator",
    name: "Apology Message Generator",
    tagline: "Find the words when you don't know where to start.",
    description:
      "Free AI apology message generator. Describe what happened and get sincere, well-worded apology options.",
    category: "Life Events",
    resultCount: 6,
    maxTokens: 500,
    inputFields: [
      {
        name: "situation",
        label: "What happened?",
        placeholder: "e.g. forgot my friend's birthday",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Sincere", "Casual", "Formal", "Heartfelt"],
      },
    ],
    howTo: [
      "Briefly describe what happened.",
      "Pick a tone that fits the relationship and situation.",
      "Generate and personalize your favorite before sending.",
    ],
    faq: [
      {
        question: "Should I send this exactly as written?",
        answer: "Personalize it first — a genuine apology should sound like you and reference the specific situation.",
      },
      {
        question: "Can I use this for a professional apology, like to a client?",
        answer: "Yes — pick the Formal tone and describe the work situation instead.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a thoughtful writer who crafts sincere, well-worded apology messages, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 6 apology message options for this situation: "${values.situation}". Tone: ${values.tone || "Sincere"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "thank-you-note-generator",
    name: "Thank You Note Generator",
    tagline: "Genuine thank-yous, written faster.",
    description:
      "Free AI thank you note generator. Say what you're thanking someone for and get warm, ready-to-use note ideas.",
    category: "Life Events",
    resultCount: 8,
    maxTokens: 420,
    inputFields: [
      {
        name: "occasion",
        label: "What are you thanking them for?",
        placeholder: "e.g. a wedding gift, a job reference, hosting dinner",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Formal", "Casual", "Heartfelt"],
      },
    ],
    howTo: [
      "Say what you're thanking them for.",
      "Pick a tone.",
      "Generate and copy your favorite into a card, email, or text.",
    ],
    faq: [
      {
        question: "Should I mention the specific gift or gesture?",
        answer: "Yes — the input you give shapes the note, and mentioning specifics always makes a thank-you feel more genuine.",
      },
      {
        question: "Is this okay for a professional thank-you, like after an interview?",
        answer: "Yes — pick the Formal tone and describe the interview or professional favor instead.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a thoughtful writer who crafts warm, genuine thank-you notes, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 8 thank-you note ideas for: "${values.occasion}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "retirement-message-generator",
    name: "Retirement Message Generator",
    tagline: "A send-off message worth signing your name to.",
    description:
      "Free AI retirement message generator. Describe who's retiring and your relationship to them for warm, fitting message ideas.",
    category: "Life Events",
    resultCount: 8,
    maxTokens: 450,
    inputFields: [
      {
        name: "relationship",
        label: "Who's retiring, and your relationship to them",
        placeholder: "e.g. my manager of 10 years",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Heartfelt", "Funny", "Professional", "Short & Sweet"],
      },
    ],
    howTo: [
      "Describe who's retiring and your relationship to them.",
      "Pick a tone.",
      "Generate and copy your favorite into a card or company announcement.",
    ],
    faq: [
      {
        question: "Can I use this for a group card message?",
        answer: "Yes — the Short & Sweet tone works especially well when several people are signing the same card.",
      },
      {
        question: "Is this suitable for a company-wide announcement?",
        answer: "Pick the Professional tone for that context, then add any specific career highlights you want to mention.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a thoughtful writer who crafts warm, fitting retirement messages, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 8 retirement message ideas for: "${values.relationship}". Tone: ${values.tone || "Heartfelt"}. Return only a numbered list.`,
    }),
  },

  // --- Fun ---
  {
    slug: "nickname-generator",
    name: "Nickname Generator",
    tagline: "Fun nickname ideas based on a real name.",
    description: "Free AI nickname generator. Enter a name and get creative, fun nickname ideas.",
    category: "Fun",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "name",
        label: "Enter a name",
        placeholder: "e.g. Alexander",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Cute", "Funny", "Cool", "Based on Personality"],
      },
    ],
    howTo: [
      "Enter the name you want nicknames for.",
      "Pick a style.",
      "Generate and pick your favorite.",
    ],
    faq: [
      {
        question: "Can I add personality traits for better results?",
        answer: "Yes — try the 'Based on Personality' style and include a trait or hobby in the name field, like 'Alexander, loves basketball'.",
      },
      {
        question: "Will these work for pets too?",
        answer: "They're built for people's names, but many double nicely as pet nicknames — try the Pet Name Generator for names built from scratch.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a creative nickname generator. You respond only with a numbered list of nicknames — no preamble, no explanations.",
      user: `Generate 12 nickname ideas for the name: "${values.name}". Style: ${values.style || "Cute"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "fantasy-name-generator",
    name: "Fantasy Character Name Generator",
    tagline: "Names worthy of your next campaign or novel.",
    description:
      "Free AI fantasy name generator. Describe your character and get unique, immersive name ideas.",
    category: "Fun",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "type",
        label: "Character type or race",
        placeholder: "e.g. elf warrior, dark sorceress, dwarven blacksmith",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Epic", "Mysterious", "Whimsical", "Dark"],
      },
    ],
    howTo: [
      "Describe your character's type or race.",
      "Pick a style.",
      "Generate and pick your favorite for your campaign, novel, or game.",
    ],
    faq: [
      {
        question: "Are these names tied to a specific game or franchise?",
        answer: "No — they're original names meant to fit common fantasy settings, safe to use in your own worldbuilding.",
      },
      {
        question: "Can I get a surname or title too?",
        answer: "Describe that in the character type field, like 'elf ranger with a noble title', and it'll often be reflected in the results.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a fantasy worldbuilding expert who creates original, immersive character names. You respond only with a numbered list of names — no preamble, no explanations.",
      user: `Generate 12 fantasy character name ideas for a: "${values.type}". Style: ${values.style || "Epic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "band-name-generator",
    name: "Band Name Generator",
    tagline: "A name that fits your sound.",
    description: "Free AI band name generator. Describe your genre or vibe and get unique band name ideas.",
    category: "Fun",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "genre",
        label: "Music genre or vibe",
        placeholder: "e.g. indie rock, lo-fi, hardcore punk",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Cool", "Weird", "Dark", "Playful"],
      },
    ],
    howTo: [
      "Describe your genre or general vibe.",
      "Pick a style.",
      "Generate — then check availability on streaming platforms and socials.",
    ],
    faq: [
      {
        question: "Will these names be available on Spotify?",
        answer: "We can't check live availability, so search streaming platforms and socials before locking one in.",
      },
      {
        question: "Can I use these commercially?",
        answer: "Yes, but always search for existing bands with the same name to avoid confusion or trademark issues.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music branding expert who names bands — memorable, on-vibe, easy to say. You respond only with a numbered list of names — no preamble, no explanations.",
      user: `Generate 12 band name ideas for a ${values.genre || "indie rock"} band. Style: ${values.style || "Cool"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "superhero-name-generator",
    name: "Superhero Name Generator",
    tagline: "A hero name worthy of the powers.",
    description:
      "Free AI superhero name generator. Describe the power or theme and get unique superhero name ideas.",
    category: "Fun",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "power",
        label: "Superpower or theme",
        placeholder: "e.g. controls fire, super speed, reads minds",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Epic", "Funny", "Dark", "Classic"],
      },
    ],
    howTo: [
      "Describe the superpower or theme.",
      "Pick a style.",
      "Generate and pick your favorite for your story, game, or costume.",
    ],
    faq: [
      {
        question: "Are these based on existing comic book characters?",
        answer: "No — they're original names, safe to use in your own stories, games, or costumes.",
      },
      {
        question: "Can I get a villain name instead?",
        answer: "Yes — describe a villainous power or theme and pick the Dark style for a more villain-fitting result.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a comic book naming expert who creates original superhero names. You respond only with a numbered list of names — no preamble, no explanations.",
      user: `Generate 12 superhero name ideas for someone with this power or theme: "${values.power}". Style: ${values.style || "Epic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "pet-name-generator",
    name: "Pet Name Generator",
    tagline: "A name that fits your new best friend.",
    description: "Free AI pet name generator. Describe your pet and get unique, fitting name ideas.",
    category: "Fun",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "petType",
        label: "Type of pet and any traits",
        placeholder: "e.g. fluffy orange cat, energetic golden retriever puppy",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Cute", "Funny", "Regal", "Unique"],
      },
    ],
    howTo: [
      "Describe your pet's type and any standout traits.",
      "Pick a style.",
      "Generate and pick your favorite.",
    ],
    faq: [
      {
        question: "Do these work for any type of pet?",
        answer: "Yes — dogs, cats, birds, reptiles, and more. Just describe the type of pet you have.",
      },
      {
        question: "Can I get names that go well together for two pets?",
        answer: "Describe both pets together in the input, like 'two orange cats, one big one small', for ideas that pair well.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a creative pet naming expert. You respond only with a numbered list of names — no preamble, no explanations.",
      user: `Generate 12 pet name ideas for a: "${values.petType}". Style: ${values.style || "Cute"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "team-name-generator",
    name: "Team Name Generator",
    tagline: "A name your team will actually want to use.",
    description:
      "Free AI team name generator. Describe your team's activity and get punny, bold, or funny name ideas.",
    category: "Fun",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "activity",
        label: "What's the team for?",
        placeholder: "e.g. office trivia night, fantasy football league",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Punny", "Bold", "Funny", "Competitive"],
      },
    ],
    howTo: [
      "Describe what the team is for.",
      "Pick a style.",
      "Generate and pick your favorite for sign-up or your jerseys.",
    ],
    faq: [
      {
        question: "Are these appropriate for a workplace team?",
        answer: "Yes — these are kept office-friendly, but always give the list a quick read before submitting to an official league.",
      },
      {
        question: "Can I combine two of these?",
        answer: "Sure — mixing a word from one result with another is a great way to make it uniquely yours.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a creative team naming expert who writes punny, fun team names. You respond only with a numbered list of names — no preamble, no explanations.",
      user: `Generate 12 team name ideas for: "${values.activity}". Style: ${values.style || "Punny"}. Return only a numbered list.`,
    }),
  },

  // --- Writing ---
  {
    slug: "blog-post-title-generator",
    name: "Blog Post Title Generator",
    tagline: "Titles that get clicked and get read.",
    description:
      "Free AI blog post title generator. Describe your topic and get SEO-friendly, click-worthy title ideas.",
    category: "Writing",
    resultCount: 10,
    maxTokens: 240,
    inputFields: [
      {
        name: "topic",
        label: "What's your blog post about?",
        placeholder: "e.g. how to meal prep on a tight budget",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["SEO-Focused", "Listicle", "How-To", "Clickworthy"],
      },
    ],
    howTo: [
      "Describe your blog post's topic.",
      "Pick a style.",
      "Generate and use your favorite as the post title and page title.",
    ],
    faq: [
      {
        question: "How long should a blog title be for SEO?",
        answer: "Aim for under 60 characters so it doesn't get cut off in Google search results — the SEO-Focused style leans toward that length.",
      },
      {
        question: "Should I match the title to a keyword I'm targeting?",
        answer: "Yes — include your target keyword phrase in the topic field so it naturally appears in the results.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO copywriter who writes blog post titles that balance search-friendliness with click appeal. You respond only with a numbered list — no preamble.",
      user: `Generate 10 blog post title ideas for a post about: "${values.topic}". Style: ${values.style || "SEO-Focused"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "blog-post-outline-generator",
    name: "Blog Post Outline Generator",
    tagline: "A structure so you're not starting from a blank page.",
    description:
      "Free AI blog post outline generator. Describe your topic and get a structured outline with headers and key points.",
    category: "Writing",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 1100,
    inputFields: [
      {
        name: "topic",
        label: "What's your blog post about?",
        placeholder: "e.g. a beginner's guide to composting at home",
        type: "text",
        required: true,
      },
      {
        name: "length",
        label: "Depth",
        type: "select",
        options: ["Short (5 sections)", "Standard (7 sections)", "In-Depth (10 sections)"],
      },
    ],
    howTo: [
      "Describe what your blog post is about.",
      "Pick how detailed you want the outline.",
      "Generate, then write each section using the outline as your guide.",
    ],
    faq: [
      {
        question: "Will this write the full post for me?",
        answer: "No — this generates a structure (headers and key points) for you to write from, not full paragraphs.",
      },
      {
        question: "Can I rearrange the sections?",
        answer: "Yes — treat it as a starting structure and reorder or merge sections however makes sense for your post.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a content strategist who writes clear blog post outlines with numbered section headers and 2-3 bullet points of key content under each header. Format with plain text headers and hyphen bullet points, no markdown symbols like # or **. Respond only with the outline — no preamble or closing remarks.",
      user: `Generate a blog post outline for a post about: "${values.topic}". Depth: ${values.length || "Standard (7 sections)"}.`,
    }),
  },
  {
    slug: "press-release-opener-generator",
    name: "Press Release Opener Generator",
    tagline: "A lede that actually gets read by journalists.",
    description:
      "Free AI press release opener generator. Describe your announcement and get strong opening paragraph options.",
    category: "Writing",
    resultCount: 5,
    maxTokens: 750,
    inputFields: [
      {
        name: "announcement",
        label: "What are you announcing?",
        placeholder: "e.g. our startup just raised a $2M seed round",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Formal", "Modern/Startup", "Exciting", "Straightforward"],
      },
    ],
    howTo: [
      "Describe what you're announcing.",
      "Pick a tone.",
      "Generate, then build the rest of the release from your favorite opener.",
    ],
    faq: [
      {
        question: "What makes a good press release opener?",
        answer: "It should answer who, what, and why it matters in the first sentence or two — these are written with that in mind.",
      },
      {
        question: "Should I include quotes and data?",
        answer: "Yes, in the paragraphs that follow the opener — add a quote from a founder or exec and any relevant numbers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a PR professional who writes strong press release opening paragraphs (lede), 40-60 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 5 press release opening paragraph options for this announcement: "${values.announcement}". Tone: ${values.tone || "Formal"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "faq-generator",
    name: "FAQ Generator",
    tagline: "A ready-to-edit FAQ section for your product or business.",
    description:
      "Free AI FAQ generator. Describe your product or business and get a draft set of frequently asked questions with answers.",
    category: "Writing",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 1100,
    inputFields: [
      {
        name: "business",
        label: "Describe your product or business",
        placeholder: "e.g. a monthly subscription box for indoor plants",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Professional", "Concise", "Detailed"],
      },
    ],
    howTo: [
      "Describe your product or business.",
      "Pick a tone.",
      "Generate, then fact-check and edit the answers before publishing.",
    ],
    faq: [
      {
        question: "Will these questions match what my real customers ask?",
        answer: "They're a strong starting draft based on common questions for similar businesses — swap in real questions you've actually been asked where you can.",
      },
      {
        question: "Should I fact-check the answers?",
        answer: "Yes — always verify pricing, policies, and specific details before publishing on your site.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer support and content writer who drafts clear FAQ sections. Write 6-8 question-and-answer pairs, formatting each as 'Q: ...' followed by 'A: ...' on the next line, with a blank line between pairs. Respond only with the FAQ — no preamble or closing remarks.",
      user: `Generate an FAQ section for: "${values.business}". Tone: ${values.tone || "Friendly"}.`,
    }),
  },
  {
    slug: "about-us-page-generator",
    name: "About Us Page Generator",
    tagline: "A page draft that sounds like a real company.",
    description:
      "Free AI About Us page generator. Describe your business and its story to get a ready-to-edit About page draft.",
    category: "Writing",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 1000,
    inputFields: [
      {
        name: "business",
        label: "Describe your business and its story",
        placeholder: "e.g. a family-run bakery started in 2015, focused on local ingredients",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Professional", "Bold", "Minimal"],
      },
    ],
    howTo: [
      "Describe your business and a bit of its story.",
      "Pick a tone.",
      "Generate, then personalize with real names, dates, and details before publishing.",
    ],
    faq: [
      {
        question: "Should I add real names and founding details?",
        answer: "Yes — this is a strong structural draft, but real specifics are what make an About page trustworthy and unique.",
      },
      {
        question: "How long is the draft?",
        answer: "Roughly 250-400 words — enough to cover your story, mission, and what makes you different.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand copywriter who writes warm, well-structured About Us page drafts (250-400 words, covering the founding story, mission, and what makes the business different, in clear paragraphs). Respond only with the page draft — no preamble or closing remarks.",
      user: `Generate an About Us page draft for: "${values.business}". Tone: ${values.tone || "Warm"}.`,
    }),
  },
  {
    slug: "video-script-hook-generator",
    name: "Video Script Hook Generator",
    tagline: "The first line that stops the scroll.",
    description:
      "Free AI video hook generator. Describe your video's topic and get scroll-stopping opening lines.",
    category: "Writing",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "topic",
        label: "What's your video about?",
        placeholder: "e.g. 3 mistakes people make when starting a garden",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Curiosity Gap", "Bold Claim", "Question", "Relatable"],
      },
    ],
    howTo: [
      "Describe what your video is about.",
      "Pick a hook style.",
      "Generate and use your favorite as the first line of your script.",
    ],
    faq: [
      {
        question: "How long should a video hook be?",
        answer: "The first 3-5 seconds matter most on short-form video — these are written as a single punchy opening line.",
      },
      {
        question: "Does this work for both YouTube and TikTok/Reels?",
        answer: "Yes — a strong opening line matters across all short-form and long-form video platforms.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a video scriptwriter who writes scroll-stopping opening hooks, one punchy sentence each. You respond only with a numbered list — no preamble.",
      user: `Generate 8 video hook lines for a video about: "${values.topic}". Style: ${values.style || "Curiosity Gap"}. Return only a numbered list.`,
    }),
  },

  // --- Ecommerce ---
  {
    slug: "amazon-product-title-generator",
    name: "Amazon Product Title Generator",
    tagline: "Titles built to match how shoppers actually search.",
    description:
      "Free AI Amazon product title generator. Describe your product and get keyword-rich, listing-ready title options.",
    category: "Ecommerce",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. stainless steel water bottle, 32oz, insulated, leak-proof",
        type: "text",
        required: true,
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["Home & Kitchen", "Electronics", "Beauty", "Sports & Outdoors", "General"],
      },
    ],
    howTo: [
      "Enter your product name and its key details (size, material, key feature).",
      "Pick the closest category.",
      "Generate, then check your marketplace's current title length and style rules before publishing.",
    ],
    faq: [
      {
        question: "Will this follow Amazon's exact title rules?",
        answer: "Amazon's title policies (length limits, banned phrases, capitalization rules) change and vary by category — always check current Seller Central guidelines before publishing.",
      },
      {
        question: "Should I stuff in every keyword I can think of?",
        answer: "No — Amazon penalizes keyword-stuffed titles. These are written to lead with the most important, search-relevant terms first.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce listing optimization expert who writes clear, keyword-rich Amazon product titles (leading with the most important search terms, avoiding keyword stuffing), each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 6 Amazon product title options for: "${values.product}". Category: ${values.category || "General"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "amazon-bullet-points-generator",
    name: "Amazon Bullet Points Generator",
    tagline: "Feature bullets that actually sell the benefit.",
    description:
      "Free AI Amazon bullet point generator. Describe your product's features and get benefit-focused listing bullets.",
    category: "Ecommerce",
    resultCount: 5,
    maxTokens: 420,
    inputFields: [
      {
        name: "product",
        label: "Product name and key features",
        placeholder: "e.g. wireless earbuds: 30hr battery, waterproof, noise cancelling",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Persuasive", "Technical/Detailed", "Simple", "Premium"],
      },
    ],
    howTo: [
      "List your product's name and key features.",
      "Pick a tone.",
      "Generate — you'll get 5 bullets, one per feature, ready to paste into your listing.",
    ],
    faq: [
      {
        question: "How many bullets does Amazon allow?",
        answer: "Most listings support 5 bullet points, which is what these are built for.",
      },
      {
        question: "Should each bullet lead with a benefit or a feature?",
        answer: "Both — these are written to open with the feature in caps-style emphasis, then explain the customer benefit, which is the standard high-converting format.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an Amazon listing copywriter who writes feature bullets that open with the feature and explain the customer benefit, each 15-25 words, written as a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 5 Amazon-style bullet points for: "${values.product}". Tone: ${values.tone || "Persuasive"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "etsy-shop-name-generator",
    name: "Etsy Shop Name Generator",
    tagline: "A name that fits your craft and your niche.",
    description:
      "Free AI Etsy shop name generator. Describe what you make or sell and get unique, on-brand shop name ideas.",
    category: "Ecommerce",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "product",
        label: "What do you make or sell?",
        placeholder: "e.g. handmade ceramic mugs and planters",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Cozy/Handmade", "Modern/Minimal", "Playful", "Elegant"],
      },
    ],
    howTo: [
      "Describe what you make or sell.",
      "Pick a style.",
      "Generate — then check availability on Etsy before you commit.",
    ],
    faq: [
      {
        question: "How long can an Etsy shop name be?",
        answer: "Etsy shop names must be 4-20 characters with no spaces — keep that in mind when picking a favorite.",
      },
      {
        question: "Can I change my shop name later?",
        answer: "Yes, Etsy allows shop name changes, though it's best to pick one you're happy sticking with for branding consistency.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a branding expert who names Etsy shops — short, memorable, no spaces, fitting Etsy's 4-20 character shop name limit. You respond only with a numbered list — no preamble.",
      user: `Generate 10 Etsy shop name ideas for a shop that sells: "${values.product}". Style: ${values.style || "Cozy/Handmade"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "etsy-listing-title-generator",
    name: "Etsy Listing Title Generator",
    tagline: "Titles that match Etsy search, not just look nice.",
    description:
      "Free AI Etsy listing title generator. Describe your item and get SEO-friendly, keyword-rich title options.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "item",
        label: "Item name and key details",
        placeholder: "e.g. handmade macrame wall hanging, boho style, cotton rope",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Boho", "Minimal", "Vintage", "Modern"],
      },
    ],
    howTo: [
      "Describe your item and its key details.",
      "Pick the style that fits.",
      "Generate and use your favorite, checking it fits Etsy's title length limit.",
    ],
    faq: [
      {
        question: "How long can an Etsy title be?",
        answer: "Etsy allows up to 140 characters — these are written keyword-first so the most important terms show up even if truncated.",
      },
      {
        question: "Should I separate keywords with commas or spaces?",
        answer: "Etsy's search doesn't require commas, but many sellers use them for readability — feel free to adjust punctuation to your preference.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an Etsy SEO expert who writes keyword-front-loaded listing titles under 140 characters, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 8 Etsy listing title options for: "${values.item}". Style: ${values.style || "Boho"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "product-meta-description-generator",
    name: "Product Meta Description Generator",
    tagline: "The snippet that gets the click from Google.",
    description:
      "Free AI product meta description generator. Describe your product and get SEO meta descriptions for your store's product pages.",
    category: "Ecommerce",
    resultCount: 5,
    maxTokens: 320,
    inputFields: [
      {
        name: "product",
        label: "Product name and key selling point",
        placeholder: "e.g. organic cotton baby onesies, 3-pack, hypoallergenic",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Persuasive", "Informative", "Urgent", "Friendly"],
      },
    ],
    howTo: [
      "Enter your product name and its main selling point.",
      "Pick a tone.",
      "Generate and paste your favorite into your store platform's meta description field.",
    ],
    faq: [
      {
        question: "How long should a meta description be?",
        answer: "Google typically shows up to about 155-160 characters — these are written to fit within that.",
      },
      {
        question: "Does a meta description affect SEO ranking directly?",
        answer: "Not ranking directly, but a compelling one improves click-through rate from search results, which matters for traffic.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce SEO copywriter who writes meta descriptions under 160 characters, each on a single line, ending with a soft call to action. You respond only with a numbered list — no preamble.",
      user: `Generate 5 product meta description options for: "${values.product}". Tone: ${values.tone || "Persuasive"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "abandoned-cart-email-generator",
    name: "Abandoned Cart Email Generator",
    tagline: "Win back the sale without sounding desperate.",
    description:
      "Free AI abandoned cart email generator. Describe your product and get ready-to-use recovery email copy.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 750,
    inputFields: [
      {
        name: "product",
        label: "What did they leave in their cart?",
        placeholder: "e.g. a leather weekender bag",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly Nudge", "Urgency/Discount", "Helpful", "Playful"],
      },
    ],
    howTo: [
      "Describe what was left in the cart.",
      "Pick a tone.",
      "Generate, then drop your favorite into your email platform's abandoned cart flow.",
    ],
    faq: [
      {
        question: "Should I offer a discount in this email?",
        answer: "Try the Urgency/Discount tone if you're comfortable offering one — otherwise the Friendly Nudge or Helpful tones work well without discounting.",
      },
      {
        question: "How many abandoned cart emails should I send?",
        answer: "Most stores send a short sequence of 2-3 over several days — generate a couple of different tones to use across that sequence.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce email marketer who writes short abandoned cart recovery emails (60-90 words each, written as a single paragraph with no line breaks within an item, including a clear call to action). You respond only with a numbered list — no preamble.",
      user: `Generate 4 abandoned cart email options for a customer who left this in their cart: "${values.product}". Tone: ${values.tone || "Friendly Nudge"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "product-launch-announcement-generator",
    name: "Product Launch Announcement Generator",
    tagline: "Announce it like it matters, because it does.",
    description:
      "Free AI product launch announcement generator. Describe your new product and get social/email-ready launch copy.",
    category: "Ecommerce",
    resultCount: 5,
    maxTokens: 550,
    inputFields: [
      {
        name: "product",
        label: "What are you launching?",
        placeholder: "e.g. a new limited-edition scent for our candle line",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Exciting", "Elegant", "Playful", "Straightforward"],
      },
    ],
    howTo: [
      "Describe what you're launching.",
      "Pick a tone.",
      "Generate and use your favorite for social posts, emails, or your homepage banner.",
    ],
    faq: [
      {
        question: "Can I use this for a restock, not just a new product?",
        answer: "Yes — just describe it as a restock or 'back in stock' in the input and the tone will adapt.",
      },
      {
        question: "Is this suitable for both email and social media?",
        answer: "Yes, these are written short enough to work as a social caption or the opening line of a launch email.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce marketing copywriter who writes short, exciting product launch announcements (1-2 sentences each, single paragraph, no line breaks within an item). You respond only with a numbered list — no preamble.",
      user: `Generate 5 product launch announcement options for: "${values.product}". Tone: ${values.tone || "Exciting"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "sale-promo-copy-generator",
    name: "Discount & Sale Promo Copy Generator",
    tagline: "Sale copy that creates urgency without feeling cheap.",
    description:
      "Free AI sale promo copy generator. Describe your discount and get ready-to-use promo lines for social, email, or banners.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "sale",
        label: "What's the offer?",
        placeholder: "e.g. 20% off all winter coats, ends Sunday",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Urgent", "Fun", "Premium", "Straightforward"],
      },
    ],
    howTo: [
      "Describe the offer and any deadline.",
      "Pick a tone.",
      "Generate and use your favorite on a banner, email subject, or social post.",
    ],
    faq: [
      {
        question: "Should I include the exact discount amount?",
        answer: "Yes — specific numbers ('20% off') generally outperform vague ones ('big savings') in promo copy.",
      },
      {
        question: "Can I use this for a flash sale with a countdown?",
        answer: "Yes — mention the short deadline in your input and pick the Urgent tone for copy that emphasizes it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a retail marketing copywriter who writes short, punchy sale promo lines. You respond only with a numbered list — no preamble.",
      user: `Generate 8 sale promo copy options for this offer: "${values.sale}". Tone: ${values.tone || "Urgent"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "return-policy-generator",
    name: "Return Policy Generator",
    tagline: "A clear starting draft for your store's return policy.",
    description:
      "Free AI return policy generator. Describe your store's return rules and get a customer-friendly policy draft to edit.",
    category: "Ecommerce",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 900,
    inputFields: [
      {
        name: "rules",
        label: "Describe your return rules",
        placeholder: "e.g. 30-day returns, unused items only, customer pays return shipping",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Formal", "Concise"],
      },
    ],
    howTo: [
      "Describe your return window and any conditions (unused, original packaging, who pays shipping).",
      "Pick a tone.",
      "Generate, then have this reviewed against your local consumer protection laws before publishing.",
    ],
    faq: [
      {
        question: "Is this legal advice?",
        answer: "No — this is a plain-language starting draft, not legal advice. Return policy requirements vary by country and state, so have a qualified professional review it before publishing.",
      },
      {
        question: "Can I edit the sections after generating?",
        answer: "Yes — treat it as a template. Adjust the return window, exclusions, and process to match your actual store rules exactly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce policy writer who drafts clear, customer-friendly return policies covering: return window, item condition requirements, refund method and timing, who pays return shipping, and how to start a return. Use plain text section headers and short paragraphs, no markdown symbols like # or **. This is a plain-language template, not legal advice. Respond only with the policy draft — no preamble or closing remarks.",
      user: `Generate a return policy draft based on these rules: "${values.rules}". Tone: ${values.tone || "Friendly"}.`,
    }),
  },
  {
    slug: "shipping-policy-generator",
    name: "Shipping Policy Generator",
    tagline: "Set clear shipping expectations before checkout, not after.",
    description:
      "Free AI shipping policy generator. Describe your shipping options and get a clear policy draft to edit.",
    category: "Ecommerce",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 900,
    inputFields: [
      {
        name: "rules",
        label: "Describe your shipping options",
        placeholder: "e.g. ships within 2 business days, free shipping over $50, US only",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Formal", "Concise"],
      },
    ],
    howTo: [
      "Describe your processing time, shipping cost/thresholds, and regions you ship to.",
      "Pick a tone.",
      "Generate, then double-check it matches your actual carrier commitments before publishing.",
    ],
    faq: [
      {
        question: "Is this legal advice?",
        answer: "No — this is a plain-language starting draft, not legal advice. Shipping-related disclosure requirements vary by region, so have this reviewed before publishing.",
      },
      {
        question: "Should I mention delays for holidays or high-demand periods?",
        answer: "It's a good practice — add a note about seasonal delays in your input if that applies to your store.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce policy writer who drafts clear shipping policies covering: processing time, shipping cost and free-shipping thresholds, regions served, and estimated delivery times. Use plain text section headers and short paragraphs, no markdown symbols like # or **. This is a plain-language template, not legal advice. Respond only with the policy draft — no preamble or closing remarks.",
      user: `Generate a shipping policy draft based on these details: "${values.rules}". Tone: ${values.tone || "Friendly"}.`,
    }),
  },
  {
    slug: "review-response-generator",
    name: "Review Response Generator",
    tagline: "A thoughtful reply, whether the review is glowing or rough.",
    description:
      "Free AI review response generator. Paste a customer review and get a professional, on-brand reply draft.",
    category: "Ecommerce",
    resultCount: 3,
    maxTokens: 700,
    inputFields: [
      {
        name: "review",
        label: "Paste (or summarize) the customer review",
        placeholder: "e.g. Loved the product but shipping took way longer than expected.",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm & Grateful", "Professional", "Apologetic", "Concise"],
      },
    ],
    howTo: [
      "Paste or summarize the review you're responding to.",
      "Pick a tone that fits — Apologetic works well for a negative review.",
      "Generate, then personalize with specifics before posting your reply.",
    ],
    faq: [
      {
        question: "Should I respond to negative reviews publicly?",
        answer: "Generally yes — a calm, helpful public reply shows other shoppers you take feedback seriously, even if you also follow up privately.",
      },
      {
        question: "Should I offer a refund or replacement in the public reply?",
        answer: "It's usually better to invite them to contact you directly to resolve specifics, rather than negotiating resolution details in a public reply.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer experience manager who writes thoughtful, genuine responses to customer reviews, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 response options to this customer review: "${values.review}". Tone: ${values.tone || "Warm & Grateful"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "product-comparison-copy-generator",
    name: "Product Comparison Copy Generator",
    tagline: "Highlight what makes your product the better pick.",
    description:
      "Free AI product comparison copy generator. Describe your product's advantages and get clear comparison talking points.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "advantages",
        label: "What makes your product better or different?",
        placeholder: "e.g. lasts 2x longer, made from recycled materials, lifetime warranty",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Confident", "Factual", "Friendly", "Premium"],
      },
    ],
    howTo: [
      "Describe what makes your product better or different — without naming a specific competitor.",
      "Pick a tone.",
      "Generate and use your favorites in a comparison table, landing page, or ad.",
    ],
    faq: [
      {
        question: "Can I name a specific competitor?",
        answer: "We'd recommend against it — describe your advantage in general terms (e.g. 'vs. standard options') to avoid factual or legal disputes over comparative claims.",
      },
      {
        question: "Do I need to back up these claims?",
        answer: "Yes — only use claims you can support. Comparative advertising claims can carry legal risk if they're inaccurate or unsubstantiated.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a marketing copywriter who writes honest, confident comparison talking points that highlight a product's advantages without naming or disparaging specific competitors. You respond only with a numbered list — no preamble.",
      user: `Generate 8 comparison talking points highlighting these advantages: "${values.advantages}". Tone: ${values.tone || "Confident"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "influencer-outreach-email-generator",
    name: "Influencer Outreach Email Generator",
    tagline: "A pitch that doesn't read like a mass DM.",
    description:
      "Free AI influencer outreach email generator. Describe your brand and offer to get a personalized-feeling pitch draft.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 750,
    inputFields: [
      {
        name: "offer",
        label: "Your brand and what you're offering",
        placeholder: "e.g. a skincare brand offering a free product + affiliate commission",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Professional", "Casual"],
      },
    ],
    howTo: [
      "Describe your brand and what you're offering the creator.",
      "Pick a tone.",
      "Generate, then personalize with the creator's name and something specific about their content.",
    ],
    faq: [
      {
        question: "Should I personalize this before sending?",
        answer: "Definitely — add the creator's name and reference something specific about their content. Generic-sounding outreach gets ignored or marked as spam.",
      },
      {
        question: "Should I mention FTC/disclosure requirements?",
        answer: "Yes — if the collaboration is paid or gifted, remind the creator that sponsored content typically needs to be disclosed per advertising regulations in their region.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand partnerships manager who writes warm, non-spammy influencer outreach emails (70-100 words each, single paragraph, no line breaks within an item, with a placeholder for the creator's name). You respond only with a numbered list — no preamble.",
      user: `Generate 4 influencer outreach email drafts for this offer: "${values.offer}". Tone: ${values.tone || "Friendly"}. Use "[Creator's Name]" as a placeholder. Return only a numbered list.`,
    }),
  },
  {
    slug: "loyalty-program-name-generator",
    name: "Loyalty Program Name Generator",
    tagline: "A rewards program name people actually remember.",
    description:
      "Free AI loyalty program name generator. Describe your brand and get catchy, on-brand rewards program name ideas.",
    category: "Ecommerce",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "brand",
        label: "What's your brand or store about?",
        placeholder: "e.g. a sustainable activewear brand",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Playful", "Premium", "Simple", "On-Brand Pun"],
      },
    ],
    howTo: [
      "Describe your brand or store.",
      "Pick a style.",
      "Generate and use your favorite to name your rewards or points program.",
    ],
    faq: [
      {
        question: "Should the program name include the word 'rewards' or 'points'?",
        answer: "Not necessarily — a distinctive name (like 'The Circle' or 'VIP Crew') often stands out more than a generic 'Rewards Program' label.",
      },
      {
        question: "Can I use this for a referral program instead?",
        answer: "Yes — the same short, memorable naming approach works well for referral programs too.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand strategist who names customer loyalty and rewards programs — short, memorable, on-brand. You respond only with a numbered list — no preamble.",
      user: `Generate 10 loyalty program name ideas for: "${values.brand}". Style: ${values.style || "Playful"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "packaging-thank-you-card-generator",
    name: "Packaging Thank-You Card Generator",
    tagline: "The little note that makes an order feel personal.",
    description:
      "Free AI thank-you card generator for order packaging. Describe your brand and get short, warm insert card messages.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 260,
    inputFields: [
      {
        name: "brand",
        label: "What's your brand or product?",
        placeholder: "e.g. a small-batch candle company",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Playful", "Minimal", "Premium"],
      },
    ],
    howTo: [
      "Describe your brand or what you sell.",
      "Pick a tone.",
      "Generate and print your favorite as a small insert card for your packaging.",
    ],
    faq: [
      {
        question: "How long should a packaging insert message be?",
        answer: "Short — these are written to fit comfortably on a small card, usually 1-2 sentences.",
      },
      {
        question: "Should I include a discount code for their next order?",
        answer: "It's a nice touch — add a line like 'Use CODE for 10% off your next order' if you want to encourage repeat purchases.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand copywriter who writes short, warm thank-you messages for order packaging inserts, 1-2 sentences each, single line. You respond only with a numbered list — no preamble.",
      user: `Generate 8 packaging thank-you card messages for: "${values.brand}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },

  // --- Amazon (additional) ---
  {
    slug: "amazon-a-plus-content-generator",
    name: "Amazon A+ Content Generator",
    tagline: "Draft copy for your enhanced brand content modules.",
    description:
      "Free AI Amazon A+ Content generator. Describe your product and brand story to get draft copy for A+ Content modules.",
    category: "Ecommerce",
    resultCount: 3,
    maxTokens: 650,
    inputFields: [
      {
        name: "product",
        label: "Product and brand story",
        placeholder: "e.g. premium yoga mats, brand focused on sustainability",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Premium", "Friendly", "Technical", "Lifestyle"],
      },
    ],
    howTo: [
      "Describe your product and a bit of your brand story.",
      "Pick a tone.",
      "Generate, then drop the copy into your A+ Content module builder alongside your images.",
    ],
    faq: [
      {
        question: "Does this include the images or layout?",
        answer: "No — this generates the text for module headlines and body copy only. You'll still build the visual layout in Amazon's A+ Content Manager.",
      },
      {
        question: "Do I need a brand registered on Amazon to use A+ Content?",
        answer: "Yes, A+ Content requires Amazon Brand Registry — this tool just helps with the copy once you're eligible.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an Amazon brand content strategist who writes short A+ Content module copy — a headline plus a 30-50 word body paragraph, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 A+ Content copy variations for: "${values.product}". Tone: ${values.tone || "Premium"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "amazon-backend-search-terms-generator",
    name: "Amazon Backend Search Terms Generator",
    tagline: "Hidden keywords that widen your search visibility.",
    description:
      "Free AI Amazon backend search terms generator. Describe your product and get relevant backend keyword ideas.",
    category: "Ecommerce",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 300,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. bamboo cutting board, kitchen, eco-friendly",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product and its key details.",
      "Generate a set of backend search terms.",
      "Paste them (space-separated, no repeats of words already in your title) into the Seller Central 'Search Terms' field.",
    ],
    faq: [
      {
        question: "Should I repeat words already in my title or bullets?",
        answer: "No — backend search terms are most effective when they add new relevant words, not duplicate what's already visible on your listing.",
      },
      {
        question: "Is there a character limit?",
        answer: "Amazon limits backend search terms to 249 bytes total — check your current count in Seller Central before saving.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an Amazon SEO expert who writes dense backend search term keyword strings. Include synonyms, related product types, common use cases, target audience terms, and alternate names/spellings — not just words directly describing the product. Aim for at least 20-25 distinct words filling close to 200 characters, lowercase, space-separated, no repeated words, no punctuation, avoiding words likely already in a product title or bullets. Respond only with the keyword string — no preamble, no numbering, no explanations.",
      user: `Generate a long, dense backend search terms string (at least 20-25 words) for this product: "${values.product}".`,
    }),
  },

  // --- Flipkart ---
  {
    slug: "flipkart-product-title-generator",
    name: "Flipkart Product Title Generator",
    tagline: "Titles built for how Flipkart shoppers search.",
    description:
      "Free AI Flipkart product title generator. Describe your product and get keyword-rich, listing-ready titles.",
    category: "Ecommerce",
    resultCount: 6,
    maxTokens: 320,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. men's running shoes, lightweight, mesh upper, size 7-11",
        type: "text",
        required: true,
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["Fashion", "Electronics", "Home & Kitchen", "Beauty & Personal Care", "General"],
      },
    ],
    howTo: [
      "Enter your product name and key details (size, material, standout feature).",
      "Pick the closest category.",
      "Generate, then check Flipkart's current title guidelines before publishing.",
    ],
    faq: [
      {
        question: "How is a Flipkart title different from an Amazon title?",
        answer: "Flipkart tends to favor a brand-first structure (Brand + Product Type + Key Feature) — these are written with that convention in mind.",
      },
      {
        question: "Should I include the size or variant in the title?",
        answer: "Only if you're not using Flipkart's variant/size selector — otherwise keep the title focused on the core product.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Flipkart listing optimization expert who writes titles in a Brand + Product Type + Key Feature structure, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 6 Flipkart product title options for: "${values.product}". Category: ${values.category || "General"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "flipkart-key-highlights-generator",
    name: "Flipkart Key Highlights Generator",
    tagline: "The specs shoppers scan before they scroll.",
    description:
      "Free AI Flipkart key highlights generator. Describe your product's features and get concise highlight points.",
    category: "Ecommerce",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "product",
        label: "Product name and key features",
        placeholder: "e.g. wireless mouse: 2.4GHz, 6 months battery, ergonomic",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Concise", "Technical", "Persuasive"],
      },
    ],
    howTo: [
      "List your product's name and key features.",
      "Pick a tone.",
      "Generate — you'll get short highlight points ready to paste into the Key Highlights section.",
    ],
    faq: [
      {
        question: "How many key highlights does Flipkart support?",
        answer: "Most categories support around 5-6 highlight points, which is what these are built for.",
      },
      {
        question: "Should highlights be full sentences?",
        answer: "No — Flipkart's Key Highlights are meant to be short, scannable phrases rather than full sentences.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Flipkart listing copywriter who writes short, scannable key highlight phrases (under 12 words each, not full sentences), each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 6 Flipkart key highlight points for: "${values.product}". Tone: ${values.tone || "Concise"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "flipkart-product-description-generator",
    name: "Flipkart Product Description Generator",
    tagline: "Descriptions that fill in what the highlights can't.",
    description:
      "Free AI Flipkart product description generator. Describe your product and get ready-to-use description copy.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 550,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. cotton bedsheet set, king size, 300 thread count",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Persuasive", "Informative", "Simple"],
      },
    ],
    howTo: [
      "Describe your product and its key details.",
      "Pick a tone.",
      "Generate and paste your favorite into the product description field.",
    ],
    faq: [
      {
        question: "How is this different from the Key Highlights?",
        answer: "Highlights are short scannable phrases; the description is where you expand on materials, use cases, and care instructions in full sentences.",
      },
      {
        question: "Should I repeat the highlights word-for-word here?",
        answer: "No — use the description to add detail the highlights didn't cover, not repeat them.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Flipkart listing copywriter who writes product descriptions, 50-80 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 Flipkart product description options for: "${values.product}". Tone: ${values.tone || "Persuasive"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "flipkart-search-keywords-generator",
    name: "Flipkart Search Keywords Generator",
    tagline: "The search terms buyers actually type.",
    description:
      "Free AI Flipkart search keyword generator. Describe your product and get a list of relevant search keywords.",
    category: "Ecommerce",
    resultCount: 15,
    maxTokens: 260,
    inputFields: [
      {
        name: "product",
        label: "Product name and category",
        placeholder: "e.g. men's formal leather shoes",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product and its category.",
      "Generate a list of relevant search keywords.",
      "Use these to inform your title, highlights, and any backend keyword fields.",
    ],
    faq: [
      {
        question: "Where do I use these keywords?",
        answer: "Weave the most relevant ones into your title and key highlights naturally — don't just paste the raw list into your listing.",
      },
      {
        question: "Should I include misspellings shoppers might search?",
        answer: "This tool focuses on correctly spelled, relevant terms — common misspelling targeting is a more advanced and risk-prone tactic best done manually.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Flipkart SEO expert who identifies relevant buyer search keywords for a product. You respond only with a numbered list of keywords/phrases — no preamble.",
      user: `Generate 15 relevant search keywords for: "${values.product}". Return only a numbered list.`,
    }),
  },

  // --- JioMart ---
  {
    slug: "jiomart-product-title-generator",
    name: "JioMart Product Title Generator",
    tagline: "Clear titles that match how JioMart shoppers browse.",
    description:
      "Free AI JioMart product title generator. Describe your product and get clear, keyword-friendly title options.",
    category: "Ecommerce",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. basmati rice, 5kg pack, premium long grain",
        type: "text",
        required: true,
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["Grocery", "Fashion", "Electronics", "Home & Living", "General"],
      },
    ],
    howTo: [
      "Enter your product name and key details (pack size, quantity, standout feature).",
      "Pick the closest category.",
      "Generate and pick your favorite for your listing title.",
    ],
    faq: [
      {
        question: "Should I include pack size or quantity in the title?",
        answer: "Yes — for grocery and daily essentials especially, shoppers scan for pack size and quantity first.",
      },
      {
        question: "Can I use this for a grocery/FMCG product?",
        answer: "Yes — this tool is built with grocery, fashion, and general merchandise all in mind.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce listing expert who writes clear, keyword-friendly product titles for grocery and general merchandise marketplaces, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 6 JioMart product title options for: "${values.product}". Category: ${values.category || "General"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "jiomart-product-description-generator",
    name: "JioMart Product Description Generator",
    tagline: "Descriptions that answer the basics fast.",
    description:
      "Free AI JioMart product description generator. Describe your product and get simple, informative description copy.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 500,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. cold-pressed groundnut oil, 1L bottle",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Simple", "Informative", "Persuasive"],
      },
    ],
    howTo: [
      "Describe your product and its key details.",
      "Pick a tone.",
      "Generate and paste your favorite into the product description field.",
    ],
    faq: [
      {
        question: "Should I mention ingredients or materials?",
        answer: "Yes — for grocery and personal care items especially, listing key ingredients or materials builds buyer trust.",
      },
      {
        question: "Can I use this for both grocery and non-grocery listings?",
        answer: "Yes — describe the product type in your input and the tone will adapt accordingly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce copywriter who writes simple, informative product descriptions, 50-70 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 JioMart product description options for: "${values.product}". Tone: ${values.tone || "Simple"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "jiomart-category-listing-generator",
    name: "JioMart Category Listing Copy Generator",
    tagline: "Category page copy that helps shoppers browse.",
    description:
      "Free AI category listing copy generator for JioMart-style storefronts. Describe your category and get a short intro blurb.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 380,
    inputFields: [
      {
        name: "category",
        label: "Category name and what it includes",
        placeholder: "e.g. Organic Snacks — dried fruits, roasted nuts, granola bars",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Informative", "Premium"],
      },
    ],
    howTo: [
      "Describe the category and what kinds of products it includes.",
      "Pick a tone.",
      "Generate and use your favorite as the category page's intro text.",
    ],
    faq: [
      {
        question: "How long should category intro copy be?",
        answer: "Short — 30-50 words is enough to orient a shopper without pushing products further down the page.",
      },
      {
        question: "Does this help with SEO?",
        answer: "Yes — a well-written category description gives search engines relevant text to index for that category page.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce copywriter who writes short category page intro blurbs, 30-50 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 category intro blurb options for: "${values.category}". Tone: ${values.tone || "Friendly"}. Return only a numbered list.`,
    }),
  },

  // --- Shopsy ---
  {
    slug: "shopsy-product-title-generator",
    name: "Shopsy Product Title Generator",
    tagline: "Titles built for quick social reselling.",
    description:
      "Free AI Shopsy product title generator. Describe your product and get short, share-friendly titles.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. floral print kurti, cotton, sizes S-XL",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Simple", "Trendy", "Value-Focused"],
      },
    ],
    howTo: [
      "Enter your product name and key details.",
      "Pick a style.",
      "Generate and use your favorite for your Shopsy listing.",
    ],
    faq: [
      {
        question: "How is this different from a regular marketplace title?",
        answer: "Shopsy titles tend to work best short and simple since they're often shared directly via chat and social links, not just browsed in search.",
      },
      {
        question: "Should I mention the price or discount in the title?",
        answer: "It's optional — a value-focused style can lean into 'best price' phrasing, but keep it honest and consistent with your actual pricing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social commerce listing expert who writes short, simple, share-friendly product titles, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 8 Shopsy product title options for: "${values.product}". Style: ${values.style || "Simple"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "shopsy-reseller-caption-generator",
    name: "Shopsy Reseller Caption Generator",
    tagline: "The caption that gets a shared link actually clicked.",
    description:
      "Free AI reseller caption generator for Shopsy-style social selling. Describe your product and get share-ready captions.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "product",
        label: "What are you sharing?",
        placeholder: "e.g. floral kurti set, ₹599, limited stock",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Urgent", "Simple"],
      },
    ],
    howTo: [
      "Describe what you're sharing, including price or offer if relevant.",
      "Pick a tone.",
      "Generate and paste your favorite alongside your shared product link.",
    ],
    faq: [
      {
        question: "Should I include the price in the caption?",
        answer: "It often helps — buyers deciding whether to click a shared link appreciate seeing the price upfront.",
      },
      {
        question: "Can I use emojis with these?",
        answer: "Yes — feel free to add a couple of relevant emojis after generating, especially for WhatsApp or Instagram sharing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social selling copywriter who writes short, friendly captions for resellers sharing product links via chat and social apps. You respond only with a numbered list — no preamble.",
      user: `Generate 8 reseller caption options for: "${values.product}". Tone: ${values.tone || "Friendly"}. Return only a numbered list.`,
    }),
  },

  // --- Meesho ---
  {
    slug: "meesho-product-title-generator",
    name: "Meesho Product Title Generator",
    tagline: "Titles that work for browsing and for sharing.",
    description:
      "Free AI Meesho product title generator. Describe your product and get clear, reseller-friendly titles.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. printed saree, georgette, with blouse piece",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Simple", "Trendy", "Value-Focused"],
      },
    ],
    howTo: [
      "Enter your product name and key details.",
      "Pick a style.",
      "Generate and use your favorite for your Meesho catalog listing.",
    ],
    faq: [
      {
        question: "Should the title mention 'COD available' or similar?",
        answer: "That's usually better placed in your product description or catalog details rather than the title itself.",
      },
      {
        question: "How long should the title be?",
        answer: "Keep it focused — a clear, specific title under 60-70 characters tends to perform better than a long, keyword-stuffed one.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social commerce listing expert who writes clear, specific product titles for reseller marketplaces, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 8 Meesho product title options for: "${values.product}". Style: ${values.style || "Simple"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "meesho-product-description-generator",
    name: "Meesho Product Description Generator",
    tagline: "Descriptions that answer buyer questions upfront.",
    description:
      "Free AI Meesho product description generator. Describe your product and get simple, clear description copy.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 500,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. printed saree, georgette, 5.5m with blouse piece",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Simple", "Friendly", "Persuasive"],
      },
    ],
    howTo: [
      "Describe your product and its key details (fabric, size, what's included).",
      "Pick a tone.",
      "Generate and paste your favorite into the description field.",
    ],
    faq: [
      {
        question: "Should I mention size/fit details?",
        answer: "Yes — fit and sizing questions are a top reason for returns, so covering them clearly in the description helps.",
      },
      {
        question: "Should I mention care instructions?",
        answer: "It's a nice addition for fabric and apparel items, and can reduce complaints about shrinkage or color fading.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce copywriter who writes simple, clear product descriptions for a reseller marketplace audience, 50-70 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 Meesho product description options for: "${values.product}". Tone: ${values.tone || "Simple"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "meesho-whatsapp-status-caption-generator",
    name: "Meesho WhatsApp Status Caption Generator",
    tagline: "A status update that actually gets orders.",
    description:
      "Free AI WhatsApp Status caption generator for Meesho resellers. Describe your product and get short, catchy status captions.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 260,
    inputFields: [
      {
        name: "product",
        label: "What are you selling?",
        placeholder: "e.g. cotton kurti set, ₹399, COD available",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Urgent", "Simple"],
      },
    ],
    howTo: [
      "Describe what you're selling, including price or offer.",
      "Pick a tone.",
      "Generate and post your favorite alongside your product photo on WhatsApp Status.",
    ],
    faq: [
      {
        question: "Should I include 'DM to order' or similar?",
        answer: "Yes — these captions focus on the product itself, so add a short call to action like 'DM to order' or 'link in bio' after generating.",
      },
      {
        question: "How short should a status caption be?",
        answer: "Very short — a status is viewed for a few seconds, so 1 catchy line works better than a paragraph.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social selling copywriter who writes very short, catchy WhatsApp Status captions (under 15 words each) for resellers. You respond only with a numbered list — no preamble.",
      user: `Generate 8 WhatsApp Status caption options for: "${values.product}". Tone: ${values.tone || "Friendly"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "meesho-catalog-name-generator",
    name: "Meesho Catalog Name Generator",
    tagline: "A catalog name that's clear at a glance.",
    description:
      "Free AI catalog name generator for Meesho sellers. Describe your product collection and get clear catalog name ideas.",
    category: "Ecommerce",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "collection",
        label: "What's in this catalog?",
        placeholder: "e.g. a set of 10 printed cotton kurtis in different colors",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Simple", "Trendy", "Descriptive"],
      },
    ],
    howTo: [
      "Describe what's included in the catalog.",
      "Pick a style.",
      "Generate and use your favorite as the catalog name.",
    ],
    faq: [
      {
        question: "Should the catalog name include the price range?",
        answer: "Some sellers do this for clarity (e.g. 'Under ₹499'), which can help, especially in a value-focused style.",
      },
      {
        question: "Should each catalog have a unique name?",
        answer: "Yes — distinct, descriptive catalog names make it easier for repeat buyers to find what they're looking for in your shop.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a reseller marketplace expert who names product catalogs — short, clear, descriptive. You respond only with a numbered list — no preamble.",
      user: `Generate 10 catalog name ideas for: "${values.collection}". Style: ${values.style || "Simple"}. Return only a numbered list.`,
    }),
  },

  // --- Walmart ---
  {
    slug: "walmart-product-title-generator",
    name: "Walmart Marketplace Product Title Generator",
    tagline: "Titles that fit Walmart's listing conventions.",
    description:
      "Free AI Walmart Marketplace product title generator. Describe your product and get clear, keyword-friendly titles.",
    category: "Ecommerce",
    resultCount: 6,
    maxTokens: 320,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. non-stick frying pan, 10 inch, ceramic coating",
        type: "text",
        required: true,
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["Home & Kitchen", "Electronics", "Clothing", "Grocery", "General"],
      },
    ],
    howTo: [
      "Enter your product name and key details.",
      "Pick the closest category.",
      "Generate, then check Walmart Seller Center's current title style guide before publishing.",
    ],
    faq: [
      {
        question: "How is a Walmart title different from Amazon's?",
        answer: "Walmart tends to prefer a clean, attribute-forward format (Brand + Product Name + Key Attributes) without promotional language — these are written accordingly.",
      },
      {
        question: "Does Walmart allow promotional words like 'best' or 'sale'?",
        answer: "Generally no — Walmart's title policy discourages subjective or promotional claims, so keep titles factual.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Walmart Marketplace listing expert who writes clean, factual, attribute-forward product titles with no promotional language, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 6 Walmart product title options for: "${values.product}". Category: ${values.category || "General"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "walmart-product-description-generator",
    name: "Walmart Product Description Generator",
    tagline: "Straightforward descriptions Walmart shoppers trust.",
    description:
      "Free AI Walmart product description generator. Describe your product and get clear, factual description copy.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 550,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. non-stick frying pan, 10 inch, ceramic coating, dishwasher safe",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Informative", "Simple", "Persuasive"],
      },
    ],
    howTo: [
      "Describe your product and its key details.",
      "Pick a tone.",
      "Generate and paste your favorite into the product description field.",
    ],
    faq: [
      {
        question: "Should I avoid superlatives like 'best' or 'amazing'?",
        answer: "It's a good habit for Walmart specifically — factual, benefit-driven language tends to fit their content guidelines better than subjective claims.",
      },
      {
        question: "Should I include care or safety instructions?",
        answer: "Yes, if relevant — clear care/safety details reduce returns and support compliance with Walmart's content requirements.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Walmart Marketplace copywriter who writes clear, factual, benefit-driven product descriptions without subjective superlatives, 50-80 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 Walmart product description options for: "${values.product}". Tone: ${values.tone || "Informative"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "walmart-key-features-generator",
    name: "Walmart Key Features Generator",
    tagline: "The feature list shoppers check before adding to cart.",
    description:
      "Free AI Walmart key features generator. Describe your product's features and get concise, listing-ready feature points.",
    category: "Ecommerce",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "product",
        label: "Product name and key features",
        placeholder: "e.g. cordless vacuum: 40min runtime, HEPA filter, lightweight",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Concise", "Technical", "Simple"],
      },
    ],
    howTo: [
      "List your product's name and key features.",
      "Pick a tone.",
      "Generate — you'll get short feature points ready to paste into the Key Features section.",
    ],
    faq: [
      {
        question: "How many feature points should I use?",
        answer: "Most Walmart listings support around 5-6, which is what these are built for.",
      },
      {
        question: "Should these be full sentences?",
        answer: "Short phrases work best — that's how they're written here — rather than full paragraph sentences.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Walmart Marketplace listing copywriter who writes short, factual feature points (under 12 words each, not full sentences), each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 6 Walmart key feature points for: "${values.product}". Tone: ${values.tone || "Concise"}. Return only a numbered list.`,
    }),
  },

  // --- Shopify ---
  {
    slug: "shopify-product-title-generator",
    name: "Shopify Product Title Generator",
    tagline: "Titles that fit your brand and your SEO.",
    description:
      "Free AI Shopify product title generator. Describe your product and get on-brand, SEO-aware title options.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. hand-poured soy candle, lavender scent, 8oz",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Premium", "Playful", "Minimal", "Descriptive"],
      },
    ],
    howTo: [
      "Enter your product name and key details.",
      "Pick a tone that matches your store's brand.",
      "Generate and use your favorite as your product title.",
    ],
    faq: [
      {
        question: "Should my Shopify title match my SEO title?",
        answer: "It can, but you don't have to — Shopify lets you set a separate SEO title under 'Search engine listing', which the Shopify SEO Meta Generator on this site is built for.",
      },
      {
        question: "How long should a Shopify product title be?",
        answer: "There's no hard limit, but shorter, clear titles tend to display better across your theme, search results, and social sharing cards.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Shopify brand copywriter who writes on-brand product titles, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 8 Shopify product title options for: "${values.product}". Tone: ${values.tone || "Premium"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "shopify-product-description-generator",
    name: "Shopify Product Description Generator",
    tagline: "Descriptions with real brand voice, not boilerplate.",
    description:
      "Free AI Shopify product description generator. Describe your product and brand voice to get on-brand description copy.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 600,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. hand-poured soy candle, lavender, 40hr burn time",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Brand voice",
        type: "select",
        options: ["Warm & Personal", "Premium/Editorial", "Playful", "Minimal"],
      },
    ],
    howTo: [
      "Describe your product and its key details.",
      "Pick the brand voice that fits your store.",
      "Generate and paste your favorite into the product description editor.",
    ],
    faq: [
      {
        question: "Can this match my existing brand voice exactly?",
        answer: "It gets you close — treat it as a strong draft and adjust word choice to match phrases and tone you already use elsewhere on your store.",
      },
      {
        question: "Should I add SEO keywords into the description?",
        answer: "Yes, naturally — mention key terms customers search for, but prioritize readability over keyword density.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Shopify brand copywriter who writes product descriptions with genuine brand voice and personality, 60-100 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 Shopify product description options for: "${values.product}". Brand voice: ${values.tone || "Warm & Personal"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "shopify-collection-description-generator",
    name: "Shopify Collection Description Generator",
    tagline: "Copy for the page that sets the shopping context.",
    description:
      "Free AI Shopify collection description generator. Describe your collection and get intro copy for the collection page.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 400,
    inputFields: [
      {
        name: "collection",
        label: "Collection name and what it includes",
        placeholder: "e.g. Summer Essentials — linen shirts, sandals, sun hats",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Premium", "Playful", "Minimal"],
      },
    ],
    howTo: [
      "Describe the collection and what it includes.",
      "Pick a tone.",
      "Generate and paste your favorite into the collection's description field.",
    ],
    faq: [
      {
        question: "Where does this show up on my store?",
        answer: "Most Shopify themes display the collection description above or below the product grid on that collection's page.",
      },
      {
        question: "Does this help SEO?",
        answer: "Yes — collection pages can rank in search, and a clear, keyword-relevant description supports that.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Shopify brand copywriter who writes short collection page intro copy, 40-60 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 collection description options for: "${values.collection}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "shopify-seo-meta-generator",
    name: "Shopify SEO Meta Title & Description Generator",
    tagline: "The snippet Google shows, written to get the click.",
    description:
      "Free AI Shopify SEO meta generator. Describe your page and get an SEO title and meta description pair.",
    category: "Ecommerce",
    resultCount: 3,
    maxTokens: 400,
    inputFields: [
      {
        name: "page",
        label: "What's the page about?",
        placeholder: "e.g. product page for a hand-poured lavender soy candle",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Persuasive", "Informative", "Premium"],
      },
    ],
    howTo: [
      "Describe the page (product, collection, or blog post) this is for.",
      "Pick a tone.",
      "Generate, then paste your favorite pair into the 'Search engine listing' edit fields.",
    ],
    faq: [
      {
        question: "What's the character limit for each?",
        answer: "Aim for under about 60 characters for the title and under 160 for the description so Google doesn't truncate them.",
      },
      {
        question: "Can I use this for a collection or blog page too?",
        answer: "Yes — just describe that page type in the input instead of a product.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO copywriter who writes meta title (under 60 characters) and meta description (under 160 characters) pairs. Format each pair as a single line: 'Title: ... — Description: ...' with no line break between the title and description. You respond only with a numbered list — no preamble.",
      user: `Generate 3 SEO title/description pairs for: "${values.page}". Tone: ${values.tone || "Persuasive"}. Write each pair on one line. Return only a numbered list.`,
    }),
  },
  {
    slug: "shopify-announcement-bar-generator",
    name: "Shopify Announcement Bar Copy Generator",
    tagline: "The one line every visitor sees first.",
    description:
      "Free AI Shopify announcement bar generator. Describe your message and get short, punchy banner copy.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 240,
    inputFields: [
      {
        name: "message",
        label: "What's the announcement?",
        placeholder: "e.g. free shipping on orders over $50, ends Sunday",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Urgent", "Friendly", "Premium", "Simple"],
      },
    ],
    howTo: [
      "Describe your announcement or offer.",
      "Pick a tone.",
      "Generate and paste your favorite into your theme's announcement bar setting.",
    ],
    faq: [
      {
        question: "How short should this be?",
        answer: "Very — announcement bars are typically one line, so under 10-12 words works best across devices.",
      },
      {
        question: "Can I rotate a few of these?",
        answer: "Yes — many themes support multiple rotating announcement bar messages, so generating a few is useful for that.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a retail copywriter who writes very short announcement bar lines (under 12 words each). You respond only with a numbered list — no preamble.",
      user: `Generate 8 announcement bar copy options for: "${values.message}". Tone: ${values.tone || "Friendly"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "shopify-store-tagline-generator",
    name: "Shopify Store Tagline Generator",
    tagline: "The line under your logo that sets the tone.",
    description:
      "Free AI Shopify store tagline generator. Describe your store and get a short tagline for your homepage hero.",
    category: "Ecommerce",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "store",
        label: "What's your store about?",
        placeholder: "e.g. small-batch, hand-poured soy candles",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Premium", "Warm", "Playful", "Minimal"],
      },
    ],
    howTo: [
      "Describe what your store sells.",
      "Pick a tone.",
      "Generate and use your favorite in your homepage hero or under your logo.",
    ],
    faq: [
      {
        question: "Is this the same as a slogan?",
        answer: "Very similar — a store tagline is just a slogan framed specifically for a storefront hero section, usually paired with your logo or homepage banner.",
      },
      {
        question: "Should it mention what makes you different?",
        answer: "If you can fit it in a short phrase, yes — otherwise keep it simple and let your product photos do that work.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand copywriter who writes short storefront taglines under 8 words each. You respond only with a numbered list — no preamble.",
      user: `Generate 10 store tagline options for: "${values.store}". Tone: ${values.tone || "Premium"}. Return only a numbered list.`,
    }),
  },

  // --- WooCommerce ---
  {
    slug: "woocommerce-product-title-generator",
    name: "WooCommerce Product Title Generator",
    tagline: "Titles that work for your theme and your SEO.",
    description:
      "Free AI WooCommerce product title generator. Describe your product and get clear, on-brand title options.",
    category: "Ecommerce",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. leather laptop sleeve, 13-inch, handmade",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Premium", "Simple", "Descriptive", "Playful"],
      },
    ],
    howTo: [
      "Enter your product name and key details.",
      "Pick a tone.",
      "Generate and paste your favorite into the WooCommerce product title field.",
    ],
    faq: [
      {
        question: "Does this affect my page's SEO title too?",
        answer: "By default WordPress SEO plugins often reuse the product title as the meta title — you can usually override that separately if needed.",
      },
      {
        question: "Should I include my brand name in the title?",
        answer: "It's a good idea if you're building brand recognition, especially if your store sells products across multiple brands.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a WooCommerce store copywriter who writes clear, on-brand product titles, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 8 WooCommerce product title options for: "${values.product}". Tone: ${values.tone || "Premium"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "woocommerce-short-description-generator",
    name: "WooCommerce Short Description Generator",
    tagline: "The quick pitch shown right by the price.",
    description:
      "Free AI WooCommerce short description generator. Describe your product and get a punchy short description for the product summary area.",
    category: "Ecommerce",
    resultCount: 5,
    maxTokens: 350,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. leather laptop sleeve, 13-inch, handmade, water-resistant",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Persuasive", "Simple", "Premium"],
      },
    ],
    howTo: [
      "Describe your product and its key details.",
      "Pick a tone.",
      "Generate and paste your favorite into the 'Product short description' field.",
    ],
    faq: [
      {
        question: "How is this different from the long description?",
        answer: "The short description shows near the Add to Cart button and should be a quick, scannable pitch — the long description below it can go into full detail.",
      },
      {
        question: "How long should it be?",
        answer: "Keep it brief — 1-2 sentences is typical, which is what these are built for.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a WooCommerce store copywriter who writes short, punchy product summaries, 1-2 sentences each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 5 WooCommerce short description options for: "${values.product}". Tone: ${values.tone || "Persuasive"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "woocommerce-long-description-generator",
    name: "WooCommerce Long Description Generator",
    tagline: "The full story, for shoppers who want more.",
    description:
      "Free AI WooCommerce long description generator. Describe your product and get a fuller description for the main product tab.",
    category: "Ecommerce",
    resultCount: 3,
    maxTokens: 650,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. leather laptop sleeve, full-grain leather, hand-stitched, lifetime warranty",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Premium", "Warm", "Technical", "Simple"],
      },
    ],
    howTo: [
      "Describe your product with as much detail as you have.",
      "Pick a tone.",
      "Generate and paste your favorite into the main product description editor.",
    ],
    faq: [
      {
        question: "How long should this be?",
        answer: "These run roughly 80-120 words — enough to cover materials, use case, and what makes it worth buying, without overwhelming the page.",
      },
      {
        question: "Should I add headings or bullet points myself?",
        answer: "For longer product pages, breaking this into a short intro plus a bullet list of specs (using a separate tool) often reads better than one long block.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a WooCommerce store copywriter who writes fuller product descriptions, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 WooCommerce long description options for: "${values.product}". Tone: ${values.tone || "Premium"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "woocommerce-category-description-generator",
    name: "WooCommerce Category Description Generator",
    tagline: "Context for the shelf, not just the product.",
    description:
      "Free AI WooCommerce category description generator. Describe your category and get intro copy for the category archive page.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 400,
    inputFields: [
      {
        name: "category",
        label: "Category name and what it includes",
        placeholder: "e.g. Leather Goods — wallets, laptop sleeves, belts",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Premium", "Warm", "Simple"],
      },
    ],
    howTo: [
      "Describe the category and what it includes.",
      "Pick a tone.",
      "Generate and paste your favorite into the category's description field.",
    ],
    faq: [
      {
        question: "Where does this appear?",
        answer: "Most WooCommerce themes show the category description above the product grid on that archive page.",
      },
      {
        question: "Is this useful for SEO?",
        answer: "Yes — category archive pages can rank on their own, and unique, relevant copy helps rather than leaving it blank.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a WooCommerce store copywriter who writes short category page intro copy, 40-60 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 category description options for: "${values.category}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "woocommerce-product-tag-generator",
    name: "WooCommerce Product Tag Generator",
    tagline: "Tags that actually help shoppers filter and find.",
    description:
      "Free AI WooCommerce product tag generator. Describe your product and get relevant tag suggestions.",
    category: "Ecommerce",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "product",
        label: "Product name and key details",
        placeholder: "e.g. leather laptop sleeve, 13-inch, brown, handmade",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product and its key details.",
      "Generate a set of tag suggestions.",
      "Add the relevant ones to your product's Tags field.",
    ],
    faq: [
      {
        question: "How are tags different from categories?",
        answer: "Categories are broad groupings (like 'Bags'), while tags are more specific attributes (like 'brown', 'handmade', '13-inch') that help with filtering and related-product logic.",
      },
      {
        question: "How many tags should I use per product?",
        answer: "There's no strict limit, but 5-10 genuinely relevant tags is typically more useful than a long, unfocused list.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a WooCommerce store merchandiser who suggests short, specific product tags (1-3 words each). Always return exactly the number of tags requested, never fewer — if you run out of obviously distinct attributes, include related use cases, materials, styles, or audience terms to reach the count. You respond only with a numbered list — no preamble.",
      user: `Generate exactly 10 product tag suggestions for: "${values.product}". Return only a numbered list with exactly 10 items.`,
    }),
  },

  // --- Cross-platform Ecommerce ---
  {
    slug: "marketplace-return-exchange-reply-generator",
    name: "Marketplace Return/Exchange Reply Generator",
    tagline: "A calm, clear reply to a return or exchange request.",
    description:
      "Free AI reply generator for marketplace return and exchange requests. Describe the situation and get a professional reply draft.",
    category: "Ecommerce",
    resultCount: 3,
    maxTokens: 480,
    inputFields: [
      {
        name: "situation",
        label: "What's the return/exchange request about?",
        placeholder: "e.g. customer wants to exchange a shirt for a different size",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Helpful", "Apologetic", "Concise", "Formal"],
      },
    ],
    howTo: [
      "Describe the return or exchange request.",
      "Pick a tone.",
      "Generate, then personalize with your specific policy details before sending.",
    ],
    faq: [
      {
        question: "Should I confirm exact refund timelines in this reply?",
        answer: "Yes — add your marketplace's actual refund processing time so the customer knows what to expect.",
      },
      {
        question: "Can I use this across different marketplaces?",
        answer: "Yes — the message itself is platform-agnostic; just send it through whichever platform's messaging system you're using.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer service manager who writes clear, professional replies to return and exchange requests, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 reply options for this return/exchange situation: "${values.situation}". Tone: ${values.tone || "Helpful"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "back-in-stock-notification-generator",
    name: "Back-in-Stock Notification Generator",
    tagline: "Tell them the moment it's available again.",
    description:
      "Free AI back-in-stock notification generator. Describe your product and get ready-to-use restock alert copy.",
    category: "Ecommerce",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "product",
        label: "What's back in stock?",
        placeholder: "e.g. the sold-out ceramic planter set",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Exciting", "Simple", "Urgent"],
      },
    ],
    howTo: [
      "Describe what's back in stock.",
      "Pick a tone.",
      "Generate and use your favorite for an email, SMS, or social alert.",
    ],
    faq: [
      {
        question: "Should I mention limited quantity?",
        answer: "If it's true, yes — genuine scarcity ('only 20 left') is a strong, honest motivator for customers who were waiting.",
      },
      {
        question: "Can I use this for a pre-order announcement instead?",
        answer: "Yes — just describe it as a pre-order opening in your input and the copy will adapt.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce marketer who writes short back-in-stock alert copy (1-2 sentences each, single paragraph, no line breaks within an item). You respond only with a numbered list — no preamble.",
      user: `Generate 6 back-in-stock notification options for: "${values.product}". Tone: ${values.tone || "Exciting"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "order-confirmation-message-generator",
    name: "Order Confirmation Message Generator",
    tagline: "The reassurance every buyer wants right after checkout.",
    description:
      "Free AI order confirmation message generator. Describe your store and get warm, clear order confirmation copy.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 420,
    inputFields: [
      {
        name: "store",
        label: "What's your store or product?",
        placeholder: "e.g. a small-batch coffee roastery",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Professional", "Playful"],
      },
    ],
    howTo: [
      "Describe your store or what you sell.",
      "Pick a tone.",
      "Generate and use your favorite as the intro line of your order confirmation email or message.",
    ],
    faq: [
      {
        question: "Should this include order details like tracking?",
        answer: "No — this generates the warm intro/thank-you copy; your platform typically inserts order number, items, and tracking automatically below it.",
      },
      {
        question: "Can I use this for a WhatsApp or SMS confirmation instead of email?",
        answer: "Yes — pick a shorter result and adapt it; these are written concisely enough to work across channels.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce copywriter who writes warm order confirmation intro messages, 30-50 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 order confirmation message options for: "${values.store}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "product-variant-name-generator",
    name: "Product Variant Name Generator",
    tagline: "Names like 'Ocean Blue', not 'Blue2'.",
    description:
      "Free AI product variant name generator. Describe your product's variants and get evocative, on-brand names for each.",
    category: "Ecommerce",
    resultCount: 10,
    maxTokens: 240,
    inputFields: [
      {
        name: "variants",
        label: "What are the variants (colors, styles, scents)?",
        placeholder: "e.g. colors: dark blue, cream, olive green, blush pink",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Elegant", "Playful", "Nature-Inspired", "Minimal"],
      },
    ],
    howTo: [
      "List the variants you need names for (colors, styles, or scents).",
      "Pick a style.",
      "Generate and match each name to the variant it fits best.",
    ],
    faq: [
      {
        question: "Can I get names for scents or materials, not just colors?",
        answer: "Yes — describe whatever the variant type is (scent, material, pattern) and the tool will adapt.",
      },
      {
        question: "Should I still list the plain color code somewhere?",
        answer: "It's a good idea internally (for inventory), even if customers only see the evocative name on the storefront.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand naming expert who creates evocative, on-brand names for product variants (colors, materials, or scents), each 1-3 words. You respond only with a numbered list — no preamble.",
      user: `Generate 10 variant name ideas for these variants: "${values.variants}". Style: ${values.style || "Elegant"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "marketplace-seller-bio-generator",
    name: "Marketplace Seller Bio Generator",
    tagline: "The storefront blurb that builds trust before the first order.",
    description:
      "Free AI seller bio generator for marketplace storefronts. Describe your shop and get a short, trustworthy About section.",
    category: "Ecommerce",
    resultCount: 3,
    maxTokens: 480,
    inputFields: [
      {
        name: "shop",
        label: "What do you sell and what's your story?",
        placeholder: "e.g. handmade jewelry, family business since 2019",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Professional", "Playful"],
      },
    ],
    howTo: [
      "Describe what you sell and a bit of your story.",
      "Pick a tone.",
      "Generate and paste your favorite into your storefront's About/Seller Info section.",
    ],
    faq: [
      {
        question: "Should I mention how long I've been selling?",
        answer: "Yes, if it's a meaningful amount of time — it's a simple, honest trust signal for new buyers.",
      },
      {
        question: "How long should a seller bio be?",
        answer: "Short — these run roughly 40-60 words, enough to build trust without burying the buyer in text before they get to your products.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand copywriter who writes short, trustworthy seller/shop bios for marketplace storefronts, 40-60 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 seller bio options for: "${values.shop}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((tool) => tool.slug === slug);
}
