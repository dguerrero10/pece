import Image from 'next/image'
import classes from '../../../../../styles/components/dashboard/company/company-summary.module.css'
import CompanyDetails from './CompanyDetails'

export default function CompanySummary() {
  return <div className={classes['company-summary']}>
    <div className={classes["company-summary__col-1"]}>
      <div className={classes['company-summary__img-wrapper']}>
        <Image src="/assets/images/company-picture.jpg"
          width={700}
          height={400}
          objectFit="cover"
        />
      </div>

      <div className={classes['company-summary__text']}>
        <h3>Summary</h3>
        <p className='para'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ex corporis obcaecati, quae fugit quibusdam amet officiis excepturi
        voluptate cumque mollitia dolorum. Blanditiis dolore vel accusantium,
        saepe necessitatibus incidunt unde dolor?
        voluptate cumque mollitia dolorum. Blanditiis dolore vel accusantium,
        saepe necessitatibus incidunt unde dolor?
        </p>
      </div>
    </div>
    <div className={classes['company-summary__col-2']}>
      <CompanyDetails />
    </div>
  </div>
}
