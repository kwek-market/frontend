import Image from "next/image";
import Link from "next/link";

const Logo = ({
  className,
  src,
  href,
  width,
  height,
}: {
  className?: string;
  src?: string;
  href?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Link className='' href={href || "/"}>
      <Image
        src={src || "/svg/kweklogo.png"}
        alt='kweklogo'
        width={width || 180}
        height={height || 30}
        className={className}
        placeholder='blur'
        style={{ objectFit: "cover" }}
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89PDhNQAIzQN82oRX+AAAAABJRU5ErkJggg=='
      />
    </Link>
  );
};

export default Logo;
