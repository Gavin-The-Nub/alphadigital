import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Heading } from "../../../common/heading";
import { CodeSnippet } from "../../../components/code-snippet";
import { richTextBaseComponents, richTextClasses } from "../../../components/rich-text";
import { ButtonLink } from "../../../common/button";
import { AvatarsGroup } from "../../../common/avatars-group";
import { Author } from "../../../common/avatar";
import { formatDate } from "../../../lib/_utils/dates";
import { PageView } from "../../../components/page-view";

export const dynamic = "force-static";
export const revalidate = 30;

// Static demo data for changelog post
const demoPosts = [
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
      blurDataURL: undefined,
      aspectRatio: 647 / 480,
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
    body: {
      json: {
        content: "<p>This is the body of the changelog post. You can add <strong>HTML</strong> or markdown here.</p>",
        blocks: [],
      },
    },
  },
  // Add more posts as needed
];

const changelog = {
  goBackText: "Back to changelog",
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

export const generateStaticParams = async () => {
  return demoPosts.map((post) => ({ slug: post._slug }));
};

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata | undefined> => {
  const post = demoPosts.find((p) => p._slug === params.slug);
  if (!post) return undefined;
  const images = [{ url: post.image.url }];
  return {
    title: post._title,
    description: post.excerpt,
    openGraph: { images },
    twitter: { images, card: "summary_large_image", site: "DemoSite" },
  };
};

export default async function ChangelogPage({ params }: { params: { slug: string } }) {
  const post = demoPosts.find((p) => p._slug === params.slug);
  if (!post) return notFound();
  const socialLinks = changelog.socialLinks;
  // For demo, just use the first post as next
  const nextPost = demoPosts[0]._slug === post._slug ? null : demoPosts[0];

  return (
    <>
      <PageView ingestKey={generalEvents.ingestKey} />
      <div className="flex items-center justify-between border-b border-[--border] dark:border-[--dark-border]">
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-start justify-between gap-4 border-r border-[--border] px-8 py-24 dark:border-[--dark-border] md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <Link
              className="flex w-max items-center gap-1 text-sm text-[--text-tertiary] hover:underline dark:text-[--dark-text-tertiary] md:text-sm"
              href={`/changelog#${post._slug}`}
            >
              <ArrowLeftIcon /> {changelog.goBackText}
            </Link>
            <Heading align="left">
              <h1>{post._title}</h1>
            </Heading>
            <p className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary] md:text-base">
              {formatDate(post.publishedAt)}
            </p>
          </div>
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
      <div className="mx-auto flex max-w-screen-md flex-col gap-8 px-8 pb-20 pt-16">
        <img
          alt={post.image.alt ?? post._title}
          className="h-auto w-full rounded-xl"
          height={post.image.height}
          src={post.image.url}
          style={{ aspectRatio: post.image.aspectRatio }}
          width={post.image.width}
        />
        <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary] md:text-base">
          {post.excerpt}
        </p>
        <div className={richTextClasses}>
          {/* For demo, dangerouslySetInnerHTML for static HTML content */}
          <div dangerouslySetInnerHTML={{ __html: post.body.json.content }} />
        </div>
        <div className="flex items-center justify-between">
          {post.authors.length > 1 ? (
            <AvatarsGroup animate>
              {post.authors.map((author) => (
                <Author {...author} key={author._id} />
              ))}
            </AvatarsGroup>
          ) : post.authors[0] ? (
            <div className="flex items-center gap-2">
              <Author {...post.authors[0]} />
              <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary] md:text-base">
                {post.authors[0]._title}
              </p>
            </div>
          ) : null}

          {nextPost ? (
            <ButtonLink
              className="text-sm text-[--text-tertiary] hover:underline dark:text-[--dark-text-tertiary]"
              href={`/changelog/${nextPost._slug}`}
              icon={<ArrowRightIcon />}
              iconSide="right"
              intent="secondary"
            >
              {nextPost._title.slice(0, 35)}
              {nextPost._title.length > 35 ? "..." : ""}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </>
  );
}
