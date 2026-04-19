import { Link } from 'react-router-dom'

export default function Tag({ label, cls, linkTo }) {
  if (linkTo) {
    return <Link to={linkTo} className={`tag ${cls}`}>{label}</Link>
  }
  return <span className={`tag ${cls}`}>{label}</span>
}
