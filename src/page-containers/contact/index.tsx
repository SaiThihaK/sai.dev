"use client";
import Envelope from "@/page-containers/contact/_component/envelope";
import Link from "next/link";

const contactLink: { name: string; link: string }[] = [
  { name: "Github", link: "https://github.com/SaiThihaK" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sai-thiha-kyaw-24b2a8225/",
  },
  { name: "Email", link: "saithihak2@gmail.com" },
];
const ContactPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-fit  border-gray-400 dark:border-white border-[1px] rounded-md shadow-xl  px-2 py-2 md:p-10">
        <div className="px-2 py-4 md:p-6 md:py-6 flex justify-between border-b-[0.5px] border-b-gray-600 flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-[200px]">
            <h2 className="text-3xl font-extrabold font-mono">
              Let&apos; Create Something Greate Together
            </h2>
          </div>
          <div>
            <Envelope />
          </div>
        </div>
        <div className="flex justify-between items-center w-[300px] gap-x-4 pt-4 mx-auto">
          {contactLink.map((contact) => (
            <Link
              target="blank"
              href={`${
                contact.name === "Email"
                  ? `mailto:${contact.link}`
                  : contact.link
              }`}
              key={contact.link}
            >
              {contact.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
