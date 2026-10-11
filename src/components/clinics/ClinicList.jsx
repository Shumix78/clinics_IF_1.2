import ClinicCard from './ClinicCard.jsx';
import EmptyState from '../ui/EmptyState.jsx';

export default function ClinicList({ items }) {
    if (items.length === 0) {
        return (
            <EmptyState title="Поліклінік за вашим запитом не знайдено">
                <p>Перевірте параметри фільтрації або поверніться до повного списку медзакладів міста.</p>
            </EmptyState>
        );
    }

    return (
        <ul className="clinic-grid">
            {items.map((clinic) => (
                <li key={clinic.id}>
                    <ClinicCard item={clinic} />
                </li>
            ))}
        </ul>
    );
}