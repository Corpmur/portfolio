import Section from "./Section";

export default function About() {
  const info = [
    { name: "Name:", value: "Maurine  Surey" },
    { name: "Phone:", value: "(+254) 715 783 189" },
    { name: "Experience:", value: "2+ years" },
    {name: 'LinkedIn', value:'Maurine survey' },
    { name: "Instagram:", value: "@Maurine" },
    { name: "Nationality:", value: "Kenyan" },
    { name: "Email:", value: "corporatemur22@gmail.com" },
    { name: "Freelance:", value: "English, Swahili" },
  ];

  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-3xl text-center font-bold">About Me</h2>

        <p className="mt-4 text-gray-400 text-base xl:text-2xl">
          I am a Fullstack (MERN) developer. I build scalable and modern web applications using React,
          Next.js and Node.js. I also build cross platform mobile apps using React Native
        </p>

        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 mt-6">
          {info.map((item, index) => (
            <li
              key={index}
              className="
                flex flex-col
                sm:flex-row
                sm:items-center
                gap-2 sm:gap-4
                wrap-break-words
              "
            >
              <span className="text-white/60 text-sm xl:text-lg whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-base xl:text-lg break-all">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
