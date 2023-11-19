interface Props{
    text:string
}
export default function EventTableText({text}:Props) {
  return (
    <p className='whitespace-normal text-center font-medium mx-auto'>{text}</p>
  )
}
