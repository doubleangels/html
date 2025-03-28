import { data } from './data.tsx';
import ContactInfo from './ContactInfo.tsx';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="row section-intro">
        <h1>{data.contactData.contactTitle}</h1>
        <p className="lead">{data.contactData.contactLead}</p>
      </div>
      <ContactInfo />
    </section>
  );
}
