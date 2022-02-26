import React, { FC } from 'react'
import useStyles from './style'
import { Tag } from '../../../../inteface'

interface Props {
  item: Tag
  selectedTag: string | undefined
  setSelectedTag: (tag: string) => void
}

const MenuTag: FC<Props> = ({ item, selectedTag, setSelectedTag }) => {
  const classes = useStyles()
  return (
    <div
      className={selectedTag === item.name ? classes.MenuTagContainer : ''}
      onClick={() => setSelectedTag(item.name)}
    >
      <div className={classes.MenuVarietiesItemImage} key={item.name}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    </div>
  )
}

export default MenuTag
