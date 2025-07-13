import Link from "next/link";
import { Heading } from "@/components/common/Heading";
import { ChangelogList } from "./_components/changelog-list";
import { PageView } from "../../components/page-view";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 30;

// Static demo data for changelog
const changelog = {
  _analyticsKey: "demo-analytics-key",
  title: "Changelog",
  subtitle: "Latest updates and improvements.",
  posts: {
    items: [
      {
        _id: "1",
        _title: "Initial Release",
        excerpt: "We launched our product!",
        publishedAt: "2024-01-01",
        _slug: "initial-release",
        image: {
          url: "/placeholder.jpg",
          alt: "Initial Release",
          width: 647,
          height: 480,
        },
        authors: [
          {
            _id: "a1",
            _title: "Jane Doe",
            image: {
              url: "/placeholder-user.jpg",
              alt: "Jane Doe",
              width: 24,
              height: 24,
            },
          },
        ],
        excerpt: "We launched our product!",
      },
      // Add more posts as needed
    ],
  },
  socialLinksTitle: "Follow us:",
  socialLinks: [
    {
      icon: { url: "/placeholder-logo.png" },
      url: "https://twitter.com/example",
      _title: "Twitter",
      _id: "s1",
    },
  ],
};

const generalEvents = { ingestKey: "demo-ingest-key" };

export const generateMetadata = async () => {
  return {
    title: changelog.title,
    description: changelog.subtitle,
  };
};

export default async function ChangelogPage() {
  const socialLinks = changelog.socialLinks;
  if (changelog.posts.items.length === 0) {
    return notFound();
  }

  return (
    <>
      <PageView ingestKey={generalEvents.ingestKey} />
      <div className="flex items-center justify-between border-b border-[--border] dark:border-[--dark-border]">
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-start justify-between gap-4 border-r border-[--border] px-8 py-24 dark:border-[--dark-border] md:flex-row md:items-center">
          <Heading align="left" className="flex-1 !flex-col-reverse" subtitle={changelog.subtitle}>
            <h1>{changelog.title}</h1>
          </Heading>
          <div className="flex items-center gap-2 md:flex-col">
            <p className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
              {changelog.socialLinksTitle}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link._id}
                  className="aspect-square hover:brightness-90"
                  href={link.url}
                  target="_blank"
                >
                  <img
                    alt={link._title}
                    height={18}
                    src={link.icon?.url ?? ""}
                    width={18}
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="!mx-auto !max-w-screen-md px-8 pt-16">
        <ChangelogList changelogPosts={changelog.posts.items} />
      </div>
    </>
  );
}
