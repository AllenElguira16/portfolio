const TITLE = "Michael Allen Elguira's Portfolio";
const DESCRIPTION = `Hi, my name is Michael Allen Elguira\nA Fullstack Developer specialized in React, Next.js, Node.js and TypeScript`;
const URL = "https://allen-elguira.vercel.app";
const OG_IMAGE = `${URL}/profile-pic.jpg`;

export const Meta = () => {
  return (
    <>
      {/* Normal */}
      <meta name="title" content={TITLE} />
      <meta name="description" content={DESCRIPTION} />
      {/* OpenGraph */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:url" content={URL} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AllenKunn16" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
};
