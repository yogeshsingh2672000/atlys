type AvatarProps = {
  src: string
  alt: string
}

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-10 rounded-xl object-cover ring-2 ring-white shadow transition-transform duration-200 hover:scale-[1.02]"
    />
  )
}


