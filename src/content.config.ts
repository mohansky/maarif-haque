import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      published: z.boolean(),
      image: image().optional(),
      permalink: z.string().optional(),
    }),
});

const config = defineCollection({
  loader: file("src/content/config/index.yml"),
  schema: ({ image }) =>
    z.object({
        title: z.string(),
        description: z.string(),
        keywords: z.array(z.string()),
        author: z.string(),
        website: z.string(),
        email: z.string(),
        url: z.string(),
        baseUrl: z.string(),
        logo: z.string(),
        favicon: z.string(),
        ogImage: z.string(),
        twitterCard: z.string(),
        twitterSite: z.string(),
        copyright: z.string(),
        copyrightStartYear: z.number(),
        navigationMain: z.array(
          z.object({
            label: z.string(),
            href: z.string(),
            icon: z.string(),
            description: z.string(),
          })
        ),
        navigationFooter: z.array(
          z.object({
            title: z.string(),
            links: z.array(
              z.object({
                label: z.string(),
                href: z.string(),
              })
            ),
          })
        ),
        socialTwitterUrl: z.string(),
        socialTwitterUsername: z.string(),
        socialGithubUrl: z.string(),
        socialGithubUsername: z.string(),
        socialLinkedinUrl: z.string(),
        socialLinkedinUsername: z.string(),
        socialYoutubeUrl: z.string(),
        socialYoutubeUsername: z.string(),
        socialDiscordUrl: z.string(),
        socialDiscordServerId: z.string(),
        socialEmailAddress: z.string(),
        socialEmailSubject: z.string(),
        ctaPrimaryLabel: z.string(),
        ctaPrimaryHref: z.string(),
        ctaPrimaryVariant: z.string(),
        ctaSecondaryLabel: z.string(),
        ctaSecondaryHref: z.string(),
        ctaSecondaryVariant: z.string(),
        ctaNewsletterLabel: z.string(),
        ctaNewsletterHref: z.string(),
        ctaNewsletterVariant: z.string(),
        featureDarkMode: z.boolean(),
        featureSearch: z.boolean(),
        featureComments: z.boolean(),
        featureAnalytics: z.boolean(),
        featureNewsletter: z.boolean(),
        featureRss: z.boolean(),
        featureSitemap: z.boolean(),
        analyticsGoogleAnalytics: z.string(),
        analyticsGoogleTagManager: z.string(),
        analyticsPlausible: z.string(),
        analyticsFathom: z.string(),
        newsletterProvider: z.string(),
        newsletterApiKey: z.string(),
        newsletterFormId: z.string(),
        newsletterDescription: z.string(),
        blogPostsPerPage: z.number(),
        blogShowReadingTime: z.boolean(),
        blogShowTableOfContents: z.boolean(),
        blogShowRelatedPosts: z.boolean(),
        blogEnableComments: z.boolean(),
        commentsProvider: z.string(),
        commentsRepo: z.string(),
        commentsRepoId: z.string(),
        commentsCategory: z.string(),
        commentsCategoryId: z.string(),
        performancePreloadImages: z.boolean(),
        performanceLazyLoadImages: z.boolean(),
        performanceMinifyCSS: z.boolean(),
        performanceMinifyJS: z.boolean(),
        pwaEnabled: z.boolean(),
        pwaName: z.string(),
        pwaShortName: z.string(),
        pwaDescription: z.string(),
        pwaThemeColor: z.string(),
        pwaBackgroundColor: z.string(),
        contact: z.object({
          email: z.array(z.string()),
          phone: z.array(z.string()),
          address: z.array(z.string()),
          businessHours: z.array(
            z.object({
              days: z.string(),
              time: z.string(),
            })
          ),
        }),
    }),
});

export const collections = { projects, config };
