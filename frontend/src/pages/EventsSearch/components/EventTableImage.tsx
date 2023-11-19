interface Props {
  src: string;
  alt: string;
}
export default function EventTableImage({ src, alt }: Props) {
  return <img src={src} alt={alt} className="h-10 w-10 mx-auto"/>;
}
