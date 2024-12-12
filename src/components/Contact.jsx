import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants/Index.jsx"

const Contact = () => {
  return (
    <section id="contact" className="p-8">
        <div className="mx-auto max-w-6xl">
            <p className="my-10 text-center text-4xl lg:text-8xl">
                Intrested In Working Together?
                </p>
                <p className="p-4 text-center text-xl">{CONTACT.text}</p>
                <p className="p-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl"><a href="mailto:heyparth2004@gmail.com">
                {CONTACT.email}
                </a>
                   
            </p>
               
        </div>
        <div className="mt-8 flex justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) =>
                (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                )
            )}
        </div>
        <p className="my-8 text-center text-gray-400">
            &copy; Parth Gupta. All rights reserved.
        </p>
    </section>
  )
}

export default Contact