function ChevronIcon() {
  return (
    <svg
      width="13"
      height="13"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      stroke="currentColor" 
    stroke-width="25"
    >
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  );
}

const skills = ["Java", "Python", "ReactJS", "Javascript", "SQL", "R"];

export default function Skills() {
  return (
    <section>
      <ul className="font-sm flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-900 dark:text-neutral-100">
        {skills.map((skill) => (
          <li className="flex items-center transition-all ">
            <div className="text-[#800080] dark:text-[#cc99cc]">
              <ChevronIcon />
            </div>
            <p className="ml-1 h-6">{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
