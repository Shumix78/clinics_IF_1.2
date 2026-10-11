import Section from '../components/ui/Section.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import ClinicStatusBadge from '../components/clinics/ClinicStatusBadge.jsx';
import AppointmentFormPreview from '../components/appointments/AppointmentFormPreview.jsx';

export default function AppointmentPage({ item }) {
    return (
        <Section id="appointment" title="Попередній запис до лікаря">
            {item ? (
                <>
                    <p>
                        Обрано медзаклад: <strong>{item.name}</strong> ({item.district}) —{' '}
                        <ClinicStatusBadge isOpenToday={item.isOpenToday} />
                    </p>
                    <AppointmentFormPreview
                        idPrefix="appointment-preview"
                        clinicName={item.name}
                    />
                </>
            ) : (
                <EmptyState title="Не обрано поліклініку для запису">
                    <p><a href="#catalog">Перейти до списку поліклінік та обрати заклад</a></p>
                </EmptyState>
            )}
        </Section>
    );
}