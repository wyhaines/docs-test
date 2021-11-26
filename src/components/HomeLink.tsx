import Link from '@docusaurus/Link'
import React from 'react'

import styles from './HomeLink.module.css'

interface Props {
  label: string
  to: string
}

export default ({ label, to }: Props) => (
  <Link to={to} className={styles.link}>
    <h2 className={styles.button}>{label}</h2>
  </Link>
)
