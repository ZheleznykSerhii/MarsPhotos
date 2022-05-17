import style from './header.module.css'
import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { TextField } from '@mui/material'

const Header = ({
  handleChange,
  сuriosityManifest,
  handleCamera,
  handleSol,
  solValue,
  roverValue,
  currentData,
  unique,
}) => {
  const styles = {
    floatingLabelFocusStyle: {
      color: 'black',
    },
  }

  return (
    <div className={!solValue ? style.header : style.header_card}>
      <div className={style.inputGroup}>
        <span>Rover: </span>
        <Select
          name="rover"
          onChange={handleChange}
          className={style.input}
          value={roverValue}
        >
          <MenuItem value="curiosity">Curiosity</MenuItem>
          <MenuItem value="spirit">Spirit</MenuItem>
          <MenuItem value="opportunity">Opportunity</MenuItem>
        </Select>
      </div>
      <div className={style.inputGroup}>
        <span className={style.solHeader}>Sol: </span>
        <div>
          {' '}
          <TextField
            className={style.input}
            required
            name="sol"
            type="number"
            onChange={handleSol}
            value={solValue}
            variant="filled"
            label={`The last available is ${сuriosityManifest.max_sol}`}
            InputLabelProps={{
              style: { color: '#000000' },
            }}
            InputProps={{
              style: { backgroundColor: '#fff' },
            }}
          ></TextField>
        </div>
      </div>

      <div className={style.inputGroup}>
        <span className={style.CameraHeader}>Camera: </span>
        <Select
          name="camera"
          onChange={handleCamera}
          className={style.input}
          value={currentData}
          disabled={!solValue}
        >
          <MenuItem value={'All'}>All</MenuItem>
          {unique.map((data) => (
            <MenuItem value={data} key={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  )
}

export default Header
