import AppButton from '../ui/AppButton.jsx';
import FormField from '../ui/FormField.jsx';

export default function AppointmentFormPreview({ idPrefix, clinicName }) {
    const clinicId = `${idPrefix}-clinic`;
    const patientId = `${idPrefix}-patient`;
    const reasonId = `${idPrefix}-reason`;
    const noticeId = `${idPrefix}-notice`;

    return (
        <form
            aria-label="Макет запису на прийом"
            aria-describedby={noticeId}
            onSubmit={(event) => event.preventDefault()}
        >
            <FormField id={clinicId} label="Вибраний медзаклад міста">
                <input
                    id={clinicId}
                    name="clinicName"
                    value={clinicName}
                    readOnly
                />
            </FormField>

            <FormField
                id={patientId}
                label="Прізвище, ім'я та по батькові пацієнта"
                hint="Вкажіть дані згідно з підписаною декларацією."
            >
                <input
                    type="text"
                    name="patientName"
                    id={patientId}
                    defaultValue=""
                    placeholder="напр. Гринчишин Михайло Володимирович"
                    aria-describedby={`${patientId}-hint`}
                />
            </FormField>

            <FormField
                id={reasonId}
                label="Причина звернення / Спеціалізація лікаря"
                hint="Вкажіть скарги або потрібного лікаря (терапевт, кардіолог тощо)."
            >
        <textarea
            name="reason"
            id={reasonId}
            defaultValue=""
            rows={3}
            aria-describedby={`${reasonId}-hint`}
        />
            </FormField>

            <div className="form-actions">
                <AppButton type="reset" variant="secondary">
                    Очистити поля
                </AppButton>
                <AppButton disabled>
                    Запис буде доступний у наступній версії
                </AppButton>
            </div>
        </form>
    );
}