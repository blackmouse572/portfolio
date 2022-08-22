import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import LinkContact from "../components/Contact/linkContact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

function Contact() {
  return (
    <div className="font-mono">
      <Navbar />
      <div className="lg:px-8 pt-24 lg:pt-36 min-h-screen  md:px-5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-full flex items-end px-1 fade-in">
            <div className="h-full pb-6 px-4 lg:px-0">
              <h3 className="floatinAnimation top-0 font-sans text-4xl lg:text-6xl uppercase  font-black  tracking-tight">
                Contact
                <span className="opacity-10 text-black pl-4">&#47;&#47;</span>
              </h3>
            </div>
          </div>
          <section className="my-8 grid grid-cols-2">
            <LinkContact
              href="https://github.com/blackmouse572"
              className="w-full space-x-4 h-32"
              icon={faFacebook}
              name={"blackmouse572"}
              size={"2x"}
              color={"darkblue"}
              direction={"left"}
            />
            <LinkContact
              href="https://github.com/blackmouse572"
              className="w-full space-x-4 h-32"
              icon={faGithub}
              name={"blackmouse572"}
              size={"2x"}
              color={"black"}
              direction={"right"}
            />
            <LinkContact
              href="https://www.linkedin.com/in/tu%E1%BA%A5n-ng%E1%BB%8Dc-nguy%E1%BB%85n-987782248/"
              className="w-full space-x-4 h-32"
              icon={faLinkedin}
              name={"Nguyễn Tuấn Ngọc"}
              size={"2x"}
              color={"darkblue"}
              direction={"left"}
            />
            <LinkContact
              href="https://github.com/blackmouse572"
              className="w-full space-x-4 h-32"
              icon={faInstagram}
              name={"black_mouse572"}
              size={"2x"}
              color={"black"}
              direction={"right"}
            />
            <LinkContact
              href="https://github.com/blackmouse572"
              className="w-full space-x-4 h-32 col-span-2"
              icon={faEnvelopeOpenText}
              name={"ngocnt.job@gmail.com"}
              size={"2x"}
              color={"#C03540"}
              direction={"right"}
            />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
