import React, { FC, useState, useEffect } from 'react'
import { pluck, flatten, uniq } from 'ramda'
import useStyles from './style'
import Slider from 'react-slick'
import { Container } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import data from '../../data.json'
import { Tag } from '../../inteface'
import TagCard from './components/Tag'

interface Props {
  className?: any
  onClick?: any
}

const SampleNextArrow: FC<Props> = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos />
    </div>
  )
}
const SamplePrevArrow: FC<Props> = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos />
    </div>
  )
}

const MenuTags = () => {
  const [menuTags, setMenuTags] = useState<Tag[]>([])
  const [selectedTag, setSelectedTag] = useState<string | undefined>()
  useEffect(() => {
    const getTags = pluck('tags')
    const tags = getTags(data.brands)
    setMenuTags(uniq(flatten(tags)))
  }, [data])
  const classes = useStyles()
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    arrows: false,
    cssEase: 'ease',
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  }
  console.log('tags', menuTags)

  return (
    <Container maxWidth="lg">
      <div className={classes.MenuTags}>
        {menuTags.length > 0 && (
          <Slider {...settings}>
            {menuTags.map(tag => (
              <div key={tag.name}>
                <TagCard
                  item={tag}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </Container>
  )
}

export default MenuTags
