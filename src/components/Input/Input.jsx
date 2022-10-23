import "./Input.css";

const Input = ({
  value,
  onChange,
  type = "text",
  placeholder,
  id,
  label,
  minLength,
  maxLength,
}) => {
  return (
    <div className="input-grp">
      {label && id === "workSpaceURL" ? (
        <div className="form-label-field">
          <label className="form-label" htmlFor={id}>
            {label}
          </label>
          <span
            style={{
              fontSize: "1rem",
              marginLeft: ".2rem",
              color: "var(--color-primary-text-medium)",
            }}
          >
            (optional)
          </span>
        </div>
      ) : (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      {id === "workSpaceURL" ? (
        <div className="workspaceURL-input">
          <div className="workspaceURL-link-tab">www.eden.com/</div>
          <input
            className="workspaceURL-inputfield"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            id={id}
            minLength={minLength}
            maxLength={maxLength}
            autoComplete="off"
          />
        </div>
      ) : (
        <input
          className="form-field"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          id={id}
          minLength={minLength}
          maxLength={maxLength}
          required
          autoComplete="off"
        />
      )}
    </div>
  );
};

export { Input };
