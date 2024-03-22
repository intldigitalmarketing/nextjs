import { Field, ErrorMessage } from 'formik';
import TextError from './text-error';

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="">
      <label
        htmlFor={name}
        className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      <Field
        as="select"
        name={name}
        id={name}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        {...rest}
      >
        <option value=""></option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
