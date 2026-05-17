import { useState } from 'react'
import PropTypes from 'prop-types'

const AccordionItem = ({ item, index, openIndex, toggleItem }) => {
    const isOpen = openIndex === index
    return (
        <article
            className={`rd-accordion__item ${isOpen ? "rd-accordion__item--open" : ""} `}
            key={item.title}
        >
            <button className='rd-accordion__trigger'
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}>
                <span>{item.title}</span>
                <span className="rd-accordion__icon">{isOpen ? "−" : "+"}</span>
            </button>
            <div className="rd-accordion__panel">
                <p>{item.content}</p>
            </div>
        </article>
    )
}




export default function Accordion({ title, subtitle, items }) {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='rd-accordion'>
            <p className="rd-accordion__eyebrow">{title}</p>
            <h2 className="rd-accordion__heading">{subtitle}</h2>
            <div className="rd-accordion__list">
                {items.map((item, index) => (
                    <AccordionItem item={item} index={index} openIndex={openIndex} key={item.title} toggleItem={toggleItem} />
                ))}
            </div>
        </section>
    )
}

Accordion.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string
    }))
}