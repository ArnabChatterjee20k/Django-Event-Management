import getDateTime from "../utils/getDateTime"

interface Props{
    date:string
}

export default function EventTableDate({date}:Props) {
    const {formattedDate,formattedTime} = getDateTime(date)
  return (
    <div className="flex flex-col items-center mx-auto">
        <p className='whitespace-normal text-center font-medium'>{formattedDate}</p>
        <p className='whitespace-normal text-center font-medium'>{formattedTime}</p>

    </div>
  )
}
