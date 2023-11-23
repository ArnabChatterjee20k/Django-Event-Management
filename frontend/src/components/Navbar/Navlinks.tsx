import { Link } from 'react-router-dom'

export default function Navlinks() {
  return (
    <>
        <NavLink link='/' name='Search'/>
        <NavLink link='/user/favourite' name='Favourites'/>
    </>
  )
}

interface props{
    link:string,
    name:string
}

const NavLink =({link,name}:props)=>{
    return <Link to={link} className='text-white px-4 py-2 border border-white rounded-lg'>{name}</Link>
}