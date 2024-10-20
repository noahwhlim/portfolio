export const metadata = {
  title: "Resume",
  description: "Check out my resume.",
};

export default function Page() {
  const resumeLink =
    "https://noahlim-resume.s3.us-east-2.amazonaws.com/Noah_Lim_Resume.pdf";
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Resume
      </h1>
      <iframe
        src={resumeLink}
        width="100%"
        height="800px"
        title="Resume Preview"
      />
    </section>
  );
}
