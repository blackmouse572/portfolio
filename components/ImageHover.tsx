import Image from "next/image";
import Link from "next/link";
type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  describe: string;
  containerWidth?: string;
  containerHeight?: string;
};
function ImageHover(props: Props) {
  return (
    <Link href={props.href} passHref>
      <div
        className={
          "relative group mx-auto " +
          (props.containerWidth ? props.containerWidth : "w-4/5") +
          " " +
          (props.containerHeight ? props.containerHeight : "h-full")
        }>
        <div className="sticky top-20">
          <Image
            alt={props.alt}
            layout="responsive"
            width={props.width}
            height={props.height}
            className="zoominAnimationOnHover object-contain"
            src={props.src}
            priority={true}
          />
        </div>
        <h3 className="text-overlay opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 bg-black/40 w-full">
          <span className="opacity-50 font-bold mx-5 text-xl text-white/60">&#47;&#47;</span>
          {props.describe}
        </h3>
      </div>
    </Link>
  );
}

export default ImageHover;
