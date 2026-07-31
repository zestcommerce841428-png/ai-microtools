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
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((tool) => tool.slug === slug);
}
