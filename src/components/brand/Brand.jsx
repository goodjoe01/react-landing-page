import React from 'react'
import './brand.css'
import { icons } from './import'
/* import image from '../../assets/atlassian.png'
 */
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={icons.google} alt='google'/>
      </div>
      <div>
        <img src={icons.slack} alt='slack'/>
      </div>
      <div>
        <img src={icons.atlassian} alt='atlassian'/>
      </div>
      <div>
        <img src={icons.dropbox} alt='dropbox'/>
      </div>
      <div>
        <img src={icons.shopify} alt='shopify'/>
      </div>
    </div>
  )
}

export default Brand
