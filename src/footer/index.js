import { Pagination } from '@mui/material'
import style from './pagination.module.css'

const PaginationComponent = ({ pagination, page, setPage, cards }) => {
  return (
    <div className={style.footer}>
      <Pagination
        count={Math.ceil(pagination.length / 25)}
        page={page}
        onChange={(_, num) => setPage(num)}
      />
    </div>
  )
}

export default PaginationComponent
