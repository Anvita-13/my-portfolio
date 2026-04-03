// Contact.jsx
import { useInView } from '../../hooks/useInView';
import './Contact.css';

export default function Contact({ personal }) {
  const ref = useInView();

  const contactItems = [
    {
      icon: '📍',
      label: 'Location',
      value: personal.location,
      href: null,
    },
    {
      icon: '📧',
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: '📱',
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact</h2>

        <div ref={ref} className="contact__wrapper fade-in">
          <p className="contact__intro">
            I'm always open to connecting — whether it's about opportunities,
            collaborations, or just a conversation about tech. Feel free to reach out!
          </p>

          <div className="contact__cards">
            {contactItems.map((item, i) => {
              /* Use an anchor tag only when there's an href */
              const Tag = item.href ? 'a' : 'div';
              const linkProps = item.href
                ? { href: item.href }
                : {};

              return (
                <Tag key={i} className="contact__card" {...linkProps}>
                  <div className="contact__card-icon">{item.icon}</div>
                  <div>
                    <p className="contact__card-label">{item.label}</p>
                    <p className="contact__card-value">{item.value}</p>
                  </div>
                  {item.href && (
                    <span className="contact__card-arrow">→</span>
                  )}
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
