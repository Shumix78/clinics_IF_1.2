import AppLayout from './components/layout/AppLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AppointmentPage from './pages/AppointmentPage.jsx';
import { clinics } from './data/clinics.js';

const navigationLinks = [
    { href: '#about', label: 'Про сервіс' },
    { href: '#catalog', label: 'Поліклініки' },
    { href: '#appointment', label: 'Запис на прийом' },
];

export default function App() {
    // Для статичної демонстрації макета передаємо перший медзаклад
    const demoClinic = clinics.find((c) => c.id === 'if-pol-1');

    return (
        <AppLayout title="Поліклініки Івано-Франківська" links={navigationLinks}>
            <HomePage />
            <AppointmentPage item={demoClinic} />
        </AppLayout>
    );
}