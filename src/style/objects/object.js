/*

// EJEMPLO DE OBJECT

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'App/style/settings'
import Media from 'App/shared/obj.Media'

const PokemonListing = ({name, num, loc, imgSrc}) =>
<div className={css(styles.root)}>
<Media img={imgSrc}>
  <h2>{name}</h2> <h4>#{num}</h4>
  <Media
align='center'
img='/assets/location.svg'
  >{loc}</Media>
  </Media>
  </div>

// styles can be placed below where they are used if you wish
const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.secondaryBg,
    color: white
  }
})
*/
