export const FormInput = ({ name, label, type, ...props }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>

            {type === 'textarea' ? (
                <textarea
                    id={name}
                    className="form-control"
                    rows={props.rows ?? 5}
                    {...props}
                />
            ) : (
                <input
                    id={name}
                    type={type ?? 'text'}
                    className="form-control"
                    {...props}
                />
            )}
        </div>
    );
};
