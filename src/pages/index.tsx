import Layout from '@theme/Layout'
import React from 'react'

import HomeLink from '../components/HomeLink'

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '100px 0' }}
      >
        <HomeLink label="Introduction" to="/introduction" />
        <HomeLink label="Learn" to="/learn/getting-started" />
        <HomeLink label="Develop" to="/develop/getting-started" />
      </div>
    </Layout>
  )
}

export default Hello
