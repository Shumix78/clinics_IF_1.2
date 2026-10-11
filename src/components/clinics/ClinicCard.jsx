import ClinicStatusBadge from './ClinicStatusBadge.jsx';

export default function ClinicCard({ item }) {
    return (
        <article className="clinic-card">
            <h3>{item.name}</h3>
            <p className="address"><strong>Адреса:</strong> {item.address}</p>
            <p className="phone"><strong>Тел. реєстратури:</strong> {item.phone}</p>
            <p>{item.description}</p>
            <div className="card-status">
                <ClinicStatusBadge isOpenToday={item.isOpenToday} />
            </div>
        </article>
    );
}