/*

// EJEMPLO 1

import { colors } from 'App/style/settings'
import { StyleSheet, css } from 'aphrodite'
import BtnBase from 'App/shared/el.Btn'

const styles = StyleSheet.create({
  common: {
    fontSize: '1.2em',
    textTransform: 'uppercase'
  },
  main: {
    border: `solid 1px ${colors.primary}`
  }
})

const Btn = ({
               theme = 'main',
               children,
               ...rest
             }) =>
  <BtnBase {...rest} className={css(styles.common, styles[theme])}>
    {children}
  </BtnBase>

*/


/*

// EJEMPLO 2

import { StyleSheet, css } from 'aphrodite'
import { colors, spacing } from 'App/style/settings'
import Btn from 'App/shared/atm.Btn'
import Input from 'App/shared/atm.Input'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    align: 'center',
    padding: spacing.default
  },
  label: {
    color: colors.secondary
  },
  space: {
    marginRight: spacing.tiny
  }
})

const SearchUI = ({inputVal, onInputUpdate, onSearch}) =>
  <div className={css(styles.container)}>
    <div className={css(style.space)}>
      <label className={css(style.label)}>Search</label>
      <Input value={inputVal} onChange={onInputUpdate} />
    </div>
    <Btn onClick={onSearch}>Search</Btn>
    <div>
*/
