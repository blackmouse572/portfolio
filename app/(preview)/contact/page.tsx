'use client';
import LinkContact from '@components/Contact/linkContact';

function Contact() {
  return (
    <div className="font-mono">
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
          <section className="my-8 md:grid md:grid-cols-2 grid-cols-1 ">
            <LinkContact
              href="https://github.com/blackmouse572"
              className="w-full space-x-4 h-32"
              icon={'Facebook'}
              name={'blackmouse572'}
              direction={'left'}
            />
            <LinkContact
              href="https://github.com/blackmouse572"
              className="w-full space-x-4 h-32"
              icon="Github"
              direction={'right'}
              name={'blackmouse572'}
            />
            <LinkContact
              href="https://www.linkedin.com/in/tu%E1%BA%A5n-ng%E1%BB%8Dc-nguy%E1%BB%85n-987782248/"
              className="w-full space-x-4 h-32"
              icon={'LinkedIn'}
              name={'Nguyễn Tuấn Ngọc'}
              direction={'left'}
            />
            <LinkContact
              href="mailto:ngocnt.job@gmail.com"
              className="w-full space-x-4 h-32 col-span-2"
              icon={'Mail'}
              name={'ngocnt.job@gmail.com'}
              direction={'right'}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
