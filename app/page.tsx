import BookingForm from "components/booking-form";
import { Bot, Brain, Code, Target, Zap, Palette } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "IllustraAI",
    description: "Create vector illustrations in seconds",
    link: "https://illustraai.com",
    year: "2024",
    image: "images/illustraai.png",
    status: "active",
  },
  {
    name: "AffiliList",
    description: "The #1 directory of affiliate programs",
    link: "https://affililist.com",
    year: "2024",
    status: "active",
  },
  {
    name: "IdeaWIP",
    description: "Find business ideas that solve real problems",
    link: "https://ideawip.com",
    year: "2024",
    status: "paused",
  },
  {
    name: "CreatorMind",
    description: "Chatbots for blogs and newsletters",
    link: "https://creatormind.co",
    year: "2023",
    status: "paused",
  },
  {
    name: "Bliss & Wisdom Alumni",
    description: "A global map of my high school alumni",
    link: "https://blisswisdomalumni.com",
    year: "2023",
    status: "active",
  },
  {
    name: "Feedbase",
    description: "Customer feedback widget for your website",
    link: "https://feedbase.co",
    year: "2023",
    status: "paused",
  },
  {
    name: "Nomad Taiwan",
    description: "A Taiwanese digital nomad platform",
    link: "https://nomadtaiwan.com",
    year: "2023",
    status: "paused",
  },
  {
    name: "ImgInsight",
    description: "A photo captioning tool powered by AI",
    year: "2023",
    status: "paused",
  },
]

const socialLinks = [
  {
    name: "X",
    link: "https://twitter.com/TheEvanYang",
    description: "keep up with my journey",
    icon: "x",
  },
  {
    name: "Threads",
    link: "https://www.threads.net/@evanyang_yfy",
    description: "i like it here!",
    icon: "threads",
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/evanfy",
    description: "trying to be there...",
    icon: "linkedin",
  },
];

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-32 sm:w-44 flex-shrink-0">
          <Image
            src="/portrait.jpg"
            alt="Evan Yang"
            width={400}
            height={400}
            className="rounded-2xl sm:rounded-3xl"
            priority
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl sm:text-2xl font-bold">
            Hey I'm Evan
          </h1>
          <p className="text-sm sm:text-base">
            I quit college and am now bootstrapping startups. You can find me building projects and sharing my startup journey
            on <a href="https://twitter.com/TheEvanYang/" className="underline">X</a>.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="p-2 rounded-xl sm:rounded-2xl border border-border hover:bg-muted transition-all"
                title={social.description}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={`/svgs/${social.icon}.svg`} alt={social.icon} width={15} height={15} className="dark:invert" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Projects
          </h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span>Paused</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          {projects?.map((item, i) => (
            <a href={item.link} key={i} target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg sm:text-xl font-semibold flex items-center">
                    <div className="flex items-center gap-2">
                      {item.name}
                      <div
                        className={`w-2 h-2 rounded-full ${item.status === "active" ? "bg-green-500" : "bg-yellow-500"
                          }`}
                      ></div>
                    </div>
                  </h2>
                  <p className="text-sm">
                    {item.description}
                  </p>
                </div>

                {'year' in item && (
                  <div className="text-sm sm:text-base mt-2 sm:mt-0">{item.year}</div>
                )}
              </div>

              {item.image && (
                <div className="w-full mt-4">
                  <Image
                    src={`/${item.image}`}
                    alt={`${item.name} preview`}
                    width={800}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold">
              Need help building your idea?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              From idea to launch in weeks, not months
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
              <Bot className="size-6" />
              <div>
                <p className="font-medium">AI Integration</p>
                <p className="text-sm text-muted-foreground">LLMs, Vector DB, APIs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
              <Palette className="size-6" />
              <div>
                <p className="font-medium">UI/UX Design</p>
                <p className="text-sm text-muted-foreground">Modern & intuitive</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
              <Code className="size-6" />
              <div>
                <p className="font-medium">Full Development</p>
                <p className="text-sm text-muted-foreground">End-to-end build</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
              <Zap className="size-6" />
              <div>
                <p className="font-medium">Quick Launch</p>
                <p className="text-sm text-muted-foreground">MVP in 4-6 weeks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-start">
          <BookingForm />
        </div>
      </div>
    </div>
  )
}
