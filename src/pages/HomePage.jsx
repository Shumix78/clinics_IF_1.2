import { clinics } from '../data/clinics.js';
import Section from '../components/ui/Section.jsx';
import ClinicSummary from '../components/clinics/ClinicSummary.jsx';
import ClinicList from '../components/clinics/ClinicList.jsx';

export default function HomePage() {
    return (
        <>
            <Section id="about" title="Про сервіс">
                <p>Єдиний електронний довідник поліклінік міста Івано-Франківськ</p>
                <p>Дізнавайтеся адреси відділень, контакти реєстратур та актуальні години роботи чергових кабінетів.</p>
            </Section>

            <Section id="catalog" title="Поліклініки міста">
                <ClinicSummary total={clinics.length} />
                <ClinicList items={clinics} />
            </Section>
        </>
    );
}