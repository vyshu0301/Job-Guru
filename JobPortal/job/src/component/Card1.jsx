import React from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi"

const Card1 = ({ data }) => {
    const { companyName, companyLogo, jobTitle, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description } = data

    return (
        <section className='card'>
            <Link to={"/"} className="flex gap-4 flex-col sm:flex-row sm:flex-start">
                <img src={companyLogo} alt={`${companyName} logo`} style={{ width: '150px', height: '150px' }} />
                <div >
                    <h1 className="text-primary mb-1">{companyName}</h1>
                    <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
                    <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
                        <span className="flex items-center gap-2"><FiMapPin />{jobLocation}</span>
                        <span className="flex items-center gap-2"><FiClock />{employmentType}</span>
                        <span className="flex items-center gap-2"><FiDollarSign />{minPrice}-{maxPrice}</span>
                        <span className="flex items-center gap-2"><FiCalendar />{postingDate}</span>
                    </div>
                    <p className="text-base text-primary/70">{description}</p>
                </div>
            </Link>
        </section>
    )
}

export default Card1
