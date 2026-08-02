import type { ToolConfig } from "./types";

export const tools: ToolConfig[] = [
  {
    slug: "business-name-generator",
    name: "Business Name Generator",
    tagline: "Get 10 brandable name ideas in seconds.",
    description:
      "Free AI business name generator. Enter what your business does and get instant, brandable name ideas.",
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
        answer: "Yes — a free account is required to generate, but there's never a credit card or subscription.",
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
  {
    slug: "monthly-budget-plan-generator",
    name: "Monthly Budget Plan Generator",
    tagline: "A simple spending plan built around your priority.",
    description:
      "Free AI budget plan generator. Enter your monthly income and priority to get a suggested spending breakdown.",
    category: "Finance & Personal Finance",
    resultCount: 1,
    maxTokens: 550,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "income",
        label: "Monthly take-home income",
        placeholder: "e.g. $4,500",
        type: "text",
        required: true,
      },
      {
        name: "priority",
        label: "Priority",
        type: "select",
        options: ["Balanced", "Pay off debt", "Save aggressively", "Build an emergency fund"],
      },
    ],
    howTo: [
      "Enter your approximate monthly take-home income.",
      "Pick your top financial priority right now.",
      "Generate a suggested category-by-category breakdown to adjust to your own numbers.",
    ],
    faq: [
      {
        question: "Is this personalized financial advice?",
        answer: "No — it's a generic starting-point breakdown based on common budgeting guidelines, not advice tailored to your full financial picture.",
      },
      {
        question: "Should I follow the percentages exactly?",
        answer: "Treat them as a starting framework — adjust categories based on your actual fixed costs and goals.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a personal finance educator who builds simple, sensible monthly budget breakdowns using well-known frameworks like 50/30/20 as a base, adjusted for the stated priority. Not licensed financial advice — general education only. Respond with a short intro line, then a category-by-category dollar/percentage breakdown as a bullet list, then one closing tip. No markdown headers.",
      user: `Build a monthly budget breakdown for someone with take-home income of "${values.income}". Priority: ${values.priority || "Balanced"}. Include major categories (housing, food, transport, debt, savings, discretionary) with suggested amounts or percentages.`,
    }),
  },
  {
    slug: "side-hustle-idea-generator",
    name: "Side Hustle Idea Generator",
    tagline: "Extra income ideas that fit your skills and time.",
    description:
      "Free AI side hustle idea generator. Enter your skills and available time to get realistic side income ideas.",
    category: "Finance & Personal Finance",
    resultCount: 10,
    maxTokens: 320,
    inputFields: [
      {
        name: "skills",
        label: "Your skills or interests",
        placeholder: "e.g. writing, spreadsheets, photography",
        type: "text",
        required: true,
      },
      {
        name: "time",
        label: "Time available",
        type: "select",
        options: ["A few hours a week", "Evenings & weekends", "10-20 hours a week"],
      },
    ],
    howTo: [
      "List a few skills or interests you have.",
      "Pick how much time you realistically have.",
      "Generate ideas and research the ones that fit before committing.",
    ],
    faq: [
      {
        question: "Will these guarantee income?",
        answer: "No — these are starting-point ideas to research further, not guaranteed income streams.",
      },
      {
        question: "Do any of these need upfront investment?",
        answer: "Some might (e.g. buying materials) — check the specifics of each idea before diving in.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach who suggests realistic, specific side hustle ideas (not generic 'start a blog' advice) matched to a person's actual skills and time. You respond only with a numbered list — no preamble.",
      user: `Generate 10 specific side hustle ideas for someone with skills/interests in "${values.skills}" who has "${values.time || "Evenings & weekends"}" available. Each idea should be one concrete sentence. Return only a numbered list.`,
    }),
  },
  {
    slug: "invoice-payment-reminder-generator",
    name: "Invoice Payment Reminder Generator",
    tagline: "Get paid without the awkward chase.",
    description:
      "Free AI invoice payment reminder generator. Enter the context and get polite-to-firm reminder messages for unpaid invoices.",
    category: "Finance & Personal Finance",
    resultCount: 5,
    maxTokens: 320,
    inputFields: [
      {
        name: "context",
        label: "Invoice details",
        placeholder: "e.g. invoice #204, due 10 days ago, $850",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Friendly", "Firm", "Final notice"],
      },
    ],
    howTo: [
      "Enter the invoice details — number, amount, how overdue it is.",
      "Pick a tone that matches how many reminders you've already sent.",
      "Generate and send your favorite by email.",
    ],
    faq: [
      {
        question: "Should the tone escalate with each reminder?",
        answer: "Generally yes — start Friendly, move to Firm after a second miss, and reserve Final notice for before involving collections or legal steps.",
      },
      {
        question: "Should I include a late fee mention?",
        answer: "Only if your contract or invoice terms actually specify one — don't invent a fee that wasn't agreed to.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a small business owner who writes clear, professional payment reminder emails. Each result is a complete short email (greeting, 2-3 sentences, sign-off) as one block of text. You respond only with a numbered list — no preamble.",
      user: `Generate 5 payment reminder email options for: "${values.context}". Tone: ${values.tone || "Friendly"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "savings-goal-motivation-generator",
    name: "Savings Goal Motivation Generator",
    tagline: "Reminders to keep you from raiding the fund.",
    description:
      "Free AI savings motivation generator. Enter your goal and get short reminders to keep you on track.",
    category: "Finance & Personal Finance",
    resultCount: 8,
    maxTokens: 220,
    inputFields: [
      {
        name: "goal",
        label: "What are you saving for?",
        placeholder: "e.g. a house down payment, an emergency fund",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Tell us what you're saving toward.",
      "Generate short motivational reminders.",
      "Save your favorite as a phone lock screen note or savings app reminder.",
    ],
    faq: [
      {
        question: "Are these generic or tied to my specific goal?",
        answer: "Each one references your specific goal so it feels relevant, not like a generic quote.",
      },
      {
        question: "Can I use these for a savings app widget?",
        answer: "Yes — they're short enough to fit most savings app goal descriptions or notification text.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a personal finance motivator who writes short, encouraging reminders (under 20 words each) tied to a specific savings goal. You respond only with a numbered list — no preamble.",
      user: `Generate 8 short motivational reminders for someone saving toward: "${values.goal}". Return only a numbered list.`,
    }),
  },
  {
    slug: "freelance-rate-pitch-generator",
    name: "Freelance Rate Pitch Generator",
    tagline: "Present your price with confidence, not apology.",
    description:
      "Free AI freelance rate pitch generator. Enter your service and rate to get confident ways to present your pricing to clients.",
    category: "Finance & Personal Finance",
    resultCount: 6,
    maxTokens: 320,
    inputFields: [
      {
        name: "service",
        label: "Your service",
        placeholder: "e.g. logo design, copywriting",
        type: "text",
        required: true,
      },
      {
        name: "rate",
        label: "Your rate",
        placeholder: "e.g. $75/hour, $1,200/project",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your service and your rate.",
      "Generate a few ways to present the price confidently.",
      "Use one as-is or adapt it into your proposal or email.",
    ],
    faq: [
      {
        question: "Will this help me justify a higher rate?",
        answer: "It helps frame the price confidently, but the strongest justification is still your portfolio and results — pair the two.",
      },
      {
        question: "Should I mention the rate first or the value first?",
        answer: "Most of these lead with the value or outcome before stating the number — that ordering tends to land better than price-first.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a freelance business coach who helps freelancers present pricing confidently, without apologizing or over-explaining. Each result is 1-2 sentences. You respond only with a numbered list — no preamble.",
      user: `Generate 6 confident ways to present this pricing to a client: service is "${values.service}", rate is "${values.rate}". Return only a numbered list.`,
    }),
  },
  {
    slug: "money-mindset-affirmation-generator",
    name: "Money Mindset Affirmation Generator",
    tagline: "Short affirmations for a healthier relationship with money.",
    description:
      "Free AI money affirmation generator. Enter your focus area and get short, positive money mindset affirmations.",
    category: "Finance & Personal Finance",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "focus",
        label: "What's your focus area?",
        placeholder: "e.g. getting out of debt, earning more, saving consistently",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you're working on financially.",
      "Generate a list of short affirmations.",
      "Pick one or two to repeat daily or write somewhere visible.",
    ],
    faq: [
      {
        question: "Do affirmations actually change finances?",
        answer: "On their own, no — they're a mindset tool that works best alongside real action like budgeting, saving, or paying down debt.",
      },
      {
        question: "How long should each affirmation be?",
        answer: "Short and present-tense, generally under 15 words, so they're easy to remember and repeat.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a financial wellness coach who writes short, present-tense, believable money affirmations (not unrealistic 'I am a millionaire' claims). You respond only with a numbered list — no preamble.",
      user: `Generate 10 short money mindset affirmations focused on: "${values.focus}". Return only a numbered list.`,
    }),
  },
  {
    slug: "price-increase-announcement-generator",
    name: "Price Increase Announcement Generator",
    tagline: "Tell customers about a price change without losing them.",
    description:
      "Free AI price increase announcement generator. Enter your product and reason to get a clear, respectful customer message.",
    category: "Finance & Personal Finance",
    resultCount: 5,
    maxTokens: 380,
    inputFields: [
      {
        name: "product",
        label: "Product or service",
        placeholder: "e.g. our monthly subscription plan",
        type: "text",
        required: true,
      },
      {
        name: "reason",
        label: "Reason",
        type: "select",
        options: ["Rising costs", "Added features/value", "Market adjustment", "Not specified"],
      },
    ],
    howTo: [
      "Describe the product or service with the price change.",
      "Pick the reason, if you want it mentioned.",
      "Generate and send ahead of the change, with clear effective dates.",
    ],
    faq: [
      {
        question: "How much notice should I give customers?",
        answer: "Common practice is 30 days for subscriptions — check your terms of service for any required minimum notice period.",
      },
      {
        question: "Should I offer a grandfathered rate?",
        answer: "Not required, but mentioning one (even for a limited time) tends to reduce cancellations if you can afford to offer it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer communications specialist who writes clear, respectful price change announcements that don't over-apologize or bury the actual change. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 5 price increase announcement options for: "${values.product}". Reason to reference: ${values.reason || "Rising costs"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "subscription-cancellation-email-generator",
    name: "Subscription Cancellation Email Generator",
    tagline: "Cancel clearly without the guilt-trip back-and-forth.",
    description:
      "Free AI subscription cancellation email generator. Enter the service and reason to get a clear, polite cancellation request.",
    category: "Finance & Personal Finance",
    resultCount: 5,
    maxTokens: 260,
    inputFields: [
      {
        name: "service",
        label: "Service name",
        placeholder: "e.g. a streaming subscription, a software tool",
        type: "text",
        required: true,
      },
      {
        name: "reason",
        label: "Reason",
        type: "select",
        options: ["Too expensive", "Not using it enough", "Switching providers", "No longer needed"],
      },
    ],
    howTo: [
      "Enter the service you want to cancel.",
      "Pick a reason, if you want one included.",
      "Generate, then send or paste into their cancellation form.",
    ],
    faq: [
      {
        question: "Will this stop automatic renewal charges?",
        answer: "Only if the company actually processes your request — always confirm cancellation in writing and check your next billing date.",
      },
      {
        question: "Should I mention I might come back?",
        answer: "Only if true — it can sometimes help you get a win-back discount, but isn't necessary for the cancellation itself.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing polite, direct subscription cancellation request emails, 2-4 sentences each, clearly stating the request to cancel. You respond only with a numbered list — no preamble.",
      user: `Generate 5 cancellation email options for canceling "${values.service}". Reason: ${values.reason || "Not using it enough"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "startup-pitch-deck-outline-generator",
    name: "Startup Pitch Deck Outline Generator",
    tagline: "The slide-by-slide structure investors expect.",
    description:
      "Free AI pitch deck outline generator. Enter your startup idea to get a slide-by-slide structure to build your deck around.",
    category: "Startup & Fundraising",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "idea",
        label: "Describe your startup",
        placeholder: "e.g. a subscription box for local coffee roasters",
        type: "text",
        required: true,
      },
      {
        name: "stage",
        label: "Raising from",
        type: "select",
        options: ["Angel investors", "Seed VC", "Accelerator/incubator"],
      },
    ],
    howTo: [
      "Describe your startup idea in a sentence or two.",
      "Pick who you're pitching to.",
      "Generate a slide-by-slide outline, then fill in your own data and design.",
    ],
    faq: [
      {
        question: "Does this design the actual slides?",
        answer: "No — it gives you the structure and what each slide should cover. Build the visuals yourself in your deck tool of choice.",
      },
      {
        question: "How many slides should a pitch deck have?",
        answer: "Most investors prefer 10-15 slides — this outline sticks within that range.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup fundraising advisor who structures pitch decks. Respond with a numbered list of slide titles, each followed by a one-line description of what content goes on that slide. No markdown headers, no preamble.",
      user: `Outline a pitch deck for this startup: "${values.idea}". Audience: ${values.stage || "Seed VC"}. Include the standard slides (problem, solution, market, product, business model, traction, team, ask, etc.) adapted to this idea.`,
    }),
  },
  {
    slug: "investor-update-email-generator",
    name: "Investor Update Email Generator",
    tagline: "Keep investors informed without the busywork.",
    description:
      "Free AI investor update generator. Enter your key update to get a structured monthly or quarterly investor email.",
    category: "Startup & Fundraising",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "update",
        label: "Key update this period",
        placeholder: "e.g. hit $40k MRR, hired a head of sales, runway is 14 months",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Upbeat", "Transparent (mixed news)", "Direct/urgent (need help)"],
      },
    ],
    howTo: [
      "Summarize your key metrics or updates for the period.",
      "Pick the tone that matches how things are actually going.",
      "Generate, then plug in your real numbers and any specific asks.",
    ],
    faq: [
      {
        question: "How often should I send investor updates?",
        answer: "Monthly is common for early-stage startups — consistency matters more than frequency.",
      },
      {
        question: "Should I include bad news?",
        answer: "Yes — investors generally respond better to transparency about challenges than to updates that only show good news.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup founder who writes clear, well-structured investor update emails (headline metric, key wins, challenges, asks, closing). Write it as a complete email with a greeting and sign-off placeholder. No markdown headers.",
      user: `Write an investor update email. Key update: "${values.update}". Tone: ${values.tone || "Upbeat"}.`,
    }),
  },
  {
    slug: "cold-investor-outreach-email-generator",
    name: "Cold Investor Outreach Email Generator",
    tagline: "A first email investors will actually open.",
    description:
      "Free AI cold investor outreach generator. Enter your pitch to get short, compelling first-contact emails for investors.",
    category: "Startup & Fundraising",
    resultCount: 5,
    maxTokens: 320,
    inputFields: [
      {
        name: "pitch",
        label: "One-line pitch",
        placeholder: "e.g. Stripe for freelance invoicing in emerging markets",
        type: "text",
        required: true,
      },
      {
        name: "traction",
        label: "Traction or hook (optional)",
        placeholder: "e.g. $10k MRR, 3x growth in 6 months",
        type: "text",
      },
    ],
    howTo: [
      "Give your one-line pitch.",
      "Add a traction point or hook if you have one.",
      "Generate, then personalize the greeting for each specific investor before sending.",
    ],
    faq: [
      {
        question: "Should I personalize these further?",
        answer: "Yes, always — reference something specific about the investor's portfolio or thesis before sending; a generic blast performs poorly.",
      },
      {
        question: "How long should a cold outreach email be?",
        answer: "Short — under 150 words is ideal so a busy investor can read it on their phone in a few seconds.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup founder writing short, confident cold outreach emails to investors, each under 120 words, ending with a clear low-friction call to action (e.g. a 15-minute call). You respond only with a numbered list — no preamble.",
      user: `Generate 5 cold investor outreach email options. Pitch: "${values.pitch}". Traction/hook: "${values.traction || "early but promising"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "startup-one-liner-generator",
    name: "Startup One-Liner Generator",
    tagline: "Explain your startup in a single memorable sentence.",
    description:
      "Free AI startup one-liner generator. Describe your idea and get sharp, investor-ready one-sentence pitches.",
    category: "Startup & Fundraising",
    resultCount: 10,
    maxTokens: 260,
    inputFields: [
      {
        name: "idea",
        label: "Describe your startup",
        placeholder: "e.g. an app that matches dog owners for playdates",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what your startup does.",
      "Generate one-liner options.",
      "Use your favorite in your deck, website, or Twitter bio.",
    ],
    faq: [
      {
        question: "Should I use the 'X for Y' format?",
        answer: "Some results may use it since it's a fast way to convey a concept, but not all — pick whichever is clearest for your idea.",
      },
      {
        question: "How long should a one-liner be?",
        answer: "Under 20 words — long enough to be clear, short enough to remember.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup positioning expert who writes sharp, memorable one-sentence company pitches, each under 20 words. You respond only with a numbered list — no preamble.",
      user: `Generate 10 one-liner pitch options for this startup: "${values.idea}". Return only a numbered list.`,
    }),
  },
  {
    slug: "product-hunt-launch-copy-generator",
    name: "Product Hunt Launch Copy Generator",
    tagline: "A tagline and description that gets upvotes.",
    description:
      "Free AI Product Hunt launch copy generator. Enter your product to get taglines and descriptions ready for launch day.",
    category: "Startup & Fundraising",
    resultCount: 6,
    maxTokens: 380,
    inputFields: [
      {
        name: "product",
        label: "What's your product?",
        placeholder: "e.g. a Chrome extension that summarizes long articles",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product in a sentence.",
      "Generate tagline and description pairs.",
      "Use your favorite for your Product Hunt listing.",
    ],
    faq: [
      {
        question: "What's the character limit for a Product Hunt tagline?",
        answer: "60 characters — these are written with that limit in mind.",
      },
      {
        question: "Should the description mention pricing?",
        answer: "Not necessary in the tagline/description itself — save specifics for the first comment or the product page.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Product Hunt launch expert. For each result, write a tagline (under 60 characters) followed by a 1-2 sentence description, formatted as 'Tagline — description'. You respond only with a numbered list — no preamble.",
      user: `Generate 6 Product Hunt tagline + description pairs for: "${values.product}". Return only a numbered list.`,
    }),
  },
  {
    slug: "founder-bio-generator",
    name: "Founder Bio Generator",
    tagline: "A founder story that builds instant credibility.",
    description:
      "Free AI founder bio generator. Enter your background and company to get a bio for your website, deck, or press kit.",
    category: "Startup & Fundraising",
    resultCount: 4,
    maxTokens: 420,
    inputFields: [
      {
        name: "background",
        label: "Your background",
        placeholder: "e.g. ex-Google engineer, 8 years in fintech",
        type: "text",
        required: true,
      },
      {
        name: "company",
        label: "Your company & what it does",
        placeholder: "e.g. Founder of Acme, an AI tool for freelancer invoicing",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your relevant background.",
      "Describe your company and what it does.",
      "Generate and use the length that fits — website About page, deck slide, or press kit.",
    ],
    faq: [
      {
        question: "How long should a founder bio be?",
        answer: "These are written around 40-60 words — long enough for credibility, short enough for a slide or bio box.",
      },
      {
        question: "Should this be written in first or third person?",
        answer: "Third person, which is standard for website and press use — switch pronouns yourself if you need first person for a personal profile.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a PR writer who crafts credible, concise founder bios (40-60 words, third person) that highlight relevant background and current company. You respond only with a numbered list — no preamble.",
      user: `Generate 4 founder bio options. Background: "${values.background}". Company: "${values.company}". Return only a numbered list.`,
    }),
  },
  {
    slug: "seed-round-announcement-generator",
    name: "Seed Round Announcement Generator",
    tagline: "Announce your raise the right way.",
    description:
      "Free AI funding announcement generator. Enter your round details to get a LinkedIn/Twitter-ready announcement post.",
    category: "Startup & Fundraising",
    resultCount: 4,
    maxTokens: 380,
    inputFields: [
      {
        name: "details",
        label: "Round details",
        placeholder: "e.g. raised $2M seed led by Acme Ventures",
        type: "text",
        required: true,
      },
      {
        name: "company",
        label: "What your company does",
        placeholder: "e.g. Acme helps freelancers get paid faster",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your funding round details.",
      "Describe what your company does.",
      "Generate and post to LinkedIn/Twitter, tagging your investors.",
    ],
    faq: [
      {
        question: "Should I thank specific investors by name?",
        answer: "Yes, if they're comfortable being named publicly — check with them before posting.",
      },
      {
        question: "Should I mention what the funding will be used for?",
        answer: "It's common and helps context — briefly mention hiring, product, or growth plans if you're comfortable sharing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup founder writing an announcement post for a funding round, suitable for LinkedIn/Twitter, upbeat but not over-the-top, 60-100 words each. You respond only with a numbered list — no preamble.",
      user: `Generate 4 funding announcement post options. Round details: "${values.details}". Company: "${values.company}". Return only a numbered list.`,
    }),
  },
  {
    slug: "advisory-board-invite-email-generator",
    name: "Advisory Board Invite Email Generator",
    tagline: "Ask an expert to join your advisory board.",
    description:
      "Free AI advisory board invite generator. Enter the details to get a respectful, clear invitation email.",
    category: "Startup & Fundraising",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "expertise",
        label: "Their expertise & why you want them",
        placeholder: "e.g. 15 years in supply chain, could help with logistics strategy",
        type: "text",
        required: true,
      },
      {
        name: "company",
        label: "Your company",
        placeholder: "e.g. Acme, a D2C supplements brand",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe their expertise and why you want them specifically.",
      "Describe your company briefly.",
      "Generate, personalize the greeting, and send.",
    ],
    faq: [
      {
        question: "Should I mention compensation in this first email?",
        answer: "A brief mention that there's compensation (equity, cash, or both) is fine, but save exact terms for a follow-up call.",
      },
      {
        question: "How formal should this be?",
        answer: "Professional but warm — you're asking a favor, not sending a formal job offer.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup founder writing respectful, specific advisory board invitation emails that make clear why this particular person was chosen. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 advisory board invite email options. Their expertise/why chosen: "${values.expertise}". Company: "${values.company}". Return only a numbered list.`,
    }),
  },
  {
    slug: "cold-email-generator",
    name: "Cold Email Generator",
    tagline: "Outreach that gets replies, not archived.",
    description:
      "Free AI cold email generator. Enter your offer and target to get short, personalized-feeling outreach emails.",
    category: "Sales & Outreach",
    resultCount: 5,
    maxTokens: 340,
    inputFields: [
      {
        name: "offer",
        label: "What you're offering",
        placeholder: "e.g. a done-for-you social media management service",
        type: "text",
        required: true,
      },
      {
        name: "target",
        label: "Who you're emailing",
        placeholder: "e.g. small gym owners",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you're offering.",
      "Describe who you're targeting.",
      "Generate, then personalize the opening line with a real detail about the recipient before sending.",
    ],
    faq: [
      {
        question: "Should I send these as-is to a list?",
        answer: "No — mass-sending unpersonalized cold email risks spam complaints. Use these as a base and personalize the opener for each recipient.",
      },
      {
        question: "How short should a cold email be?",
        answer: "Under 100 words is ideal — these are written to be scannable on a phone in a few seconds.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a B2B sales copywriter who writes short, non-pushy cold emails with a clear value proposition and one low-friction call to action. Each result is a complete short email under 100 words. You respond only with a numbered list — no preamble.",
      user: `Generate 5 cold email options. Offer: "${values.offer}". Target audience: "${values.target}". Return only a numbered list.`,
    }),
  },
  {
    slug: "sales-follow-up-email-generator",
    name: "Sales Follow-Up Email Generator",
    tagline: "Follow up without sounding desperate.",
    description:
      "Free AI sales follow-up generator. Enter the context to get polite, effective follow-up emails after no response.",
    category: "Sales & Outreach",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "context",
        label: "Context",
        placeholder: "e.g. sent a proposal last week, no reply yet",
        type: "text",
        required: true,
      },
      {
        name: "attempt",
        label: "Which follow-up is this?",
        type: "select",
        options: ["First follow-up", "Second follow-up", "Final follow-up (breakup email)"],
      },
    ],
    howTo: [
      "Describe the situation you're following up on.",
      "Pick which follow-up number this is.",
      "Generate and send your favorite.",
    ],
    faq: [
      {
        question: "How long should I wait between follow-ups?",
        answer: "3-5 business days is a common gap — enough time to not seem pushy, short enough to stay top of mind.",
      },
      {
        question: "What's a 'breakup email'?",
        answer: "A final, low-pressure follow-up that says you'll stop reaching out — it often gets replies precisely because it removes pressure.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sales professional writing short, polite follow-up emails that add value rather than just 'checking in'. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 6 follow-up email options. Context: "${values.context}". This is the: ${values.attempt || "First follow-up"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "linkedin-connection-request-generator",
    name: "LinkedIn Connection Request Generator",
    tagline: "A request note that actually gets accepted.",
    description:
      "Free AI LinkedIn connection request generator. Enter the context to get short, personalized-feeling request notes.",
    category: "Sales & Outreach",
    resultCount: 6,
    maxTokens: 220,
    inputFields: [
      {
        name: "context",
        label: "Why you're connecting",
        placeholder: "e.g. met at a conference, both in SaaS marketing",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe why you're reaching out or what you have in common.",
      "Generate short request note options.",
      "Send within LinkedIn's 300-character limit.",
    ],
    faq: [
      {
        question: "What's LinkedIn's character limit for request notes?",
        answer: "300 characters — every result here fits comfortably within that.",
      },
      {
        question: "Should I pitch anything in the request note?",
        answer: "No — keep the initial note purely about connecting; pitch anything only after they've accepted.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a networking expert who writes short LinkedIn connection request notes (under 300 characters) that reference a specific reason for connecting, with no sales pitch. You respond only with a numbered list — no preamble.",
      user: `Generate 6 LinkedIn connection request note options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "sales-objection-response-generator",
    name: "Sales Objection Response Generator",
    tagline: "Confident answers to the objections you hear most.",
    description:
      "Free AI sales objection response generator. Enter the objection to get a few ways to respond confidently.",
    category: "Sales & Outreach",
    resultCount: 5,
    maxTokens: 340,
    inputFields: [
      {
        name: "objection",
        label: "The objection you're hearing",
        placeholder: "e.g. it's too expensive, we already use a competitor",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the objection you're hearing from prospects.",
      "Generate a few response angles.",
      "Practice your favorite until it sounds natural, not scripted.",
    ],
    faq: [
      {
        question: "Will these work for every objection?",
        answer: "These give solid starting angles, but the best responses are grounded in your specific product's real strengths — adapt accordingly.",
      },
      {
        question: "Should I argue with the prospect?",
        answer: "No — the best responses acknowledge the concern first, then reframe, rather than directly contradicting the prospect.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sales trainer who teaches objection handling using an acknowledge-reframe-close structure, without being pushy or dismissive of the prospect's concern. Each result is 2-3 sentences. You respond only with a numbered list — no preamble.",
      user: `Generate 5 response options for this sales objection: "${values.objection}". Return only a numbered list.`,
    }),
  },
  {
    slug: "discovery-call-questions-generator",
    name: "Discovery Call Questions Generator",
    tagline: "Ask the questions that actually qualify a lead.",
    description:
      "Free AI discovery call question generator. Enter your product to get a set of qualifying questions to ask prospects.",
    category: "Sales & Outreach",
    resultCount: 10,
    maxTokens: 320,
    inputFields: [
      {
        name: "product",
        label: "What you sell",
        placeholder: "e.g. an inventory management SaaS for small retailers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you sell.",
      "Generate a list of discovery call questions.",
      "Pick 5-6 that fit your typical call length — don't ask all of them at once.",
    ],
    faq: [
      {
        question: "How many questions should a discovery call have?",
        answer: "5-8 well-chosen questions usually work better than a long checklist that feels like an interrogation.",
      },
      {
        question: "Should these be yes/no questions?",
        answer: "No — most of these are open-ended on purpose, since they get the prospect talking and reveal more useful information.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sales trainer who writes open-ended discovery call questions that uncover pain points, budget, and decision process without feeling scripted. You respond only with a numbered list — no preamble.",
      user: `Generate 10 discovery call questions for a salesperson selling: "${values.product}". Return only a numbered list.`,
    }),
  },
  {
    slug: "referral-request-message-generator",
    name: "Referral Request Message Generator",
    tagline: "Ask happy customers for referrals without feeling pushy.",
    description:
      "Free AI referral request generator. Enter your business to get natural-sounding referral ask messages.",
    category: "Sales & Outreach",
    resultCount: 5,
    maxTokens: 280,
    inputFields: [
      {
        name: "business",
        label: "Your business",
        placeholder: "e.g. a wedding photography studio",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business.",
      "Generate referral request options.",
      "Send to a customer who's already expressed satisfaction, ideally right after a good result.",
    ],
    faq: [
      {
        question: "When's the best time to ask for a referral?",
        answer: "Right after a customer expresses satisfaction or gets a good result — that's when they're most motivated to help.",
      },
      {
        question: "Should I offer an incentive?",
        answer: "Optional — mentioning one can boost response rate, but many customers refer happily without one if the ask is genuine.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a small business owner writing warm, low-pressure referral request messages to happy customers. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 5 referral request message options for: "${values.business}". Return only a numbered list.`,
    }),
  },
  {
    slug: "upsell-pitch-generator",
    name: "Upsell Pitch Generator",
    tagline: "Offer the upgrade at the right moment, the right way.",
    description:
      "Free AI upsell pitch generator. Enter your product and upgrade to get natural-sounding upsell messaging.",
    category: "Sales & Outreach",
    resultCount: 5,
    maxTokens: 300,
    inputFields: [
      {
        name: "upgrade",
        label: "Current plan → upgrade",
        placeholder: "e.g. Basic plan customers → Pro plan",
        type: "text",
        required: true,
      },
      {
        name: "benefit",
        label: "Key benefit of upgrading",
        placeholder: "e.g. unlimited exports and priority support",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the current plan and the upgrade.",
      "Describe the key benefit of upgrading.",
      "Generate and use in an email, in-app message, or sales call.",
    ],
    faq: [
      {
        question: "When should I pitch an upsell?",
        answer: "Best timing is right after the customer hits a limitation of their current plan or gets strong value from what they already have.",
      },
      {
        question: "Should I lead with the price?",
        answer: "No — these lead with the benefit or outcome, with price mentioned only briefly at the end.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer success manager writing natural, benefit-first upsell messages that don't feel like a hard sell. Each result is 2-3 sentences. You respond only with a numbered list — no preamble.",
      user: `Generate 5 upsell pitch options. Upgrade path: "${values.upgrade}". Key benefit: "${values.benefit}". Return only a numbered list.`,
    }),
  },
  {
    slug: "win-back-email-generator",
    name: "Win-Back Email Generator",
    tagline: "Bring lapsed customers back without sounding desperate.",
    description:
      "Free AI win-back email generator. Enter your business to get messages that re-engage customers who've gone quiet.",
    category: "Sales & Outreach",
    resultCount: 5,
    maxTokens: 320,
    inputFields: [
      {
        name: "business",
        label: "Your business",
        placeholder: "e.g. a meal kit subscription",
        type: "text",
        required: true,
      },
      {
        name: "incentive",
        label: "Incentive to offer (optional)",
        placeholder: "e.g. 20% off your next order",
        type: "text",
      },
    ],
    howTo: [
      "Describe your business.",
      "Add an incentive if you're offering one.",
      "Generate and send to customers who haven't purchased or logged in recently.",
    ],
    faq: [
      {
        question: "How long since last activity should trigger this?",
        answer: "Varies by business, but 30-90 days of inactivity is a common threshold for a win-back campaign.",
      },
      {
        question: "Do I need to offer a discount?",
        answer: "No — some of these lead with a product update or reminder of value instead of a discount.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a lifecycle marketing specialist writing win-back emails for lapsed customers, warm and curious in tone rather than guilt-tripping. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 5 win-back email options for: "${values.business}". Incentive to mention: "${values.incentive || "none, focus on value"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "git-commit-message-generator",
    name: "Git Commit Message Generator",
    tagline: "Clear, conventional commit messages from a plain description.",
    description:
      "Free AI git commit message generator. Describe your change and get clean, conventional-commit-style messages.",
    category: "Tech & Developer Tools",
    resultCount: 5,
    maxTokens: 220,
    inputFields: [
      {
        name: "change",
        label: "What did you change?",
        placeholder: "e.g. fixed a bug where the login button didn't work on Safari",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Conventional Commits (feat/fix/chore)", "Plain description"],
      },
    ],
    howTo: [
      "Describe the change in plain English.",
      "Pick the commit message style your team uses.",
      "Generate and use your favorite for the commit.",
    ],
    faq: [
      {
        question: "What are Conventional Commits?",
        answer: "A widely-used format prefixing messages with a type like feat:, fix:, or chore: — it's often used to auto-generate changelogs.",
      },
      {
        question: "Should the message be in past or present tense?",
        answer: "Present tense imperative (e.g. 'fix login bug' not 'fixed login bug') is the common Git convention, and these follow it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a senior engineer who writes clean, concise git commit messages in present-tense imperative mood, one line each, following the requested style. You respond only with a numbered list — no preamble.",
      user: `Generate 5 commit message options for this change: "${values.change}". Style: ${values.style || "Conventional Commits (feat/fix/chore)"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "readme-generator",
    name: "README Outline Generator",
    tagline: "A structured README section list for your project.",
    description:
      "Free AI README generator. Describe your project to get a structured README outline with section content.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "project",
        label: "Describe your project",
        placeholder: "e.g. a CLI tool that converts CSV files to JSON",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what your project does.",
      "Generate a structured README outline.",
      "Paste into README.md and fill in project-specific commands and links.",
    ],
    faq: [
      {
        question: "Does this write actual installation commands?",
        answer: "It suggests placeholders for them — swap in your project's real install/run commands before publishing.",
      },
      {
        question: "Is this markdown-formatted?",
        answer: "It's structured as sections you can paste under your own markdown headers in README.md.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a developer who writes clear, well-structured README files. Respond with section names (Overview, Installation, Usage, Configuration, Contributing, License, etc. as relevant) each followed by a short paragraph or bullet content for that section. No markdown # headers, just plain section labels.",
      user: `Write a README outline with content for this project: "${values.project}".`,
    }),
  },
  {
    slug: "regex-explainer-generator",
    name: "Regex Explainer Generator",
    tagline: "Understand what a regex pattern actually does.",
    description:
      "Free AI regex explainer. Paste a regular expression and get a plain-English breakdown of what it matches.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 400,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "regex",
        label: "Regex pattern",
        placeholder: "e.g. ^[\\w.-]+@[\\w.-]+\\.\\w+$",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste the regex pattern you want explained.",
      "Generate a plain-English breakdown.",
      "Use it to understand or document code you're reviewing.",
    ],
    faq: [
      {
        question: "Does this work for any regex flavor?",
        answer: "It works best for common flavors (JavaScript, PCRE, Python) — flag your language if the pattern uses flavor-specific syntax.",
      },
      {
        question: "Will this test my regex against sample input?",
        answer: "No — this explains what the pattern means; test it against real strings using your language's regex tester or console.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a senior engineer who explains regular expressions clearly. Break the pattern into its components and explain each part, then give a one-sentence summary of what it matches overall. No markdown headers.",
      user: `Explain what this regex pattern does, piece by piece: ${values.regex}`,
    }),
  },
  {
    slug: "code-comment-generator",
    name: "Code Comment Generator",
    tagline: "Explain what a snippet does, in plain language.",
    description:
      "Free AI code comment generator. Paste a code snippet and get a clear explanation and suggested comments.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "code",
        label: "Paste your code snippet",
        placeholder: "e.g. a function that debounces an input handler",
        type: "text",
        required: true,
      },
      {
        name: "language",
        label: "Language",
        placeholder: "e.g. JavaScript, Python",
        type: "text",
      },
    ],
    howTo: [
      "Paste the code snippet you want explained.",
      "Mention the language, if it's not obvious.",
      "Generate a plain-language explanation plus suggested inline comments.",
    ],
    faq: [
      {
        question: "Will this add the comments directly into my code?",
        answer: "It suggests what to write and where — copy the relevant lines into your actual source file yourself.",
      },
      {
        question: "Does this work for any programming language?",
        answer: "It handles most mainstream languages well — mention the language explicitly for best results on less common syntax.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a senior engineer who explains code clearly and suggests concise, non-obvious inline comments (not comments that just restate the code). Give a brief overall explanation, then suggested comments for key lines. No markdown headers.",
      user: `Explain this ${values.language || "code"} snippet and suggest useful inline comments:\n\n${values.code}`,
    }),
  },
  {
    slug: "error-message-explainer-generator",
    name: "Error Message Explainer",
    tagline: "Understand an error and likely fixes in plain English.",
    description:
      "Free AI error message explainer. Paste an error message and get a plain-English explanation with likely causes and fixes.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "error",
        label: "Paste the error message",
        placeholder: "e.g. TypeError: Cannot read properties of undefined (reading 'map')",
        type: "text",
        required: true,
      },
      {
        name: "context",
        label: "Context (optional)",
        placeholder: "e.g. happens when fetching a list of users in React",
        type: "text",
      },
    ],
    howTo: [
      "Paste the exact error message.",
      "Add context about when it happens, if you can.",
      "Generate an explanation plus a checklist of likely causes and fixes.",
    ],
    faq: [
      {
        question: "Will this fix my code automatically?",
        answer: "No — it explains what the error typically means and what to check, but you'll apply the fix in your own code.",
      },
      {
        question: "Why might the actual cause differ from what's suggested?",
        answer: "Error messages are often generic — the suggestions are the most common causes, but your specific bug may be more unusual.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a senior engineer who explains error messages clearly: what it generally means, then a short checklist of the most common causes and fixes, most likely first. No markdown headers.",
      user: `Explain this error and suggest fixes: "${values.error}". Context: ${values.context || "not specified"}.`,
    }),
  },
  {
    slug: "sql-query-explainer-generator",
    name: "SQL Query Explainer",
    tagline: "Understand what a SQL query actually returns.",
    description:
      "Free AI SQL query explainer. Paste a query and get a plain-English breakdown of what it does.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 380,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "query",
        label: "Paste your SQL query",
        placeholder: "e.g. SELECT ... FROM orders JOIN customers ...",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste the SQL query you want explained.",
      "Generate a plain-English breakdown.",
      "Use it to review someone else's query or document your own.",
    ],
    faq: [
      {
        question: "Does this work for any SQL dialect?",
        answer: "It handles standard SQL and common dialects (PostgreSQL, MySQL) well — flag anything dialect-specific in your query.",
      },
      {
        question: "Will this optimize my query?",
        answer: "No — this explains what it does; use your database's EXPLAIN/ANALYZE tools for performance tuning.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a database engineer who explains SQL queries clearly in plain English, breaking down clauses (SELECT, JOIN, WHERE, GROUP BY, etc.) and summarizing what the query returns overall. No markdown headers.",
      user: `Explain what this SQL query does:\n\n${values.query}`,
    }),
  },
  {
    slug: "pull-request-description-generator",
    name: "Pull Request Description Generator",
    tagline: "A clear PR description reviewers will actually read.",
    description:
      "Free AI pull request description generator. Describe your change and get a structured PR description.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "change",
        label: "Describe the change",
        placeholder: "e.g. refactored the auth middleware to use JWT instead of sessions",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what the change does and why.",
      "Generate a structured description (summary, changes, testing).",
      "Paste into your PR and adjust for your team's template.",
    ],
    faq: [
      {
        question: "Does this replace my team's PR template?",
        answer: "No — it generates the content; paste the relevant parts into your team's existing template structure.",
      },
      {
        question: "Should I mention breaking changes?",
        answer: "Yes, always flag them explicitly — this template includes a spot for that when relevant.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a senior engineer writing a clear pull request description with sections: Summary, What changed, Why, How to test. No markdown # headers, just plain section labels followed by content.",
      user: `Write a pull request description for this change: "${values.change}".`,
    }),
  },
  {
    slug: "cron-expression-explainer-generator",
    name: "Cron Expression Explainer",
    tagline: "Understand exactly when a cron job runs.",
    description:
      "Free AI cron expression explainer. Paste a cron expression and get a plain-English explanation of its schedule.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 260,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "cron",
        label: "Cron expression",
        placeholder: "e.g. 0 3 * * 1-5",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste the cron expression.",
      "Generate a plain-English explanation of the schedule.",
      "Double-check the timezone your scheduler uses before relying on it.",
    ],
    faq: [
      {
        question: "Does this account for timezones?",
        answer: "No — cron expressions don't include timezone info by default; the explanation covers the schedule pattern only. Check your scheduler's configured timezone separately.",
      },
      {
        question: "Does this work for non-standard cron formats (e.g. with seconds)?",
        answer: "It handles standard 5-field cron well; mention if your expression uses a 6-field format with seconds.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a DevOps engineer who explains cron expressions in one clear, plain-English sentence describing exactly when the job runs.",
      user: `Explain in plain English when this cron expression runs: ${values.cron}`,
    }),
  },
  {
    slug: "meta-title-generator",
    name: "SEO Meta Title Generator",
    tagline: "Titles that rank and actually get clicked.",
    description:
      "Free AI SEO meta title generator. Enter your page topic to get search-optimized title tag options.",
    category: "SEO & Content Strategy",
    resultCount: 8,
    maxTokens: 240,
    inputFields: [
      {
        name: "topic",
        label: "Page topic / target keyword",
        placeholder: "e.g. best running shoes for flat feet",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your page topic or target keyword.",
      "Generate title tag options.",
      "Pick one under 60 characters and set it as your page's title tag.",
    ],
    faq: [
      {
        question: "How long should a title tag be?",
        answer: "Aim for under 60 characters so it doesn't get truncated in search results — these are written with that limit in mind.",
      },
      {
        question: "Should the keyword be at the start?",
        answer: "It often helps for relevance, but a compelling, clickable title matters more than exact keyword position.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO specialist who writes compelling, click-worthy title tags under 60 characters that naturally include the target keyword. You respond only with a numbered list — no preamble.",
      user: `Generate 8 SEO title tag options for a page about: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "meta-description-generator",
    name: "SEO Meta Description Generator",
    tagline: "Search snippets that earn the click.",
    description:
      "Free AI SEO meta description generator. Enter your page topic to get search-optimized description options.",
    category: "SEO & Content Strategy",
    resultCount: 6,
    maxTokens: 320,
    inputFields: [
      {
        name: "topic",
        label: "Page topic / target keyword",
        placeholder: "e.g. a guide to setting up a home espresso bar",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your page topic or target keyword.",
      "Generate meta description options.",
      "Pick one under 160 characters and add it to your page's meta description.",
    ],
    faq: [
      {
        question: "How long should a meta description be?",
        answer: "Aim for under 160 characters — these are written to fit within that limit.",
      },
      {
        question: "Does the meta description affect rankings directly?",
        answer: "Not directly, but a compelling one improves click-through rate, which is a strong indirect signal.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO specialist who writes compelling meta descriptions under 160 characters that include a clear reason to click. You respond only with a numbered list — no preamble.",
      user: `Generate 6 SEO meta description options for a page about: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "seo-keyword-cluster-generator",
    name: "SEO Keyword Cluster Generator",
    tagline: "Group related keywords into content-ready clusters.",
    description:
      "Free AI keyword cluster generator. Enter a seed topic to get related keyword groups for planning content.",
    category: "SEO & Content Strategy",
    resultCount: 1,
    maxTokens: 480,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "topic",
        label: "Seed topic",
        placeholder: "e.g. home espresso machines",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter a broad seed topic for your site or article.",
      "Generate clustered keyword groups.",
      "Use each cluster as the basis for one article or page.",
    ],
    faq: [
      {
        question: "Does this show real search volume?",
        answer: "No — this suggests logical topic groupings; check actual volume in a keyword research tool before prioritizing.",
      },
      {
        question: "Should each cluster be its own page?",
        answer: "Generally yes — that's the standard approach to topic clustering for SEO, one page or article per cluster.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO content strategist who groups keywords into logical topic clusters. Respond with cluster names as labels, each followed by 5-8 related keyword phrases as a bullet list. No markdown headers.",
      user: `Generate keyword clusters for the seed topic: "${values.topic}".`,
    }),
  },
  {
    slug: "long-tail-keyword-generator",
    name: "Long-Tail Keyword Generator",
    tagline: "Specific phrases with less competition.",
    description:
      "Free AI long-tail keyword generator. Enter a topic to get specific, lower-competition keyword phrases.",
    category: "SEO & Content Strategy",
    resultCount: 12,
    maxTokens: 300,
    inputFields: [
      {
        name: "topic",
        label: "Broad topic",
        placeholder: "e.g. meal prep containers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter a broad topic.",
      "Generate long-tail keyword phrase options.",
      "Check search volume/difficulty in a keyword tool, then target the best ones in your content.",
    ],
    faq: [
      {
        question: "What makes a keyword 'long-tail'?",
        answer: "It's a longer, more specific phrase (often 3+ words) that typically has lower search volume but higher intent and less competition.",
      },
      {
        question: "Should I use these exact phrases verbatim?",
        answer: "Use them as targets to naturally work into your content — don't force awkward exact-match repetition.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO researcher who generates specific, realistic long-tail keyword phrases (3-6 words each) that real searchers would actually type. You respond only with a numbered list — no preamble.",
      user: `Generate 12 long-tail keyword phrases related to: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "content-calendar-idea-generator",
    name: "Content Calendar Idea Generator",
    tagline: "A month of content ideas in one shot.",
    description:
      "Free AI content calendar generator. Enter your niche to get a batch of content ideas ready to schedule.",
    category: "SEO & Content Strategy",
    resultCount: 12,
    maxTokens: 380,
    inputFields: [
      {
        name: "niche",
        label: "Your niche or industry",
        placeholder: "e.g. sustainable fashion brand",
        type: "text",
        required: true,
      },
      {
        name: "platform",
        label: "Platform",
        type: "select",
        options: ["Blog", "Instagram", "TikTok/Reels", "LinkedIn", "Email newsletter"],
      },
    ],
    howTo: [
      "Describe your niche or industry.",
      "Pick the platform you're planning content for.",
      "Generate ideas and slot them into your calendar.",
    ],
    faq: [
      {
        question: "Are these ideas platform-specific?",
        answer: "Yes — the format and angle are tailored to the platform you select.",
      },
      {
        question: "Can I mix ideas across platforms?",
        answer: "Sure — many of these can be repurposed across formats with light adjustments.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a content strategist who generates specific, non-generic content ideas (not 'post about your product') tailored to a niche and platform. You respond only with a numbered list — no preamble.",
      user: `Generate 12 content ideas for a "${values.niche}" business, for the platform: ${values.platform || "Blog"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "featured-snippet-answer-generator",
    name: "Featured Snippet Answer Generator",
    tagline: "Answers formatted to win position zero.",
    description:
      "Free AI featured snippet generator. Enter a question to get a concise, snippet-optimized answer.",
    category: "SEO & Content Strategy",
    resultCount: 3,
    maxTokens: 280,
    inputFields: [
      {
        name: "question",
        label: "Target question",
        placeholder: "e.g. how long does it take to learn Spanish?",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the question you want to target.",
      "Generate concise, snippet-style answer options.",
      "Place your favorite near the top of the relevant page, directly after the heading.",
    ],
    faq: [
      {
        question: "Does this guarantee a featured snippet?",
        answer: "No — Google decides which page wins the snippet, but a clear, concise, well-placed answer improves your odds.",
      },
      {
        question: "How long should a snippet answer be?",
        answer: "Roughly 40-60 words works well for paragraph-style snippets — these are written within that range.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO content writer who writes concise, direct answers (40-60 words) formatted to compete for Google's featured snippet, answering the question in the first sentence. You respond only with a numbered list — no preamble.",
      user: `Generate 3 featured-snippet-style answer options for the question: "${values.question}". Return only a numbered list.`,
    }),
  },
  {
    slug: "alt-text-generator",
    name: "Image Alt Text Generator",
    tagline: "Accessible, SEO-friendly alt text from a description.",
    description:
      "Free AI alt text generator. Describe an image to get accessible, SEO-friendly alt text options.",
    category: "SEO & Content Strategy",
    resultCount: 5,
    maxTokens: 220,
    inputFields: [
      {
        name: "description",
        label: "Describe the image",
        placeholder: "e.g. a woman jogging on a beach at sunrise wearing pink sneakers",
        type: "text",
        required: true,
      },
      {
        name: "keyword",
        label: "Target keyword (optional)",
        placeholder: "e.g. women's running shoes",
        type: "text",
      },
    ],
    howTo: [
      "Describe what's in the image.",
      "Add a target keyword if relevant.",
      "Generate and use in your image's alt attribute.",
    ],
    faq: [
      {
        question: "How long should alt text be?",
        answer: "Generally under 125 characters — long enough to describe the image, short enough for screen readers to convey efficiently.",
      },
      {
        question: "Should I keyword-stuff alt text?",
        answer: "No — write a natural description; forcing in a keyword unnaturally hurts both accessibility and SEO.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an accessibility and SEO specialist who writes natural, descriptive alt text under 125 characters, incorporating a keyword only if it fits naturally. You respond only with a numbered list — no preamble.",
      user: `Generate 5 alt text options for an image described as: "${values.description}". Target keyword if it fits naturally: "${values.keyword || "none"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "content-repurposing-idea-generator",
    name: "Content Repurposing Idea Generator",
    tagline: "Turn one piece of content into ten.",
    description:
      "Free AI content repurposing generator. Enter your existing content topic to get ideas for reformatting it across channels.",
    category: "SEO & Content Strategy",
    resultCount: 10,
    maxTokens: 340,
    inputFields: [
      {
        name: "content",
        label: "Your existing content",
        placeholder: "e.g. a 2,000-word blog post on remote team management",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your existing piece of content.",
      "Generate repurposing ideas across formats and platforms.",
      "Pick a few to actually produce this week.",
    ],
    faq: [
      {
        question: "Does this write the repurposed content itself?",
        answer: "No — it gives you the specific idea/angle for each format; use our other tools or your own writing for the full piece.",
      },
      {
        question: "Do I need design skills for all of these?",
        answer: "Some (like carousels or infographics) benefit from design, but many (threads, email, short posts) just need writing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a content strategist who suggests specific, actionable ways to repurpose one piece of content across other formats and channels (not generic 'make a video' advice). You respond only with a numbered list — no preamble.",
      user: `Generate 10 repurposing ideas for this existing content: "${values.content}". Return only a numbered list.`,
    }),
  },
  {
    slug: "presentation-outline-generator",
    name: "Presentation Outline Generator",
    tagline: "A slide-by-slide structure for any talk.",
    description:
      "Free AI presentation outline generator. Enter your topic to get a clear slide-by-slide structure.",
    category: "Presentations & Public Speaking",
    resultCount: 1,
    maxTokens: 550,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "topic",
        label: "Presentation topic",
        placeholder: "e.g. quarterly sales results for the leadership team",
        type: "text",
        required: true,
      },
      {
        name: "length",
        label: "Length",
        type: "select",
        options: ["5 minutes (lightning talk)", "15 minutes", "30+ minutes"],
      },
    ],
    howTo: [
      "Describe your presentation topic and audience.",
      "Pick roughly how long the talk is.",
      "Generate a slide-by-slide outline, then build your actual slides.",
    ],
    faq: [
      {
        question: "How many slides does this suggest?",
        answer: "It scales the slide count to your chosen length — a 5-minute talk gets far fewer slides than a 30-minute one.",
      },
      {
        question: "Does this write my speaker notes?",
        answer: "No — it outlines what each slide covers; write your own talking points from there.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a presentation coach who structures talks. Respond with a numbered list of slide titles, each followed by a one-line description of that slide's content, scaled appropriately to the requested length. No markdown headers.",
      user: `Outline a presentation on: "${values.topic}". Length: ${values.length || "15 minutes"}.`,
    }),
  },
  {
    slug: "speech-opening-line-generator",
    name: "Speech Opening Line Generator",
    tagline: "Hook the room in your first sentence.",
    description:
      "Free AI speech opener generator. Enter your topic to get attention-grabbing opening lines.",
    category: "Presentations & Public Speaking",
    resultCount: 6,
    maxTokens: 280,
    inputFields: [
      {
        name: "topic",
        label: "What's your speech about?",
        placeholder: "e.g. why remote teams need better async communication",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what your speech or talk is about.",
      "Generate opening line options.",
      "Practice your favorite until it feels natural, not memorized.",
    ],
    faq: [
      {
        question: "Should I open with a joke?",
        answer: "Only if it fits your natural style — several of these use other hooks like a question or bold statement instead.",
      },
      {
        question: "How long should an opening line be?",
        answer: "Keep it to one or two sentences — the goal is a hook, not a full introduction.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a public speaking coach who writes strong opening lines using varied hooks (a question, a surprising fact, a bold statement, a short story beat) for a given topic. You respond only with a numbered list — no preamble.",
      user: `Generate 6 speech opening line options for a talk about: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "presentation-closing-line-generator",
    name: "Presentation Closing Line Generator",
    tagline: "End with something people remember.",
    description:
      "Free AI presentation closer generator. Enter your topic to get a memorable closing line.",
    category: "Presentations & Public Speaking",
    resultCount: 6,
    maxTokens: 260,
    inputFields: [
      {
        name: "topic",
        label: "What's your presentation about?",
        placeholder: "e.g. our plan to launch in three new markets",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your presentation topic.",
      "Generate closing line options.",
      "End your talk with your favorite, followed by a clear call to action if you have one.",
    ],
    faq: [
      {
        question: "Should the closing line include a call to action?",
        answer: "If you have one, add it right after the closing line — these focus on the memorable line itself.",
      },
      {
        question: "Should I just say 'thank you'?",
        answer: "You can add that after, but ending only on 'thank you' wastes the most memorable moment in your talk.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a public speaking coach who writes memorable closing lines that tie back to the presentation's core theme. You respond only with a numbered list — no preamble.",
      user: `Generate 6 closing line options for a presentation about: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "graduation-speech-generator",
    name: "Graduation Speech Generator",
    tagline: "A speech that captures the moment.",
    description:
      "Free AI graduation speech generator. Enter the details to get a heartfelt, well-structured speech draft.",
    category: "Presentations & Public Speaking",
    resultCount: 1,
    maxTokens: 750,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "context",
        label: "Context",
        placeholder: "e.g. valedictorian speech for a high school graduating class of 2026",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Heartfelt", "Funny & light", "Inspiring"],
      },
    ],
    howTo: [
      "Describe the graduation context — who's speaking and to whom.",
      "Pick a tone.",
      "Generate a full draft, then personalize with real names and memories.",
    ],
    faq: [
      {
        question: "How long is this speech?",
        answer: "Roughly 400-500 words, which reads aloud in about 3-4 minutes — a typical graduation speech length.",
      },
      {
        question: "Should I add personal stories?",
        answer: "Definitely — swap in real, specific memories and names; that's what makes a graduation speech land.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a speechwriter who writes warm, well-structured graduation speeches (opening hook, body reflecting on the journey, forward-looking close), around 400-500 words, with clear [placeholder] spots for personal names and memories.",
      user: `Write a graduation speech. Context: "${values.context}". Tone: ${values.tone || "Heartfelt"}.`,
    }),
  },
  {
    slug: "keynote-speaker-intro-generator",
    name: "Keynote Speaker Intro Generator",
    tagline: "Introduce a speaker so the room is ready to listen.",
    description:
      "Free AI speaker introduction generator. Enter the speaker's background to get a compelling intro to read aloud.",
    category: "Presentations & Public Speaking",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "background",
        label: "Speaker's background & topic",
        placeholder: "e.g. Jane Smith, 15 years in climate tech, speaking about carbon capture innovation",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the speaker's background and their talk topic.",
      "Generate introduction options.",
      "Read your favorite aloud to introduce them on stage.",
    ],
    faq: [
      {
        question: "How long should a speaker intro be?",
        answer: "About 100-150 words, roughly 45-60 seconds when read aloud — long enough for credibility, short enough to not delay the talk.",
      },
      {
        question: "Should I mention the topic in the intro?",
        answer: "Yes — these end by naming the topic so the audience knows exactly what's coming.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an event host who writes compelling speaker introductions (100-150 words) that build credibility and end by naming the talk topic. You respond only with a numbered list — no preamble.",
      user: `Generate 3 speaker introduction options. Background/topic: "${values.background}". Return only a numbered list.`,
    }),
  },
  {
    slug: "qa-session-question-generator",
    name: "Q&A Session Question Generator",
    tagline: "Seed questions to get the discussion moving.",
    description:
      "Free AI Q&A question generator. Enter your talk topic to get audience question ideas to keep discussion moving.",
    category: "Presentations & Public Speaking",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "topic",
        label: "Talk or panel topic",
        placeholder: "e.g. the future of remote work",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the talk or panel topic.",
      "Generate potential audience questions.",
      "Have a couple ready to seed discussion if the audience is slow to ask.",
    ],
    faq: [
      {
        question: "Are these meant to be asked by a plant in the audience?",
        answer: "They're meant as a moderator's backup to keep discussion flowing, not to fake audience engagement — use transparently.",
      },
      {
        question: "Should these be yes/no questions?",
        answer: "No — they're written as open-ended questions that invite a fuller answer.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an event moderator who prepares thoughtful, open-ended audience questions for a Q&A session on a given topic. You respond only with a numbered list — no preamble.",
      user: `Generate 8 potential Q&A questions for a talk about: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "baby-shower-invitation-generator",
    name: "Baby Shower Invitation Generator",
    tagline: "Sweet invitations for the celebration ahead.",
    description:
      "Free AI baby shower invitation generator. Enter the details to get warm, ready-to-send invitation text.",
    category: "Parenting & Family",
    resultCount: 5,
    maxTokens: 300,
    inputFields: [
      {
        name: "details",
        label: "Details",
        placeholder: "e.g. Sarah's baby shower, June 14th, 2pm, backyard brunch",
        type: "text",
        required: true,
      },
      {
        name: "theme",
        label: "Theme (optional)",
        placeholder: "e.g. woodland animals, 'oh baby' balloons",
        type: "text",
      },
    ],
    howTo: [
      "Enter the key details — who, when, where.",
      "Add a theme if you have one.",
      "Generate and use on your invitation card or digital invite.",
    ],
    faq: [
      {
        question: "Should I mention a gift registry?",
        answer: "Optional and common — add a registry link or note separately below the main invitation text if you're including one.",
      },
      {
        question: "Can I use this for a virtual baby shower?",
        answer: "Yes — just include the video call link instead of an address in your details.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing warm, clear baby shower invitation text, 30-50 words, that includes the key event details naturally. You respond only with a numbered list — no preamble.",
      user: `Generate 5 baby shower invitation options. Details: "${values.details}". Theme: "${values.theme || "none specified"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "family-newsletter-generator",
    name: "Family Newsletter Generator",
    tagline: "A yearly family update that's fun to read.",
    description:
      "Free AI family newsletter generator. Enter your year's highlights to get a warm, readable holiday letter draft.",
    category: "Parenting & Family",
    resultCount: 1,
    maxTokens: 500,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "highlights",
        label: "This year's highlights",
        placeholder: "e.g. moved to a new house, kids started school, family trip to Italy",
        type: "text",
        required: true,
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: ["Warm & heartfelt", "Funny & casual", "Brief & simple"],
      },
    ],
    howTo: [
      "List your family's key highlights from the year.",
      "Pick a tone.",
      "Generate a draft, then personalize names and details before sending.",
    ],
    faq: [
      {
        question: "How long is the letter?",
        answer: "Around 250-350 words — enough to cover highlights without becoming a chore to read.",
      },
      {
        question: "Can I use this for a holiday card insert?",
        answer: "Yes — this format works well printed as an insert or sent as a digital update.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing a warm, engaging family year-in-review newsletter/holiday letter, 250-350 words, avoiding cliché bragging tone. Use [Family Name] and [Names] as placeholders where personal names would go.",
      user: `Write a family newsletter covering these highlights: "${values.highlights}". Tone: ${values.tone || "Warm & heartfelt"}.`,
    }),
  },
  {
    slug: "bedtime-story-generator",
    name: "Bedtime Story Generator",
    tagline: "A custom story starring your own kid.",
    description:
      "Free AI bedtime story generator. Enter a name and theme to get a short, original bedtime story.",
    category: "Parenting & Family",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "character",
        label: "Main character's name",
        placeholder: "e.g. Maya",
        type: "text",
        required: true,
      },
      {
        name: "theme",
        label: "Theme",
        placeholder: "e.g. a brave trip to the moon, making a new friend",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your child's name (or their favorite character's name).",
      "Describe a theme or adventure.",
      "Generate a short story to read aloud at bedtime.",
    ],
    faq: [
      {
        question: "How long is the story?",
        answer: "Around 350-450 words — roughly 3-5 minutes read aloud, sized for a bedtime routine.",
      },
      {
        question: "Is the content age-appropriate?",
        answer: "Yes — these are written as gentle, calm, positive stories suitable for young children.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a children's book author who writes gentle, calming, age-appropriate bedtime stories (350-450 words) with a clear beginning, middle, and a peaceful ending suitable for winding down at bedtime.",
      user: `Write a bedtime story starring a character named "${values.character}". Theme: "${values.theme}".`,
    }),
  },
  {
    slug: "chore-chart-idea-generator",
    name: "Chore Chart Idea Generator",
    tagline: "Age-appropriate chores, sorted and ready to assign.",
    description:
      "Free AI chore chart generator. Enter your kids' ages to get an age-appropriate list of chores.",
    category: "Parenting & Family",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "ages",
        label: "Kids' ages",
        placeholder: "e.g. 5 and 8 years old",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your kids' ages.",
      "Generate age-appropriate chore suggestions.",
      "Assign chores to a physical or digital chore chart.",
    ],
    faq: [
      {
        question: "Are these chores safe for the ages listed?",
        answer: "They're chosen to be developmentally appropriate, but always use your own judgment for your specific child.",
      },
      {
        question: "Does this include a reward system?",
        answer: "No — it lists chores by age; pair with your own allowance or reward approach.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a parenting expert who suggests age-appropriate chores. Respond with each age group as a label, followed by a bullet list of 5-6 suitable chores for that age. No markdown headers.",
      user: `Suggest age-appropriate chores for kids aged: "${values.ages}".`,
    }),
  },
  {
    slug: "parenting-affirmation-generator",
    name: "Parenting Affirmation Generator",
    tagline: "A reminder you're doing better than you think.",
    description:
      "Free AI parenting affirmation generator. Get short, encouraging affirmations for the hard parenting days.",
    category: "Parenting & Family",
    resultCount: 8,
    maxTokens: 220,
    inputFields: [
      {
        name: "situation",
        label: "What's on your mind? (optional)",
        placeholder: "e.g. feeling guilty about screen time, exhausted from no sleep",
        type: "text",
      },
    ],
    howTo: [
      "Optionally describe what's weighing on you.",
      "Generate short, encouraging affirmations.",
      "Keep one somewhere visible for the harder days.",
    ],
    faq: [
      {
        question: "Are these a substitute for support when I'm struggling?",
        answer: "No — if you're dealing with ongoing burnout or postpartum mental health concerns, please reach out to a real support system or professional.",
      },
      {
        question: "Can I use these for a friend who just had a baby?",
        answer: "Yes — they work well in a card or text message for a new parent.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a compassionate parenting coach who writes short, honest, non-cliché affirmations for tired parents (not toxic-positivity 'you've got this' fluff). You respond only with a numbered list — no preamble.",
      user: `Generate 8 parenting affirmations. Context if relevant: "${values.situation || "general parenting exhaustion"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "field-trip-permission-note-generator",
    name: "Field Trip Permission Note Generator",
    tagline: "A clear note home for teachers, in seconds.",
    description:
      "Free AI permission slip generator. Enter the trip details to get a clear note for parents to sign and return.",
    category: "Parenting & Family",
    resultCount: 1,
    maxTokens: 300,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "details",
        label: "Trip details",
        placeholder: "e.g. 3rd grade trip to the science museum, March 12th, $8 fee, bring a bag lunch",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the trip details — where, when, cost, what to bring.",
      "Generate a permission note draft.",
      "Add a signature line and send home with students.",
    ],
    faq: [
      {
        question: "Does this include a legal liability waiver?",
        answer: "No — this is a plain informational/permission note, not a legal waiver. Check with your school on required legal language.",
      },
      {
        question: "Can I edit this after generating it?",
        answer: "Yes — copy the text and adjust it in your own document before printing or sending home.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a teacher writing a clear, friendly field trip permission note home to parents, including a signature line placeholder at the end. No markdown headers.",
      user: `Write a field trip permission note. Details: "${values.details}".`,
    }),
  },
  {
    slug: "pet-adoption-bio-generator",
    name: "Pet Adoption Bio Generator",
    tagline: "A bio that helps a shelter pet find their home.",
    description:
      "Free AI pet adoption bio generator. Enter your pet's traits to get a warm, shareable adoption listing bio.",
    category: "Pet Care",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "traits",
        label: "Pet's traits & story",
        placeholder: "e.g. 3-year-old rescue lab mix, loves belly rubs, good with kids",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your pet's personality, age, and story.",
      "Generate bio options.",
      "Use your favorite on the shelter's adoption listing or social post.",
    ],
    faq: [
      {
        question: "Should I mention behavior challenges?",
        answer: "Yes — being upfront about any training needs or quirks helps find the right match and builds trust with adopters.",
      },
      {
        question: "How long should an adoption bio be?",
        answer: "Around 50-80 words works well — enough detail to connect, short enough to hold attention in a listing feed.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an animal shelter volunteer who writes warm, honest adoption bios that highlight personality and help pets get adopted, without overselling. You respond only with a numbered list — no preamble.",
      user: `Generate 4 pet adoption bio options. Traits/story: "${values.traits}". Return only a numbered list.`,
    }),
  },
  {
    slug: "pet-birthday-message-generator",
    name: "Pet Birthday Message Generator",
    tagline: "Because they deserve a caption too.",
    description:
      "Free AI pet birthday message generator. Enter your pet's name to get fun birthday captions and messages.",
    category: "Pet Care",
    resultCount: 8,
    maxTokens: 220,
    inputFields: [
      {
        name: "pet",
        label: "Pet's name & type",
        placeholder: "e.g. Bruno the golden retriever, turning 5",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your pet's name and type.",
      "Generate birthday message options.",
      "Use your favorite as a social caption or card message.",
    ],
    faq: [
      {
        question: "Are these puns included?",
        answer: "Some are — pet birthday content tends to work well with a bit of playful humor.",
      },
      {
        question: "Can I use these for a pet's 'gotcha day' instead?",
        answer: "Yes — just swap 'birthday' for 'gotcha day' in your favorite result.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social media copywriter who writes fun, short pet birthday captions/messages, often with light wordplay. You respond only with a numbered list — no preamble.",
      user: `Generate 8 pet birthday message options for: "${values.pet}". Return only a numbered list.`,
    }),
  },
  {
    slug: "dog-training-command-list-generator",
    name: "Dog Training Command List Generator",
    tagline: "A structured list of commands to teach next.",
    description:
      "Free AI dog training generator. Enter your dog's level to get a structured list of commands to work on.",
    category: "Pet Care",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "level",
        label: "Training level",
        type: "select",
        options: ["Puppy / beginner", "Knows basics, ready for more", "Advanced / off-leash work"],
      },
    ],
    howTo: [
      "Pick your dog's current training level.",
      "Generate a suggested command progression.",
      "Work on one command at a time, mastering it before moving to the next.",
    ],
    faq: [
      {
        question: "Does this replace a professional trainer?",
        answer: "No — for behavioral issues or aggression, work with a certified trainer. This is a general starting checklist.",
      },
      {
        question: "How long does each command take to teach?",
        answer: "Varies widely by dog, but expect days to weeks of short, consistent practice sessions per command.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a professional dog trainer who lists an appropriate progression of commands/skills for a dog's training level, each with a one-line tip. No markdown headers, just a numbered or labeled list.",
      user: `Suggest a training command progression for a dog at this level: ${values.level || "Puppy / beginner"}.`,
    }),
  },
  {
    slug: "pet-sitter-instructions-generator",
    name: "Pet Sitter Instructions Generator",
    tagline: "Everything a sitter needs, organized in one note.",
    description:
      "Free AI pet sitter instructions generator. Enter your pet's routine to get a clear instruction sheet for sitters.",
    category: "Pet Care",
    resultCount: 1,
    maxTokens: 450,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "routine",
        label: "Pet's routine & needs",
        placeholder: "e.g. cat, fed twice daily, litter box in laundry room, shy around strangers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your pet's feeding, routine, and any quirks.",
      "Generate a structured instruction sheet.",
      "Add emergency contacts and vet info, then leave it for your sitter.",
    ],
    faq: [
      {
        question: "Does this include emergency contact fields?",
        answer: "It leaves a placeholder for them — fill in your vet's number and an emergency contact before sharing.",
      },
      {
        question: "Can I use this for house-sitting instructions too?",
        answer: "This is pet-focused — mention any house-related needs in your routine description and it'll fold those in.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing a clear, organized pet-sitting instruction sheet with sections like Feeding, Routine, Quirks/Behavior, and Emergency Contacts (as a placeholder to fill in). No markdown headers, plain section labels.",
      user: `Write pet sitter instructions based on: "${values.routine}".`,
    }),
  },
  {
    slug: "pet-social-media-caption-generator",
    name: "Pet Social Media Caption Generator",
    tagline: "Captions as good as the photo.",
    description:
      "Free AI pet caption generator. Describe the photo or moment to get fun, shareable captions.",
    category: "Pet Care",
    resultCount: 8,
    maxTokens: 220,
    inputFields: [
      {
        name: "moment",
        label: "Describe the photo/moment",
        placeholder: "e.g. my cat knocked a plant off the shelf again",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the photo or moment you're posting.",
      "Generate caption options.",
      "Post your favorite with the photo.",
    ],
    faq: [
      {
        question: "Do these include hashtags?",
        answer: "No — pair these with our Hashtag Generator if you want tags added on top.",
      },
      {
        question: "Can I use these for any pet, not just cats/dogs?",
        answer: "Yes — describe your specific pet and moment and it'll adapt.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a social media copywriter who writes short, funny, relatable pet captions. You respond only with a numbered list — no preamble.",
      user: `Generate 8 caption options for this pet moment: "${values.moment}". Return only a numbered list.`,
    }),
  },
  {
    slug: "vet-appointment-reminder-generator",
    name: "Vet Appointment Reminder Generator",
    tagline: "A clear reminder message, ready to send.",
    description:
      "Free AI vet reminder generator. Enter the appointment details to get a clear client reminder message.",
    category: "Pet Care",
    resultCount: 4,
    maxTokens: 240,
    inputFields: [
      {
        name: "details",
        label: "Appointment details",
        placeholder: "e.g. Max's annual checkup, Tuesday 3pm, bring vaccination record",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the pet and appointment details.",
      "Generate reminder message options.",
      "Send by text or email to the pet owner.",
    ],
    faq: [
      {
        question: "Can this be used for a grooming appointment instead?",
        answer: "Yes — just describe it as a grooming appointment in the details field.",
      },
      {
        question: "Should I include cancellation policy info?",
        answer: "Add your clinic's specific policy separately if needed — these focus on the reminder itself.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a veterinary clinic writing short, friendly appointment reminder messages for pet owners, under 40 words each. You respond only with a numbered list — no preamble.",
      user: `Generate 4 vet appointment reminder message options. Details: "${values.details}". Return only a numbered list.`,
    }),
  },
  {
    slug: "used-car-listing-description-generator",
    name: "Used Car Listing Description Generator",
    tagline: "A listing that highlights what buyers actually care about.",
    description:
      "Free AI used car listing generator. Enter the car details to get a clear, compelling listing description.",
    category: "Automotive",
    resultCount: 4,
    maxTokens: 380,
    inputFields: [
      {
        name: "details",
        label: "Car details",
        placeholder: "e.g. 2019 Honda Civic, 45,000 miles, one owner, new tires",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the car's year, make, model, mileage, and key selling points.",
      "Generate description options.",
      "Use your favorite on the marketplace or dealership listing.",
    ],
    faq: [
      {
        question: "Should I mention flaws?",
        answer: "Yes, briefly and honestly — it builds trust and avoids wasted showings with buyers who'll object once they see it.",
      },
      {
        question: "Does this include a price?",
        answer: "No — add your price separately in the listing; this focuses on the description.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a car sales copywriter who writes honest, compelling used car listing descriptions highlighting condition, history, and standout features. You respond only with a numbered list — no preamble.",
      user: `Generate 4 used car listing description options. Details: "${values.details}". Return only a numbered list.`,
    }),
  },
  {
    slug: "car-dealership-ad-copy-generator",
    name: "Car Dealership Ad Copy Generator",
    tagline: "Ad copy for your next sales event.",
    description:
      "Free AI car dealership ad generator. Enter your promotion to get ready-to-use ad copy.",
    category: "Automotive",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "promotion",
        label: "Promotion details",
        placeholder: "e.g. year-end clearance, 0% APR on new SUVs",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your current promotion or sales event.",
      "Generate ad copy options.",
      "Use for social ads, flyers, or local radio scripts.",
    ],
    faq: [
      {
        question: "Are these compliant with lending disclosure rules?",
        answer: "No — financing ads often have required legal disclosures; add your compliance team's required fine print separately.",
      },
      {
        question: "Can I use these for social media ads?",
        answer: "Yes — they're short enough for Facebook/Instagram ad copy as well as print or radio.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an automotive marketing copywriter who writes punchy, urgency-driven dealership ad copy. Each result is 1-2 sentences. You respond only with a numbered list — no preamble.",
      user: `Generate 6 dealership ad copy options for this promotion: "${values.promotion}". Return only a numbered list.`,
    }),
  },
  {
    slug: "car-detailing-service-description-generator",
    name: "Car Detailing Service Description Generator",
    tagline: "Describe your packages so customers know what they're paying for.",
    description:
      "Free AI car detailing description generator. Enter your service to get a clear, appealing package description.",
    category: "Automotive",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "service",
        label: "Service/package details",
        placeholder: "e.g. full interior + exterior detail, ceramic coating add-on",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what's included in your detailing package.",
      "Generate description options.",
      "Use on your website, booking page, or price list.",
    ],
    faq: [
      {
        question: "Should I list every single step included?",
        answer: "Hit the highlights that matter most to customers (interior deep clean, paint correction, etc.) rather than an exhaustive checklist.",
      },
      {
        question: "Does this include pricing?",
        answer: "No — add your own pricing next to the description.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a car detailing business writing clear, appealing service package descriptions that highlight the value and result, not just the process. You respond only with a numbered list — no preamble.",
      user: `Generate 4 service description options for: "${values.service}". Return only a numbered list.`,
    }),
  },
  {
    slug: "road-trip-itinerary-generator",
    name: "Road Trip Itinerary Generator",
    tagline: "A day-by-day plan for your next drive.",
    description:
      "Free AI road trip itinerary generator. Enter your route to get a day-by-day stop-and-drive plan.",
    category: "Automotive",
    resultCount: 1,
    maxTokens: 550,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "route",
        label: "Route & duration",
        placeholder: "e.g. Los Angeles to Seattle, 5 days, love scenic stops and good food",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your start/end points, duration, and interests.",
      "Generate a day-by-day itinerary outline.",
      "Fill in exact addresses and book anything you need in advance.",
    ],
    faq: [
      {
        question: "Does this include real, current stop recommendations?",
        answer: "It suggests the types of stops (scenic overlook, local diner, etc.) — verify specific current business names and hours before relying on them.",
      },
      {
        question: "Does this account for real driving times?",
        answer: "No — it gives a reasonable day-by-day structure; check actual drive times on a map before finalizing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a road trip planner who builds day-by-day itineraries with a driving segment and a couple of suggested stop types per day, matched to stated interests. Respond with Day 1, Day 2, etc. as labels followed by the plan for that day. No markdown headers.",
      user: `Plan a road trip itinerary: "${values.route}".`,
    }),
  },
  {
    slug: "car-maintenance-reminder-message-generator",
    name: "Car Maintenance Reminder Generator",
    tagline: "Remind customers before they forget the oil change.",
    description:
      "Free AI auto shop reminder generator. Enter the service due to get a clear customer reminder message.",
    category: "Automotive",
    resultCount: 4,
    maxTokens: 240,
    inputFields: [
      {
        name: "service",
        label: "Service due",
        placeholder: "e.g. oil change, due at 45,000 miles or 3 months",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the service that's due and any mileage/time interval.",
      "Generate reminder message options.",
      "Send by text or email to your customer.",
    ],
    faq: [
      {
        question: "Can I use this for a recall notice instead?",
        answer: "This is built for routine maintenance reminders — for recalls, use manufacturer-provided legal language instead.",
      },
      {
        question: "Should I include a scheduling link?",
        answer: "Yes, add your booking link at the end of whichever message you use.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an auto repair shop writing short, friendly maintenance reminder messages for customers, under 35 words each. You respond only with a numbered list — no preamble.",
      user: `Generate 4 maintenance reminder message options. Service due: "${values.service}". Return only a numbered list.`,
    }),
  },
  {
    slug: "insurance-policy-explainer-generator",
    name: "Insurance Policy Explainer Generator",
    tagline: "Plain-English summaries of what a policy covers.",
    description:
      "Free AI insurance explainer. Describe a policy type to get a plain-English summary of typical coverage.",
    category: "Insurance",
    resultCount: 1,
    maxTokens: 1400,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "policy",
        label: "Policy type",
        placeholder: "e.g. renters insurance, term life insurance",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the type of insurance policy.",
      "Generate a plain-English explainer.",
      "Use it as a starting point, then confirm specifics with your actual policy document.",
    ],
    faq: [
      {
        question: "Is this specific to my actual policy?",
        answer: "No — this explains typical coverage for this policy type in general. Always check your specific policy document for exact terms.",
      },
      {
        question: "Is this a substitute for talking to an agent?",
        answer: "No — use this to understand the basics, then ask your agent about anything specific to your situation.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an insurance educator who explains what a type of policy typically covers, in plain English, avoiding jargon, and noting that actual coverage varies by provider and policy. Not licensed insurance advice.",
      user: `Explain in plain English what "${values.policy}" typically covers.`,
    }),
  },
  {
    slug: "insurance-renewal-reminder-generator",
    name: "Insurance Renewal Reminder Generator",
    tagline: "Remind clients before their policy lapses.",
    description:
      "Free AI insurance renewal reminder generator. Enter the policy details to get a clear client reminder message.",
    category: "Insurance",
    resultCount: 4,
    maxTokens: 260,
    inputFields: [
      {
        name: "details",
        label: "Policy details",
        placeholder: "e.g. auto policy renewing March 1st",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the policy type and renewal date.",
      "Generate reminder message options.",
      "Send by email or text ahead of the renewal date.",
    ],
    faq: [
      {
        question: "How far ahead should I send this?",
        answer: "2-4 weeks before renewal is common, giving clients time to review or shop around without feeling rushed.",
      },
      {
        question: "Should I mention rate changes?",
        answer: "Only if you know them and are ready to discuss — otherwise keep this focused on the renewal date itself.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an insurance agency writing clear, friendly policy renewal reminder messages, under 40 words each. You respond only with a numbered list — no preamble.",
      user: `Generate 4 renewal reminder message options. Details: "${values.details}". Return only a numbered list.`,
    }),
  },
  {
    slug: "insurance-agent-bio-generator",
    name: "Insurance Agent Bio Generator",
    tagline: "A bio that builds trust before the first call.",
    description:
      "Free AI insurance agent bio generator. Enter your background to get a professional, trust-building bio.",
    category: "Insurance",
    resultCount: 4,
    maxTokens: 360,
    inputFields: [
      {
        name: "background",
        label: "Your background",
        placeholder: "e.g. 12 years in auto & home insurance, based in Austin, TX",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your experience and specialty.",
      "Generate bio options.",
      "Use on your agency website or LinkedIn profile.",
    ],
    faq: [
      {
        question: "Should I mention specific carriers I work with?",
        answer: "Optional — mention it if it's a selling point (e.g. independent agent with multiple carrier options).",
      },
      {
        question: "How long should this bio be?",
        answer: "Around 60-90 words works well for a website or LinkedIn About section.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a marketing writer who crafts professional, trust-building insurance agent bios (60-90 words, third person). You respond only with a numbered list — no preamble.",
      user: `Generate 4 insurance agent bio options. Background: "${values.background}". Return only a numbered list.`,
    }),
  },
  {
    slug: "claims-process-explainer-generator",
    name: "Claims Process Explainer Generator",
    tagline: "Walk clients through filing a claim, step by step.",
    description:
      "Free AI claims explainer generator. Describe the claim type to get a clear, step-by-step overview for clients.",
    category: "Insurance",
    resultCount: 1,
    maxTokens: 450,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "claimType",
        label: "Claim type",
        placeholder: "e.g. auto accident claim, water damage home claim",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the type of claim.",
      "Generate a general step-by-step overview.",
      "Adjust to your specific carrier's actual process before sharing with clients.",
    ],
    faq: [
      {
        question: "Is this specific to one insurance company's process?",
        answer: "No — this is a general overview of typical claims steps. Confirm your specific carrier's exact process and required documents.",
      },
      {
        question: "Can clients use this to actually file a claim?",
        answer: "It orients them on what to expect, but they'll still need to contact their carrier directly to file.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an insurance educator who explains the typical step-by-step claims process for a given claim type, as a numbered list of general steps. Note that specifics vary by carrier. No markdown headers.",
      user: `Outline the typical claims process for: "${values.claimType}".`,
    }),
  },
  {
    slug: "insurance-quote-follow-up-generator",
    name: "Insurance Quote Follow-Up Generator",
    tagline: "Follow up on a quote without being pushy.",
    description:
      "Free AI insurance follow-up generator. Enter the quote context to get a polite, effective follow-up message.",
    category: "Insurance",
    resultCount: 5,
    maxTokens: 280,
    inputFields: [
      {
        name: "context",
        label: "Quote context",
        placeholder: "e.g. sent a home insurance quote 5 days ago, no response",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the quote you sent and how long it's been.",
      "Generate follow-up message options.",
      "Send by email or text.",
    ],
    faq: [
      {
        question: "How many times should I follow up on a quote?",
        answer: "Generally 2-3 times over a few weeks is reasonable before moving on, unless the prospect asks you to stop.",
      },
      {
        question: "Should I mention the quote expiring?",
        answer: "Yes, if it actually has an expiration — real urgency (not fake pressure) is a legitimate reason to follow up.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an insurance agent writing polite, helpful quote follow-up messages that add value (e.g. offering to answer questions) rather than just 'checking in'. You respond only with a numbered list — no preamble.",
      user: `Generate 5 follow-up message options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "diy-project-instructions-generator",
    name: "DIY Project Instructions Generator",
    tagline: "A clear step-by-step plan for your next weekend project.",
    description:
      "Free AI DIY instructions generator. Describe your project to get a structured step-by-step plan.",
    category: "Home & DIY",
    resultCount: 1,
    maxTokens: 550,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "project",
        label: "Describe your project",
        placeholder: "e.g. building a raised garden bed, painting a bathroom accent wall",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the DIY project you want to tackle.",
      "Generate a suggested materials list and step-by-step plan.",
      "Confirm any measurements and safety steps for your specific setup before starting.",
    ],
    faq: [
      {
        question: "Does this include exact measurements for my space?",
        answer: "No — it gives general guidance and typical steps; measure and adjust for your specific space and materials.",
      },
      {
        question: "Does this cover safety precautions?",
        answer: "It notes common safety basics, but always follow the specific safety guidance for your tools and materials.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a DIY expert who outlines projects clearly: a short materials list, then numbered steps, with brief safety notes where relevant. No markdown headers.",
      user: `Outline a step-by-step plan for this DIY project: "${values.project}".`,
    }),
  },
  {
    slug: "house-cleaning-checklist-generator",
    name: "House Cleaning Checklist Generator",
    tagline: "A room-by-room checklist so nothing gets skipped.",
    description:
      "Free AI cleaning checklist generator. Enter your space to get a room-by-room cleaning checklist.",
    category: "Home & DIY",
    resultCount: 1,
    maxTokens: 450,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "space",
        label: "Space & cleaning type",
        placeholder: "e.g. 2-bedroom apartment, deep clean before moving out",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your space and the type of clean you need.",
      "Generate a room-by-room checklist.",
      "Check off items as you go.",
    ],
    faq: [
      {
        question: "Is this for a regular clean or a deep clean?",
        answer: "Mention which one you want in your input — the checklist scales in detail accordingly.",
      },
      {
        question: "Can I use this for a cleaning business's client checklist?",
        answer: "Yes — this format works well as a client-facing service checklist too.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a professional cleaner who creates room-by-room cleaning checklists. Respond with room names as labels, each followed by a bullet list of specific cleaning tasks. No markdown headers.",
      user: `Create a cleaning checklist for: "${values.space}".`,
    }),
  },
  {
    slug: "home-renovation-project-description-generator",
    name: "Home Renovation Project Description Generator",
    tagline: "Describe your project for contractors or portfolios.",
    description:
      "Free AI renovation description generator. Enter your project details to get a clear written description.",
    category: "Home & DIY",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "project",
        label: "Project details",
        placeholder: "e.g. full kitchen remodel, new cabinets, quartz counters, 3 weeks",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the renovation project and scope.",
      "Generate description options.",
      "Use for a contractor's portfolio, before/after post, or project proposal.",
    ],
    faq: [
      {
        question: "Can contractors use this for their portfolio?",
        answer: "Yes — this works well as before/after project write-ups for a contractor's website or social page.",
      },
      {
        question: "Does this include pricing?",
        answer: "No — add your own pricing or estimate separately.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a contractor/interior designer writing clear, appealing renovation project descriptions highlighting the transformation and key details. You respond only with a numbered list — no preamble.",
      user: `Generate 4 renovation project description options. Details: "${values.project}". Return only a numbered list.`,
    }),
  },
  {
    slug: "moving-checklist-generator",
    name: "Moving Checklist Generator",
    tagline: "A timeline so nothing gets forgotten on move day.",
    description:
      "Free AI moving checklist generator. Enter your move date to get a timeline-based checklist.",
    category: "Home & DIY",
    resultCount: 1,
    maxTokens: 500,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "timeframe",
        label: "Time until move",
        type: "select",
        options: ["8 weeks out", "4 weeks out", "1 week out", "Moving day"],
      },
    ],
    howTo: [
      "Pick how far out your move is.",
      "Generate a timeline-based checklist.",
      "Work backward from move day, checking off tasks as you go.",
    ],
    faq: [
      {
        question: "Does this cover both local and long-distance moves?",
        answer: "It covers general moving tasks that apply broadly — add extra steps for long-distance specifics like transferring utilities across states.",
      },
      {
        question: "Should I start with the earliest timeframe?",
        answer: "If you have the time, yes — starting at '8 weeks out' catches tasks (like decluttering) that are easy to miss if you start late.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a professional mover who creates practical moving checklists appropriate to how far out the move is. Respond with a bullet list of tasks appropriate for that specific timeframe. No markdown headers.",
      user: `Create a moving checklist for someone who is: ${values.timeframe || "4 weeks out"}.`,
    }),
  },
  {
    slug: "neighbor-welcome-note-generator",
    name: "Neighbor Welcome Note Generator",
    tagline: "A friendly way to say hello to someone new.",
    description:
      "Free AI welcome note generator. Get a warm, friendly note to welcome a new neighbor.",
    category: "Home & DIY",
    resultCount: 5,
    maxTokens: 260,
    inputFields: [
      {
        name: "context",
        label: "Context (optional)",
        placeholder: "e.g. moved in next door last week, has kids around the same age as mine",
        type: "text",
      },
    ],
    howTo: [
      "Add any context you know about your new neighbor.",
      "Generate a welcome note.",
      "Deliver it with a small gift or on its own.",
    ],
    faq: [
      {
        question: "Should I include my contact info?",
        answer: "It's a nice touch — add your name and a way to reach you if you want to leave the door open for future contact.",
      },
      {
        question: "Is this too much if I don't know them at all?",
        answer: "Not at all — these are written to be warm without being overly familiar, appropriate for a first hello.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing short, warm welcome notes for a new neighbor, friendly but not overly familiar, 30-50 words each. You respond only with a numbered list — no preamble.",
      user: `Generate 5 welcome note options for a new neighbor. Context: "${values.context || "no additional context"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "daily-affirmation-generator",
    name: "Daily Affirmation Generator",
    tagline: "A short reset to start the day right.",
    description:
      "Free AI daily affirmation generator. Enter a focus area to get short, grounded affirmations.",
    category: "Productivity & Self-Improvement",
    resultCount: 10,
    maxTokens: 220,
    inputFields: [
      {
        name: "focus",
        label: "What's your focus today?",
        placeholder: "e.g. confidence at work, staying calm under pressure",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you want to focus on.",
      "Generate short affirmations.",
      "Say or write your favorite each morning.",
    ],
    faq: [
      {
        question: "Do affirmations actually work?",
        answer: "They're most effective paired with real action — think of them as a mindset primer, not a fix on their own.",
      },
      {
        question: "How long should an affirmation be?",
        answer: "Short and present-tense, generally under 15 words, so it's easy to remember and repeat.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a mindset coach who writes short, believable, present-tense daily affirmations (not unrealistic claims). You respond only with a numbered list — no preamble.",
      user: `Generate 10 daily affirmations focused on: "${values.focus}". Return only a numbered list.`,
    }),
  },
  {
    slug: "habit-tracker-idea-generator",
    name: "Habit Tracker Idea Generator",
    tagline: "Habits worth tracking, matched to your goal.",
    description:
      "Free AI habit tracker generator. Enter your goal to get a list of specific, trackable habits.",
    category: "Productivity & Self-Improvement",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "goal",
        label: "Your goal",
        placeholder: "e.g. improve my sleep, get healthier, be more productive at work",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your goal.",
      "Generate a list of specific, trackable habits.",
      "Pick 2-3 to start tracking — trying to track too many at once rarely sticks.",
    ],
    faq: [
      {
        question: "How many habits should I track at once?",
        answer: "Start with 2-3 — trying to build too many habits simultaneously usually leads to dropping all of them.",
      },
      {
        question: "Are these habits measurable?",
        answer: "Yes — each is written to be a clear yes/no or countable action so it's easy to track daily.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a habit-formation coach who suggests specific, measurable daily/weekly habits tied to a stated goal (not vague advice like 'be healthier'). You respond only with a numbered list — no preamble.",
      user: `Generate 8 specific, trackable habit ideas for this goal: "${values.goal}". Return only a numbered list.`,
    }),
  },
  {
    slug: "goal-setting-worksheet-generator",
    name: "Goal-Setting Worksheet Generator",
    tagline: "Turn a vague goal into a concrete plan.",
    description:
      "Free AI goal-setting generator. Enter your goal to get a structured worksheet breaking it into concrete steps.",
    category: "Productivity & Self-Improvement",
    resultCount: 1,
    maxTokens: 500,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "goal",
        label: "Your goal",
        placeholder: "e.g. run a half marathon, launch a side business",
        type: "text",
        required: true,
      },
      {
        name: "timeframe",
        label: "Timeframe",
        placeholder: "e.g. 6 months",
        type: "text",
      },
    ],
    howTo: [
      "Enter your goal and rough timeframe.",
      "Generate a structured breakdown (milestones, first steps, potential obstacles).",
      "Fill in your own specific dates and commit to the first step.",
    ],
    faq: [
      {
        question: "Does this guarantee I'll hit the goal?",
        answer: "No — it's a planning structure to make the goal concrete; consistency and follow-through are on you.",
      },
      {
        question: "What framework does this use?",
        answer: "It breaks the goal into milestones, immediate next steps, and likely obstacles — a practical structure, not a specific branded method.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a goal-setting coach who breaks a goal into: Milestones, First 3 steps to take this week, and Likely obstacles + how to handle them. No markdown headers, plain section labels.",
      user: `Build a goal-setting breakdown for: "${values.goal}". Timeframe: ${values.timeframe || "not specified"}.`,
    }),
  },
  {
    slug: "time-blocking-schedule-generator",
    name: "Time-Blocking Schedule Generator",
    tagline: "A realistic daily schedule built around your priorities.",
    description:
      "Free AI time-blocking generator. Enter your priorities to get a suggested time-blocked daily schedule.",
    category: "Productivity & Self-Improvement",
    resultCount: 1,
    maxTokens: 480,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "priorities",
        label: "Today's priorities",
        placeholder: "e.g. deep work on a proposal, gym, 2 client calls, family dinner",
        type: "text",
        required: true,
      },
      {
        name: "wakeTime",
        label: "Wake-up time (optional)",
        placeholder: "e.g. 6:30am",
        type: "text",
      },
    ],
    howTo: [
      "List your priorities and tasks for the day.",
      "Add your wake-up time if you want the schedule anchored to it.",
      "Generate a suggested time-blocked schedule and adjust to your reality.",
    ],
    faq: [
      {
        question: "Does this account for my actual meetings?",
        answer: "No — it builds a reasonable schedule around what you list; slot in fixed meetings yourself and adjust blocks around them.",
      },
      {
        question: "Is time-blocking better than a to-do list?",
        answer: "Many people find it reduces overcommitment since it forces you to fit tasks into real hours — try it and see what works for you.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a productivity coach who builds realistic time-blocked daily schedules, listing time ranges with the task assigned, including breaks and buffer time. No markdown headers.",
      user: `Build a time-blocked schedule. Priorities: "${values.priorities}". Wake-up time: ${values.wakeTime || "7:00am"}.`,
    }),
  },
  {
    slug: "journal-prompt-generator",
    name: "Journal Prompt Generator",
    tagline: "Prompts that go deeper than 'how was your day.'",
    description:
      "Free AI journal prompt generator. Enter a theme to get thoughtful, specific journaling prompts.",
    category: "Productivity & Self-Improvement",
    resultCount: 10,
    maxTokens: 300,
    inputFields: [
      {
        name: "theme",
        label: "Theme",
        type: "select",
        options: ["Self-reflection", "Gratitude", "Goal clarity", "Processing a hard day", "Creativity"],
      },
    ],
    howTo: [
      "Pick a theme for today's journaling.",
      "Generate prompt options.",
      "Pick one and write freely for 10-15 minutes.",
    ],
    faq: [
      {
        question: "Are these one-word prompts or full questions?",
        answer: "Full, specific questions — they're designed to prompt real reflection, not just a single word to riff on.",
      },
      {
        question: "Can I reuse these prompts?",
        answer: "Yes — your answer to the same prompt often changes over time, so revisiting one months later can be valuable.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a journaling coach who writes specific, thought-provoking journal prompts (not generic 'how do you feel today'). You respond only with a numbered list — no preamble.",
      user: `Generate 10 journal prompts on the theme: ${values.theme || "Self-reflection"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "new-year-resolution-generator",
    name: "New Year's Resolution Generator",
    tagline: "Resolutions specific enough to actually keep.",
    description:
      "Free AI resolution generator. Enter your focus area to get specific, realistic resolution ideas.",
    category: "Productivity & Self-Improvement",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "focus",
        label: "Focus area",
        placeholder: "e.g. health, finances, relationships, career",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your focus area for the new year.",
      "Generate specific resolution ideas.",
      "Pick one, break it into monthly milestones, and revisit it regularly.",
    ],
    faq: [
      {
        question: "Why do most resolutions fail?",
        answer: "Usually because they're too vague or too many at once — these are written to be specific and singular, which helps.",
      },
      {
        question: "Should I pick more than one resolution?",
        answer: "Focusing on one or two at a time tends to work better than a long list you can't realistically maintain.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a coach who writes specific, actionable resolution ideas (not vague ones like 'get healthy') for a given focus area. You respond only with a numbered list — no preamble.",
      user: `Generate 8 specific New Year's resolution ideas for the focus area: "${values.focus}". Return only a numbered list.`,
    }),
  },
  {
    slug: "facebook-ad-headline-generator",
    name: "Facebook Ad Headline Generator",
    tagline: "Headlines that stop the scroll.",
    description:
      "Free AI Facebook ad headline generator. Enter your offer to get scroll-stopping headline options.",
    category: "Marketing",
    resultCount: 10,
    maxTokens: 260,
    inputFields: [
      {
        name: "offer",
        label: "Your offer or product",
        placeholder: "e.g. a 30-day fitness challenge app",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your offer or product.",
      "Generate headline options.",
      "Use your favorite as the primary text or headline in Meta Ads Manager.",
    ],
    faq: [
      {
        question: "What's the character limit for Facebook ad headlines?",
        answer: "Facebook recommends around 40 characters for headlines to avoid truncation — most of these fit that guideline.",
      },
      {
        question: "Should I A/B test multiple headlines?",
        answer: "Yes — running 2-3 of these against each other is a quick way to find what resonates with your audience.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Facebook/Meta ads copywriter who writes short, scroll-stopping headlines (under 40 characters) that create curiosity or highlight a clear benefit. You respond only with a numbered list — no preamble.",
      user: `Generate 10 Facebook ad headline options for: "${values.offer}". Return only a numbered list.`,
    }),
  },
  {
    slug: "google-ads-headline-generator",
    name: "Google Ads Headline Generator",
    tagline: "Headlines that fit and convert.",
    description:
      "Free AI Google Ads headline generator. Enter your offer to get search-ad-ready headline options.",
    category: "Marketing",
    resultCount: 12,
    maxTokens: 280,
    inputFields: [
      {
        name: "offer",
        label: "Your offer or product",
        placeholder: "e.g. same-day plumbing repair service",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your offer or product.",
      "Generate headline options.",
      "Use your favorites across Google Ads' multiple headline slots.",
    ],
    faq: [
      {
        question: "What's the character limit for Google Ads headlines?",
        answer: "30 characters per headline — these are written to fit within that limit.",
      },
      {
        question: "How many headlines can I add to one ad?",
        answer: "Google allows up to 15 — using several of these together (mixing benefits, offers, and CTAs) tends to perform best.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a Google Ads specialist who writes headlines under 30 characters each, mixing benefit-led, offer-led, and CTA-led angles. You respond only with a numbered list — no preamble.",
      user: `Generate 12 Google Ads headline options (each under 30 characters) for: "${values.offer}". Return only a numbered list.`,
    }),
  },
  {
    slug: "retargeting-ad-copy-generator",
    name: "Retargeting Ad Copy Generator",
    tagline: "Bring back the visitors who didn't convert.",
    description:
      "Free AI retargeting ad copy generator. Enter your offer to get ad copy aimed at past visitors.",
    category: "Marketing",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "offer",
        label: "Product/offer",
        placeholder: "e.g. an online course on freelance writing",
        type: "text",
        required: true,
      },
      {
        name: "incentive",
        label: "Incentive (optional)",
        placeholder: "e.g. 15% off if you complete checkout",
        type: "text",
      },
    ],
    howTo: [
      "Describe the product or offer people saw but didn't buy.",
      "Add an incentive if you're offering one.",
      "Generate and use in your retargeting campaign.",
    ],
    faq: [
      {
        question: "How is retargeting copy different from cold ad copy?",
        answer: "It can reference that they've already shown interest (e.g. 'still thinking it over?') instead of introducing the product cold.",
      },
      {
        question: "Do I need a discount for retargeting to work?",
        answer: "No — some of these lead with a reminder of value or urgency instead of requiring a discount.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a performance marketer who writes retargeting ad copy that acknowledges prior interest and nudges toward conversion. Each result is 1-2 short sentences. You respond only with a numbered list — no preamble.",
      user: `Generate 6 retargeting ad copy options. Offer: "${values.offer}". Incentive: "${values.incentive || "none"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "influencer-campaign-brief-generator",
    name: "Influencer Campaign Brief Generator",
    tagline: "A clear brief creators actually want to work from.",
    description:
      "Free AI influencer brief generator. Enter your campaign goal to get a structured creator brief.",
    category: "Marketing",
    resultCount: 1,
    maxTokens: 480,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "campaign",
        label: "Campaign goal & product",
        placeholder: "e.g. promote a new skincare serum launch to beauty micro-influencers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your campaign goal and the product.",
      "Generate a structured brief.",
      "Fill in your specific budget, timeline, and deliverable count.",
    ],
    faq: [
      {
        question: "Does this include a specific budget?",
        answer: "No — it leaves a placeholder; add your own budget and compensation structure.",
      },
      {
        question: "Does this include a list of dos and don'ts?",
        answer: "Yes — it includes a section for key messaging and things to avoid mentioning.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an influencer marketing manager writing a campaign brief with sections: Campaign Goal, Key Messaging, Content Do's, Content Don'ts, Deliverables (placeholder), Timeline (placeholder). No markdown headers, plain section labels.",
      user: `Write an influencer campaign brief for: "${values.campaign}".`,
    }),
  },
  {
    slug: "brand-voice-guideline-generator",
    name: "Brand Voice Guideline Generator",
    tagline: "Define how your brand sounds, once and for all.",
    description:
      "Free AI brand voice generator. Describe your brand to get a starter brand voice guideline document.",
    category: "Marketing",
    resultCount: 1,
    maxTokens: 500,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "brand",
        label: "Describe your brand",
        placeholder: "e.g. a playful, sustainable kids' clothing brand",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your brand and who it's for.",
      "Generate a starter voice guideline.",
      "Share with your team or freelancers as a quick reference.",
    ],
    faq: [
      {
        question: "Does this replace a full brand style guide?",
        answer: "No — it's a starting point for tone and voice specifically. A full style guide would also cover visuals, logo use, etc.",
      },
      {
        question: "What does this actually include?",
        answer: "Voice traits (e.g. 'warm, not corporate'), words to use, words to avoid, and a sample sentence in the brand's voice.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a brand strategist writing a starter brand voice guide with sections: Voice Traits (3-4 adjectives with explanation), Words We Use, Words We Avoid, Example Sentence. No markdown headers, plain section labels.",
      user: `Write a brand voice guideline for: "${values.brand}".`,
    }),
  },
  {
    slug: "customer-persona-generator",
    name: "Customer Persona Generator",
    tagline: "A vivid buyer persona to focus your marketing.",
    description:
      "Free AI customer persona generator. Describe your product to get a detailed target customer persona.",
    category: "Marketing",
    resultCount: 1,
    maxTokens: 500,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "product",
        label: "Your product & who you think buys it",
        placeholder: "e.g. a meal planning app, mostly busy parents",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product and a rough idea of who buys it.",
      "Generate a detailed persona.",
      "Use it to guide your messaging, ad targeting, and content decisions.",
    ],
    faq: [
      {
        question: "Is this based on real customer data?",
        answer: "No — it's a plausible starting persona based on your description. Validate and refine it with real customer research over time.",
      },
      {
        question: "Should I have more than one persona?",
        answer: "Many businesses do have 2-3 — generate one for each distinct customer segment you serve.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a marketing strategist who builds vivid, specific customer personas including a name, demographics, goals, frustrations, and where they spend time online. No markdown headers, plain section labels.",
      user: `Build a customer persona for: "${values.product}".`,
    }),
  },
  {
    slug: "refund-request-response-generator",
    name: "Refund Request Response Generator",
    tagline: "Handle refund requests clearly and consistently.",
    description:
      "Free AI refund response generator. Describe the situation to get a clear, professional reply.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "situation",
        label: "Situation",
        placeholder: "e.g. customer wants a refund on a used product past the return window",
        type: "text",
        required: true,
      },
      {
        name: "decision",
        label: "Decision",
        type: "select",
        options: ["Approving the refund", "Denying the refund", "Offering an alternative (credit/exchange)"],
      },
    ],
    howTo: [
      "Describe the refund situation.",
      "Pick the decision you're communicating.",
      "Generate and personalize with order details before sending.",
    ],
    faq: [
      {
        question: "Does this follow my company's specific refund policy?",
        answer: "No — plug in your policy's specific terms; this generates the tone and structure of the response.",
      },
      {
        question: "How do I say no without upsetting the customer?",
        answer: "The denial option leads with empathy and a clear reason before the decision — that structure tends to land better than a blunt no.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer support lead writing clear, empathetic refund response emails. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 refund response options. Situation: "${values.situation}". Decision: ${values.decision || "Approving the refund"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "angry-customer-response-generator",
    name: "Angry Customer Response Generator",
    tagline: "De-escalate first, solve second.",
    description:
      "Free AI angry customer response generator. Describe the complaint to get a calm, de-escalating reply.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "complaint",
        label: "Their complaint",
        placeholder: "e.g. package arrived broken, this is the second time, very frustrated",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the customer's complaint.",
      "Generate calm, de-escalating response options.",
      "Add specific resolution details before sending.",
    ],
    faq: [
      {
        question: "Should I apologize even if we didn't do anything wrong?",
        answer: "You can acknowledge their frustration and experience without admitting fault — these responses lead with empathy either way.",
      },
      {
        question: "Should I offer compensation right away?",
        answer: "Not necessarily in the first message — sometimes acknowledging the issue and asking a clarifying question comes first.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer support lead who de-escalates angry customers by acknowledging frustration first, then addressing the issue calmly and professionally, never defensive. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 response options to this angry customer complaint: "${values.complaint}". Return only a numbered list.`,
    }),
  },
  {
    slug: "support-macro-generator",
    name: "Support Macro Generator",
    tagline: "Canned replies for the tickets you see every day.",
    description:
      "Free AI support macro generator. Describe the common issue to get a reusable canned reply.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 300,
    inputFields: [
      {
        name: "issue",
        label: "Common issue",
        placeholder: "e.g. customer forgot their password and can't log in",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the common support issue.",
      "Generate macro/canned reply options.",
      "Save your favorite in your helpdesk tool for reuse.",
    ],
    faq: [
      {
        question: "Should macros feel robotic?",
        answer: "No — these are written to sound human, with a placeholder for the customer's name so it doesn't feel copy-pasted.",
      },
      {
        question: "Can I edit these after saving them?",
        answer: "Yes — treat these as a strong starting draft and adjust wording to match your brand's specific tone.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a support team lead writing reusable canned reply macros with a [Name] placeholder for personalization, clear and warm in tone. You respond only with a numbered list — no preamble.",
      user: `Generate 4 support macro options for this common issue: "${values.issue}". Return only a numbered list.`,
    }),
  },
  {
    slug: "customer-satisfaction-survey-question-generator",
    name: "Customer Satisfaction Survey Question Generator",
    tagline: "Ask questions that produce useful answers.",
    description:
      "Free AI survey question generator. Enter your business to get a set of customer satisfaction survey questions.",
    category: "Customer Support",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "business",
        label: "Your business",
        placeholder: "e.g. an online furniture store",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business.",
      "Generate survey question options.",
      "Pick 4-6 for your survey — too many questions hurts completion rates.",
    ],
    faq: [
      {
        question: "How many questions should a survey have?",
        answer: "4-8 is a common sweet spot — enough for useful data without high drop-off.",
      },
      {
        question: "Should these be rating scale or open-ended?",
        answer: "A mix works well — this includes some rating-style and some open-ended questions for qualitative detail.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer experience researcher who writes clear, non-leading survey questions, a mix of rating-scale and open-ended. You respond only with a numbered list — no preamble.",
      user: `Generate 8 customer satisfaction survey questions for: "${values.business}". Return only a numbered list.`,
    }),
  },
  {
    slug: "escalation-email-generator",
    name: "Escalation Email Generator",
    tagline: "Escalate an issue clearly, without the finger-pointing.",
    description:
      "Free AI escalation email generator. Describe the issue to get a clear, professional escalation message.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "issue",
        label: "Issue to escalate",
        placeholder: "e.g. a customer's order has been delayed 3 weeks with no update from the warehouse",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the issue you need to escalate.",
      "Generate escalation message options.",
      "Send to the appropriate team or manager, with relevant ticket/order info attached.",
    ],
    faq: [
      {
        question: "Should I name specific people at fault?",
        answer: "Focus on the issue and what's needed to resolve it, rather than assigning blame — that gets faster action.",
      },
      {
        question: "Should I mark this as urgent?",
        answer: "Only if it truly is — reserve urgent flags for genuinely time-sensitive issues so they retain their weight.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a support team lead writing clear, solution-focused escalation emails that state the issue, impact, and what's needed, without blame language. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 escalation email options for this issue: "${values.issue}". Return only a numbered list.`,
    }),
  },
  {
    slug: "salary-negotiation-script-generator",
    name: "Salary Negotiation Script Generator",
    tagline: "Ask for more, confidently and professionally.",
    description:
      "Free AI salary negotiation generator. Enter your situation to get a confident negotiation script.",
    category: "Career",
    resultCount: 4,
    maxTokens: 380,
    inputFields: [
      {
        name: "situation",
        label: "Your situation",
        placeholder: "e.g. offered $75k, market rate is closer to $85k, 5 years experience",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your offer and why you think you deserve more.",
      "Generate negotiation script options.",
      "Practice your favorite aloud before the actual conversation.",
    ],
    faq: [
      {
        question: "Should I negotiate over email or in person?",
        answer: "These work for either — for email, use as-is; for a call, use it as talking points rather than reading verbatim.",
      },
      {
        question: "Is it risky to negotiate?",
        answer: "Most employers expect it and rarely rescind offers over a reasonable, professional counter — going in prepared reduces the risk further.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach who writes confident, professional salary negotiation scripts, backed by a clear reason (market rate, experience, competing offer), never apologetic. You respond only with a numbered list — no preamble.",
      user: `Generate 4 salary negotiation script options for this situation: "${values.situation}". Return only a numbered list.`,
    }),
  },
  {
    slug: "thank-you-email-after-interview-generator",
    name: "Post-Interview Thank-You Email Generator",
    tagline: "Stand out with a thoughtful follow-up.",
    description:
      "Free AI post-interview thank-you generator. Enter the interview details to get a genuine, memorable follow-up.",
    category: "Career",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "details",
        label: "Interview details",
        placeholder: "e.g. interviewed for marketing manager role, discussed their new product launch",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the role and something specific discussed in the interview.",
      "Generate thank-you email options.",
      "Send within 24 hours of the interview.",
    ],
    faq: [
      {
        question: "How soon should I send this?",
        answer: "Within 24 hours is standard — sooner shows enthusiasm without seeming rushed.",
      },
      {
        question: "Should I send one to each interviewer?",
        answer: "Yes, if you spoke to multiple people — personalize each one with something specific from that conversation.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach writing genuine, specific post-interview thank-you emails that reference actual conversation details, not generic gratitude. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 thank-you email options. Interview details: "${values.details}". Return only a numbered list.`,
    }),
  },
  {
    slug: "networking-message-generator",
    name: "Networking Message Generator",
    tagline: "Reach out without sounding like a form letter.",
    description:
      "Free AI networking message generator. Enter your goal to get a genuine-sounding outreach message.",
    category: "Career",
    resultCount: 5,
    maxTokens: 280,
    inputFields: [
      {
        name: "goal",
        label: "Why you're reaching out",
        placeholder: "e.g. asking for advice on breaking into product management",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe why you're reaching out and to whom (broadly).",
      "Generate message options.",
      "Personalize with a specific detail about the person before sending.",
    ],
    faq: [
      {
        question: "Should I ask for a job directly?",
        answer: "Usually not in the first message — these lead with a smaller ask (advice, a short call) which tends to get better response rates.",
      },
      {
        question: "How long should a networking message be?",
        answer: "Short — under 100 words respects the other person's time and gets read more often.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach writing short, genuine networking outreach messages with a small, specific ask, under 100 words. You respond only with a numbered list — no preamble.",
      user: `Generate 5 networking message options. Goal: "${values.goal}". Return only a numbered list.`,
    }),
  },
  {
    slug: "career-change-cover-letter-generator",
    name: "Career Change Cover Letter Generator",
    tagline: "Frame a career pivot as an asset, not a gap.",
    description:
      "Free AI career change cover letter generator. Enter your background to get an opener that frames your pivot well.",
    category: "Career",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "background",
        label: "Your background & target role",
        placeholder: "e.g. 8 years in teaching, applying for instructional design roles",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your previous field and the role you're targeting.",
      "Generate cover letter opener options that frame your transition as a strength.",
      "Continue the letter with your specific transferable skills and achievements.",
    ],
    faq: [
      {
        question: "Should I apologize for changing careers?",
        answer: "No — these are written to frame the transition as intentional and valuable, not as something to apologize for.",
      },
      {
        question: "Does this write the whole cover letter?",
        answer: "It generates a strong opening paragraph; continue with your specific transferable skills and why this role/company.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach who writes confident cover letter openers for career changers, framing the transition as a deliberate asset backed by transferable skills. You respond only with a numbered list — no preamble.",
      user: `Generate 3 cover letter opener options for a career changer. Background/target role: "${values.background}". Return only a numbered list.`,
    }),
  },
  {
    slug: "career-update-linkedin-post-generator",
    name: "Career Update LinkedIn Post Generator",
    tagline: "Announce a new role or milestone the right way.",
    description:
      "Free AI LinkedIn career update generator. Enter your news to get a genuine, well-received announcement post.",
    category: "Career",
    resultCount: 4,
    maxTokens: 380,
    inputFields: [
      {
        name: "news",
        label: "Your news",
        placeholder: "e.g. starting a new job as Senior Product Designer at Acme",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your career news or milestone.",
      "Generate post options.",
      "Post to LinkedIn and thank anyone relevant in the comments.",
    ],
    faq: [
      {
        question: "Should I tag my new company/manager?",
        answer: "Yes, if appropriate — tagging relevant people/pages increases visibility and is standard practice for these posts.",
      },
      {
        question: "Should I thank people in the post itself?",
        answer: "A brief thank-you is common and well-received — these include a natural spot for it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing genuine, well-received LinkedIn career update posts (new job, promotion, work anniversary) that don't feel like a humble-brag. You respond only with a numbered list — no preamble.",
      user: `Generate 4 LinkedIn career update post options for: "${values.news}". Return only a numbered list.`,
    }),
  },
  {
    slug: "business-plan-executive-summary-generator",
    name: "Business Plan Executive Summary Generator",
    tagline: "The one page that gets the rest of the plan read.",
    description:
      "Free AI executive summary generator. Enter your business idea to get a structured executive summary draft.",
    category: "Business",
    resultCount: 1,
    maxTokens: 480,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "idea",
        label: "Describe your business",
        placeholder: "e.g. a subscription meal kit for people with dietary restrictions",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business idea in a few sentences.",
      "Generate an executive summary draft.",
      "Refine with your real numbers before using it in an actual plan or pitch.",
    ],
    faq: [
      {
        question: "How long should an executive summary be?",
        answer: "Typically one page — this draft is sized to roughly that length.",
      },
      {
        question: "Does this include financial projections?",
        answer: "No — it covers the narrative summary; add your specific financials as a separate section.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business consultant who writes clear, compelling executive summaries covering the problem, solution, market, and business model at a high level, around 250-300 words.",
      user: `Write an executive summary for this business: "${values.idea}".`,
    }),
  },
  {
    slug: "partnership-proposal-email-generator",
    name: "Partnership Proposal Email Generator",
    tagline: "Pitch a partnership that benefits both sides.",
    description:
      "Free AI partnership proposal generator. Enter the details to get a clear, mutually-focused pitch email.",
    category: "Business",
    resultCount: 4,
    maxTokens: 360,
    inputFields: [
      {
        name: "proposal",
        label: "Partnership idea",
        placeholder: "e.g. cross-promote each other's newsletters, combined audience of 50k",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the partnership idea and what's in it for both sides.",
      "Generate email options.",
      "Personalize the greeting and send.",
    ],
    faq: [
      {
        question: "Should I mention numbers/metrics?",
        answer: "Yes, if you have them — concrete numbers (audience size, engagement) make the proposal far more credible.",
      },
      {
        question: "How long should this email be?",
        answer: "Keep it under 150 words — a clear, specific ask gets read faster than a long pitch.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business development professional writing partnership proposal emails that clearly show mutual benefit, under 150 words. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 partnership proposal email options. Idea: "${values.proposal}". Return only a numbered list.`,
    }),
  },
  {
    slug: "company-values-generator",
    name: "Company Values Generator",
    tagline: "Values that actually mean something, not wall art.",
    description:
      "Free AI company values generator. Describe your company culture to get a set of specific, meaningful values.",
    category: "Business",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "culture",
        label: "Describe your culture/priorities",
        placeholder: "e.g. fast-moving startup, values transparency and customer obsession",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your company's culture and priorities.",
      "Generate a set of specific values.",
      "Discuss with your team before finalizing — values work best when co-created.",
    ],
    faq: [
      {
        question: "How many company values should we have?",
        answer: "Most companies settle on 4-6 — enough to be meaningful, few enough to actually remember.",
      },
      {
        question: "Are these generic corporate buzzwords?",
        answer: "Each is written with a one-line explanation of what it actually means in practice, to avoid empty buzzwords.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an organizational culture consultant who defines specific, non-generic company values, each as a short name followed by one sentence explaining what it means in practice. No markdown headers.",
      user: `Generate a set of 5 company values for a culture described as: "${values.culture}".`,
    }),
  },
  {
    slug: "vendor-negotiation-email-generator",
    name: "Vendor Negotiation Email Generator",
    tagline: "Negotiate better terms without burning the relationship.",
    description:
      "Free AI vendor negotiation generator. Enter the details to get a professional negotiation email.",
    category: "Business",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "context",
        label: "What you're negotiating",
        placeholder: "e.g. asking for a 10% discount on annual software renewal",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you're negotiating and why.",
      "Generate email options.",
      "Send and be ready to discuss specifics on a call if needed.",
    ],
    faq: [
      {
        question: "Should I mention competitor pricing?",
        answer: "If you genuinely have a comparable quote, it can help — but only reference it if it's true and specific.",
      },
      {
        question: "Is it risky to ask for a discount?",
        answer: "Rarely — most vendors expect negotiation, especially at renewal time, and a professional, respectful ask costs you nothing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a procurement professional writing respectful, clear vendor negotiation emails that state the ask directly with a brief reason. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 vendor negotiation email options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "short-story-opening-line-generator",
    name: "Short Story Opening Line Generator",
    tagline: "The first line that hooks a reader in.",
    description:
      "Free AI opening line generator. Enter a genre to get compelling first lines for a short story.",
    category: "Writing",
    resultCount: 10,
    maxTokens: 300,
    inputFields: [
      {
        name: "genre",
        label: "Genre",
        placeholder: "e.g. mystery, sci-fi, literary fiction",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the genre you're writing in.",
      "Generate opening line options.",
      "Use one as-is or as inspiration to build your own scene around.",
    ],
    faq: [
      {
        question: "Can I use these commercially in my own writing?",
        answer: "Yes — treat them as your own once you've picked and adapted one; there's no attribution requirement.",
      },
      {
        question: "Will these match my story's actual plot?",
        answer: "They're genre-appropriate hooks, not plot-specific — you'll build the story around whichever line you choose.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a novelist who writes compelling, varied opening lines for short stories in a given genre, each creating immediate intrigue or tension. You respond only with a numbered list — no preamble.",
      user: `Generate 10 opening line options for a ${values.genre} short story. Return only a numbered list.`,
    }),
  },
  {
    slug: "poem-generator",
    name: "Poem Generator",
    tagline: "An original poem on any theme, in any style.",
    description:
      "Free AI poem generator. Enter a theme and style to get an original poem.",
    category: "Writing",
    resultCount: 1,
    maxTokens: 400,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "theme",
        label: "Theme",
        placeholder: "e.g. missing an old friend, the changing seasons",
        type: "text",
        required: true,
      },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: ["Free verse", "Rhyming", "Haiku", "Sonnet-inspired"],
      },
    ],
    howTo: [
      "Describe the theme or feeling for your poem.",
      "Pick a style.",
      "Generate and use as-is or as a starting draft to personalize.",
    ],
    faq: [
      {
        question: "Can I use this for a wedding or card?",
        answer: "Yes — many people use generated poems as a base for cards, toasts, or personal messages, then personalize further.",
      },
      {
        question: "Is this a strict, technically perfect sonnet/haiku?",
        answer: "Sonnet-inspired and haiku options follow the general structure/spirit of the form rather than rigid classical rules.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a poet who writes original, evocative poems in the requested style, avoiding cliché phrasing where possible.",
      user: `Write a poem about "${values.theme}" in this style: ${values.style || "Free verse"}.`,
    }),
  },
  {
    slug: "writing-prompt-generator",
    name: "Writing Prompt Generator",
    tagline: "Prompts that actually spark a story.",
    description:
      "Free AI writing prompt generator. Enter a genre to get creative, specific story prompts.",
    category: "Writing",
    resultCount: 10,
    maxTokens: 340,
    inputFields: [
      {
        name: "genre",
        label: "Genre",
        placeholder: "e.g. fantasy, horror, contemporary drama",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter a genre or leave it broad.",
      "Generate writing prompt options.",
      "Pick one and set a timer to just start writing.",
    ],
    faq: [
      {
        question: "Are these prompts a full plot?",
        answer: "No — each is a specific starting situation or question, meant to spark your own story rather than dictate the whole plot.",
      },
      {
        question: "Can I use these for a writing group or class?",
        answer: "Yes — these work well for workshops, writing groups, or classroom creative writing exercises.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a creative writing teacher who writes specific, imaginative writing prompts (a situation or 'what if', not a full plot) for a given genre. You respond only with a numbered list — no preamble.",
      user: `Generate 10 writing prompts in the genre: "${values.genre}". Return only a numbered list.`,
    }),
  },
  {
    slug: "book-title-generator",
    name: "Book Title Generator",
    tagline: "A title readers will remember and pick up.",
    description:
      "Free AI book title generator. Describe your book to get memorable, genre-appropriate title options.",
    category: "Writing",
    resultCount: 10,
    maxTokens: 260,
    inputFields: [
      {
        name: "description",
        label: "What's your book about?",
        placeholder: "e.g. a memoir about rebuilding life after a divorce",
        type: "text",
        required: true,
      },
      {
        name: "genre",
        label: "Genre",
        placeholder: "e.g. memoir, thriller, romance",
        type: "text",
      },
    ],
    howTo: [
      "Describe what your book is about.",
      "Add the genre if it's not obvious from the description.",
      "Generate and check availability (as a book title and domain) before finalizing.",
    ],
    faq: [
      {
        question: "Can I trademark or copyright a book title?",
        answer: "Titles generally aren't copyrightable on their own, though very similar titles in the same genre are worth avoiding for market confusion reasons.",
      },
      {
        question: "Should the title include a subtitle?",
        answer: "Some non-fiction genres benefit from one — mention if you want a subtitle option included.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a publishing editor who writes memorable, genre-appropriate book titles. You respond only with a numbered list — no preamble.",
      user: `Generate 10 book title options. About: "${values.description}". Genre: ${values.genre || "not specified"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "author-bio-generator",
    name: "Author Bio Generator",
    tagline: "A bio for your book jacket, blog, or Amazon page.",
    description:
      "Free AI author bio generator. Enter your background to get a professional author bio.",
    category: "Writing",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "background",
        label: "Your background",
        placeholder: "e.g. debut novelist, former journalist, lives in Portland with two dogs",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your background and any relevant details.",
      "Generate bio options.",
      "Use on your book jacket, Amazon author page, or personal site.",
    ],
    faq: [
      {
        question: "Should I mention personal details like pets or hobbies?",
        answer: "A light personal touch at the end is common in author bios — it makes you relatable beyond just credentials.",
      },
      {
        question: "How long should an author bio be?",
        answer: "These are around 50-80 words — a common length for book jackets and author pages.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a publishing copywriter who writes warm, professional third-person author bios (50-80 words). You respond only with a numbered list — no preamble.",
      user: `Generate 4 author bio options. Background: "${values.background}". Return only a numbered list.`,
    }),
  },
  {
    slug: "would-you-rather-question-generator",
    name: "Would You Rather Question Generator",
    tagline: "Tough, funny, or wild dilemmas for any group.",
    description:
      "Free AI 'would you rather' generator. Pick a theme to get a batch of fun dilemma questions.",
    category: "Fun",
    resultCount: 10,
    maxTokens: 300,
    inputFields: [
      {
        name: "theme",
        label: "Theme",
        type: "select",
        options: ["Funny", "Tough choices", "Family-friendly", "Work-appropriate icebreaker"],
      },
    ],
    howTo: [
      "Pick a theme.",
      "Generate a batch of questions.",
      "Use for a party game, road trip, or team icebreaker.",
    ],
    faq: [
      {
        question: "Are these appropriate for kids?",
        answer: "Choose 'Family-friendly' for kid-safe options — other themes may include more mature or intense dilemmas.",
      },
      {
        question: "Can I use these at work?",
        answer: "The 'Work-appropriate icebreaker' theme is built specifically to be safe for a professional setting.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a party game writer who creates fun, genuinely tough or funny 'would you rather' dilemmas, formatted as 'Would you rather X or Y?'. You respond only with a numbered list — no preamble.",
      user: `Generate 10 'would you rather' questions with this theme: ${values.theme || "Funny"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "trivia-question-generator",
    name: "Trivia Question Generator",
    tagline: "Ready-made trivia questions with answers included.",
    description:
      "Free AI trivia generator. Pick a category to get trivia questions with answers, ready for game night.",
    category: "Fun",
    resultCount: 10,
    maxTokens: 400,
    inputFields: [
      {
        name: "category",
        label: "Category",
        placeholder: "e.g. 90s movies, world geography, science",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter a trivia category.",
      "Generate questions with answers.",
      "Use for trivia night, a party, or a classroom quiz.",
    ],
    faq: [
      {
        question: "Are the answers included?",
        answer: "Yes — each question is followed by its answer, formatted as 'Question — Answer: X'.",
      },
      {
        question: "How hard are these questions?",
        answer: "A general mix of difficulty — regenerate with a more specific category if you want a particular difficulty level.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a trivia writer who creates accurate trivia questions with answers, formatted as 'Question — Answer: X' for each item. You respond only with a numbered list — no preamble.",
      user: `Generate 10 trivia questions with answers for the category: "${values.category}". Return only a numbered list.`,
    }),
  },
  {
    slug: "riddle-generator",
    name: "Riddle Generator",
    tagline: "Riddles with the answer revealed.",
    description:
      "Free AI riddle generator. Pick a difficulty to get riddles with their answers included.",
    category: "Fun",
    resultCount: 8,
    maxTokens: 350,
    inputFields: [
      {
        name: "difficulty",
        label: "Difficulty",
        type: "select",
        options: ["Easy (kids)", "Medium", "Hard/tricky"],
      },
    ],
    howTo: [
      "Pick a difficulty level.",
      "Generate riddles with answers.",
      "Use for a party, classroom, or scavenger hunt.",
    ],
    faq: [
      {
        question: "Are the answers shown right away?",
        answer: "Yes, each is formatted as 'Riddle — Answer: X' — cover the answer if you want to guess first.",
      },
      {
        question: "Can I use these for a scavenger hunt?",
        answer: "Yes — the Medium or Hard options work especially well as scavenger hunt clues.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a riddle writer who creates clever riddles with their answers, formatted as 'Riddle — Answer: X' for each item, matched to the requested difficulty. You respond only with a numbered list — no preamble.",
      user: `Generate 8 riddles with answers at this difficulty: ${values.difficulty || "Medium"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "two-truths-and-a-lie-generator",
    name: "Two Truths and a Lie Generator",
    tagline: "Statement sets ready for your next icebreaker.",
    description:
      "Free AI two truths and a lie generator. Enter a topic to get ready-made statement sets for the classic game.",
    category: "Fun",
    resultCount: 5,
    maxTokens: 380,
    inputFields: [
      {
        name: "topic",
        label: "Topic (optional)",
        placeholder: "e.g. travel, work, general fun facts",
        type: "text",
      },
    ],
    howTo: [
      "Add a topic if you want one, or leave general.",
      "Generate sets of three statements each.",
      "Use as a template — swap in your own real facts and one lie for the best game.",
    ],
    faq: [
      {
        question: "Should I use these exactly as generated?",
        answer: "These work best as a template/example — the game is most fun with statements that are actually true about the person playing.",
      },
      {
        question: "How many statement sets does this generate?",
        answer: "5 sets of three statements each, so you have several rounds ready to go.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a party game writer who creates example 'two truths and a lie' statement sets — each set is 3 plausible statements where one is clearly the odd one out once revealed, labeled Set 1, Set 2, etc. No markdown headers.",
      user: `Generate 5 example 'two truths and a lie' statement sets. Topic: "${values.topic || "general fun facts"}".`,
    }),
  },
  {
    slug: "compliment-generator",
    name: "Compliment Generator",
    tagline: "Genuine compliments for any occasion.",
    description:
      "Free AI compliment generator. Enter who it's for to get genuine, specific compliment ideas.",
    category: "Fun",
    resultCount: 8,
    maxTokens: 260,
    inputFields: [
      {
        name: "context",
        label: "Who's it for / occasion?",
        placeholder: "e.g. my best friend who just gave a great presentation",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe who the compliment is for and the occasion.",
      "Generate compliment options.",
      "Say or write your favorite — specific compliments land better than generic ones.",
    ],
    faq: [
      {
        question: "Are these generic or specific?",
        answer: "They're written to reference the specific context you gave, which tends to feel far more genuine than a generic compliment.",
      },
      {
        question: "Can I use these for a coworker?",
        answer: "Yes — just describe the work context and it'll adjust the tone to be professional and appropriate.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing genuine, specific compliments (not generic flattery) tied to the given context. You respond only with a numbered list — no preamble.",
      user: `Generate 8 compliment options for: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "meal-prep-plan-generator",
    name: "Meal Prep Plan Generator",
    tagline: "A week of meals, planned in one shot.",
    description:
      "Free AI meal prep plan generator. Enter your preferences to get a structured weekly meal prep plan.",
    category: "Health & Fitness",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "preferences",
        label: "Preferences & goals",
        placeholder: "e.g. high protein, vegetarian, 30 minutes or less to cook",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your dietary preferences and goals.",
      "Generate a weekly meal prep plan.",
      "Adjust portions and swap ingredients based on your own taste and dietary needs.",
    ],
    faq: [
      {
        question: "Is this a substitute for advice from a dietitian?",
        answer: "No — this is general meal planning inspiration, not personalized nutritional or medical advice.",
      },
      {
        question: "Does this include a grocery list?",
        answer: "It outlines meals by day — pair with our Recipe Generator for a specific shopping list per dish.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a meal prep coach who builds a simple weekly meal plan (breakfast, lunch, dinner) matched to stated preferences, favoring recipes that batch-cook well. Respond with days as labels followed by meals for that day. No markdown headers. Not medical or dietitian advice.",
      user: `Build a weekly meal prep plan. Preferences/goals: "${values.preferences}".`,
    }),
  },
  {
    slug: "yoga-class-description-generator",
    name: "Yoga Class Description Generator",
    tagline: "Descriptions that help students pick the right class.",
    description:
      "Free AI yoga class description generator. Enter your class style to get a clear, inviting description.",
    category: "Health & Fitness",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "style",
        label: "Class style & level",
        placeholder: "e.g. gentle restorative yoga, beginner-friendly, evening class",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the class style and who it's for.",
      "Generate description options.",
      "Use on your studio schedule or booking page.",
    ],
    faq: [
      {
        question: "Should I mention the physical intensity level?",
        answer: "Yes — being clear about intensity/level helps students self-select into the right class.",
      },
      {
        question: "Can I use this for an online class listing?",
        answer: "Yes — this works for both in-studio and virtual class descriptions.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a yoga studio writing warm, clear class descriptions that set expectations on intensity and who it's for. You respond only with a numbered list — no preamble.",
      user: `Generate 4 yoga class description options for: "${values.style}". Return only a numbered list.`,
    }),
  },
  {
    slug: "nutrition-tip-generator",
    name: "Nutrition Tip Generator",
    tagline: "Simple, realistic tips — no fad diets.",
    description:
      "Free AI nutrition tip generator. Enter a focus area to get simple, realistic nutrition tips.",
    category: "Health & Fitness",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "focus",
        label: "Focus area",
        placeholder: "e.g. eating more vegetables, reducing sugar cravings",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you're working on nutritionally.",
      "Generate simple, realistic tips.",
      "For medical or specific dietary needs, check with a registered dietitian or doctor.",
    ],
    faq: [
      {
        question: "Is this medical advice?",
        answer: "No — these are general wellness tips, not medical or clinical nutrition advice. Consult a professional for specific health conditions.",
      },
      {
        question: "Are these based on any specific diet plan?",
        answer: "No — they're general, sustainable habits rather than a specific branded diet.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a wellness writer who shares simple, realistic, non-restrictive nutrition tips (not fad diet advice), each under 25 words. Not medical advice. You respond only with a numbered list — no preamble.",
      user: `Generate 8 nutrition tips focused on: "${values.focus}". Return only a numbered list.`,
    }),
  },
  {
    slug: "fitness-challenge-name-generator",
    name: "Fitness Challenge Name Generator",
    tagline: "A name that gets people to actually sign up.",
    description:
      "Free AI fitness challenge name generator. Describe your challenge to get catchy, motivating name ideas.",
    category: "Health & Fitness",
    resultCount: 10,
    maxTokens: 240,
    inputFields: [
      {
        name: "challenge",
        label: "Describe the challenge",
        placeholder: "e.g. 30 days of daily walking, a summer strength challenge",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the fitness challenge.",
      "Generate name options.",
      "Use for your gym, app, or social media challenge.",
    ],
    faq: [
      {
        question: "Should the name include the duration?",
        answer: "Many effective challenge names do (e.g. '30-Day...') since it sets clear expectations upfront.",
      },
      {
        question: "Can I use this for a corporate wellness challenge?",
        answer: "Yes — just describe it as a workplace/corporate challenge in your input.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a fitness marketer who names motivating, catchy fitness challenges. You respond only with a numbered list — no preamble.",
      user: `Generate 10 fitness challenge name options for: "${values.challenge}". Return only a numbered list.`,
    }),
  },
  {
    slug: "meditation-script-generator",
    name: "Guided Meditation Script Generator",
    tagline: "A calming script for a short guided session.",
    description:
      "Free AI meditation script generator. Enter a focus to get a short guided meditation script.",
    category: "Health & Fitness",
    resultCount: 1,
    maxTokens: 1000,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "focus",
        label: "Focus",
        type: "select",
        options: ["Stress relief", "Better sleep", "Morning focus", "Gratitude"],
      },
      {
        name: "length",
        label: "Length",
        type: "select",
        options: ["3 minutes", "5 minutes", "10 minutes"],
      },
    ],
    howTo: [
      "Pick a focus for the meditation.",
      "Pick a rough length.",
      "Generate a script to read aloud slowly, or record yourself reading it.",
    ],
    faq: [
      {
        question: "Is this a substitute for professional mental health support?",
        answer: "No — this is a general relaxation tool, not therapy or medical treatment. Seek professional support for ongoing mental health concerns.",
      },
      {
        question: "How should I use the script?",
        answer: "Read it slowly aloud to yourself or someone else, pausing generously between sentences — or record it to play back.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a meditation teacher who writes calm, simple guided meditation scripts with natural pauses indicated by '...'. Not a substitute for professional mental health care.",
      user: `Write a guided meditation script. Focus: ${values.focus || "Stress relief"}. Length: ${values.length || "5 minutes"}.`,
    }),
  },
  {
    slug: "cocktail-recipe-generator",
    name: "Cocktail Recipe Generator",
    tagline: "An original recipe from whatever's on your bar cart.",
    description:
      "Free AI cocktail recipe generator. Enter your ingredients or mood to get an original cocktail recipe.",
    category: "Food & Restaurant",
    resultCount: 1,
    maxTokens: 500,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "base",
        label: "Base spirit or ingredients",
        placeholder: "e.g. gin, or 'whatever's citrusy and refreshing'",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter a base spirit or the vibe you're going for.",
      "Generate recipe options with ingredients and steps.",
      "Adjust quantities to taste.",
    ],
    faq: [
      {
        question: "Are these tested, classic recipes?",
        answer: "No — these are original suggestions to try and adjust, not verified classic bartender recipes.",
      },
      {
        question: "Can I request a non-alcoholic version?",
        answer: "Yes — mention 'mocktail' or 'non-alcoholic' in your input.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a bartender who creates original cocktail recipes with a name, ingredient list with measurements, and simple steps. Respond with each recipe as a labeled block (Recipe 1, Recipe 2, Recipe 3). No markdown headers.",
      user: `Create 3 cocktail recipe options based on: "${values.base}".`,
    }),
  },
  {
    slug: "recipe-generator",
    name: "Recipe Generator",
    tagline: "A full recipe from whatever's in your fridge.",
    description:
      "Free AI recipe generator. Enter your ingredients to get a complete, easy-to-follow recipe.",
    category: "Food & Restaurant",
    resultCount: 1,
    maxTokens: 550,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "ingredients",
        label: "Ingredients you have",
        placeholder: "e.g. chicken thighs, rice, bell peppers, soy sauce",
        type: "text",
        required: true,
      },
      {
        name: "cuisine",
        label: "Cuisine style (optional)",
        placeholder: "e.g. Thai, Italian, no preference",
        type: "text",
      },
    ],
    howTo: [
      "List the ingredients you have on hand.",
      "Add a cuisine style if you want one.",
      "Generate a full recipe with ingredient list and steps.",
    ],
    faq: [
      {
        question: "Will this account for food allergies?",
        answer: "Only if you mention them explicitly in your ingredients — always double-check ingredients against your own allergies.",
      },
      {
        question: "Does it use only the ingredients I listed?",
        answer: "It may suggest a few common pantry staples (salt, oil, etc.) alongside your ingredients — check the full list before cooking.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a home cooking expert who creates simple, complete recipes: a title, ingredient list with rough quantities, and numbered steps. No markdown headers.",
      user: `Create a recipe using: "${values.ingredients}". Cuisine style: ${values.cuisine || "no preference"}.`,
    }),
  },
  {
    slug: "restaurant-review-response-generator",
    name: "Restaurant Review Response Generator",
    tagline: "Respond to reviews like a restaurant that cares.",
    description:
      "Free AI restaurant review response generator. Enter the review to get a warm, professional reply.",
    category: "Food & Restaurant",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "review",
        label: "Summarize the review",
        placeholder: "e.g. 2 stars, said service was slow but food was good",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Summarize the review you're responding to.",
      "Generate response options.",
      "Post your favorite publicly under the review.",
    ],
    faq: [
      {
        question: "Should I respond to positive reviews too?",
        answer: "Yes — responding to positive reviews (briefly, warmly) shows engagement and is good practice, not just for complaints.",
      },
      {
        question: "Should I offer anything (discount, refund) publicly?",
        answer: "Better to invite them to contact you directly for resolution rather than negotiating specifics in a public reply.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a restaurant owner writing warm, professional responses to online reviews, acknowledging feedback genuinely without being defensive. You respond only with a numbered list — no preamble.",
      user: `Generate 4 response options to this review: "${values.review}". Return only a numbered list.`,
    }),
  },
  {
    slug: "catering-menu-description-generator",
    name: "Catering Menu Description Generator",
    tagline: "Menu copy that sells the event package.",
    description:
      "Free AI catering menu description generator. Enter your menu items to get appealing package descriptions.",
    category: "Food & Restaurant",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "menu",
        label: "Menu items / package",
        placeholder: "e.g. BBQ package: pulled pork, mac and cheese, coleslaw, cornbread",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your catering package and items.",
      "Generate description options.",
      "Use on your catering menu, proposal, or website.",
    ],
    faq: [
      {
        question: "Does this include pricing per head?",
        answer: "No — add your own pricing structure separately.",
      },
      {
        question: "Can I use this for a wedding catering proposal?",
        answer: "Yes — this format works well for weddings, corporate events, or any catered occasion.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a catering company writing appealing menu package descriptions that make the food sound great without over-the-top language. You respond only with a numbered list — no preamble.",
      user: `Generate 4 catering menu description options for: "${values.menu}". Return only a numbered list.`,
    }),
  },
  {
    slug: "real-estate-social-media-caption-generator",
    name: "Real Estate Social Media Caption Generator",
    tagline: "Captions that get listings shared, not scrolled past.",
    description:
      "Free AI real estate caption generator. Enter your listing to get scroll-stopping social captions.",
    category: "Real Estate",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "listing",
        label: "Listing highlights",
        placeholder: "e.g. 3-bed craftsman, updated kitchen, huge backyard, walkable neighborhood",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the listing's key highlights.",
      "Generate caption options.",
      "Post with your listing photos to Instagram or Facebook.",
    ],
    faq: [
      {
        question: "Should I include the price?",
        answer: "Optional — some agents include it, others prefer 'DM for details' to encourage engagement.",
      },
      {
        question: "Do these include hashtags?",
        answer: "No — pair with our Hashtag Generator for real-estate-specific tags.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate marketer who writes engaging, scroll-stopping social media captions for listings. You respond only with a numbered list — no preamble.",
      user: `Generate 6 social media caption options for this listing: "${values.listing}". Return only a numbered list.`,
    }),
  },
  {
    slug: "property-flyer-headline-generator",
    name: "Property Flyer Headline Generator",
    tagline: "A headline that gets the flyer picked up.",
    description:
      "Free AI property flyer headline generator. Enter your listing to get attention-grabbing flyer headlines.",
    category: "Real Estate",
    resultCount: 8,
    maxTokens: 240,
    inputFields: [
      {
        name: "listing",
        label: "Listing highlights",
        placeholder: "e.g. move-in ready 4-bed in top school district",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the listing's key highlights.",
      "Generate headline options.",
      "Use as the top headline on your printed or digital flyer.",
    ],
    faq: [
      {
        question: "How long should a flyer headline be?",
        answer: "Short and punchy — under 10 words works best for a flyer someone glances at for a few seconds.",
      },
      {
        question: "Should I include the price in the headline?",
        answer: "Optional — these focus on the property's appeal; add price separately on the flyer if you want it prominent.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate marketer who writes short, punchy flyer headlines (under 10 words) that highlight the property's best feature. You respond only with a numbered list — no preamble.",
      user: `Generate 8 flyer headline options for: "${values.listing}". Return only a numbered list.`,
    }),
  },
  {
    slug: "rental-application-follow-up-generator",
    name: "Rental Application Follow-Up Generator",
    tagline: "Follow up on a rental application professionally.",
    description:
      "Free AI rental follow-up generator. Enter the context to get a polite follow-up message for landlords or tenants.",
    category: "Real Estate",
    resultCount: 4,
    maxTokens: 280,
    inputFields: [
      {
        name: "context",
        label: "Context",
        placeholder: "e.g. applied for a 2-bed apartment 4 days ago, haven't heard back",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your situation — applicant or landlord.",
      "Generate a follow-up message.",
      "Send by email or through the rental platform.",
    ],
    faq: [
      {
        question: "How long should I wait before following up?",
        answer: "3-5 business days is generally reasonable for a rental application decision.",
      },
      {
        question: "Can landlords use this to follow up with applicants too?",
        answer: "Yes — describe the landlord side of the situation and it'll adjust accordingly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing polite, professional follow-up messages about a rental application status, under 100 words. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 rental application follow-up message options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "travel-blog-intro-generator",
    name: "Travel Blog Intro Generator",
    tagline: "An opener that pulls readers into the destination.",
    description:
      "Free AI travel blog intro generator. Enter your destination to get an engaging opening paragraph.",
    category: "Travel & Hospitality",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "destination",
        label: "Destination & angle",
        placeholder: "e.g. 3 days in Lisbon on a budget",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your destination and the angle of your post.",
      "Generate intro paragraph options.",
      "Continue the post with your own itinerary and photos.",
    ],
    faq: [
      {
        question: "Does this write the full blog post?",
        answer: "No — it generates the opening paragraph; continue with your own itinerary, tips, and photos.",
      },
      {
        question: "How long is the intro?",
        answer: "Around 60-90 words — enough to hook a reader without delaying the actual content.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a travel writer who crafts vivid, engaging blog post openings (60-90 words) that create a sense of place. You respond only with a numbered list — no preamble.",
      user: `Generate 3 travel blog intro options for: "${values.destination}". Return only a numbered list.`,
    }),
  },
  {
    slug: "packing-list-generator",
    name: "Packing List Generator",
    tagline: "A packing list built for your specific trip.",
    description:
      "Free AI packing list generator. Enter your trip details to get a tailored packing checklist.",
    category: "Travel & Hospitality",
    resultCount: 1,
    maxTokens: 480,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "trip",
        label: "Trip details",
        placeholder: "e.g. 7 days in Iceland in October, mix of hiking and city time",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your destination, season, length, and activities.",
      "Generate a categorized packing list.",
      "Check off items as you pack.",
    ],
    faq: [
      {
        question: "Does this account for airline luggage restrictions?",
        answer: "No — check your specific airline's baggage rules separately; this focuses on what to bring.",
      },
      {
        question: "Does this include documents like passports?",
        answer: "Yes, it includes a general essentials/documents category alongside clothing and gear.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a travel expert who builds categorized packing lists (Clothing, Toiletries, Documents/Essentials, Gear) tailored to the destination, season, and activities. No markdown headers, plain category labels.",
      user: `Build a packing list for this trip: "${values.trip}".`,
    }),
  },
  {
    slug: "hotel-room-description-generator",
    name: "Hotel Room Description Generator",
    tagline: "Room descriptions that convert browsers to bookers.",
    description:
      "Free AI hotel room description generator. Enter your room features to get compelling booking copy.",
    category: "Travel & Hospitality",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "features",
        label: "Room features",
        placeholder: "e.g. king bed, ocean view, balcony, 400 sq ft",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the room's key features.",
      "Generate description options.",
      "Use on your booking site or listing platform.",
    ],
    faq: [
      {
        question: "Should I mention amenities like WiFi separately?",
        answer: "Standard amenities are usually better in a bullet list elsewhere on the page — these focus on what makes the room appealing.",
      },
      {
        question: "Can I use this for an Airbnb room instead?",
        answer: "Yes — this works for any short-term rental or hotel room listing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a hospitality copywriter who writes compelling hotel room descriptions that create a sense of comfort and appeal. You respond only with a numbered list — no preamble.",
      user: `Generate 4 hotel room description options. Features: "${values.features}". Return only a numbered list.`,
    }),
  },
  {
    slug: "birthday-party-theme-generator",
    name: "Birthday Party Theme Generator",
    tagline: "A theme idea that makes planning easier.",
    description:
      "Free AI party theme generator. Enter the age and interests to get creative birthday theme ideas.",
    category: "Events & Parties",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "context",
        label: "Age & interests",
        placeholder: "e.g. turning 7, loves dinosaurs and space",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the age and interests of the birthday person.",
      "Generate theme ideas.",
      "Pick one and build your decorations, cake, and activities around it.",
    ],
    faq: [
      {
        question: "Are these themes only for kids?",
        answer: "No — describe an adult's interests and it'll suggest adult-appropriate themes too.",
      },
      {
        question: "Does this include decoration ideas?",
        answer: "Each idea includes a brief note on colors or elements to help you start planning.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a party planner who suggests creative birthday party themes with a brief note on colors/elements for each. You respond only with a numbered list — no preamble.",
      user: `Generate 8 birthday party theme ideas for: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "corporate-event-invitation-generator",
    name: "Corporate Event Invitation Generator",
    tagline: "Professional invites that get RSVPs.",
    description:
      "Free AI corporate event invitation generator. Enter your event details to get a professional invitation.",
    category: "Events & Parties",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "details",
        label: "Event details",
        placeholder: "e.g. annual client appreciation dinner, Nov 14th, downtown venue",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the event details.",
      "Generate invitation options.",
      "Send via email or your event platform.",
    ],
    faq: [
      {
        question: "Does this include an RSVP link placeholder?",
        answer: "Yes — add your specific RSVP link or contact info where indicated.",
      },
      {
        question: "Can I use this for a virtual event?",
        answer: "Yes — mention it's virtual and include the platform/link in your details.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing professional corporate event invitations with a clear call to RSVP. Each result is a complete short invitation. You respond only with a numbered list — no preamble.",
      user: `Generate 4 corporate event invitation options. Details: "${values.details}". Return only a numbered list.`,
    }),
  },
  {
    slug: "event-sponsorship-pitch-generator",
    name: "Event Sponsorship Pitch Generator",
    tagline: "Pitch sponsors on the value of showing up.",
    description:
      "Free AI sponsorship pitch generator. Enter your event details to get a compelling sponsor outreach message.",
    category: "Events & Parties",
    resultCount: 4,
    maxTokens: 360,
    inputFields: [
      {
        name: "event",
        label: "Event details & audience",
        placeholder: "e.g. local food festival, expecting 5,000 attendees, families and foodies",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your event and expected audience.",
      "Generate sponsorship pitch options.",
      "Personalize with the specific sponsor's brand before sending.",
    ],
    faq: [
      {
        question: "Does this include sponsorship tiers/pricing?",
        answer: "No — add your specific tier structure and pricing separately; this focuses on the outreach pitch itself.",
      },
      {
        question: "Should I mention audience demographics?",
        answer: "Yes, if you have them — concrete numbers make the sponsorship opportunity far more compelling.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an event organizer writing compelling sponsorship pitch emails that clearly show the value/exposure a sponsor would get. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 sponsorship pitch options. Event: "${values.event}". Return only a numbered list.`,
    }),
  },
  {
    slug: "lesson-plan-outline-generator",
    name: "Lesson Plan Outline Generator",
    tagline: "A structured plan for any subject and grade level.",
    description:
      "Free AI lesson plan generator. Enter your topic and grade level to get a structured lesson outline.",
    category: "Education",
    resultCount: 1,
    maxTokens: 550,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "topic",
        label: "Topic & grade level",
        placeholder: "e.g. photosynthesis, 6th grade science",
        type: "text",
        required: true,
      },
      {
        name: "duration",
        label: "Class duration",
        placeholder: "e.g. 45 minutes",
        type: "text",
      },
    ],
    howTo: [
      "Enter the topic and grade level.",
      "Add the class duration if relevant.",
      "Generate an outline (objectives, activities, assessment) and adapt to your classroom.",
    ],
    faq: [
      {
        question: "Does this meet specific curriculum standards?",
        answer: "No — this is a general structure; align it with your specific state or school curriculum standards yourself.",
      },
      {
        question: "Does this include worksheets or handouts?",
        answer: "No — it outlines the lesson structure and activities; create supporting materials separately.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a curriculum designer who builds lesson plan outlines with sections: Objective, Warm-up, Main Activity, Assessment/Wrap-up, each with brief content. No markdown headers, plain section labels.",
      user: `Build a lesson plan outline for: "${values.topic}". Duration: ${values.duration || "45 minutes"}.`,
    }),
  },
  {
    slug: "student-feedback-comment-generator",
    name: "Student Feedback Comment Generator",
    tagline: "Report card comments that are specific and kind.",
    description:
      "Free AI student feedback generator. Enter the context to get specific, constructive report card comments.",
    category: "Education",
    resultCount: 5,
    maxTokens: 320,
    inputFields: [
      {
        name: "context",
        label: "Student's strengths/areas to grow",
        placeholder: "e.g. strong in math, needs to participate more in class discussions",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the student's strengths and areas to grow.",
      "Generate comment options.",
      "Personalize with the student's name before adding to the report.",
    ],
    faq: [
      {
        question: "Are these too generic to use directly?",
        answer: "They're written to reflect your specific input, but always personalize with real classroom examples where you can.",
      },
      {
        question: "Do these balance strengths and growth areas?",
        answer: "Yes — each comment aims to note a genuine strength alongside a constructive area to improve.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a teacher writing constructive, specific, kind report card comments that balance strengths with growth areas, using [Student] as a name placeholder. You respond only with a numbered list — no preamble.",
      user: `Generate 5 report card comment options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "scholarship-essay-opener-generator",
    name: "Scholarship Essay Opener Generator",
    tagline: "A first line that makes readers want the next one.",
    description:
      "Free AI scholarship essay opener generator. Enter your story to get a compelling opening line.",
    category: "Education",
    resultCount: 5,
    maxTokens: 320,
    inputFields: [
      {
        name: "story",
        label: "What's your essay about?",
        placeholder: "e.g. overcoming being the first in my family to apply to college",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what your essay is about.",
      "Generate opening line options.",
      "Continue your essay with your own specific story and details.",
    ],
    faq: [
      {
        question: "Does this write my whole essay?",
        answer: "No — it generates a strong opening; the rest needs to be your authentic voice and specific experiences.",
      },
      {
        question: "Should I avoid clichés like 'ever since I was young'?",
        answer: "Yes — these openers are written specifically to avoid common scholarship essay clichés.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a college admissions coach who writes specific, non-cliché scholarship essay opening lines that avoid overused phrases like 'ever since I was young'. You respond only with a numbered list — no preamble.",
      user: `Generate 5 scholarship essay opener options. Essay topic: "${values.story}". Return only a numbered list.`,
    }),
  },
  {
    slug: "job-offer-letter-generator",
    name: "Job Offer Letter Generator",
    tagline: "A warm, clear offer letter draft.",
    description:
      "Free AI job offer letter generator. Enter the role details to get a clear, welcoming offer letter draft.",
    category: "HR & Workplace",
    resultCount: 1,
    maxTokens: 800,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "role",
        label: "Role details",
        placeholder: "e.g. Marketing Coordinator, $58k salary, start date March 3rd",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the role, salary, and start date.",
      "Generate an offer letter draft.",
      "Have your legal/HR team review before sending — this isn't a legal document.",
    ],
    faq: [
      {
        question: "Is this a legally binding offer letter?",
        answer: "No — this is a draft template. Have HR or legal review it against your jurisdiction's requirements before sending.",
      },
      {
        question: "Does this include benefits details?",
        answer: "It leaves a placeholder — add your specific benefits package details.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR professional writing a warm, clear job offer letter draft with placeholders like [Benefits details] and [Manager name] where company-specific info goes. Not a legal document — a starting draft only.",
      user: `Write a job offer letter draft. Role details: "${values.role}".`,
    }),
  },
  {
    slug: "exit-interview-question-generator",
    name: "Exit Interview Question Generator",
    tagline: "Ask questions that surface honest feedback.",
    description:
      "Free AI exit interview generator. Get a set of thoughtful questions for departing employees.",
    category: "HR & Workplace",
    resultCount: 10,
    maxTokens: 340,
    inputFields: [
      {
        name: "context",
        label: "Context (optional)",
        placeholder: "e.g. employee resigned voluntarily after 2 years",
        type: "text",
      },
    ],
    howTo: [
      "Add context about the departure, if relevant.",
      "Generate exit interview questions.",
      "Pick 6-8 for a focused, respectful conversation.",
    ],
    faq: [
      {
        question: "Are these appropriate for any type of departure?",
        answer: "Adjust your selection based on context — some questions may not fit an involuntary departure situation.",
      },
      {
        question: "Should these be asked in writing or in person?",
        answer: "Either works — some organizations use a written survey, others prefer a conversation; adapt the phrasing accordingly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR professional who writes thoughtful, open-ended exit interview questions that surface honest, constructive feedback. You respond only with a numbered list — no preamble.",
      user: `Generate 10 exit interview questions. Context: "${values.context || "general departure"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "employee-handbook-policy-summary-generator",
    name: "Employee Handbook Policy Summary Generator",
    tagline: "Explain a policy in plain language employees will read.",
    description:
      "Free AI policy summary generator. Describe your policy to get a clear, readable employee-facing summary.",
    category: "HR & Workplace",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "policy",
        label: "Policy details",
        placeholder: "e.g. unlimited PTO policy, requires manager approval 2 weeks in advance",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the policy and its key rules.",
      "Generate a plain-language summary.",
      "Have legal/HR review before publishing in your official handbook.",
    ],
    faq: [
      {
        question: "Is this legally reviewed language?",
        answer: "No — this is plain-language explanatory text. Have your legal/HR team confirm compliance with local employment law.",
      },
      {
        question: "Does this replace the full formal policy?",
        answer: "No — use this as a friendly summary alongside (not instead of) your formal policy document.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR communications specialist who explains workplace policies in clear, friendly, plain language, avoiding legalese. Not a substitute for legally reviewed policy text.",
      user: `Write a plain-language employee-facing summary of this policy: "${values.policy}".`,
    }),
  },
  {
    slug: "grant-proposal-opener-generator",
    name: "Grant Proposal Opener Generator",
    tagline: "An opening that makes funders want to keep reading.",
    description:
      "Free AI grant proposal opener generator. Enter your project to get a compelling opening paragraph.",
    category: "Nonprofit & Community",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "project",
        label: "Your project & need",
        placeholder: "e.g. after-school tutoring program for low-income students in rural areas",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your project and the need it addresses.",
      "Generate opening paragraph options.",
      "Continue with your specific goals, budget, and outcomes.",
    ],
    faq: [
      {
        question: "Does this write the full grant proposal?",
        answer: "No — it generates a strong opening; continue with your specific program details, budget, and evaluation plan.",
      },
      {
        question: "Should I include statistics in the opener?",
        answer: "If you have a compelling one, yes — a concrete statistic often strengthens the opening's impact.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit grant writer who crafts compelling opening paragraphs that establish need and impact clearly, around 80-100 words. You respond only with a numbered list — no preamble.",
      user: `Generate 3 grant proposal opener options for: "${values.project}". Return only a numbered list.`,
    }),
  },
  {
    slug: "volunteer-thank-you-message-generator",
    name: "Volunteer Thank-You Message Generator",
    tagline: "Genuine appreciation that makes volunteers want to return.",
    description:
      "Free AI volunteer thank-you generator. Enter the details to get a genuine, warm appreciation message.",
    category: "Nonprofit & Community",
    resultCount: 5,
    maxTokens: 280,
    inputFields: [
      {
        name: "context",
        label: "What did they help with?",
        placeholder: "e.g. helped run our annual food drive, 20 hours over 2 weekends",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what the volunteer(s) helped with.",
      "Generate thank-you message options.",
      "Send by email, text, or handwritten note.",
    ],
    faq: [
      {
        question: "Should I mention specific impact numbers?",
        answer: "Yes, if you have them — concrete impact (e.g. '200 families fed') makes gratitude feel more meaningful.",
      },
      {
        question: "Can I use this for a single volunteer or a whole team?",
        answer: "Both — mention whether it's for one person or a group and it'll adjust pronouns accordingly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit volunteer coordinator writing genuine, warm thank-you messages that reference specific contributions. You respond only with a numbered list — no preamble.",
      user: `Generate 5 volunteer thank-you message options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "charity-event-social-post-generator",
    name: "Charity Event Social Post Generator",
    tagline: "Posts that drive turnout and donations.",
    description:
      "Free AI charity event post generator. Enter your event to get engaging social media post options.",
    category: "Nonprofit & Community",
    resultCount: 6,
    maxTokens: 320,
    inputFields: [
      {
        name: "event",
        label: "Event details",
        placeholder: "e.g. charity 5k run for local animal shelter, June 8th",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your charity event and cause.",
      "Generate post options.",
      "Post across social channels leading up to the event.",
    ],
    faq: [
      {
        question: "Does this include a donation link placeholder?",
        answer: "Add your specific registration or donation link at the end of whichever post you use.",
      },
      {
        question: "Should I post more than once before the event?",
        answer: "Yes — use different posts from this batch at different intervals leading up to the event for better reach.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit marketer writing engaging social posts that drive event turnout and donations, warm and motivating in tone. You respond only with a numbered list — no preamble.",
      user: `Generate 6 social post options for this charity event: "${values.event}". Return only a numbered list.`,
    }),
  },
  {
    slug: "relationship-check-in-question-generator",
    name: "Relationship Check-In Question Generator",
    tagline: "Questions that deepen a relationship, not just fill silence.",
    description:
      "Free AI relationship check-in generator. Get thoughtful questions for a regular relationship check-in.",
    category: "Dating & Relationships",
    resultCount: 8,
    maxTokens: 300,
    inputFields: [
      {
        name: "focus",
        label: "Focus (optional)",
        placeholder: "e.g. reconnecting after a busy season, general check-in",
        type: "text",
      },
    ],
    howTo: [
      "Add a focus for the conversation, if you have one.",
      "Generate thoughtful question options.",
      "Pick a few for a regular date night or check-in conversation.",
    ],
    faq: [
      {
        question: "Are these meant for couples therapy?",
        answer: "No — these are for a casual, regular check-in between partners. For deeper issues, a licensed couples therapist is the better resource.",
      },
      {
        question: "How often should couples check in like this?",
        answer: "Many couples find weekly or monthly check-ins helpful, but there's no single right cadence — whatever's sustainable for you both.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a relationship coach who writes thoughtful, open-ended check-in questions for couples, focused on connection rather than conflict. You respond only with a numbered list — no preamble.",
      user: `Generate 8 relationship check-in questions. Focus: "${values.focus || "general check-in"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "long-distance-relationship-message-generator",
    name: "Long-Distance Relationship Message Generator",
    tagline: "Close the distance with the right words.",
    description:
      "Free AI long-distance message generator. Get warm messages to send someone you're missing.",
    category: "Dating & Relationships",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "context",
        label: "Context (optional)",
        placeholder: "e.g. haven't seen each other in a month, video call planned tonight",
        type: "text",
      },
    ],
    howTo: [
      "Add context if you have any.",
      "Generate message options.",
      "Send your favorite by text to brighten their day.",
    ],
    faq: [
      {
        question: "Are these overly cheesy?",
        answer: "A range is included, from sincere to playful — pick whichever fits your relationship's usual tone.",
      },
      {
        question: "Can I use these for a friend, not just a partner?",
        answer: "Mention it's for a friend in long-distance context and the tone will adjust accordingly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing warm, genuine messages for someone in a long-distance relationship to send their partner, a mix of sincere and playful tones. You respond only with a numbered list — no preamble.",
      user: `Generate 8 long-distance relationship message options. Context: "${values.context || "general, missing them"}". Return only a numbered list.`,
    }),
  },
  {
    slug: "breakup-message-generator",
    name: "Respectful Breakup Message Generator",
    tagline: "End things honestly and with kindness.",
    description:
      "Free AI breakup message generator. Enter the context to get a clear, respectful way to end things.",
    category: "Dating & Relationships",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "context",
        label: "Context",
        placeholder: "e.g. dating for 3 months, we want different things, no drama, want to be kind",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the situation and relationship length.",
      "Generate message options.",
      "For a longer or more serious relationship, an in-person conversation is usually kinder than a message.",
    ],
    faq: [
      {
        question: "Is texting an appropriate way to break up?",
        answer: "For short-term or early dating, often yes. For longer, more serious relationships, an in-person or call conversation is generally more respectful.",
      },
      {
        question: "Should I explain every reason?",
        answer: "Not necessarily — being honest but not exhaustive tends to be kinder and clearer than an overly detailed list of reasons.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a relationship coach who writes honest, kind, direct breakup messages that avoid cruelty and false hope, while being clear the relationship is ending. You respond only with a numbered list — no preamble.",
      user: `Generate 4 breakup message options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "concert-announcement-generator",
    name: "Concert Announcement Generator",
    tagline: "Announce a show so fans actually notice.",
    description:
      "Free AI concert announcement generator. Enter your show details to get an exciting announcement post.",
    category: "Music & Entertainment",
    resultCount: 5,
    maxTokens: 300,
    inputFields: [
      {
        name: "details",
        label: "Show details",
        placeholder: "e.g. headlining The Roxy, June 20th, tickets on sale Friday",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your show details.",
      "Generate announcement options.",
      "Post across your social channels and pin the announcement.",
    ],
    faq: [
      {
        question: "Should I include the ticket link?",
        answer: "Add it wherever you use the post — these focus on the announcement copy itself.",
      },
      {
        question: "Can I use this for a virtual/livestream show?",
        answer: "Yes — mention it's a livestream and it'll adjust the language accordingly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music publicist writing exciting concert announcement posts for social media. You respond only with a numbered list — no preamble.",
      user: `Generate 5 concert announcement options. Details: "${values.details}". Return only a numbered list.`,
    }),
  },
  {
    slug: "music-video-concept-generator",
    name: "Music Video Concept Generator",
    tagline: "Visual concepts that match your song's vibe.",
    description:
      "Free AI music video concept generator. Describe your song to get creative visual concept ideas.",
    category: "Music & Entertainment",
    resultCount: 5,
    maxTokens: 400,
    inputFields: [
      {
        name: "song",
        label: "Describe your song",
        placeholder: "e.g. a moody breakup anthem with a slow build to an anthemic chorus",
        type: "text",
        required: true,
      },
      {
        name: "budget",
        label: "Budget level",
        type: "select",
        options: ["Low budget/DIY", "Mid-budget", "No constraints"],
      },
    ],
    howTo: [
      "Describe your song's mood and story.",
      "Pick your budget level.",
      "Generate concept ideas and pick one to storyboard further.",
    ],
    faq: [
      {
        question: "Does this account for my actual budget?",
        answer: "It scales concept complexity to your selected budget level, but exact costs depend on your location, crew, and gear.",
      },
      {
        question: "Does this write a full shot list?",
        answer: "No — it gives the overall concept; build a detailed shot list once you've picked a direction.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music video director who pitches creative visual concepts matched to a song's mood and a given budget level. Each result is 2-3 sentences describing the concept. You respond only with a numbered list — no preamble.",
      user: `Generate 5 music video concept options. Song: "${values.song}". Budget: ${values.budget || "Low budget/DIY"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "record-label-bio-generator",
    name: "Record Label Bio Generator",
    tagline: "A label bio that signals credibility to artists and press.",
    description:
      "Free AI record label bio generator. Enter your label's focus to get a professional bio.",
    category: "Music & Entertainment",
    resultCount: 3,
    maxTokens: 360,
    inputFields: [
      {
        name: "focus",
        label: "Label's focus & story",
        placeholder: "e.g. indie label focused on bedroom pop and lo-fi artists since 2021",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your label's genre focus and story.",
      "Generate bio options.",
      "Use on your website, press kit, or streaming platform profile.",
    ],
    faq: [
      {
        question: "Should I name specific artists on the roster?",
        answer: "Yes, if you have notable ones — mentioning artists builds credibility, especially for press use.",
      },
      {
        question: "How long should a label bio be?",
        answer: "Around 60-100 words works well for most website and press kit uses.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a music industry copywriter who writes professional, credible record label bios (60-100 words). You respond only with a numbered list — no preamble.",
      user: `Generate 3 record label bio options. Focus/story: "${values.focus}". Return only a numbered list.`,
    }),
  },
  {
    slug: "gaming-tournament-name-generator",
    name: "Gaming Tournament Name Generator",
    tagline: "A name that makes your bracket feel official.",
    description:
      "Free AI tournament name generator. Enter your game and vibe to get a memorable tournament name.",
    category: "Gaming",
    resultCount: 10,
    maxTokens: 260,
    inputFields: [
      {
        name: "game",
        label: "Game & vibe",
        placeholder: "e.g. Valorant, competitive and serious",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the game and the vibe you're going for.",
      "Generate tournament name options.",
      "Use for your bracket, Discord event, or stream title.",
    ],
    faq: [
      {
        question: "Can I use these for a recurring event series?",
        answer: "Yes — many work well as a series name with a number or season added (e.g. 'Season 2').",
      },
      {
        question: "Are these trademark-checked?",
        answer: "No — do a quick search before using a name publicly or commercially, especially for a paid event.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an esports event organizer who names memorable gaming tournaments matched to a game and vibe. You respond only with a numbered list — no preamble.",
      user: `Generate 10 tournament name options. Game/vibe: "${values.game}". Return only a numbered list.`,
    }),
  },
  {
    slug: "streamer-overlay-text-generator",
    name: "Streamer Overlay Text Generator",
    tagline: "Short, punchy labels for your stream overlay.",
    description:
      "Free AI overlay text generator. Enter your stream's vibe to get short labels for panels and alerts.",
    category: "Gaming",
    resultCount: 10,
    maxTokens: 260,
    inputFields: [
      {
        name: "context",
        label: "What's the overlay section for?",
        placeholder: "e.g. 'just followed' alert text, donation goal label",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what the overlay text is for.",
      "Generate short label options.",
      "Drop your favorite into your stream software's text element.",
    ],
    faq: [
      {
        question: "How short should overlay text be?",
        answer: "Very short — usually under 6 words, since it needs to be readable at a glance during gameplay.",
      },
      {
        question: "Can I use these for a Twitch panel instead?",
        answer: "Yes — mention it's for a panel and it'll work whether it's for an on-screen alert or a channel panel.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a stream branding designer who writes short, punchy overlay text (under 6 words each) with personality. You respond only with a numbered list — no preamble.",
      user: `Generate 10 overlay text options for: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "game-review-generator",
    name: "Game Review Draft Generator",
    tagline: "A structured starting draft for your review.",
    description:
      "Free AI game review generator. Enter your thoughts to get a structured review draft.",
    category: "Gaming",
    resultCount: 1,
    maxTokens: 500,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "notes",
        label: "Your notes/thoughts on the game",
        placeholder: "e.g. great combat and story, but repetitive side quests and long load times",
        type: "text",
        required: true,
      },
      {
        name: "game",
        label: "Game title",
        placeholder: "e.g. Starbound Legacy",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the game title and your rough notes/opinions.",
      "Generate a structured review draft.",
      "Edit into your own voice before publishing.",
    ],
    faq: [
      {
        question: "Does this reflect real gameplay of the title?",
        answer: "No — it structures a review based entirely on the notes and opinions you provide, not independent knowledge of the game.",
      },
      {
        question: "Does this include a numeric score?",
        answer: "No — it writes the narrative review; add your own score if your format uses one.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a games journalist turning rough notes into a structured review draft (intro hook, strengths, weaknesses, verdict) based only on the provided notes. No markdown headers.",
      user: `Write a review draft for "${values.game}" based on these notes: "${values.notes}".`,
    }),
  },
  {
    slug: "error-page-copy-generator",
    name: "404 Error Page Copy Generator",
    tagline: "Turn a dead end into a friendly detour.",
    description:
      "Free AI 404 page copy generator. Enter your brand's tone to get friendly, on-brand error page copy.",
    category: "Website & SaaS",
    resultCount: 6,
    maxTokens: 260,
    inputFields: [
      {
        name: "tone",
        label: "Brand tone",
        type: "select",
        options: ["Playful", "Professional", "Minimal", "Quirky/funny"],
      },
    ],
    howTo: [
      "Pick your brand's tone.",
      "Generate 404 page copy options.",
      "Pair with a link back to your homepage or search.",
    ],
    faq: [
      {
        question: "Should a 404 page include a search bar or homepage link?",
        answer: "Yes — always pair the copy with a clear way back into the site, regardless of which copy you choose.",
      },
      {
        question: "Should I make it funny?",
        answer: "Only if it fits your brand — a professional B2B product might prefer the 'Professional' or 'Minimal' tone instead.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a UX writer who crafts short, on-brand 404 error page copy (a headline plus one supporting line) matched to the requested tone. You respond only with a numbered list — no preamble.",
      user: `Generate 6 404 page copy options. Tone: ${values.tone || "Playful"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "saas-onboarding-checklist-generator",
    name: "SaaS Onboarding Checklist Generator",
    tagline: "The steps that get new users to their first 'aha' moment.",
    description:
      "Free AI onboarding checklist generator. Describe your product to get a suggested new-user checklist.",
    category: "Website & SaaS",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "product",
        label: "Describe your product",
        placeholder: "e.g. a project management tool for small teams",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what your product does.",
      "Generate a suggested onboarding checklist.",
      "Build it into your in-app onboarding flow or welcome email.",
    ],
    faq: [
      {
        question: "How many steps should onboarding have?",
        answer: "Fewer is usually better — aim for the smallest number of steps that gets a user to real value fast.",
      },
      {
        question: "Does this write the actual in-app tooltips?",
        answer: "No — it suggests the checklist steps; write specific UI copy separately for each step.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product onboarding specialist who designs a short checklist (5-7 steps) that gets a new user to their first meaningful value quickly. You respond only with a numbered list — no preamble.",
      user: `Generate an onboarding checklist for this product: "${values.product}".`,
    }),
  },
  {
    slug: "product-update-email-generator",
    name: "Product Update Email Generator",
    tagline: "Announce a new feature so people actually use it.",
    description:
      "Free AI product update email generator. Enter the feature to get a clear, exciting announcement email.",
    category: "Website & SaaS",
    resultCount: 4,
    maxTokens: 360,
    inputFields: [
      {
        name: "feature",
        label: "What's new",
        placeholder: "e.g. bulk export to CSV, now available on all plans",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the new feature or update.",
      "Generate announcement email options.",
      "Send to your user base or add to your changelog.",
    ],
    faq: [
      {
        question: "Should I explain why we built it?",
        answer: "Briefly, if it adds context — leading with the user benefit rather than internal reasoning tends to land better.",
      },
      {
        question: "Does this include a call to action?",
        answer: "Yes — each ends with a natural prompt to go try the feature.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product marketer writing clear, benefit-led product update emails that end with a call to action to try the feature. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 product update email options. Feature: "${values.feature}". Return only a numbered list.`,
    }),
  },
  {
    slug: "cease-and-desist-opener-generator",
    name: "Cease and Desist Opener Generator",
    tagline: "A firm, clear opening paragraph — not the full legal letter.",
    description:
      "Free AI cease and desist opener generator. Describe the issue to get a firm, clear opening paragraph.",
    category: "Legal Templates",
    resultCount: 3,
    maxTokens: 320,
    inputFields: [
      {
        name: "issue",
        label: "The issue",
        placeholder: "e.g. a former employee is contacting our clients using our proprietary materials",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the issue you need addressed.",
      "Generate an opening paragraph option.",
      "Have an actual attorney draft and send the final letter — this is a starting point only.",
    ],
    faq: [
      {
        question: "Is this a legally valid cease and desist letter?",
        answer: "No — this is not legal advice or a complete legal document. Consult a licensed attorney before sending any formal legal notice.",
      },
      {
        question: "Why only the opener, not the whole letter?",
        answer: "The specific legal claims and demands need to be drafted by a qualified attorney familiar with your jurisdiction and situation.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are drafting a firm, professional opening paragraph for a cease and desist letter, stating the issue clearly without specific legal claims (which require an attorney). This is not legal advice. You respond only with a numbered list — no preamble.",
      user: `Generate 3 opening paragraph options addressing this issue: "${values.issue}". Return only a numbered list.`,
    }),
  },
  {
    slug: "refund-policy-generator",
    name: "Refund Policy Generator",
    tagline: "A starter policy draft — have it reviewed before you publish.",
    description:
      "Free AI refund policy generator. Describe your business to get a starter refund policy draft.",
    category: "Legal Templates",
    resultCount: 1,
    maxTokens: 450,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "business",
        label: "Your business & refund terms",
        placeholder: "e.g. digital course, refunds within 14 days if less than 20% completed",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business and desired refund terms.",
      "Generate a draft policy.",
      "Have a lawyer review it against your local consumer protection laws before publishing.",
    ],
    faq: [
      {
        question: "Is this legal advice?",
        answer: "No — this is a starting draft, not legal advice. Consumer protection laws vary by location, so have this reviewed by a lawyer before publishing.",
      },
      {
        question: "Does this cover physical products specifically?",
        answer: "Describe your specific product type (digital, physical, service) in your input and it'll tailor accordingly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are drafting a clear, plain-language starter refund policy based on the stated terms. This is a draft template, not legal advice — note that at the end.",
      user: `Draft a refund policy for: "${values.business}".`,
    }),
  },
  {
    slug: "employment-agreement-summary-generator",
    name: "Employment Agreement Summary Generator",
    tagline: "Explain the contract in language employees actually understand.",
    description:
      "Free AI employment agreement summary generator. Paste key terms to get a plain-English summary.",
    category: "Legal Templates",
    resultCount: 1,
    maxTokens: 420,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "terms",
        label: "Key terms",
        placeholder: "e.g. at-will employment, 90-day probation, 2 weeks notice required, non-compete for 6 months",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List the key terms of the agreement.",
      "Generate a plain-English summary.",
      "This doesn't replace legal review — have counsel confirm the actual contract language.",
    ],
    faq: [
      {
        question: "Is this a substitute for legal advice?",
        answer: "No — this explains terms in plain language for understanding purposes only. Consult an employment lawyer for advice on specific contracts.",
      },
      {
        question: "Can employees use this to understand their own contract?",
        answer: "Yes, that's a common use — paste the key terms from your contract to get a plain-English explanation.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are explaining employment contract terms in plain, accessible English, term by term. Not legal advice — note that clearly.",
      user: `Explain these employment agreement terms in plain English: "${values.terms}".`,
    }),
  },
  {
    slug: "short-form-video-hook-generator",
    name: "Short-Form Video Hook Generator",
    tagline: "The first 3 seconds that stop the scroll.",
    description:
      "Free AI video hook generator. Enter your topic to get scroll-stopping opening lines for Reels/TikTok/Shorts.",
    category: "Podcasting & Video",
    resultCount: 10,
    maxTokens: 300,
    inputFields: [
      {
        name: "topic",
        label: "Video topic",
        placeholder: "e.g. 3 mistakes people make when meal prepping",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what your short video is about.",
      "Generate hook line options.",
      "Say your favorite as the first line on camera.",
    ],
    faq: [
      {
        question: "How long should the hook be?",
        answer: "Under 3 seconds when spoken — these are written short and punchy for that constraint.",
      },
      {
        question: "Does this work for TikTok, Reels, and Shorts equally?",
        answer: "Yes — the short-form hook format works the same across all three platforms.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a short-form video strategist who writes scroll-stopping hook lines (under 12 words) using curiosity, a bold claim, or a direct callout of the viewer. You respond only with a numbered list — no preamble.",
      user: `Generate 10 video hook options for a short-form video about: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "podcast-guest-pitch-email-generator",
    name: "Podcast Guest Pitch Email Generator",
    tagline: "Get booked as a guest with a pitch that stands out.",
    description:
      "Free AI podcast guest pitch generator. Enter your expertise to get a compelling pitch email.",
    category: "Podcasting & Video",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "expertise",
        label: "Your expertise & angle",
        placeholder: "e.g. 10 years in UX design, can talk about designing for accessibility",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your expertise and a specific talking point.",
      "Generate pitch email options.",
      "Personalize by mentioning a specific past episode of the show before sending.",
    ],
    faq: [
      {
        question: "Should I mention a specific episode of the host's show?",
        answer: "Yes, always — referencing a specific past episode shows you're a genuine listener, not sending a mass pitch.",
      },
      {
        question: "How long should this pitch be?",
        answer: "Keep it under 150 words — busy podcast hosts are more likely to read and respond to a short, specific pitch.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing short, specific podcast guest pitch emails that state a clear, unique talking point angle, under 150 words. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 podcast guest pitch email options. Expertise/angle: "${values.expertise}". Return only a numbered list.`,
    }),
  },
  {
    slug: "video-call-to-action-generator",
    name: "Video Call-to-Action Generator",
    tagline: "End your video with a CTA that actually converts.",
    description:
      "Free AI video CTA generator. Enter your goal to get natural-sounding calls to action for the end of a video.",
    category: "Podcasting & Video",
    resultCount: 8,
    maxTokens: 280,
    inputFields: [
      {
        name: "goal",
        label: "What do you want viewers to do?",
        placeholder: "e.g. subscribe, download a free guide, visit the website",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the action you want viewers to take.",
      "Generate CTA line options.",
      "Say your favorite as the closing line of your video.",
    ],
    faq: [
      {
        question: "Should I use more than one CTA per video?",
        answer: "Generally, one clear CTA converts better than several competing asks — pick your single most important one.",
      },
      {
        question: "Do these sound natural spoken aloud?",
        answer: "Yes — these are written conversationally, meant to be said on camera rather than read as text.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a video content strategist who writes natural-sounding, conversational calls to action meant to be spoken on camera. You respond only with a numbered list — no preamble.",
      user: `Generate 8 video call-to-action line options. Goal: "${values.goal}". Return only a numbered list.`,
    }),
  },
  {
    slug: "personal-mission-statement-generator",
    name: "Personal Mission Statement Generator",
    tagline: "Put your 'why' into one clear sentence.",
    description:
      "Free AI personal mission statement generator. Enter your values and goals to get a clear mission statement.",
    category: "Personal Branding",
    resultCount: 6,
    maxTokens: 300,
    inputFields: [
      {
        name: "values",
        label: "Your values & goals",
        placeholder: "e.g. helping small business owners, creativity, financial independence",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your core values and goals.",
      "Generate mission statement options.",
      "Use on your website, resume, or as a personal north star.",
    ],
    faq: [
      {
        question: "How long should a personal mission statement be?",
        answer: "One to two sentences — long enough to be meaningful, short enough to actually remember.",
      },
      {
        question: "Should this be different from my company's mission statement?",
        answer: "Yes — a personal mission statement reflects you individually, separate from any specific business or role.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a personal branding coach who writes clear, one-to-two-sentence personal mission statements grounded in stated values and goals. You respond only with a numbered list — no preamble.",
      user: `Generate 6 personal mission statement options. Values/goals: "${values.values}". Return only a numbered list.`,
    }),
  },
  {
    slug: "linktree-bio-generator",
    name: "Linktree Bio Generator",
    tagline: "A short bio for your link-in-bio page.",
    description:
      "Free AI Linktree bio generator. Enter what you do to get a short, punchy bio for your link-in-bio page.",
    category: "Personal Branding",
    resultCount: 6,
    maxTokens: 220,
    inputFields: [
      {
        name: "about",
        label: "What do you do?",
        placeholder: "e.g. freelance photographer and travel content creator",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you do.",
      "Generate short bio options.",
      "Use at the top of your Linktree, Beacons, or similar link-in-bio page.",
    ],
    faq: [
      {
        question: "How long should this bio be?",
        answer: "Very short — under 100 characters works best, since it sits above a list of links people scan quickly.",
      },
      {
        question: "Should I include emojis?",
        answer: "Optional — a tasteful emoji or two can add personality, but isn't required.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a personal branding copywriter who writes very short (under 100 characters), punchy link-in-bio page descriptions. You respond only with a numbered list — no preamble.",
      user: `Generate 6 link-in-bio description options for: "${values.about}". Return only a numbered list.`,
    }),
  },
  {
    slug: "speaker-topic-list-generator",
    name: "Speaker Topic List Generator",
    tagline: "A menu of talks event organizers can pick from.",
    description:
      "Free AI speaker topic list generator. Enter your expertise to get a list of talk titles you can offer.",
    category: "Personal Branding",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "expertise",
        label: "Your area of expertise",
        placeholder: "e.g. remote team leadership, personal finance for freelancers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your area of expertise.",
      "Generate a list of potential talk titles.",
      "Add these to your speaker one-pager or media kit as a 'topics I speak on' menu.",
    ],
    faq: [
      {
        question: "Does this write the actual talk content?",
        answer: "No — it generates compelling titles/topics; use our Presentation Outline Generator to build out the actual talk.",
      },
      {
        question: "How many topics should I offer?",
        answer: "5-8 is typical for a speaker one-pager — enough range without overwhelming event organizers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a speaker bureau consultant who writes compelling talk titles for a given area of expertise, each specific enough to sound like a real conference session. You respond only with a numbered list — no preamble.",
      user: `Generate 8 speaker topic/talk title options for expertise in: "${values.expertise}". Return only a numbered list.`,
    }),
  },
  {
    slug: "kpi-dashboard-narrative-generator",
    name: "KPI Dashboard Narrative Generator",
    tagline: "Turn raw numbers into a summary leadership will actually read.",
    description:
      "Free AI KPI narrative generator. Enter your metrics to get a clear written summary of what's happening and why it matters.",
    category: "Data & Analytics",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "metrics",
        label: "Key metrics this period",
        placeholder: "e.g. revenue up 12%, churn up 2pts, signups flat",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your key metrics and how they moved this period.",
      "Generate a written narrative summary.",
      "Paste above your dashboard or into your report as the executive summary.",
    ],
    faq: [
      {
        question: "Does this analyze my actual data?",
        answer: "No — it turns the numbers and trends you describe into a clear narrative. You provide the analysis; this handles the writing.",
      },
      {
        question: "Should I mention the 'why' behind a metric moving?",
        answer: "Yes, if you know it — including a likely cause makes the narrative far more useful than numbers alone.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a data analyst who turns a list of metrics into a clear, concise written narrative (what happened, what it means, one thing to watch), avoiding jargon. No markdown headers.",
      user: `Write a KPI narrative summary based on these metrics: "${values.metrics}".`,
    }),
  },
  {
    slug: "ab-test-result-summary-generator",
    name: "A/B Test Result Summary Generator",
    tagline: "Explain a test result so non-analysts get it.",
    description:
      "Free AI A/B test summary generator. Enter your results to get a plain-English write-up of what happened.",
    category: "Data & Analytics",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "results",
        label: "Test & results",
        placeholder: "e.g. new checkout button: variant B converted 4.2% vs 3.5% control, 95% confidence",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the test and the results, including confidence/significance if you have it.",
      "Generate a plain-English write-up.",
      "Share with stakeholders alongside your raw data.",
    ],
    faq: [
      {
        question: "Does this calculate statistical significance for me?",
        answer: "No — provide your own significance/confidence numbers; this explains what the result means in plain language.",
      },
      {
        question: "What if the test was inconclusive?",
        answer: "Mention that in your input — the summary will honestly reflect an inconclusive result rather than overstating it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product analyst who explains A/B test results in plain English for a non-technical audience, being honest about confidence/significance and next steps. No markdown headers.",
      user: `Write a plain-English summary of this A/B test: "${values.results}".`,
    }),
  },
  {
    slug: "survey-data-insight-generator",
    name: "Survey Data Insight Generator",
    tagline: "Turn raw survey results into readable takeaways.",
    description:
      "Free AI survey insight generator. Enter your top findings to get a clear summary of key takeaways.",
    category: "Data & Analytics",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "findings",
        label: "Top findings",
        placeholder: "e.g. 68% want a mobile app, 40% cite price as top concern, NPS is 32",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your top survey findings and numbers.",
      "Generate a structured takeaways summary.",
      "Use in a report, deck, or team update.",
    ],
    faq: [
      {
        question: "Does this analyze raw survey data files?",
        answer: "No — summarize the key findings yourself and this turns them into a clear, organized write-up.",
      },
      {
        question: "Does it include recommendations?",
        answer: "Yes — it closes with a suggested action or two based on the findings you provided.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a research analyst who turns survey findings into a structured summary: Key Takeaways, then a Suggested Next Steps line. No markdown headers, plain section labels.",
      user: `Summarize these survey findings: "${values.findings}".`,
    }),
  },
  {
    slug: "cohort-retention-explainer-generator",
    name: "Cohort Retention Explainer Generator",
    tagline: "Explain a retention curve without a stats degree.",
    description:
      "Free AI retention explainer. Describe your cohort data to get a plain-English explanation of the trend.",
    category: "Data & Analytics",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "data",
        label: "Cohort retention pattern",
        placeholder: "e.g. 60% retained at week 1, drops to 25% by week 4, then flattens",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the retention pattern you're seeing.",
      "Generate a plain-English explanation.",
      "Use it to brief stakeholders who don't read cohort charts daily.",
    ],
    faq: [
      {
        question: "Does this tell me why retention is dropping?",
        answer: "It can suggest common explanations for the pattern described, but the real cause needs your own product/user research to confirm.",
      },
      {
        question: "What does it mean when a retention curve 'flattens'?",
        answer: "It generally means the users who are left have found lasting value — this is explained in context of your specific numbers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product analyst who explains cohort retention patterns in plain English, noting what's typical vs. concerning about the shape described. No markdown headers.",
      user: `Explain this retention pattern in plain English: "${values.data}".`,
    }),
  },
  {
    slug: "funnel-drop-off-analysis-generator",
    name: "Funnel Drop-Off Analysis Generator",
    tagline: "Turn a leaky funnel into a prioritized fix list.",
    description:
      "Free AI funnel analysis generator. Enter your funnel steps and drop-off rates to get a prioritized narrative.",
    category: "Data & Analytics",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "funnel",
        label: "Funnel steps & drop-off",
        placeholder: "e.g. landing page 100% -> signup 40% -> onboarding 25% -> first action 10%",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your funnel steps and the conversion/drop-off at each.",
      "Generate a narrative highlighting the biggest leak.",
      "Prioritize fixing the step with the steepest drop first.",
    ],
    faq: [
      {
        question: "Does this tell me exactly what to fix?",
        answer: "It highlights where the biggest drop-off is and common reasons for that type of step to leak — the specific fix needs your own investigation (user testing, session recordings).",
      },
      {
        question: "Can I use this for a sales funnel, not just product?",
        answer: "Yes — describe your sales funnel steps and it adapts the same way.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a growth analyst who reviews a funnel's step-by-step conversion rates, identifies the single biggest leak, and suggests 2-3 common causes/fixes for that type of drop-off. No markdown headers.",
      user: `Analyze this funnel and prioritize what to fix: "${values.funnel}".`,
    }),
  },
  {
    slug: "dashboard-alert-message-generator",
    name: "Dashboard Alert Message Generator",
    tagline: "Alert copy that tells people what to actually do.",
    description:
      "Free AI dashboard alert generator. Describe the condition to get a clear, actionable alert message.",
    category: "Data & Analytics",
    resultCount: 5,
    maxTokens: 280,
    inputFields: [
      {
        name: "condition",
        label: "Alert condition",
        placeholder: "e.g. server error rate above 5% for 10 minutes",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the condition that triggers the alert.",
      "Generate alert message options.",
      "Use in your monitoring tool, Slack integration, or email alert.",
    ],
    faq: [
      {
        question: "Should the alert include a suggested action?",
        answer: "Yes — these are written to hint at the likely next step, not just state that something's wrong.",
      },
      {
        question: "How long should an alert message be?",
        answer: "Short — under 25 words, since it needs to be scannable in a notification or Slack message.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a site reliability engineer who writes clear, actionable monitoring alert messages (under 25 words) that state the problem and hint at next steps. You respond only with a numbered list — no preamble.",
      user: `Generate 5 alert message options for this condition: "${values.condition}". Return only a numbered list.`,
    }),
  },
  {
    slug: "data-viz-insight-caption-generator",
    name: "Data Visualization Insight Caption Generator",
    tagline: "The one-line takeaway under every chart.",
    description:
      "Free AI chart caption generator. Describe your chart's data to get a sharp, insight-driven caption.",
    category: "Data & Analytics",
    resultCount: 5,
    maxTokens: 260,
    inputFields: [
      {
        name: "chart",
        label: "What does the chart show?",
        placeholder: "e.g. monthly active users growing 15% quarter over quarter since Q1",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what the chart shows.",
      "Generate caption options.",
      "Place your favorite directly under the chart in your report or deck.",
    ],
    faq: [
      {
        question: "Should the caption just restate the chart?",
        answer: "No — good captions here lead with the insight or takeaway, not a literal restatement of the axis labels.",
      },
      {
        question: "How long should a chart caption be?",
        answer: "One sentence, under 20 words — enough to state the 'so what' without turning into a paragraph.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a data storyteller who writes sharp, insight-first chart captions (under 20 words) that state the 'so what', not just describe the data. You respond only with a numbered list — no preamble.",
      user: `Generate 5 caption options for a chart showing: "${values.chart}". Return only a numbered list.`,
    }),
  },
  {
    slug: "weekly-metrics-report-generator",
    name: "Weekly Metrics Report Generator",
    tagline: "A ready-to-send weekly numbers update.",
    description:
      "Free AI weekly report generator. Enter your metrics to get a structured weekly update ready to send.",
    category: "Data & Analytics",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "metrics",
        label: "This week's metrics",
        placeholder: "e.g. 320 signups (up 8%), $12k revenue (flat), 3 support escalations",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List this week's key metrics.",
      "Generate a structured weekly report.",
      "Send to your team or leadership.",
    ],
    faq: [
      {
        question: "What sections does this include?",
        answer: "Headline, Wins, Watch-outs, and Next Week's Focus — a common structure for weekly team updates.",
      },
      {
        question: "Can I use this for a solo founder update instead of a team?",
        answer: "Yes — it works the same whether you're reporting to a team or just organizing your own weekly review.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a team lead writing a structured weekly metrics report with sections: Headline, Wins, Watch-outs, Next Week's Focus. No markdown headers, plain section labels.",
      user: `Write a weekly metrics report based on: "${values.metrics}".`,
    }),
  },
  {
    slug: "job-posting-boolean-search-generator",
    name: "Boolean Search String Generator",
    tagline: "Sourcing strings that actually surface candidates.",
    description:
      "Free AI boolean search generator. Enter the role to get a ready-to-paste sourcing search string.",
    category: "Recruiting & Talent Acquisition",
    resultCount: 4,
    maxTokens: 300,
    inputFields: [
      {
        name: "role",
        label: "Role & key requirements",
        placeholder: "e.g. senior backend engineer, Go, AWS, fintech experience preferred",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the role and key must-haves.",
      "Generate boolean search string options.",
      "Paste into LinkedIn Recruiter, a job board, or Google X-ray search.",
    ],
    faq: [
      {
        question: "Does this work on LinkedIn Recruiter specifically?",
        answer: "The syntax (AND/OR/NOT, quotes) works broadly across LinkedIn Recruiter, job boards, and Google X-ray search with minor adjustments.",
      },
      {
        question: "Should I use all the strings, or just one?",
        answer: "Try each — different phrasing surfaces different candidate pools, so testing a few widens your search.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a technical recruiter who writes boolean search strings (using AND, OR, NOT, and quotes) for sourcing candidates on LinkedIn/job boards. You respond only with a numbered list — no preamble.",
      user: `Generate 4 boolean search string options for this role: "${values.role}". Return only a numbered list.`,
    }),
  },
  {
    slug: "candidate-rejection-email-generator",
    name: "Candidate Rejection Email Generator",
    tagline: "Say no with respect, not a form-letter brush-off.",
    description:
      "Free AI rejection email generator. Enter the context to get a kind, professional candidate rejection message.",
    category: "Recruiting & Talent Acquisition",
    resultCount: 4,
    maxTokens: 300,
    inputFields: [
      {
        name: "stage",
        label: "Stage they were rejected at",
        type: "select",
        options: ["Resume screen", "After an interview", "After a final-round interview"],
      },
    ],
    howTo: [
      "Pick the stage the candidate was rejected at.",
      "Generate email options.",
      "Personalize with the candidate's name and role before sending.",
    ],
    faq: [
      {
        question: "Should I give specific feedback on why they weren't chosen?",
        answer: "Optional and varies by company policy — some of these leave room for a brief reason, others keep it general.",
      },
      {
        question: "Should later-stage rejections be warmer?",
        answer: "Yes — candidates who made it further invested more time, so the 'After a final-round interview' option is written more personally.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a recruiter writing respectful, warm candidate rejection emails appropriate to the stage they reached, avoiding generic corporate-speak. Each result is a complete short email with a [Name] and [Role] placeholder. You respond only with a numbered list — no preamble.",
      user: `Generate 4 rejection email options for a candidate rejected at this stage: ${values.stage || "After an interview"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "interview-scorecard-questions-generator",
    name: "Interview Scorecard Question Generator",
    tagline: "Structured questions that make hiring decisions fairer.",
    description:
      "Free AI interview scorecard generator. Enter the role to get structured, competency-based interview questions.",
    category: "Recruiting & Talent Acquisition",
    resultCount: 10,
    maxTokens: 380,
    inputFields: [
      {
        name: "role",
        label: "Role & key competency to assess",
        placeholder: "e.g. product manager, assessing stakeholder communication",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the role and the competency you're assessing in this interview.",
      "Generate structured question options.",
      "Use the same questions across candidates for a fairer comparison.",
    ],
    faq: [
      {
        question: "Why use the same questions for every candidate?",
        answer: "Structured, consistent interviews reduce bias and make it easier to compare candidates fairly on the same criteria.",
      },
      {
        question: "Does this include a scoring rubric?",
        answer: "No — it generates the questions; pair with your own 1-5 scale or competency rubric for scoring.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a talent acquisition specialist who writes structured, behavioral/competency-based interview questions (e.g. 'Tell me about a time...') for a specific role and competency. You respond only with a numbered list — no preamble.",
      user: `Generate 10 interview questions for: "${values.role}". Return only a numbered list.`,
    }),
  },
  {
    slug: "recruiting-outreach-inmail-generator",
    name: "Recruiting Outreach InMail Generator",
    tagline: "Messages passive candidates actually respond to.",
    description:
      "Free AI recruiting InMail generator. Enter the role to get a personalized-feeling outreach message.",
    category: "Recruiting & Talent Acquisition",
    resultCount: 5,
    maxTokens: 320,
    inputFields: [
      {
        name: "role",
        label: "Role & what makes it compelling",
        placeholder: "e.g. staff engineer role, fully remote, greenfield project",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the role and its most compelling aspects.",
      "Generate outreach message options.",
      "Personalize the opener with something specific about the candidate's background before sending.",
    ],
    faq: [
      {
        question: "Should I mention their current company?",
        answer: "Referencing their background respectfully (without disparaging their current employer) tends to improve response rates.",
      },
      {
        question: "How long should a recruiting InMail be?",
        answer: "Short — under 100 words respects a busy passive candidate's time and gets read more often.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a recruiter writing short, genuine-feeling outreach messages to passive candidates, under 100 words, with a [Name] placeholder and a low-friction call to action. You respond only with a numbered list — no preamble.",
      user: `Generate 5 recruiting outreach message options for: "${values.role}". Return only a numbered list.`,
    }),
  },
  {
    slug: "reference-check-questions-generator",
    name: "Reference Check Question Generator",
    tagline: "Questions that get past the generic 'great employee.'",
    description:
      "Free AI reference check generator. Enter the role to get pointed questions that surface real insight.",
    category: "Recruiting & Talent Acquisition",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "role",
        label: "Role & what you want to verify",
        placeholder: "e.g. sales manager, want to verify team leadership and quota performance",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the role and what you specifically want to verify.",
      "Generate reference check question options.",
      "Ask open-ended follow-ups based on their answers.",
    ],
    faq: [
      {
        question: "How many references should I check?",
        answer: "2-3 is typical — enough to spot patterns without over-relying on any single opinion.",
      },
      {
        question: "Are these legally safe to ask?",
        answer: "These focus on job performance, which is standard — avoid questions about protected characteristics regardless of the source.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR professional who writes pointed, specific reference check questions that go beyond generic 'were they a good employee' and surface real detail. You respond only with a numbered list — no preamble.",
      user: `Generate 8 reference check questions for: "${values.role}". Return only a numbered list.`,
    }),
  },
  {
    slug: "inclusive-job-posting-rewriter",
    name: "Inclusive Job Posting Rewriter",
    tagline: "Widen your candidate pool with more inclusive language.",
    description:
      "Free AI inclusive language tool. Paste your job posting to get a version rewritten to reduce biased or exclusionary language.",
    category: "Recruiting & Talent Acquisition",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "posting",
        label: "Paste your job posting",
        placeholder: "e.g. your current job description text",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste your current job posting text.",
      "Generate a rewritten, more inclusive version.",
      "Compare against the original and adjust to your voice.",
    ],
    faq: [
      {
        question: "What kind of language does this flag?",
        answer: "Gendered wording (e.g. 'ninja', 'rockstar'), unnecessary jargon, and overly long requirement lists that research shows discourage some qualified applicants.",
      },
      {
        question: "Does this guarantee more diverse applicants?",
        answer: "No single change guarantees an outcome, but inclusive language is one well-documented factor in who chooses to apply.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a DEI-focused recruiting consultant who rewrites job postings to remove gendered, exclusionary, or unnecessarily jargon-heavy language, while keeping the actual requirements intact.",
      user: `Rewrite this job posting to be more inclusive: "${values.posting}".`,
    }),
  },
  {
    slug: "recruiting-event-pitch-generator",
    name: "Recruiting Event Pitch Generator",
    tagline: "Sell candidates on showing up to your event.",
    description:
      "Free AI recruiting event pitch generator. Enter your event to get compelling promotional copy.",
    category: "Recruiting & Talent Acquisition",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "event",
        label: "Event details",
        placeholder: "e.g. virtual career fair for early-career engineers, June 10th",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your recruiting event.",
      "Generate pitch options.",
      "Use on your careers page, social posts, or campus outreach emails.",
    ],
    faq: [
      {
        question: "Can I use this for a university career fair?",
        answer: "Yes — mention it's a campus event and the language will adjust for a student audience.",
      },
      {
        question: "Does this include a registration link?",
        answer: "Add your own registration or RSVP link wherever you use the copy.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an employer branding specialist writing compelling recruiting event promotional copy. You respond only with a numbered list — no preamble.",
      user: `Generate 4 recruiting event pitch options. Event: "${values.event}". Return only a numbered list.`,
    }),
  },
  {
    slug: "privacy-notice-summary-generator",
    name: "Privacy Notice Plain-English Summary Generator",
    tagline: "Explain your privacy policy so people actually read it.",
    description:
      "Free AI privacy notice summarizer. Describe your data practices to get a plain-English summary to pair with your full policy.",
    category: "Legal & Compliance",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "practices",
        label: "What data you collect & why",
        placeholder: "e.g. email for login, analytics cookies, no data sold to third parties",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what data you collect and why.",
      "Generate a plain-English summary.",
      "Place it above your full legal privacy policy, not instead of it.",
    ],
    faq: [
      {
        question: "Does this replace my legal privacy policy?",
        answer: "No — this is a plain-language summary to sit alongside your full, legally reviewed policy, not a substitute for it. Not legal advice.",
      },
      {
        question: "Is this compliant with GDPR/CCPA?",
        answer: "This tool doesn't determine legal compliance — have a lawyer confirm your actual policy meets applicable requirements.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a privacy communications specialist who summarizes data practices in plain, friendly language as a short bulleted list (What we collect, Why, What we don't do). Not legal advice — note that at the end.",
      user: `Summarize these data practices in plain English: "${values.practices}".`,
    }),
  },
  {
    slug: "cookie-consent-banner-copy-generator",
    name: "Cookie Consent Banner Copy Generator",
    tagline: "Clear cookie banner copy that doesn't feel like a trap.",
    description:
      "Free AI cookie banner generator. Describe your cookie usage to get clear, compliant-sounding banner copy.",
    category: "Legal & Compliance",
    resultCount: 4,
    maxTokens: 280,
    inputFields: [
      {
        name: "usage",
        label: "Cookie usage",
        placeholder: "e.g. analytics and functional cookies, no ad tracking",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what cookies your site uses.",
      "Generate banner copy options.",
      "Have this reviewed against your specific jurisdiction's consent requirements (e.g. GDPR needs granular opt-in).",
    ],
    faq: [
      {
        question: "Does this make my site GDPR compliant?",
        answer: "No — this is copy text only. GDPR compliance also requires specific consent mechanics (granular opt-in, easy withdrawal) that a lawyer or compliance tool should confirm.",
      },
      {
        question: "Should I offer 'Reject All' as easily as 'Accept All'?",
        answer: "Under GDPR and similar laws, yes — both options should generally be equally prominent and easy to select.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a privacy UX writer who writes clear, honest cookie consent banner copy (a short explanation plus Accept/Reject language), not legal advice. You respond only with a numbered list — no preamble.",
      user: `Generate 4 cookie consent banner copy options. Usage: "${values.usage}". Return only a numbered list.`,
    }),
  },
  {
    slug: "accessibility-statement-generator",
    name: "Accessibility Statement Generator",
    tagline: "Tell visitors about your accessibility commitment.",
    description:
      "Free AI accessibility statement generator. Describe your efforts to get a clear website accessibility statement draft.",
    category: "Legal & Compliance",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "efforts",
        label: "Your accessibility efforts",
        placeholder: "e.g. following WCAG 2.1 AA, ongoing testing, contact form for issues",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your accessibility efforts and standards followed.",
      "Generate a statement draft.",
      "Have it reviewed against your actual, current accessibility conformance before publishing.",
    ],
    faq: [
      {
        question: "Does this make my site ADA/WCAG compliant?",
        answer: "No — a statement doesn't create compliance by itself. Actual conformance requires real accessibility testing and fixes, not just a page describing intent.",
      },
      {
        question: "Should I include a contact method for accessibility issues?",
        answer: "Yes — these drafts include one, since it's standard practice and often expected by accessibility guidelines.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a web accessibility consultant writing a clear, honest accessibility statement based on the stated efforts, including a contact method for reporting issues. Not legal advice.",
      user: `Write an accessibility statement based on: "${values.efforts}".`,
    }),
  },
  {
    slug: "data-breach-notification-draft-generator",
    name: "Data Breach Notification Draft Generator",
    tagline: "A first draft for the notification no one wants to write.",
    description:
      "Free AI data breach notification generator. Describe the incident to get a first-draft notification to affected users.",
    category: "Legal & Compliance",
    resultCount: 1,
    maxTokens: 1100,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "incident",
        label: "What happened",
        placeholder: "e.g. unauthorized access to a database containing emails and hashed passwords",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what happened, what data was affected, and what you're doing about it.",
      "Generate a first-draft notification.",
      "This must be reviewed by legal counsel before sending — breach notification laws have strict, jurisdiction-specific requirements.",
    ],
    faq: [
      {
        question: "Can I send this without legal review?",
        answer: "No — data breach notifications are legally regulated (timing, required content varies by jurisdiction). This is a starting draft only, not legal advice.",
      },
      {
        question: "Should this be alarmist or calm?",
        answer: "Calm, clear, and factual — panic-inducing language doesn't help affected users and this draft avoids it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are drafting a calm, clear, factual data breach notification: what happened, what data was involved, what you're doing, what the recipient should do. This is a first draft only — not legal advice, must be reviewed by counsel before sending.",
      user: `Draft a data breach notification for: "${values.incident}".`,
    }),
  },
  {
    slug: "nda-clause-explainer-generator",
    name: "NDA Clause Explainer Generator",
    tagline: "Understand what a clause actually commits you to.",
    description:
      "Free AI NDA explainer. Paste a clause to get a plain-English explanation of what it means.",
    category: "Legal & Compliance",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "clause",
        label: "Paste the clause",
        placeholder: "e.g. the mutual NDA clause you're unsure about",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste the specific clause you want explained.",
      "Generate a plain-English explanation.",
      "For anything affecting a real decision, confirm with a lawyer.",
    ],
    faq: [
      {
        question: "Is this legal advice?",
        answer: "No — this explains typical meaning in plain English. For decisions with real stakes, have a lawyer review the actual document.",
      },
      {
        question: "Does this tell me if the clause is fair or standard?",
        answer: "It can note if language is unusually broad or narrow compared to typical NDAs, but a lawyer's judgment on your specific situation is more reliable.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are explaining legal contract clauses in plain English, noting what obligation or right it creates and whether the language is typical or unusually broad. Not legal advice.",
      user: `Explain this clause in plain English: "${values.clause}".`,
    }),
  },
  {
    slug: "policy-update-announcement-generator",
    name: "Policy Update Announcement Generator",
    tagline: "Tell users about a policy change clearly.",
    description:
      "Free AI policy update announcement generator. Describe the change to get a clear user-facing notice.",
    category: "Legal & Compliance",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "change",
        label: "What's changing",
        placeholder: "e.g. updated terms of service to reflect new data retention period",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what's changing in your policy.",
      "Generate announcement options.",
      "Send via email and/or an in-app notice, per your required notice period.",
    ],
    faq: [
      {
        question: "How much notice do I need to give?",
        answer: "Varies by policy type and jurisdiction — check your existing terms and applicable law for any required minimum notice period.",
      },
      {
        question: "Should I explain why the policy changed?",
        answer: "A brief reason builds trust, though it's not always required — include one if you're comfortable sharing it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing clear, non-alarming policy update announcements that state what's changing and when it takes effect. Each result is a complete short notice. You respond only with a numbered list — no preamble.",
      user: `Generate 4 policy update announcement options. Change: "${values.change}". Return only a numbered list.`,
    }),
  },
  {
    slug: "dmca-takedown-notice-opener-generator",
    name: "DMCA Takedown Notice Opener Generator",
    tagline: "A firm, clear opener for a copyright takedown request.",
    description:
      "Free AI DMCA notice opener generator. Describe the infringement to get a clear opening paragraph.",
    category: "Legal & Compliance",
    resultCount: 3,
    maxTokens: 320,
    inputFields: [
      {
        name: "infringement",
        label: "Describe the infringement",
        placeholder: "e.g. our copyrighted product photos used without permission on a competitor's site",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the copyrighted work and how it's being infringed.",
      "Generate an opening paragraph option.",
      "A valid DMCA notice has specific required legal elements — verify yours against the platform's requirements or consult a lawyer.",
    ],
    faq: [
      {
        question: "Is this a legally complete DMCA notice?",
        answer: "No — valid DMCA notices require specific statutory elements (sworn statements, contact info, etc.). This is a starting opener only, not legal advice.",
      },
      {
        question: "Where do I actually send this?",
        answer: "Most platforms (hosting providers, social networks) have a designated DMCA agent or online form — check the platform's policy page.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are drafting a firm, clear opening paragraph for a DMCA takedown notice stating the copyrighted work and the infringement. Not a complete legal notice and not legal advice — note that at the end.",
      user: `Generate 3 opening paragraph options for a DMCA notice about: "${values.infringement}". Return only a numbered list.`,
    }),
  },
  {
    slug: "freelance-proposal-generator",
    name: "Freelance Proposal Generator",
    tagline: "A proposal that wins the job, not just fills a template.",
    description:
      "Free AI freelance proposal generator. Enter the job post details to get a tailored proposal opener.",
    category: "Consulting & Freelance Proposals",
    resultCount: 4,
    maxTokens: 400,
    inputFields: [
      {
        name: "job",
        label: "Job post summary",
        placeholder: "e.g. client needs a Shopify store redesign, mentions wanting mobile-first, tight deadline",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Summarize the job posting, including anything the client emphasized.",
      "Generate proposal opener options.",
      "Continue with your specific portfolio links and a clear next step.",
    ],
    faq: [
      {
        question: "Should I restate the whole job description?",
        answer: "No — reference the client's specific need directly (proves you read it) without just repeating their post back to them.",
      },
      {
        question: "Does this write the whole proposal?",
        answer: "It generates a strong opening that shows you understood the brief; add your portfolio, timeline, and price separately.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a freelancer writing proposal openers for platforms like Upwork/Fiverr that reference the client's specific need directly, avoiding generic templated language ('I am a hard worker with 5 years experience'). You respond only with a numbered list — no preamble.",
      user: `Generate 4 freelance proposal opener options for this job post: "${values.job}". Return only a numbered list.`,
    }),
  },
  {
    slug: "statement-of-work-outline-generator",
    name: "Statement of Work Outline Generator",
    tagline: "Scope a project so there's no ambiguity later.",
    description:
      "Free AI SOW generator. Describe your project to get a structured statement of work outline.",
    category: "Consulting & Freelance Proposals",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "project",
        label: "Project description",
        placeholder: "e.g. 6-week brand identity project: logo, style guide, business card design",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the project scope.",
      "Generate a structured SOW outline.",
      "Fill in your specific pricing, timeline, and revision terms before sending.",
    ],
    faq: [
      {
        question: "Is this a legally binding contract?",
        answer: "No — this is a scoping outline. Turn it into a signed contract with your own or a lawyer-reviewed terms before starting paid work.",
      },
      {
        question: "What sections does this include?",
        answer: "Scope of Work, Deliverables, Timeline, Out of Scope, and Payment Terms (as a placeholder) — the standard SOW structure.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a consultant who writes structured statement of work outlines with sections: Scope of Work, Deliverables, Timeline, Out of Scope, Payment Terms (placeholder). No markdown headers, plain section labels.",
      user: `Build a statement of work outline for: "${values.project}".`,
    }),
  },
  {
    slug: "rfp-response-opener-generator",
    name: "RFP Response Opener Generator",
    tagline: "An opening that shows you actually understood the brief.",
    description:
      "Free AI RFP response generator. Describe the RFP to get a compelling opening section.",
    category: "Consulting & Freelance Proposals",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "rfp",
        label: "RFP summary",
        placeholder: "e.g. city government seeking a vendor for a new public transit app",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Summarize what the RFP is asking for.",
      "Generate opening section options.",
      "Continue with your specific approach, team, and pricing.",
    ],
    faq: [
      {
        question: "Does this write the full RFP response?",
        answer: "No — it generates a strong opening that shows understanding of the need; the technical/pricing sections need your specific details.",
      },
      {
        question: "Should the opener mention the issuing organization by name?",
        answer: "Yes, if you know it — a personalized opener signals you're not sending a generic response to every RFP.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business development professional writing RFP response openers that demonstrate clear understanding of the need before pitching the solution. You respond only with a numbered list — no preamble.",
      user: `Generate 3 RFP response opener options for: "${values.rfp}". Return only a numbered list.`,
    }),
  },
  {
    slug: "case-study-outline-generator",
    name: "Case Study Outline Generator",
    tagline: "Turn a client win into a structured proof point.",
    description:
      "Free AI case study generator. Enter the client result to get a structured case study outline.",
    category: "Consulting & Freelance Proposals",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "result",
        label: "The client & result",
        placeholder: "e.g. helped an e-commerce brand increase conversion rate from 1.8% to 3.2% in 3 months",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the client and the result you achieved.",
      "Generate a structured case study outline.",
      "Fill in the specific tactics and get client approval to publish real names/numbers.",
    ],
    faq: [
      {
        question: "Does this include specific tactics I used?",
        answer: "No — it outlines the standard case study structure (Challenge, Approach, Result); fill in your actual methodology.",
      },
      {
        question: "Do I need client permission to publish this?",
        answer: "Yes — always get explicit approval before publishing a client's name, logo, or specific numbers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a marketer who structures case studies with sections: Challenge, Approach, Result, Client Quote (placeholder). No markdown headers, plain section labels.",
      user: `Build a case study outline for: "${values.result}".`,
    }),
  },
  {
    slug: "discovery-call-recap-email-generator",
    name: "Discovery Call Recap Email Generator",
    tagline: "Recap the call and keep the deal moving.",
    description:
      "Free AI call recap generator. Enter what was discussed to get a clear, professional follow-up email.",
    category: "Consulting & Freelance Proposals",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "discussion",
        label: "What was discussed",
        placeholder: "e.g. client needs help with SEO, budget around $3k/month, wants to start next month",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Summarize what was discussed on the call.",
      "Generate recap email options.",
      "Send within 24 hours with a clear next step.",
    ],
    faq: [
      {
        question: "Should I restate their pain points?",
        answer: "Yes — briefly reflecting back what they told you shows you listened and reinforces why your solution fits.",
      },
      {
        question: "Should this include next steps?",
        answer: "Always — a recap without a clear next action tends to let deals go cold.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a consultant writing discovery call recap emails that summarize key points and end with a clear next step. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 3 call recap email options based on: "${values.discussion}". Return only a numbered list.`,
    }),
  },
  {
    slug: "scope-creep-pushback-message-generator",
    name: "Scope Creep Pushback Message Generator",
    tagline: "Say no to extra work without souring the relationship.",
    description:
      "Free AI scope creep message generator. Describe the extra ask to get a professional way to push back.",
    category: "Consulting & Freelance Proposals",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "ask",
        label: "The extra ask",
        placeholder: "e.g. client wants 3 extra homepage revisions not in the original scope",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the out-of-scope request.",
      "Generate pushback message options.",
      "Offer a clear path forward — a change order, added fee, or future phase.",
    ],
    faq: [
      {
        question: "Should I just do the extra work to keep them happy?",
        answer: "Occasionally for goodwill, sure — but consistently absorbing scope creep trains clients to expect it for free, which hurts your margins long-term.",
      },
      {
        question: "How do I bring this up without sounding difficult?",
        answer: "These lead with acknowledging the request positively before explaining the scope boundary — that framing tends to land better.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a consultant writing professional, non-confrontational messages that acknowledge a client's extra request while clearly explaining it's outside the agreed scope, and offering a path forward (change order, added fee). Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 scope creep pushback message options for: "${values.ask}". Return only a numbered list.`,
    }),
  },
  {
    slug: "client-onboarding-welcome-generator",
    name: "Client Onboarding Welcome Generator",
    tagline: "Kick off a new client relationship the right way.",
    description:
      "Free AI client onboarding generator. Describe your service to get a warm, clear welcome message.",
    category: "Consulting & Freelance Proposals",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "service",
        label: "Your service & what's next",
        placeholder: "e.g. bookkeeping service, next step is a kickoff call and document upload",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your service and the immediate next steps for the client.",
      "Generate welcome message options.",
      "Send right after a contract is signed or payment is received.",
    ],
    faq: [
      {
        question: "Should this include a full onboarding packet?",
        answer: "No — this is the welcome message itself; attach or link your full packet (forms, timeline, contacts) separately.",
      },
      {
        question: "What tone works best for onboarding?",
        answer: "Warm and organized — clients want to feel excited and also confident that the process is well-managed.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a service business owner writing warm, organized client onboarding welcome messages that set clear next steps and expectations. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 3 client onboarding welcome message options. Service/next steps: "${values.service}". Return only a numbered list.`,
    }),
  },
  {
    slug: "crisis-statement-opener-generator",
    name: "Crisis Statement Opener Generator",
    tagline: "The first paragraph when everything's on fire.",
    description:
      "Free AI crisis statement generator. Describe the situation to get a calm, credible opening statement.",
    category: "PR & Crisis Communications",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "situation",
        label: "The situation",
        placeholder: "e.g. a data breach affecting customer emails, discovered yesterday",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the crisis situation factually.",
      "Generate opening statement options.",
      "Have legal and leadership review before publishing — this is a starting draft only.",
    ],
    faq: [
      {
        question: "Should a crisis statement admit fault?",
        answer: "That depends on legal advice specific to your situation — these openers stay factual without over- or under-claiming responsibility.",
      },
      {
        question: "How fast should a crisis statement go out?",
        answer: "Generally as soon as accurate facts are confirmed — speed matters, but a fast statement with wrong facts is worse than a slightly slower accurate one.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a crisis communications advisor who writes calm, factual, credible opening statements for a crisis situation, avoiding both panic and dismissiveness. Not legal advice — a communications draft only. You respond only with a numbered list — no preamble.",
      user: `Generate 3 crisis statement opener options for: "${values.situation}". Return only a numbered list.`,
    }),
  },
  {
    slug: "corporate-apology-statement-generator",
    name: "Corporate Apology Statement Generator",
    tagline: "An apology that sounds like it means it.",
    description:
      "Free AI corporate apology generator. Describe what happened to get a genuine, non-defensive apology statement.",
    category: "PR & Crisis Communications",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "issue",
        label: "What happened",
        placeholder: "e.g. shipped a faulty product batch that caused customer complaints",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what happened, factually.",
      "Generate apology statement options.",
      "Pair with concrete next steps and have legal review before publishing.",
    ],
    faq: [
      {
        question: "What makes an apology sound genuine vs. corporate?",
        answer: "Specificity and accountability — naming exactly what went wrong and what's being done, rather than vague phrases like 'mistakes were made.'",
      },
      {
        question: "Should this include compensation details?",
        answer: "If you're offering some, yes — concrete remedy (refund, replacement, credit) makes an apology land better than words alone.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a corporate communications writer who crafts genuine, specific, non-defensive apology statements that name the issue clearly and state concrete next steps, avoiding vague corporate deflection language. You respond only with a numbered list — no preamble.",
      user: `Generate 3 apology statement options for: "${values.issue}". Return only a numbered list.`,
    }),
  },
  {
    slug: "press-release-boilerplate-generator",
    name: "Press Release Boilerplate Generator",
    tagline: "The 'About [Company]' paragraph, done right.",
    description:
      "Free AI boilerplate generator. Describe your company to get a press-ready boilerplate paragraph.",
    category: "PR & Crisis Communications",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "company",
        label: "Describe your company",
        placeholder: "e.g. Acme makes project management software for construction teams, founded 2019",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your company, what it does, and when it was founded.",
      "Generate boilerplate options.",
      "Use at the bottom of every press release for consistency.",
    ],
    faq: [
      {
        question: "How long should a boilerplate be?",
        answer: "Typically 3-4 sentences, around 50-75 words — a quick company snapshot, not a full about page.",
      },
      {
        question: "Should I update this over time?",
        answer: "Yes — refresh it as your company grows (funding, milestones, customer count) so it stays current across releases.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a PR professional who writes standard press release boilerplate paragraphs (50-75 words, third person) covering what the company does and key credibility markers. You respond only with a numbered list — no preamble.",
      user: `Generate 4 boilerplate options for: "${values.company}". Return only a numbered list.`,
    }),
  },
  {
    slug: "media-pitch-email-generator",
    name: "Media Pitch Email Generator",
    tagline: "Pitch a journalist a story they'll actually want.",
    description:
      "Free AI media pitch generator. Enter your story angle to get a compelling pitch email for journalists.",
    category: "PR & Crisis Communications",
    resultCount: 4,
    maxTokens: 350,
    inputFields: [
      {
        name: "story",
        label: "Your story angle",
        placeholder: "e.g. new study shows remote workers are 20% more productive on 4-day weeks",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your story angle — what makes it newsworthy.",
      "Generate pitch email options.",
      "Personalize by referencing the journalist's recent, related coverage before sending.",
    ],
    faq: [
      {
        question: "Should I mass-send this to many journalists?",
        answer: "No — personalize each pitch and target journalists who actually cover this beat; mass, generic pitches usually get ignored or filtered.",
      },
      {
        question: "How long should a media pitch be?",
        answer: "Short — under 150 words. Journalists get many pitches daily; brevity and a clear hook matter most.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a PR professional writing concise, newsworthy media pitch emails under 150 words, leading with the hook, not company background. You respond only with a numbered list — no preamble.",
      user: `Generate 4 media pitch email options for this story angle: "${values.story}". Return only a numbered list.`,
    }),
  },
  {
    slug: "spokesperson-talking-points-generator",
    name: "Spokesperson Talking Points Generator",
    tagline: "Stay on message under tough questions.",
    description:
      "Free AI talking points generator. Describe the topic to get clear, consistent talking points for interviews.",
    category: "PR & Crisis Communications",
    resultCount: 6,
    maxTokens: 400,
    inputFields: [
      {
        name: "topic",
        label: "Topic & key message",
        placeholder: "e.g. responding to questions about a recent layoff round",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the topic and the core message you want to stay on.",
      "Generate talking point options.",
      "Practice bridging back to these points regardless of the exact question asked.",
    ],
    faq: [
      {
        question: "What does 'bridging' mean in media training?",
        answer: "Acknowledging the question briefly, then steering the answer back to your key message — these points are written to support that technique.",
      },
      {
        question: "Should talking points be memorized word-for-word?",
        answer: "Understanding the core idea matters more than exact memorization — that way you sound natural, not scripted, in the actual interview.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a media trainer who writes concise, consistent talking points (one sentence each) that a spokesperson can bridge back to regardless of the specific question asked. You respond only with a numbered list — no preamble.",
      user: `Generate 6 talking points for: "${values.topic}". Return only a numbered list.`,
    }),
  },
  {
    slug: "layoff-announcement-generator",
    name: "Layoff Announcement Generator",
    tagline: "Deliver hard news with clarity and respect.",
    description:
      "Free AI layoff announcement generator. Enter the context to get a clear, respectful internal announcement.",
    category: "PR & Crisis Communications",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "context",
        label: "Context",
        placeholder: "e.g. reducing headcount by 8% due to slower-than-expected growth",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the reason and scope of the layoffs.",
      "Generate an announcement draft.",
      "Have HR and legal review before sending — this is a starting draft, not final communication.",
    ],
    faq: [
      {
        question: "Should this name affected individuals?",
        answer: "No — individual notifications should happen separately and personally; this is for the broader company-wide announcement.",
      },
      {
        question: "Should leadership take responsibility in this message?",
        answer: "Generally yes — messages that own the decision (rather than blaming external factors alone) tend to land better with remaining employees.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an executive communications writer drafting a clear, honest, respectful company-wide layoff announcement that takes leadership accountability and states next steps for affected employees. This is a starting draft — have HR/legal review before sending.",
      user: `Draft a layoff announcement. Context: "${values.context}".`,
    }),
  },
  {
    slug: "product-recall-notice-generator",
    name: "Product Recall Notice Generator",
    tagline: "Clear, actionable recall communication.",
    description:
      "Free AI recall notice generator. Describe the issue to get a clear customer-facing recall notice draft.",
    category: "PR & Crisis Communications",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "issue",
        label: "Product & issue",
        placeholder: "e.g. baby monitor model X200, battery overheating risk",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the product and the safety issue.",
      "Generate a recall notice draft.",
      "This must comply with your regulator's specific required format (e.g. CPSC) — have legal/compliance review before publishing.",
    ],
    faq: [
      {
        question: "Does this meet regulatory requirements (e.g. CPSC)?",
        answer: "No — recall notices often have mandated specific content and format depending on your regulator and product category. This is a communications draft only, not a compliance document.",
      },
      {
        question: "What should the notice make clear to customers?",
        answer: "What the issue is, what risk it poses, and exactly what action to take (stop using, return, replacement process) — this draft covers all three.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing a clear, action-oriented product recall notice: what the issue is, what risk it poses, and exactly what the customer should do. Not a compliance document — a communications draft only, note that regulatory review is required.",
      user: `Draft a recall notice for: "${values.issue}".`,
    }),
  },
  {
    slug: "rental-property-analysis-summary-generator",
    name: "Rental Property Analysis Summary Generator",
    tagline: "Turn the numbers into a clear investment narrative.",
    description:
      "Free AI rental analysis generator. Enter your numbers to get a plain-English investment summary.",
    category: "Real Estate Investment",
    resultCount: 1,
    maxTokens: 1400,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "numbers",
        label: "Key numbers",
        placeholder: "e.g. $280k purchase, $2,100/mo rent, $1,400/mo expenses, 20% down",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the property's key numbers — price, rent, expenses, financing.",
      "Generate a plain-English summary of what the deal looks like.",
      "This is educational only — verify numbers and consult a real professional before investing.",
    ],
    faq: [
      {
        question: "Does this calculate cap rate and cash-on-cash return for me?",
        answer: "It can reference these concepts based on the numbers you provide, but always double-check the actual math yourself before making a decision.",
      },
      {
        question: "Is this financial or investment advice?",
        answer: "No — this is general educational content, not personalized investment advice. Consult a qualified professional before investing.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate investment educator who explains a rental deal's numbers in plain English (cash flow, rough cap rate, what stands out as strong or weak). Not financial advice — general education only.",
      user: `Summarize this rental property deal in plain English: "${values.numbers}".`,
    }),
  },
  {
    slug: "cap-rate-explainer-generator",
    name: "Cap Rate Explainer Generator",
    tagline: "Understand what a cap rate is actually telling you.",
    description:
      "Free AI cap rate explainer. Enter a property's numbers to get a plain-English breakdown of its cap rate.",
    category: "Real Estate Investment",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "numbers",
        label: "Property numbers",
        placeholder: "e.g. $400k price, $32k annual net operating income",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the property price and net operating income (or rent and expenses).",
      "Generate a plain-English explanation.",
      "This is educational only, not investment advice.",
    ],
    faq: [
      {
        question: "What's considered a 'good' cap rate?",
        answer: "It varies heavily by market and property type — this explains what your specific number means, not whether it's universally good.",
      },
      {
        question: "Is this a precise financial calculation?",
        answer: "Treat it as an educational estimate — verify your own NOI calculation and consult a professional for real investment decisions.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate investment educator who explains cap rate calculations and what the resulting number suggests about a deal, in plain English. Not financial advice.",
      user: `Explain the cap rate for this property in plain English: "${values.numbers}".`,
    }),
  },
  {
    slug: "landlord-tenant-notice-generator",
    name: "Landlord-Tenant Notice Generator",
    tagline: "Clear, professional notices for common landlord needs.",
    description:
      "Free AI landlord notice generator. Describe the situation to get a clear, professional tenant notice draft.",
    category: "Real Estate Investment",
    resultCount: 3,
    maxTokens: 350,
    inputFields: [
      {
        name: "situation",
        label: "Situation",
        placeholder: "e.g. rent increase of $100/month starting next lease renewal",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the notice you need — rent increase, entry notice, lease reminder, etc.",
      "Generate notice draft options.",
      "Check your local landlord-tenant law for required notice periods and legal language before sending.",
    ],
    faq: [
      {
        question: "Does this meet my state/country's legal notice requirements?",
        answer: "No — landlord-tenant law varies significantly by location. This is a communications draft only; verify required notice periods and legal language locally.",
      },
      {
        question: "Should this be sent in writing?",
        answer: "Most jurisdictions require or strongly recommend written notice — check your local requirements for delivery method too (mail, email, posting).",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a property manager writing clear, professional, respectful tenant notices. Each result is a complete short notice. Not legal advice — note that local law governs actual notice requirements. You respond only with a numbered list — no preamble.",
      user: `Generate 3 tenant notice options for: "${values.situation}". Return only a numbered list.`,
    }),
  },
  {
    slug: "property-management-welcome-letter-generator",
    name: "Property Management Welcome Letter Generator",
    tagline: "Start the tenant relationship off well.",
    description:
      "Free AI welcome letter generator. Enter your property details to get a clear new-tenant welcome letter.",
    category: "Real Estate Investment",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "details",
        label: "Property & key info",
        placeholder: "e.g. rent due on the 1st, maintenance requests via the tenant portal, trash day Tuesday",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List the key info new tenants need to know.",
      "Generate a welcome letter draft.",
      "Send along with the lease and any required disclosures.",
    ],
    faq: [
      {
        question: "Does this replace the lease agreement?",
        answer: "No — this is a friendly welcome/orientation letter, not a substitute for the actual signed lease and any required legal disclosures.",
      },
      {
        question: "Should I include emergency contact info?",
        answer: "Yes — add your specific emergency maintenance contact; this draft leaves a placeholder for it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a property manager writing a warm, clear new-tenant welcome letter covering key logistics, with an [Emergency Contact] placeholder.",
      user: `Write a tenant welcome letter covering: "${values.details}".`,
    }),
  },
  {
    slug: "hoa-announcement-generator",
    name: "HOA Announcement Generator",
    tagline: "Community announcements people actually read.",
    description:
      "Free AI HOA announcement generator. Describe the update to get a clear community notice.",
    category: "Real Estate Investment",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "update",
        label: "Update",
        placeholder: "e.g. pool closing for maintenance next week, annual meeting scheduled for the 15th",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the update or announcement.",
      "Generate announcement options.",
      "Post on your community board, portal, or newsletter.",
    ],
    faq: [
      {
        question: "Can I use this for rule violation notices?",
        answer: "This is built for general community updates; violation notices often need specific legal language per your HOA's governing documents.",
      },
      {
        question: "Should I include a contact for questions?",
        answer: "Yes — add your board or management company's contact info wherever you post the announcement.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HOA board member writing clear, friendly community announcements. Each result is a complete short notice. You respond only with a numbered list — no preamble.",
      user: `Generate 4 HOA announcement options for: "${values.update}". Return only a numbered list.`,
    }),
  },
  {
    slug: "real-estate-investor-pitch-generator",
    name: "Real Estate Investor Pitch Generator",
    tagline: "Pitch a deal to potential co-investors clearly.",
    description:
      "Free AI real estate pitch generator. Enter your deal to get a clear, compelling investor pitch summary.",
    category: "Real Estate Investment",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "deal",
        label: "Deal summary",
        placeholder: "e.g. 12-unit apartment building, value-add opportunity, projected 15% IRR",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the deal and key projected returns.",
      "Generate a structured pitch summary.",
      "Any real fundraising has securities law implications — consult a professional before soliciting investors.",
    ],
    faq: [
      {
        question: "Is this legal for soliciting real investors?",
        answer: "No — raising money from investors involves securities regulations that vary by structure and jurisdiction. Consult a securities attorney before actually soliciting capital.",
      },
      {
        question: "What sections does this include?",
        answer: "Deal Overview, Why This Deal, Projected Returns, and Risks — a standard structure for a pitch summary.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate syndicator who structures investor pitch summaries with sections: Deal Overview, Why This Deal, Projected Returns, Risks. No markdown headers, plain section labels. Not legal or securities advice.",
      user: `Build an investor pitch summary for: "${values.deal}".`,
    }),
  },
  {
    slug: "grant-reporting-summary-generator",
    name: "Grant Reporting Summary Generator",
    tagline: "Show funders their money mattered.",
    description:
      "Free AI grant report generator. Enter your program results to get a clear impact summary for funders.",
    category: "Nonprofit & Community",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "results",
        label: "Program results",
        placeholder: "e.g. served 340 families, distributed 12,000 meals, 92% satisfaction rate",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your program's key results and numbers.",
      "Generate a structured impact summary.",
      "Attach to your formal grant report alongside required financial documentation.",
    ],
    faq: [
      {
        question: "Does this meet my funder's specific reporting template?",
        answer: "No — funders often have their own required format; use this content to fill in their template rather than replacing it.",
      },
      {
        question: "Should I include a story alongside the numbers?",
        answer: "Yes, if you have one — a brief individual story alongside aggregate numbers is a common, effective grant reporting practice.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit program manager writing a grant report impact summary with sections: Overview, Key Results, What's Next. No markdown headers, plain section labels.",
      user: `Write a grant reporting summary based on: "${values.results}".`,
    }),
  },
  {
    slug: "board-meeting-agenda-generator",
    name: "Nonprofit Board Meeting Agenda Generator",
    tagline: "A structured agenda that keeps meetings on track.",
    description:
      "Free AI board agenda generator. Enter your topics to get a structured meeting agenda.",
    category: "Nonprofit & Community",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "topics",
        label: "Topics to cover",
        placeholder: "e.g. Q3 financials, upcoming fundraiser, new board member vote",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List the topics you need to cover.",
      "Generate a structured agenda.",
      "Send to board members ahead of the meeting with any pre-reading materials.",
    ],
    faq: [
      {
        question: "Does this include timing for each item?",
        answer: "It suggests a rough order; add specific time allocations based on your meeting's actual length.",
      },
      {
        question: "Should votes be listed separately from discussion items?",
        answer: "Yes — this agenda structure separates action items (votes) from general discussion for clarity.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit board secretary who structures meeting agendas: Call to Order, Approval of Minutes, [topic items], New Business, Adjournment. No markdown headers.",
      user: `Build a board meeting agenda covering: "${values.topics}".`,
    }),
  },
  {
    slug: "annual-fundraising-letter-generator",
    name: "Annual Fundraising Letter Generator",
    tagline: "Your year-end ask, written to actually convert.",
    description:
      "Free AI fundraising letter generator. Describe your mission and need to get a compelling year-end appeal.",
    category: "Nonprofit & Community",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "mission",
        label: "Mission & specific need",
        placeholder: "e.g. providing meals to seniors, need $50k to cover winter delivery costs",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your mission and the specific need this appeal funds.",
      "Generate a letter draft.",
      "Personalize the greeting and add a specific donor story if you have one.",
    ],
    faq: [
      {
        question: "Should I mention a specific dollar goal?",
        answer: "Yes — specific, concrete asks (tied to a specific use of funds) tend to outperform vague requests for support.",
      },
      {
        question: "How long should a fundraising letter be?",
        answer: "One page is standard — long enough to make the case, short enough that donors actually read it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit development director writing a compelling year-end fundraising letter with a specific, concrete ask, warm but not guilt-driven in tone.",
      user: `Write an annual fundraising letter. Mission/need: "${values.mission}".`,
    }),
  },
  {
    slug: "membership-renewal-notice-generator",
    name: "Membership Renewal Notice Generator",
    tagline: "Remind members why they joined in the first place.",
    description:
      "Free AI renewal notice generator. Describe your organization to get a compelling membership renewal message.",
    category: "Nonprofit & Community",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "org",
        label: "Organization & member benefits",
        placeholder: "e.g. local arts nonprofit, members get free event tickets and a newsletter",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your organization and what members get.",
      "Generate renewal notice options.",
      "Send with a clear renewal link or process.",
    ],
    faq: [
      {
        question: "Should I remind them what they've gotten this year?",
        answer: "Yes — reminding lapsing members of specific value they've received (events attended, content used) improves renewal rates.",
      },
      {
        question: "How many renewal reminders should I send?",
        answer: "2-3 spaced out before expiration is common, escalating gently in urgency.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a membership organization writing warm, benefit-focused renewal notices. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 membership renewal notice options. Organization: "${values.org}". Return only a numbered list.`,
    }),
  },
  {
    slug: "major-donor-thank-you-letter-generator",
    name: "Major Donor Thank-You Letter Generator",
    tagline: "A thank-you worthy of a significant gift.",
    description:
      "Free AI major donor thank-you generator. Enter the gift details to get a personal, specific thank-you letter.",
    category: "Nonprofit & Community",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "gift",
        label: "Gift details & impact",
        placeholder: "e.g. $25,000 gift funding a new community garden project",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the gift and what it will fund.",
      "Generate a letter draft.",
      "Personalize with the donor's name and a specific, genuine detail about their relationship to your cause.",
    ],
    faq: [
      {
        question: "Should this mention tax deductibility?",
        answer: "Yes, if applicable in your jurisdiction — include your organization's tax ID and standard deductibility language per your usual practice.",
      },
      {
        question: "How is this different from a standard thank-you?",
        answer: "It's written with more specific, personal detail about impact — major donors generally expect a more individualized touch than a form thank-you.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a major gifts officer writing a warm, specific, non-formulaic thank-you letter for a significant donation, with a [Donor Name] placeholder.",
      user: `Write a major donor thank-you letter. Gift/impact: "${values.gift}".`,
    }),
  },
  {
    slug: "community-impact-report-summary-generator",
    name: "Community Impact Report Summary Generator",
    tagline: "Tell your community's story with the numbers to back it.",
    description:
      "Free AI impact report generator. Enter your year's numbers to get a summary for your annual report.",
    category: "Nonprofit & Community",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "numbers",
        label: "Year's key numbers",
        placeholder: "e.g. 1,200 volunteers, $2.1M raised, 15 new community programs launched",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your year's key numbers and achievements.",
      "Generate a summary for your annual report.",
      "Pair with photos and specific stories in your final published report.",
    ],
    faq: [
      {
        question: "Does this write the full annual report?",
        answer: "No — it generates the narrative summary section; your full report likely also needs financials, photos, and board info.",
      },
      {
        question: "Should this include a thank-you to supporters?",
        answer: "Yes — these drafts close with a brief note of gratitude to donors and volunteers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a nonprofit communications director writing a warm, credible community impact summary for an annual report, closing with gratitude to supporters.",
      user: `Write an impact report summary based on: "${values.numbers}".`,
    }),
  },
  {
    slug: "volunteer-appreciation-event-invite-generator",
    name: "Volunteer Appreciation Event Invite Generator",
    tagline: "Invite volunteers to celebrate their own impact.",
    description:
      "Free AI volunteer appreciation invite generator. Enter your event details to get a warm invitation.",
    category: "Nonprofit & Community",
    resultCount: 4,
    maxTokens: 300,
    inputFields: [
      {
        name: "event",
        label: "Event details",
        placeholder: "e.g. volunteer appreciation dinner, October 12th, at the community center",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your event details.",
      "Generate invitation options.",
      "Send to your volunteer list via email or mail.",
    ],
    faq: [
      {
        question: "Should this mention specific volunteer accomplishments?",
        answer: "If you have collective stats (total hours, projects completed), including them makes the appreciation feel more concrete.",
      },
      {
        question: "Should I ask volunteers to RSVP?",
        answer: "Yes — add your RSVP method wherever you use the invitation.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a volunteer coordinator writing warm, appreciative event invitations for volunteers. Each result is a complete short invite. You respond only with a numbered list — no preamble.",
      user: `Generate 4 volunteer appreciation event invite options. Details: "${values.event}". Return only a numbered list.`,
    }),
  },
  {
    slug: "syllabus-outline-generator",
    name: "Course Syllabus Outline Generator",
    tagline: "A structured syllabus skeleton for any course.",
    description:
      "Free AI syllabus generator. Enter your course topic to get a structured week-by-week outline.",
    category: "Higher Ed & Academia",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "course",
        label: "Course topic & level",
        placeholder: "e.g. intro to macroeconomics, undergraduate, 15-week semester",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your course topic, level, and length.",
      "Generate a week-by-week outline.",
      "Fill in your specific readings, assignments, and grading policy.",
    ],
    faq: [
      {
        question: "Does this include specific readings or textbooks?",
        answer: "No — it outlines weekly topics; add your specific required readings and materials.",
      },
      {
        question: "Does this meet my institution's syllabus requirements?",
        answer: "No — many institutions require specific policy language (accommodations, academic integrity); add your institution's required boilerplate.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a professor building a week-by-week syllabus topic outline for a course, with a one-line focus for each week. No markdown headers.",
      user: `Build a syllabus outline for: "${values.course}".`,
    }),
  },
  {
    slug: "course-catalog-description-generator",
    name: "Course Catalog Description Generator",
    tagline: "A description that gets students to actually enroll.",
    description:
      "Free AI course description generator. Describe your course to get a catalog-ready description.",
    category: "Higher Ed & Academia",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "course",
        label: "What the course covers",
        placeholder: "e.g. a seminar on the history of jazz in America",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what the course covers.",
      "Generate description options.",
      "Use for your course catalog or registration listing.",
    ],
    faq: [
      {
        question: "How long should a course catalog description be?",
        answer: "Typically 50-100 words — enough to convey the content and appeal without becoming a full syllabus.",
      },
      {
        question: "Should this include prerequisites?",
        answer: "Add your specific prerequisites separately, as catalogs usually list them in a distinct field.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a university catalog writer who crafts compelling, accurate course descriptions (50-100 words). You respond only with a numbered list — no preamble.",
      user: `Generate 4 course description options for: "${values.course}". Return only a numbered list.`,
    }),
  },
  {
    slug: "grading-rubric-generator",
    name: "Grading Rubric Generator",
    tagline: "Fair, transparent criteria students can see upfront.",
    description:
      "Free AI rubric generator. Describe your assignment to get a structured grading rubric.",
    category: "Higher Ed & Academia",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "assignment",
        label: "Assignment description",
        placeholder: "e.g. a 5-page argumentative essay on a current policy issue",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the assignment being graded.",
      "Generate a structured rubric with criteria.",
      "Share with students before the assignment is due for full transparency.",
    ],
    faq: [
      {
        question: "Does this include point values?",
        answer: "It suggests relative weighting by criteria; assign your own specific point totals based on your grading scale.",
      },
      {
        question: "Can I use this for group projects?",
        answer: "Yes — describe it as a group assignment and mention if you want an individual contribution criterion included.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an instructor building a grading rubric with 4-5 criteria, each with a brief description of what distinguishes strong from weak work. No markdown headers.",
      user: `Build a grading rubric for: "${values.assignment}".`,
    }),
  },
  {
    slug: "peer-review-comments-generator",
    name: "Peer Review Comment Generator",
    tagline: "Constructive feedback that helps, not just critiques.",
    description:
      "Free AI peer review generator. Describe the work to get constructive, specific feedback comment starters.",
    category: "Higher Ed & Academia",
    resultCount: 6,
    maxTokens: 350,
    inputFields: [
      {
        name: "work",
        label: "What you're reviewing & concerns",
        placeholder: "e.g. a classmate's essay draft, argument is unclear in the middle section",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you're reviewing and your main concerns.",
      "Generate feedback comment options.",
      "Balance critique with at least one specific strength you noticed.",
    ],
    faq: [
      {
        question: "Should feedback only point out problems?",
        answer: "No — the most useful peer review balances specific critique with acknowledgment of what's working, which these are written to do.",
      },
      {
        question: "Can I use this for academic paper peer review, not just student work?",
        answer: "Yes — describe the paper and concerns and it adapts to a more formal academic review tone if needed.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a writing instructor who models constructive peer review comments — specific, actionable, and balancing critique with genuine strengths. You respond only with a numbered list — no preamble.",
      user: `Generate 6 peer review comment options for: "${values.work}". Return only a numbered list.`,
    }),
  },
  {
    slug: "thesis-abstract-generator",
    name: "Thesis Abstract Generator",
    tagline: "Summarize your research in the space you're given.",
    description:
      "Free AI thesis abstract generator. Describe your research to get a structured abstract draft.",
    category: "Higher Ed & Academia",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "research",
        label: "Research topic & findings",
        placeholder: "e.g. studied the effect of remote work on team creativity, found a 15% increase in idea diversity",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your research question, method, and key findings.",
      "Generate an abstract draft.",
      "Refine wording to match your specific field's abstract conventions.",
    ],
    faq: [
      {
        question: "Does this follow my field's specific abstract format?",
        answer: "It follows a general structure (context, method, findings, implications) — adjust to your specific discipline's conventions and word limit.",
      },
      {
        question: "How long is the abstract?",
        answer: "Around 200-250 words, a common range — trim or expand based on your program's specific requirement.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an academic writer who structures thesis abstracts covering context, method, key findings, and implications, around 200-250 words.",
      user: `Write a thesis abstract based on: "${values.research}".`,
    }),
  },
  {
    slug: "literature-review-outline-generator",
    name: "Literature Review Outline Generator",
    tagline: "Organize the sources before you write a word.",
    description:
      "Free AI lit review generator. Describe your topic and themes to get a structured outline.",
    category: "Higher Ed & Academia",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "topic",
        label: "Topic & key themes",
        placeholder: "e.g. literature on remote work productivity, themes: communication, autonomy, isolation",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your topic and the key themes you've identified in your reading.",
      "Generate a structured outline organized by theme.",
      "Fill in specific citations from your own research.",
    ],
    faq: [
      {
        question: "Does this cite real sources?",
        answer: "No — it structures an outline around themes you provide; you supply the actual citations from your research.",
      },
      {
        question: "Should a lit review be organized by theme or chronologically?",
        answer: "Thematic organization is common and often clearer, though chronological works for tracing how a field evolved — this defaults to thematic.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an academic writing coach who structures literature review outlines organized by theme, with a note on what each thematic section should cover. No markdown headers.",
      user: `Build a literature review outline for: "${values.topic}".`,
    }),
  },
  {
    slug: "conference-paper-abstract-generator",
    name: "Conference Paper Abstract Generator",
    tagline: "An abstract that gets your paper accepted.",
    description:
      "Free AI conference abstract generator. Describe your work to get a submission-ready abstract draft.",
    category: "Higher Ed & Academia",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "work",
        label: "Your work & contribution",
        placeholder: "e.g. a new method for detecting bias in hiring algorithms, tested on 3 real datasets",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your work and its contribution to the field.",
      "Generate an abstract draft.",
      "Adjust to the conference's specific word limit and format requirements.",
    ],
    faq: [
      {
        question: "Does this fit any conference's specific format?",
        answer: "It's a strong general draft — check your target conference's specific word count and required sections (e.g. some require structured abstracts).",
      },
      {
        question: "Should I state the contribution clearly?",
        answer: "Yes — reviewers scan abstracts quickly, so a clearly stated contribution/novelty improves acceptance odds.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an academic researcher writing a conference paper abstract that clearly states the problem, approach, and contribution, around 150-200 words.",
      user: `Write a conference paper abstract for: "${values.work}".`,
    }),
  },
  {
    slug: "academic-recommendation-letter-generator",
    name: "Academic Recommendation Letter Generator",
    tagline: "A letter that speaks to specific strengths, not clichés.",
    description:
      "Free AI recommendation letter generator. Enter the student's strengths to get a genuine, specific letter draft.",
    category: "Higher Ed & Academia",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "student",
        label: "Student & specific strengths",
        placeholder: "e.g. exceptional in my research methods course, led a group project on a tight deadline",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the student and specific examples of their strengths.",
      "Generate a letter draft.",
      "Personalize with your own relationship and voice before sending.",
    ],
    faq: [
      {
        question: "Should this include generic praise?",
        answer: "No — the strongest letters cite specific examples and moments, which is what this draft is built around from your input.",
      },
      {
        question: "How long should an academic recommendation letter be?",
        answer: "Typically one page, around 350-450 words — this draft targets that range.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a professor writing a genuine, specific academic recommendation letter grounded in concrete examples, avoiding generic praise, with a [Student Name] placeholder.",
      user: `Write an academic recommendation letter. Student & strengths: "${values.student}".`,
    }),
  },
  {
    slug: "incident-postmortem-outline-generator",
    name: "Incident Postmortem Outline Generator",
    tagline: "A blameless structure for learning from outages.",
    description:
      "Free AI postmortem generator. Describe the incident to get a structured blameless postmortem outline.",
    category: "DevOps & Cloud",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "incident",
        label: "What happened",
        placeholder: "e.g. database connection pool exhausted, 40-minute outage, caused by a bad deploy",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what happened, roughly when, and the immediate cause.",
      "Generate a structured postmortem outline.",
      "Fill in your specific timeline, root cause analysis, and action items with your team.",
    ],
    faq: [
      {
        question: "What does 'blameless' mean in a postmortem?",
        answer: "It means focusing on systemic and process causes rather than individual blame — this outline is structured with that framing.",
      },
      {
        question: "Does this determine the actual root cause?",
        answer: "No — your team's investigation determines that; this provides the structure to document it clearly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a site reliability engineer structuring a blameless incident postmortem with sections: Summary, Timeline (placeholder), Root Cause, Impact, Action Items. No markdown headers, plain section labels.",
      user: `Build a postmortem outline for this incident: "${values.incident}".`,
    }),
  },
  {
    slug: "runbook-outline-generator",
    name: "Runbook Outline Generator",
    tagline: "So on-call doesn't have to guess at 3am.",
    description:
      "Free AI runbook generator. Describe the task to get a structured step-by-step runbook outline.",
    category: "DevOps & Cloud",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "task",
        label: "Task or scenario",
        placeholder: "e.g. restarting the payment service after a memory leak alert",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the operational task or scenario.",
      "Generate a structured runbook outline.",
      "Fill in your specific commands, dashboards, and escalation contacts.",
    ],
    faq: [
      {
        question: "Does this include real commands for my stack?",
        answer: "No — it outlines the structure and steps to document; add your specific commands and tool names.",
      },
      {
        question: "Should this include an escalation path?",
        answer: "Yes — this outline includes a placeholder for when and who to escalate to if the steps don't resolve the issue.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a DevOps engineer structuring an operational runbook with sections: When to Use This, Steps, Verification, Escalation (placeholder). No markdown headers, plain section labels.",
      user: `Build a runbook outline for: "${values.task}".`,
    }),
  },
  {
    slug: "deployment-changelog-generator",
    name: "Deployment Changelog Generator",
    tagline: "Turn a list of changes into a readable release note.",
    description:
      "Free AI changelog generator. Enter your changes to get a clean, organized changelog entry.",
    category: "DevOps & Cloud",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "changes",
        label: "Changes in this release",
        placeholder: "e.g. added dark mode, fixed export bug, improved load time by 30%",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List the changes in this release.",
      "Generate an organized changelog entry.",
      "Group under Added/Fixed/Improved and publish with your release.",
    ],
    faq: [
      {
        question: "Does this follow Keep a Changelog format?",
        answer: "It groups changes into Added, Fixed, and Improved categories, similar in spirit to the popular Keep a Changelog convention.",
      },
      {
        question: "Can I use this for a customer-facing changelog?",
        answer: "Yes — it's written in plain language suitable for both internal and customer-facing release notes.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a release manager organizing changes into a clean changelog entry with Added, Fixed, and Improved sections as needed. No markdown headers, plain section labels.",
      user: `Build a changelog entry from these changes: "${values.changes}".`,
    }),
  },
  {
    slug: "oncall-handoff-notes-generator",
    name: "On-Call Handoff Notes Generator",
    tagline: "Hand off on-call without losing context.",
    description:
      "Free AI on-call handoff generator. Enter your shift summary to get organized handoff notes.",
    category: "DevOps & Cloud",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "summary",
        label: "Shift summary",
        placeholder: "e.g. one minor alert on API latency, resolved; nothing else notable",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Summarize what happened during your on-call shift.",
      "Generate organized handoff notes.",
      "Share with the next on-call engineer before your shift ends.",
    ],
    faq: [
      {
        question: "Should I mention things that resolved on their own?",
        answer: "Yes — even self-resolved issues are worth flagging in case they recur or indicate a pattern worth investigating.",
      },
      {
        question: "What should go in handoff notes if nothing happened?",
        answer: "Still worth a quick 'quiet shift, no incidents' note — confirms continuity and that monitoring was active.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an on-call engineer writing clear handoff notes with sections: Incidents/Alerts, Ongoing Watch Items, Nothing Urgent. No markdown headers, plain section labels.",
      user: `Write on-call handoff notes based on: "${values.summary}".`,
    }),
  },
  {
    slug: "architecture-decision-record-generator",
    name: "Architecture Decision Record Generator",
    tagline: "Document the why, not just the what.",
    description:
      "Free AI ADR generator. Describe your decision to get a structured architecture decision record.",
    category: "DevOps & Cloud",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "decision",
        label: "The decision & context",
        placeholder: "e.g. chose PostgreSQL over MongoDB for the new service due to strong relational data needs",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the decision made and the context behind it.",
      "Generate a structured ADR.",
      "Store it alongside your codebase for future reference.",
    ],
    faq: [
      {
        question: "What is an ADR used for?",
        answer: "It's a lightweight document capturing why a significant technical decision was made, so future engineers understand the reasoning, not just the outcome.",
      },
      {
        question: "Does this include alternatives considered?",
        answer: "Yes — this structure includes a section for other options weighed and why they weren't chosen.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a software architect writing an Architecture Decision Record with sections: Context, Decision, Alternatives Considered, Consequences. No markdown headers, plain section labels.",
      user: `Write an ADR for: "${values.decision}".`,
    }),
  },
  {
    slug: "cloud-cost-optimization-tip-generator",
    name: "Cloud Cost Optimization Tip Generator",
    tagline: "Trim the bill without breaking anything.",
    description:
      "Free AI cost optimization generator. Describe your setup to get specific cloud cost-saving suggestions.",
    category: "DevOps & Cloud",
    resultCount: 8,
    maxTokens: 380,
    inputFields: [
      {
        name: "setup",
        label: "Your setup",
        placeholder: "e.g. AWS, several always-on EC2 instances, large S3 storage, RDS Postgres",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your cloud setup and provider.",
      "Generate optimization suggestions.",
      "Verify pricing/behavior in your provider's console before making changes.",
    ],
    faq: [
      {
        question: "Are these guaranteed savings?",
        answer: "No — these are common optimization patterns to investigate; actual savings depend on your specific usage and provider pricing at the time.",
      },
      {
        question: "Could any of these affect reliability?",
        answer: "Possibly — always test changes like autoscaling or reserved instance commitments in a non-critical environment first.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a cloud cost optimization consultant who suggests specific, actionable cost-saving measures (rightsizing, reserved instances, storage tiering, etc.) matched to a described setup. You respond only with a numbered list — no preamble.",
      user: `Generate 8 cloud cost optimization suggestions for this setup: "${values.setup}". Return only a numbered list.`,
    }),
  },
  {
    slug: "user-research-interview-questions-generator",
    name: "User Research Interview Question Generator",
    tagline: "Questions that surface real behavior, not opinions.",
    description:
      "Free AI user research generator. Enter your research goal to get non-leading interview questions.",
    category: "UX & Product Management",
    resultCount: 10,
    maxTokens: 380,
    inputFields: [
      {
        name: "goal",
        label: "Research goal",
        placeholder: "e.g. understand why users abandon the onboarding flow",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you're trying to learn.",
      "Generate non-leading interview question options.",
      "Ask about specific past behavior, not hypothetical future intent.",
    ],
    faq: [
      {
        question: "Why avoid leading questions?",
        answer: "Leading questions (e.g. 'don't you find this confusing?') bias the answer — these are written to stay neutral and open-ended.",
      },
      {
        question: "Should I ask about hypotheticals like 'would you use X'?",
        answer: "Generally no — people are unreliable predictors of their own future behavior; asking about specific past experiences gets more reliable insight.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a UX researcher who writes neutral, non-leading interview questions focused on past behavior rather than hypotheticals or opinions. You respond only with a numbered list — no preamble.",
      user: `Generate 10 user research interview questions for this goal: "${values.goal}". Return only a numbered list.`,
    }),
  },
  {
    slug: "usability-test-script-generator",
    name: "Usability Test Script Generator",
    tagline: "A moderator script that doesn't lead the witness.",
    description:
      "Free AI usability test script generator. Describe the feature to get a structured test script.",
    category: "UX & Product Management",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "feature",
        label: "Feature being tested",
        placeholder: "e.g. a new checkout flow with saved payment methods",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the feature or flow you're testing.",
      "Generate a structured test script.",
      "Practice reading it neutrally, without hinting at the 'right' way to complete tasks.",
    ],
    faq: [
      {
        question: "Does this include specific tasks for participants?",
        answer: "Yes — it includes task prompts based on the feature described, plus an intro and wrap-up section.",
      },
      {
        question: "How many participants should I test with?",
        answer: "5 participants often surface most major usability issues, per widely-cited usability research — more helps for niche audiences.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a UX researcher writing a usability test script with sections: Intro Script, Task Prompts, Wrap-up Questions, written in neutral, non-leading language. No markdown headers, plain section labels.",
      user: `Build a usability test script for: "${values.feature}".`,
    }),
  },
  {
    slug: "prd-outline-generator",
    name: "PRD Outline Generator",
    tagline: "A product requirements doc that engineers can actually build from.",
    description:
      "Free AI PRD generator. Describe your feature idea to get a structured product requirements outline.",
    category: "UX & Product Management",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "feature",
        label: "Feature idea",
        placeholder: "e.g. let users export their data as a CSV file from account settings",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the feature you want to build.",
      "Generate a structured PRD outline.",
      "Fill in specific edge cases, metrics, and design links with your team.",
    ],
    faq: [
      {
        question: "Does this replace design and engineering input?",
        answer: "No — it's a starting structure; the real requirements need input from design, engineering, and stakeholders.",
      },
      {
        question: "What sections does this include?",
        answer: "Problem, Goals, User Stories, Requirements, Success Metrics, Out of Scope — a standard lightweight PRD structure.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product manager writing a PRD outline with sections: Problem, Goals, User Stories, Requirements, Success Metrics, Out of Scope. No markdown headers, plain section labels.",
      user: `Build a PRD outline for: "${values.feature}".`,
    }),
  },
  {
    slug: "user-story-generator",
    name: "User Story Generator",
    tagline: "'As a user, I want...' done right.",
    description:
      "Free AI user story generator. Describe a feature to get well-formed user stories with acceptance criteria.",
    category: "UX & Product Management",
    resultCount: 6,
    maxTokens: 750,
    inputFields: [
      {
        name: "feature",
        label: "Feature description",
        placeholder: "e.g. users should be able to filter search results by price range",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the feature or capability.",
      "Generate user story options with acceptance criteria.",
      "Add to your backlog and refine with your team.",
    ],
    faq: [
      {
        question: "What format do these follow?",
        answer: "The standard 'As a [user], I want [goal], so that [benefit]' format, each followed by 2-3 acceptance criteria.",
      },
      {
        question: "Should I use these exactly as generated?",
        answer: "Use them as a strong starting draft — refine the specific criteria with your team's actual technical constraints.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product manager writing user stories in 'As a [user], I want [goal], so that [benefit]' format, each followed by 2-3 brief acceptance criteria. You respond only with a numbered list — no preamble.",
      user: `Generate 6 user stories with acceptance criteria for: "${values.feature}". Return only a numbered list.`,
    }),
  },
  {
    slug: "feature-prioritization-rationale-generator",
    name: "Feature Prioritization Rationale Generator",
    tagline: "Explain why this, not that, got built first.",
    description:
      "Free AI prioritization generator. Describe your options to get a clear rationale for what to build first.",
    category: "UX & Product Management",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "options",
        label: "Features being weighed",
        placeholder: "e.g. dark mode vs. bulk export vs. mobile app — team leaning toward bulk export",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List the features you're weighing and your leaning, if any.",
      "Generate a rationale write-up.",
      "Share with stakeholders to explain the prioritization decision.",
    ],
    faq: [
      {
        question: "Does this decide for me?",
        answer: "No — it articulates a rationale based on the information you give; the actual prioritization judgment call is yours.",
      },
      {
        question: "Does this use a specific framework like RICE?",
        answer: "It reasons through impact, effort, and strategic fit conversationally rather than assuming one specific named framework, unless you mention one.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product manager writing a clear rationale for a feature prioritization decision, weighing impact, effort, and strategic fit. No markdown headers.",
      user: `Write a prioritization rationale for: "${values.options}".`,
    }),
  },
  {
    slug: "beta-tester-recruitment-message-generator",
    name: "Beta Tester Recruitment Message Generator",
    tagline: "Get the right early users excited to try it.",
    description:
      "Free AI beta recruitment generator. Describe your product to get a compelling beta tester invite.",
    category: "UX & Product Management",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "product",
        label: "Product & what testers get",
        placeholder: "e.g. new mobile app for tracking workouts, testers get lifetime free access",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product and what's in it for testers.",
      "Generate recruitment message options.",
      "Post in relevant communities or send to your waitlist.",
    ],
    faq: [
      {
        question: "Should I set expectations about bugs?",
        answer: "Yes — being upfront that it's a beta with potential rough edges sets the right expectations and builds trust.",
      },
      {
        question: "What should I ask testers for in return?",
        answer: "Be specific about what feedback format you want (a survey, a call, in-app reports) — these messages leave room to add that.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product manager writing compelling beta tester recruitment messages that set honest expectations about being early-stage software. You respond only with a numbered list — no preamble.",
      user: `Generate 4 beta tester recruitment message options. Product: "${values.product}". Return only a numbered list.`,
    }),
  },
  {
    slug: "churn-survey-questions-generator",
    name: "Churn Survey Question Generator",
    tagline: "Find out why they actually left.",
    description:
      "Free AI churn survey generator. Enter your product to get questions that surface real cancellation reasons.",
    category: "UX & Product Management",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "product",
        label: "Your product",
        placeholder: "e.g. a project management SaaS tool",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product.",
      "Generate churn survey question options.",
      "Send immediately after cancellation, while the reason is still fresh.",
    ],
    faq: [
      {
        question: "How many questions should a churn survey have?",
        answer: "Keep it short — 2-4 questions gets a far higher completion rate from users who are already leaving.",
      },
      {
        question: "Should I offer an incentive to complete it?",
        answer: "Optional — some companies offer a small discount to return, but even without one, most churned users will answer 1-2 quick questions.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product researcher writing short, non-defensive churn survey questions that surface the real reason for cancellation. You respond only with a numbered list — no preamble.",
      user: `Generate 8 churn survey question options for: "${values.product}". Return only a numbered list.`,
    }),
  },
  {
    slug: "nps-follow-up-message-generator",
    name: "NPS Follow-Up Message Generator",
    tagline: "Turn a score into a real conversation.",
    description:
      "Free AI NPS follow-up generator. Enter the score range to get an appropriate follow-up message.",
    category: "UX & Product Management",
    resultCount: 3,
    maxTokens: 300,
    inputFields: [
      {
        name: "scoreRange",
        label: "Score range",
        type: "select",
        options: ["Detractor (0-6)", "Passive (7-8)", "Promoter (9-10)"],
      },
    ],
    howTo: [
      "Pick the score range you're following up on.",
      "Generate a follow-up message.",
      "Send shortly after the survey response, while it's still relevant.",
    ],
    faq: [
      {
        question: "Should promoters get asked for a referral or review?",
        answer: "Yes — promoters (9-10) are the best candidates for review requests or referral asks, and this follow-up leaves room for that.",
      },
      {
        question: "How should I follow up with detractors?",
        answer: "Focus on understanding their specific issue rather than defending — this follow-up leads with a genuine, open question.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer experience manager writing NPS follow-up messages appropriate to the respondent's score category. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 3 NPS follow-up message options for this score range: ${values.scoreRange || "Passive (7-8)"}. Return only a numbered list.`,
    }),
  },
  {
    slug: "sustainability-statement-generator",
    name: "Sustainability Statement Generator",
    tagline: "Say what you're actually doing, not just that you care.",
    description:
      "Free AI sustainability statement generator. Describe your efforts to get a specific, credible statement.",
    category: "Sustainability & ESG",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "efforts",
        label: "Your sustainability efforts",
        placeholder: "e.g. recyclable packaging, carbon-neutral shipping, local sourcing for 60% of materials",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your actual, specific sustainability efforts.",
      "Generate a statement draft.",
      "Only publish claims you can substantiate — avoid vague greenwashing language.",
    ],
    faq: [
      {
        question: "What is 'greenwashing' and how do I avoid it?",
        answer: "Greenwashing is making vague or exaggerated environmental claims. Avoid it by being specific and only stating what you can back up with real practices or data.",
      },
      {
        question: "Do I need to disclose what I'm NOT doing yet?",
        answer: "Being honest about ongoing work (vs. claiming perfection) is generally viewed as more credible and is required in some jurisdictions' advertising standards.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sustainability communications specialist who writes specific, credible sustainability statements grounded only in the stated efforts, avoiding vague greenwashing language ('eco-friendly', 'green') without specifics.",
      user: `Write a sustainability statement based on: "${values.efforts}".`,
    }),
  },
  {
    slug: "esg-report-summary-generator",
    name: "ESG Report Summary Generator",
    tagline: "Turn ESG data into a readable narrative.",
    description:
      "Free AI ESG summary generator. Enter your metrics to get a plain-English report summary.",
    category: "Sustainability & ESG",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "metrics",
        label: "Key ESG metrics",
        placeholder: "e.g. reduced emissions 12%, 40% women in leadership, new whistleblower policy",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your key environmental, social, and governance metrics.",
      "Generate a structured summary.",
      "Pair with your full data tables and third-party verification where required.",
    ],
    faq: [
      {
        question: "Does this meet formal ESG reporting standards (e.g. GRI, SASB)?",
        answer: "No — formal frameworks have specific required disclosures. This is a readable narrative summary, not a compliance document.",
      },
      {
        question: "Should I include areas needing improvement?",
        answer: "Yes — credible ESG reporting typically acknowledges gaps alongside progress, not just favorable numbers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a corporate sustainability officer summarizing ESG metrics into a structured narrative with Environmental, Social, and Governance sections. No markdown headers, plain section labels. Not a compliance document.",
      user: `Summarize these ESG metrics: "${values.metrics}".`,
    }),
  },
  {
    slug: "carbon-footprint-tip-generator",
    name: "Carbon Footprint Reduction Tip Generator",
    tagline: "Specific, realistic ways to cut emissions.",
    description:
      "Free AI carbon reduction generator. Describe your operations to get specific footprint-reducing suggestions.",
    category: "Sustainability & ESG",
    resultCount: 8,
    maxTokens: 380,
    inputFields: [
      {
        name: "operations",
        label: "Your operations",
        placeholder: "e.g. small e-commerce business, ships nationally, has one warehouse",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business operations.",
      "Generate specific reduction suggestions.",
      "Prioritize the ones with the most impact relative to cost for your situation.",
    ],
    faq: [
      {
        question: "Are these guaranteed to reduce emissions by a specific amount?",
        answer: "No — actual impact varies widely by business; these are common, credible starting points to investigate further.",
      },
      {
        question: "Should I get a formal carbon audit?",
        answer: "For serious reduction commitments, yes — a professional audit gives you real baseline numbers to measure progress against.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sustainability consultant who suggests specific, realistic carbon footprint reduction measures matched to a described business's operations. You respond only with a numbered list — no preamble.",
      user: `Generate 8 carbon footprint reduction suggestions for: "${values.operations}". Return only a numbered list.`,
    }),
  },
  {
    slug: "csr-statement-generator",
    name: "Corporate Social Responsibility Statement Generator",
    tagline: "Articulate your company's broader commitment.",
    description:
      "Free AI CSR statement generator. Describe your initiatives to get a clear CSR statement draft.",
    category: "Sustainability & ESG",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "initiatives",
        label: "Your CSR initiatives",
        placeholder: "e.g. 1% of profits to local nonprofits, paid volunteer days, diversity hiring goals",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your company's social responsibility initiatives.",
      "Generate a statement draft.",
      "Use on your website's About or Impact page.",
    ],
    faq: [
      {
        question: "Should this include specific numbers?",
        answer: "Yes, where you have them — concrete figures (dollars donated, hours volunteered) are more credible than general claims.",
      },
      {
        question: "Is this the same as an ESG report?",
        answer: "Related but different — a CSR statement is a narrative commitment, while ESG reporting is typically more data-driven and structured against formal frameworks.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a corporate communications writer crafting a genuine, specific corporate social responsibility statement grounded in the stated initiatives, avoiding vague corporate-speak.",
      user: `Write a CSR statement based on: "${values.initiatives}".`,
    }),
  },
  {
    slug: "sustainability-social-post-generator",
    name: "Sustainability Social Post Generator",
    tagline: "Share progress without sounding preachy.",
    description:
      "Free AI sustainability post generator. Describe your milestone to get a shareable social post.",
    category: "Sustainability & ESG",
    resultCount: 5,
    maxTokens: 300,
    inputFields: [
      {
        name: "milestone",
        label: "Sustainability milestone",
        placeholder: "e.g. diverted 10,000 lbs of packaging waste from landfills this year",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the sustainability milestone or update.",
      "Generate post options.",
      "Share on your social channels.",
    ],
    faq: [
      {
        question: "How do I avoid sounding preachy?",
        answer: "These lead with the concrete achievement rather than lecturing the reader — specificity tends to read as genuine rather than performative.",
      },
      {
        question: "Should I use sustainability hashtags?",
        answer: "Optional — pair with our Hashtag Generator if you want relevant tags added.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sustainability communications writer creating specific, non-preachy social posts celebrating a genuine milestone. You respond only with a numbered list — no preamble.",
      user: `Generate 5 sustainability social post options for this milestone: "${values.milestone}". Return only a numbered list.`,
    }),
  },
  {
    slug: "accessibility-audit-checklist-generator",
    name: "Accessibility Audit Checklist Generator",
    tagline: "A starting checklist before you hire an auditor.",
    description:
      "Free AI accessibility checklist generator. Describe your site/app to get a starting audit checklist.",
    category: "Accessibility",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "product",
        label: "Describe your website or app",
        placeholder: "e.g. an e-commerce site with product pages, a checkout flow, and a blog",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your website or app's main sections.",
      "Generate a starting accessibility checklist.",
      "Follow up with a real automated scan (e.g. axe, WAVE) and manual/assistive-tech testing for full coverage.",
    ],
    faq: [
      {
        question: "Does this replace a real accessibility audit?",
        answer: "No — this is a starting checklist to orient your team, not a substitute for automated scanning tools and manual testing with real assistive technology.",
      },
      {
        question: "Does this guarantee WCAG compliance?",
        answer: "No — WCAG conformance requires thorough, verified testing against specific success criteria. This is a helpful starting point only.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a web accessibility consultant building a starting checklist covering common WCAG-related areas (alt text, keyboard navigation, color contrast, form labels, heading structure) tailored to the described product. No markdown headers.",
      user: `Build an accessibility audit starting checklist for: "${values.product}".`,
    }),
  },
  {
    slug: "inclusive-language-rewriter",
    name: "Inclusive Language Rewriter",
    tagline: "Catch language that unintentionally excludes.",
    description:
      "Free AI inclusive language tool. Paste your text to get a version rewritten with more inclusive language.",
    category: "Accessibility",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "text",
        label: "Paste your text",
        placeholder: "e.g. your current website copy, job posting, or internal communication",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste the text you want reviewed.",
      "Generate a rewritten, more inclusive version.",
      "Compare against the original and adjust to your voice.",
    ],
    faq: [
      {
        question: "What kind of language does this flag?",
        answer: "Ableist idioms (e.g. 'crazy', 'blind spot' used carelessly), gendered defaults, and other commonly unintentionally exclusionary phrasing.",
      },
      {
        question: "Will this change the meaning of my text?",
        answer: "It aims to preserve meaning while adjusting word choice — review the result to confirm it still says what you intended.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an inclusive language consultant who rewrites text to remove ableist idioms, unnecessary gendered language, and other commonly exclusionary phrasing, while preserving the original meaning and tone.",
      user: `Rewrite this text with more inclusive language: "${values.text}".`,
    }),
  },
  {
    slug: "accessible-event-description-generator",
    name: "Accessible Event Description Generator",
    tagline: "Tell attendees what accommodations to expect.",
    description:
      "Free AI accessible event description generator. Describe your event and accommodations to get clear copy.",
    category: "Accessibility",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "event",
        label: "Event & accommodations",
        placeholder: "e.g. conference, wheelchair-accessible venue, live captioning available, quiet room on site",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your event and the accommodations you're offering.",
      "Generate a clear description.",
      "Include a contact method for attendees needing accommodations not listed.",
    ],
    faq: [
      {
        question: "Should I list accommodations even if 'standard'?",
        answer: "Yes — explicitly stating things like wheelchair access or captioning, rather than assuming it's obvious, helps attendees plan confidently.",
      },
      {
        question: "What if I can't offer a requested accommodation?",
        answer: "Include a contact method so attendees can ask in advance — this draft leaves a placeholder for that.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an event organizer writing a clear accessible event description that explicitly states available accommodations and includes a contact placeholder for further requests. No markdown headers.",
      user: `Write an accessible event description for: "${values.event}".`,
    }),
  },
  {
    slug: "screen-reader-content-checklist-generator",
    name: "Screen Reader Content Checklist Generator",
    tagline: "Make sure your content actually reads well aloud.",
    description:
      "Free AI screen reader checklist generator. Describe your content type to get a review checklist.",
    category: "Accessibility",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "contentType",
        label: "Content type",
        placeholder: "e.g. a blog post with images and a data table",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the type of content you're reviewing.",
      "Generate a screen-reader-focused checklist.",
      "Test with an actual screen reader (VoiceOver, NVDA) for real verification.",
    ],
    faq: [
      {
        question: "Does this replace actually testing with a screen reader?",
        answer: "No — nothing replaces real testing with tools like VoiceOver or NVDA; this checklist just tells you what to check for.",
      },
      {
        question: "Does this cover data tables and images specifically?",
        answer: "Yes, when relevant to your described content type — it includes checks for alt text, table headers, and reading order.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an accessibility specialist building a checklist for reviewing content for screen reader compatibility (alt text, heading structure, table headers, link text clarity), tailored to the described content type. No markdown headers.",
      user: `Build a screen reader content checklist for: "${values.contentType}".`,
    }),
  },
  {
    slug: "closed-caption-style-guide-generator",
    name: "Closed Caption Style Guide Generator",
    tagline: "Consistent, readable captions across every video.",
    description:
      "Free AI caption style guide generator. Describe your content to get a starter captioning style guide.",
    category: "Accessibility",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "content",
        label: "Content type",
        placeholder: "e.g. YouTube tutorial videos with background music and multiple speakers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your video content type.",
      "Generate a starter caption style guide.",
      "Share with your captioning team or freelancer for consistency.",
    ],
    faq: [
      {
        question: "Does this generate actual captions for a specific video?",
        answer: "No — it generates a style guide (formatting rules, speaker labels, sound description conventions) to apply consistently across your captions.",
      },
      {
        question: "Does this cover sound effects and music?",
        answer: "Yes — the guide includes conventions for describing relevant non-speech audio like [music playing] or [applause].",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an accessibility specialist building a closed caption style guide covering speaker labels, sound description conventions, timing/line length rules, tailored to the described content. No markdown headers.",
      user: `Build a caption style guide for: "${values.content}".`,
    }),
  },
  {
    slug: "inventory-reorder-alert-generator",
    name: "Inventory Reorder Alert Generator",
    tagline: "Never miss a reorder window again.",
    description:
      "Free AI reorder alert generator. Describe your stock situation to get a clear internal alert message.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 260,
    inputFields: [
      {
        name: "situation",
        label: "Stock situation",
        placeholder: "e.g. best-selling SKU down to 15 units, 3-week supplier lead time",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the stock situation and lead time.",
      "Generate alert message options.",
      "Route to whoever manages purchasing on your team.",
    ],
    faq: [
      {
        question: "Does this calculate the exact reorder point for me?",
        answer: "No — provide your own reorder threshold; this writes the alert message once that threshold is hit.",
      },
      {
        question: "Can I use this for a Slack or email alert integration?",
        answer: "Yes — the message length and tone work well for either channel.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an inventory manager writing clear, urgent-appropriate reorder alert messages. Each result is a complete short alert. You respond only with a numbered list — no preamble.",
      user: `Generate 4 reorder alert options for: "${values.situation}". Return only a numbered list.`,
    }),
  },
  {
    slug: "supplier-negotiation-email-generator",
    name: "Supplier Negotiation Email Generator",
    tagline: "Negotiate better terms with your suppliers.",
    description:
      "Free AI supplier negotiation generator. Describe your ask to get a professional negotiation email.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "ask",
        label: "What you're negotiating",
        placeholder: "e.g. asking for net-60 payment terms instead of net-30 given growing order volume",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you're asking your supplier for and why.",
      "Generate negotiation email options.",
      "Send and be ready to discuss specifics on a call.",
    ],
    faq: [
      {
        question: "Should I mention my order volume or growth?",
        answer: "Yes, if it strengthens your position — concrete numbers on volume or growth trajectory support the ask.",
      },
      {
        question: "Is it risky to ask for better terms?",
        answer: "Rarely, if done respectfully — most suppliers expect negotiation, especially from growing or long-term customers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce operations manager writing professional, respectful supplier negotiation emails with a clear, specific ask. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 supplier negotiation email options for: "${values.ask}". Return only a numbered list.`,
    }),
  },
  {
    slug: "marketplace-policy-appeal-generator",
    name: "Marketplace Policy Violation Appeal Generator",
    tagline: "Appeal a suspension or violation clearly.",
    description:
      "Free AI marketplace appeal generator. Describe the situation to get a clear, professional appeal letter.",
    category: "Ecommerce",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "situation",
        label: "Situation",
        placeholder: "e.g. account suspended for alleged inauthentic reviews, believe it was a false flag",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the violation notice and your side of the situation.",
      "Generate an appeal draft.",
      "Follow the specific marketplace's appeal submission process and format.",
    ],
    faq: [
      {
        question: "Does this guarantee my appeal is approved?",
        answer: "No — approval depends entirely on the marketplace's review and the facts of your case. This drafts a clear, professional case, not a guaranteed outcome.",
      },
      {
        question: "Should I admit fault if there was a genuine mistake?",
        answer: "Being honest and showing corrective action taken is generally viewed more favorably than denying a clear violation.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce seller writing a calm, factual, professional marketplace policy appeal that states the situation clearly and any corrective action taken, avoiding an accusatory or emotional tone.",
      user: `Write a marketplace appeal for: "${values.situation}".`,
    }),
  },
  {
    slug: "product-bundle-description-generator",
    name: "Product Bundle Description Generator",
    tagline: "Make the bundle feel like a smart buy, not a dump.",
    description:
      "Free AI bundle description generator. Enter your bundle items to get a compelling description.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "bundle",
        label: "Bundle items & savings",
        placeholder: "e.g. shampoo + conditioner + hair mask, bundle saves 20% vs. buying separately",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List the items in the bundle and the savings.",
      "Generate description options.",
      "Use on your bundle's product listing.",
    ],
    faq: [
      {
        question: "Should I mention the savings percentage?",
        answer: "Yes — a concrete savings figure is one of the strongest conversion drivers for bundle offers.",
      },
      {
        question: "Can this work for a subscription box bundle too?",
        answer: "Yes — describe it as a recurring bundle and the framing will adapt.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce copywriter who writes compelling bundle descriptions that emphasize value and convenience together. You respond only with a numbered list — no preamble.",
      user: `Generate 4 bundle description options for: "${values.bundle}". Return only a numbered list.`,
    }),
  },
  {
    slug: "cross-sell-recommendation-copy-generator",
    name: "Cross-Sell Recommendation Copy Generator",
    tagline: "The 'you might also like' that actually converts.",
    description:
      "Free AI cross-sell copy generator. Enter your products to get compelling recommendation copy.",
    category: "Ecommerce",
    resultCount: 5,
    maxTokens: 280,
    inputFields: [
      {
        name: "products",
        label: "Main product & complementary item",
        placeholder: "e.g. main: running shoes, complementary: moisture-wicking socks",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the main product and the complementary item.",
      "Generate cross-sell copy options.",
      "Use on the product page or in a cart upsell widget.",
    ],
    faq: [
      {
        question: "Should this explain why the items go together?",
        answer: "Yes — these are written to state the practical reason for pairing, not just 'customers also bought this'.",
      },
      {
        question: "How short should this copy be?",
        answer: "Very short — under 15 words, since it usually sits in a small widget near the main product.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce copywriter who writes short cross-sell recommendation copy (under 15 words) that states why two products pair well. You respond only with a numbered list — no preamble.",
      user: `Generate 5 cross-sell copy options for: "${values.products}". Return only a numbered list.`,
    }),
  },
  {
    slug: "dropshipping-supplier-outreach-generator",
    name: "Dropshipping Supplier Outreach Generator",
    tagline: "Get a supplier to actually respond to your inquiry.",
    description:
      "Free AI supplier outreach generator. Describe your store to get a professional supplier inquiry email.",
    category: "Ecommerce",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "store",
        label: "Your store & what you need",
        placeholder: "e.g. new home goods store, looking for a US-based dropship supplier for candles",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your store and what you're sourcing.",
      "Generate outreach email options.",
      "Ask about MOQs, shipping times, and sample availability in your follow-up.",
    ],
    faq: [
      {
        question: "Should I mention I'm a new store?",
        answer: "Being upfront but confident works better than either hiding it or over-apologizing — these strike that balance.",
      },
      {
        question: "What should I ask about in the first email?",
        answer: "Keep the first email focused on fit (product line, pricing, MOQs) — save detailed logistics questions for a follow-up once there's mutual interest.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an e-commerce store owner writing professional, confident supplier outreach emails for a dropshipping or wholesale relationship. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 4 supplier outreach email options. Store/need: "${values.store}". Return only a numbered list.`,
    }),
  },
  {
    slug: "ats-resume-keyword-optimizer",
    name: "ATS Resume Keyword Optimizer",
    tagline: "Get past the bots before you get to a human.",
    description:
      "Free AI ATS optimizer. Paste a job description to get the keywords your resume should include.",
    category: "Career",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "jobDescription",
        label: "Paste the job description",
        placeholder: "e.g. the full job posting text you're applying to",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste the job description you're applying to.",
      "Generate a list of key terms to include.",
      "Naturally work these into your resume where they honestly apply to your experience.",
    ],
    faq: [
      {
        question: "Should I add keywords I don't actually have experience with?",
        answer: "No — never claim skills you don't have. Only include keywords that genuinely reflect your real experience.",
      },
      {
        question: "Does adding these guarantee I'll pass the ATS?",
        answer: "No single tool guarantees ATS success — different systems parse differently, but matching genuine, relevant keywords generally helps.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a resume optimization expert who extracts the key skills, tools, and qualifications an ATS would likely scan for from a job description, organized as a simple list. No markdown headers.",
      user: `Extract the key ATS-relevant keywords from this job description: "${values.jobDescription}".`,
    }),
  },
  {
    slug: "executive-bio-generator",
    name: "Executive Bio Generator",
    tagline: "A C-level bio that signals real gravitas.",
    description:
      "Free AI executive bio generator. Enter your background to get a polished, board-ready bio.",
    category: "Career",
    resultCount: 3,
    maxTokens: 400,
    inputFields: [
      {
        name: "background",
        label: "Your background & achievements",
        placeholder: "e.g. CFO with 15 years in fintech, led a company through a $50M Series C and IPO prep",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your background and key achievements.",
      "Generate bio options.",
      "Use for board decks, press releases, or your executive profile.",
    ],
    faq: [
      {
        question: "How long should an executive bio be?",
        answer: "Around 100-150 words is typical for press or board use — long enough for gravitas, short enough to stay scannable.",
      },
      {
        question: "Should this be written in first or third person?",
        answer: "Third person is standard for executive bios used externally (press, board materials, speaker intros).",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an executive communications writer crafting polished, credible C-level bios (100-150 words, third person) that lead with impact and scale, not just titles. You respond only with a numbered list — no preamble.",
      user: `Generate 3 executive bio options. Background: "${values.background}". Return only a numbered list.`,
    }),
  },
  {
    slug: "promotion-request-email-generator",
    name: "Promotion Request Email Generator",
    tagline: "Make the case for your next title.",
    description:
      "Free AI promotion request generator. Enter your achievements to get a confident, well-argued email.",
    category: "Career",
    resultCount: 3,
    maxTokens: 380,
    inputFields: [
      {
        name: "achievements",
        label: "Your achievements & target role",
        placeholder: "e.g. led 3 major launches this year, want to move from Senior to Staff Engineer",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your achievements and the role you're aiming for.",
      "Generate email options.",
      "Send to your manager to request a conversation, then discuss specifics live.",
    ],
    faq: [
      {
        question: "Should this ask for the promotion directly, or a conversation?",
        answer: "These lead with requesting a conversation — it's usually a more effective opener than a flat, unilateral ask over email.",
      },
      {
        question: "Should I mention a timeline?",
        answer: "Optional — if your company has a formal promotion cycle, referencing it can help frame the timing appropriately.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach writing confident, achievement-focused promotion request emails that open the door to a conversation rather than demanding an immediate decision. Each result is a complete short email. You respond only with a numbered list — no preamble.",
      user: `Generate 3 promotion request email options. Achievements/target role: "${values.achievements}". Return only a numbered list.`,
    }),
  },
  {
    slug: "boomerang-employee-message-generator",
    name: "Boomerang Employee Welcome-Back Generator",
    tagline: "Welcome a returning employee the right way.",
    description:
      "Free AI welcome-back generator. Enter the context to get a warm message for a returning employee.",
    category: "Career",
    resultCount: 3,
    maxTokens: 300,
    inputFields: [
      {
        name: "context",
        label: "Context",
        placeholder: "e.g. former engineer returning after 2 years at another company, rejoining as a team lead",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the returning employee's history and new role.",
      "Generate welcome-back message options.",
      "Send ahead of their first day, alongside standard onboarding materials.",
    ],
    faq: [
      {
        question: "What's a 'boomerang employee'?",
        answer: "Someone who left the company and later returns — a growing trend that companies increasingly recognize and plan for warmly.",
      },
      {
        question: "Should this acknowledge their time away?",
        answer: "A brief, positive nod to their time away and what they bring back tends to feel more genuine than ignoring it entirely.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR professional writing warm, genuine welcome-back messages for a returning ('boomerang') employee. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 3 welcome-back message options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "career-pivot-linkedin-summary-generator",
    name: "Career Pivot LinkedIn Summary Generator",
    tagline: "Reframe your story for the field you're entering.",
    description:
      "Free AI LinkedIn summary generator. Enter your background and target field to get a pivot-focused summary.",
    category: "Career",
    resultCount: 3,
    maxTokens: 420,
    inputFields: [
      {
        name: "pivot",
        label: "Current background & target field",
        placeholder: "e.g. 6 years in retail management, pivoting into UX design",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your current background and the field you're moving into.",
      "Generate LinkedIn summary options.",
      "Update your headline and experience section to reinforce the same narrative.",
    ],
    faq: [
      {
        question: "Should this hide my previous career?",
        answer: "No — the strongest pivot narratives connect past experience to the new field as a strength, not something to hide.",
      },
      {
        question: "How long should a LinkedIn summary be?",
        answer: "These are written around 100-150 words — long enough to tell the story, short enough to hold attention.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a career coach writing LinkedIn About summaries for career changers that frame the transition as a deliberate, asset-backed move, first person, 100-150 words. You respond only with a numbered list — no preamble.",
      user: `Generate 3 LinkedIn summary options for this career pivot: "${values.pivot}". Return only a numbered list.`,
    }),
  },
  {
    slug: "board-meeting-minutes-generator",
    name: "Board Meeting Minutes Generator",
    tagline: "Turn rough notes into proper minutes.",
    description:
      "Free AI board minutes generator. Enter your rough notes to get a structured meeting minutes draft.",
    category: "Business",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "notes",
        label: "Rough meeting notes",
        placeholder: "e.g. discussed Q2 budget, approved new hire for VP Sales, next meeting set for the 15th",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your rough notes from the meeting.",
      "Generate a structured minutes draft.",
      "Have it reviewed and approved per your governance requirements.",
    ],
    faq: [
      {
        question: "Are these legally sufficient corporate minutes?",
        answer: "This is a formatting draft only — corporate governance requirements for minutes vary by jurisdiction and entity type; confirm with legal counsel if needed for compliance.",
      },
      {
        question: "Does this include attendee names?",
        answer: "It leaves a placeholder — add your actual attendee list and any votes recorded.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a corporate secretary formatting board meeting minutes with sections: Attendees (placeholder), Items Discussed, Decisions/Votes, Next Meeting. No markdown headers, plain section labels. Not legal advice.",
      user: `Format board meeting minutes from these notes: "${values.notes}".`,
    }),
  },
  {
    slug: "ma-announcement-generator",
    name: "M&A Announcement Generator",
    tagline: "Announce an acquisition or merger clearly.",
    description:
      "Free AI M&A announcement generator. Describe the deal to get a clear internal or external announcement.",
    category: "Business",
    resultCount: 1,
    maxTokens: 1100,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "deal",
        label: "Deal details",
        placeholder: "e.g. Acme is acquiring Beta Corp to expand into the European market",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the deal and its strategic rationale.",
      "Generate an announcement draft.",
      "Have legal and communications teams review before publishing — M&A announcements have disclosure implications.",
    ],
    faq: [
      {
        question: "Does this handle required regulatory disclosures?",
        answer: "No — public company M&A announcements often have strict, regulated disclosure requirements. This is a communications draft only, not legal or compliance guidance.",
      },
      {
        question: "Should this address employee concerns?",
        answer: "For internal versions, yes — acknowledging uncertainty and committing to more details soon tends to land better than glossing over it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a corporate communications writer drafting a clear M&A announcement stating the deal, strategic rationale, and next steps. Not legal or regulatory advice — a communications draft only.",
      user: `Draft an M&A announcement for: "${values.deal}".`,
    }),
  },
  {
    slug: "exit-strategy-summary-generator",
    name: "Exit Strategy Summary Generator",
    tagline: "Articulate your endgame clearly.",
    description:
      "Free AI exit strategy generator. Describe your business and goals to get a clear exit strategy summary.",
    category: "Business",
    resultCount: 1,
    maxTokens: 1100,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "context",
        label: "Business & exit goals",
        placeholder: "e.g. profitable SaaS business, targeting acquisition by a strategic buyer in 3-5 years",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business and general exit goals/timeline.",
      "Generate a summary write-up.",
      "This is a planning aid — consult an M&A advisor for an actual exit process.",
    ],
    faq: [
      {
        question: "Does this create a real valuation or deal structure?",
        answer: "No — this is a strategic narrative summary. Actual valuation and deal structuring need a qualified M&A advisor or investment banker.",
      },
      {
        question: "What exit types does this cover?",
        answer: "It adapts to whatever you describe — acquisition, IPO, management buyout, or straightforward wind-down.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business strategy advisor writing a clear exit strategy summary based on stated goals, covering likely path, timeline considerations, and what to build toward. Not financial or M&A advice.",
      user: `Write an exit strategy summary for: "${values.context}".`,
    }),
  },
  {
    slug: "succession-planning-note-generator",
    name: "Succession Planning Note Generator",
    tagline: "Document the plan before you need it.",
    description:
      "Free AI succession planning generator. Describe the role to get a structured succession planning note.",
    category: "Business",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "role",
        label: "Key role & considerations",
        placeholder: "e.g. founder/CEO, considering a COO promotion to successor in 2 years",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the key role and any current thinking on succession.",
      "Generate a structured planning note.",
      "Discuss with your board or leadership team and revisit regularly.",
    ],
    faq: [
      {
        question: "Does this pick who my successor should be?",
        answer: "No — it structures the considerations and questions to work through; the actual decision is yours and your board's.",
      },
      {
        question: "How often should succession plans be updated?",
        answer: "Annually at minimum, and after any major leadership or strategy change, is common practice.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an organizational consultant structuring a succession planning note with sections: Current State, Key Risks, Potential Candidates (placeholder), Next Steps. No markdown headers, plain section labels.",
      user: `Build a succession planning note for: "${values.role}".`,
    }),
  },
  {
    slug: "business-continuity-plan-outline-generator",
    name: "Business Continuity Plan Outline Generator",
    tagline: "Plan for disruption before it happens.",
    description:
      "Free AI business continuity generator. Describe your business to get a structured continuity plan outline.",
    category: "Business",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "business",
        label: "Describe your business",
        placeholder: "e.g. a 20-person e-commerce company relying on one warehouse and one main supplier",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business and its key dependencies.",
      "Generate a structured continuity plan outline.",
      "Fill in specific contacts, backup vendors, and recovery time targets with your team.",
    ],
    faq: [
      {
        question: "Does this cover every possible disruption scenario?",
        answer: "It covers common categories to plan for (supply chain, key personnel, systems/data, facilities) — tailor specifics to your actual risk profile.",
      },
      {
        question: "How often should this plan be tested?",
        answer: "Annually at minimum, and after any major change to operations, is a common practice for keeping a continuity plan realistic.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business continuity consultant structuring a plan outline with sections: Key Risks, Critical Dependencies, Response Steps per Risk, Recovery Priorities. No markdown headers, plain section labels.",
      user: `Build a business continuity plan outline for: "${values.business}".`,
    }),
  },
  {
    slug: "drip-email-sequence-outline-generator",
    name: "Drip Email Sequence Outline Generator",
    tagline: "A multi-email sequence, mapped out in one shot.",
    description:
      "Free AI drip sequence generator. Enter your goal to get a structured multi-email sequence outline.",
    category: "Marketing",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "goal",
        label: "Sequence goal",
        placeholder: "e.g. onboard new trial users toward their first paid conversion",
        type: "text",
        required: true,
      },
      {
        name: "length",
        label: "Number of emails",
        type: "select",
        options: ["3 emails", "5 emails", "7 emails"],
      },
    ],
    howTo: [
      "Describe the goal of the sequence.",
      "Pick how many emails you want.",
      "Generate an outline, then write the full copy for each email.",
    ],
    faq: [
      {
        question: "Does this write the full email copy?",
        answer: "No — it outlines each email's purpose and key message; write or generate the full copy per email separately.",
      },
      {
        question: "How far apart should each email be sent?",
        answer: "Varies by goal — onboarding sequences often go daily at first, while nurture sequences may space out weekly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an email marketing strategist who outlines drip sequences, labeling each email (Email 1, Email 2, etc.) with its purpose and key message. No markdown headers.",
      user: `Build a drip email sequence outline. Goal: "${values.goal}". Number of emails: ${values.length || "5 emails"}.`,
    }),
  },
  {
    slug: "lead-magnet-idea-generator",
    name: "Lead Magnet Idea Generator",
    tagline: "Something worth an email address.",
    description:
      "Free AI lead magnet generator. Describe your audience to get specific, compelling lead magnet ideas.",
    category: "Marketing",
    resultCount: 8,
    maxTokens: 320,
    inputFields: [
      {
        name: "audience",
        label: "Your audience & offer",
        placeholder: "e.g. small business owners interested in social media marketing",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your target audience and what you offer.",
      "Generate lead magnet ideas.",
      "Pick one that's genuinely useful and quick for you to actually create.",
    ],
    faq: [
      {
        question: "What makes a good lead magnet?",
        answer: "Something specific and immediately useful — a checklist, template, or short guide tends to outperform a generic 'ebook'.",
      },
      {
        question: "Does this create the actual content?",
        answer: "No — it suggests the idea/format; use our other tools or your own writing to build the actual asset.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a marketing strategist who suggests specific, high-value lead magnet ideas (checklists, templates, mini-guides) matched to a described audience, not generic 'free ebook' suggestions. You respond only with a numbered list — no preamble.",
      user: `Generate 8 lead magnet ideas for: "${values.audience}". Return only a numbered list.`,
    }),
  },
  {
    slug: "customer-journey-map-narrative-generator",
    name: "Customer Journey Map Narrative Generator",
    tagline: "Walk through the customer's experience, stage by stage.",
    description:
      "Free AI customer journey generator. Describe your funnel to get a stage-by-stage narrative.",
    category: "Marketing",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "funnel",
        label: "Your product & funnel stages",
        placeholder: "e.g. a meal kit subscription: awareness via social ads, trial box, subscription",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your product and the stages customers go through.",
      "Generate a stage-by-stage journey narrative.",
      "Use to spot gaps or friction points in your actual funnel.",
    ],
    faq: [
      {
        question: "Does this map my actual customer data?",
        answer: "No — it builds a plausible narrative based on your described funnel; validate against real customer behavior and feedback.",
      },
      {
        question: "What does each stage include?",
        answer: "Customer mindset, key touchpoint, and potential friction point for each stage you described.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer experience strategist who maps a journey stage by stage, noting customer mindset, key touchpoint, and potential friction at each stage. No markdown headers.",
      user: `Build a customer journey narrative for: "${values.funnel}".`,
    }),
  },
  {
    slug: "marketing-budget-justification-generator",
    name: "Marketing Budget Justification Generator",
    tagline: "Make the case for the spend, not just the plan.",
    description:
      "Free AI budget justification generator. Enter your ask to get a clear, numbers-backed justification.",
    category: "Marketing",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "ask",
        label: "Budget ask & expected outcome",
        placeholder: "e.g. requesting $20k for paid social, expect 300 new trial signups based on past CAC",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your budget request and expected outcome.",
      "Generate a justification write-up.",
      "Bring your real supporting data to the actual budget conversation.",
    ],
    faq: [
      {
        question: "Does this fabricate numbers for me?",
        answer: "No — provide your own real projections and past performance data; this organizes them into a persuasive narrative.",
      },
      {
        question: "Should I include a downside/risk section?",
        answer: "Yes — acknowledging risk and how you'll measure success tends to build more trust with budget approvers than an all-upside pitch.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a marketing director writing a clear, numbers-backed budget justification, including expected outcome and how success will be measured. No markdown headers.",
      user: `Write a budget justification for: "${values.ask}".`,
    }),
  },
  {
    slug: "competitor-analysis-summary-generator",
    name: "Competitor Analysis Summary Generator",
    tagline: "Turn competitor research into a clear takeaway.",
    description:
      "Free AI competitor analysis generator. Enter your findings to get a structured summary of positioning gaps.",
    category: "Marketing",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "findings",
        label: "Competitor findings",
        placeholder: "e.g. Competitor A is cheaper but has poor support; Competitor B has better UX but no free tier",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List what you've found about your competitors.",
      "Generate a structured summary.",
      "Use to sharpen your own positioning and messaging.",
    ],
    faq: [
      {
        question: "Does this research competitors for me?",
        answer: "No — you provide the findings from your own research; this organizes them into a clear strategic summary.",
      },
      {
        question: "Does it suggest how I should position against them?",
        answer: "Yes — it closes with a suggested positioning angle based on the gaps you described.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a competitive intelligence analyst who organizes competitor findings into a structured summary (per-competitor strengths/weaknesses, then a suggested positioning angle). No markdown headers.",
      user: `Summarize this competitor research and suggest a positioning angle: "${values.findings}".`,
    }),
  },
  {
    slug: "api-endpoint-documentation-generator",
    name: "API Endpoint Documentation Generator",
    tagline: "Docs a developer can actually integrate from.",
    description:
      "Free AI API doc generator. Describe your endpoint to get structured documentation.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "endpoint",
        label: "Endpoint details",
        placeholder: "e.g. POST /api/orders — creates a new order, takes customer_id and line_items, returns order object",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the endpoint, its inputs, and what it returns.",
      "Generate structured documentation.",
      "Add real example request/response payloads before publishing.",
    ],
    faq: [
      {
        question: "Does this generate real example payloads?",
        answer: "It creates plausible placeholder examples matched to your description; verify and replace with real request/response samples.",
      },
      {
        question: "What sections does this include?",
        answer: "Description, Parameters, Example Request, Example Response, Error Codes (placeholder) — a standard API doc structure.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a technical writer documenting an API endpoint with sections: Description, Parameters, Example Request, Example Response. No markdown headers, plain section labels.",
      user: `Document this API endpoint: "${values.endpoint}".`,
    }),
  },
  {
    slug: "changelog-from-commits-generator",
    name: "Changelog From Commits Generator",
    tagline: "Turn raw commit messages into readable release notes.",
    description:
      "Free AI changelog generator. Paste your commit messages to get a clean, organized changelog.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "commits",
        label: "Paste your commit messages",
        placeholder: "e.g. fix: login bug on safari / feat: add CSV export / chore: bump deps",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste your raw commit messages, one per line.",
      "Generate an organized changelog.",
      "Publish alongside your release.",
    ],
    faq: [
      {
        question: "Does this need Conventional Commits format?",
        answer: "It works better with prefixes like feat:/fix:/chore:, but can still organize plain commit messages reasonably well.",
      },
      {
        question: "Does this rewrite technical jargon into customer-friendly language?",
        answer: "It cleans up phrasing, but for a fully customer-facing changelog, review and simplify further for a non-technical audience.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a release manager turning raw commit messages into a clean, organized changelog grouped into Added, Fixed, and Changed sections. No markdown headers, plain section labels.",
      user: `Build a changelog from these commit messages: "${values.commits}".`,
    }),
  },
  {
    slug: "technical-debt-explainer-generator",
    name: "Technical Debt Explainer Generator",
    tagline: "Explain the debt to people who don't read code.",
    description:
      "Free AI tech debt explainer. Describe the issue to get a plain-English explanation for non-technical stakeholders.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "issue",
        label: "The technical debt",
        placeholder: "e.g. the checkout system relies on an outdated payment library with no active support",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the technical debt issue.",
      "Generate a plain-English explanation of the risk and cost of not addressing it.",
      "Use to make the case to non-technical stakeholders for prioritizing the fix.",
    ],
    faq: [
      {
        question: "Does this help me get budget/time approved to fix it?",
        answer: "It helps frame the business risk clearly, which is often the missing piece in getting non-technical buy-in for tech debt work.",
      },
      {
        question: "Should I exaggerate the risk to get priority?",
        answer: "No — an honest, clear explanation of real risk is both more ethical and more credible long-term than manufactured urgency.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an engineering lead explaining technical debt to non-technical stakeholders in plain English: what it is, the risk of leaving it, and the cost of fixing it now vs. later. No jargon.",
      user: `Explain this technical debt issue for non-technical stakeholders: "${values.issue}".`,
    }),
  },
  {
    slug: "incident-severity-classification-generator",
    name: "Incident Severity Classification Helper",
    tagline: "Classify severity consistently, every time.",
    description:
      "Free AI severity classifier. Describe the incident to get a suggested severity level with reasoning.",
    category: "Tech & Developer Tools",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "incident",
        label: "Describe the incident",
        placeholder: "e.g. checkout is fully down for all users, no workaround available",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the incident and its scope.",
      "Generate a suggested severity classification with reasoning.",
      "Confirm against your team's specific severity definitions.",
    ],
    faq: [
      {
        question: "Does this use a standard severity scale?",
        answer: "It reasons using a common SEV1 (critical) through SEV4 (minor) framework — map to your own team's specific scale if it differs.",
      },
      {
        question: "Should this replace human judgment during an active incident?",
        answer: "No — use it as a quick sanity check; the incident commander's real-time judgment always takes priority.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a site reliability engineer suggesting an incident severity level (SEV1-SEV4) with a one-sentence reason, based on described scope and impact.",
      user: `Suggest a severity classification for this incident: "${values.incident}".`,
    }),
  },
  {
    slug: "investor-pitch-financial-narrative-generator",
    name: "Investor Pitch Financial Narrative Generator",
    tagline: "Explain your numbers the way investors want to hear them.",
    description:
      "Free AI financial narrative generator. Enter your numbers to get a clear investor-facing explanation.",
    category: "Finance & Personal Finance",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "numbers",
        label: "Key financial numbers",
        placeholder: "e.g. $50k MRR, 8% monthly growth, 85% gross margin, 18 months runway",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your key financial numbers.",
      "Generate a narrative explaining what the numbers mean and why they matter.",
      "Use in your pitch deck's financial slide talking points.",
    ],
    faq: [
      {
        question: "Does this replace an actual financial model?",
        answer: "No — this is the narrative explanation to accompany your real financial model and projections, not a substitute for one.",
      },
      {
        question: "Should I highlight weak metrics too?",
        answer: "Experienced investors will find them anyway — proactively addressing a weaker metric with context tends to build more credibility than avoiding it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup CFO writing a clear investor-facing narrative around financial metrics, explaining what the numbers mean and why they're a good sign (or how they're improving). Not financial advice.",
      user: `Write a financial narrative for these numbers: "${values.numbers}".`,
    }),
  },
  {
    slug: "breakeven-analysis-explainer-generator",
    name: "Break-Even Analysis Explainer Generator",
    tagline: "Understand exactly when you'll turn a profit.",
    description:
      "Free AI break-even explainer. Enter your costs and pricing to get a plain-English explanation.",
    category: "Finance & Personal Finance",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "numbers",
        label: "Costs & pricing",
        placeholder: "e.g. $5,000/month fixed costs, $20 variable cost per unit, sells for $45",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your fixed costs, variable costs, and price per unit.",
      "Generate a plain-English break-even explanation.",
      "Verify the math yourself for any decision with real financial stakes.",
    ],
    faq: [
      {
        question: "Does this calculate the exact break-even number for me?",
        answer: "It walks through the calculation based on your numbers, but always double-check the math yourself before relying on it for decisions.",
      },
      {
        question: "Is this financial advice?",
        answer: "No — this is educational content explaining a standard business calculation, not personalized financial advice.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a business finance educator who explains break-even analysis in plain English, walking through the calculation based on given numbers and what the result means. Not financial advice.",
      user: `Explain the break-even point for: "${values.numbers}".`,
    }),
  },
  {
    slug: "cash-flow-statement-summary-generator",
    name: "Cash Flow Statement Summary Generator",
    tagline: "Explain where the cash actually went.",
    description:
      "Free AI cash flow summary generator. Enter your cash flow highlights to get a plain-English summary.",
    category: "Finance & Personal Finance",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "highlights",
        label: "Cash flow highlights",
        placeholder: "e.g. $80k from operations, -$30k from equipment purchase, $50k from a new loan",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your cash flow highlights by category (operating, investing, financing).",
      "Generate a plain-English summary.",
      "Use to brief stakeholders who don't read financial statements daily.",
    ],
    faq: [
      {
        question: "Does this replace my accountant's statement?",
        answer: "No — this explains a statement you already have in plain language; it doesn't prepare or audit your actual financials.",
      },
      {
        question: "Why does cash flow matter separately from profit?",
        answer: "A business can be profitable on paper but still run out of cash — this summary highlights that distinction based on your numbers.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a financial educator explaining a cash flow statement in plain English, covering operating, investing, and financing activities as relevant. Not financial advice.",
      user: `Summarize this cash flow in plain English: "${values.highlights}".`,
    }),
  },
  {
    slug: "expense-report-justification-generator",
    name: "Expense Report Justification Generator",
    tagline: "Explain a business expense clearly for approval.",
    description:
      "Free AI expense justification generator. Describe the expense to get a clear business justification.",
    category: "Finance & Personal Finance",
    resultCount: 3,
    maxTokens: 260,
    inputFields: [
      {
        name: "expense",
        label: "The expense",
        placeholder: "e.g. $1,200 conference ticket and travel for the annual industry summit",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the expense and its business purpose.",
      "Generate justification options.",
      "Attach to your expense report with receipts.",
    ],
    faq: [
      {
        question: "Should I mention the expected business benefit?",
        answer: "Yes — tying the expense to a specific expected outcome (new leads, skill development) strengthens the justification.",
      },
      {
        question: "How detailed should this be?",
        answer: "Brief and specific — a few sentences is usually enough for standard expense approval workflows.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an employee writing clear, brief business expense justifications tied to a specific business benefit. You respond only with a numbered list — no preamble.",
      user: `Generate 3 expense justification options for: "${values.expense}". Return only a numbered list.`,
    }),
  },
  {
    slug: "business-loan-application-pitch-generator",
    name: "Business Loan Application Pitch Generator",
    tagline: "Present your business the way lenders want to see it.",
    description:
      "Free AI loan pitch generator. Describe your business to get a clear narrative for a loan application.",
    category: "Finance & Personal Finance",
    resultCount: 1,
    maxTokens: 1100,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "business",
        label: "Business & loan purpose",
        placeholder: "e.g. profitable 3-year-old bakery, seeking $50k for a second location",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your business and what the loan will fund.",
      "Generate a narrative draft.",
      "Pair with your actual financial statements and required documentation.",
    ],
    faq: [
      {
        question: "Does this replace required financial documents?",
        answer: "No — lenders require actual financial statements, tax returns, and projections; this is the narrative/cover portion only.",
      },
      {
        question: "Should I mention how the loan will be repaid?",
        answer: "Yes — lenders want to see a clear repayment plan; this draft includes a place to address that based on your input.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a small business advisor writing a clear, credible business loan application narrative covering business history, loan purpose, and repayment plan. Not financial advice.",
      user: `Write a loan application narrative for: "${values.business}".`,
    }),
  },
  {
    slug: "dei-statement-generator",
    name: "DEI Statement Generator",
    tagline: "A commitment statement grounded in real action.",
    description:
      "Free AI DEI statement generator. Describe your initiatives to get a specific, credible statement.",
    category: "HR & Workplace",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "initiatives",
        label: "Your DEI initiatives",
        placeholder: "e.g. blind resume screening, employee resource groups, pay equity audits",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your actual DEI initiatives and commitments.",
      "Generate a statement draft.",
      "Only publish claims grounded in real, ongoing practices.",
    ],
    faq: [
      {
        question: "Should this include specific programs?",
        answer: "Yes — specific, named initiatives read as far more credible than general statements of values alone.",
      },
      {
        question: "Is this legal or HR compliance guidance?",
        answer: "No — this is a communications draft. Consult HR/legal for compliance with employment law in your jurisdiction.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR communications specialist writing a specific, credible DEI statement grounded in the stated real initiatives, avoiding vague, unsubstantiated claims.",
      user: `Write a DEI statement based on: "${values.initiatives}".`,
    }),
  },
  {
    slug: "employee-wellness-announcement-generator",
    name: "Employee Wellness Program Announcement Generator",
    tagline: "Get people to actually use the benefit.",
    description:
      "Free AI wellness announcement generator. Describe your program to get an engaging internal announcement.",
    category: "HR & Workplace",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "program",
        label: "Program details",
        placeholder: "e.g. new mental health app subscription, free for all employees, includes therapy sessions",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the wellness program or benefit.",
      "Generate announcement options.",
      "Send via email or your internal communications channel.",
    ],
    faq: [
      {
        question: "Should I explain how to sign up?",
        answer: "Yes — add your specific enrollment steps or link wherever you use the announcement.",
      },
      {
        question: "Should this address privacy concerns for mental health benefits?",
        answer: "Yes, if relevant — briefly noting confidentiality can reduce hesitation to use the benefit.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR communications specialist writing engaging wellness program announcements that make employees want to actually use the benefit. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 wellness program announcement options. Program: "${values.program}". Return only a numbered list.`,
    }),
  },
  {
    slug: "hybrid-work-policy-summary-generator",
    name: "Hybrid Work Policy Summary Generator",
    tagline: "Explain the policy so nobody's confused on Monday.",
    description:
      "Free AI hybrid work policy generator. Describe your policy to get a clear employee-facing summary.",
    category: "HR & Workplace",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "policy",
        label: "Policy details",
        placeholder: "e.g. 3 days in office (Tue/Wed/Thu), flexible on the other 2 days",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your hybrid work policy details.",
      "Generate a clear summary.",
      "Have HR/legal confirm it aligns with your official written policy.",
    ],
    faq: [
      {
        question: "Does this replace the formal HR policy document?",
        answer: "No — this is a friendly, readable summary to pair with (not replace) your official policy document.",
      },
      {
        question: "Should this address exceptions?",
        answer: "Briefly noting how to request exceptions (and who approves them) helps set clear expectations upfront.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR communications specialist explaining a hybrid work policy in clear, friendly language, including how exceptions are handled. No markdown headers.",
      user: `Summarize this hybrid work policy for employees: "${values.policy}".`,
    }),
  },
  {
    slug: "workplace-conflict-resolution-email-generator",
    name: "Workplace Conflict Resolution Email Generator",
    tagline: "Address tension professionally, not passive-aggressively.",
    description:
      "Free AI conflict resolution generator. Describe the situation to get a calm, professional message.",
    category: "HR & Workplace",
    resultCount: 4,
    maxTokens: 340,
    inputFields: [
      {
        name: "situation",
        label: "The situation",
        placeholder: "e.g. two team members disagree publicly in meetings, affecting team morale",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the conflict situation.",
      "Generate message options.",
      "Consider whether this needs a live conversation instead of (or alongside) a written message.",
    ],
    faq: [
      {
        question: "Should conflicts always be addressed over email?",
        answer: "Not always — for sensitive conflicts, a live conversation is often better; use written communication to set up that conversation or follow up afterward.",
      },
      {
        question: "Should this take sides?",
        answer: "No — these are written to stay neutral and focus on resolution, not assigning blame to either party.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an HR professional writing calm, neutral, solution-focused messages to address workplace conflict, without assigning blame. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 conflict resolution message options for: "${values.situation}". Return only a numbered list.`,
    }),
  },
  {
    slug: "term-sheet-explainer-generator",
    name: "Term Sheet Explainer Generator",
    tagline: "Understand what you're actually agreeing to.",
    description:
      "Free AI term sheet explainer. Paste a term to get a plain-English explanation of what it means.",
    category: "Startup & Fundraising",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "term",
        label: "Paste the term/clause",
        placeholder: "e.g. 1x non-participating liquidation preference",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste the specific term sheet clause you want explained.",
      "Generate a plain-English explanation.",
      "Have a startup lawyer review the actual term sheet before signing anything.",
    ],
    faq: [
      {
        question: "Is this legal or financial advice?",
        answer: "No — this explains typical meaning in plain English. Always have a qualified startup attorney review your actual term sheet.",
      },
      {
        question: "Does this tell me if a term is founder-friendly?",
        answer: "It can note if a term is common or unusually aggressive, but a lawyer's judgment on your specific deal is more reliable.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup finance educator explaining term sheet clauses in plain English, noting whether the term is standard or unusually founder- or investor-favorable. Not legal or financial advice.",
      user: `Explain this term sheet clause: "${values.term}".`,
    }),
  },
  {
    slug: "cap-table-scenario-explainer-generator",
    name: "Cap Table Scenario Explainer Generator",
    tagline: "See how a new round changes who owns what.",
    description:
      "Free AI cap table explainer. Describe a funding scenario to get a plain-English breakdown of dilution.",
    category: "Startup & Fundraising",
    resultCount: 1,
    maxTokens: 1400,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "scenario",
        label: "Scenario",
        placeholder: "e.g. raising $2M at a $10M pre-money valuation, currently 2 founders own 100%",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the current cap table and the new round terms.",
      "Generate a plain-English explanation of the resulting dilution.",
      "Verify the exact math with your cap table software or a lawyer/accountant before relying on it.",
    ],
    faq: [
      {
        question: "Does this calculate exact ownership percentages?",
        answer: "It walks through the general math conceptually; use dedicated cap table software for precise, current numbers.",
      },
      {
        question: "Is this financial or legal advice?",
        answer: "No — this is educational content explaining how dilution generally works, not advice on your specific deal.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup finance educator explaining how a funding round affects the cap table and ownership dilution, in plain English, walking through the general math. Not financial or legal advice.",
      user: `Explain the dilution impact of this scenario: "${values.scenario}".`,
    }),
  },
  {
    slug: "board-update-deck-outline-generator",
    name: "Board Update Deck Outline Generator",
    tagline: "Structure the deck before you build the slides.",
    description:
      "Free AI board deck generator. Enter your key updates to get a structured board meeting deck outline.",
    category: "Startup & Fundraising",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "updates",
        label: "Key updates this period",
        placeholder: "e.g. hit $60k MRR, launched in 2 new markets, hiring a VP Eng",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your key updates for this board meeting.",
      "Generate a slide-by-slide outline.",
      "Build your actual slides and data visuals from this structure.",
    ],
    faq: [
      {
        question: "How many slides should a board deck have?",
        answer: "Many effective board decks run 10-15 slides — enough to cover key areas without turning the meeting into a slide read-through.",
      },
      {
        question: "Should challenges be included, not just wins?",
        answer: "Yes — boards generally want visibility into challenges too, not just good news, to provide useful input.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup founder structuring a board update deck outline (Highlights, Metrics, Challenges, Asks, Discussion Topics) as slide titles with a one-line description each. No markdown headers.",
      user: `Build a board update deck outline based on: "${values.updates}".`,
    }),
  },
  {
    slug: "acquisition-offer-response-generator",
    name: "Acquisition Offer Response Generator",
    tagline: "Respond to an offer thoughtfully, not impulsively.",
    description:
      "Free AI acquisition response generator. Describe the offer to get a professional, measured response.",
    category: "Startup & Fundraising",
    resultCount: 3,
    maxTokens: 350,
    inputFields: [
      {
        name: "offer",
        label: "Offer context & your stance",
        placeholder: "e.g. received an unsolicited acquisition interest, want more time to consider before responding",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the offer context and your current stance.",
      "Generate response options.",
      "Involve your board, co-founders, and legal counsel before any substantive negotiation.",
    ],
    faq: [
      {
        question: "Should I respond to this without legal counsel?",
        answer: "For anything beyond an initial acknowledgment, involve a lawyer experienced in M&A — the stakes are too high to navigate alone.",
      },
      {
        question: "Should I reveal my valuation expectations right away?",
        answer: "Often not in the first response — these options keep the door open without committing to specifics prematurely.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a startup founder writing a professional, measured initial response to an acquisition offer that keeps options open without over-committing. Each result is a complete short email. Not legal advice — involve counsel before real negotiation. You respond only with a numbered list — no preamble.",
      user: `Generate 3 response options. Offer/stance: "${values.offer}". Return only a numbered list.`,
    }),
  },
  {
    slug: "churn-prevention-outreach-generator",
    name: "Churn Prevention Outreach Generator",
    tagline: "Reach at-risk customers before they leave.",
    description:
      "Free AI churn prevention generator. Describe the at-risk signal to get a proactive outreach message.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "signal",
        label: "At-risk signal",
        placeholder: "e.g. usage dropped 70% over the last month, previously a daily active user",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the signal indicating the customer might churn.",
      "Generate outreach message options.",
      "Send proactively, before they actually cancel.",
    ],
    faq: [
      {
        question: "Should I mention that I've noticed their usage drop?",
        answer: "Yes, gently — being observant (without being creepy about it) shows genuine care and often prompts a helpful conversation.",
      },
      {
        question: "Should I offer a discount right away?",
        answer: "Not necessarily first — understanding the reason for disengagement often leads to a better fix than jumping straight to a discount.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer success manager writing proactive, genuinely helpful outreach to an at-risk customer, leading with curiosity rather than a sales pitch. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 churn prevention outreach options. Signal: "${values.signal}". Return only a numbered list.`,
    }),
  },
  {
    slug: "vip-customer-thank-you-generator",
    name: "VIP Customer Thank-You Generator",
    tagline: "Make your best customers feel like it.",
    description:
      "Free AI VIP thank-you generator. Describe the customer to get a genuine, personal thank-you message.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 300,
    inputFields: [
      {
        name: "customer",
        label: "Customer context",
        placeholder: "e.g. customer for 5 years, just referred 3 new clients",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what makes this customer a VIP.",
      "Generate thank-you message options.",
      "Send personally, ideally with a specific perk or gesture attached.",
    ],
    faq: [
      {
        question: "Should I offer something concrete along with the thanks?",
        answer: "A specific gesture (discount, early access, handwritten note) makes the appreciation feel more real than words alone.",
      },
      {
        question: "How personal should this be?",
        answer: "As personal as possible — reference specific details about their relationship with your business, not generic loyalty language.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a customer success manager writing genuine, specific thank-you messages for top customers, referencing real context rather than generic loyalty phrases. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 VIP thank-you message options. Context: "${values.customer}". Return only a numbered list.`,
    }),
  },
  {
    slug: "support-ticket-triage-note-generator",
    name: "Support Ticket Priority Triage Note Generator",
    tagline: "Explain the priority call so nobody has to guess.",
    description:
      "Free AI triage note generator. Describe the ticket to get a clear priority classification with reasoning.",
    category: "Customer Support",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "ticket",
        label: "Ticket summary",
        placeholder: "e.g. one enterprise customer can't export invoices, affects month-end billing",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Summarize the support ticket.",
      "Generate a priority classification with reasoning.",
      "Confirm against your team's specific priority definitions.",
    ],
    faq: [
      {
        question: "Does this use a standard priority scale?",
        answer: "It reasons using a common P1 (urgent) through P4 (low) framework — map to your own team's specific scale if it differs.",
      },
      {
        question: "Should this replace human judgment on ambiguous tickets?",
        answer: "No — use it as a quick starting point; the support lead's judgment on business impact always takes priority.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a support team lead suggesting a ticket priority level (P1-P4) with a one-sentence reason, based on described impact and urgency.",
      user: `Suggest a priority classification for this ticket: "${values.ticket}".`,
    }),
  },
  {
    slug: "product-feedback-request-generator",
    name: "Product Feedback Request Generator",
    tagline: "Ask for feedback in a way people actually answer.",
    description:
      "Free AI feedback request generator. Describe your product update to get an engaging feedback ask.",
    category: "Customer Support",
    resultCount: 4,
    maxTokens: 280,
    inputFields: [
      {
        name: "context",
        label: "What you want feedback on",
        placeholder: "e.g. the new dashboard redesign, live for 2 weeks",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you want feedback on.",
      "Generate feedback request options.",
      "Send via email, in-app message, or a short survey link.",
    ],
    faq: [
      {
        question: "Should I ask open-ended or specific questions?",
        answer: "A mix works well — these lead with a specific, easy-to-answer question rather than a vague 'what do you think?'",
      },
      {
        question: "Should I offer an incentive for feedback?",
        answer: "Optional — many users will respond to a genuine, well-timed ask without needing an incentive.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product manager writing engaging feedback request messages with a specific, easy-to-answer question, not a vague open-ended ask. Each result is a complete short message. You respond only with a numbered list — no preamble.",
      user: `Generate 4 feedback request options. Context: "${values.context}". Return only a numbered list.`,
    }),
  },
  {
    slug: "rate-limit-error-copy-generator",
    name: "API Rate Limit Error Copy Generator",
    tagline: "Tell developers exactly what to do next.",
    description:
      "Free AI error copy generator. Describe your API's limits to get clear, actionable rate-limit error messages.",
    category: "Website & SaaS",
    resultCount: 4,
    maxTokens: 260,
    inputFields: [
      {
        name: "limits",
        label: "Rate limit details",
        placeholder: "e.g. 100 requests per minute on the free tier",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your API's rate limits.",
      "Generate error message options.",
      "Include the actual retry-after value and upgrade link in your real response.",
    ],
    faq: [
      {
        question: "Should this include a retry-after value?",
        answer: "Yes — mention it in your actual API response headers/body; these messages reference it as a placeholder concept.",
      },
      {
        question: "Should the message mention upgrading?",
        answer: "If you have paid tiers with higher limits, yes — it's a natural, helpful upsell moment rather than a dead end.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a developer experience writer crafting clear, actionable API rate-limit error messages that tell the developer exactly what happened and what to do next. You respond only with a numbered list — no preamble.",
      user: `Generate 4 rate limit error message options. Limits: "${values.limits}". Return only a numbered list.`,
    }),
  },
  {
    slug: "feature-deprecation-notice-generator",
    name: "Feature Deprecation Notice Generator",
    tagline: "Sunset a feature without blindsiding users.",
    description:
      "Free AI deprecation notice generator. Describe the change to get a clear, well-timed notice.",
    category: "Website & SaaS",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "change",
        label: "What's being deprecated & timeline",
        placeholder: "e.g. legacy API v1 being retired in 90 days, all users should migrate to v2",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what's being deprecated and the migration timeline.",
      "Generate a notice draft.",
      "Send well in advance and include migration resources/links.",
    ],
    faq: [
      {
        question: "How much notice should I give for a breaking change?",
        answer: "Longer is generally safer — 60-90 days is common for API deprecations, more for deeply integrated features.",
      },
      {
        question: "Should this include migration instructions?",
        answer: "Add a link to your specific migration guide — this draft leaves a clear place for it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a developer relations writer crafting a clear, empathetic feature deprecation notice with a specific timeline and a placeholder for migration resources.",
      user: `Write a deprecation notice for: "${values.change}".`,
    }),
  },
  {
    slug: "security-incident-user-notification-generator",
    name: "Security Incident User Notification Generator",
    tagline: "Inform users clearly without causing panic.",
    description:
      "Free AI security notification generator. Describe the incident to get a calm, clear user-facing notice.",
    category: "Website & SaaS",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "incident",
        label: "What happened",
        placeholder: "e.g. detected and blocked a credential-stuffing attempt, recommending a password reset",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what happened and what action users should take, if any.",
      "Generate a notification draft.",
      "Have security/legal review before sending — actual breach notifications may have legal requirements.",
    ],
    faq: [
      {
        question: "Is this the same as a legal data breach notification?",
        answer: "Not necessarily — if personal data was actually compromised, you likely need a formal breach notification meeting legal requirements. This is a general communications draft.",
      },
      {
        question: "Should I recommend a specific action?",
        answer: "Yes, if applicable (e.g. reset your password) — a clear, specific action is more reassuring than a vague warning.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a security communications writer drafting a calm, clear, factual user notification about a security event, including a specific recommended action if relevant. Not legal advice.",
      user: `Write a security incident notification for: "${values.incident}".`,
    }),
  },
  {
    slug: "changelog-email-digest-generator",
    name: "Changelog Email Digest Generator",
    tagline: "A monthly roundup that keeps users engaged.",
    description:
      "Free AI changelog digest generator. Enter your month's updates to get a friendly email roundup.",
    category: "Website & SaaS",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "updates",
        label: "This period's updates",
        placeholder: "e.g. new dark mode, faster search, fixed 3 reported bugs",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "List your updates for the period.",
      "Generate a friendly digest email.",
      "Send monthly or quarterly to keep users engaged with product progress.",
    ],
    faq: [
      {
        question: "Should every tiny bug fix be included?",
        answer: "Group minor fixes together briefly and lead with the changes users will actually notice and care about.",
      },
      {
        question: "Should this include screenshots or GIFs?",
        answer: "Add your own visuals where relevant — this generates the written copy around them.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a product marketer writing a friendly changelog digest email that highlights the most impactful updates first. Write it as a complete email with greeting and sign-off placeholder.",
      user: `Write a changelog digest email covering: "${values.updates}".`,
    }),
  },
  {
    slug: "topic-cluster-content-brief-generator",
    name: "Topic Cluster Content Brief Generator",
    tagline: "A writer-ready brief for one piece of a content cluster.",
    description:
      "Free AI content brief generator. Enter your target keyword to get a structured writing brief.",
    category: "SEO & Content Strategy",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "keyword",
        label: "Target keyword/topic",
        placeholder: "e.g. how to choose a espresso machine for beginners",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your target keyword or topic.",
      "Generate a structured content brief.",
      "Hand off to a writer or use it to guide your own draft.",
    ],
    faq: [
      {
        question: "Does this include real search volume data?",
        answer: "No — check volume and difficulty in a keyword research tool; this focuses on the content structure and angle.",
      },
      {
        question: "What sections does the brief include?",
        answer: "Target Audience, Search Intent, Suggested Headings, Key Points to Cover — a standard SEO content brief structure.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO content strategist writing a content brief with sections: Target Audience, Search Intent, Suggested Headings, Key Points to Cover. No markdown headers, plain section labels.",
      user: `Build a content brief for the keyword: "${values.keyword}".`,
    }),
  },
  {
    slug: "content-gap-analysis-generator",
    name: "Competitor Content Gap Analysis Generator",
    tagline: "Find what competitors cover that you don't.",
    description:
      "Free AI content gap generator. Describe your content vs. competitors to get a prioritized gap list.",
    category: "SEO & Content Strategy",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "comparison",
        label: "Your content vs. competitors",
        placeholder: "e.g. we cover basics of SEO, competitors also cover technical SEO and local SEO which we don't",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe what you cover and what competitors cover that you don't.",
      "Generate a prioritized gap list.",
      "Use to plan your next few pieces of content.",
    ],
    faq: [
      {
        question: "Does this research competitor content for me?",
        answer: "No — you provide the comparison; this organizes it into a prioritized, actionable list of content opportunities.",
      },
      {
        question: "How does it prioritize the gaps?",
        answer: "It reasons about which gaps seem most relevant to your existing audience based on what you've described.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO content strategist who turns a content comparison into a prioritized list of content gap opportunities with a one-line rationale each. No markdown headers.",
      user: `Analyze this content gap comparison and prioritize opportunities: "${values.comparison}".`,
    }),
  },
  {
    slug: "backlink-outreach-email-generator",
    name: "Backlink Outreach Email Generator",
    tagline: "Get links without sounding like spam.",
    description:
      "Free AI backlink outreach generator. Enter your content to get a genuine-sounding outreach email.",
    category: "SEO & Content Strategy",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "content",
        label: "Your content & why it's relevant",
        placeholder: "e.g. our guide on remote team management, relevant to their article on hybrid work",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your content and why it's relevant to the site you're contacting.",
      "Generate outreach email options.",
      "Personalize by referencing their specific article before sending.",
    ],
    faq: [
      {
        question: "Should I mass-send this to many sites?",
        answer: "No — personalized, targeted outreach to genuinely relevant sites performs far better than mass generic link requests.",
      },
      {
        question: "Should I mention I want a backlink directly?",
        answer: "Being transparent about the ask (while leading with genuine value/relevance) tends to work better than being cagey about it.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO outreach specialist writing genuine, non-spammy backlink outreach emails under 120 words that clearly explain relevance before making the ask. You respond only with a numbered list — no preamble.",
      user: `Generate 4 backlink outreach email options. Content/relevance: "${values.content}". Return only a numbered list.`,
    }),
  },
  {
    slug: "content-audit-summary-generator",
    name: "Content Audit Summary Generator",
    tagline: "Decide what to keep, update, or kill.",
    description:
      "Free AI content audit generator. Describe your content's performance to get a clear action recommendation.",
    category: "SEO & Content Strategy",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "performance",
        label: "Content & performance",
        placeholder: "e.g. 3-year-old blog post, traffic down 60%, outdated statistics and screenshots",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the content piece and its current performance/state.",
      "Generate a recommendation (keep, update, consolidate, or remove).",
      "Use across your content library for a full audit.",
    ],
    faq: [
      {
        question: "Does this analyze real analytics data?",
        answer: "No — describe your own performance data and observations; this reasons through a recommendation based on what you provide.",
      },
      {
        question: "What are the typical audit outcomes?",
        answer: "Keep as-is, update/refresh, consolidate with similar content, or remove/redirect — this reasons toward one of those based on your input.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an SEO content strategist reviewing a piece of content's performance and recommending one clear action (keep, update, consolidate, or remove) with reasoning. No markdown headers.",
      user: `Recommend an action for this content based on: "${values.performance}".`,
    }),
  },
  {
    slug: "keyboard-navigation-checklist-generator",
    name: "Keyboard Navigation Testing Checklist Generator",
    tagline: "Make sure your site works without a mouse.",
    description:
      "Free AI keyboard navigation checklist generator. Describe your interface to get a testing checklist.",
    category: "Accessibility",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "interface",
        label: "Describe your interface",
        placeholder: "e.g. a multi-step checkout form with a modal for address entry",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the interface or flow you want to test.",
      "Generate a keyboard navigation checklist.",
      "Test it yourself using only Tab, Shift+Tab, Enter, and arrow keys — no mouse.",
    ],
    faq: [
      {
        question: "Why test with a keyboard specifically?",
        answer: "Many users with motor or visual disabilities navigate entirely by keyboard — if your interface traps focus or skips elements, it becomes unusable for them.",
      },
      {
        question: "Does this replace screen reader testing?",
        answer: "No — keyboard navigation and screen reader compatibility are related but distinct; test both for full coverage.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an accessibility specialist building a keyboard-navigation testing checklist (focus order, visible focus states, no keyboard traps, modal handling) tailored to the described interface. No markdown headers.",
      user: `Build a keyboard navigation testing checklist for: "${values.interface}".`,
    }),
  },
  {
    slug: "color-contrast-explainer-generator",
    name: "Color Contrast Explainer Generator",
    tagline: "Understand why a color combo fails accessibility checks.",
    description:
      "Free AI color contrast explainer. Describe your colors to get a plain-English explanation of contrast issues.",
    category: "Accessibility",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "colors",
        label: "Describe the color combination",
        placeholder: "e.g. light gray text (#AAAAAA) on a white background for body copy",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the text and background colors you're using.",
      "Generate a plain-English explanation of likely contrast issues.",
      "Verify the exact ratio with a contrast checker tool before finalizing.",
    ],
    faq: [
      {
        question: "Does this calculate the exact contrast ratio?",
        answer: "No — it explains general risk based on typical color relationships; use a dedicated contrast checker tool for the precise WCAG ratio.",
      },
      {
        question: "What's the WCAG AA requirement?",
        answer: "Generally a 4.5:1 ratio for normal text and 3:1 for large text — this explainer references that standard.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an accessibility consultant explaining likely color contrast issues in plain English, referencing WCAG AA guidelines (4.5:1 normal text, 3:1 large text) and suggesting a general direction for improvement.",
      user: `Explain the likely accessibility contrast issue with: "${values.colors}".`,
    }),
  },
  {
    slug: "insurance-claim-denial-appeal-generator",
    name: "Insurance Claim Denial Appeal Generator",
    tagline: "Push back on a denial with a clear, factual case.",
    description:
      "Free AI claim appeal generator. Describe the denial to get a clear, professional appeal letter draft.",
    category: "Insurance",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "denial",
        label: "Denial reason & your case",
        placeholder: "e.g. claim denied as 'not covered', but policy explicitly lists this type of damage as covered",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the denial reason and why you believe it's incorrect.",
      "Generate an appeal letter draft.",
      "Attach supporting documentation and reference your specific policy language.",
    ],
    faq: [
      {
        question: "Does this guarantee my appeal succeeds?",
        answer: "No — approval depends on your insurer's review of the facts and policy terms. This drafts a clear, factual case, not a guaranteed outcome.",
      },
      {
        question: "Should I quote my policy directly?",
        answer: "Yes, if you have specific language supporting your claim — direct quotes strengthen an appeal significantly.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing a calm, factual insurance claim appeal letter that clearly states the denial reason and why it should be reconsidered, with a placeholder for policy language citations. Not legal advice.",
      user: `Write a claim appeal letter for: "${values.denial}".`,
    }),
  },
  {
    slug: "insurance-comparison-summary-generator",
    name: "Insurance Policy Comparison Summary Generator",
    tagline: "See the real differences between two policies.",
    description:
      "Free AI insurance comparison generator. Describe two policies to get a plain-English comparison.",
    category: "Insurance",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "policies",
        label: "Two policies to compare",
        placeholder: "e.g. Policy A: $500 deductible, $50/mo; Policy B: $1,000 deductible, $35/mo",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the two policies and their key terms.",
      "Generate a side-by-side comparison summary.",
      "Confirm exact terms with each insurer before deciding.",
    ],
    faq: [
      {
        question: "Does this recommend which policy to choose?",
        answer: "It highlights the key trade-offs clearly, but the right choice depends on your personal risk tolerance and finances — not financial advice.",
      },
      {
        question: "Should I compare more than price and deductible?",
        answer: "Yes — coverage limits, exclusions, and claims process reputation matter too; include them in your description if you have them.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are an insurance educator comparing two policies in a clear, structured way (Cost, Coverage, Trade-offs), in plain English. Not financial or insurance advice.",
      user: `Compare these two policies: "${values.policies}".`,
    }),
  },
  {
    slug: "ev-charging-listing-description-generator",
    name: "EV Charging Station Listing Description Generator",
    tagline: "Describe your charging location clearly for drivers.",
    description:
      "Free AI EV charging listing generator. Enter your station details to get a clear listing description.",
    category: "Automotive",
    resultCount: 4,
    maxTokens: 300,
    inputFields: [
      {
        name: "station",
        label: "Station details",
        placeholder: "e.g. 2 Level 2 chargers, free parking, near a coffee shop, available 24/7",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your charging station's details and amenities.",
      "Generate description options.",
      "Use on your charging network app listing or property website.",
    ],
    faq: [
      {
        question: "Should I mention nearby amenities?",
        answer: "Yes — drivers often choose a charging stop based on what's nearby to do while waiting.",
      },
      {
        question: "Should I list the connector type?",
        answer: "Yes, always — connector type (J1772, CCS, NACS, etc.) is critical information for drivers to know before arriving.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are writing clear, useful EV charging station listing descriptions that highlight practical details drivers care about. You respond only with a numbered list — no preamble.",
      user: `Generate 4 EV charging station listing description options. Details: "${values.station}". Return only a numbered list.`,
    }),
  },
  {
    slug: "car-warranty-explainer-generator",
    name: "Car Warranty Explainer Generator",
    tagline: "Understand what's actually covered.",
    description:
      "Free AI warranty explainer. Describe your warranty terms to get a plain-English breakdown.",
    category: "Automotive",
    resultCount: 1,
    maxTokens: 600,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "terms",
        label: "Warranty terms",
        placeholder: "e.g. 5-year/60,000-mile powertrain warranty, excludes wear items",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the warranty terms you want explained.",
      "Generate a plain-English breakdown.",
      "Confirm specifics with your dealer or manufacturer before relying on it.",
    ],
    faq: [
      {
        question: "What's typically excluded from a powertrain warranty?",
        answer: "Wear items (brakes, tires, wipers) and damage from accidents or poor maintenance are commonly excluded — specifics vary by manufacturer.",
      },
      {
        question: "Is this the same as an extended warranty sales pitch?",
        answer: "No — this explains your existing warranty terms in plain English; it doesn't sell or recommend any additional coverage.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are explaining car warranty terms in plain English — what's covered, common exclusions, and what to double check with the dealer.",
      user: `Explain this warranty in plain English: "${values.terms}".`,
    }),
  },
  {
    slug: "landscaping-project-description-generator",
    name: "Landscaping Project Description Generator",
    tagline: "Describe the transformation, not just the plants.",
    description:
      "Free AI landscaping description generator. Enter your project details to get a compelling description.",
    category: "Home & DIY",
    resultCount: 4,
    maxTokens: 320,
    inputFields: [
      {
        name: "project",
        label: "Project details",
        placeholder: "e.g. front yard xeriscaping, drought-tolerant plants, new stone pathway",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe the landscaping project.",
      "Generate description options.",
      "Use for a portfolio, quote, or before/after social post.",
    ],
    faq: [
      {
        question: "Can landscapers use this for client proposals?",
        answer: "Yes — this works well for proposal copy, portfolio write-ups, or social media before/after posts.",
      },
      {
        question: "Does this include plant care instructions?",
        answer: "No — it describes the project itself; use a separate care guide for plant-specific maintenance instructions.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a landscaping business writing compelling project descriptions that emphasize the transformation and end result. You respond only with a numbered list — no preamble.",
      user: `Generate 4 landscaping project description options for: "${values.project}". Return only a numbered list.`,
    }),
  },
  {
    slug: "smart-home-setup-guide-generator",
    name: "Smart Home Setup Guide Generator",
    tagline: "A clear starting plan for going smart.",
    description:
      "Free AI smart home guide generator. Describe your home and goals to get a structured setup plan.",
    category: "Home & DIY",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "goals",
        label: "Home & goals",
        placeholder: "e.g. 2-bed apartment, want better security and lighting automation, budget-conscious",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your home and what you want to automate.",
      "Generate a suggested setup plan.",
      "Research specific product compatibility before buying.",
    ],
    faq: [
      {
        question: "Does this recommend specific products/brands?",
        answer: "No — it suggests device categories and a rollout order; research specific products compatible with your ecosystem (Google Home, Alexa, Apple HomeKit).",
      },
      {
        question: "Should I automate everything at once?",
        answer: "Starting with one or two high-value areas (lighting, security) and expanding is generally more manageable than automating everything immediately.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a smart home consultant building a phased setup plan (Phase 1, Phase 2, etc.) matched to stated goals and budget sensitivity, suggesting device categories without brand-specific recommendations. No markdown headers.",
      user: `Build a smart home setup plan for: "${values.goals}".`,
    }),
  },
  {
    slug: "green-packaging-description-generator",
    name: "Green Packaging Description Generator",
    tagline: "Explain your sustainable packaging choices clearly.",
    description:
      "Free AI packaging description generator. Describe your materials to get clear, credible copy.",
    category: "Sustainability & ESG",
    resultCount: 4,
    maxTokens: 300,
    inputFields: [
      {
        name: "materials",
        label: "Packaging materials",
        placeholder: "e.g. 100% recycled cardboard, soy-based ink, no plastic fillers",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your actual packaging materials and practices.",
      "Generate description options.",
      "Only claim what you can verify — check local regulations on environmental marketing claims.",
    ],
    faq: [
      {
        question: "Are there rules about environmental packaging claims?",
        answer: "Yes — many jurisdictions regulate terms like 'recyclable' or 'biodegradable'; verify your specific claims meet local requirements before publishing.",
      },
      {
        question: "Should I mention what's NOT sustainable yet?",
        answer: "Being transparent about ongoing improvements tends to build more trust than implying everything is already perfect.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sustainability copywriter describing packaging materials specifically and credibly, avoiding vague greenwashing terms without substantiation. You respond only with a numbered list — no preamble.",
      user: `Generate 4 packaging description options for: "${values.materials}". Return only a numbered list.`,
    }),
  },
  {
    slug: "supply-chain-sustainability-summary-generator",
    name: "Supply Chain Sustainability Summary Generator",
    tagline: "Explain your sourcing practices credibly.",
    description:
      "Free AI supply chain summary generator. Describe your sourcing to get a clear sustainability summary.",
    category: "Sustainability & ESG",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "sourcing",
        label: "Sourcing practices",
        placeholder: "e.g. audited factories, fair trade certified cotton, local suppliers within 200 miles",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your actual sourcing and supply chain practices.",
      "Generate a summary write-up.",
      "Only include claims you can back up with real audits or certifications.",
    ],
    faq: [
      {
        question: "Should I mention specific certifications?",
        answer: "Yes, if you have them — named certifications (Fair Trade, B Corp, etc.) are far more credible than general claims.",
      },
      {
        question: "Does this verify my suppliers for me?",
        answer: "No — this writes the summary based on what you tell it; verification is a separate, ongoing responsibility.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a sustainability communications writer summarizing supply chain practices credibly and specifically, based only on stated facts and certifications.",
      user: `Write a supply chain sustainability summary based on: "${values.sourcing}".`,
    }),
  },
  {
    slug: "dockerfile-explainer-generator",
    name: "Dockerfile Explainer Generator",
    tagline: "Understand what each line actually does.",
    description:
      "Free AI Dockerfile explainer. Paste a Dockerfile to get a plain-English, line-by-line explanation.",
    category: "DevOps & Cloud",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "dockerfile",
        label: "Paste your Dockerfile",
        placeholder: "e.g. your FROM/RUN/COPY/CMD lines",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Paste your Dockerfile contents.",
      "Generate a line-by-line explanation.",
      "Use it to review, document, or learn from an existing Dockerfile.",
    ],
    faq: [
      {
        question: "Will this optimize my Dockerfile?",
        answer: "No — this explains what it does; use Docker's own best-practice linting tools for optimization suggestions.",
      },
      {
        question: "Does this work for multi-stage builds?",
        answer: "Yes — it explains each stage and how they relate to each other.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a DevOps engineer explaining a Dockerfile line by line in plain English, noting the purpose of each instruction. No markdown headers.",
      user: `Explain this Dockerfile:\n\n${values.dockerfile}`,
    }),
  },
  {
    slug: "sla-uptime-explainer-generator",
    name: "SLA Uptime Explainer Generator",
    tagline: "Understand what an uptime guarantee actually means.",
    description:
      "Free AI SLA explainer. Enter your uptime percentage to get a plain-English breakdown of allowed downtime.",
    category: "DevOps & Cloud",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "uptime",
        label: "Uptime percentage",
        placeholder: "e.g. 99.9%",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter the uptime percentage from your SLA.",
      "Generate a plain-English explanation of what it means in real downtime.",
      "Check your specific SLA for what counts as downtime and any remedy/credit terms.",
    ],
    faq: [
      {
        question: "Does this calculate exact downtime allowances?",
        answer: "It gives a general breakdown (per month/year); confirm your specific SLA's measurement period and definition of downtime.",
      },
      {
        question: "Does higher uptime always mean better service?",
        answer: "Generally yes for reliability, but also check what remedies (credits, refunds) apply if the SLA isn't met.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are explaining SLA uptime percentages in plain English, translating the percentage into approximate allowed downtime per month and year.",
      user: `Explain what this uptime SLA means in practice: ${values.uptime}`,
    }),
  },
  {
    slug: "1031-exchange-explainer-generator",
    name: "1031 Exchange Explainer Generator",
    tagline: "Understand the basics before you talk to a professional.",
    description:
      "Free AI 1031 exchange explainer. Describe your situation to get a plain-English overview of how it works.",
    category: "Real Estate Investment",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "prose",
    inputFields: [
      {
        name: "situation",
        label: "Your situation",
        placeholder: "e.g. selling a rental property, considering reinvesting in a larger multifamily property",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Describe your property situation.",
      "Generate a plain-English overview of how a 1031 exchange might apply.",
      "This is educational only — a qualified intermediary and tax professional are required for an actual exchange.",
    ],
    faq: [
      {
        question: "Is this tax advice?",
        answer: "No — this is general educational content about how 1031 exchanges typically work. Consult a tax professional and qualified intermediary for your actual situation.",
      },
      {
        question: "Are there strict timelines involved?",
        answer: "Yes — 1031 exchanges have strict identification and closing deadlines; this overview mentions them generally, but confirm exact rules with a professional.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate investment educator explaining how a 1031 exchange generally works in plain English, including the key timeline rules, for the given situation. Not tax or legal advice.",
      user: `Explain how a 1031 exchange might apply to: "${values.situation}".`,
    }),
  },
  {
    slug: "brrrr-strategy-explainer-generator",
    name: "BRRRR Strategy Explainer Generator",
    tagline: "Understand the buy-rehab-rent-refinance-repeat method.",
    description:
      "Free AI BRRRR explainer. Enter your deal to get a plain-English walkthrough of the strategy applied to it.",
    category: "Real Estate Investment",
    resultCount: 1,
    maxTokens: 650,
    resultKind: "document",
    documentStyle: "structured",
    inputFields: [
      {
        name: "deal",
        label: "Deal details",
        placeholder: "e.g. $150k fixer-upper, estimated $30k rehab, expected $250k ARV",
        type: "text",
        required: true,
      },
    ],
    howTo: [
      "Enter your property's purchase price, rehab estimate, and expected after-repair value.",
      "Generate a walkthrough of how the BRRRR strategy would apply.",
      "Verify all numbers independently — this is educational, not investment advice.",
    ],
    faq: [
      {
        question: "What does BRRRR stand for?",
        answer: "Buy, Rehab, Rent, Refinance, Repeat — a real estate investment strategy for recycling capital across multiple properties.",
      },
      {
        question: "Is this investment advice?",
        answer: "No — this is general educational content explaining the strategy applied to your numbers, not personalized investment advice.",
      },
    ],
    buildPrompt: (values) => ({
      system:
        "You are a real estate investment educator walking through the BRRRR strategy (Buy, Rehab, Rent, Refinance, Repeat) step by step as applied to the given deal numbers. No markdown headers. Not financial advice.",
      user: `Walk through the BRRRR strategy for this deal: "${values.deal}".`,
    }),
  },
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((tool) => tool.slug === slug);
}
