'use client'
import { useState, useCallback } from 'react'
import {
  Box,
  Grid,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material'

export default function Panel() {
  const [ids, setIds] = useState([1])

  const handleClick = (e: any) => {
    if (e?.target?.checked) {
      if (!~ids.indexOf(Number(e?.target?.value))) {
        setIds((prevIds) => {
          return [...prevIds, Number(e?.target?.value)]
        })
      }
    } else {
      setIds((prevIds) => {
        return prevIds.filter((x) => Number(x) !== Number(e?.target?.value))
      })
    }
  }
  const Boxes = useCallback(() => {
    return ids?.map((x: number) => {
      let col = 1
      if (ids.length <= 4) {
        col = 2
      }
      if (ids.length > 4 && ids.length <= 9) {
        col = 3
      }
      if (ids.length > 9) {
        col = 4
      }

      return (
        <Box
          key={x}
          sx={{
            flexBasis: `${100/col}%`,
            flexGrow: `${100/ids.length}%`,
            backgroundColor: 'gray',
            width: '100%',
            height: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {x}
        </Box>
      )
    })
  }, [ids])
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <Boxes />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <List
            sx={{
              maxHeight: '95vh',
              overflow: 'auto',
              direction: 'ltr',
            }}
          >
            {Array.from(Array(16)).map((_, x) => (
              <ListItem key={x}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={x + 1}
                      defaultChecked={Boolean(~ids.indexOf(x + 1))}
                      onClick={handleClick}
                    />
                  }
                  label={`Label_${x + 1}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}
