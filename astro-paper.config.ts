import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://shlomolibo.github.io/",
    title: "Shlomo Libo Feigin",
    description:
      "PhD student at the Max Planck ETH Center for Learning Systems (CLS), working on algorithmic reasoning and out-of-distribution generalization.",
    author: "Shlomo Libo Feigin",
    profile: "https://scholar.google.com/citations?user=DqmsRiIAAAAJ",
    lang: "en",
    timezone: "Europe/Zurich",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: false,
  },
  socials: [
    {
      name: "scholar",
      url: "https://scholar.google.com/citations?user=DqmsRiIAAAAJ",
      linkTitle: "Shlomo Libo Feigin on Google Scholar",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/shlomo-libo/",
      linkTitle: "Shlomo Libo Feigin on LinkedIn",
    },
    {
      name: "github",
      url: "https://github.com/shlomolibo",
      linkTitle: "Shlomo Libo Feigin on GitHub",
    },
    {
      name: "mail",
      url: "mailto:slibofeigin@ethz.ch",
      linkTitle: "Email Shlomo Libo Feigin",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
