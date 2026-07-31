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
    documentStyle: "structured",
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
    documentStyle: "structured",
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
    documentStyle: "structured",
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

  // --- Real Estate ---
  {
    slug: "real-estate-listing-description-generator",
    name: "Real Estate Listing Description Generator",
    tagline: "A description that gets the showing booked.",
    description:
      "Free AI real estate listing description generator. Describe the property and get ready-to-use listing copy.",
    category: "Real Estate",
    resultCount: 3,
    maxTokens: 650,
    inputFields: [
      {
        name: "property",
        label: "Property details",
        placeholder: "e.g. 3-bed, 2-bath, updated kitchen, large backyard, quiet street",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Luxury", "Straightforward", "Family-Focused"],
      },
    ],
    howTo: [
      "Describe the property's key details and features.",
      "Pick a tone that fits the property and buyer.",
      "Generate and paste your favorite into your MLS or listing site.",
    ],
    faq: [
      {
        question: "Should I mention exact square footage and price?",
        answer: "Yes, if you have them — specific numbers build buyer trust, so add them to your input if available.",
      },
      {
        question: "Should I avoid certain words for fair housing compliance?",
        answer: "Yes — avoid language referencing protected classes (family status, religion, etc.); always review your final listing against local fair housing guidelines before publishing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate copywriter who writes compelling, fair-housing-compliant listing descriptions (80-120 words each, written as a single paragraph with no line breaks within an item, avoiding language about protected classes). You respond only with a numbered list — no preamble.",
      user: `Generate 3 real estate listing descriptions for: "${values.property}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "open-house-invitation-generator",
    name: "Open House Invitation Generator",
    tagline: "An invite that gets people through the door.",
    description:
      "Free AI open house invitation generator. Describe the property and event details to get ready-to-use invite copy.",
    category: "Real Estate",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "details",
        label: "Property and open house details",
        placeholder: "e.g. 3-bed home, Saturday 1-3pm, 123 Main St",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Exciting", "Straightforward"],
      },
    ],
    howTo: [
      "Enter the property and open house date/time details.",
      "Pick a tone.",
      "Generate and use your favorite for a flyer, social post, or email.",
    ],
    faq: [
      {
        question: "Should I include the full address?",
        answer: "For public social posts, many agents use just the street name until closer to the event, then share the full address via direct signup — use your judgment based on your usual practice.",
      },
      {
        question: "Can I use this for a virtual open house?",
        answer: "Yes — mention it's virtual and include the platform/link in your input.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate marketer who writes short, inviting open house announcements (1-2 sentences each, single paragraph, no line breaks within an item). You respond only with a numbered list — no preamble.",
      user: `Generate 6 open house invitation options for: "${values.details}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "realtor-bio-generator",
    name: "Realtor Bio Generator",
    tagline: "A bio that builds trust before the first call.",
    description:
      "Free AI realtor bio generator. Describe your experience and market to get a polished professional bio.",
    category: "Real Estate",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "background",
        label: "Your experience and market",
        placeholder: "e.g. 8 years selling homes in the Denver suburbs, focus on first-time buyers",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Professional", "Confident"],
      },
    ],
    howTo: [
      "Describe your experience, specialty, and market.",
      "Pick a tone.",
      "Generate and paste your favorite into your website or brokerage profile.",
    ],
    faq: [
      {
        question: "Should I include my licensing details?",
        answer: "Add your license number and brokerage as required by your state/region after generating — this tool focuses on the narrative portion.",
      },
      {
        question: "How long should a realtor bio be?",
        answer: "These run roughly 80-120 words — enough to build trust and highlight your specialty without overwhelming a website visitor.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate branding copywriter who writes trustworthy, professional agent bios, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 realtor bio options based on: "${values.background}". Tone: ${values.tone || "Professional"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "just-listed-social-post-generator",
    name: "Just Listed / Just Sold Social Post Generator",
    tagline: "Social proof that keeps your pipeline warm.",
    description:
      "Free AI just listed/just sold social post generator. Describe the property and get ready-to-post social copy.",
    category: "Real Estate",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "details",
        label: "Property details and status",
        placeholder: "e.g. just sold, 4-bed colonial, sold in 5 days over asking",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Exciting", "Professional", "Grateful"],
      },
    ],
    howTo: [
      "Describe the property and whether it's just listed or just sold.",
      "Pick a tone.",
      "Generate and post your favorite alongside your listing photos.",
    ],
    faq: [
      {
        question: "Should I mention the sale price?",
        answer: "That's a personal/brokerage policy choice — many agents share general wins ('sold over asking') without the exact figure.",
      },
      {
        question: "Can I use this for a price reduction announcement instead?",
        answer: "Yes — describe it as a price update in your input and the tone will adapt.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate social media marketer who writes short, engaging just-listed/just-sold posts (1-2 sentences each, single paragraph, no line breaks within an item). You respond only with a numbered list — no preamble.",
      user: `Generate 6 social post options for: "${values.details}". Tone: ${values.tone || "Exciting"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "neighborhood-guide-blurb-generator",
    name: "Neighborhood Guide Blurb Generator",
    tagline: "Sell the area, not just the address.",
    description:
      "Free AI neighborhood guide generator. Describe the area's highlights and get an inviting intro blurb.",
    category: "Real Estate",
    resultCount: 3,
    maxTokens: 500,
    inputFields: [
      {
        name: "neighborhood",
        label: "Neighborhood and its highlights",
        placeholder: "e.g. walkable downtown area, great schools, close to parks",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Family-Focused", "Upscale"],
      },
    ],
    howTo: [
      "Describe the neighborhood and what makes it appealing.",
      "Pick a tone.",
      "Generate and use your favorite on a neighborhood or listing page.",
    ],
    faq: [
      {
        question: "Should I mention specific school names?",
        answer: "Yes, if accurate and relevant — but always verify current school zoning, as it can change.",
      },
      {
        question: "Can I reuse this across multiple listings in the same area?",
        answer: "Yes — a strong neighborhood blurb works well reused across listings in that same area.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate copywriter who writes inviting neighborhood guide blurbs, 60-90 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 neighborhood blurb options for: "${values.neighborhood}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },

  // --- Travel & Hospitality ---
  {
    slug: "airbnb-listing-title-generator",
    name: "Airbnb Listing Title Generator",
    tagline: "The title that gets the click in a wall of search results.",
    description:
      "Free AI Airbnb listing title generator. Describe your space and get catchy, descriptive title options.",
    category: "Travel & Hospitality",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "property",
        label: "Property and standout feature",
        placeholder: "e.g. cozy cabin, mountain views, hot tub, 20min from ski resort",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Cozy", "Luxury", "Adventure", "Minimal"],
      },
    ],
    howTo: [
      "Describe your space and its standout feature.",
      "Pick a style.",
      "Generate and use your favorite as your listing title.",
    ],
    faq: [
      {
        question: "How long can an Airbnb title be?",
        answer: "Airbnb limits titles to 50 characters — these are written with that limit in mind.",
      },
      {
        question: "Should I lead with the location or the feature?",
        answer: "Usually the standout feature — guests browse many listings in the same area, so a distinctive feature helps you stand out first.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an Airbnb Superhost copywriter who writes catchy listing titles under 50 characters, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 8 Airbnb listing title options for: "${values.property}". Style: ${values.style || "Cozy"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "airbnb-listing-description-generator",
    name: "Airbnb Listing Description Generator",
    tagline: "The description that turns a look into a booking.",
    description:
      "Free AI Airbnb listing description generator. Describe your space and get warm, detailed listing copy.",
    category: "Travel & Hospitality",
    resultCount: 3,
    maxTokens: 650,
    inputFields: [
      {
        name: "property",
        label: "Property details",
        placeholder: "e.g. 2-bed cabin, sleeps 6, hot tub, mountain views, near hiking trails",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Luxury", "Adventure", "Family-Friendly"],
      },
    ],
    howTo: [
      "Describe your property's key details and amenities.",
      "Pick a tone.",
      "Generate and paste your favorite into your listing description.",
    ],
    faq: [
      {
        question: "Should I mention house rules here?",
        answer: "Keep the description focused on the experience — use the separate house rules section (or our House Rules Generator) for policies.",
      },
      {
        question: "Should I mention nearby attractions?",
        answer: "Yes — guests often decide based on proximity to things they want to do, so mention 1-2 standout nearby spots.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an Airbnb Superhost copywriter who writes warm, detailed listing descriptions, 100-150 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 Airbnb listing description options for: "${values.property}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "host-welcome-message-generator",
    name: "Host Welcome Message Generator",
    tagline: "The first message that sets the tone for the whole stay.",
    description:
      "Free AI host welcome message generator. Describe your property and get a warm check-in message for guests.",
    category: "Travel & Hospitality",
    resultCount: 3,
    maxTokens: 500,
    inputFields: [
      {
        name: "property",
        label: "Property and any key check-in details",
        placeholder: "e.g. cabin, self check-in with lockbox, wifi password on fridge",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Professional", "Casual"],
      },
    ],
    howTo: [
      "Describe your property and any key check-in details.",
      "Pick a tone.",
      "Generate and send your favorite to guests around check-in time.",
    ],
    faq: [
      {
        question: "Should I include the wifi password directly?",
        answer: "Yes, if that's your practice — add it to your input and it'll be worked into the message naturally.",
      },
      {
        question: "When should I send this?",
        answer: "Most hosts send it the day of or the day before check-in, alongside specific access instructions.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a hospitality host who writes warm, clear welcome messages for guests, 60-90 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 welcome message options for: "${values.property}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "hotel-review-response-generator",
    name: "Hotel/Stay Review Response Generator",
    tagline: "A reply that shows future guests you care.",
    description:
      "Free AI review response generator for hotels and short-term rentals. Describe the review and get a professional reply draft.",
    category: "Travel & Hospitality",
    resultCount: 3,
    maxTokens: 500,
    inputFields: [
      {
        name: "review",
        label: "Paste or summarize the guest review",
        placeholder: "e.g. loved the location but said the room was noisy at night",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm & Grateful", "Professional", "Apologetic"],
      },
    ],
    howTo: [
      "Summarize the guest's review.",
      "Pick a tone — Apologetic works well for critical feedback.",
      "Generate, then personalize before posting your reply.",
    ],
    faq: [
      {
        question: "Should I respond to every review?",
        answer: "Responding to both positive and negative reviews shows future guests you're attentive — it's worth the habit.",
      },
      {
        question: "Should I offer compensation in a public reply?",
        answer: "Generally better to invite the guest to reach out directly for specifics, rather than negotiating resolution details publicly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a hospitality manager who writes thoughtful, genuine responses to guest reviews, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 response options to this guest review: "${values.review}". Tone: ${values.tone || "Warm & Grateful"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "travel-itinerary-outline-generator",
    name: "Travel Itinerary Outline Generator",
    tagline: "A day-by-day starting point for your trip.",
    description:
      "Free AI travel itinerary generator. Describe your trip and get a day-by-day outline to build on.",
    category: "Travel & Hospitality",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 900,
    inputFields: [
      {
        name: "trip",
        label: "Destination and trip length",
        placeholder: "e.g. 4 days in Lisbon, interested in food and history",
        type: "text",
        required: true,
      },
      {
        name: "pace",
        label: "Pace",
        type: "select",
        options: ["Relaxed", "Balanced", "Packed"],
      },
    ],
    howTo: [
      "Describe your destination, trip length, and interests.",
      "Pick a pace.",
      "Generate, then adjust based on real opening hours, bookings, and travel times.",
    ],
    faq: [
      {
        question: "Are the specific places mentioned guaranteed to be accurate or open?",
        answer: "No — treat named suggestions as a starting point and verify current hours, availability, and details before relying on them.",
      },
      {
        question: "Can I regenerate for a different pace?",
        answer: "Yes — try Relaxed for fewer stops per day, or Packed if you want to fit in as much as possible.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a travel planner who writes day-by-day itinerary outlines with a morning/afternoon/evening structure per day and 2-3 suggested activities each. Format with plain text day headers and short bullet points, no markdown symbols like # or **. Respond only with the itinerary — no preamble or closing remarks.",
      user: `Generate a travel itinerary outline for: "${values.trip}". Pace: ${values.pace || "Balanced"}.`,
    }),
  },
  {
    slug: "vacation-rental-house-rules-generator",
    name: "Vacation Rental House Rules Generator",
    tagline: "Clear expectations, set before check-in.",
    description:
      "Free AI house rules generator for vacation rentals. Describe your rules and get a clear, guest-friendly draft.",
    category: "Travel & Hospitality",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 800,
    inputFields: [
      {
        name: "rules",
        label: "Describe your house rules",
        placeholder: "e.g. no smoking, no parties, quiet hours after 10pm, pets not allowed",
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
      "List your key house rules.",
      "Pick a tone.",
      "Generate, then add it to your listing's house rules section.",
    ],
    faq: [
      {
        question: "Is this legally binding?",
        answer: "No — this is a plain-language draft for your listing, not a legal document. Check your platform's and local regulations for any required disclosures.",
      },
      {
        question: "Should I explain the reason behind a rule?",
        answer: "A brief, friendly reason (e.g. 'quiet hours to respect neighbors') often gets better guest compliance than a bare rule.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a vacation rental host who writes clear, guest-friendly house rules. Use plain text bullet points, no markdown symbols like # or **. This is a plain-language draft, not a legal document. Respond only with the house rules — no preamble or closing remarks.",
      user: `Generate house rules based on: "${values.rules}". Tone: ${values.tone || "Friendly"}.`,
    }),
  },

  // --- Food & Restaurant ---
  {
    slug: "menu-item-description-generator",
    name: "Menu Item Description Generator",
    tagline: "Descriptions that make a dish sound worth ordering.",
    description:
      "Free AI menu description generator. Describe your dish and get mouthwatering, ready-to-use menu copy.",
    category: "Food & Restaurant",
    resultCount: 5,
    maxTokens: 450,
    inputFields: [
      {
        name: "dish",
        label: "Dish name and key ingredients",
        placeholder: "e.g. grilled salmon, lemon butter sauce, asparagus, wild rice",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Upscale", "Casual", "Rustic", "Playful"],
      },
    ],
    howTo: [
      "Enter the dish name and key ingredients.",
      "Pick a tone that matches your restaurant.",
      "Generate and paste your favorite onto your menu.",
    ],
    faq: [
      {
        question: "Should I mention allergens?",
        answer: "Menu descriptions themselves usually don't need to, but make sure allergen information is disclosed elsewhere on your menu as required in your area.",
      },
      {
        question: "How long should a menu description be?",
        answer: "Short — one enticing sentence per dish is standard, which is what these are built for.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a restaurant menu copywriter who writes appetizing one-sentence dish descriptions, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 5 menu description options for: "${values.dish}". Tone: ${values.tone || "Upscale"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "restaurant-bio-generator",
    name: "Restaurant Bio Generator",
    tagline: "The story that gets you the reservation, not just the click.",
    description:
      "Free AI restaurant bio generator. Describe your restaurant's story and cuisine to get a polished About section.",
    category: "Food & Restaurant",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "restaurant",
        label: "Cuisine and story",
        placeholder: "e.g. family-run Italian trattoria, recipes passed down three generations",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Upscale", "Casual"],
      },
    ],
    howTo: [
      "Describe your cuisine and a bit of your story.",
      "Pick a tone.",
      "Generate and paste your favorite into your website's About page.",
    ],
    faq: [
      {
        question: "Should I mention the chef by name?",
        answer: "Yes, if you'd like to highlight them — add their name and background to your input.",
      },
      {
        question: "How long should this be?",
        answer: "These run roughly 80-120 words — enough to tell your story without losing a hungry reader.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a restaurant brand copywriter who writes warm About page bios, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 restaurant bio options for: "${values.restaurant}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "daily-special-announcement-generator",
    name: "Daily Special Announcement Generator",
    tagline: "Make today's special sound like it's worth the trip.",
    description:
      "Free AI daily special generator. Describe today's dish and get a ready-to-post announcement.",
    category: "Food & Restaurant",
    resultCount: 6,
    maxTokens: 320,
    inputFields: [
      {
        name: "special",
        label: "Today's special",
        placeholder: "e.g. butternut squash ravioli with sage butter",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Exciting", "Simple", "Cozy"],
      },
    ],
    howTo: [
      "Describe today's special.",
      "Pick a tone.",
      "Generate and post your favorite on social media or a chalkboard sign.",
    ],
    faq: [
      {
        question: "Should I mention the price?",
        answer: "It's optional, but including it often helps social posts convert to walk-ins.",
      },
      {
        question: "Can I use this for a limited-time seasonal item?",
        answer: "Yes — mention that it's seasonal or limited-time in your input for copy that reflects the urgency.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a restaurant social media manager who writes short, mouthwatering daily special announcements (1 sentence each). You respond only with a numbered list — no preamble.",
      user: `Generate 6 daily special announcement options for: "${values.special}". Tone: ${values.tone || "Exciting"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "food-truck-name-generator",
    name: "Food Truck Name Generator",
    tagline: "A name people remember after one bite.",
    description: "Free AI food truck name generator. Describe your cuisine and get catchy name ideas.",
    category: "Food & Restaurant",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "cuisine",
        label: "What kind of food do you serve?",
        placeholder: "e.g. Korean-Mexican fusion tacos",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Punny", "Bold", "Simple", "Playful"],
      },
    ],
    howTo: [
      "Describe your cuisine or specialty.",
      "Pick a style.",
      "Generate — then check availability and trademark before printing signage.",
    ],
    faq: [
      {
        question: "Should the name describe the food directly?",
        answer: "Not necessarily — punny or evocative names often stand out more in a crowded food truck scene, as long as your food type is clear from context or a tagline.",
      },
      {
        question: "Can I use this for a pop-up or catering business too?",
        answer: "Yes — the same naming approach works for pop-ups, catering, and ghost kitchens.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a food branding expert who names food trucks — catchy, memorable, easy to say. You respond only with a numbered list — no preamble.",
      user: `Generate 10 food truck name ideas for: "${values.cuisine}". Style: ${values.style || "Punny"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "recipe-blog-intro-generator",
    name: "Recipe Blog Intro Generator",
    tagline: "The story before the recipe, without the filler.",
    description:
      "Free AI recipe blog intro generator. Describe your recipe and get a warm, SEO-friendly intro paragraph.",
    category: "Food & Restaurant",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "recipe",
        label: "Recipe name and what makes it special",
        placeholder: "e.g. one-pot creamy garlic pasta, ready in 20 minutes",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Quick & Practical", "Playful"],
      },
    ],
    howTo: [
      "Describe your recipe and what makes it worth making.",
      "Pick a tone.",
      "Generate and use your favorite as the intro before your recipe card.",
    ],
    faq: [
      {
        question: "Should this include the full recipe steps?",
        answer: "No — this generates just the intro paragraph; your recipe card with ingredients and steps goes below it.",
      },
      {
        question: "Does a blog intro actually matter for SEO?",
        answer: "Yes — search engines and readers both use it to judge relevance, so a clear, keyword-relevant intro helps rankings and readability.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a food blogger who writes warm, engaging recipe intros, 60-90 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 recipe intro options for: "${values.recipe}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },

  // --- Events & Parties ---
  {
    slug: "party-invitation-generator",
    name: "Party Invitation Generator",
    tagline: "An invite people actually want to RSVP to.",
    description:
      "Free AI party invitation generator. Describe your event and get fun, ready-to-use invitation copy.",
    category: "Events & Parties",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "event",
        label: "What's the occasion?",
        placeholder: "e.g. 30th birthday party, Saturday night, backyard BBQ theme",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Fun", "Elegant", "Casual", "Kids' Party"],
      },
    ],
    howTo: [
      "Describe the occasion and any details (date, theme).",
      "Pick a tone.",
      "Generate and use your favorite for a card, text, or digital invite.",
    ],
    faq: [
      {
        question: "Should this include date, time, and location?",
        answer: "Add those details to your input and they'll often be woven in — or add them separately below the generated copy.",
      },
      {
        question: "Can I use this for a virtual event?",
        answer: "Yes — mention it's virtual and include the platform in your input.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an event planner who writes fun, inviting party invitation copy, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 6 party invitation options for: "${values.event}". Tone: ${values.tone || "Fun"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "rsvp-reminder-generator",
    name: "RSVP Reminder Generator",
    tagline: "A nudge that doesn't feel like nagging.",
    description:
      "Free AI RSVP reminder generator. Describe your event and get a friendly reminder message for guests who haven't responded.",
    category: "Events & Parties",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "event",
        label: "What's the event and RSVP deadline?",
        placeholder: "e.g. wedding, RSVP by next Friday",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Playful", "Formal"],
      },
    ],
    howTo: [
      "Describe the event and RSVP deadline.",
      "Pick a tone.",
      "Generate and send your favorite via text, email, or group chat.",
    ],
    faq: [
      {
        question: "How early should I send an RSVP reminder?",
        answer: "About a week before your true deadline gives guests enough time to respond without feeling rushed.",
      },
      {
        question: "Should I follow up individually with no-shows after this?",
        answer: "For close friends and family, a personal follow-up after a group reminder often works best.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an event host who writes friendly, low-pressure RSVP reminders, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 6 RSVP reminder options for: "${values.event}". Tone: ${values.tone || "Friendly"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "event-description-generator",
    name: "Event Description Generator",
    tagline: "Copy that gets people to actually show up.",
    description:
      "Free AI event description generator. Describe your event and get a clear, compelling description.",
    category: "Events & Parties",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "event",
        label: "Event details",
        placeholder: "e.g. local farmers market pop-up, live music, food vendors",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Exciting", "Informative", "Community-Focused"],
      },
    ],
    howTo: [
      "Describe your event and what attendees can expect.",
      "Pick a tone.",
      "Generate and paste your favorite onto your event page or listing.",
    ],
    faq: [
      {
        question: "Should I include date, time, and ticket info?",
        answer: "Add those in your input, or keep this focused on the compelling 'why attend' copy and add logistics separately below it.",
      },
      {
        question: "Can I use this for a recurring event?",
        answer: "Yes — mention it's recurring (weekly, monthly) and the copy will reflect that.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an event marketer who writes clear, compelling event descriptions, 60-90 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 event description options for: "${values.event}". Tone: ${values.tone || "Exciting"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "fundraising-event-invite-generator",
    name: "Fundraising Event Invite Generator",
    tagline: "An invite that makes giving feel good, not obligatory.",
    description:
      "Free AI fundraising event invitation generator. Describe your cause and event to get warm, compelling invite copy.",
    category: "Events & Parties",
    resultCount: 4,
    maxTokens: 450,
    inputFields: [
      {
        name: "event",
        label: "Cause and event details",
        placeholder: "e.g. gala dinner supporting local animal shelter, Saturday evening",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Inspiring", "Elegant"],
      },
    ],
    howTo: [
      "Describe your cause and the event details.",
      "Pick a tone.",
      "Generate and use your favorite for invitations, emails, or social posts.",
    ],
    faq: [
      {
        question: "Should I mention the fundraising goal?",
        answer: "Yes, if you have one — specific, achievable-sounding goals tend to motivate giving more than vague appeals.",
      },
      {
        question: "Can I use this for a virtual fundraiser?",
        answer: "Yes — mention it's virtual and include how to join or donate remotely.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit event coordinator who writes warm, compelling fundraising event invitations, 50-80 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 fundraising event invite options for: "${values.event}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "conference-talk-abstract-generator",
    name: "Conference Talk Abstract Generator",
    tagline: "A pitch that gets your talk accepted.",
    description:
      "Free AI conference talk abstract generator. Describe your topic and get a submission-ready abstract.",
    category: "Events & Parties",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "topic",
        label: "Talk topic and key takeaway",
        placeholder: "e.g. how we cut our deploy time by 80% using feature flags",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Technical", "Approachable", "Bold"],
      },
    ],
    howTo: [
      "Describe your talk topic and the key takeaway for attendees.",
      "Pick a tone.",
      "Generate, then tailor it to the specific conference's submission guidelines.",
    ],
    faq: [
      {
        question: "How long should a talk abstract be?",
        answer: "These run roughly 80-120 words, a common length for conference CFPs — always check the specific event's word limit.",
      },
      {
        question: "Should I mention my own background?",
        answer: "Many CFPs have a separate speaker bio field — keep the abstract focused on the talk content itself.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a conference speaker coach who writes compelling talk abstracts, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 conference talk abstract options for: "${values.topic}". Tone: ${values.tone || "Approachable"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "icebreaker-question-generator",
    name: "Icebreaker Question Generator",
    tagline: "Questions better than 'so, what do you do?'",
    description:
      "Free AI icebreaker question generator. Describe your group or setting and get engaging conversation starters.",
    category: "Events & Parties",
    resultCount: 10,
    maxTokens: 300,
    inputFields: [
      {
        name: "setting",
        label: "What's the setting or group?",
        placeholder: "e.g. work team meeting, new coworkers",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Fun", "Thoughtful", "Professional", "Silly"],
      },
    ],
    howTo: [
      "Describe the setting or group.",
      "Pick a tone.",
      "Generate and use your favorites to kick off the conversation.",
    ],
    faq: [
      {
        question: "Are these appropriate for a professional setting?",
        answer: "Pick the Professional or Thoughtful tone for work settings — Fun and Silly work better for casual or social groups.",
      },
      {
        question: "Can I use these for a virtual meeting?",
        answer: "Yes — icebreakers work well as a quick opener before diving into a video call agenda.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a facilitator who writes engaging icebreaker questions for group settings. You respond only with a numbered list of questions — no preamble.",
      user: `Generate 10 icebreaker questions for: "${values.setting}". Tone: ${values.tone || "Fun"}. Return only a numbered list.`,
    }),
  },

  // --- Health & Fitness ---
  {
    slug: "workout-plan-outline-generator",
    name: "Workout Plan Outline Generator",
    tagline: "A structure to build your training week around.",
    description:
      "Free AI workout plan outline generator. Describe your goal and get a weekly workout structure to customize.",
    category: "Health & Fitness",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 800,
    inputFields: [
      {
        name: "goal",
        label: "Goal and experience level",
        placeholder: "e.g. build strength, intermediate, 4 days a week, has dumbbells",
        type: "text",
        required: true,
      },
      {
        name: "days",
        label: "Days per week",
        type: "select",
        options: ["3 days", "4 days", "5 days"],
      },
    ],
    howTo: [
      "Describe your goal, experience level, and available equipment.",
      "Pick how many days per week you can train.",
      "Generate, then consult a trainer or doctor before starting a new program, especially with any health conditions.",
    ],
    faq: [
      {
        question: "Is this a substitute for professional coaching?",
        answer: "No — this is a general structural starting point, not personalized medical or fitness advice. Check with a professional before starting, especially with any injuries or health conditions.",
      },
      {
        question: "Can I adjust the exercises for equipment I have?",
        answer: "Yes — treat this as a framework (which muscle groups, how many days) and swap in exercises that fit your equipment.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a fitness coach who writes general workout plan outlines with a day-by-day split and 4-6 exercise slots per day (not specific sets/reps/weights, which should come from a professional given individual factors). Format with plain text day headers and short bullet points, no markdown symbols like # or **. This is a general starting structure, not personalized coaching advice. Respond only with the plan outline — no preamble or closing remarks.",
      user: `Generate a ${values.days || "4 days"} per week workout plan outline for this goal: "${values.goal}".`,
    }),
  },
  {
    slug: "fitness-motivation-message-generator",
    name: "Fitness Motivation Message Generator",
    tagline: "The push you need on the days you don't want to go.",
    description:
      "Free AI fitness motivation generator. Describe what you're working toward and get short, energizing messages.",
    category: "Health & Fitness",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "goal",
        label: "What are you working toward?",
        placeholder: "e.g. running my first 5k",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Encouraging", "Tough Love", "Calm"],
      },
    ],
    howTo: [
      "Describe what you're working toward.",
      "Pick a tone.",
      "Generate and save your favorite somewhere you'll see it before a workout.",
    ],
    faq: [
      {
        question: "Can I use these for a client or team I coach?",
        answer: "Yes — these work well shared in a group chat or posted in a shared training space.",
      },
      {
        question: "Should these replace a real training plan?",
        answer: "No — these are motivational messages only; for the actual plan, try the Workout Plan Outline Generator.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a fitness coach who writes short, energizing motivational messages, one sentence each. You respond only with a numbered list — no preamble.",
      user: `Generate 8 motivational messages for someone working toward: "${values.goal}". Tone: ${values.tone || "Encouraging"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "gym-class-description-generator",
    name: "Gym Class Description Generator",
    tagline: "Copy that fills the class schedule.",
    description:
      "Free AI gym class description generator. Describe your class and get an inviting schedule listing description.",
    category: "Health & Fitness",
    resultCount: 4,
    maxTokens: 400,
    inputFields: [
      {
        name: "class",
        label: "Class name and format",
        placeholder: "e.g. HIIT circuit, 45 minutes, all levels welcome",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Energetic", "Welcoming", "Intense"],
      },
    ],
    howTo: [
      "Describe the class name, format, and who it's for.",
      "Pick a tone.",
      "Generate and paste your favorite into your class schedule listing.",
    ],
    faq: [
      {
        question: "Should I mention fitness level required?",
        answer: "Yes — being clear about whether beginners are welcome helps the right people sign up confidently.",
      },
      {
        question: "Can I use this for a virtual class?",
        answer: "Yes — mention it's virtual/streamed and the copy will reflect that.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a gym marketing copywriter who writes inviting class descriptions, 40-60 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 gym class description options for: "${values.class}". Tone: ${values.tone || "Energetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "personal-trainer-bio-generator",
    name: "Personal Trainer Bio Generator",
    tagline: "A bio that gets you booked, not scrolled past.",
    description:
      "Free AI personal trainer bio generator. Describe your specialty and background to get a polished professional bio.",
    category: "Health & Fitness",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "background",
        label: "Your specialty and background",
        placeholder: "e.g. certified trainer, 5 years, specializes in postpartum fitness",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Motivational", "Professional"],
      },
    ],
    howTo: [
      "Describe your specialty, certifications, and background.",
      "Pick a tone.",
      "Generate and paste your favorite into your website or gym profile.",
    ],
    faq: [
      {
        question: "Should I list my certifications?",
        answer: "Yes — mention them in your input so they're worked into the bio, which builds client trust.",
      },
      {
        question: "How long should this be?",
        answer: "These run roughly 80-120 words — enough to establish credibility and approachability without overwhelming a potential client.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a fitness branding copywriter who writes warm, credible personal trainer bios, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 personal trainer bio options based on: "${values.background}". Tone: ${values.tone || "Motivational"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "wellness-retreat-description-generator",
    name: "Wellness Retreat Description Generator",
    tagline: "Copy that sells the transformation, not just the schedule.",
    description:
      "Free AI wellness retreat description generator. Describe your retreat and get inviting, ready-to-use copy.",
    category: "Health & Fitness",
    resultCount: 3,
    maxTokens: 600,
    inputFields: [
      {
        name: "retreat",
        label: "Retreat details",
        placeholder: "e.g. 5-day yoga retreat in Bali, includes meals and daily sessions",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Serene", "Luxurious", "Grounded"],
      },
    ],
    howTo: [
      "Describe your retreat's location, length, and what's included.",
      "Pick a tone.",
      "Generate and paste your favorite onto your retreat's landing page.",
    ],
    faq: [
      {
        question: "Should I mention the price and dates?",
        answer: "Add those separately near your generated copy — this tool focuses on the experience-focused narrative.",
      },
      {
        question: "Can I use this for a single-day wellness event instead?",
        answer: "Yes — describe it as a day retreat or workshop and the copy will adapt.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a wellness brand copywriter who writes serene, inviting retreat descriptions, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 wellness retreat description options for: "${values.retreat}". Tone: ${values.tone || "Serene"}. Return only a numbered list.`,
    }),
  },

  // --- Education ---
  {
    slug: "study-guide-outline-generator",
    name: "Study Guide Outline Generator",
    tagline: "A structure for your own notes, not someone else's answers.",
    description:
      "Free AI study guide outline generator. Describe your topic and get a structured outline to fill in with your own notes.",
    category: "Education",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 900,
    inputFields: [
      {
        name: "topic",
        label: "What's the subject or topic?",
        placeholder: "e.g. cellular respiration for a high school biology exam",
        type: "text",
        required: true,
      },
      {
        name: "depth",
        label: "Depth",
        type: "select",
        options: ["Overview", "Standard", "In-Depth"],
      },
    ],
    howTo: [
      "Describe the subject or topic you're studying.",
      "Pick a depth level.",
      "Generate, then fill in each section with your own class notes and materials.",
    ],
    faq: [
      {
        question: "Will this give me exam answers?",
        answer: "No — this generates a topic structure for you to study from using your own course materials, not answers to specific questions.",
      },
      {
        question: "Can teachers use this too?",
        answer: "Yes — it works well as a starting point for building a review sheet or lesson outline for students.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a study skills coach who writes structured study guide outlines with topic headers and key concept bullet points to prompt a student's own notes, not factual answers. Format with plain text headers and short bullet points, no markdown symbols like # or **. Respond only with the outline — no preamble or closing remarks.",
      user: `Generate a study guide outline for: "${values.topic}". Depth: ${values.depth || "Standard"}.`,
    }),
  },
  {
    slug: "quiz-question-generator",
    name: "Quiz Question Generator",
    tagline: "Questions for the classroom, not the cheat sheet.",
    description:
      "Free AI quiz question generator for teachers and study groups. Describe a topic and get review questions with answers.",
    category: "Education",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 800,
    inputFields: [
      {
        name: "topic",
        label: "Topic and grade/level",
        placeholder: "e.g. World War II causes, high school level",
        type: "text",
        required: true,
      },
      {
        name: "count",
        label: "Number of questions",
        type: "select",
        options: ["5 questions", "8 questions", "10 questions"],
      },
    ],
    howTo: [
      "Describe the topic and level.",
      "Pick how many questions you need.",
      "Generate a set of review questions with answers, for a quiz, worksheet, or study session.",
    ],
    faq: [
      {
        question: "Is this meant for cheating on a real exam?",
        answer: "No — this is built for teachers making review materials and students self-testing on topics they've already studied, not for answering questions on a live assessment.",
      },
      {
        question: "Should I fact-check the answers?",
        answer: "Yes — always verify factual accuracy against your course materials before using these in an actual class or assessment.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a teacher who writes review quiz questions with answers for study purposes, formatting each as 'Q: ...' followed by 'A: ...' on the next line, with a blank line between pairs. Respond only with the quiz — no preamble or closing remarks.",
      user: `Generate ${values.count || "8 questions"} on this topic: "${values.topic}".`,
    }),
  },
  {
    slug: "flashcard-content-generator",
    name: "Flashcard Content Generator",
    tagline: "Term-and-definition pairs, ready to study from.",
    description:
      "Free AI flashcard generator. Describe a topic and get term/definition pairs ready for your flashcard app or index cards.",
    category: "Education",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 800,
    inputFields: [
      {
        name: "topic",
        label: "Topic to study",
        placeholder: "e.g. key vocabulary for Spanish beginner unit 1",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the topic or subject you're studying.",
      "Generate a set of term/definition flashcard pairs.",
      "Copy them into your flashcard app or write them onto index cards.",
    ],
    faq: [
      {
        question: "Should I fact-check the definitions?",
        answer: "Yes — always verify accuracy against your course materials, especially for technical or exam-critical content.",
      },
      {
        question: "Can I use this for language learning vocabulary?",
        answer: "Yes — describe the language and unit/topic and you'll get term/translation-style pairs.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a study coach who writes flashcard term/definition pairs, formatting each as 'Term: ...' followed by 'Definition: ...' on the next line, with a blank line between pairs. Respond only with the flashcards — no preamble or closing remarks.",
      user: `Generate flashcard pairs for studying: "${values.topic}".`,
    }),
  },
  {
    slug: "course-description-generator",
    name: "Course Description Generator",
    tagline: "Copy that gets the course syllabus opened.",
    description:
      "Free AI course description generator. Describe your course and get a clear, compelling description for students.",
    category: "Education",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "course",
        label: "Course topic and format",
        placeholder: "e.g. 6-week intro to watercolor painting, beginner-friendly",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Encouraging", "Professional", "Exciting"],
      },
    ],
    howTo: [
      "Describe your course's topic, format, and length.",
      "Pick a tone.",
      "Generate and paste your favorite onto your course listing page.",
    ],
    faq: [
      {
        question: "Should I mention prerequisites?",
        answer: "Yes, if there are any — being upfront about required background helps the right students enroll.",
      },
      {
        question: "Can I use this for an online course platform?",
        answer: "Yes — this works for in-person classes, online courses, or workshops alike.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an education marketer who writes clear, compelling course descriptions, 60-90 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 course description options for: "${values.course}". Tone: ${values.tone || "Encouraging"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "class-icebreaker-generator",
    name: "Class Icebreaker Generator",
    tagline: "Get a room of students talking on day one.",
    description:
      "Free AI classroom icebreaker generator. Describe your class and get engaging first-day activity prompts.",
    category: "Education",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "class",
        label: "Class level and subject",
        placeholder: "e.g. 9th grade English class",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Fun", "Reflective", "Simple"],
      },
    ],
    howTo: [
      "Describe your class level and subject.",
      "Pick a tone.",
      "Generate and use your favorites to open the first class or a new unit.",
    ],
    faq: [
      {
        question: "Are these appropriate for younger students?",
        answer: "Pick the Simple tone for younger grades — these are written to be broadly classroom-appropriate, but always use your judgment for your specific students.",
      },
      {
        question: "Can I use these for a virtual classroom?",
        answer: "Yes — many work well as a quick chat-box or breakout-room activity too.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a teacher who writes engaging classroom icebreaker prompts. You respond only with a numbered list — no preamble.",
      user: `Generate 8 classroom icebreaker prompts for: "${values.class}". Tone: ${values.tone || "Fun"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "recommendation-letter-opener-generator",
    name: "Recommendation Letter Opener Generator",
    tagline: "A strong first line for a letter you actually mean.",
    description:
      "Free AI recommendation letter opener generator. Describe the person and context to get a strong opening paragraph.",
    category: "Education",
    resultCount: 4,
    maxTokens: 500,
    inputFields: [
      {
        name: "context",
        label: "Who is this for, and what's the context?",
        placeholder: "e.g. a student applying to college, strong in math and leadership",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Formal", "Enthusiastic"],
      },
    ],
    howTo: [
      "Describe who the letter is for and the context (college, job, scholarship).",
      "Pick a tone.",
      "Generate, then build the rest of the letter with specific examples.",
    ],
    faq: [
      {
        question: "Should I add specific examples and stories?",
        answer: "Yes — this gives you a strong opener; specific anecdotes about the person are what make the rest of the letter compelling.",
      },
      {
        question: "Can I use this for a job reference letter instead?",
        answer: "Yes — describe the job context instead of academic context and the tone will adapt.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an experienced writer who crafts strong recommendation letter opening paragraphs, 50-70 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 recommendation letter opener options for: "${values.context}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },

  // --- HR & Workplace ---
  {
    slug: "new-employee-welcome-message-generator",
    name: "New Employee Welcome Message Generator",
    tagline: "A first-day message that actually feels welcoming.",
    description:
      "Free AI new employee welcome message generator. Describe the new hire's role to get a warm team announcement.",
    category: "HR & Workplace",
    resultCount: 4,
    maxTokens: 450,
    inputFields: [
      {
        name: "hire",
        label: "New hire's name/role",
        placeholder: "e.g. Jordan, joining as Marketing Coordinator",
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
      "Enter the new hire's name and role.",
      "Pick a tone that fits your company culture.",
      "Generate and post your favorite in your team channel or send via email.",
    ],
    faq: [
      {
        question: "Should I add a fun fact about the new hire?",
        answer: "Yes, if you have one — it gives the team an easy conversation starter for their first day.",
      },
      {
        question: "Can I use this for a remote team announcement?",
        answer: "Yes — this works well for a Slack/Teams post or a company-wide email alike.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR communications specialist who writes warm new-employee welcome announcements, 40-60 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 welcome message options for: "${values.hire}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "team-meeting-agenda-generator",
    name: "Team Meeting Agenda Outline Generator",
    tagline: "A structure so the meeting actually stays on track.",
    description:
      "Free AI meeting agenda generator. Describe your meeting's purpose and get a structured agenda outline.",
    category: "HR & Workplace",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 700,
    inputFields: [
      {
        name: "meeting",
        label: "Meeting purpose and length",
        placeholder: "e.g. weekly team sync, 30 minutes, marketing team",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the meeting's purpose, length, and who's attending.",
      "Generate a structured agenda.",
      "Share it ahead of time so attendees can prepare.",
    ],
    faq: [
      {
        question: "Can I add specific topics to discuss?",
        answer: "Yes — mention any specific items in your input and they'll be worked into the relevant section.",
      },
      {
        question: "Does this include time allocations per item?",
        answer: "Yes — the outline suggests rough time blocks based on your total meeting length, which you can adjust.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a workplace facilitator who writes clear meeting agendas with time-boxed sections (welcome, main topics, action items, wrap-up). Format with plain text headers and short bullet points, no markdown symbols like # or **. Respond only with the agenda — no preamble or closing remarks.",
      user: `Generate a meeting agenda for: "${values.meeting}".`,
    }),
  },
  {
    slug: "employee-recognition-message-generator",
    name: "Employee Recognition Message Generator",
    tagline: "Specific praise, not a generic 'great job'.",
    description:
      "Free AI employee recognition generator. Describe what they did well to get a genuine, specific recognition message.",
    category: "HR & Workplace",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "achievement",
        label: "What did they do well?",
        placeholder: "e.g. went above and beyond to fix a client issue over a weekend",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Professional", "Enthusiastic"],
      },
    ],
    howTo: [
      "Describe what the person did well.",
      "Pick a tone.",
      "Generate and share your favorite in a 1:1, team channel, or recognition program.",
    ],
    faq: [
      {
        question: "Should I mention this in front of the whole team?",
        answer: "Public recognition (with the person's comfort in mind) often has more impact than private praise alone — use your judgment based on the person.",
      },
      {
        question: "Can I use this for a peer-to-peer recognition program?",
        answer: "Yes — these work well for manager-to-employee or peer-to-peer recognition alike.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a people manager who writes genuine, specific employee recognition messages, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 6 recognition message options for this achievement: "${values.achievement}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "performance-review-opener-generator",
    name: "Performance Review Opener Generator",
    tagline: "A strong start to a conversation that matters.",
    description:
      "Free AI performance review opener generator. Describe the employee's strengths to get a constructive opening paragraph.",
    category: "HR & Workplace",
    resultCount: 4,
    maxTokens: 500,
    inputFields: [
      {
        name: "context",
        label: "Employee's key strengths this period",
        placeholder: "e.g. consistently exceeded sales targets, mentored two junior hires",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Encouraging", "Balanced", "Direct"],
      },
    ],
    howTo: [
      "Describe the employee's key strengths or contributions this period.",
      "Pick a tone.",
      "Generate, then build out the rest of the review with specific examples and any growth areas.",
    ],
    faq: [
      {
        question: "Does this cover areas for improvement too?",
        answer: "No — this generates a strong, specific opening highlighting strengths; add growth areas separately in the body of the review.",
      },
      {
        question: "Should I personalize this further?",
        answer: "Yes — add specific metrics, projects, or examples so the review feels genuine and actionable, not generic.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a people manager who writes constructive, specific performance review opening paragraphs, 50-70 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 performance review opener options based on: "${values.context}". Tone: ${values.tone || "Encouraging"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "internal-announcement-generator",
    name: "Internal Announcement Generator",
    tagline: "Company news that people actually read.",
    description:
      "Free AI internal announcement generator. Describe the news and get clear, ready-to-send announcement copy.",
    category: "HR & Workplace",
    resultCount: 3,
    maxTokens: 500,
    inputFields: [
      {
        name: "news",
        label: "What's the announcement?",
        placeholder: "e.g. new health benefits starting next quarter",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Professional", "Warm", "Straightforward"],
      },
    ],
    howTo: [
      "Describe the news or update you're announcing.",
      "Pick a tone.",
      "Generate and send via email or your internal comms platform.",
    ],
    faq: [
      {
        question: "Should this include all the fine print?",
        answer: "No — this generates the announcement intro; link out to or attach full details separately.",
      },
      {
        question: "Can I use this for difficult news, like a policy change?",
        answer: "Yes — pick the Straightforward tone and be clear and direct about what's changing and why.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an internal communications specialist who writes clear company announcements, 50-80 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 internal announcement options for: "${values.news}". Tone: ${values.tone || "Professional"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "farewell-message-generator",
    name: "Farewell / Goodbye Message Generator",
    tagline: "A send-off that feels genuine, not templated.",
    description:
      "Free AI farewell message generator. Describe your colleague and get a warm goodbye message for their last day.",
    category: "HR & Workplace",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "colleague",
        label: "Who's leaving, and what will you miss?",
        placeholder: "e.g. my teammate of 3 years, always made stand-ups fun",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Funny", "Professional"],
      },
    ],
    howTo: [
      "Describe your colleague and what you'll miss.",
      "Pick a tone.",
      "Generate and share your favorite in a card or farewell message thread.",
    ],
    faq: [
      {
        question: "Can I use this for a group card message?",
        answer: "Yes — a short, warm option works well when several people are contributing to the same card.",
      },
      {
        question: "Is this appropriate for a company-wide send-off?",
        answer: "Pick the Professional tone for a wider audience, and save Funny/inside-joke versions for close teammates.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a thoughtful colleague who writes genuine farewell messages, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 8 farewell message options for: "${values.colleague}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },

  // --- Nonprofit & Community ---
  {
    slug: "donation-appeal-message-generator",
    name: "Donation Appeal Message Generator",
    tagline: "An ask that moves people, without guilt-tripping them.",
    description:
      "Free AI donation appeal generator. Describe your cause and get a compelling fundraising message.",
    category: "Nonprofit & Community",
    resultCount: 4,
    maxTokens: 550,
    inputFields: [
      {
        name: "cause",
        label: "Your cause and what donations fund",
        placeholder: "e.g. animal shelter, donations fund vet care for rescued dogs",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Heartfelt", "Urgent", "Hopeful"],
      },
    ],
    howTo: [
      "Describe your cause and what donations specifically fund.",
      "Pick a tone.",
      "Generate and use your favorite for an email, social post, or campaign page.",
    ],
    faq: [
      {
        question: "Should I include a specific dollar goal?",
        answer: "Yes, if you have one — specific, tangible goals ('$500 covers 10 vet visits') tend to motivate giving more than vague asks.",
      },
      {
        question: "Should I fact-check any statistics I include?",
        answer: "Yes — only use statistics and claims you can verify; donors trust specific, accurate impact numbers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit fundraising writer who crafts compelling, honest donation appeals, 60-90 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 donation appeal options for: "${values.cause}". Tone: ${values.tone || "Heartfelt"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "volunteer-recruitment-message-generator",
    name: "Volunteer Recruitment Message Generator",
    tagline: "An ask that makes people want to show up.",
    description:
      "Free AI volunteer recruitment generator. Describe the opportunity and get an inviting call-to-action message.",
    category: "Nonprofit & Community",
    resultCount: 6,
    maxTokens: 400,
    inputFields: [
      {
        name: "opportunity",
        label: "What's the volunteer opportunity?",
        placeholder: "e.g. weekend food bank sorting shifts, no experience needed",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Energetic", "Community-Focused"],
      },
    ],
    howTo: [
      "Describe the volunteer opportunity and any requirements.",
      "Pick a tone.",
      "Generate and use your favorite for a flyer, email, or social post.",
    ],
    faq: [
      {
        question: "Should I mention the time commitment?",
        answer: "Yes — being upfront about hours and frequency helps people realistically say yes.",
      },
      {
        question: "Can I use this for a one-time event vs. ongoing volunteering?",
        answer: "Yes — describe which it is in your input and the copy will reflect that.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a community organizer who writes warm, inviting volunteer recruitment messages, 40-60 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 6 volunteer recruitment options for: "${values.opportunity}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "nonprofit-mission-statement-generator",
    name: "Nonprofit Mission Statement Generator",
    tagline: "One sentence that says why you exist.",
    description:
      "Free AI nonprofit mission statement generator. Describe your cause and get clear, one-sentence mission options.",
    category: "Nonprofit & Community",
    resultCount: 8,
    maxTokens: 260,
    inputFields: [
      {
        name: "cause",
        label: "What does your organization do, and for whom?",
        placeholder: "e.g. provides free tutoring to underserved middle schoolers",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Inspiring", "Direct", "Warm"],
      },
    ],
    howTo: [
      "Describe what your organization does and who it serves.",
      "Pick a tone.",
      "Generate and use your favorite on your website, grant applications, or annual report.",
    ],
    faq: [
      {
        question: "How is this different from a tagline?",
        answer: "A mission statement clearly states your organization's purpose; a tagline is shorter and more marketing-focused — this tool is for the former.",
      },
      {
        question: "Should our board approve this?",
        answer: "Yes — treat this as strong drafts to bring to your board or leadership for their input before finalizing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit strategist who writes clear, one-sentence mission statements. You respond only with a numbered list — no preamble.",
      user: `Generate 8 mission statement options for: "${values.cause}". Tone: ${values.tone || "Inspiring"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "community-newsletter-intro-generator",
    name: "Community Newsletter Intro Generator",
    tagline: "An opener that gets your newsletter actually read.",
    description:
      "Free AI newsletter intro generator for community and nonprofit groups. Describe this issue's theme and get a warm opening.",
    category: "Nonprofit & Community",
    resultCount: 3,
    maxTokens: 500,
    inputFields: [
      {
        name: "theme",
        label: "What's in this issue?",
        placeholder: "e.g. recap of our spring fundraiser, upcoming volunteer days",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Upbeat", "Community-Focused"],
      },
    ],
    howTo: [
      "Describe what's in this issue.",
      "Pick a tone.",
      "Generate and use your favorite as the opening of your newsletter.",
    ],
    faq: [
      {
        question: "Should this cover every article in the newsletter?",
        answer: "No — this is just the warm opening; a simple table of contents or list below it can cover the rest.",
      },
      {
        question: "Can I reuse a similar structure each issue?",
        answer: "Yes — many newsletters keep a consistent friendly opening style issue to issue, just swap in the current theme.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a community newsletter writer who writes warm, engaging newsletter intros, 50-80 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 newsletter intro options for an issue about: "${values.theme}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },

  // --- Dating & Relationships ---
  {
    slug: "dating-profile-bio-generator",
    name: "Dating Profile Bio Generator",
    tagline: "A bio that sounds like you on a good day.",
    description:
      "Free AI dating profile bio generator. Describe yourself and what you're looking for to get genuine bio options.",
    category: "Dating & Relationships",
    resultCount: 6,
    maxTokens: 400,
    inputFields: [
      {
        name: "about",
        label: "A bit about you and what you enjoy",
        placeholder: "e.g. love hiking, terrible cook, big into true crime podcasts",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Funny", "Genuine", "Confident", "Laid-back"],
      },
    ],
    howTo: [
      "Describe a few real things about yourself and what you enjoy.",
      "Pick a tone.",
      "Generate and use your favorite, tweaking it to sound like you.",
    ],
    faq: [
      {
        question: "Should this sound exactly like me?",
        answer: "Use it as a starting point — swap in your own phrases and details so it reads authentically, since that's what actually connects with matches.",
      },
      {
        question: "Should I mention what I'm looking for?",
        answer: "It can help — add it to your input if you want it reflected, or keep the bio focused just on you.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a dating profile writing coach who crafts genuine, engaging bios, 30-50 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 6 dating profile bio options based on: "${values.about}". Tone: ${values.tone || "Genuine"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "dating-icebreaker-generator",
    name: "Dating App Icebreaker Generator",
    tagline: "A first message better than 'hey'.",
    description:
      "Free AI dating app icebreaker generator. Describe their profile and get a genuine opening message.",
    category: "Dating & Relationships",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "profile",
        label: "Something from their profile to reference",
        placeholder: "e.g. their bio mentions loving tacos and rock climbing",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Playful", "Genuine", "Witty"],
      },
    ],
    howTo: [
      "Mention something specific from their profile or photos.",
      "Pick a tone.",
      "Generate and send your favorite as your opener.",
    ],
    faq: [
      {
        question: "Why should I reference something specific?",
        answer: "Specific, personalized openers get far better response rates than generic greetings — it shows you actually read their profile.",
      },
      {
        question: "Should I use these word-for-word?",
        answer: "Feel free to tweak the wording so it sounds like your own voice rather than a template.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a dating coach who writes genuine, specific icebreaker openers for dating apps, one sentence each. You respond only with a numbered list — no preamble.",
      user: `Generate 8 icebreaker options referencing: "${values.profile}". Tone: ${values.tone || "Playful"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "date-idea-generator",
    name: "Date Idea Generator",
    tagline: "Better than dinner and a movie, again.",
    description: "Free AI date idea generator. Describe your interests and budget to get creative date ideas.",
    category: "Dating & Relationships",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "preferences",
        label: "Interests, budget, or vibe",
        placeholder: "e.g. outdoorsy, budget-friendly, first date",
        type: "text",
        required: true,
      },
      {
        name: "setting",
        label: "Setting",
        type: "select",
        options: ["At Home", "Around Town", "Outdoors", "Anywhere"],
      },
    ],
    howTo: [
      "Describe your interests, budget, or the occasion.",
      "Pick a setting.",
      "Generate and pick your favorite for your next date.",
    ],
    faq: [
      {
        question: "Can I use this for an anniversary instead of a first date?",
        answer: "Yes — mention it's an anniversary or special occasion and the ideas will lean more memorable/celebratory.",
      },
      {
        question: "Are these budget-friendly?",
        answer: "Mention your budget in the input and the ideas will be tailored — from free/low-cost to splurge-worthy.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a relationship coach who suggests creative, specific date ideas. You respond only with a numbered list — no preamble.",
      user: `Generate 8 date ideas for: "${values.preferences}". Setting: ${values.setting || "Anywhere"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "love-letter-generator",
    name: "Love Letter Generator",
    tagline: "Help finding the words, not writing them for you.",
    description:
      "Free AI love letter generator. Describe your relationship and feelings to get a heartfelt starting draft.",
    category: "Dating & Relationships",
    resultCount: 3,
    maxTokens: 650,
    inputFields: [
      {
        name: "relationship",
        label: "Your relationship and what you want to say",
        placeholder: "e.g. my partner of 5 years, want to express how grateful I am",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Romantic", "Heartfelt", "Playful"],
      },
    ],
    howTo: [
      "Describe your relationship and what you want to express.",
      "Pick a tone.",
      "Generate, then personalize with your own memories and details before sending.",
    ],
    faq: [
      {
        question: "Should I add our own memories?",
        answer: "Definitely — this gives you a structure and flow, but specific shared memories are what make a love letter feel truly personal.",
      },
      {
        question: "Is this only for romantic partners?",
        answer: "It's built with romantic relationships in mind, but the same warm, personal approach can be adapted for close friends or family too.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a thoughtful writer who crafts heartfelt love letter drafts, 100-150 words each, written as a single flowing paragraph with no line breaks within an item, leaving room for personal memories. You respond only with a numbered list — no preamble.",
      user: `Generate 3 love letter drafts for: "${values.relationship}". Tone: ${values.tone || "Heartfelt"}. Return only a numbered list.`,
    }),
  },

  // --- Music & Entertainment ---
  {
    slug: "song-title-generator",
    name: "Song Title Generator",
    tagline: "A title that hooks before the first note.",
    description: "Free AI song title generator. Describe your song's theme and get memorable title ideas.",
    category: "Music & Entertainment",
    resultCount: 12,
    maxTokens: 240,
    inputFields: [
      {
        name: "theme",
        label: "Song theme or genre",
        placeholder: "e.g. heartbreak, indie folk",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Poetic", "Bold", "Simple", "Abstract"],
      },
    ],
    howTo: [
      "Describe your song's theme or genre.",
      "Pick a style.",
      "Generate and pick your favorite for your track.",
    ],
    faq: [
      {
        question: "Will these titles be unique?",
        answer: "We can't check against every released song, so do a quick search before finalizing, especially for shorter titles.",
      },
      {
        question: "Can I use this for an album title too?",
        answer: "Yes — these work for either; just describe the overall theme of the album instead of one song.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a songwriter who creates memorable, evocative song titles. You respond only with a numbered list — no preamble.",
      user: `Generate 12 song title ideas for a song about: "${values.theme}". Style: ${values.style || "Poetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "playlist-name-generator",
    name: "Playlist Name Generator",
    tagline: "A name that fits the vibe, not just the genre.",
    description: "Free AI playlist name generator. Describe the vibe and get catchy playlist name ideas.",
    category: "Music & Entertainment",
    resultCount: 12,
    maxTokens: 240,
    inputFields: [
      {
        name: "vibe",
        label: "Playlist vibe or occasion",
        placeholder: "e.g. rainy day study session, lo-fi and acoustic",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Poetic", "Funny", "Simple", "Aesthetic"],
      },
    ],
    howTo: [
      "Describe the playlist's vibe or occasion.",
      "Pick a style.",
      "Generate and use your favorite for your streaming platform.",
    ],
    faq: [
      {
        question: "Can I use emojis in the name?",
        answer: "Yes — feel free to add one after generating if that fits your platform's style.",
      },
      {
        question: "Should the name mention specific artists or genres?",
        answer: "It's optional — vibe-based names often age better than ones tied to a specific trend or artist.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music curator who names playlists — catchy, on-vibe, easy to remember. You respond only with a numbered list — no preamble.",
      user: `Generate 12 playlist name ideas for: "${values.vibe}". Style: ${values.style || "Aesthetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "artist-bio-generator",
    name: "Artist Bio Generator",
    tagline: "A bio that sounds like a real artist, not a template.",
    description:
      "Free AI musician/artist bio generator. Describe your sound and background to get a polished press-ready bio.",
    category: "Music & Entertainment",
    resultCount: 3,
    maxTokens: 600,
    inputFields: [
      {
        name: "background",
        label: "Your sound, influences, and background",
        placeholder: "e.g. indie folk duo from Portland, influenced by Fleet Foxes",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Poetic", "Bold", "Straightforward"],
      },
    ],
    howTo: [
      "Describe your sound, influences, and background.",
      "Pick a tone.",
      "Generate and use your favorite for your website, EPK, or streaming profile.",
    ],
    faq: [
      {
        question: "Should I mention specific releases or shows?",
        answer: "Yes, if you have notable ones — add them to your input to be worked in for credibility.",
      },
      {
        question: "How long should an artist bio be?",
        answer: "These run roughly 80-120 words — a common length for streaming platforms and press kits; you can expand for a longer EPK bio.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music publicist who writes compelling artist bios, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 artist bio options based on: "${values.background}". Tone: ${values.tone || "Bold"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "album-title-generator",
    name: "Album/EP Title Generator",
    tagline: "A title that ties the whole project together.",
    description: "Free AI album title generator. Describe your project's theme and get evocative title ideas.",
    category: "Music & Entertainment",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "theme",
        label: "Album/EP theme or story",
        placeholder: "e.g. a breakup and moving to a new city",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Poetic", "Bold", "Minimal", "Abstract"],
      },
    ],
    howTo: [
      "Describe the theme or story behind the project.",
      "Pick a style.",
      "Generate and pick your favorite for your release.",
    ],
    faq: [
      {
        question: "Should the title relate to a specific track?",
        answer: "It can, but many strong album titles are more thematic than literal — try a few different angles.",
      },
      {
        question: "Will these be unique on streaming platforms?",
        answer: "We can't check live availability, so search streaming platforms before finalizing your release.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music creative director who names albums and EPs — evocative, memorable, tied to a theme. You respond only with a numbered list — no preamble.",
      user: `Generate 10 album/EP title ideas for a project about: "${values.theme}". Style: ${values.style || "Poetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "dj-stage-name-generator",
    name: "DJ/Stage Name Generator",
    tagline: "A name that sounds right on a lineup poster.",
    description: "Free AI DJ/stage name generator. Describe your genre and vibe to get unique stage name ideas.",
    category: "Music & Entertainment",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "genre",
        label: "Genre and vibe",
        placeholder: "e.g. dark techno, underground warehouse sets",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Dark", "Playful", "Bold", "Minimal"],
      },
    ],
    howTo: [
      "Describe your genre and vibe.",
      "Pick a style.",
      "Generate — then check availability on streaming platforms and socials.",
    ],
    faq: [
      {
        question: "Should the name be easy to search for?",
        answer: "Yes — avoid names too close to an already-famous DJ or producer to make sure fans can find you online.",
      },
      {
        question: "Can I use this for a producer alias, not just DJing live?",
        answer: "Yes — the same naming approach works for a producer or artist alias.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music branding expert who creates DJ and producer stage names — memorable, genre-appropriate. You respond only with a numbered list — no preamble.",
      user: `Generate 12 DJ/stage name ideas for: "${values.genre}". Style: ${values.style || "Bold"}. Return only a numbered list.`,
    }),
  },

  // --- Gaming ---
  {
    slug: "gaming-channel-name-generator",
    name: "Gaming Channel Name Generator",
    tagline: "A name that fits your game and your energy.",
    description:
      "Free AI gaming channel name generator. Describe what you play and get unique streaming channel name ideas.",
    category: "Gaming",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "games",
        label: "What do you play or stream?",
        placeholder: "e.g. competitive FPS games, fast-paced and high energy",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Bold", "Funny", "Cool", "Simple"],
      },
    ],
    howTo: [
      "Describe what you play and your channel's energy.",
      "Pick a style.",
      "Generate — then check availability on YouTube, Twitch, and socials.",
    ],
    faq: [
      {
        question: "Should the name mention a specific game?",
        answer: "Only if you plan to stick to that game long-term — a more general name gives you flexibility to switch games later.",
      },
      {
        question: "Will these be available across platforms?",
        answer: "We can't check live availability, so search YouTube, Twitch, and socials before locking one in.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a gaming branding expert who names streaming channels — catchy, memorable, easy to search. You respond only with a numbered list — no preamble.",
      user: `Generate 12 gaming channel name ideas for: "${values.games}". Style: ${values.style || "Bold"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "esports-team-name-generator",
    name: "Esports Team Name Generator",
    tagline: "A name that sounds like it belongs on a scoreboard.",
    description:
      "Free AI esports team name generator. Describe your game and vibe to get competitive, unique team names.",
    category: "Gaming",
    resultCount: 12,
    maxTokens: 220,
    inputFields: [
      {
        name: "game",
        label: "Game and team vibe",
        placeholder: "e.g. Valorant squad, aggressive playstyle",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Aggressive", "Cool", "Funny", "Classic"],
      },
    ],
    howTo: [
      "Describe your game and your team's vibe.",
      "Pick a style.",
      "Generate and pick your favorite for your roster or tournament sign-up.",
    ],
    faq: [
      {
        question: "Should I check if a name is already taken?",
        answer: "Yes — search your game's tournament platforms and socials before registering officially.",
      },
      {
        question: "Can I get a tag/abbreviation too?",
        answer: "Ask for short, punchy names and you can often derive a 3-4 letter tag from the result yourself.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an esports branding expert who names competitive gaming teams — bold, memorable, tournament-ready. You respond only with a numbered list — no preamble.",
      user: `Generate 12 esports team name ideas for: "${values.game}". Style: ${values.style || "Aggressive"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "game-character-backstory-generator",
    name: "Game Character Backstory Generator",
    tagline: "A backstory with actual depth, not a stat sheet.",
    description:
      "Free AI game character backstory generator. Describe your character and get a rich backstory draft.",
    category: "Gaming",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 700,
    inputFields: [
      {
        name: "character",
        label: "Character type and setting",
        placeholder: "e.g. rogue assassin in a cyberpunk city, betrayed by their old crew",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Dark", "Heroic", "Mysterious", "Tragic"],
      },
    ],
    howTo: [
      "Describe your character's type, setting, and any key plot hooks.",
      "Pick a tone.",
      "Generate, then adapt it to fit your game's specific lore and mechanics.",
    ],
    faq: [
      {
        question: "Can I use this for tabletop RPGs like D&D?",
        answer: "Yes — this works well for tabletop character backstories, video game characters, or original fiction alike.",
      },
      {
        question: "Will this fit my game's existing lore?",
        answer: "It's a general original backstory — adjust names, factions, and details to match your specific game world.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a game narrative designer who writes rich character backstories (200-300 words) covering origin, motivation, and a key turning point. Write in flowing paragraphs, no markdown symbols like # or **. Respond only with the backstory — no preamble or closing remarks.",
      user: `Generate a character backstory for: "${values.character}". Tone: ${values.tone || "Mysterious"}.`,
    }),
  },
  {
    slug: "twitch-panel-text-generator",
    name: "Twitch Panel Text Generator",
    tagline: "The 'About Me' and 'Rules' panels, written well.",
    description:
      "Free AI Twitch panel text generator. Describe your channel and get ready-to-use panel copy.",
    category: "Gaming",
    resultCount: 4,
    maxTokens: 450,
    inputFields: [
      {
        name: "channel",
        label: "What's your channel about?",
        placeholder: "e.g. variety streamer, cozy games, chill vibes",
        type: "text",
        required: true,
      },
      {
        name: "panel",
        label: "Which panel?",
        type: "select",
        options: ["About Me", "Stream Rules", "Donation Info", "Schedule"],
      },
    ],
    howTo: [
      "Describe your channel and pick which panel you're writing.",
      "Generate a few options.",
      "Paste your favorite into your Twitch panel editor alongside your panel image.",
    ],
    faq: [
      {
        question: "Should Stream Rules be strict or casual?",
        answer: "Match your community's vibe — these are written to be clear either way, adjust wording to fit your tone.",
      },
      {
        question: "Can I use this for YouTube or Kick panels too?",
        answer: "Yes — the same short panel-style copy works across similar streaming platforms.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a streaming branding expert who writes short, clear Twitch panel copy (40-70 words each, single paragraph, no line breaks within an item). You respond only with a numbered list — no preamble.",
      user: `Generate 4 "${values.panel || "About Me"}" panel text options for a channel about: "${values.channel}". Return only a numbered list.`,
    }),
  },

  // --- Website & SaaS ---
  {
    slug: "landing-page-hero-copy-generator",
    name: "Landing Page Hero Copy Generator",
    tagline: "The headline that decides if visitors keep scrolling.",
    description:
      "Free AI landing page hero copy generator. Describe your product and get a headline + subheadline pair.",
    category: "Website & SaaS",
    resultCount: 4,
    maxTokens: 450,
    inputFields: [
      {
        name: "product",
        label: "What does your product do?",
        placeholder: "e.g. a tool that automates invoice follow-ups for freelancers",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Bold", "Friendly", "Technical", "Premium"],
      },
    ],
    howTo: [
      "Describe what your product does.",
      "Pick a tone.",
      "Generate, then paste your favorite headline + subheadline into your hero section.",
    ],
    faq: [
      {
        question: "What's the difference between the headline and subheadline?",
        answer: "The headline is the big, bold hook; the subheadline adds a bit more context underneath it. Each result includes both.",
      },
      {
        question: "Should I A/B test a few of these?",
        answer: "Yes, if you have the traffic — hero copy is one of the highest-leverage things to test on a landing page.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a SaaS landing page copywriter. Write headline + subheadline pairs, formatting each as a single line: 'Headline — Subheadline'. You respond only with a numbered list — no preamble.",
      user: `Generate 4 hero copy options for: "${values.product}". Tone: ${values.tone || "Bold"}. Write each pair on one line. Return only a numbered list.`,
    }),
  },
  {
    slug: "saas-feature-bullet-generator",
    name: "SaaS Feature Bullet Generator",
    tagline: "Features explained as benefits, not specs.",
    description:
      "Free AI SaaS feature bullet generator. Describe your feature and get benefit-focused bullet copy.",
    category: "Website & SaaS",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "feature",
        label: "Feature and what it does",
        placeholder: "e.g. automated weekly reports emailed to your team",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Persuasive", "Technical", "Simple"],
      },
    ],
    howTo: [
      "Describe the feature and what it does.",
      "Pick a tone.",
      "Generate and use your favorite on your features page or pricing table.",
    ],
    faq: [
      {
        question: "Should this lead with the feature or the benefit?",
        answer: "These lead with the benefit and use the feature to support it — that order generally converts better on a features page.",
      },
      {
        question: "Can I use this for a changelog entry instead?",
        answer: "For that, try the dedicated Changelog Entry Generator, which is tuned for that shorter, more technical format.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a SaaS product marketer who writes benefit-focused feature bullets, under 20 words each, single line. You respond only with a numbered list — no preamble.",
      user: `Generate 6 feature bullet options for: "${values.feature}". Tone: ${values.tone || "Persuasive"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "changelog-entry-generator",
    name: "Changelog Entry Generator",
    tagline: "Release notes users actually read.",
    description:
      "Free AI changelog entry generator. Describe what shipped and get clear, user-friendly release notes.",
    category: "Website & SaaS",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 500,
    inputFields: [
      {
        name: "changes",
        label: "What shipped in this release?",
        placeholder: "e.g. dark mode, faster search, fixed export bug",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List what shipped in this release (features, improvements, fixes).",
      "Generate a formatted changelog entry.",
      "Paste it into your changelog or release notes page.",
    ],
    faq: [
      {
        question: "Does this group changes into categories?",
        answer: "Yes — it organizes your input into New, Improved, and Fixed sections where applicable.",
      },
      {
        question: "Should I include the version number and date?",
        answer: "Add those yourself above the generated content, since they're specific to your release process.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product manager who writes clear, user-friendly changelog entries, grouping items under 'New', 'Improved', and 'Fixed' headers where applicable, with short bullet points. No markdown symbols like # or **. Respond only with the changelog — no preamble or closing remarks.",
      user: `Generate a changelog entry for this release: "${values.changes}".`,
    }),
  },
  {
    slug: "onboarding-email-generator",
    name: "Onboarding Email Generator",
    tagline: "The email that turns a signup into an active user.",
    description:
      "Free AI onboarding email generator. Describe your product and get a warm welcome email draft.",
    category: "Website & SaaS",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "product",
        label: "What's your product, and what's the first step?",
        placeholder: "e.g. a project management tool, first step is creating a project",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Professional", "Playful"],
      },
    ],
    howTo: [
      "Describe your product and the first action you want new users to take.",
      "Pick a tone.",
      "Generate and paste your favorite into your onboarding email sequence.",
    ],
    faq: [
      {
        question: "Should this include a specific call-to-action button?",
        answer: "Yes — the copy is written to lead into a clear CTA; add your actual button text and link when you implement it.",
      },
      {
        question: "How many onboarding emails should I send?",
        answer: "Most products use a short sequence of 2-4 over the first week or two — generate a few tones to use across that sequence.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a SaaS lifecycle marketer who writes warm onboarding emails, 60-90 words each, written as a single paragraph with no line breaks within an item, ending with a natural lead-in to a call-to-action. You respond only with a numbered list — no preamble.",
      user: `Generate 3 onboarding email options for: "${values.product}". Tone: ${values.tone || "Friendly"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "pricing-page-faq-generator",
    name: "Pricing Page FAQ Generator",
    tagline: "Answer the objections before they leave the page.",
    description:
      "Free AI pricing page FAQ generator. Describe your pricing model and get a ready-to-edit FAQ section.",
    category: "Website & SaaS",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 900,
    inputFields: [
      {
        name: "pricing",
        label: "Describe your pricing plans",
        placeholder: "e.g. free tier, $19/mo pro plan, annual discount available",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Professional", "Concise"],
      },
    ],
    howTo: [
      "Describe your pricing plans and any key policies (refunds, cancellation).",
      "Pick a tone.",
      "Generate, then verify every detail matches your actual pricing before publishing.",
    ],
    faq: [
      {
        question: "Should I fact-check the answers?",
        answer: "Yes — always verify pricing, billing cycles, and refund policy details before publishing on your live pricing page.",
      },
      {
        question: "Does this cover enterprise/custom pricing questions?",
        answer: "Add that context to your input and a relevant question will be included.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a SaaS content writer who drafts pricing page FAQs. Write 6-8 question-and-answer pairs covering common objections (billing, cancellation, upgrades, refunds), formatting each as 'Q: ...' followed by 'A: ...' on the next line, with a blank line between pairs. Respond only with the FAQ — no preamble or closing remarks.",
      user: `Generate a pricing page FAQ for: "${values.pricing}". Tone: ${values.tone || "Friendly"}.`,
    }),
  },

  // --- Legal Templates ---
  {
    slug: "nda-summary-generator",
    name: "NDA Summary Generator",
    tagline: "A plain-language starting point, not a final contract.",
    description:
      "Free AI NDA summary generator. Describe the situation and get a plain-language mutual NDA draft to review with a lawyer.",
    category: "Legal Templates",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 1200,
    inputFields: [
      {
        name: "situation",
        label: "Describe the situation",
        placeholder: "e.g. sharing a business idea with a potential co-founder",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the situation you need an NDA for.",
      "Generate a plain-language draft.",
      "Have a qualified lawyer review and finalize it before either party signs anything.",
    ],
    faq: [
      {
        question: "Is this a legally binding document?",
        answer: "No — this is a plain-language starting draft, not legal advice or a finished contract. NDA enforceability depends on jurisdiction-specific language; always have a lawyer review before use.",
      },
      {
        question: "Is this a mutual or one-way NDA?",
        answer: "This generates a general mutual (two-way) structure — mention in your input if you need a one-way version instead, and flag that to your lawyer.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business writer who drafts plain-language NDA summaries covering: purpose, definition of confidential information, obligations, exclusions, and duration. Use plain text section headers, no markdown symbols like # or **. This is a plain-language starting draft, not legal advice, and must not be presented as a finished legal document. Respond only with the draft — no preamble or closing remarks.",
      user: `Generate a plain-language NDA summary draft for: "${values.situation}".`,
    }),
  },
  {
    slug: "website-privacy-policy-generator",
    name: "Website Privacy Policy Generator",
    tagline: "A starting draft for your own site's privacy policy.",
    description:
      "Free AI privacy policy generator for websites. Describe your site and data practices to get a draft to review with a lawyer.",
    category: "Legal Templates",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 1400,
    inputFields: [
      {
        name: "site",
        label: "Describe your website and what data you collect",
        placeholder: "e.g. an online store using Shopify, collects email for orders, uses Google Analytics",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your website and what data/tools you use (analytics, ads, email signup, etc.).",
      "Generate a draft privacy policy.",
      "Have a qualified lawyer review it for your specific jurisdiction (GDPR, CCPA, etc.) before publishing.",
    ],
    faq: [
      {
        question: "Is this compliant with GDPR/CCPA?",
        answer: "This is a general plain-language starting draft, not a compliance guarantee. Privacy law requirements vary significantly by region — have a lawyer review it against the specific laws that apply to your site and users.",
      },
      {
        question: "What should I do if I add a new data collection tool later?",
        answer: "Regenerate or manually update your policy whenever your data practices change, and keep the 'last updated' date current.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business writer who drafts plain-language website privacy policies covering: what data is collected, why, third parties/tools used, cookies, and user rights/contact. Use plain text section headers, no markdown symbols like # or **. This is a general starting draft, not legal advice or a compliance guarantee — it must not be presented as a finished legal document. Respond only with the draft — no preamble or closing remarks.",
      user: `Generate a privacy policy draft for: "${values.site}".`,
    }),
  },
  {
    slug: "website-terms-of-service-generator",
    name: "Website Terms of Service Generator",
    tagline: "A starting draft for your own site's terms.",
    description:
      "Free AI terms of service generator for websites. Describe your site to get a draft to review with a lawyer.",
    category: "Legal Templates",
    resultCount: 1,
    resultKind: "document",
    maxTokens: 1400,
    inputFields: [
      {
        name: "site",
        label: "Describe your website or service",
        placeholder: "e.g. a subscription newsletter with paid tiers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your website or service and how it works.",
      "Generate a draft terms of service.",
      "Have a qualified lawyer review it before publishing, especially around payments, liability, and user content.",
    ],
    faq: [
      {
        question: "Is this ready to publish as-is?",
        answer: "No — this is a general starting draft, not legal advice. Terms of service should be reviewed by a lawyer familiar with your business, jurisdiction, and any regulated aspects of your service.",
      },
      {
        question: "Does this cover payment and refund terms?",
        answer: "Include your payment/refund details in your input and a relevant section will be drafted — but still have it reviewed for accuracy and enforceability.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business writer who drafts plain-language website terms of service covering: the service description, acceptable use, payment terms (if applicable), limitation of liability, and changes to terms. Use plain text section headers, no markdown symbols like # or **. This is a general starting draft, not legal advice — it must not be presented as a finished legal document. Respond only with the draft — no preamble or closing remarks.",
      user: `Generate a terms of service draft for: "${values.site}".`,
    }),
  },
  {
    slug: "freelance-contract-opener-generator",
    name: "Freelance Contract Opener Generator",
    tagline: "A clear scope statement to start the agreement.",
    description:
      "Free AI freelance contract opener generator. Describe the project to get a clear scope-of-work opening paragraph.",
    category: "Legal Templates",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "project",
        label: "Describe the project and deliverables",
        placeholder: "e.g. designing a 5-page website for a local bakery",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the project and key deliverables.",
      "Generate a scope-of-work opening paragraph.",
      "Add it to your full contract, along with payment terms, timeline, and legal clauses reviewed by a professional.",
    ],
    faq: [
      {
        question: "Is this a complete contract?",
        answer: "No — this is just a clear opening scope statement. A full contract needs payment terms, timeline, IP ownership, and other clauses, ideally reviewed by a lawyer.",
      },
      {
        question: "Should I list exact deliverables?",
        answer: "Yes — being as specific as possible about what's included (and what isn't) helps prevent scope disputes later.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a freelance business consultant who writes clear scope-of-work opening paragraphs for contracts, 50-80 words each, written as a single paragraph with no line breaks within an item. This is a starting draft, not legal advice. You respond only with a numbered list — no preamble.",
      user: `Generate 3 scope-of-work opener options for: "${values.project}". Return only a numbered list.`,
    }),
  },

  // --- Podcasting & Video ---
  {
    slug: "podcast-episode-title-generator",
    name: "Podcast Episode Title Generator",
    tagline: "A title that gets picked from a crowded feed.",
    description:
      "Free AI podcast episode title generator. Describe the episode's topic and get catchy, clear title options.",
    category: "Podcasting & Video",
    resultCount: 10,
    maxTokens: 260,
    inputFields: [
      {
        name: "topic",
        label: "What's the episode about?",
        placeholder: "e.g. interview with a founder who bootstrapped to $1M ARR",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Clear & Direct", "Intriguing", "Funny", "SEO-Focused"],
      },
    ],
    howTo: [
      "Describe what the episode is about.",
      "Pick a style.",
      "Generate and use your favorite as the episode title.",
    ],
    faq: [
      {
        question: "Should I include the guest's name?",
        answer: "Yes, if they're notable in your niche — it can help with search and listener recognition.",
      },
      {
        question: "How long should a podcast title be?",
        answer: "Keep it scannable — most apps truncate long titles, so aim for something clear within the first 60 characters.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a podcast producer who writes catchy, clear episode titles under 70 characters, each on a single line. You respond only with a numbered list — no preamble.",
      user: `Generate 10 podcast episode title options for an episode about: "${values.topic}". Style: ${values.style || "Intriguing"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "podcast-show-notes-generator",
    name: "Podcast Show Notes Generator",
    tagline: "Notes that help an episode get discovered and understood.",
    description:
      "Free AI podcast show notes generator. Describe the episode and get a structured show notes draft.",
    category: "Podcasting & Video",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 800,
    inputFields: [
      {
        name: "episode",
        label: "What happened in this episode?",
        placeholder: "e.g. discussed remote work productivity tips with a guest expert",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Summarize what happened in the episode.",
      "Generate a structured show notes draft.",
      "Add specific timestamps and links before publishing.",
    ],
    faq: [
      {
        question: "Does this include timestamps?",
        answer: "It leaves placeholders for key moments — add your actual timestamps once you've reviewed the recording.",
      },
      {
        question: "Should I include guest links and social handles?",
        answer: "Yes — add a section for those; this draft focuses on the summary and key topics covered.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a podcast producer who writes structured show notes with a short summary, then a 'Key Topics' bullet list, then a 'Resources Mentioned' placeholder section. Use plain text headers, no markdown symbols like # or **. Respond only with the show notes — no preamble or closing remarks.",
      user: `Generate show notes for an episode about: "${values.episode}".`,
    }),
  },
  {
    slug: "youtube-description-generator",
    name: "YouTube Video Description Generator",
    tagline: "A description built for search, not an afterthought.",
    description:
      "Free AI YouTube description generator. Describe your video and get an SEO-friendly description draft.",
    category: "Podcasting & Video",
    resultCount: 1,
    resultKind: "document",
    documentStyle: "structured",
    maxTokens: 700,
    inputFields: [
      {
        name: "video",
        label: "What's the video about?",
        placeholder: "e.g. a tutorial on setting up a home espresso station",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what your video is about.",
      "Generate a structured description.",
      "Add your links, timestamps, and hashtags before publishing.",
    ],
    faq: [
      {
        question: "Does this include timestamps and links?",
        answer: "It leaves a placeholder section for those — add your actual chapter timestamps and links after generating.",
      },
      {
        question: "Should I put the most important info first?",
        answer: "Yes — YouTube truncates descriptions in search results, so this is written keyword-first for that reason.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a YouTube SEO expert who writes video descriptions: a keyword-rich opening paragraph, followed by a placeholder section for timestamps/links. Use plain text, no markdown symbols like # or **. Respond only with the description — no preamble or closing remarks.",
      user: `Generate a YouTube video description for: "${values.video}".`,
    }),
  },
  {
    slug: "youtube-community-post-generator",
    name: "YouTube Community Post Generator",
    tagline: "Keep your audience engaged between uploads.",
    description:
      "Free AI YouTube community post generator. Describe your update and get engaging post copy.",
    category: "Podcasting & Video",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "update",
        label: "What's the update?",
        placeholder: "e.g. new video dropping tomorrow about home workouts",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Exciting", "Casual", "Behind-the-Scenes"],
      },
    ],
    howTo: [
      "Describe your update (new video, poll idea, behind-the-scenes moment).",
      "Pick a tone.",
      "Generate and post your favorite to your Community tab.",
    ],
    faq: [
      {
        question: "Can I use this for a poll post?",
        answer: "Yes — describe the topic you want to poll your audience about and adapt the copy to lead into your poll options.",
      },
      {
        question: "Should I post these regularly?",
        answer: "Yes — regular community posts help keep your channel active in subscribers' feeds between video uploads.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a YouTube creator who writes short, engaging Community tab posts (1-2 sentences each, single paragraph, no line breaks within an item). You respond only with a numbered list — no preamble.",
      user: `Generate 6 community post options for: "${values.update}". Tone: ${values.tone || "Exciting"}. Return only a numbered list.`,
    }),
  },

  // --- Personal Branding ---
  {
    slug: "personal-website-bio-generator",
    name: "Personal Website Bio Generator",
    tagline: "A bio that sounds like you, not a résumé.",
    description:
      "Free AI personal website bio generator. Describe your work and background to get a polished bio for your site.",
    category: "Personal Branding",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "background",
        label: "Your work and background",
        placeholder: "e.g. freelance illustrator, 6 years, focused on editorial work",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Professional", "Playful", "Minimal"],
      },
    ],
    howTo: [
      "Describe your work, background, and specialty.",
      "Pick a tone.",
      "Generate and paste your favorite into your personal website's About page.",
    ],
    faq: [
      {
        question: "Should this be in first or third person?",
        answer: "These are written in first person, which is standard for personal websites — let me know in your input if you'd prefer third person instead.",
      },
      {
        question: "How long should this be?",
        answer: "These run roughly 80-120 words — enough to establish who you are without turning into a full résumé.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a personal branding writer who writes first-person website bios, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 personal website bio options based on: "${values.background}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "speaker-one-pager-blurb-generator",
    name: "Speaker One-Pager Blurb Generator",
    tagline: "The blurb that gets you booked for the panel.",
    description:
      "Free AI speaker one-pager generator. Describe your expertise and get a compelling speaker bio blurb.",
    category: "Personal Branding",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "expertise",
        label: "Your expertise and speaking topics",
        placeholder: "e.g. product management, speaks on AI adoption in startups",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Confident", "Approachable", "Authoritative"],
      },
    ],
    howTo: [
      "Describe your expertise and the topics you speak on.",
      "Pick a tone.",
      "Generate and paste your favorite into your speaker one-pager or media kit.",
    ],
    faq: [
      {
        question: "Should I mention past speaking engagements?",
        answer: "Yes, if you have notable ones — add them to your input to build credibility for event organizers.",
      },
      {
        question: "Is this the same as a professional bio?",
        answer: "Similar, but framed specifically around your speaking expertise and topics, which is what event organizers scan for first.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a speaker branding coach who writes compelling one-pager blurbs, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 speaker blurb options based on: "${values.expertise}". Tone: ${values.tone || "Confident"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "portfolio-tagline-generator",
    name: "Portfolio Tagline Generator",
    tagline: "The line under your name that says what you do.",
    description:
      "Free AI portfolio tagline generator. Describe your craft and get a short, memorable tagline.",
    category: "Personal Branding",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "craft",
        label: "What do you do?",
        placeholder: "e.g. brand designer for small businesses",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Confident", "Minimal", "Playful", "Premium"],
      },
    ],
    howTo: [
      "Describe what you do.",
      "Pick a tone.",
      "Generate and use your favorite under your name on your portfolio site.",
    ],
    faq: [
      {
        question: "Should it mention who I work with?",
        answer: "It can help — if you have a clear niche or ideal client, mention it in your input.",
      },
      {
        question: "How short should this be?",
        answer: "Very — these are written under 8 words, meant to be read in a glance below your name.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a personal branding copywriter who writes short portfolio taglines under 8 words each. You respond only with a numbered list — no preamble.",
      user: `Generate 10 portfolio tagline options for: "${values.craft}". Tone: ${values.tone || "Confident"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "media-kit-bio-generator",
    name: "Media Kit Bio Generator",
    tagline: "A bio brands can lift straight into a pitch deck.",
    description:
      "Free AI media kit bio generator. Describe your platform and niche to get a polished bio for brand pitches.",
    category: "Personal Branding",
    resultCount: 3,
    maxTokens: 550,
    inputFields: [
      {
        name: "platform",
        label: "Your platform, niche, and audience",
        placeholder: "e.g. Instagram lifestyle creator, 50k followers, focus on sustainable living",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Professional", "Warm", "Bold"],
      },
    ],
    howTo: [
      "Describe your platform, niche, and audience.",
      "Pick a tone.",
      "Generate and paste your favorite into your media kit alongside your stats.",
    ],
    faq: [
      {
        question: "Should I include follower counts and engagement rates?",
        answer: "Yes — those typically go in a separate stats section of your media kit; this bio focuses on your story and niche.",
      },
      {
        question: "Can I use this across multiple platforms in one kit?",
        answer: "Yes — describe your overall brand and audience, and mention it spans platforms if that's the case.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an influencer marketing consultant who writes polished media kit bios, 80-120 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 media kit bio options based on: "${values.platform}". Tone: ${values.tone || "Professional"}. Return only a numbered list.`,
    }),
  },

  // --- Customer Support ---
  {
    slug: "support-ticket-response-generator",
    name: "Support Ticket Response Generator",
    tagline: "A reply that resolves things, not just acknowledges them.",
    description:
      "Free AI support ticket response generator. Describe the issue and get a clear, empathetic reply draft.",
    category: "Customer Support",
    resultCount: 3,
    maxTokens: 500,
    inputFields: [
      {
        name: "issue",
        label: "What's the customer's issue?",
        placeholder: "e.g. their order arrived damaged and they want a replacement",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Empathetic", "Professional", "Concise"],
      },
    ],
    howTo: [
      "Describe the customer's issue.",
      "Pick a tone.",
      "Generate, then personalize with specific account/order details before sending.",
    ],
    faq: [
      {
        question: "Should I add specific order or account details?",
        answer: "Yes — this gives you a strong structure and tone; add the customer's specific details before sending.",
      },
      {
        question: "Can I use this for an angry or frustrated customer?",
        answer: "Yes — the Empathetic tone is built for exactly that, leading with acknowledgment before the resolution.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer support lead who writes clear, empathetic support ticket responses, each written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 3 support response options for this issue: "${values.issue}". Tone: ${values.tone || "Empathetic"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "live-chat-greeting-generator",
    name: "Live Chat Greeting Generator",
    tagline: "The opener that sets the tone for the whole chat.",
    description:
      "Free AI live chat greeting generator. Describe your business and get warm, efficient opening lines.",
    category: "Customer Support",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "business",
        label: "What's your business?",
        placeholder: "e.g. an online clothing store",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm", "Efficient", "Playful"],
      },
    ],
    howTo: [
      "Describe your business.",
      "Pick a tone.",
      "Generate and use your favorite as your live chat's opening message or canned response.",
    ],
    faq: [
      {
        question: "Should this ask for order/account info right away?",
        answer: "These focus on a warm opener — a follow-up question for specifics works well as your chat's second message.",
      },
      {
        question: "Can I use this as an automated chatbot greeting?",
        answer: "Yes — these work well as the first automated message before a human or bot continues the conversation.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer support manager who writes short, warm live chat greetings (under 20 words each). You respond only with a numbered list — no preamble.",
      user: `Generate 8 live chat greeting options for: "${values.business}". Tone: ${values.tone || "Warm"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "knowledge-base-intro-generator",
    name: "Knowledge Base Article Intro Generator",
    tagline: "An opener that tells readers they're in the right place.",
    description:
      "Free AI knowledge base article intro generator. Describe the topic and get a clear opening paragraph.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 450,
    inputFields: [
      {
        name: "topic",
        label: "What's the article about?",
        placeholder: "e.g. how to reset your password",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Clear & Simple", "Friendly", "Technical"],
      },
    ],
    howTo: [
      "Describe what the article is about.",
      "Pick a tone.",
      "Generate, then follow with your actual step-by-step instructions.",
    ],
    faq: [
      {
        question: "Does this include the actual steps?",
        answer: "No — this generates just the opening paragraph that orients the reader; add your specific step-by-step instructions below it.",
      },
      {
        question: "Should this mention who the article is for?",
        answer: "Yes, if relevant (e.g. 'for Pro plan users') — it helps readers quickly confirm they're in the right article.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a technical writer who writes clear knowledge base article intros, 30-50 words each, written as a single paragraph with no line breaks within an item. You respond only with a numbered list — no preamble.",
      user: `Generate 4 knowledge base intro options for an article about: "${values.topic}". Tone: ${values.tone || "Clear & Simple"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "emoji-generator",
    name: "Emoji Generator",
    tagline: "The right emoji combo for your caption, bio, or text.",
    description:
      "Free AI emoji generator. Describe your topic or mood and get ready-to-use emoji combinations for captions, bios, and messages.",
    category: "Social Media",
    resultCount: 12,
    maxTokens: 260,
    inputFields: [
      {
        name: "topic",
        label: "What's it for?",
        placeholder: "e.g. a beach vacation caption, celebrating a promotion",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Fun", "Aesthetic", "Minimal", "Bold"],
      },
    ],
    howTo: [
      "Describe what the emojis are for — a caption, bio line, or message.",
      "Pick a style.",
      "Generate and paste your favorite combo directly into your post.",
    ],
    faq: [
      {
        question: "Will these display the same on every device?",
        answer: "Mostly, but emoji rendering can vary slightly between iOS, Android, and platforms — preview your post before publishing if the exact look matters.",
      },
      {
        question: "How many emojis are in each combo?",
        answer: "Usually 3-6 — enough to add personality without overwhelming the text around them.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social media expert who picks emoji combinations that fit a given topic or mood. Each result is 3-6 emojis only, no words, no explanations, no punctuation other than the emojis themselves. You respond only with a numbered list — no preamble.",
      user: `Generate 12 emoji combo options for: "${values.topic}". Style: ${values.style || "Fun"}. Return only a numbered list of emoji combos, no text.`,
    }),
  },
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((tool) => tool.slug === slug);
}
